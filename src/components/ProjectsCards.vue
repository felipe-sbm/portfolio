<template>
  <div class="flex grid lg:grid-cols-2 sm:grid-cols-1 gap-4 lg:gap-4 pb-8">
    <div v-for="project in Projects" :key="project.title">
      <a :href="project.link">
        <article :class="[project.className, 'overflow-hidden group max-w-xs mb-4 rounded-xl p-0.5 drop-shadow-xl transition hover:shadow-2xl']">
          <img
            :alt="project.alt"
            :src="project.image"
            class="rounded-t-[10px] left-0 top-0 h-auto max-h-56 w-full object-cover"
          />
          <div
            class="relative overflow-hidden rounded-b-[10px] bg-zinc-50 dark:bg-zinc-950 p-8"
            :title="project.description"
          >
            <time
              :datetime="project.date"
              class="block text-xs text-gray-500 font-mono"
              >{{ project.date }}</time
            >
            <h3
              class="mt-0.5 mb-1 text-md font-medium text-zinc-900 dark:text-zinc-300"
            >
              {{ project.title }}
            </h3>
            <p class="text-sm font-light text-zinc-800 dark:text-zinc-400">
              {{ project.description }}
            </p>
            <div
              class="absolute right-4 top-4 transition group-hover:rotate-45 delay-75 duration-500"
            >
              <CircleArrowOutUpRight class="lg:w-5 w-4" />
            </div>
          </div>
        </article>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Projects } from "../router/projects";
import { CircleArrowOutUpRight } from "lucide-vue-next";
</script>
