<template>
  <div class="projects">
    <h1 class="flex justify-start text-2xl font-medium text-zinc-950 dark:text-zinc-100">Samuel's projects</h1>
    <p class="my-2 mb-4 font-light subpixel-antialiased text-zinc-900 dark:text-zinc-300">
      Bellow you can see my saved projects 💾
    </p>
    <ProjectsCards />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectsCards from '@/components/ProjectsCards.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ProjectsCards,
  },
});
</script>
