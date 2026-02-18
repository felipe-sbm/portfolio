import { defineComponent } from 'vue';
import { getIntlLocale, t } from '@/i18n';

interface Comment {
  id: string;
  username: string;
  content: string;
  createdAt: string;
  photoURL?: string;
  githubUrl?: string;
  thumbsUp?: number;
  thumbsDown?: number;
}

interface ComponentState {
  comments: Comment[];
  newComment: {
    content: string;
  };
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  user: { uid: string; displayName?: string; email?: string; photoURL?: string; githubUrl?: string } | null;
  userVotes: Record<string, 'up' | 'down'>;
  lastCommentAt: number | null;
}

const firebaseBaseRaw = import.meta.env.VITE_FIREBASE_DATABASE_URL;
if (!firebaseBaseRaw) {
  throw new Error('[Guestbook] Missing required env var: VITE_FIREBASE_DATABASE_URL');
}

const FIREBASE_BASE = firebaseBaseRaw.replace(/\/+$/, '');
const COMMENTS_PATH = `${FIREBASE_BASE}/comments`;
const VOTES_PATH = `${FIREBASE_BASE}/votes`;
const LOGIN_SESSION_KEY = 'guestbook:loginSession';
const LOGIN_SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

let commentsCache: Comment[] | null = null;

interface CachedLoginSession {
  expiresAt: number;
}

function tx(key: string, params?: Record<string, string | number>): string {
  const value = t(key, params);
  return typeof value === 'string' ? value : key;
}

