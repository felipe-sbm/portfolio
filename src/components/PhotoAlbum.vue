<template>
  <div
    class="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8 transition"
  >
    <div class="relative h-40 transition hover:shadow-md">
      <img
        alt="Me at orchestra's shalom concert"
        id="photo"
        class="absolute rounded-lg object-cover w-full h-full"
        v-bind:src="Orchestra"
      />
    </div>
    <div class="relative sm:row-span-2 row-span-1 transition hover:shadow-md">
      <img
        alt="Go-RN, a tech event that I participated in 2023"
        id="photo"
        class="absolute rounded-lg object-cover object-top sm:object-center w-full h-full"
        v-bind:src="GoRn"
      />
    </div>
    <div class="relative transition hover:shadow-md">
      <img
        alt="ProtoLab, a laboratory in UFRN that I studied in 2024"
        id="photo"
        class="absolute rounded-lg object-cover w-full h-full"
        v-bind:src="Lab"
      />
    </div>
    <div class="relative row-span-2 transition hover:shadow-md">
      <img
        alt="Myself at a google maps"
        id="photo"
        class="absolute rounded-lg object-cover sm:object-center w-full h-full"
        v-bind:src="Maps"
      />
    </div>
    <div class="relative row-span-2 transition hover:shadow-md">
      <img
        alt="A subaru car that I saw"
        id="photo"
        class="absolute rounded-lg object-cover w-full h-full"
        v-bind:src="Subaru"
      />
    </div>
    <div class="relative h-40 transition hover:shadow-md">
      <img
        alt="My Selfie at school"
        id="photo"
        class="absolute rounded-lg object-cover w-full h-full"
        v-bind:src="Selfie"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      Orchestra: require("@/assets/photos/shalom.webp"),
      GoRn: require("@/assets/photos/gorn-2023.webp"),
      Lab: require("@/assets/photos/laboratory.webp"),
      Maps: require("@/assets/photos/maps.webp"),
      Selfie: require("@/assets/photos/classic.webp"),
      Subaru: require("@/assets/photos/spotting.webp"),
    };
  },
  name: "PhotoAlbum",
});
</script>
