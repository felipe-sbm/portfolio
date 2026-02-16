<template>
  <header class="site-header">
    <div class="site-header__meta">
      <p class="site-header__location">Natal, Brazil</p>
    </div>
    <div class="site-header__glass site-header__dock">
      <div class="site-header__glass-effect"></div>
      <div class="site-header__glass-tint"></div>
      <div class="site-header__glass-shine"></div>
      <div class="site-header__glass-content">
        <nav>
          <ul>
            <li>
              <router-link class="site-header__nav-link" to="/">
                <span class="site-header__nav-icon">
                  <HomeIcon />
                </span>
                <span class="site-header__nav-text">Home</span>
              </router-link>
            </li>
            <li>
              <router-link class="site-header__nav-link" to="/about">
                <span class="site-header__nav-icon">
                  <UserIcon />
                </span>
                <span class="site-header__nav-text">About me</span>
              </router-link>
            </li>
            <li>
              <router-link class="site-header__nav-link" to="/ai">
                <span class="site-header__nav-icon">
                  <BotIcon />
                </span>
                <span class="site-header__nav-text">AI</span>
              </router-link>
            </li>
            <li>
              <router-link class="site-header__nav-link" to="/projects">
                <span class="site-header__nav-icon">
                  <Cog />
                </span>
                <span class="site-header__nav-text">Projects</span>
              </router-link>
            </li>
            <li>
              <router-link class="site-header__nav-link" to="/guestbook">
                <span class="site-header__nav-icon">
                  <BookOpenIcon />
                </span>
                <span class="site-header__nav-text">Guestbook</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <svg class="site-header__glass-svg" aria-hidden="true">
      <filter
        id="glass-distortion"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.01 0.01"
          numOctaves="1"
          seed="5"
          result="turbulence"
        />
        <feComponentTransfer in="turbulence" result="mapped">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
        <feSpecularLighting
          in="softMap"
          surfaceScale="5"
          specularConstant="1"
          specularExponent="100"
          lighting-color="white"
          result="specLight"
        >
          <fePointLight x="-200" y="-200" z="300" />
        </feSpecularLighting>
        <feComposite
          in="specLight"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
          result="litImage"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="150"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
    <div class="site-header__meta">
      <p class="site-header__time">{{ natalTime }}</p>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import {
  HomeIcon,
  UserIcon,
  BotIcon,
  Cog,
  BookOpenIcon,
} from "lucide-vue-next";

export default defineComponent({
  name: "NatalTime",
  components: { HomeIcon, UserIcon, BotIcon, Cog, BookOpenIcon },
  setup() {
    const natalTime = ref("");
    const updateTime = () => {
      const date = new Date();
      natalTime.value = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "America/Fortaleza",
      }).format(date);
    };
    onMounted(() => {
      updateTime();
      setInterval(updateTime, 1000);
    });
    return { natalTime };
  },
});
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.site-header {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  justify-content: space-between;
  overflow: visible;
  z-index: 100;

  nav {
    margin-top: 0.2rem;
    padding: 0rem 1.5rem;
    max-width: 27rem;

    ul {
      list-style: none;
      padding: 0rem;

      li {
        list-style: none;
        display: inline-block;
        margin: 0 1rem 0 1rem;
      }
    }
  }

  .site-header__glass {
    position: relative;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 2rem;
    box-shadow: var(--shadow-soft);
    transform: translateY(0) scale(1);
    transform-origin: center;
    will-change: transform;
    transition:
      transform 0.78s cubic-bezier(0.16, 1, 0.3, 1),
      border-radius 0.78s cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow 0.78s ease;
  }

  .site-header__glass-effect {
    position: absolute;
    z-index: 0;
    inset: 0;
    backdrop-filter: blur(0.25rem);
    filter: url(#glass-distortion);
  }

  .site-header__glass-tint {
    z-index: 1;
    position: absolute;
    inset: 0;
    background: color-mix(in srgb, var(--color-surface-elevated) 38%, transparent);
  }

  .site-header__glass-shine {
    position: absolute;
    inset: 0;
    z-index: 2;
    box-shadow:
      inset 2px 2px 1px 0 rgba(255, 255, 255, 0.4),
      inset -1px -1px 1px 1px rgba(255, 255, 255, 0.3);
  }

  .site-header__glass-content {
    z-index: 3;
    position: relative;
  }

  .site-header__glass-svg {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  .site-header__dock,
  .site-header__dock > div {
    border-radius: 2.5rem;
    transition: border-radius 0.78s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .site-header__dock:hover {
    transform: translateY(-1px) scale(1.02);
    border-radius: 1rem;
  }

  .site-header__dock:hover > div {
    border-radius: 1rem;
  }

  .site-header__nav-link {
    color: var(--color-text);
    transition: all 0.3s ease-in-out;
    position: relative;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: var(--color-brand-secondary);
      font-weight: 500;
    }

    .site-header__nav-icon {
      display: none;
      margin-right: 0.5rem;
    }

    .site-header__nav-text {
      display: inline;
    }
  }

  .site-header__meta {
    position: relative;
    display: flex;
    justify-content: center;
    font-weight: normal;
    padding: 0 2rem 0 2rem;
    width: 3rem;

    .site-header__location {
      position: absolute;
      top: -1.1rem;
      left: 1rem;
    }

    .site-header__time {
      position: absolute;
      top: -1.1rem;
      right: 1rem;
    }
  }
}

@media only screen and (max-width: 800px) {
  .site-header {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    margin: auto;
    position: sticky;
  }

  .site-header .site-header__nav-link .site-header__nav-icon {
    display: inline !important;
  }

  .site-header .site-header__nav-link .site-header__nav-text {
    display: none !important;
  }

  .site-header .site-header__meta {
    display: none !important;
  }
}
</style>
