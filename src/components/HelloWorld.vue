<template>
  <div class="justify-center">
    <h1 class="flex justify-start mb-7 text-2xl font-medium text-zinc-950 dark:text-zinc-100">{{ msg }}</h1>
    <p class="font-light subpixel-antialiased text-zinc-900 dark:text-zinc-300">
      I'm a fullstack developer, computer engineer, software student and webdesigner since 2019. I worked in<a
        href="https://github.com/felipe-sbm/piaf-ufrn"><span
          class="inline-flex items-center rounded-full bg-red-100 dark:bg-red-700 text-sm px-2.5 py-0.5 text-red-700 dark:text-red-100">
          <img v-bind:src="Piaf" alt="PIAF Logo" class="-ms-1 me-1.5 h-3.5 w-3.5 justify-start">
          &emsp;PIAF - UFRN
        </span></a>
      and made some
      projects in my own, like <a href="https://github.com/felipe-sbm/spiral"><span
          class="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 text-sm py-0.5 text-purple-700 dark:text-purple-100">
          <img v-bind:src="Spiral" alt="Spiral Logo" class="-ms-1 me-1.5 h-3.5 w-3.5 justify-start rounded-full">
          &emsp;Spiral
        </span></a>. <br> I keep practicing every day<span class="text-xs italic font-thin">/7*</span> and learning new
      technologies to improve my skills. ようこそ!
    </p>
    <PhotoAlbum />
    <p class="font-light mb-8 subpixel-antialiased text-zinc-900 dark:text-zinc-300">
      Currently I'm working at project <a href="https://github.com/felipe-sbm/piaf-ufrn"
        class="underline text-zinc-950 dark:text-zinc-50">Spiral SBM</a>. I actually work as a Freelancer, making
      websites, systems, repairing computers and building home servers. But that's not that all, I made some project
      in my own, look some of they.
    </p>
    <div class="block max-w-4xl">
      <HomeCards />
    </div>
    <p class="font-light subpixel-antialiased text-zinc-900 dark:text-zinc-300 my-16">Some time ago, I just started a
      Blog and a Youtube
      Channel to teach people in the dev world. Tutorials, Q&A and news from technologies its just a slice of the
      content that im actually creating. Typescript, Ruby, Julia and C# are my favourites lenguages, check it out!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PhotoAlbum from './PhotoAlbum.vue';
import HomeCards from './HomeCards.vue';

export default defineComponent({
  data() {
    return {
      Piaf: require('@/assets/piaf.svg'),
      Spiral: require('@/assets/spiral.svg'),
    };
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  }, components: {
    PhotoAlbum,
    HomeCards,
  },
});
</script>