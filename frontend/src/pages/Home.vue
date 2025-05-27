<template>
  <div class="page-container">
    <div class="welcome">
      <div class="left-div">
        <h1>hey there! I'm felipe</h1>
        <img :src="Logo" alt="SBM's Logo" />
        <ul class="bio">
          <li>full-stack developer<span>&</span></li>
          <li>computer engineer<span>&</span></li>
          <li>web-designer<span>&</span></li>
          <li>ai expert<span>.</span></li>
        </ul>
      </div>
      <div class="right-div">
        <div class="frame"></div>
      </div>
    </div>

    <div class="timeline">
      <div class="title">
        <h2>years passes, but this website don't stops</h2>
      </div>
      <div class="versions">
        <div class="year-block">
          <div class="text">
            <h3 class="title-22">20<span>22</span></h3>
            <p>
              This was my first portfolio. I created that when I joined IMD
              (Digital Metropolis Institute) so I started to know and learn
              about programming things. This version has nothing too exciting,
              it has only my name and a skeleton (that I took from a reference
              link from IMD material) with a text. It was only a single HTML:5
              page.
            </p>
            <p>
              Made with:
              <span>HMLT</span>, <span>CSS</span>, <span>JavaScript</span>.
            </p>
          </div>
          <div class="image">
            <a href="/" target="_blank">
              <img :src="Test" alt="Preview 2022" />
            </a>
          </div>
        </div>

        <div class="year-block">
          <div class="text">
            <h3 class="title-23">20<span>23</span></h3>
            <p>
              Here I've learned how to use Next.js with my friend. I used a
              Vercel template to do this one, my programming skills are getting
              better but I can't create something without AI helping me. This
              portfolio had my social media and some projects that I made in
              2023, but later I needed to replace this website.
            </p>
            <p>
              Made with:
              <span>Next.js</span>, <span>Tailwind CSS</span>,
              <span>Contentful</span>.
            </p>
          </div>
          <div class="image">
            <a href="/" target="_blank">
              <img :src="Test" alt="Preview 2022" />
            </a>
          </div>
        </div>

        <div class="year-block">
          <div class="text">
            <h3 class="title-24">20<span>24</span></h3>
            <p>
              With so much time, I started to create a new portfolio of mine,
              using some references that I've found in Vercel projects. This
              variant has two themes that automatically changes, a timeline,
              photo album, project cards, and animations. I decided to create a
              new programming framework that I never used before.
            </p>
            <p>
              Made with:
              <span>Vue</span>, <span>Tailwind CSS</span>,
              <span>TypeScript</span>.
            </p>
          </div>
          <div class="image">
            <a href="/" target="_blank">
              <img :src="Test" alt="Preview 2022" />
            </a>
          </div>
        </div>

        <div class="year-block">
          <div class="text">
            <h3 class="title-25">20<span>25</span></h3>
            <p>
              So far, so good. This portfolio has been developed with 0% AI,
              only stack overflow, blogs, documentation, and GitHub. It has an
              AI but don't was made by that! I created a sketch in Figma to be
              more creative in the production. I didn't use any inspiration,
              only the ideas that flowed in my mind. This color pallet was a
              wish from my brother.
            </p>
            <p>
              Made with: <span>Vue</span>, <span>SASS</span>,
              <span>C# (.net)</span>.
            </p>
          </div>
          <div class="image">
            <a href="/" target="_blank">
              <img :src="Test" alt="Preview 2022" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "../assets/images/sbm-logo.svg";
import Test from "../assets/images/pexels-luis-gomes-166706-546819.jpg";
</script>

<style lang="scss" scoped>
@use "../style.scss" as *;

$notosans-jp: "Noto Sans JP", sans-serif;
$geologica: "Geologica", sans-serif;
$chocolate-sans: "Chocolate Classical Sans", sans-serif;
$rubik: "Rubik Puddles", system-ui;

.welcome {
  font-weight: 400;
  font-style: normal;
  white-space: pre;
  display: flex;
  flex-direction: row;

  .left-div {
    display: flex;
    flex-direction: column;
    font-size: small;
    .bio {
      padding: 0;
      li {
        margin: 0;
        font-family: $red-hat-text;
        font-size: medium;
        list-style: none;
      }
    }
    h1 {
      font-size: 30px;
      font-weight: normal;
      margin: 0;
    }
    span {
      color: $primary;
    }
    img {
      max-width: 15rem;
    }
  }
  .right-div {
    display: flex;
    flex-direction: column;
    width: 50vw;

    img {
      max-width: 25rem;
      border-radius: 1rem;
    }
  }
}

.timeline {
  margin-top: 5rem;

  .title {
    margin-bottom: 2rem;
    h2 {
      font-size: 1.8rem;
    }
    span {
      color: $primary;
    }
  }
  span {
    color: $secondary;
  }
  .versions {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .year-block {
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      gap: 0.5rem;
      flex-wrap: wrap;

      .text {
        flex: 1;
        min-width: 300px;

        h3 {
          font-size: 3rem;
          margin-bottom: 1rem;
          span {
            color: $primary;
          }
        }

        p {
          font-family: $red-hat-text;
          margin: 0.5rem 0;
        }
      }

      .image {
        width: 20rem;
        flex-shrink: 0;

        img {
          width: 100%;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 1s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        img:hover {
          box-shadow: 0 0.5rem 1rem #474747;
          transition: transform 1s ease;
        }
      }
    }

    .title-22 {
      font-family: $notosans-jp;
    }
    .title-23 {
      font-family: $geologica;
    }
    .title-24 {
      font-family: $chocolate-sans;
    }
    .title-25 {
      font-family: $rubik;
    }
  }
}
</style>
