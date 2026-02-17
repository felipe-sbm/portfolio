<template>
  <div class="intro">
    <h6 class="eyebrow">History and Trajectory</h6>
    <h1>About me</h1>
    <p>Read about my history, achivements and goals</p>
    <small>I'm glad of your curiosity.</small>
  </div>
  <div>
    <p>
      I'm Felipe Samuel, a software developer, web designer, and computer
      engineer. <br />
      Since childhood, I've been repairing computers and modifying websites with
      CSS. In 2022, I started my career in development when I joined IMD (a
      technology sector at UFRN). Since then, I haven't stopped studying and
      working on projects like this portfolio. You can check out other projects
      on the <a href="/projects">projects page.</a>
      Recently, I've been studying Chinese to improve my connection with other
      cultures. You are ready to see my timeline? Let's go!
    </p>
    <PhotoCollage />
    <Trajectory />
  </div>
</template>

<script setup lang="ts">
import PhotoCollage from "@/components/PhotoCollage.vue";
import Trajectory from "@/components/Trajectory.vue";
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

a {
  text-decoration-color: var(--color-brand-primary);
  text-decoration-style: wavy;
}

a:hover {
  text-decoration-color: var(--color-brand-secondary);
}
</style>
