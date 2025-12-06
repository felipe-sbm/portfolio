<template>
  <div class="card">
    <router-link :to="`/projects/${slug}`">
      <div v-if="isLastProject" class="las-project">
        <h6>last project</h6>
      </div>
      <div class="card-body">
        <div class="card-image">
          <img :src="image" :alt="imageAlt" class="project-image" />
        </div>
        <div class="card-text">
          <h3 class="card-title">{{ name }}</h3>
          <p class="project-description">{{ description }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectCard",
  props: {
    name: { type: String, required: true },
    image: { type: String, required: true },
    imageAlt: { type: String, default: "" },
    description: { type: String, required: true },
    link: { type: String, required: true },
    slug: { type: String, required: true },
    isLastProject: { type: Boolean, default: false },
  },
});
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.card {
  background-image: $card-background;
  border-radius: 1rem;
  border: 1px solid $border-color;
  max-width: 40rem;
  width: 100%;

  a {
    text-decoration: none;
    color: inherit;
  }

  .card-body {
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: $card-background;

    .card-image {
      width: 10rem;
      height: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 0.75rem;
      flex-shrink: 0;
      border: 1px solid $border-color;

      .project-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
      }
    }

    .card-text {
      margin-left: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .card-title {
        margin: 0 1rem 0.5rem 0;
        font-weight: medium;
      }

      .project-description {
        margin: 0 1rem 0 0;
      }
    }
  }
}

@media (max-width: 700px) {
  .card {
    max-width: 100%;
    .card-body {
      flex-direction: column;
      align-items: stretch;
      padding: 0.5rem;

      .card-image {
        width: 100%;
        height: 200px;
        margin-bottom: 1rem;
      }

      .card-text {
        margin-left: 0;
        .card-title {
          margin: 0 0 0.5rem 0;
        }
        .project-description {
          margin: 0;
        }
      }
    }
  }
}
</style>
