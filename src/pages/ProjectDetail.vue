<template>
  <article v-if="project" class="project-detail">
    <section class="intro">
      <h6 class="eyebrow">{{ t("projects.detail.eyebrow") }}</h6>
      <h1>{{ title }}</h1>
      <p>{{ summary }}</p>
      <small>{{ t("projects.detail.small") }}</small>
    </section>

    <button
      class="project-detail__cover"
      type="button"
      :aria-label="String(t('projects.detail.imagePreview'))"
      @click="openLightbox(project.image, title)"
    >
      <img :src="project.image" :alt="title" />
    </button>

    <a
      class="project-detail__cta"
      :href="project.link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ ctaLabel }}
    </a>

    <section class="project-detail__stack">
      <div v-if="project.languages.length" class="project-detail__stack-group">
        <h2>{{ t("projects.detail.languages") }}</h2>
        <div class="project-detail__stack-tags">
          <TechPill
            v-for="language in project.languages"
            :key="`${project.slug}-detail-lang-${language}`"
            :label="language"
            variant="language"
          />
        </div>
      </div>

      <div v-if="project.frameworks.length" class="project-detail__stack-group">
        <h2>{{ t("projects.detail.frameworks") }}</h2>
        <div class="project-detail__stack-tags">
          <TechPill
            v-for="framework in project.frameworks"
            :key="`${project.slug}-detail-fw-${framework}`"
            :label="framework"
            variant="framework"
          />
        </div>
      </div>
    </section>

    <section class="project-detail__content" @click="handleContentClick">
      <div v-if="htmlContent" class="mdx-content" v-html="htmlContent" />
      <p v-else class="project-detail__fallback">
        {{ t("projects.detail.fallback") }}
      </p>
    </section>
  </article>

  <div v-else class="project-detail__fallback-page">
    <p>{{ t("projects.detail.notFound") }}</p>
  </div>

  <Teleport to="body">
    <div
      v-if="lightboxImage"
      class="project-lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="String(t('projects.detail.imagePreview'))"
      @click.self="closeLightbox"
    >
      <button
        class="project-lightbox__close"
        type="button"
        :aria-label="String(t('projects.detail.closePreview'))"
        @click="closeLightbox"
      >
        ×
      </button>
      <img
        class="project-lightbox__image"
        :src="lightboxImage.src"
        :alt="lightboxImage.alt"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import MarkdownIt from "markdown-it";
import { useI18n } from "@/i18n";
import { getProjectBySlug } from "@/data/projectData";
import TechPill from "@/components/TechPill.vue";
import { ArrowLeft } from "lucide-vue-next";

const route = useRoute();
const { t } = useI18n();

const markdown = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

const project = computed(() =>
  getProjectBySlug(String(route.params.slug ?? "")),
);
const title = ref("");
const summary = ref("");
const htmlContent = ref("");
const lightboxImage = ref<{ src: string; alt: string } | null>(null);

function stripWrappingQuotes(value: string): string {
  return value.trim().replace(/^['"]|['"]$/g, "");
}

function parseMdxSource(source: string): {
  frontmatter: Record<string, string>;
  body: string;
} {
  if (!source.startsWith("---")) {
    return { frontmatter: {}, body: source };
  }

  const endMarkerIndex = source.indexOf("\n---", 3);
  if (endMarkerIndex === -1) {
    return { frontmatter: {}, body: source };
  }

  const headerRaw = source.slice(3, endMarkerIndex).trim();
  const body = source.slice(endMarkerIndex + 4).trimStart();
  const frontmatterEntries = headerRaw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex === -1) return null;
      const key = line.slice(0, separatorIndex).trim();
      const value = stripWrappingQuotes(line.slice(separatorIndex + 1));
      return key ? [key, value] : null;
    })
    .filter((entry): entry is [string, string] => entry !== null);

  return {
    frontmatter: Object.fromEntries(frontmatterEntries),
    body,
  };
}

const ctaLabel = computed(() => {
  if (!project.value) return "";
  const normalizedLink = project.value.link.toLowerCase();
  return normalizedLink.includes("github")
    ? String(t("projects.detail.openRepository"))
    : String(t("projects.detail.openProject"));
});

