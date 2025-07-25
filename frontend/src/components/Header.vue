<template>
  <header>
    <div class="location-hour">
      <p>natal, brazil</p>
    </div>
    <nav>
      <ul>
        <li>
          <router-link class="nav-link" to="/">
            <span class="nav-icon">
              <HomeIcon />
            </span>
            <span class="nav-text">home</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/about">
            <span class="nav-icon">
              <UserIcon />
            </span>
            <span class="nav-text">about me</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/ai">
            <span class="nav-icon">
              <BotIcon />
            </span>
            <span class="nav-text">ai</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/projects">
            <span class="nav-icon">
              <Cog />
            </span>
            <span class="nav-text">projects</span>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/guestbook">
            <span class="nav-icon">
              <BookOpenIcon />
            </span>
            <span class="nav-text">guestbook</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="location-hour">
      <p>{{ natalTime }}</p>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import {
  HomeIcon,
  UserIcon,
  BotIcon,
  Cog,
  BookOpenIcon,
} from "lucide-vue-next";

export default defineComponent({
  name: "NatalTime",
  components: { HomeIcon, UserIcon, BotIcon, Cog, BookOpenIcon },
  setup() {
    const natalTime = ref("");
    const updateTime = () => {
      const date = new Date();
      natalTime.value = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "America/Fortaleza",
      }).format(date);
    };
    onMounted(() => {
      updateTime();
      setInterval(updateTime, 1000);
    });
    return { natalTime };
  },
});
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  justify-content: space-between;
  background-image: linear-gradient(0deg, #00000000, #000000);
  overflow: hidden;
  width: 100%;
  z-index: 100;

  nav {
    margin-top: 1rem;
    background-color: #1e1e1ea4;
    padding: 0rem 1.5rem;
    border: 2px solid #1a1a1a;
    backdrop-filter: blur(1rem);
    border-radius: 2rem;
    box-shadow: 0 0 0.5rem #1a1a1a;

    ul {
      list-style: none;
      padding: 0rem;

      li {
        list-style: none;
        display: inline-block;
        margin: 0 1rem 0 1rem;
      }
    }
  }

  .nav-link {
    color: $text-dark;
    transition: all 0.3s ease-in-out;
    position: relative;
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: $secondary;
      font-weight: 500;
    }

    &.router-link-active::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      margin-left: -1.25rem;
      width: 1rem;
      height: 1rem;
      background-image: url("@/assets/icons/select.gif");
      background-size: contain;
      background-repeat: no-repeat;
    }

    .nav-icon {
      display: none;
      margin-right: 0.5rem;
    }

    .nav-text {
      display: inline;
    }
  }

  .location-hour {
    display: flex;
    justify-content: center;
    font-weight: normal;
    padding: 0 2rem 0 2rem;
  }
}

@media only screen and (max-width: 800px) {
  header {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    margin: auto;
    position: sticky;
  }

  header .nav-link .nav-icon {
    display: inline !important;
  }

  header .nav-link .nav-text {
    display: none !important;
  }

  header .location-hour {
    display: none !important;
  }
}
</style>
