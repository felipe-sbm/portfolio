<template>
  <div class="sidenav">
    <div class="nav-header">
      <h3>timeline</h3>
      <p>navigate through history</p>
    </div>
    <div class="year-buttons">
      <button 
        class="year-btn" 
        :class="{ active: selectedYear === '2022' }"
        @click="selectYear('2022')"
      >
        2022
        <span class="year-description">first version</span>
      </button>
    </div>
    <div class="nav-footer">
      <p>💡 click on a year to see that version</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Sidenav",
  props: {
    selectedYear: {
      type: String,
      default: "2022"
    }
  },
  emits: ["year-changed"],
  methods: {
    selectYear(year: string) {
      this.$emit("year-changed", year);
    }
  }
};
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.sidenav {
  height: 100vh;
  width: 20rem;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-image: $card-background;
  border-right: 1px solid $border-color;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.nav-header {
  padding: 5rem 1.5rem 1rem;
  border-bottom: 1px solid $border-color;

  h3 {
    color: $text-dark;
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
  }

  p {
    color: $text-dark;
    margin: 0;
    font-size: 0.9rem;
    opacity: 0.7;
  }
}

.year-buttons {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.year-btn {
  width: 100%;
  padding: 1rem 1.5rem;
  background: transparent;
  border: 1px solid $border-color;
  border-radius: 0.5rem;
  color: $text-dark;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  &:hover {
    background-image: $card-background;
    border-color: $primary;
    transform: translateX(4px);
  }

  &.active {
    background-image: $card-background;
    border-color: $primary;
    color: $primary;
  }
}

.nav-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid $border-color;

  p {
    color: $text-dark;
    font-size: 0.8rem;
    margin: 0;
    text-align: center;
    opacity: 0.7;
  }
}

@media screen and (max-width: 1200px) {
  .sidenav {
    width: 15rem;
  }

  .nav-header {
    padding: 1.5rem 1rem 0.75rem;

    h3 {
      font-size: 1.3rem;
    }
  }

  .year-btn {
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 768px) {
  .sidenav {
    position: relative;
    width: 100%;
    height: auto;
    flex-direction: row;
    border-right: none;
    border-bottom: 1px solid $border-color;
  }

  .nav-header {
    display: none;
  }

  .year-buttons {
    flex-direction: row;
    padding: 1rem;
    justify-content: center;
  }

  .year-btn {
    flex: 1;
    max-width: 120px;
    padding: 0.75rem;
    text-align: center;

    &:hover {
      transform: translateY(-2px);
    }

    .year-description {
      display: none;
    }
  }
}
</style>
