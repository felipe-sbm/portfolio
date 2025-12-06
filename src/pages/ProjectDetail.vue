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

const route = useRoute();
const slug = route.params.slug as string;
const htmlContent = ref('');
const title = ref('');
const projectLink = ref('');
const loading = ref(true);

async function loadMarkdown(slugVal: string) {
  try {
    // load markdown/mdx files via import.meta.glob to allow dynamic resolution by Vite
    const modules = import.meta.glob('../projects/*.{md,mdx}', { as: 'raw' }) as Record<string, () => Promise<string>>;
    const possible = [`../projects/${slugVal}.mdx`, `../projects/${slugVal}.md`];
    let loader: (() => Promise<string>) | undefined;
    for (const p of possible) {
      if (modules[p]) {
        loader = modules[p];
        break;
      }
    }
    if (!loader) {
      const available = Object.keys(modules).join('\n');
      throw new Error(`not found; available:\n${available}`);
    }
    const raw = await loader();

    // parse simple YAML frontmatter (avoid gray-matter on client)
    let content = raw;
    const fm = raw.match(/^---\n([\s\S]*?)\n---/);
    if (fm) {
      const fmBody = fm[1];
      content = raw.slice(fm[0].length);
      const titleMatch = fmBody.match(/title:\s*(?:"([^"]+)"|'([^']+)'|(.+))/);
      if (titleMatch) title.value = (titleMatch[1] || titleMatch[2] || titleMatch[3]).trim();
      const linkMatch = fmBody.match(/link:\s*(?:"([^"]+)"|'([^']+)'|(.+))/);
      if (linkMatch) projectLink.value = (linkMatch[1] || linkMatch[2] || linkMatch[3]).trim();
    }

    // convert markdown to HTML
    const md = new MarkdownIt({ html: true });
    htmlContent.value = md.render(content);

    // fallback to projectData link if not in frontmatter
    const proj = projects.find((p) => p.slug === slugVal);
    if (!projectLink.value) projectLink.value = proj?.link || '';
  } catch (err: any) {
    console.error('loadMarkdown error:', err);
    htmlContent.value = `<p>Conteúdo não encontrado.</p><pre style="white-space:pre-wrap;color:#f88d2b">${err?.message || String(err)}</pre>`;
  } finally { // "finally 🙌", lol
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
