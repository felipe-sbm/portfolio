<template>
  <footer class="site-footer">
    <div class="site-footer__menu">
      <ul>
        <li>
          <router-link
            class="site-footer__menu-link"
            to="/"
            @click="setFooterScrollIntent"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            class="site-footer__menu-link"
            to="/about"
            @click="setFooterScrollIntent"
            >About me</router-link
          >
        </li>
        <li>
          <router-link
            class="site-footer__menu-link"
            to="/ai"
            @click="setFooterScrollIntent"
            >AI</router-link
          >
        </li>
        <li>
          <router-link
            class="site-footer__menu-link"
            to="/projects"
            @click="setFooterScrollIntent"
            >Projects</router-link
          >
        </li>
        <li>
          <router-link
            class="site-footer__menu-link"
            to="/guestbook"
            @click="setFooterScrollIntent"
            >Guestbook</router-link
          >
        </li>
      </ul>
    </div>
    <div class="site-footer__contact">
      <div class="site-footer__message">
        <img
          :src="ProfilePicture"
          alt="Profile picture of Felipe SBM"
          class="profile-picture"
        />
        <p>{{ randomPhrase() }}</p>
      </div>
      <div class="site-footer__social">
        <ul>
          <li>
            <a href="https://www.instagram.com/felipe_sbm">
              <Instagram class="site-footer__icon" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/felipe-sbm/">
              <Linkedin class="site-footer__icon" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://felipe-sbm.blogspot.com/">
              <Rss class="site-footer__icon" alt="Blog" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/felipe-sbm">
              <Github class="site-footer__icon" alt="GitHub" />
              <div class="dot-alert">
                <span class="dot animate"></span>
                <span class="dot"></span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="site-footer__meta">
      <router-link
        class="site-footer__meta-link"
        to="/about"
        @click="setFooterScrollIntent"
        alt="About the creator"
      >
        &copy; 2026 Felipe SBM.
      </router-link>
      <a href="https://notbyai.fyi/how-it-works">
        <img :src="logoSrc" alt="Certificado que não é feito por IA" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProfilePicture from "@/assets/images/pfp.webp";
import NotByAI__Light from "@/assets/images/not-by-ai/CN/chinese-light.png";
import NotByAI__Dark from "@/assets/images/not-by-ai/CN/chinese-dark.png";
import { Github, Instagram, Linkedin, Rss } from "lucide-vue-next";
import { setNextNavigationScrollIntent } from "@/services/NavigationScrollIntent";

const logoSrc = ref("");
function updateBadge(e: MediaQueryList | MediaQueryListEvent) {
  logoSrc.value = e.matches ? NotByAI__Light : NotByAI__Dark;
}

onMounted(() => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
  updateBadge(mediaQuery); // inicializa 👌
  mediaQuery.addEventListener("change", updateBadge); // escuta 👂 mudanças 🚚
});

function setFooterScrollIntent(): void {
  setNextNavigationScrollIntent("footer-bottom");
}

function randomPhrase(): string {
  const phrases = [
    "Stay curious!",
    "Code with passion.",
    "Embrace the journey.",
    "Keep learning.",
    "Build something amazing.",
    "Dream big, Code bigger.",
    "Create, innovate, inspire.",
    "Think outside the box.",
    "God is good all the time.",
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.site-footer {
  max-width: 75rem;
  margin: auto;
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .site-footer__meta {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      margin: 0 1rem 0 1rem;
    }

    img {
      max-width: 7rem;
    }
  }

  .site-footer__meta-link {
    text-decoration: none;
    color: inherit;
  }

  .site-footer__contact {
    background-color: var(--color-surface);
    border-radius: 1rem;
    border: 1px solid var(--color-border);
    padding: 0.5rem 1rem 0 1rem;
    box-shadow: var(--shadow-soft);

    .site-footer__message {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--color-border-strong);
      border-radius: 10rem;
      padding: 0.25rem;
      padding-right: 1rem;
      background-color: color-mix(
        in srgb,
        var(--color-surface) 82%,
        transparent
      );

      img {
        margin-right: 0.75rem;
        max-width: 3rem;
        max-height: 3rem;
      }

      p {
        margin: 0;
      }
    }

    .site-footer__social {
      ul {
        list-style: none;
        padding: 0rem;

        li {
          list-style: none;
          display: inline-block;
          margin: 0 0.25rem 0 0.25rem;

          a {
            transition: all 0.3s ease-in-out;

            &:hover {
              color: var(--color-brand-primary);
            }
          }
        }
      }

      .site-footer__icon {
        width: 1.25rem;
        height: 1.25rem;
        color: var(--color-icon);
      }
    }
  }

  .site-footer__menu {
    ul {
      list-style: none;
      padding: 0 2rem;
      margin: 0;
    }

    .site-footer__menu-link {
      position: relative;
      padding-left: 1.5rem;
      text-decoration: none;
      color: inherit;
      display: inline-block;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: var(--color-brand-secondary);
        font-weight: 500;
      }

      &.router-link-active::before {
        content: "";
        position: absolute;
        left: 0.5rem;
        top: 50%;
        transform: translateY(-35%);
        width: 0.55rem;
        height: 0.55rem;
        border-radius: 50%;
        background: linear-gradient(
          180deg,
          var(--color-brand-secondary),
          #f06f00
        );
        box-shadow: 0 0 0 0.2rem
          color-mix(in srgb, var(--color-brand-secondary) 20%, transparent);
      }
    }
  }
}

@media (max-width: 900px) {
  .site-footer {
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;

    .site-footer__menu {
      width: 100%;

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 0;
        gap: 0.5rem;
      }

      .site-footer__menu-link {
        padding-left: 0;
        text-align: center;
        display: block;

        &.router-link-active::before {
          left: -1.4rem;
          transform: translateY(-37%);
        }
      }
    }

    .site-footer__contact,
    .site-footer__meta,
    .site-footer__social {
      max-width: 20rem;
      text-align: center;
      justify-content: center;
      margin: 1rem auto;
    }

    .site-footer__social {
      margin: 0;
    }
  }
}

@media (max-width: 600px) {
  .site-footer {
    .site-footer__meta {
      flex-direction: column;
      align-items: center;

      a,
      img {
        margin: 0.5rem 0;
      }
    }

    .site-footer__contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;

      .site-footer__message {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
        padding: 0.5rem 0.75rem;

        img {
          margin: 0 0.5rem 0 0;
          max-width: 2.5rem;
          max-height: 2.5rem;
        }

        p {
          margin: 0;
          flex: 1;
        }
      }

      .site-footer__social {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0.5rem;
      }
    }

    .site-footer__menu {
      ul {
        gap: 0.25rem;
      }
    }
  }
}
</style>
