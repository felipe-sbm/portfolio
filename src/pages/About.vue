<template>
  <div class="intro">
    <h1>About me</h1>
    <p>Read more about my history and trajectory.</p>
    <small>I'm glad of your curiosity</small>
  </div>
  <PhotoCollage></PhotoCollage>
</template>

<script setup lang="ts">
import PhotoCollage from '@/components/PhotoCollage.vue';
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;


.intro {
  padding: 1.8rem 0;
  margin-bottom: 1rem;

  h1 {
    margin: 0;
    line-height: 1.03;
    letter-spacing: -0.03em;
    font-weight: 600;
  }

  p {
    margin: 0.65rem 0 0;
    font-size: 1.05rem;
    max-width: 38rem;
    line-height: 1.45;
  }

  small {
    display: inline-block;
    margin-top: 0.75rem;
  }
}
</style>