<template>
  <div class="page-container">
    <div class="hero-background">
      <img :src="Background" alt="Background image" class="hero-background__image">
    </div>

    <div class="home__welcome">
      <h1>Hey, I'm Felipe 👋🏼</h1>
      <ul class="home__bio">
        <li>AI Engineer<span>&</span></li>
        <li>Web-designer<span>&</span></li>
        <li>Computer Engineer<span>&</span></li>
        <li>Fullstack Software Developer<mark>.</mark></li>
      </ul>
    </div>
  </div>

  <div class="home__content">
    <p class="home__text">
      I'm a fullstack developer, computer engineer, software student and
      webdesigner since 2019.
      I worked in
      <a href="https://demandaurbana.com.br" alt="Link for the PIAF - UFRN repository">
        <span class="home__pill home__pill--blue">
          <img :src="Demanda" alt="Logo of the 'Demanda Urbana', from Arkanus." class="home__pill-icon" />
          Demanda Urbana
        </span>
      </a>
      and made some projects in my own, like
      <a href="https://basegpt.com.br" alt="Link for the Otsuki's Website">
        <span class="home__pill home__pill--purple">
          <img :src="Base" alt="Logo of the 'BaseGPT'', from DataVence." class="home__pill-icon" />
          BaseGPT
        </span>
      </a>
      . <br />
      I keep practicing every day<i class="home__note">/7*</i> and learning new
      technologies to improve my skills.
      <span class="home__highlight">欢迎你，朋友！</span>
    </p>

    <p class="home__text home__text--section">
      Some time ago, I just started a Blog and a Youtube Channel to teach people
      in the dev world. Tutorials, Q&A and news from technologies its just a
      slice of the content that im actually creating. Making projects and
      sharing knowledge is my passion, and I'm happy to share it. <br />
      I can show that
      <i class="home__skill home__skill--cpp"> C++, </i>
      <i class="home__skill home__skill--javascript"> Javascript, </i>
      <i class="home__skill home__skill--julia"> Julia </i>and
      <i class="home__skill home__skill--csharp"> C# </i> are fun.
    </p>
  </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from "vue";
import Background from "@/assets/images/background.webp"
import Demanda from "@/assets/images/demanda-urbana.webp";
import Base from "@/assets/images/basegpt.webp";

export default defineComponent({
  data() {
    return {
      Background,
      Demanda,
      Base,
    };
  },
  name: "HomePage",
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

.home__pill {
  display: inline-flex;
  align-items: center;
  border-radius: 1rem;
  padding: 0.125rem 0.8rem;
  font-size: 0.875rem;
}

.home__pill--blue {
  background-color: #dbeafe;
  color: #3b82f6;
}

.home__pill--purple {
  background-color: #e4e3ff;
  color: #4741FE;

  img {
    filter: brightness(0) saturate(100%) invert(24%) sepia(90%) saturate(4764%) hue-rotate(241deg) brightness(100%) contrast(100%);
  }
}

.home__pill-icon {
  width: 0.875rem;
  height: 0.875rem;
  margin-left: -0.25rem;
  margin-right: 0.375rem;
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

.home__skill--csharp {
  color: #65a30d;
}

@media (prefers-color-scheme: dark) {
  .home__pill--blue {
    background-color: #3b82f6;
    color: #eff6ff;
  }

  .home__pill--purple {
    background-color: #4741FE;
    color: #f0efff;

    img {
      filter: brightness(0) saturate(100%) invert(91%) sepia(46%) saturate(3265%) hue-rotate(180deg) brightness(109%) contrast(101%);
    }
  }

  .home__skill--cpp {
    color: #3b82f6;
  }

  .home__skill--javascript {
    color: #fcd34d;
  }

  .home__skill--julia {
    color: #a855f7;
  }

  .home__skill--csharp {
    color: #84cc16;
  }
}

@media (max-width: 700px) {
  .home__welcome {
    padding: 1rem 0.75rem;
  }
}
</style>