function readLoginSession(): CachedLoginSession | null {
  if (typeof localStorage === 'undefined') return null;
  const raw = localStorage.getItem(LOGIN_SESSION_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as CachedLoginSession;
    if (!parsed || typeof parsed.expiresAt !== 'number') return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeLoginSession() {
  if (typeof localStorage === 'undefined') return;
  const session: CachedLoginSession = {
    expiresAt: Date.now() + LOGIN_SESSION_TTL_MS,
  };
  localStorage.setItem(LOGIN_SESSION_KEY, JSON.stringify(session));
}

function clearLoginSession() {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(LOGIN_SESSION_KEY);
}

function sortCommentsByNewest(comments: Comment[]): Comment[] {
  return [...comments].sort((a, b) => {
    const aTime = new Date(a.createdAt).getTime();
    const bTime = new Date(b.createdAt).getTime();
    return bTime - aTime;
  });
}

async function fetchComments(): Promise<Comment[]> {
  const url = `${COMMENTS_PATH}.json`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${tx('guestbookService.httpError')}! status: ${response.status}`);
  const data = await response.json();
  if (!data) return [];

  const comments = Object.keys(data).map((key) => ({
    id: key,
    username: data[key].username,
    content: data[key].content,
    createdAt: data[key].createdAt,
    photoURL: data[key].photoURL,
    githubUrl: data[key].githubUrl,
    thumbsUp: data[key].thumbsUp ?? 0,
    thumbsDown: data[key].thumbsDown ?? 0,
  }));

  return sortCommentsByNewest(comments);
}

async function addComment(comment: Omit<Comment, 'id' | 'createdAt'>, authToken?: string): Promise<Comment> {
  const payload = { ...comment, createdAt: new Date().toISOString(), thumbsUp: 0, thumbsDown: 0 };
  const url = authToken ? `${COMMENTS_PATH}.json?auth=${authToken}` : `${COMMENTS_PATH}.json`;
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`${tx('guestbookService.sendError')}: ${response.status} ${errText}`);
  }

  const data = await response.json();
  return {
    id: data.name,
    username: payload.username,
    content: payload.content,
    createdAt: payload.createdAt,
    photoURL: payload.photoURL,
    githubUrl: payload.githubUrl,
    thumbsUp: 0,
    thumbsDown: 0,
  };
}

async function patchComment(commentId: string, changes: Partial<Comment>, authToken?: string): Promise<void> {
  const url = authToken ? `${COMMENTS_PATH}/${commentId}.json?auth=${authToken}` : `${COMMENTS_PATH}/${commentId}.json`;
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };

  const response = await fetch(url, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(changes),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`${tx('guestbookService.updateReactionError')}: ${response.status} ${errText}`);
  }
}

async function setUserVote(uid: string, commentId: string, reaction: 'up' | 'down', authToken?: string): Promise<void> {
  const url = authToken ? `${VOTES_PATH}/${uid}/${commentId}.json?auth=${authToken}` : `${VOTES_PATH}/${uid}/${commentId}.json`;
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };

  const response = await fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(reaction),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`${tx('guestbookService.saveVoteError')}: ${response.status} ${errText}`);
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString(getIntlLocale(), {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function handleError(error: unknown, defaultMessage: string): string {
  return error instanceof Error ? `${defaultMessage}: ${error.message}` : `${defaultMessage}: ${tx('guestbookService.unknownError')}`;
}

export const GuestbookComponent = defineComponent({
  name: 'Guestbook',
  data(): ComponentState {
    return {
      comments: [],
      newComment: { content: '' },
      isLoading: false,
      error: null,
      isAuthenticated: false,
      user: null,
      userVotes: {},
      lastCommentAt: null,
    };
  },
  async created() {
    await this.restoreAuthSession();
    await this.loadData();
  },
  methods: {
    formatDate,
    async loadUserVotes() {
      if (!this.user?.uid) return;
      try {
        const { getAuthToken } = await import('./FirebaseAuth');
        const token = await getAuthToken();
        if (!token) return;
        const url = `${VOTES_PATH}/${this.user.uid}.json?auth=${token}`;
        const response = await fetch(url);
        if (!response.ok) return;
        const data = await response.json();
        this.userVotes = data || {};
      } catch {
        // ignored intentionally
      }
    },
    getLastCommentTimestamp(): number | null {
      if (!this.user?.uid || typeof localStorage === 'undefined') return this.lastCommentAt;
      const stored = localStorage.getItem(`guestbook:lastCommentAt:${this.user.uid}`);
      return stored ? Number(stored) : this.lastCommentAt;
    },
    setLastCommentTimestamp(ts: number) {
      this.lastCommentAt = ts;
      if (this.user?.uid && typeof localStorage !== 'undefined') {
        localStorage.setItem(`guestbook:lastCommentAt:${this.user.uid}`, String(ts));
      }
    },
    async loadData() {
      this.isLoading = true;
      try {
        if (commentsCache) {
          this.comments = sortCommentsByNewest(commentsCache);
          return;
        }

        this.comments = await fetchComments();
        commentsCache = sortCommentsByNewest(this.comments);
      } catch (error) {
        this.error = handleError(error, tx('guestbookService.loadError'));
      } finally {
        this.isLoading = false;
      }
    },
    async submitComment() {
      if (!this.newComment.content.trim()) {
        this.error = tx('guestbookService.emptyComment');
        return;
      }

      if (!this.isAuthenticated || !this.user) {
        this.error = tx('guestbookService.loginToComment');
        return;
      }

      const lastTs = this.getLastCommentTimestamp();
      const now = Date.now();
      const windowMs = 15 * 60 * 1000;
      if (lastTs && now - lastTs < windowMs) {
        const remainingMs = windowMs - (now - lastTs);
        const remainingMin = Math.ceil(remainingMs / 60000);
        this.error = `${tx('guestbookService.cooldownPrefix')} ${remainingMin} ${tx('guestbookService.cooldownSuffix')}`;
        return;
      }

      this.isLoading = true;
      try {
        const { getAuthToken } = await import('./FirebaseAuth');
        const token = await getAuthToken();

        const username = this.user?.displayName || this.user?.email || tx('guestbookService.anonymous');
        const commentWithUsername = {
          ...this.newComment,
          username,
          photoURL: this.user?.photoURL,
          githubUrl: this.user?.githubUrl,
        };

        await addComment(commentWithUsername, token || undefined);
        this.newComment = { content: '' };
        this.error = null;
        this.setLastCommentTimestamp(Date.now());
        commentsCache = null;
        await this.loadData();
      } catch (error) {
        this.error = handleError(error, tx('guestbookService.submitError'));
      } finally {
        this.isLoading = false;
      }
    },

    async reactToComment(commentId: string, type: 'up' | 'down') {
      if (!this.isAuthenticated || !this.user) {
        this.error = tx('guestbookService.loginToReact');
        return;
      }

      const index = this.comments.findIndex((c) => c.id === commentId);
      if (index === -1) return;

      const current = this.comments[index];
      const prevVote = this.userVotes[commentId];
      if (prevVote === type) return;

      const thumbsUp = current.thumbsUp ?? 0;
      const thumbsDown = current.thumbsDown ?? 0;

      let newUp = thumbsUp;
      let newDown = thumbsDown;

      if (prevVote === 'up') newUp = Math.max(0, newUp - 1);
      if (prevVote === 'down') newDown = Math.max(0, newDown - 1);

      if (type === 'up') newUp += 1;
      else newDown += 1;

      this.comments[index] = { ...current, thumbsUp: newUp, thumbsDown: newDown };
      commentsCache = [...this.comments];
      this.userVotes = { ...this.userVotes, [commentId]: type };

      try {
        const { getAuthToken } = await import('./FirebaseAuth');
        const token = await getAuthToken();
        await Promise.all([
          patchComment(commentId, { thumbsUp: newUp, thumbsDown: newDown }, token || undefined),
          this.user?.uid ? setUserVote(this.user.uid, commentId, type, token || undefined) : Promise.resolve(),
        ]);
      } catch (error) {
        this.comments[index] = current;
        commentsCache = [...this.comments];

        if (prevVote) {
          const rollbackVotes = { ...this.userVotes };
          rollbackVotes[commentId] = prevVote;
          this.userVotes = rollbackVotes;
        }

        this.error = handleError(error, tx('guestbookService.reactError'));
      }
    },

    async loginWithGitHub() {
      try {
        const { signInWithGitHub } = await import('./FirebaseAuth');
        const result = await signInWithGitHub();
        const user = result.user;
        this.user = {
          uid: user.uid,
          displayName: user.displayName || undefined,
          email: user.email || undefined,
          photoURL: user.photoURL || undefined,
          githubUrl: result.githubProfileUrl || undefined,
        };
        this.isAuthenticated = true;
        this.error = null;
        writeLoginSession();
        await this.loadUserVotes();
      } catch (error) {
        this.error = handleError(error, tx('guestbookService.logoutError'));
      }
    },

    async logout() {
      try {
        const { getAuthInstance } = await import('./FirebaseAuth');
        await getAuthInstance().signOut();
        clearLoginSession();
        this.user = null;
        this.isAuthenticated = false;
        this.newComment = { content: '' };
        this.userVotes = {};
        this.lastCommentAt = null;
      } catch (error) {
        this.error = handleError(error, tx('guestbookService.loginError'));
      }
    },

    async restoreAuthSession() {
      const session = readLoginSession();
      if (!session) return;

      if (session.expiresAt <= Date.now()) {
        clearLoginSession();
        this.user = null;
        this.isAuthenticated = false;
        this.userVotes = {};
        this.lastCommentAt = null;
        const { getAuthInstance } = await import('./FirebaseAuth');
        await getAuthInstance().signOut();
        return;
      }

      const { getCurrentUser } = await import('./FirebaseAuth');
      const currentUser = getCurrentUser();
      if (!currentUser) {
        clearLoginSession();
        return;
      }

      this.user = {
        uid: currentUser.uid,
        displayName: currentUser.displayName || undefined,
        email: currentUser.email || undefined,
        photoURL: currentUser.photoURL || undefined,
      };
      this.isAuthenticated = true;
      await this.loadUserVotes();
    },
  },
});
