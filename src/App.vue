<template>
  <div class="min-h-screen w-screen flex justify-center bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-300">
    <div class="max-w-4xl w-full py-2 px-12">
      <AppHeader />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/Header.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    AppHeader,
  },
});
</script>