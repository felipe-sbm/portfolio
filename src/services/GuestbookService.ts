import { defineComponent } from 'vue';

interface Comment {
  id: number;
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

const API_URL = 'http://localhost:5044/api/Guestbook';

async function fetchComments(): Promise<Comment[]> {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error(`Erro HTTP! status: ${response.status}`);
  return await response.json();
}

async function addComment(comment: Omit<Comment, 'id' | 'createdAt'>): Promise<Comment> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment)
  });
  if (!response.ok) throw new Error('Erro ao enviar comentário');
  return await response.json();
}

async function deleteAllComments(): Promise<void> {
  const response = await fetch(API_URL, { method: 'DELETE' });
  if (!response.ok) throw new Error('Erro ao apagar comentários');
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function handleError(error: unknown, defaultMessage: string): string {
  return error instanceof Error 
    ? `${defaultMessage}: ${error.message}`
    : `${defaultMessage}: Erro desconhecido`;
}

export const GuestbookComponent = defineComponent({
  name: 'Guestbook',
  data(): ComponentState {
    return {
      comments: [],
      newComment: { username: '', content: '' },
      isLoading: false,
      error: null
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
    }
  }
});