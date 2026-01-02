<script setup lang="ts">
import { useI18n } from '@/i18n/useI18n'
import Sparkle from '@/assets/svg/sparkle.svg'
import ExperienceTimeline from '@/components/ExperienceTimeline.vue'

const sparkle = Sparkle as string
const { texts: i18nTexts } = useI18n()
</script>

<template>
  <section class="resume-section">
    <div class="title">
      <h2>{{ i18nTexts.resume.educationTitle }}</h2>
    </div>
    <div class="education">
      <ul>
        <li>
          <img :src="sparkle" alt="" class="sparkle">
          <div class="content-card">
            <h3>AI Expertise Technician Diploma</h3>
            <p>Federal University of RN</p>
            <span>2025</span>
          </div>
        </li>
        <li>
          <img :src="sparkle" alt="" class="sparkle">
          <div class="content-card">
            <h3>Bachelor of Computer Engineering (IBS&T)</h3>
            <p>Federal University of RN</p>
            <span>2024</span>
          </div>
        </li>
        <li>
          <img :src="sparkle" alt="" class="sparkle">
          <div class="content-card">
            <h3>Software Development Technician Diploma</h3>
            <p>Federal University of RN</p>
            <span>2022-2024</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="experience">
      <div class="experience-circle"></div>
      <div class="experience-title">
        <h2>{{ i18nTexts.resume.experienceTitle }}</h2>
      </div>
      <ExperienceTimeline />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;

.resume-section {
  position: relative;
  height: auto;
  padding: 6rem 5rem;
  padding-bottom: 0;
  background-color: #D9D9D9;
}

.title {
  position: absolute;
  text-align: center;
  top: -1rem;
  left: 24.5rem;
  z-index: 5;

  h2 {
    font-family: $primary-font;
    font-size: 2.5rem;
    color: black;
    font-weight: 200;
  }
}

.education {
  margin-top: 5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  ul {
    list-style: none;
    padding: 0;
    position: relative;
    padding-bottom: 0;
    margin-bottom: 0;

    // linha vertical pontilhada (timelinezinha)
    &::before {
      content: '';
      position: absolute;
      left: 2.65rem;
      /* posição da linha */
      top: 0.5rem;
      bottom: 0.5rem;
      border-left: 3px dashed #4f57ff;
      z-index: 1;
    }

    li {
      margin-bottom: 3rem;
      position: relative;
      padding-left: 6rem;

      .sparkle {
        position: absolute;
        left: calc(2.25rem - 0.5rem);
        /* isso deve centralizar a imagem sobre a linha */
        top: 0.2rem;
        height: 2rem;
        width: auto;
        z-index: 2;
        pointer-events: none;
      }

      // Card style for content
      .content-card {
        background: white;
        border: 3px solid black;
        box-shadow: 8px 8px 0px black;
        padding: 1.5rem;
        transition: transform 0.2s ease, box-shadow 0.2s ease;

        &:hover {
          transform: translate(-2px, -2px);
          box-shadow: 10px 10px 0px black;
        }
      }

      h3 {
        font-family: $primary-font;
        font-size: 1.5rem;
        color: black;
        margin: 0 0 0.5rem 0;
        font-weight: 800;
      }

      p {
        font-family: $primary-font;
        font-size: 1.2rem;
        color: black;
        margin: 0;
        font-weight: 500;
        border-bottom: 2px solid black;
        display: inline-block;
        margin-bottom: 0.5rem;
      }

      span {
        display: block;
        font-family: monospace;
        font-size: 1rem;
        font-weight: bold;
        color: white;
        background: black;
        padding: 0.2rem 0.5rem;
        width: fit-content;
        margin-top: 0.5rem;
      }
    }
  }
}

.experience {
  position: relative;
  margin-top: 4rem;

  .experience-circle {
    position: absolute;
    top: -4rem;
    left: -10rem;
    width: 20rem;
    height: 20rem;
    background: $green;
    border-radius: 50%;
    z-index: 2;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .experience-title {
    text-align: left;
    z-index: 5;
    margin-bottom: 2rem;
    margin-left: 12rem; // Offset from circle

    h2 {
      font-family: $primary-font;
      font-size: 2.5rem;
      color: black;
      font-weight: 200;
      margin: 0
    }
  }
}

@media (max-width: 768px) {
  .resume-section {
    padding: 4rem 1rem;
  }

  .title {
    width: 90%;
    left: 50%;
    top: -1.5rem;

    h2 {
      font-size: 1.8rem;
    }
  }

  .education ul {
    &::before {
      left: 1rem;
    }

    li {
      padding-left: 3.5rem;

      .sparkle {
        left: -0.5rem;
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }

  .experience .experience-circle {
    width: 100px;
    height: 100px;
    left: -1rem;
  }

  .experience .experience-title {
    margin-left: 6rem;

    h2 {
      font-size: 2rem;
    }
  }
}
</style>
