<template>
  <footer>
    <div class="page-finder">
      <ul>
        <li><router-link class="nav-link" to="/">home</router-link></li>
        <li><router-link class="nav-link" to="/about">about me</router-link></li>
        <li><router-link class="nav-link" to="/ai">ai</router-link></li>
        <li><router-link class="nav-link" to="/projects">projects</router-link></li>
        <li><router-link class="nav-link" to="/guestbook">guestbook</router-link></li>
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
  .page-finder {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .nav-link {
      position: relative;
      padding-left: 1.5rem;
      text-decoration: none;
      color: inherit;
      display: inline-block;
      &.router-link-active::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-35%);
        width: 1rem;
        height: 1rem;
        background-image: url("../assets/select.gif");
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
