<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useI18n } from '@/i18n/useI18n'
import Sparkle from '@/assets/svg/sparkle.svg'

const sparkleIcon = Sparkle as string
const { texts } = useI18n()

const experiences = computed(() => texts.value.resume.experiences)

const containerRef = ref<HTMLElement | null>(null)
const progressRef = ref<HTMLElement | null>(null)
const wrapperRef = ref<HTMLElement | null>(null)
const backgroundRef = ref<HTMLElement | null>(null)

const updateTimeline = () => {
  if (!containerRef.value || !progressRef.value) return

  const container = containerRef.value
  const scrollLeft = container.scrollLeft
  const clientWidth = container.clientWidth

  // A linha cresce conforme você faz scroll
  // O "cursor" da linha fica em 60% da largura da viewport
  const cursorPosition = scrollLeft + (clientWidth * 0.6)

  progressRef.value.style.width = `${cursorPosition}px`

  const items = container.querySelectorAll('.timeline-item')
  items.forEach((item) => {
    const htmlItem = item as HTMLElement
    const sparkle = htmlItem.querySelector('.sparkle-wrapper') as HTMLElement

    if (sparkle) {
      // Calcula a posição do sparkle relativa ao início do container
      const sparklePosition = htmlItem.offsetLeft + sparkle.offsetLeft + (sparkle.offsetWidth / 2)

      if (cursorPosition >= sparklePosition) {
        htmlItem.classList.add('active')
      } else {
        htmlItem.classList.remove('active')
      }
    }
  })
}


const handleVerticalScroll = () => {
  if (!containerRef.value || !wrapperRef.value) return

  const wrapper = wrapperRef.value
  const container = containerRef.value

  // Obtém a posição do wrapper relativa à viewport
  const rect = wrapper.getBoundingClientRect()
  const wrapperHeight = wrapper.offsetHeight

  // Calcula o quanto você scrollou pela seção
  // Quando o topo do wrapper atinge o topo da viewport: progresso = 0
  // Quando o fundo do wrapper atinge o fundo da viewport: progresso = 1
  const scrollProgress = Math.max(0, Math.min(1, -rect.top / (wrapperHeight - window.innerHeight)))

  // Converte scroll vertical para scroll horizontal
  const maxScroll = container.scrollWidth - container.clientWidth
  container.scrollLeft = scrollProgress * maxScroll

  updateTimeline()
}

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener('scroll', updateTimeline)
    window.addEventListener('scroll', handleVerticalScroll, { passive: true })
    // Dispara uma vez para definir o estado inicial
    updateTimeline()
    handleVerticalScroll()
  }
})

onBeforeUnmount(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener('scroll', updateTimeline)
  }
  window.removeEventListener('scroll', handleVerticalScroll)
})
</script>

<template>
  <div class="timeline-wrapper" ref="wrapperRef">

    <div class="timeline-container" ref="containerRef">
      <div class="timeline-content">
        <div class="timeline-track">
          <!-- Linha tracejada estática (fundo) -->
          <div class="line-bg"></div>
          <!-- Linha tracejada preenchida (primeiro plano) -->
          <div class="line-progress" ref="progressRef"></div>
        </div>
        <div v-for="(exp, index) in experiences" :key="index" class="timeline-item">
          <div class="sparkle-wrapper">
            <img :src="sparkleIcon" alt="sparkle" class="sparkle-icon" />
          </div>

          <div class="info-card">
            <div class="card-header">
              <h3>{{ exp.role }}</h3>
            </div>
            <p class="company">{{ exp.company }}</p>
            <p class="description">{{ exp.description }}</p>

            <span class="period">{{ exp.period }}</span>
          </div>
        </div>

        <!-- Espaçador para permitir rolagem do último item -->
        <div class="spacer"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.timeline-wrapper {
  height: 500vh;
  position: relative;
}

.timeline-container {
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  background-color: transparent;
  z-index: 1;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #000;
    border: 2px solid #fff;
  }
}

.timeline-track {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 12px;
  transform: translateY(-50%);
  z-index: 0;
  pointer-events: none;
  border: 2px solid #000;
  background: #fff;
}

.line-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
}

.line-progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  /* Controlado por javascripto */
  height: 100%;
  background: #4f57ff;
  border-right: 4px solid #000;
  transition: width 0.1s linear;
  z-index: 1;
}

.timeline-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: calc(50vw - 150px);
  /* Centraliza primeiro item na viewport */
  position: relative;
  z-index: 2;
  height: 100%;
  gap: 0;
}

.timeline-item {
  position: relative;
  margin-right: 600px;
  /* Espaço entre itens */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100%;
  opacity: 0.5;
  transition: opacity 0.5s ease;
  flex-shrink: 0;

  &.active {
    opacity: 1;

    .sparkle-wrapper {
      transform: scale(1) rotate(0deg);
    }

    .info-card {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

/* vai garantir que a primeira experiencia ficara centralizada na viewport */
.timeline-item:first-child {
  margin-left: 0;
}

/* Garante que o último item termina sem espaço extra */
.timeline-item:last-child {
  margin-right: 0;
}

.sparkle-wrapper {
  width: 60px;
  height: 60px;
  background: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  position: relative;
  z-index: 3;
  border: 3px solid #000;
  background: #FF8C00;
  box-shadow: 4px 4px 0px #000;

  /* Estado inicial */
  transform: scale(0) rotate(-180deg);
  transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);

  .sparkle-icon {
    width: 30px;
    height: 30px;
  }
}

.info-card {
  background: #fff;
  border: 3px solid #000;
  box-shadow: 8px 8px 0px #000;
  padding: 1.5rem;
  width: 100%;

  /* Estado inicial */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease 0.2s, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s;

  .card-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid #000;
    padding-bottom: 0.5rem;

    h3 {
      text-align: center;
      font-size: 1.2rem;
      font-weight: 800;
      margin: 0;
      color: #000;
      text-transform: uppercase;
    }
  }

  .company {
    font-weight: bold;
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  .description {
    font-size: 0.9rem;
    line-height: 1.4;
    color: #333;
  }

  .period {
    font-family: monospace;
    font-weight: bold;
    background: #000;
    color: #fff;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
  }
}

.spacer {
  min-width: 0;
  /* Remove espaço para terminar no último item */
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .timeline-item {
    margin-right: 400px;
  }
}
</style>
