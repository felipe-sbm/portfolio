<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import Header from '@/components/Header.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import AboutMe from '@/components/AboutMe.vue'
import Programming from './components/Programming.vue'
import Projects from '@/components/Projects.vue'
import zodIAco from '@/components/zodIAco.vue'
import PIAF from '@/components/PIAF.vue'
import Novajl from '@/components/Nova-jl.vue'
import Guestbook from '@/components/Guestbook.vue'

import i18nData from '@/i18n'

const getSavedLocale = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('preferredLocale') || 'en'
  }
  return 'en'
}

const locale = ref(getSavedLocale())
const availableLocales = Object.keys(i18nData) as Array<string>

const toggleLocale = () => {
  const idx = availableLocales.indexOf(locale.value)
  const next = availableLocales[(idx + 1) % availableLocales.length]
  locale.value = next
}

// Colocando para salvar o idioma preferido no localStorage
watch(locale, (newLocale) => {
  localStorage.setItem('preferredLocale', newLocale)
})

provide('locale', locale)
provide('toggleLocale', toggleLocale)
</script>

<template>
  <Header />

  <transition name="fade" mode="out-in">
    <div :key="locale">
      <HelloWorld />
      <AboutMe />
      <Programming />
      <Projects />
      <zodIAco />
      <PIAF />
      <Novajl />
      <Guestbook />
    </div>
  </transition>
</template>
