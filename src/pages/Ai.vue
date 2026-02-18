<template>
  <div class="ai-page">
    <main class="workspace">
      <div class="messages" ref="messagesContainerRef">
        <p v-if="!messages.length" class="empty">
          Faça uma pergunta para iniciar a conversa.
        </p>

        <article
          v-for="(message, index) in messages"
          :key="`${message.role}-${index}-${message.content.slice(0, 12)}`"
          :class="['message', `message--${message.role}`]"
        >
          <span class="message__role">{{
            message.role === "user" ? "Você" : "GPT-OSS-120B"
          }}</span>
          <p class="message__content">{{ message.content }}</p>
        </article>
      </div>

      <div
        class="composer-shell"
        :class="{ 'composer-shell--floating': !messages.length }"
      >
        <textarea
          v-model="input"
          class="composer-input"
          placeholder="Write down here..."
          rows="2"
          :disabled="isLoading"
          @keydown.enter.exact.prevent="sendMessage"
        ></textarea>

        <div class="composer-tools" aria-hidden="true">
          <div class="composer-tools__left">
            <div class="ticker" aria-hidden="true">
              <span class="ticker__track">
                <span v-if="!errorMessage" class="ticker__item">
                  AI made by Human, not by another AI.
                </span>
                <span v-if="!errorMessage" class="ticker__item">
                  AI made by Human, not by another AI.
                </span>
                <!-- Se tiver algum erro, vai exibir da mesma forma 👍-->
                <span v-if="errorMessage" class="ticker__item">
                  {{ errorMessage }}
                </span>
                <span v-if="errorMessage" class="ticker__item">
                  {{ errorMessage }}
                </span>
              </span>
            </div>
          </div>
          <button
            type="button"
            :disabled="isLoading || !trimmedInput"
            @click="sendMessage"
          >
            <CornerDownRight :size="14" />
            {{ isLoading ? "Thinking..." : "Send" }}
          </button>
        </div>
      </div>

      <div class="actions" :class="{ 'actions--floating': !messages.length }">
        <small v-if="errorMessage" class="error">{{ errorMessage }}</small>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
import { CornerDownRight } from "lucide-vue-next";
import { askChatbot, type ChatMessage } from "@/services/ChatbotService";

// Variáveis para o funcionamento do chat
const input = ref("");
const isLoading = ref(false);
const errorMessage = ref("");
const messages = ref<ChatMessage[]>([]);
const messagesContainerRef = ref<HTMLElement | null>(null);

const trimmedInput = computed(() => input.value.trim());

function scrollToBottom() {
  const container = messagesContainerRef.value;
  if (!container) return;
  container.scrollTop = container.scrollHeight;
}

// Enviar menssagem
async function sendMessage() {
  if (isLoading.value || !trimmedInput.value) return;

  errorMessage.value = "";

  const userMessage: ChatMessage = {
    role: "user",
    content: trimmedInput.value,
  };

  messages.value.push(userMessage);
  input.value = "";
  await nextTick();
  scrollToBottom();

  isLoading.value = true;

  try {
    const answer = await askChatbot(messages.value);

    messages.value.push({
      role: "assistant",
      content: answer,
    });
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : "Erro ao responder.";
  } finally {
    isLoading.value = false;
    await nextTick();
    scrollToBottom();
  }
}
</script>

<style scoped lang="scss">
@use "@/style.scss" as *;

.ai-page {
  max-width: 1320px;
  min-height: calc(100dvh - 6rem);
  margin: 0 auto;
  padding: 1rem;

  .workspace {
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto auto;
    min-height: 100%;
    padding: 0.9rem 1.1rem 1.5rem;
  }

  .messages {
    min-height: 0;
    overflow-y: auto;
    padding: 1.2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    scrollbar-width: thin;
  }

  .empty {
    margin: auto;
    opacity: 0.6;
    font-size: 0.96rem;
  }

  .message {
    max-width: 85%;
    padding: 0.8rem 0.95rem;
    border-radius: 14px;
    border: 1px solid var(--color-border);
    background: var(--color-surface-elevated);
    white-space: pre-wrap;
  }

  .message--user {
    align-self: flex-end;
    background: var(--color-surface);
  }

  .message--assistant {
    align-self: flex-start;
    background: var(--color-surface-elevated);
  }

  .message__role {
    display: inline-block;
    margin-bottom: 0.35rem;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    opacity: 0.65;
  }

  .message__content {
    margin: 0;
    line-height: 1.45;
  }

  .composer-shell {
    width: min(34rem, 100%);
    margin: 0 auto;
    box-sizing: border-box;
    border: 2px solid var(--color-border);
    border-radius: 34px;
    background: var(--color-surface-elevated);
    box-shadow: var(--shadow-soft);
    padding: 0.8rem 0.75rem 0.7rem;
    transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .composer-input {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    border: 0;
    min-height: 78px;
    max-height: 160px;
    padding: 0.6rem 0.95rem 0.35rem;
    font: inherit;
    font-size: 1.05rem;
    background: transparent;
    color: inherit;
  }

  .composer-input:focus {
    outline: none;
  }

  .composer-tools {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    column-gap: 0.55rem;
    padding: 0 0.9rem 0.15rem;
  }

  .composer-tools__left {
    display: flex;
    align-items: center;
    min-width: 0;
    gap: 0.65rem;
  }

  .actions--floating,
  .composer-shell--floating {
    transform: translateY(22vh);
  }

  .actions {
    width: min(40rem, 100%);
    margin: 0.55rem auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.6rem;
    transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .error {
    color: var(--color-brand-secondary);
    font-size: 0.84rem;
  }

  button {
    width: 118px;
    min-width: 118px;
    height: 46px;
    border: 0;
    border-radius: 10rem;
    padding: 0 1rem;
    font: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.35rem;
    cursor: pointer;
    background: var(--color-button-bg);
    color: var(--color-button-text);
    flex: 0 0 auto;
  }

  button:hover {
    filter: brightness(1.08);
    transition: 120ms ease-in;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media (max-width: 900px) {
    padding: 0.5rem;

    .workspace {
      padding: 0.55rem 0.35rem 0.75rem;
    }

    .messages {
      padding: 0.75rem 0.25rem;
    }

    .message {
      max-width: 92%;
    }

    .composer-shell {
      width: 100%;
      max-width: 100%;
      border-radius: 24px;
      padding: 0.5rem 0.42rem 0.45rem;
    }

    .composer-input {
      min-height: 52px;
      max-height: 110px;
      font-size: 0.95rem;
      padding: 0.32rem 0.5rem 0.24rem;
    }

    .composer-tools {
      column-gap: 0.35rem;
      padding: 0 0.1rem 0.02rem;
    }

    .composer-shell--floating,
    .actions--floating {
      transform: translateY(50vh);
    }

    .actions {
      margin-top: 0.4rem;
    }
  }

  @media (max-width: 480px) {
    .composer-tools {
      gap: 0.45rem;
    }

    .composer-tools__left {
      flex: 1;
    }

    .ticker {
      width: 100%;
      min-width: 0;
      max-width: 100%;
      height: 40px;
    }

    .ticker__item {
      font-size: 0.68rem;
      padding-right: 1rem;
    }

    button {
      width: 106px;
      min-width: 106px;
      height: 40px;
      padding: 0 0.55rem;
      gap: 0.25rem;
    }

    .actions--floating,
    .composer-shell--floating {
      transform: translateY(50vh);
    }
  }
}
</style>
