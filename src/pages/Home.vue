<template>
  <div class="page-container">
    <div class="hero-background">
      <img :src="Background" :alt="String(t('home.imageAlt.background'))" class="hero-background__image" />
    </div>

    <div class="home__welcome">
      <h1>{{ t('home.title') }}</h1>
      <ul class="home__bio">
        <li v-for="(role, index) in roles" :key="role">
          {{ role }}<span v-if="index < roles.length - 1">&</span><mark v-else>.</mark>
        </li>
      </ul>
    </div>
  </div>

  <div class="home__content">
    <p class="home__text">
      {{ t('home.introBeforeBase') }}
      <PillBadge
        linkUrl="https://basegpt.com.br"
        :linkAlt="String(t('home.links.base'))"
        pillStyle="pill-badge--purple"
        :imgUrl="Base"
        :imgAlt="String(t('home.imageAlt.base'))"
        pillText="BaseGPT"
      />
      {{ t('home.introBetweenBaseAndDemanda') }}
      <PillBadge
        linkUrl="https://demandaurbana.com.br"
        :linkAlt="String(t('home.links.demanda'))"
        pillStyle="pill-badge--blue"
        :imgUrl="Demanda"
        :imgAlt="String(t('home.imageAlt.demanda'))"
        pillText="Demanda Urbana"
      />
      {{ t('home.introAfterDemandaBeforeOtsuki') }}
      <PillBadge
        linkUrl="https://otsuki.dev"
        :linkAlt="String(t('home.links.otsuki'))"
        pillStyle="pill-badge--otsuki"
        :imgUrl="Otsuki"
        :imgAlt="String(t('home.imageAlt.otsuki'))"
        pillText="Otsuki"
      />
      {{ t('home.introAfterOtsuki') }}<i class="home__note">/7*</i> {{ t('home.introEnd') }}
      <span class="home__highlight">{{ t('home.welcomeChinese') }}</span>
    </p>

    <p class="home__text home__text--section">
      {{ t('home.secondParagraph') }}
      <i class="home__skill home__skill--cpp"> C++, </i>
      <i class="home__skill home__skill--javascript"> Javascript</i>
      {{ ' ' }}{{ t('home.andConnector') }}
      <i class="home__skill home__skill--julia"> Julia </i>
      {{ t('home.secondParagraphEnd') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Background from '@/assets/images/background.webp';
import PillBadge from '@/components/PillBadge.vue';
import Demanda from '@/assets/images/demanda-urbana.webp';
import Base from '@/assets/images/basegpt.webp';
import Otsuki from '@/assets/images/otsuki.webp';
import { useI18n } from '@/i18n';

const { t } = useI18n();
const roles = computed(() => {
  const value = t('home.roles');
  return Array.isArray(value) ? value : [];
});
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.page-container {
  position: relative;
  min-height: clamp(14rem, 34vw, 20rem);
  isolation: isolate;
  margin-bottom: 1rem;
}

.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 1rem;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      -90deg,
      color-mix(in srgb, var(--color-bg-start) 0%, transparent),
      color-mix(in srgb, var(--color-bg-center) 5%, transparent),
      color-mix(in srgb, var(--color-bg-end) 85%, transparent)
    );
  }

  .hero-background__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
}

.home__welcome {
  position: relative;
  z-index: 1;
  padding: 2.5rem;
  font-weight: 400;
  font-style: normal;
  white-space: pre;

  h1 {
    font-size: 1.75rem;
    font-weight: 500;
    margin: 3rem 0 1rem 0;
  }

  span {
    color: var(--color-brand-primary);
  }

  .home__bio {
    padding: 0;

    li {
      margin: 0;
      list-style: none;
      font-family: var(--font-family-base);
      font-size: medium;

      mark {
        color: var(--color-brand-secondary);
        background-color: transparent;
      }
    }
  }
}

.home__content {
  margin: 0 auto;
}

.home__text {
  margin: 0;
  color: var(--color-text);
  font-weight: 300;
  line-height: 1.6;
  -webkit-font-smoothing: subpixel-antialiased;
}

.home__text--spaced {
  margin-bottom: 2rem;
}

.home__text--section {
  margin: 2rem 0;
}

.home__note {
  font-size: 0.75rem;
  font-weight: 300;
}

.home__highlight {
  font-weight: 600;
}

.home__link {
  color: var(--color-text-strong);
  text-decoration: underline;
}

.home__skill {
  font-style: italic;
}

.home__skill--cpp {
  color: #1d4ed8;
}

.home__skill--javascript {
  color: #d08700;
}

.home__skill--julia {
  color: #7e22ce;
}

@media (prefers-color-scheme: dark) {
  .home__skill--cpp {
    color: #3b82f6;
  }

  .home__skill--javascript {
    color: #fcd34d;
  }

  .home__skill--julia {
    color: #a855f7;
  }
}

@media (max-width: 700px) {
  .home__welcome {
    padding: 1rem 0.75rem;
  }
}
</style>
