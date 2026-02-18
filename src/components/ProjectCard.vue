<template>
  <article class="project-card">
    <router-link class="project-card__link" :to="`/projects/${slug}`">
      <div v-if="isLastProject" class="project-card__badge">
        <h6>{{ t('projects.lastProject') }}</h6>
      </div>
      <div class="project-card__body">
        <div class="project-card__media">
          <img :src="image" :alt="imageAlt" class="project-card__image" />
        </div>
        <div class="project-card__content">
          <h3 class="project-card__title">{{ name }}</h3>
          <p class="project-card__description">{{ description }}</p>
        </div>
      </div>
    </router-link>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from '@/i18n';

defineProps<{
  name: string;
  image: string;
  imageAlt?: string;
  description: string;
  link: string;
  slug: string;
  isLastProject?: boolean;
}>();

const { t } = useI18n();
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.project-card {
  position: relative;
  background-color: color-mix(in srgb, var(--color-surface) 65%, transparent);
  border: 2px solid var(--color-border-strong);
  border-radius: 1.5rem;
  overflow: hidden;
  width: 100%;
  isolation: isolate;
  contain: paint;
  transform: translateZ(0);
  backface-visibility: hidden;
  box-shadow:
    0 1px 5px rgba(255, 255, 255, 0.95) inset,
    var(--shadow-soft);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    backdrop-filter: blur(18px) saturate(140%);
    -webkit-backdrop-filter: blur(18px) saturate(140%);
  }

  &:hover {
    transform: translateY(-0.12rem);
    box-shadow:
      0 1px 10px rgba(255, 255, 255, 0.95) inset,
      var(--shadow-elevated);
  }

  .project-card__link {
    position: relative;
    z-index: 1;
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .project-card__badge {
    padding: 0.75rem 1rem 0;

    h6 {
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.7rem;
      color: var(--color-text-muted);
      font-weight: 600;
    }
  }

  .project-card__body {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1rem 1.1rem;

    .project-card__media {
      width: 10rem;
      height: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 0.75rem;
      flex-shrink: 0;
      border: 1px solid var(--color-border);

      .project-card__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
      }
    }

    .project-card__content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .project-card__title {
        margin: 0 0 0.5rem;
        font-weight: 500;
      }

      .project-card__description {
        margin: 0;
        line-height: 1.4;
        color: var(--color-text);
      }
    }
  }
}

@media (max-width: 700px) {
  .project-card {
    max-width: 100%;

    .project-card__body {
      flex-direction: column;
      align-items: stretch;
      padding: 0.5rem;

      .project-card__media {
        width: 100%;
        height: 200px;
        margin-bottom: 1rem;
      }

      .project-card__content {
        .project-card__title {
          margin: 0 0 0.5rem 0;
        }
        .project-card__description {
          margin: 0;
        }
      }
    }
  }
}
</style>
