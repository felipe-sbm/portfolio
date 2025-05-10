<script setup lang="ts">
import "./style.scss";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./components/Home.vue";
</script>

<template>
  <div class="container">
    <Header />
    <div>
      <Home />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 50rem;
}
</style>
