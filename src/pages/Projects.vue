<template>
  <div class="projects">
    <div class="intro">
      <h6 class="eyebrow">My treasure</h6>
      <h1>Project Gallery</h1>
      <p>Here are some of the work that I've made</p>
      <small>I need to make them in Assembly</small>
    </div>
    <div class="projects__intro">
      <img
        :src="ProfilePicture"
        alt="Profile picture of Felipe SBM"
        class="projects__intro-avatar"
      />
      <p class="projects__intro-text">Welcome to my projects!</p>
    </div>

    <div class="projects__list">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :name="project.name"
        :image="project.image"
        :imageAlt="project.imageAlt"
        :description="project.description"
        :link="project.link"
        :slug="project.slug"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ProjectCard from "@/components/ProjectCard.vue";
import { projects } from "@/data/projectData";
import ProfilePicture from "@/assets/images/pfp.webp";

export default {
  components: { ProjectCard },
  data() {
    return { projects, ProfilePicture };
  },
};
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
    width: 15rem;
    margin: 0 auto 2rem auto;
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
