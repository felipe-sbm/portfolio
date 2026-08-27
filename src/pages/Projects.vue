<template>
  <div class="projects">
    <div class="intro">
      <h6 class="eyebrow">{{ t('projects.eyebrow') }}</h6>
      <h1>{{ t('projects.title') }}</h1>
      <p>{{ t('projects.subtitle') }}</p>
      <small>{{ t('projects.small') }}</small>
    </div>
    
    <div class="projects__intro">
      <img :src="ProfilePicture" :alt="String(t('common.profilePictureAlt'))" class="projects__intro-avatar" />
      <p class="projects__intro-text">{{ t('projects.welcome') }}</p>
    </div>

    <div class="projects__list">
      <ProjectCard
        v-for="project in localizedProjects"
        :key="project.slug"
        :name="project.name"
        :image="project.image"
        :imageAlt="project.imageAlt"
        :description="project.description"
        :link="project.link"
        :slug="project.slug"
        :languages="project.languages"
        :frameworks="project.frameworks"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { getProjects } from '@/services/contentful';
import type { Project } from '@/types/project';
import ProfilePicture from '@/assets/images/pfp.webp';
import { useI18n } from '@/i18n';

const { t } = useI18n();

const projects = ref<Project[]>([]);

onMounted(async () => {
  try {
    projects.value = await getProjects();
  } catch (err) {
    console.error('Falha ao carregar projetos do Contentful:', err);
  }
});

const localizedProjects = computed(() => {
  return projects.value.map((project) => ({
    ...project,
    name: String(
      t(`projects.items.${project.identifier}.name`) || project.title,
    ),
    image: project.image || '',
    imageAlt: String(
      t(`projects.items.${project.identifier}.imageAlt`) || project.title,
    ),
    description: String(
      t(`projects.items.${project.identifier}.description`) ||
        project.description,
    ),
    link: project.url || project.github || '#',
    languages: Array.isArray(project.languages) ? project.languages : [],
    frameworks: Array.isArray(project.frameworks) ? project.frameworks : [],
  }));
});
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.projects {
  .projects__intro {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-border);
    border-radius: 10rem;
    padding: 0.15rem 1rem 0.15rem 0.25rem;
    max-width: fit-content;
    margin: 1rem auto 2rem auto;
    background: color-mix(in srgb, var(--color-surface) 40%, transparent);
  }

  .projects__intro-avatar {
    max-width: 3rem;
    max-height: 3rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  }

  .projects__intro-text {
    margin: 0;
  }

  .projects__list {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: 2rem;
    justify-items: center;
    align-items: stretch;
  }
}
</style>
