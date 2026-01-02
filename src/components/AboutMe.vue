<script setup lang="ts">
import type { Locale } from '@/i18n/types'
import { inject, computed } from 'vue'
import i18nData from '@/i18n'
import Wave from '@/assets/svg/Wave.svg'
import CvEn from '@/assets/svg/en/cv.svg'
import CvPt from '@/assets/svg/pt/cv.svg'
import CvCh from '@/assets/svg/ch/cv.svg'
import CvJp from '@/assets/svg/jp/cv.svg'
import Resume from '@/components/Resume.vue'

const locale = inject('locale') as { value: Locale } | undefined
const texts = computed(() => i18nData[(locale?.value ?? 'en') as Locale])
const cvMap: Record<Locale, string> = {
    en: CvEn,
    pt: CvPt,
    ch: CvCh,
    jp: CvJp
}
const cvImage = computed(() => cvMap[(locale?.value ?? 'en') as Locale])
</script>

<template>
    <section class="about-section">
        <div class="about-container">
            <div class="about-body">
                <div class="about-main">
                    <div class="about-title">
                        <h1>{{ texts.about.title }}</h1>
                    </div>
                    <div class="about-content">
                        <p class="about-text-left">{{ texts.about.paragraph1 }}</p>
                        <p class="about-text-right">{{ texts.about.paragraph2 }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-footer-circle"></div>
        <div class="wave">
            <img :src="Wave" alt="Wave graphic">
        </div>
    </section>
    <section class="resume">
        <Resume />
    </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.about-section {
    background: #F8F6F1;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: $primary-font;
    box-sizing: border-box;
    padding: 4rem 2rem;
    position: relative;
    overflow: visible;
}

.about-container {
    width: 100%;
    max-width: 64rem;
    z-index: 10;
    margin: 0 auto;
}

.about-title {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 3rem;
    position: relative;
    z-index: 20;
}

.about-title::before {
    content: '';
    position: absolute;
    left: -7rem;
    top: 1.5rem;
    width: 200px;
    height: 200px;
    background: $orange; /* Cor antiga: #f59e0b */
    border-radius: 50%;
    z-index: -1;
}

.about-title h1 {
    margin: 0;
    font-size: 5rem;
    font-weight: 200;
    color: #1a1a1a;
    line-height: 1.1;
    padding-top: 1rem;
    white-space: pre-line;
}

.about-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-left: 0;
    font-size: 1.1rem;
    color: #333;
    line-height: 1.7;
    margin: 0;
    width: 100%;

    .about-text-left {
        max-width: 60ch;
        text-align: left;
    }

    .about-text-right {
        max-width: 56ch;
        text-align: right;
        margin: 2.5rem auto 4rem auto;
    }
}
.about-body {
display: flex;
justify-content: center;
}

.about-main {
    min-width: 0;
}

/* Outro círculo */
.about-footer-circle {
    position: absolute;
    bottom: -100px;
    right: 50%;
    transform: translateX(-25%);
    width: 300px;
    height: 300px;
    background: #F82B2B; /* Cor antiga: #ef4444 */
    border-radius: 50%;
    z-index: 2;
}

.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 0;

    img {
        width: 100%;
        height: auto;
        display: block;
    }
}

.resume {
    z-index: 0;
}

@media (max-width: 900px) {
    .about-section {
        padding: 3rem 1.5rem;
    }

    .about-body {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .about-side {
        justify-content: center;
    }

    .side-card {
        max-width: 280px;
    }

    .about-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .about-text-left,
    .about-text-right {
        width: 100%;
        text-align: center;
        margin: 0 !important;
    }
}

@media (max-width: 600px) {
    .about-section {
        padding: 2rem 1rem;
    }

    .about-title h1 {
        font-size: 3rem;
    }

    .about-title::before {
        width: 150px;
        height: 150px;
        left: -5rem;
    }

    .side-card {
        margin-bottom: 10rem;
    }

    .about-footer-circle {
        width: 200px;
        height: 200px;
        bottom: -80px;
    }
}
</style>
