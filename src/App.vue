<script setup lang="ts">
import "@/style.scss";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="app-wrapper">
    <Header></Header>
    <main class="main-content">
      <div class="page-container">
        <router-view />
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  header,
  footer {
    width: 100%;
  }

  .main-content {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 55rem;
    margin: 0 auto;
  }

  .page-container {
    width: 100%;
    max-width: 75rem;
    margin: 1rem 1.5rem;
  }
}

@media (max-width: 900px) {
  .page-container {
    max-width: 100%;
    margin: 1rem 0.5rem;
  }
}

@media (max-width: 600px) {
  .page-container {
    margin: 0.5rem 0.2rem;
  }
}
</style>