function openLightbox(src: string, alt?: string) {
  lightboxImage.value = {
    src,
    alt: alt || String(t("projects.detail.imageAlt")),
  };
}

function closeLightbox() {
  lightboxImage.value = null;
}

function handleContentClick(event: MouseEvent) {
  const clickedElement = event.target as HTMLElement | null;
  if (!clickedElement) return;
  const clickedImage = clickedElement.closest("img") as HTMLImageElement | null;
  if (!clickedImage?.src) return;
  openLightbox(clickedImage.src, clickedImage.alt);
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeLightbox();
  }
}

async function loadProjectContent() {
  if (!project.value) {
    title.value = "";
    summary.value = "";
    htmlContent.value = "";
    return;
  }

  const fallbackTitle = String(t(`projects.items.${project.value.id}.name`));
  const fallbackSummary = String(
    t(`projects.items.${project.value.id}.description`),
  );

  try {
    const source = await project.value.contentLoader();
    const parsed = parseMdxSource(source);
    const rawTitle = parsed.frontmatter.title;
    const rawSummary = parsed.frontmatter.summary;

    title.value = typeof rawTitle === "string" ? rawTitle : fallbackTitle;
    summary.value =
      typeof rawSummary === "string" ? rawSummary : fallbackSummary;
    htmlContent.value = markdown.render(parsed.body);
  } catch (_error) {
    title.value = fallbackTitle;
    summary.value = fallbackSummary;
    htmlContent.value = "";
  }
}

watch(
  () => route.params.slug,
  () => {
    loadProjectContent();
  },
  { immediate: true },
);

watch(lightboxImage, (value) => {
  document.body.style.overflow = value ? "hidden" : "";
});

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped lang="scss">
@use "@/style.scss" as *;

.project-detail {
  max-width: 46rem;
  margin: 0 auto;
}

.project-detail__back {
  display: inline-block;
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: 0.2s ease;
}

.project-detail__back:hover {
  color: var(--color-brand-primary);
  border-color: var(--color-border-strong);
}

.project-detail__cover {
  display: block;
  margin: 1.35rem 0 1rem;
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 0;
  overflow: hidden;
  background: transparent;
  cursor: zoom-in;
}

.project-detail__cover img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
}

.project-detail__cta {
  display: inline-flex;
  margin: 0.1rem 0 1.8rem;
  text-decoration: none;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 0.48rem 1rem;
  font-size: 0.88rem;
  transition: 0.2s ease;
}

.project-detail__cta:hover {
  transform: translateY(-1px);
  border-color: var(--color-border-strong);
  color: var(--color-brand-secondary);
}

.project-detail__content {
  margin-top: 1.4rem;
  margin-bottom: 2rem;
}

.project-detail__stack {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.9rem;
}

.project-detail__stack-group h2 {
  margin: 0 0 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--color-text-muted);
}

.project-detail__stack-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

:deep(.mdx-content) {
  color: var(--color-text);
  line-height: 1.65;
}

:deep(.mdx-content h2) {
  margin: 1.5rem 0 0.6rem;
  color: var(--color-text-strong);
  letter-spacing: -0.01em;
}

:deep(.mdx-content p) {
  margin: 0.65rem 0 0;
}

:deep(.mdx-content ul) {
  margin: 0.6rem 0 1.1rem;
  padding-left: 1.2rem;
}

:deep(.mdx-content a) {
  text-decoration-color: var(--color-brand-primary);
  text-decoration-style: wavy;
}

:deep(.mdx-content img) {
  width: 100%;
  border-radius: 0.8rem;
  margin-top: 0.85rem;
  border: 1px solid var(--color-border);
  cursor: zoom-in;
}

.project-detail__fallback,
.project-detail__fallback-page {
  color: var(--color-text-muted);
}

.project-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: color-mix(in srgb, #05070c 85%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.project-lightbox__image {
  max-width: min(96vw, 1200px);
  max-height: 92vh;
  object-fit: contain;
  border-radius: 0.75rem;
  border: 1px solid color-mix(in srgb, var(--color-border) 60%, #fff 8%);
}

.project-lightbox__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-surface) 68%, transparent);
  color: var(--color-text);
  border-radius: 999px;
  width: 2.35rem;
  height: 2.35rem;
  font-size: 1.3rem;
  cursor: pointer;
}
</style>
