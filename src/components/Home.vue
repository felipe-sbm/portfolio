<template>
  <div class="welcome">
    <div class="left-div">
      <h1>Hey there! I'm</h1>
      <img :src="Logo" alt="Logo com a sigla SBM" />
      <div class="bio">
        <p>full-stack developer<span>&</span></p>
        <p>computer engineer<span>&</span></p>
        <p>web-designer<span>&</span></p>
        <p>ai expert<span>&</span></p>
        <p>a curious guy.</p>
      </div>
    </div>
    <div class="right-div"></div>
  </div>
  <div class="timeline">
    <div class="title"><h2>years passes, but this website don't stops</h2></div>
    <div class="versions">
      <div class="2022">
        <h3 class="title">20<span>22</span></h3>
        <p>
          This was my first portfolio. I created that when I joined IMD (Digital
          Metropolis Institute) so I started to know and learn about programming
          things. This version has nothing too exciting, it has only my name and
          a skeleton (that I took from a reference link from IMD material) with
          the text: “me with you x me without you”, a reference to a person that
          I feel in love with.
        </p>
        <p>
          Made with:
          <span>HMLT</span>, <span>CSS</span>, <span>JavaScript</span>.
        </p>
      </div>
      <div class="2023">
        <h3 class="title">20<span>23</span></h3>
        <p>
          Here I've learned how to use Next.js with my friend. I used a Vercel
          template to do this one, my programming skills are getting better but
          I can't create something without AI helping me. This portfolio had my
          social media and some projects that I made in 2023, but later I needed
          to replace this website.
        </p>
        <p>
          Made with:
          <span>Next.js</span>, <span>Tailwind CSS</span>,
          <span>Contentful</span>.
        </p>
      </div>
      <div class="2024">
        <h3 class="title">20<span>24</span></h3>
        <p>
          With so much time, I started to create a new portfolio of mine, using
          some references that I've found in Vercel projects. This variant has
          two themes that automatically changes, a timeline, photo album,
          project cards, and animations. I decided to create a new programming
          framework that I never used before.
        </p>
        <p>
          Made with:
          <span>Vue</span>, <span>Tailwind CSS</span>, <span>TypeScript</span>.
        </p>
      </div>
      <div class="2025">
        <h3 class="title">20<span>25</span></h3>
        <p>
          So far, so good. This portfolio has been developed with 0% AI, only
          stack overflow, blogs, documentation, and GitHub. It has an AI but
          don't was made by that! I created a sketch in Figma to be more
          creative in the production. I didn't use any inspiration, only the
          ideas that flowed in my mind. This color pallet was a wish from my
          brother.
        </p>
        <p>
          Made with: <span>Vue</span>, <span>SASS</span>,
          <span>C# (.net)</span>.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Logo from "../assets/sbm-logo.svg";

export default {
  data: function () {
    return {
      Logo: Logo,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../style.scss";
.welcome {
  font-family: $rocksalt;
  font-weight: 400;
  font-style: normal;
  white-space: pre;
  .bio {
    p {
      margin: 0;
      font-family: $red-hat-text;
    }
  }
  span {
    color: $primary;
  }
  img {
    width: 100rem;
  }
}
.timeline {
  .title {
    font-family: $rocksalt;
    span {
      color: $primary;
    }
  }
  span {
    color: $secondary;
  }
}
</style>
