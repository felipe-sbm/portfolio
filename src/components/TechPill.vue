<template>
  <span :class="['tech-pill', `tech-pill--${variant}`]">{{ label }}</span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string;
    variant?: 'language' | 'framework';
  }>(),
  {
    variant: 'language',
  },
);
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.tech-pill {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-surface) 58%, transparent);
  color: var(--color-text);
  padding: 0.22rem 0.62rem;
  font-size: 0.76rem;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.tech-pill--framework {
  border-color: color-mix(in srgb, var(--color-brand-primary) 38%, var(--color-border));
  background: color-mix(in srgb, var(--color-brand-primary) 11%, var(--color-surface));
}
</style>
