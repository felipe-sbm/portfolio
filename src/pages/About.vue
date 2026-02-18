<template>
  <div class="intro">
    <h6 class="eyebrow">{{ t('about.eyebrow') }}</h6>
    <h1>{{ t('about.title') }}</h1>
    <p>{{ t('about.subtitle') }}</p>
    <small>{{ t('about.small') }}</small>
  </div>
  <div>
    <p>
      {{ t('about.paragraphA') }}
      {{ ' ' }}
      <a href="/projects">{{ t('about.projectsLink') }}</a>
      {{ '. ' }}{{ t('about.paragraphB') }}
    </p>
    <PhotoCollage />
    <Trajectory />
  </div>
</template>

<script setup lang="ts">
import PhotoCollage from '@/components/PhotoCollage.vue';
import Trajectory from '@/components/Trajectory.vue';
import { useI18n } from '@/i18n';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

a {
  text-decoration-color: var(--color-brand-primary);
  text-decoration-style: wavy;
}

a:hover {
  text-decoration-color: var(--color-brand-secondary);
}
</style>
