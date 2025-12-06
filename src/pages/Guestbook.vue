<template>
  <div class="guestbook">
    <div class="main-content">
      <div class="title">
        <h1>
          guestbook
        </h1>
        <p>write something special to be here forever!</p>
        <small>please, <span>don't write inapropriate things.</span></small>
      </div>

      <div class="comment-form">
        <div v-if="!isAuthenticated" class="auth-section">
          <p>Login with GitHub to comment:</p>
          <button @click="loginWithGitHub" class="github-btn">
            Login with github
          </button>
        </div>

        <div v-else class="auth-info">
          <small>Authenticated: {{ user?.displayName || user?.email || 'Anonymous' }}</small>
          <button @click="logout" class="logout-btn">logout</button>
        </div>

        <textarea v-model="newComment.content" placeholder="Bla bla bla bla! Jhon Cena was here..."
          :disabled="!isAuthenticated"></textarea>
        <button @click="submitComment" :disabled="!isAuthenticated || !newComment.content.trim()">
          Enviar
        </button>
      </div>
    </div>

    <div v-if="isLoading">loading...</div>
    <div v-else>
      <div v-if="comments.length === 0" class="no-comments">
        Seems like nobody has commented yet. <span>Be the first!</span>
      </div>

      <div v-else class="comments-list">
        <div v-for="comment in comments" :key="comment.id" class="comment">
          <img :src="comment.photoURL || ProfilePicture" :alt="`Profile picture of ${comment.username}`"
            class="profile-picture" />
          <div class="comment-body">
            <div class="comment-header">
              <a :href="comment.githubUrl" target="_blank" rel="noopener noreferrer">{{ comment.username }}</a>
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
        </div>
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
}
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.guestbook {
  .main-content {
    margin-bottom: 2rem;

    .title {
      max-width: 30rem;

      h1 {
        font-size: 1.75rem;
        font-weight: medium;
        margin: 0;

        span {
          color: $primary;
        }
      }

      p {
        margin: 0;
      }

      small {
        margin-top: 0;

        span {
          color: $secondary;
        }
      }
    }

    .comment-form {
      background-image: $card-background;
      border: 1px solid $border-color;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      border-radius: 1rem;
      max-width: 40rem;
      margin: 1rem auto;

      .auth-section,
      .auth-info {
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid $border-color;
      }

      .auth-section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p {
          margin: 0 0 0.5rem 0;
          font-size: 0.9rem;
        }

        .github-btn {
          padding: 0.5rem 1rem;
          border: 1px solid $border-color;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background-color 0.2s;

          &:hover {
            background-color: rgba($primary, 0.2);
          }
        }

        .github-btn {
          background-color: $primary;
          color: white;
          border: none;

          &:hover {
            background-color: $secondary;
          }
        }

      }

      .auth-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        small {
          color: $secondary;
        }

        .logout-btn {
          padding: 0.25rem 0.75rem;
          font-size: 0.8rem;
          background-color: transparent;
          border: 1px solid $secondary;
          color: $secondary;
          border-radius: 0.25rem;
          cursor: pointer;

          &:hover {
            background-color: rgba($secondary, 0.1);
          }
        }
      }

      textarea {
        padding: 0.5rem;
        border: 1px solid $border-color;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        background-image: $card-background;
        color: white;
        min-height: 100px;
        resize: vertical;

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }

      button:not(.github-btn):not(.anon-btn):not(.logout-btn) {
        background-color: $primary;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 1rem;

        &:disabled {
          background-color: $button-color;
          cursor: not-allowed;
          opacity: 0.5;
        }

        &:hover:not(:disabled) {
          background-color: rgba($primary, 0.1);
        }
      }
    }
  }

  .no-comments {
    text-align: center;
    color: white;
    margin-top: 2rem;

    span {
      color: $secondary;
      font-weight: bold;
    }
  }

  .comment {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $border-color;
    border-radius: 10rem;
    padding: 0.25rem;
    padding-right: 1rem;
    background-image: $card-background;
    margin-bottom: 1rem;
    max-width: 30rem;
    min-width: 25rem;
    word-break: break-word;

    .profile-picture {
      margin-right: 0.75rem;
      max-width: 3rem;
      max-height: 3rem;
      border-radius: 100%;
      margin: auto 0;
    }

    .comment-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
      margin-left: 1rem;

      .comment-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .comment-date {
          font-size: 0.8rem;
          color: $secondary;
          margin: 0 0.5rem;
          white-space: nowrap;
        }
      }

      .comment-content {
        margin-top: 0.5rem;
        font-size: 1rem;
        word-break: break-word;
        margin: 0;
      }

      .comment-actions {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0.5rem 0;

        .reaction-btn {
          background: transparent;
          border: none;
          color: white;
          font-weight: bold;
          cursor: pointer;
          display: flex;
          align-items: center;
          font-size: 0.9rem;
          padding: 0;

          img {
            width: 1rem;
            height: 1rem;
            margin-right: 0.25rem;
          }
        }
      }
    }
  }
}
</style>
