<script setup lang="ts">
import chatArrow from '../assets/svg/chat.svg'

defineProps<{
  text: string
  type?: 'normal' | 'reverse'
  top?: string
  left?: string
  right?: string
  bottom?: string
  relative?: boolean
  maxWidth?: string
}>()
</script>

<template>
  <span class="tag" :class="[`tag-${type || 'normal'}`, { 'is-relative': relative }]" :style="{ top, left, right, bottom, maxWidth: maxWidth || '15rem' }">
    {{ text }}
    <img v-if="type !== 'reverse'" :src="chatArrow" alt="" class="tag-arrow" />
    <img v-else :src="chatArrow" alt="" class="tag-arrow tag-arrow-reverse" />
  </span>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.tag {
  position: absolute;
  background: $orange;
  color: #1a1a1a;
  padding: 0.5rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  z-index: 15;
  max-width: 15rem;

  &.is-relative {
    position: relative;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    bottom: auto !important;
  }
}

.tag-arrow {
  position: absolute;
  right: -0.08rem;
  bottom: -0.47rem;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}

.tag-arrow-reverse {
  position: absolute;
  left: -0.08rem;
  top: -0.47rem;
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  transform: rotate(180deg);
}
</style>
