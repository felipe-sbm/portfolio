<template>
  <div class="guestbook">
    <section class="intro">
      <h1>Guestbook</h1>
      <p>Leave a thoughtful message. It will stay here as part of this portfolio story.</p>
      <small>Please keep it respectful and kind. 😭🙏</small>
    </section>

    <section class="comment-form">
      <div v-if="!isAuthenticated" class="auth-section">
        <p>Sign in with GitHub to post and react to comments.</p>
        <button @click="loginWithGitHub" class="github-btn">
          Continue with GitHub
        </button>
      </div>

      <div v-else class="auth-info">
        <div class="user-chip">
          <img :src="user?.photoURL || ProfilePicture" alt="Your profile picture" class="profile-picture" />
          <small>{{ user?.displayName }}</small>
        </div>
        <button @click="logout" class="logout-btn">Log out</button>
      </div>

      <textarea v-model="newComment.content" placeholder="Share a memory, thought, or feedback..."
        :disabled="!isAuthenticated"></textarea>

      <div class="composer-footer">
        <small>{{ isAuthenticated ? "Your message is public." : "Login required to post." }}</small>
        <button @click="submitComment" :disabled="!isAuthenticated || !newComment.content.trim()">
          Post message
        </button>
      </div>
    </section>

    <p v-if="error" class="state-card error">{{ error }}</p>

    <div v-if="isLoading" class="state-card">Loading comments...</div>
    <div v-else>
      <div v-if="comments.length === 0" class="state-card no-comments">
        No comments yet. <span>Be the first to write one.</span>
      </div>

      <div v-else class="comments-list">
        <article v-for="comment in comments" :key="comment.id" class="comment">
          <img :src="comment.photoURL || ProfilePicture" :alt="`Profile picture of ${comment.username}`"
            class="profile-picture" />
          <div class="comment-body">
            <div class="comment-header">
              <a v-if="comment.githubUrl" :href="comment.githubUrl" target="_blank" rel="noopener noreferrer"
                class="author-link">
                {{ comment.username }}
              </a>
              <span v-else class="author-name">{{ comment.username }}</span>
              <span class="comment-date">
                {{ formatDate(comment.createdAt) }}
              </span>
            </div>
            <p class="comment-content">{{ comment.content }}</p>
            <div class="comment-actions">
              <button class="reaction-btn" :class="{ active: userVotes[comment.id] === 'up' }"
                @click="reactToComment(comment.id, 'up')" :disabled="userVotes[comment.id] === 'up'">
                <img :src="ThumbsUp" alt="Thumbs up" />
                <span>{{ comment.thumbsUp ?? 0 }}</span>
              </button>
              <button class="reaction-btn" :class="{ active: userVotes[comment.id] === 'down' }"
                @click="reactToComment(comment.id, 'down')" :disabled="userVotes[comment.id] === 'down'">
                <img :src="ThumbsDown" alt="Thumbs down" />
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
import ProfilePicture from "@/assets/images/pfp.webp";
import ThumbsUp from "@/assets/icons/thumbs-up.svg";
import ThumbsDown from "@/assets/icons/thumbs-down.svg";
import { GuestbookComponent } from "@/services/GuestbookService";

export default {
  extends: GuestbookComponent,
  data() {
    return {
      ProfilePicture,
      ThumbsUp,
      ThumbsDown,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.comment-form,
.state-card,
.comment {
  border: 2px solid #F8F2EE;
  border-radius: 1.5rem;
  backdrop-filter: blur(18px) saturate(140%);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.95) inset,
    0 24px 48px rgba(0, 0, 0, 0.08);
}

.intro {
  padding: 1.8rem 0;
  margin-bottom: 1rem;

  h1 {
    margin: 0;
    line-height: 1.03;
    letter-spacing: -0.03em;
    font-weight: 600;
  }

  p {
    margin: 0.65rem 0 0;
    font-size: 1.05rem;
    max-width: 38rem;
    line-height: 1.45;
  }

  small {
    display: inline-block;
    margin-top: 0.75rem;
  }
}

.comment-form {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  margin-bottom: 1rem;

  .auth-section,
  .auth-info {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
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
    background: rgba(0, 0, 0, 0.04);
    border-radius: 999px;
    border: 1px solid rgba(0, 0, 0, 0.06);
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
    border: 1px solid rgba(0, 0, 0, 0.12);
  }

  textarea {
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 1rem;
    min-height: 8.2rem;
    resize: vertical;
    padding: 0.85rem 1rem;
    font-size: 0.97rem;
    line-height: 1.45;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;

    &::placeholder {
      color: rgba(29, 29, 31, 0.45);
    }

    &:focus {
      border-color: rgba(0, 113, 227, 0.65);
      box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.12);
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
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  .profile-picture {
    width: 2.7rem;
    height: 2.7rem;
    min-width: 2.7rem;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.12);
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
    color: $text-color;
  }

  .comment-date {
    font-size: 0.78rem;
    white-space: nowrap;
  }

  .comment-content {
    margin: 0;
    color: $text-color;
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
  background: linear-gradient(180deg, $primary, #26665c);
  color: #fff;
  padding: 0.55rem 1rem;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
    transform: none;
  }
}

.logout-btn {
  background: #00000008;
  border-color: #0000001f;
  padding: 0.45rem 0.85rem;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
}

.reaction-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.28rem;
  padding: 0.32rem 0.65rem;
  background: rgba(white, 0.75);
  border-color: $card-border;
  font-size: 0.82rem;

  img {
    width: 0.9rem;
    height: 0.9rem;
  }

  &:hover:not(:disabled) {
    background: #ececef;
  }

  &.active {
    background: rgba(0, 113, 227, 0.12);
    border-color: rgba(0, 113, 227, 0.35);
  }

  &:disabled {
    cursor: default;
  }
}

@media (max-width: 700px) {
  .guestbook {
    padding-bottom: 1.25rem;
  }

  .intro-card {
    padding: 1.3rem;
  }

  .comment-form {
    padding: 1rem;

    .auth-info {
      flex-direction: column;
      align-items: flex-start;
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
    .comment-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.2rem;
    }
  }
}
</style>
