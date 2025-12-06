<template>
  <div class="project-detail page-container">
    <div class="meta">
      <h1>{{ title }}</h1>
      <p v-if="projectLink">
        <a :href="projectLink" target="_blank" rel="noopener">Open repo / live</a>
      </p>
    </div>

    <div v-if="loading">Loading...</div>
    <div v-else v-html="htmlContent" class="markdown-body"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '@/data/projectData';

// lazy imports for markdown parsing
import MarkdownIt from 'markdown-it';
import matter from 'gray-matter';

const route = useRoute();
const slug = route.params.slug as string;
const htmlContent = ref('');
const title = ref('');
const projectLink = ref('');
const loading = ref(true);

async function loadMarkdown(slugVal: string) {
  try {
    // import raw markdown content
    const mdModule = await import(`../projects/${slugVal}.md?raw`);
    const raw = mdModule.default as string;

    // parse frontmatter
    const parsed = matter(raw);
    title.value = parsed.data.title || '';

    // convert markdown to HTML
    const md = new MarkdownIt({ html: true });
    htmlContent.value = md.render(parsed.content);

    // get project external link from projects list if available
    const proj = projects.find((p) => p.slug === slugVal);
    projectLink.value = proj?.link || parsed.data.link || '';
  } catch (err) {
    htmlContent.value = '<p>Conteúdo não encontrado.</p>';
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  if (typeof slug === 'string') loadMarkdown(slug);
});
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.project-detail {
  .meta {
    margin-bottom: 1rem;
  }

  .markdown-body {
    background: $card-background;
    padding: 1.25rem;
    border-radius: 0.75rem;
    border: 1px solid $border-color;
  }
}
</style>
