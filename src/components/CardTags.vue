<template>
  <div v-for="project in Projects" :key="project.title" class="project-card">
    <span
      v-for="tag in project.tags"
      :key="tag"
      :class="[
        project.className,
        'whitespace-nowrap rounded-md px-2.5 py-0.5 text-xs', getClassForTag(tag)
      ]"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { Projects } from "../router/projects";

const tagClassMap: { [key: string]: string } = {
  Bootstrap:
    "bg-fuchsia-100 dark:bg-fuchsia-700 text-fuchsia-500 dark:text-fuchsia-300",
  CSS: "bg-sky-100 dark:bg-sky-700 text-sky-500 dark:text-sky-300",
  "C#": "bg-lime-100 dark:bg-lime-700 text-lime-500 dark:text-lime-300",
  Electron: "bg-teal-100 dark:bg-teal-700 text-teal-500 dark:text-teal-300",
  Flask: "bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-300",
  HTML: "bg-orange-100 dark:bg-orange-700 text-orange-500 dark:text-orange-300",
  JavaScript:
    "bg-yellow-100 dark:bg-yellow-700 text-yellow-500 dark:text-yellow-300",
  Julia: "bg-rose-100 dark:bg-rose-700 text-rose-500 dark:text-rose-300",
  "Next.js": "bg-zinc-100 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-300",
  ".NET":
    "bg-purple-100 dark:bg-purple-700 text-purple-500 dark:text-purple-300",
  "Node.js":
    "bg-emerald-100 dark:bg-emerald-700 text-emerald-500 dark:text-emerald-300",
  "Python 3":
    "bg-amber-100 dark:bg-amber-700 text-amber-500 dark:text-amber-300",
  React: "bg-blue-100 dark:bg-blue-700 text-blue-500 dark:text-blue-300",
  Ruby: "bg-red-100 dark:bg-red-700 text-red-500 dark:text-red-300",
  TailwindCSS: "bg-cyan-100 dark:bg-cyan-700 text-cyan-500 dark:text-cyan-300",
  Typescript: "bg-blue-100 dark:bg-blue-700 text-blue-500 dark:text-blue-300",
  "Vue.js": "bg-green-100 dark:bg-green-700 text-green-500 dark:text-green-300",
  "Windows forms":
    "bg-indigo-100 dark:bg-indigo-700 text-indigo-500 dark:text-indigo-300",
};

const getClassForTag = (tag: string): string => {
  return tagClassMap[tag] || "bg-gray-100 text-gray-500";
};
</script>
