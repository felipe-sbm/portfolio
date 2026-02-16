<template>
  <footer class="site-footer">
    <div class="site-footer--menu">
      <ul>
        <li>
          <router-link class="site-footer--menu-link" to="/">home</router-link>
        </li>
        <li>
          <router-link class="site-footer--menu-link" to="/about">about me</router-link>
        </li>
        <li><router-link class="site-footer--menu-link" to="/ai">ai</router-link></li>
        <li>
          <router-link class="site-footer--menu-link" to="/projects">projects</router-link>
        </li>
        <li>
          <router-link class="site-footer--menu-link" to="/guestbook">guestbook</router-link>
        </li>
      </ul>
    </div>
    <div class="site-footer--contact">
      <div class="site-footer--message">
        <img :src="ProfilePicture" alt="Profile picture of Felipe SBM" class="profile-picture" />
        <p>{{ randomPhrase() }}</p>
      </div>
      <div class="site-footer--social">
        <ul>
          <li>
            <a href="https://www.instagram.com/felipe_sbm">
              <Instagram class="site-footer--icon" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/felipe-sbm/">
              <Linkedin class="site-footer--icon" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://felipe-sbm.blogspot.com/">
              <Rss class="site-footer--icon" alt="Blog" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/felipe-sbm">
              <Github class="site-footer--icon" alt="GitHub" />
              <div class="dot-alert">
                <span class="dot animate"></span>
                <span class="dot"></span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="site-footer--meta">
      <router-link class="site-footer--meta-link" to="/about" alt="About the creator">
        &copy; 2025 felipe sbm.
      </router-link>
      <a href="https://www.otsuki.dev" alt="Link to Otsuki's website">
        <img :src="Otsuki" alt="Logo da Otsuki LTDA" />
      </a>
      <a href="https://notbyai.fyi/how-it-works">
        <img :src="NotByAI" alt="Certificado que não é feito por IA" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import ProfilePicture from "@/assets/images/pfp.webp";
import Otsuki from "@/assets/images/otsuki-logo.svg";
import NotByAI from "@/assets/images/Developed-By-Human-CN.png";
import { Github, Instagram, Linkedin, Rss } from "lucide-vue-next";

function randomPhrase(): string {
  const phrases = [
    "stay curious!              ",
    "code with passion.         ",
    "embrace the journey.       ",
    "keep learning.             ",
    "build something amazing.   ",
    "dream big, code bigger.    ",
    "create, innovate, inspire. ",
    "think outside the box.     ",
    "God is good all the time.  "
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

  .site-footer--meta {
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

  .site-footer--meta-link {
    text-decoration: none;
    color: inherit;
  }

  .site-footer--contact {
    background-color: $card-background;
    border-radius: 1rem;
    border: 1px solid $border-color;
    padding: 0.5rem 1rem 0 1rem;

    .site-footer--message {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $border-color;
      border-radius: 10rem;
      padding: 0.25rem;
      padding-right: 1rem;

      img {
        margin-right: 0.75rem;
        max-width: 3rem;
        max-height: 3rem;
      }

      p {
        margin: 0;
      }
    }

    .site-footer--social {
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
              color: $primary;
            }
          }
        }
      }

      .site-footer--icon {
        width: 1.25rem;
        height: 1.25rem;
        color: $text-color;
      }
    }
  }

  .site-footer--menu {
    ul {
      list-style: none;
      padding: 0 2rem;
      margin: 0;
    }

    .site-footer--menu-link {
      position: relative;
      padding-left: 1.5rem;
      text-decoration: none;
      color: inherit;
      display: inline-block;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: $secondary;
        font-weight: 500;
      }

      &.router-link-active::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-35%);
        width: 0.55rem;
        height: 0.55rem;
        border-radius: 50%;
        background: linear-gradient(180deg, $secondary, #f06f00);
        box-shadow: 0 0 0 0.2rem rgba($secondary, 0.2);
      }
    }
  }
}

@media (max-width: 900px) {
  .site-footer {
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;

    .site-footer--menu {
      width: 100%;

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 0;
        gap: 0.5rem;
      }

      .site-footer--menu-link {
        padding-left: 0;
        text-align: center;
        display: block;

        &.router-link-active::before {
          left: -1.4rem;
          transform: translateY(-37%);
        }
      }
    }

    .site-footer--contact,
    .site-footer--meta,
    .site-footer--social {
      text-align: center;
      justify-content: center;
      margin-top: 1rem;
    }
  }
}

@media (max-width: 600px) {
  .site-footer {
    .site-footer--meta {
      flex-direction: column;
      align-items: center;

      a,
      img {
        margin: 0.5rem 0;
      }
    }

    .site-footer--contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0.5rem 1rem;

      .site-footer--message {
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

      .site-footer--social {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0.5rem;
      }
    }

    .site-footer--menu {
      ul {
        gap: 0.25rem;
      }
    }
  }
}
</style>
