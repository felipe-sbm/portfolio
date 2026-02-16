<template>
  <div class="projects">
    <div class="projects--intro">
      <img
        :src="ProfilePicture"
        alt="Profile picture of Felipe SBM"
        class="projects--intro-avatar"
      />
      <p class="projects--intro-text">welcome to my projects!</p>
    </div>

    <div class="projects--list">
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
  .projects--intro {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $border-color;
    border-radius: 10rem;
    padding: 0.15rem 1rem 0.15rem 0.25rem;
    width: 14.65rem;
    margin: 0 auto 2rem auto;
  }

  .projects--intro-avatar {
    max-width: 3rem;
    max-height: 3rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  }

  .projects--intro-text {
    margin: 0;
  }

  .projects--list {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: 2rem;
    justify-items: center;
    align-items: stretch;
  }
}
</style>
