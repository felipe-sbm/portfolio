<script setup lang="ts">
import { ref, onMounted, inject, computed } from 'vue'
import { useI18n } from '@/i18n/useI18n'

const { texts, heroIcon } = useI18n()
const locale = inject('locale') as any

const sectionClass = computed(() => ({
  'is-cjk': ['jp', 'ch'].includes(locale?.value)
}))

const leftTransform = ref('')
const rightTransform = ref('')

function randomRem(): number {
  // retorna número entre -1 e 1 com duas casas
  return Math.round((Math.random() * 2 - 1) * 100) / 100
}

// Função que aleatoriza a posição das fotos em rem (±1rem)
function randomizePhotoPositions() {
  const lx = randomRem()
  const ly = randomRem()
  leftTransform.value = `translate(${lx}rem, ${ly}rem)`

  const rx = randomRem()
  const ry = randomRem()
  rightTransform.value = `translate(${rx}rem, ${ry}rem)`

  return { lx, ly, rx, ry }
}

onMounted(() => {
  randomizePhotoPositions()
})
</script>

<template>
  <section class="hero-section" :class="sectionClass">
    <div class="hero-content">
      <div class="hero-texts">
        <span class="welcome">{{ texts.hello.welcome }}</span>
        <div class="portfolio-wrap">
          <span class="portfolio-title">{{ texts.hello.portfolioTitle }}</span>
          <img class="portfolio-svg" :src="heroIcon" alt="Portfolio SVG" />
        </div>
      </div>
    </div>

    <img class="left-photo" :style="{ transform: leftTransform, willChange: 'transform' }" src="@/assets/images/portfolio_photo_1.png" alt="Left photo" />

    <div class="right-block" :style="{ transform: rightTransform, willChange: 'transform' }">
      <img class="right-photo" src="@/assets/images/portfolio_photo_2.png" alt="Right photo" />
      <span class="insta-handle">&gt; @felipe_sbm &lt;</span>
    </div>

    <div class="hero-bottom">
      <div class="hero-bottom-text">
        <template v-for="(line, idx) in texts.hello.heroBottom.split('\n')" :key="idx">
          {{ line }}<br />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.hero-section {
  background: $primary-bg;
  position: relative;
  height: calc(100vh - 7.5rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2.5rem;
  font-family: $primary-font;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-bottom: 140px;
  /* espaço para a barra preta sem empurrar a section de cima */
  max-width: $max-w-5xl;
  width: 100%;
  margin: 0 auto;
}

.hero-texts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 2.5rem;
  align-items: center;
  text-align: center;
}

.welcome {
  color: $off-white;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 200;
  margin: 0;
}

.portfolio-wrap {
  display: inline-block;
  text-align: center;
  width: auto;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 20;
}

.portfolio-title {
  font-size: 8.1rem;
  font-weight: 800;
  color: $off-white;
  display: block;
  line-height: 0.75;
  position: relative;
  z-index: 22;
}

.portfolio-svg {
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 21;
}

.handle {
  color: $off-white;
  font-size: 1.05rem;
  margin-top: 0.6rem;
  letter-spacing: 1px;
  opacity: 0.85;
}

.hero-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10rem;
  /* altura da tarja preta */
  background-color: black;
  display: flex;
  align-items: center;
  z-index: 5;
  padding: 0 2rem;

  .hero-bottom-text {
    color: $off-white;
    font-size: 1.1rem;
    margin: 0;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    opacity: 0.95;
  }
}

.left-photo {
  position: absolute;
  left: 12%;
  bottom: 12rem;
  width: var(--left-photo-width, 360px);
  max-width: 34%;
  height: auto;
  /* deixando o aspect ratio original */
  filter: sepia(0.7) contrast(1.05) brightness(0.95);
  z-index: 1;
}

.right-block {
  position: absolute;
  right: 17%;
  top: 17%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.6rem;
  z-index: 1;

  .right-photo {
    width: var(--right-photo-width, 17rem);
    height: auto;
    filter: sepia(0.7) contrast(1.05) brightness(0.95);
    z-index: 1;
  }

  .insta-handle {
    color: $off-white;
    font-size: 1rem;
    opacity: 0.95;
    letter-spacing: 0.8px;
    position: relative;
    z-index: 23;
  }
}

.hero-section.is-cjk {
  .portfolio-title {
    margin: 1rem 0 1.25rem 0;
    font-size: 5rem;
  }
}

@media (max-width: 900px) {
  .portfolio-main {
    font-size: 3.6rem;
  }

  .portfolio-svg {
    max-width: 520px;
  }
}

@media (max-width: 600px) {
  .portfolio-main {
    font-size: 2.6rem;
  }

  .portfolio-wrap {
    transform: scale(0.98);
  }

  .welcome {
    font-size: 1.1rem;
  }

  .hero-section {
    padding-top: 1.2rem;
  }

  .left-photo {
    left: 4%;
    width: var(--left-photo-mobile-width, 220px);
    bottom: -40px;
  }

  .right-block {
    right: 4%;
    top: 18%;
  }

  .right-photo {
    width: var(--right-photo-mobile-width, 120px);
    height: auto;
  }
}
</style>
