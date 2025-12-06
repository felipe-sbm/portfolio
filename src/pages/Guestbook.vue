<template>
  <div class="guestbook page-container">
    <div class="title">
      <h1>
        here is the <span>guestbook</span>
      </h1>
      <p class="subtitle">Os comentários são armazenados como Issues no GitHub. Faça login para comentar.</p>
    </div>

    <div class="utterances-container">
      <div id="utterances-thread"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Guestbook',
  mounted() {
    const container = document.getElementById('utterances-thread');
    if (!container) return;
    if (container.children.length) return;

    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', 'felipe-sbm/portfolio');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-dark');
    script.crossOrigin = 'anonymous';

    container.appendChild(script);
  },
  unmounted() {
    const container = document.getElementById('utterances-thread');
    if (container) container.innerHTML = '';
  }
};
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.guestbook {
  .title {
    h1 {
      font-size: 1.75rem;
      margin: 0 0 0.5rem 0;
      span { color: $primary; }
    }
    .subtitle { color: $secondary; margin: 0 0 1rem 0; }
  }

  .utterances-container {
    background-image: $card-background;
    border: 1px solid $border-color;
    padding: 1rem;
    border-radius: 0.75rem;
  }
}
</style>
            }
