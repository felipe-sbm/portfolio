<template>
  <footer>
    <div class="page-finder">
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/about">about me</router-link></li>
        <li><router-link to="/ai">ai</router-link></li>
        <li><router-link to="/projects">projects</router-link></li>
        <li><router-link to="/guestbook">guestbook</router-link></li>
      </ul>
    </div>
    <div class="information">
      <a href="https://notbyai.fyi/how-it-works"> &copy; 2025 Felipe SBM. </a>
      <a href="https://www.otsuki.dev">
        <img :src="Otsuki" alt="Logo da Otsuki LTDA" />
      </a>
      <a href="https://notbyai.fyi/how-it-works">
        <img :src="NotByAI" alt="Certificado que não é feito por IA" />
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import Otsuki from "../assets/otsuki-logo.svg";
import NotByAI from "../assets/Produced-By-Human-Not-By-AI-Badge-black.svg";

export default {
  data: function () {
    return {
      Otsuki: Otsuki,
      NotByAI: NotByAI,
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .information {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      margin: 0 1rem 0 1rem;
      img {
        max-width: 7rem;
      }
    }
  }

  img {
    max-width: 10rem;
  }
  li {
    list-style: none;

    router-link:active {
      list-style: url("../assets/select.gif");
    }
  }
}
</style>
