<template>
  <div>
    <div>
      <pre>{{ displayedCode }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const codeToType = `
<div class="left-div">
    <h1>Hey there! I'm Felipe</h1>
    <img :src="Logo" alt="SBM's Logo" />
    <div class="bio">
      <p>full-stack developer<span>&</span></p>
      <p>computer engineer<span>&</span></p>
      <p>web-designer<span>&</span></p>
      <p>ai expert<span>.</span></p>
    </div>
</div>

<!-- Hello everyone! Welcome to my website -->
`;
const displayedCode = ref('');
const htmlCode = ref('');
const doneTyping = ref(false);

onMounted(() => {
  const hasShown = sessionStorage.getItem('typingAnimationShown');

  if (hasShown === 'true') {
    displayedCode.value = codeToType;
    htmlCode.value = codeToType;
    doneTyping.value = true;
    return;
  }

  let i = 0;
  const interval = setInterval(() => {
    if (i < codeToType.length) {
      displayedCode.value += codeToType[i];
      i++;
    } else {
      clearInterval(interval);
      htmlCode.value = codeToType;
      doneTyping.value = true;
      sessionStorage.setItem('typingAnimationShown', 'true');
    }
  }, 50);
});

defineExpose({
  doneTyping,
  htmlCode,
});
</script>

<style scoped lang="scss">
pre {
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
