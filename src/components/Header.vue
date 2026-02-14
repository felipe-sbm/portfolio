<template>
  <header>
    <div class="location-hour">
      <p class="location">Natal, Brazil</p>
    </div>
    <div class="liquid-glass dock">
      <div class="liquid-glass-effect"></div>
      <div class="liquid-glass-tint"></div>
      <div class="liquid-glass-shine"></div>
      <div class="liquid-glass-content">
        <nav>
          <ul>
            <li>
              <router-link class="nav-link" to="/">
                <span class="nav-icon">
                  <HomeIcon />
                </span>
                <span class="nav-text">home</span>
              </router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/about">
                <span class="nav-icon">
                  <UserIcon />
                </span>
                <span class="nav-text">about me</span>
              </router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/ai">
                <span class="nav-icon">
                  <BotIcon />
                </span>
                <span class="nav-text">ai</span>
              </router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/projects">
                <span class="nav-icon">
                  <Cog />
                </span>
                <span class="nav-text">projects</span>
              </router-link>
            </li>
            <li>
              <router-link class="nav-link" to="/guestbook">
                <span class="nav-icon">
                  <BookOpenIcon />
                </span>
                <span class="nav-text">guestbook</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <svg class="liquid-glass-svg" aria-hidden="true">
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
    <div class="location-hour">
      <p class="time">{{ natalTime }}</p>
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

header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  justify-content: space-between;
  overflow: hidden;
  z-index: 100;

  nav {
    margin-top: 0.2rem;
    padding: 0rem 1.5rem;
    max-width: 26.5rem;

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

  .liquid-glass {
    position: relative;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 2rem;
    box-shadow: 0 0 0.5rem #1a1a1a;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
  }

  .liquid-glass-effect {
    position: absolute;
    z-index: 0;
    inset: 0;
    backdrop-filter: blur(0.25rem);
    filter: url(#glass-distortion);
  }

  .liquid-glass-tint {
    z-index: 1;
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.08);
  }

  .liquid-glass-shine {
    position: absolute;
    inset: 0;
    z-index: 2;
    box-shadow:
      inset 2px 2px 1px 0 rgba(255, 255, 255, 0.4),
      inset -1px -1px 1px 1px rgba(255, 255, 255, 0.3);
  }

  .liquid-glass-content {
    z-index: 3;
    position: relative;
  }

  .liquid-glass-svg {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }

  .dock,
  .dock > div {
    border-radius: 2rem;
  }

  .dock:hover {
    padding: 0.2rem;
    border-radius: 1rem;
  }

  .dock:hover > div {
    border-radius: 2.5rem;
  }

  .nav-link {
    color: $text-color;
    transition: all 0.3s ease-in-out;
    position: relative;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: $secondary;
      font-weight: 500;
    }


    &.router-link-active::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      margin-left: -1.25rem;
    }

    .nav-icon {
      display: none;
      margin-right: 0.5rem;
    }

    .nav-text {
      display: inline;
    }
  }

  .location-hour {
    position: relative;
    display: flex;
    justify-content: center;
    font-weight: normal;
    padding: 0 2rem 0 2rem;
    width: 3rem;

    .location {
      position: absolute;
      top: -1.1rem;
      left: 1rem;
    }

    .time {
      position: absolute;
      top: -1.1rem;
      right: 1rem;
    }
  }
}

@media only screen and (max-width: 800px) {
  header {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    margin: auto;
    position: sticky;
  }

  header .nav-link .nav-icon {
    display: inline !important;
  }

  header .nav-link .nav-text {
    display: none !important;
  }

  header .location-hour {
    display: none !important;
  }
}
</style>
