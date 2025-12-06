import { defineComponent } from 'vue';

interface Comment {
  id: string;
  username: string;
  content: string;
  createdAt: string;
}

interface ComponentState {
  comments: Comment[];
  newComment: {
    username: string;
    content: string;
  };
  isLoading: boolean;
  error: string | null;
}

const FIREBASE_BASE = 'https://portifolio-sbm-default-rtdb.firebaseio.com';
const COMMENTS_PATH = `${FIREBASE_BASE}/comments`;

async function fetchComments(): Promise<Comment[]> {
  const response = await fetch(`${COMMENTS_PATH}.json`);
  if (!response.ok) throw new Error(`Erro HTTP! status: ${response.status}`);
  const data = await response.json();
  if (!data) return [];

  return Object.keys(data).map((key) => ({
    id: key,
    username: data[key].username,
    content: data[key].content,
    createdAt: data[key].createdAt,
  }));
}

async function addComment(comment: Omit<Comment, 'id' | 'createdAt'>): Promise<Comment> {
  const payload = { ...comment, createdAt: new Date().toISOString() };
  const response = await fetch(`${COMMENTS_PATH}.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error('Erro ao enviar comentário');
  const data = await response.json();
  return { id: data.name, username: payload.username, content: payload.content, createdAt: payload.createdAt };
}

async function deleteAllComments(): Promise<void> {
  const response = await fetch(`${COMMENTS_PATH}.json`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Erro ao apagar comentários');
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function handleError(error: unknown, defaultMessage: string): string {
  return error instanceof Error ? `${defaultMessage}: ${error.message}` : `${defaultMessage}: Erro desconhecido`;
}

export const GuestbookComponent = defineComponent({
  name: 'Guestbook',
  data(): ComponentState {
    return {
      comments: [],
      newComment: { username: '', content: '' },
      isLoading: false,
      error: null,
    };
  },
  async created() {
    await this.loadData();
  },
  methods: {
    formatDate,
    async loadData() {
      this.isLoading = true;
      try {
        this.comments = await fetchComments();
      } catch (error) {
        this.error = handleError(error, 'Erro ao carregar');
      } finally {
        this.isLoading = false;
      }
    },
    async submitComment() {
      if (!this.newComment.username.trim() || !this.newComment.content.trim()) {
        this.error = 'Preencha todos os campos';
        return;
      }

      this.isLoading = true;
      try {
        await addComment(this.newComment);
        this.newComment = { username: '', content: '' };
        await this.loadData();
      } catch (error) {
        this.error = handleError(error, 'Erro ao enviar');
      } finally {
        this.isLoading = false;
      }
    },
    async deleteAll() {
      if (!confirm('Apagar todos os comentários?')) return;

      this.isLoading = true;
      try {
        await deleteAllComments();
        this.comments = [];
      } catch (error) {
        this.error = handleError(error, 'Erro ao apagar');
      } finally {
        this.isLoading = false;
      }
    },
  },
});