<template>
  <div class="projects-body">
    <div class="information">
      <h1>projects</h1>
      <p>
        see below the projects I've created over the time I've been a
        programmer. they're sorted from newest to oldest, so the best ones are
        up here. lol
      </p>
    </div>
    <div class="message">
      <img
        :src="ProfilePicture"
        alt="Profile picture of Felipe SBM"
        class="profile-picture"
      />
      <p>welcome to my projects!</p>
    </div>

    <div class="projects-list">
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :name="project.name"
        :image="project.image"
        :imageAlt="project.imageAlt"
        :description="project.description"
        :link="project.link"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ProjectCard from "../components/ProjectCard.vue";
import { projects } from "../data/projectData";
import ProfilePicture from "../assets/images/pfp.webp";

export default {
  components: { ProjectCard },
  data() {
    return { projects, ProfilePicture };
  },
};
</script>

<style lang="scss" scoped>
@use "../style.scss" as *;

.projects-body {
  .message {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $border-color;
    border-radius: 10rem;
    padding: 0.15rem 1rem 0.15rem 0.25rem;
    width: 14.65rem;
    margin: 0 auto 2rem auto;

    img {
      max-width: 3rem;
      max-height: 3rem;
      border-radius: 50%;
      margin-right: 0.75rem;
    }
  }

  .projects-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    max-width: 100%;
    gap: 4rem;
    justify-items: center;
    align-items: stretch;
    margin: 0 auto 2rem auto;

    @media (min-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
