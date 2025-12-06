<template>
    <div class="screen-container">
      <div class="screen-header">
        <div class="window-controls">
          <span class="control close"></span>
          <span class="control minimize"></span>
          <span class="control maximize"></span>
        </div>
        <div class="address-bar">
          <span class="url">https://fsbm.vercel.app/{{ selectedYear }}</span>
        </div>
      </div>

      <div class="screen-content">
        <component :is="currentComponent" />
      </div>
    </div>
</template>

<script lang="ts">
import Version2022 from "./visualizer/2022.vue";

export default {
  name: "WebsiteViewer",
  components: {
    Version2022,
  },
  props: {
    selectedYear: {
      type: String,
      default: "2022"
    }
  },
  computed: {
    currentComponent() {
      return `Version${this.selectedYear}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;


.screen-container {
  width: 100%;
  max-width: 900px;
  height: 600px;
  background-image: $card-background;
  border-radius: 1rem;
  border: 1px solid $border-color;
  overflow: hidden;
  position: relative;
}

.screen-header {
  background-image: $card-background;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $border-color;
}

.window-controls {
  display: flex;
  gap: 0.5rem;

  .control {
    width: 12px;
    height: 12px;
    border-radius: 50%;

    &.close { background: firebrick; }
    &.minimize { background: goldenrod; }
    &.maximize { background: forestgreen; }
  }
}

.address-bar {
  flex: 1;
  margin: 0 1rem;
  background: $background-dark;
  border-radius: 0.5rem;
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .url {
    color: $text-dark;
    font-size: 0.75rem;
    font-family: monospace;
  }
}

.screen-content {
  height: calc(100% - 60px);
  position: relative;
  overflow: hidden;
}

@media (max-width: 768px) {
  .screen-container {
    height: 400px;
  }

  .address-bar {
    margin: 0 0.5rem;

    .url {
      font-size: 0.625rem;
    }
  }
}
</style>
