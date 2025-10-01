<template>
  <div class="visualizer-page">
    <div class="sidebar">
      <Sidenav :selected-year="selectedYear" @year-changed="onYearChanged" />
    </div>
    <div class="main">
      <div class="title">
        <h1>website history</h1>
        <p>navigate through the years to see different versions.</p>
      </div>
      <div>
        <WebsiteViewer :selected-year="selectedYear" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Sidenav from "@/components/Sidenav.vue";
import WebsiteViewer from "@/components/WebsiteViewer.vue";

export default {
  name: "Visualizer",
  components: { Sidenav, WebsiteViewer },
  data() {
    return {
      selectedYear: "2022"
    };
  },
  methods: {
    onYearChanged(year: string) {
      this.selectedYear = year;
    }
  }
};
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.visualizer-page {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 2;
}

.main {
  flex: 1;
  padding: 2rem;
  
  .information {
    margin-bottom: 2rem;
    
    h1 {
      font-size: 1.75rem;
      font-weight: medium;
      margin: 0 0 0.5rem 0;
    }
    
    p {
      margin: 0;
      opacity: 0.8;
      line-height: 1.5;
    }
  }
}

@media (max-width: 1200px) {
  .main {
    margin-left: 15rem;
    padding: 1rem;
  }
}

@media (max-width: 768px) {
  .visualizer-page {
    flex-direction: column;
  }
  
  .sidebar {
    position: relative;
    height: auto;
    width: 100%;
  }
  
  .main {
    margin-left: 0;
    padding: 1rem;
  }
  
  .viewer-container {
    padding: 1rem;
    min-height: 500px;
  }
}
</style>