<template>
  <h2>{{ t('trajectory.title') }}</h2>
  <p v-for="(paragraph, index) in paragraphs" :key="`trajectory-${index}`">
    {{ paragraph }}
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from '@/i18n';

const { t } = useI18n();

const paragraphs = computed(() => {
  const value = t('trajectory.paragraphs');
  return Array.isArray(value) ? value : [];
});
</script>
