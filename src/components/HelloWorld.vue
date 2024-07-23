<template>
  <div class="justify-center">
    <h1 class="flex justify-start mb-7 text-2xl font-medium">{{ msg }}</h1>
    <p class="font-light">
      I'm a fullstack developer, software student and webdesigner since 2019. I worked in <a class="underline"
        href="https://github.com/felipe-sbm/piaf-ufrn">PIAF - UFRN</a> and made some
      projects in my own.I keed practicing and learning new technologies to improve my skills. Welcome!
    </p>
    <div class="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
      <div class="relative h-40"><img alt="Me speaking on stage at React Summit about the future of Next.js"
          class="rounded-lg object-cover" v-bind:src="Orchestra"></div>
      <div class="relative sm:row-span-2 row-span-1"><img
          alt="Me standing on stage at Reactathon delivering the keynote" fetchpriority="high" decoding="async"
          class="rounded-lg object-cover object-top sm:object-center" v-bind:src="GoRn"></div>
      <div class="relative"><img
          alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
          decoding="async" data-nimg="fill" class="rounded-lg object-cover" v-bind:src="Lab"></div>
      <div class="relative row-span-2"><img alt="Me, Lydia, and Delba filming the Next.js Conf keynote" decoding="async"
          data-nimg="fill" class="rounded-lg object-cover sm:object-center" v-bind:src="Maps"></div>
      <div class="relative row-span-2"><img alt="My badge on top of a pile of badges from a Vercel meetup we held"
          decoding="async" data-nimg="fill" class="rounded-lg object-cover" v-bind:src="Subaru"></div>
      <div class="relative h-40"><img
          alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web" fetchpriority="high"
          class="rounded-lg object-cover" v-bind:src="Selfie"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      Orchestra: require('@/assets/photos/shalom.webp'),
      GoRn: require('@/assets/photos/gorn-2023.webp'),
      Lab: require('@/assets/photos/laboratory.webp'),
      Maps: require('@/assets/photos/maps.webp'),
      Selfie: require('@/assets/photos/classic.webp'),
      Subaru: require('@/assets/photos/spotting.webp')
    };
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>