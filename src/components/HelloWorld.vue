<template>
  <div class="justify-center">
    <h1 class="flex justify-start mb-7 text-2xl font-medium text-zinc-950 dark:text-zinc-100">{{ msg }}</h1>
    <p class="font-light subpixel-antialiased text-zinc-900 dark:text-zinc-300">
      I'm a fullstack developer, software student and webdesigner since 2019. I worked in <a
        href="https://github.com/felipe-sbm/piaf-ufrn"><span
          class="inline-flex items-center rounded-full bg-red-100 dark:bg-red-700 px-2.5 py-0.5 text-red-700 dark:text-red-100">
          <img v-bind:src="Piaf" alt="PIAF Logo" class="-ms-1 me-1.5 h-4 w-4 justify-start">
          &emsp;PIAF - UFRN
        </span></a>
      and made some
      projects in my own, like <a href="https://github.com/felipe-sbm/piaf-ufrn"><span
          class="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900 px-2.5 py-0.5 text-purple-700 dark:text-purple-100">
          <img v-bind:src="Spiral" alt="Spiral Logo" class="-ms-1 me-1.5 h-4 w-4 justify-start rounded-full">
          &emsp;Spiral
        </span></a>. I keed practicing and learning new technologies to improve my skills. Welcome!
    </p>
    <div class="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
      <div class="relative h-40"><img alt="Me at orchestra's shalom concert" class="rounded-lg object-cover"
          v-bind:src="Orchestra"></div>
      <div class="relative sm:row-span-2 row-span-1"><img alt="Go-RN, a tech event that I participated in 2023"
          class="rounded-lg object-cover object-top sm:object-center" v-bind:src="GoRn"></div>
      <div class="relative"><img alt="ProtoLab, a laboratory in UFRN that I studied in 2024"
          class="rounded-lg object-cover" v-bind:src="Lab"></div>
      <div class="relative row-span-2"><img alt="Myself at a google maps"
          class="rounded-lg object-cover sm:object-center" v-bind:src="Maps"></div>
      <div class="relative row-span-2"><img alt="A subaru car that I saw" class="rounded-lg object-cover"
          v-bind:src="Subaru"></div>
      <div class="relative h-40"><img alt="My Selfie at school" class="rounded-lg object-cover" v-bind:src="Selfie">
      </div>
    </div>
    <p class="font-light mb-8 subpixel-antialiased text-zinc-900 dark:text-zinc-300">
      Currently I'm working at project <a href="https://github.com/felipe-sbm/piaf-ufrn"
        class="underline text-zinc-950 dark:text-zinc-50">Spiral SBM</a>. But that's not that all, I made some project
      in my own, look some of they.
    </p>
    <article
      class="mb-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-800 p-0.5 drop-shadow-xl hover:shadow-2xl">
      <div class="rounded-[10px] bg-zinc-50 dark:bg-zinc-950 p-4 !pt-20 sm:p-6">
        <time datetime="2024-02-14" class="block text-xs text-gray-500"> 14th Feb 2024 </time>
        <a href="https://spiral-sbm.vercel.app">
          <h3 class="mt-0.5 text-lg font-medium text-zinc-900 dark:text-zinc-300">
            Spiral: A new way to build your dreams.
          </h3>
        </a>
        <div class="mt-4 flex flex-wrap gap-1">
          <span
            class="whitespace-nowrap rounded-full bg-blue-100 dark:bg-blue-700 px-2.5 py-0.5 text-xs text-blue-500 dark:text-blue-300">
            Typescript
          </span>
          <span
            class="whitespace-nowrap rounded-full bg-zinc-100 dark:bg-zinc-700 px-2.5 py-0.5 text-xs text-zinc-500 dark:text-zinc-300">
            Next.js
          </span>
          <span
            class="whitespace-nowrap rounded-full bg-red-100 dark:bg-red-700 px-2.5 py-0.5 text-xs text-red-500 dark:text-red-300">
            Ruby
          </span>
          <span
            class="whitespace-nowrap rounded-full bg-cyan-100 dark:bg-cyan-700 px-2.5 py-0.5 text-xs text-cyan-500 dark:text-cyan-300">
            TailwindCSS
          </span>
        </div>
      </div>
    </article>
    <article
      class="mb-4 rounded-xl bg-gradient-to-r from-red-400 via-red-600 to-red-900 p-0.5 drop-shadow-xl hover:shadow-2xl">
      <div class="rounded-[10px] bg-zinc-50 dark:bg-zinc-950 p-4 !pt-20 sm:p-6">
        <time datetime="2024-04-9" class="block text-xs text-gray-500"> 9th Apr 2024 </time>
        <a href="https://github.com/felipe-sbm/piaf-ufrn">
          <h3 class="mt-0.5 text-lg font-medium text-zinc-900 dark:text-zinc-300">
            PIAF: Portal de Integração de Atividades Físicas da UFRN
          </h3>
        </a>
        <div class="mt-4 flex flex-wrap gap-1">
          <span
            class="whitespace-nowrap rounded-full bg-amber-100 dark:bg-amber-700 px-2.5 py-0.5 text-xs text-amber-500 dark:text-amber-300">
            Python 3
          </span>
          <span
            class="whitespace-nowrap rounded-full bg-emerald-100 dark:bg-emerald-700 px-2.5 py-0.5 text-xs text-emerald-500 dark:text-emerald-300">
            Node.js
          </span>
          <span
            class="whitespace-nowrap rounded-full bg-teal-100 dark:bg-teal-700 px-2.5 py-0.5 text-xs text-teal-500 dark:text-teal-300">
            Electron
          </span>
          <span
            class="whitespace-nowrap rounded-full bg-zinc-100 dark:bg-zinc-700 px-2.5 py-0.5 text-xs text-zinc-500 dark:text-zinc-300">
            Flask
          </span>
          <span
            class="whitespace-nowrap rounded-full bg-fuchsia-100 dark:bg-fuchsia-700 px-2.5 py-0.5 text-xs text-fuchsia-500 dark:text-fuchsia-300">
            Boostrap
          </span>
        </div>
      </div>
    </article>
    <article
      class="mb-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-800 p-0.5 drop-shadow-xl hover:shadow-2xl">
      <div class="rounded-[10px] bg-zinc-50 dark:bg-zinc-950 p-4 !pt-20 sm:p-6">
        <time datetime="2023-04-07" class="block text-xs text-gray-500"> 7th Aug 2023 </time>
        <a href="https://orchestra-shalom.vercel.app/">
          <h3 class="mt-0.5 text-lg font-medium text-zinc-900 dark:text-zinc-300">
            Orchestra Shalom: Spreading the gospel through music.
          </h3>
        </a>
        <div class="mt-4 flex flex-wrap gap-1">
          <span
            class="whitespace-nowrap rounded-full bg-blue-100 dark:bg-blue-700 px-2.5 py-0.5 text-xs text-blue-500 dark:text-blue-300">
            Typescript
          </span>
          <span
            class="whitespace-nowrap rounded-full bg-zinc-100 dark:bg-zinc-700 px-2.5 py-0.5 text-xs text-zinc-500 dark:text-zinc-300">
            Next.js
          </span>
          <span
            class="whitespace-nowrap rounded-full bg-cyan-100 dark:bg-cyan-700 px-2.5 py-0.5 text-xs text-cyan-500 dark:text-cyan-300">
            TailwindCSS
          </span>
        </div>
      </div>
    </article>
    <article
      class="mb-4 rounded-xl bg-gradient-to-r from-amber-400 via-orange-400 to-orange-600 p-0.5 drop-shadow-xl hover:shadow-2xl">
      <div class="rounded-[10px] bg-zinc-50 dark:bg-zinc-950 p-4 !pt-20 sm:p-6">
        <time datetime="2024-04-19" class="block text-xs text-gray-500"> 19th Apr 2024 </time>
        <a href="https://github.com/felipe-sbm/calculus">
          <h3 class="mt-0.5 text-lg font-medium text-zinc-900 dark:text-zinc-300">
            Project Calculus: A new way to see math.
          </h3>
        </a>
        <div class="mt-4 flex flex-wrap gap-1">
          <span
            class="whitespace-nowrap rounded-full bg-lime-100 dark:bg-lime-700 px-2.5 py-0.5 text-xs text-lime-500 dark:text-lime-300">
            C#
          </span>
          <span
            class="whitespace-nowrap rounded-full bg-purple-100 dark:bg-purple-700 px-2.5 py-0.5 text-xs text-purple-500 dark:text-purple-300">
            .NET
          </span>
          <span
            class="whitespace-nowrap rounded-full bg-indigo-100 dark:bg-indigo-700 px-2.5 py-0.5 text-xs text-indigo-500 dark:text-indigo-300">
            Windows forms
          </span>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      Piaf: require('@/assets/piaf.svg'),
      Spiral: require('@/assets/spiral.svg'),
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