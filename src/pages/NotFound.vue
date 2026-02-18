<template>
  <div class="not-found">
    <div class="intro">
      <h6 class="eyebrow">{{ t('notFound.eyebrow') }}</h6>
      <h1>{{ t('notFound.title') }}</h1>
      <p>{{ t('notFound.subtitle') }}</p>
      <small>{{ t('notFound.small') }}</small>
    </div>
    <img :src="AaFolou" :alt="String(t('notFound.imageAlt'))" />
  </div>
</template>

<script setup lang="ts">
import AaFolou from '@/assets/images/adobe-express.webp';
import { useI18n } from '@/i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.not-found {
  img {
    max-width: 20rem;
  }
}
</style>
