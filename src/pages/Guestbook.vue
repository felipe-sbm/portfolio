<template>
  <div class="guestbook">
    <section class="intro">
      <h6 class="eyebrow">{{ t('guestbook.eyebrow') }}</h6>
      <h1>{{ t('guestbook.title') }}</h1>
      <p>{{ t('guestbook.subtitle') }}</p>
      <div v-if="!isAuthenticated" class="auth-section">
        <small>{{ t('guestbook.authHintLoggedOut') }}</small>
      </div>
      <div v-if="isAuthenticated" class="auth-section">
        <small>{{ t('guestbook.authHintLoggedIn') }}</small>
      </div>
    </section>

    <section class="comment-form">
      <div v-if="!isAuthenticated" class="auth-section">
        <button @click="loginWithGitHub" class="github-btn">
          {{ t('guestbook.continueWithGitHub') }}
        </button>
      </div>

      <div v-else class="auth-info">
        <div class="user-chip">
          <img :src="user?.photoURL || ProfilePicture" :alt="String(t('guestbook.profileAlt'))" class="profile-picture" />
          <small>{{ user?.displayName }}</small>
        </div>
        <button @click="logout" class="logout-btn">{{ t('guestbook.logout') }}</button>
      </div>

      <textarea
        v-model="newComment.content"
        :placeholder="String(t('guestbook.textareaPlaceholder'))"
        :disabled="!isAuthenticated"
      ></textarea>

      <div class="composer-footer">
        <small>{{ isAuthenticated ? t('guestbook.publicMessage') : t('guestbook.loginRequired') }}</small>
        <button @click="submitComment" :disabled="!isAuthenticated || !newComment.content.trim()">
          {{ t('guestbook.postMessage') }}
        </button>
      </div>
    </section>

    <p v-if="error" class="state-card error">{{ error }}</p>

    <div v-if="isLoading" class="state-card">{{ t('common.loading') }}</div>
    <div v-else>
      <div v-if="comments.length === 0" class="state-card no-comments">
        {{ t('guestbook.noComments') }} <span>{{ t('guestbook.beFirst') }}</span>
      </div>

      <div v-else class="comments-list">
        <article v-for="comment in comments" :key="comment.id" class="comment">
          <img
            :src="comment.photoURL || ProfilePicture"
            :alt="String(t('guestbook.commentProfileAlt', { name: comment.username }))"
            class="profile-picture"
          />
          <div class="comment-body">
            <div class="comment-header">
              <a
                v-if="comment.githubUrl"
                :href="comment.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="author-link"
              >
                {{ comment.username }}
              </a>
              <span v-else class="author-name">{{ comment.username }}</span>
              <span class="comment-date">
                {{ formatDate(comment.createdAt) }}
              </span>
            </div>
            <p class="comment-content">{{ comment.content }}</p>
            <div class="comment-actions">
              <button
                class="reaction-btn"
                :class="{ active: userVotes[comment.id] === 'up' }"
                @click="reactToComment(comment.id, 'up')"
                :disabled="userVotes[comment.id] === 'up'"
              >
                <img :src="ThumbsUp" :alt="String(t('guestbook.thumbsUpAlt'))" />
                <span>{{ comment.thumbsUp ?? 0 }}</span>
              </button>
              <button
                class="reaction-btn"
                :class="{ active: userVotes[comment.id] === 'down' }"
                @click="reactToComment(comment.id, 'down')"
                :disabled="userVotes[comment.id] === 'down'"
              >
                <img :src="ThumbsDown" :alt="String(t('guestbook.thumbsDownAlt'))" />
                <span>{{ comment.thumbsDown ?? 0 }}</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GuestbookComponent } from '@/services/GuestbookService';
import { useI18n } from '@/i18n';
import ProfilePicture from '@/assets/images/pfp.webp';
import ThumbsUp from '@/assets/icons/thumbs-up.svg';
import ThumbsDown from '@/assets/icons/thumbs-down.svg';

