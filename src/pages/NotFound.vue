<template>
  <div class="not-found">
    <div class="intro">
      <h1>{{ t("notFound.title") }}</h1>
      <p>{{ t("notFound.subtitle") }}</p>
      <small>{{ t("notFound.small") }}</small>
    </div>
    <div class="image-container">
      <img :src="AaFolou" :alt="String(t('notFound.imageAlt'))" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AaFolou from "@/assets/images/adobe-express.webp";
import { useI18n } from "@/i18n";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.not-found {
  .image-container {
    display: flex;
    justify-content: center;

    img {
      max-width: 20rem;
      padding: 0 auto;
    }
  }
}
</style>
