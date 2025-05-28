<template>
  <div class="guestbook">
    <div class="main-content">
      <div class="title">
        <h1>
          here is the <span>guestbook</span>, write <br />
          something to be there <span>forever!</span>
        </h1>
        <p>please, <span>don't write inapropriate things.</span></p>
      </div>

      <div class="comment-form">
        <input
          v-model="newComment.username"
          placeholder="Seu Instagram ou GitHub"
        />
        <textarea
          v-model="newComment.content"
          placeholder="Seu comentário"
        ></textarea>
        <button @click="submitComment">Enviar</button>
      </div>
    </div>

      <div v-if="isLoading">loading...</div>
      <div v-else>
        <div v-if="comments.length === 0" class="no-comments">
          Nenhum comentário ainda. <span>Seja o primeiro!</span>
        </div>

      <div v-else class="comments-list">
        <div v-for="comment in comments" :key="comment.id" class="comment">
          <img
            :src="ProfilePicture"
            alt="Profile picture of Felipe SBM"
            class="profile-picture"
          />
          <div class="comment-body">
            <div class="comment-header">
              <strong>@{{ comment.username }}</strong>
              <span class="comment-date">
                {{ formatDate(comment.createdAt) }}
              </span>
            </div>
            <p class="comment-content">{{ comment.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ProfilePicture from "../assets/images/pfp.webp";
import { GuestbookComponent } from "../services/GuestbookService";

export default {
  extends: GuestbookComponent,
  data() {
    return {
      ProfilePicture,
    };
  },
};
</script>

<style scoped lang="scss">
@use "../style.scss" as *;

.guestbook {
  .main-content {
    margin-bottom: 2rem;

    .title {
      h1 {
        font-size: 30px;
        font-weight: normal;
        margin: 0;

        span {
          color: $primary;
        }
      }

      p {
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
      margin-top: 1rem;
      border-radius: 1rem;

      input,
      textarea {
        padding: 0.5rem;
        border: 1px solid $border-color;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        background-image: $card-background;
      }

      button {
        background-color: $primary;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 1rem;
      }
    }
  }

  .no-comments {
    text-align: center;
    font-size: 1.2rem;
    color: $secondary;
    margin-top: 2rem;

    span {
      color: $primary;
      font-weight: bold;
    }
  }

  .comment {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $border-color;
    border-radius: 2rem;
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
    }
  }
}
</style>
