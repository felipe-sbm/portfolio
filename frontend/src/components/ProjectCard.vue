<template>
<a :href="ProjectLink" class="card">
    <div class="card-content">
      <div class="card-header">
        <h3 class="card-title">{{ ProjectName }}</h3>
      </div>
      <div class="card-body">
        <div class="card-image">
          <img
            :src="ProjectImage"
            :alt="ProjectImageAlt"
            class="project-image"
          />
        </div>
        <p class="project-description">{{ ProjectDescription }}</p>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ProjectCard",
    props: {
        ProjectName: { type: String, required: true },
        ProjectImage: { type: String, required: true },
        ProjectImageAlt: { type: String, default: "" },
        ProjectDescription: { type: String, required: true },
        ProjectLink: { type: String, required: true }
    }
});
</script>

<style scoped lang="scss">
@use "../style.scss" as *;
</style>
