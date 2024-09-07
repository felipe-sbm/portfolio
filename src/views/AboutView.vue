<template>
  <div class="about">
    <h1 class="font-semibold">はじめまして!</h1>
    <p>
      My name is Felipe Samuel. I have been studying IT since I was a child.
    </p>
    <p>
      lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <TeachPages class="my-4" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TeachPages from "@/components/TeachPages.vue";

export default defineComponent({
  name: "AboutView",
  components: {
    TeachPages,
  },
});
</script>
