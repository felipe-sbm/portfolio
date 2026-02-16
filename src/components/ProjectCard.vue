<template>
  <article class="project-card">
    <router-link class="project-card--link" :to="`/projects/${slug}`">
      <div v-if="isLastProject" class="project-card--badge">
        <h6>last project</h6>
      </div>
      <div class="project-card--body">
        <div class="project-card--media">
          <img :src="image" :alt="imageAlt" class="project-card--image" />
        </div>
        <div class="project-card--content">
          <h3 class="project-card--title">{{ name }}</h3>
          <p class="project-card--description">{{ description }}</p>
        </div>
      </div>
    </router-link>
  </article>
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

.project-card {
  background-color: rgba($card-background, 0.65);
  border: 2px solid $card-background;
  border-radius: 1.5rem;
  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);
  overflow: hidden;
  width: 100%;
  box-shadow:
    0 1px 5px rgba(255, 255, 255, 0.95) inset,
    0 6px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-0.12rem);
    box-shadow:
      0 1px 10px rgba(255, 255, 255, 0.95) inset,
      0 12px 48px rgba(0, 0, 0, 0.1);
  }

  .project-card--link {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .project-card--badge {
    padding: 0.75rem 1rem 0;

    h6 {
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.7rem;
      color: rgba(0, 0, 0, 0.62);
      font-weight: 600;
    }
  }

  .project-card--body {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1rem 1.1rem;

    .project-card--media {
      width: 10rem;
      height: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 0.75rem;
      flex-shrink: 0;
      border: 1px solid rgba(0, 0, 0, 0.1);

      .project-card--image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
      }
    }

    .project-card--content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .project-card--title {
        margin: 0 0 0.5rem;
        font-weight: 500;
      }

      .project-card--description {
        margin: 0;
        line-height: 1.4;
        color: rgba(29, 29, 31, 0.9);
      }
    }
  }
}

@media (max-width: 700px) {
  .project-card {
    max-width: 100%;

    .project-card--body {
      flex-direction: column;
      align-items: stretch;
      padding: 0.5rem;

      .project-card--media {
        width: 100%;
        height: 200px;
        margin-bottom: 1rem;
      }

      .project-card--content {
        .project-card--title {
          margin: 0 0 0.5rem 0;
        }
        .project-card--description {
          margin: 0;
        }
      }
    }
  }
}
</style>