export default defineComponent({
  extends: GuestbookComponent,
  setup() {
    const { t } = useI18n();
    return { t };
  },
  data() {
    return {
      ProfilePicture,
      ThumbsUp,
      ThumbsDown,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.state-card,
.comment {
  border: 2px solid var(--color-border-strong);
  border-radius: 1.5rem;
  backdrop-filter: blur(18px) saturate(140%);
  background-color: var(--color-surface-elevated);
  box-shadow:
    0 1px 6px rgba(255, 255, 255, 0.29) inset,
    var(--shadow-soft);
}

.intro {
  margin-bottom: 1rem;
}

.comment-form {
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  margin-bottom: 1rem;

  .auth-section,
  .auth-info {
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 0.95rem;
  }

  .auth-section {
    p {
      margin: 0 0 0.75rem;
      line-height: 1.35;
      font-size: 0.92rem;
    }
  }

  .auth-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
  }

  .user-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    background: var(--color-surface-soft);
    border-radius: 999px;
    border: 1px solid var(--color-border);
    padding: 0.3rem 0.75rem 0.3rem 0.3rem;
    min-width: 0;

    small {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .profile-picture {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid var(--color-border);
  }

  textarea {
    border: 1px solid var(--color-border);
    background-color: color-mix(
      in srgb,
      var(--color-surface-elevated) 90%,
      transparent
    );
    color: var(--color-text);
    border-radius: 1rem;
    min-height: 8.2rem;
    resize: vertical;
    padding: 0.85rem 1rem;
    font-size: 0.97rem;
    line-height: 1.45;
    outline: none;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      opacity 0.2s ease;

    &::placeholder {
      color: var(--color-text-muted);
    }

    &:focus {
      border-color: var(--color-brand-primary);
      box-shadow: 0 0 0 4px
        color-mix(in srgb, var(--color-brand-primary) 20%, transparent);
    }

    &:disabled {
      opacity: 0.58;
      cursor: not-allowed;
    }
  }

  .composer-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;

    small {
      font-size: 0.82rem;
    }
  }
}

.state-card {
  padding: 1rem 1.25rem;
  text-align: center;
  margin-bottom: 1rem;

  &.error {
    font-weight: 500;
  }

  &.no-comments span {
    font-weight: 600;
  }
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.comment {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 0.85rem;
  border-radius: 1.25rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  .profile-picture {
    width: 2.7rem;
    height: 2.7rem;
    min-width: 2.7rem;
    border-radius: 50%;
    border: 1px solid var(--color-border);
    object-fit: cover;
    margin-top: 0.1rem;
  }

  .comment-body {
    min-width: 0;
    width: 100%;
  }

  .comment-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
    margin-bottom: 0.35rem;
  }

  .author-link,
  .author-name {
    font-weight: 600;
    text-decoration: none;
    letter-spacing: -0.01em;
    color: var(--color-text-strong);
  }

  .comment-date {
    font-size: 0.78rem;
    white-space: nowrap;
  }

  .comment-content {
    margin: 0;
    color: var(--color-text);
    line-height: 1.5;
    word-break: break-word;
  }

  .comment-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.65rem;
  }
}

.reaction-btn,
.github-btn,
.logout-btn,
.composer-footer button {
  border: 1px solid transparent;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.github-btn,
.composer-footer button {
  background: linear-gradient(
    180deg,
    var(--color-brand-primary),
    color-mix(in srgb, var(--color-brand-primary) 80%, #000)
  );
  color: white;
  padding: 0.55rem 1rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
    transform: none;
  }
}

.logout-btn,
.reaction-btn {
  background: var(--color-surface-soft);
  border-color: var(--color-border);
  color: var(--color-text-strong);

  &:hover {
    border-color: var(--color-brand-primary);
    color: var(--color-brand-primary);
  }
}

.logout-btn {
  padding: 0.45rem 0.95rem;
}

.reaction-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.35rem 0.65rem;

  img {
    width: 0.9rem;
    height: 0.9rem;
  }

  &.active {
    border-color: var(--color-brand-primary);
  }
}

@media (max-width: 720px) {
  .comment-form {
    .auth-info {
      flex-direction: column;
      align-items: stretch;
    }

    .composer-footer {
      flex-direction: column;
      align-items: stretch;

      button {
        width: 100%;
      }
    }
  }

  .comment {
    gap: 0.7rem;
    padding: 0.75rem;

    .comment-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
    }
  }
}
</style>
