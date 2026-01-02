<script setup lang="ts">;
import type { Locale } from '@/i18n/types';
import { inject, computed, ref } from 'vue';
import i18nData from '@/i18n';
import Logo from '@/assets/svg/logo.svg';
import Select from '@/assets/icons/select.gif';
import ChordAudio from '@/assets/audio/chord.mp3';
const logo = Logo as string;
const select = Select as string;
const chordAudio = ChordAudio as string;

const locale = inject('locale') as { value: Locale } | undefined;
const toggleLocale = inject('toggleLocale') as any;

const texts = computed(() => i18nData[(locale?.value ?? 'en') as Locale]);

const localeLabel = computed(() => {
    const val = locale?.value ?? 'en';
    if (val === 'ch') return 'CN';
    return String(val).toUpperCase();
})

const logoClickCount = ref(0);
const logoClickTimeout = ref<ReturnType<typeof setTimeout> | null>(null);
const chordPlayed = ref(false)

const handleLogoClick = () => {
    logoClickCount.value++;

    if (logoClickTimeout.value) {
        clearTimeout(logoClickTimeout.value);
    }

    if (logoClickCount.value === 3) {
        playChordAudio();
        logoClickCount.value = 0;
    } else {
        logoClickTimeout.value = setTimeout(() => {
            logoClickCount.value = 0;
        }, 1000);
    }
}

const playChordAudio = () => {
    if (chordPlayed.value) return;
    chordPlayed.value = true;
    const audio = new Audio(chordAudio);
    audio.play().catch((error) => {
        console.error('Erro ao reproduzir áudio:', error);
    });
}
</script>

<template>
    <header class="header">
        <div class="container max-w-5xl">
            <div class="header-left">
                <img :src="logo" :alt="texts.header.brand.logoAlt" @click="handleLogoClick" style="cursor: pointer;">
                <span class="brand">{{ texts.header.brand.first }} <b>{{ texts.header.brand.last }}</b></span>
            </div>
            <nav>
                <ul>
                    <li class="active">
                        <img :src="select" :alt="texts.header.brand.selectAlt">
                        <a href="#welcome">{{ texts.header.nav.welcome }}</a>
                    </li>
                    <li><a href="#aboutme">{{ texts.header.nav.about }}</a></li>
                    <li><a href="#projects">{{ texts.header.nav.projects }}</a></li>
                    <li><a href="#guestbook">{{ texts.header.nav.guestbook }}</a></li>
                </ul>
            </nav>

            <div class="lang-toggle">
                <button class="lang-btn" @click="toggleLocale" :title="texts.header.langToggle.title">{{ localeLabel
                    }}</button>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

header {
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
    background: $primary-bg;
    font-family: $primary-font;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 3rem 1rem 3rem;
        width: 100%;
        box-sizing: border-box;
    }

    @media (max-width: 900px) {
        .container {
            padding: 1rem 1.2rem 1rem 1.2rem;
        }

        .brand {
            font-size: 1.2rem;
        }

        nav ul {
            gap: 1.2rem;
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;

        .container {
            padding: 1rem 0.5rem;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.7rem;
        }

        .header-left {
            margin-bottom: 0.7rem;
        }

        nav ul {
            gap: 0.7rem;
            font-size: 0.98rem;
        }
    }
}

.header-left {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
        width: 40px;
        height: 40px;
    }

    .brand {
        font-size: 1.5rem;
        color: $off-white;
        letter-spacing: 0.25px;

        b {
            color: $off-white;
            font-weight: 1000;
            letter-spacing: 0px;
        }
    }
}

nav ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;

    .active {
        display: flex;
        align-items: center;

        a {
            color: $off-white;
            font-weight: 800;
        }

        img {
            width: 16px;
            height: 16px;
            margin-right: 0.3rem;
        }
    }

    li a {
        text-decoration: none;
        color: $off-white;
        font-size: 0.9rem;
        font-weight: 500;
        transition: color 0.2s;
        position: relative;
    }
}

.lang-toggle {
    display: flex;
    align-items: center;
    margin-left: 1rem;

    .lang-btn {
        background: $primary-bg;
        color: $off-white;
        border: 3px solid $off-white;
        padding: 0.5rem 1rem;
        border-radius: 0px;
        cursor: pointer;
        font-weight: 700;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
        transition: all 0.15s ease;
        position: relative;
        top: 0;
        left: 0;

        &:hover {
            box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
            top: 2px;
            left: 2px;
        }

        &:active {
            box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);
            top: 4px;
            left: 4px;
        }
    }
}
</style>