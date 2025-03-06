<template>
  <div class="subpixel-antialiased py-7 max-w-4xl">
    <div class="flex relative">
      <h1
        class="lg:text-7xl text-5xl pb-4 font-bold animate-pulse text-zinc-300 dark:text-zinc-800"
      >
        Time Line
      </h1>
      <img
        v-bind:src="Me"
        alt="Me:"
        class="absolute right-0 lg:w-20 w-14 mx-1 sm"
      />
    </div>
    <span class="inline-flex items-baseline py-2">
      <img
        v-bind:src="ProfilePicture"
        alt="My profile picture."
        class="self-center w-7 h-7 rounded-full mx-1 bg-teal-100 shadow-md"
      />
      <p
        class="content-center border-2 border border-zinc-800 dark:border-zinc-400 rounded-lg lg:w-max mx-2"
      >
        &nbsp;My history started in 2005 when I was born in
        <a
          href="https://www.bing.com/search?pglt=675&q=parnamirim"
          class="font-semibold"
          alt="Link to Parnamirim search"
          >Parnamirim - Brazil</a
        >, and I grew up here.&nbsp;
      </p>
    </span>
    <span class="inline-flex items-baseline py-2">
      <img
        v-bind:src="ProfilePicture"
        alt="My profile picture."
        class="self-center w-7 h-7 rounded-full mx-1 bg-teal-100 shadow-md"
      />
      <p class="content-center rounded-lg lg:w-max mx-2">
        <a href="/" class="font-semibold" alt="Link Samuel's portfolio"
          >Felipe Samuel</a
        >
        finished School 📚 <br class="lg:hidden" />
        <i class="text-sm text-zinc-500 dark:text-zinc-500">on 15 Dec, 2016</i>
      </p>
    </span>
    <span class="inline-flex items-baseline py-2">
      <img
        v-bind:src="ProfilePicture"
        alt="My profile picture."
        class="self-center w-7 h-7 rounded-full mx-1 bg-teal-100 shadow-md"
      />
      <p class="content-center rounded-lg lg:w-max mx-2">
        <a href="/" class="font-semibold" alt="Link Samuel's portfolio"
          >Felipe Samuel</a
        >
        started a new journey at
        <a
          href="https://portal.imd.ufrn.br/"
          class="font-semibold"
          alt="Link to Metropole Digital's website"
          >IMD - UFRN</a
        >
        as student of IT <br class="lg:hidden" />
        <i class="text-sm text-zinc-500 dark:text-zinc-500">on 19 Sep, 2022</i>
      </p>
    </span>
    <span class="inline-flex items-baseline py-2">
      <img
        src="https://avatars.githubusercontent.com/u/34771800?v=4"
        alt="Oscar's profile picture."
        class="self-center w-7 h-7 rounded-full mx-1 shadow-md"
      />
      <p class="content-center rounded-lg lg:w-max mx-2">
        <a
          href="https://oscarkemuel.com/"
          class="font-semibold"
          alt="Link Oscar's portfolio"
          >Oscar Kemuel</a
        >
        teached
        <a href="/" class="font-semibold" alt="Link Samuel's portfolio"
          >Felipe Samuel</a
        >
        Next.js! 🎆 <br class="lg:hidden" />
        <i class="text-sm text-zinc-500 dark:text-zinc-500">on 7 Aug, 2023</i>
      </p>
    </span>
    <span class="inline-flex items-baseline py-2">
      <img
        v-bind:src="ProfilePicture"
        alt="My profile picture."
        class="self-center w-7 h-7 rounded-full mx-1 bg-teal-100 shadow-md"
      />
      <p class="content-center rounded-lg lg:w-max mx-2">
        <a href="/" class="font-semibold" alt="Link Samuel's portfolio"
          >Felipe Samuel</a
        >
        finished High School <br class="lg:hidden" />
        <i class="text-sm text-zinc-500 dark:text-zinc-500">on 15 Dec, 2023</i>
      </p>
    </span>
    <span class="inline-flex items-baseline py-2">
      <img
        v-bind:src="ProfilePicture"
        alt="My profile picture."
        class="self-center w-7 h-7 rounded-full mx-1 bg-teal-100 shadow-md"
      />
      <p class="content-center rounded-lg lg:w-max mx-2">
        <a href="/" class="font-semibold" alt="Link Samuel's portfolio"
          >Felipe Samuel</a
        >
        started the project
        <a
          href="https://otsuki.vercel.app/"
          class="font-semibold"
          alt="Link for the Otsuki website"
          >Otsuki </a
        ><br class="lg:hidden" />
        <i class="text-sm text-zinc-500 dark:text-zinc-500">on 15 Feb, 2024</i>
      </p>
    </span>
    <span class="inline-flex items-baseline py-2">
      <img
        v-bind:src="ProfilePicture"
        alt="My profile picture."
        class="self-center w-7 h-7 rounded-full mx-1 bg-teal-100 shadow-md"
      />
      <p class="content-center rounded-lg lg:w-max mx-2">
        <a href="/" class="font-semibold" alt="Link Samuel's portfolio"
          >Felipe Samuel</a
        >
        joined to Federal University <br class="lg:hidden" />
        <i class="text-sm text-zinc-500 dark:text-zinc-500">on 26 Feb, 2024</i>
      </p>
    </span>
    <span class="inline-flex items-baseline py-2">
      <img
        v-bind:src="ProfilePicture"
        alt="My profile picture."
        class="self-center w-7 h-7 rounded-full mx-1 bg-teal-100 shadow-md"
      />
      <p class="content-center rounded-lg lg:w-max mx-2">
        &nbsp;<a href="/" class="font-semibold" alt="Link Samuel's portfolio"
          >Felipe Samuel</a
        >
        has graduated in
        <a
          href="https://portal.imd.ufrn.br/"
          class="font-semibold"
          alt="Link to Metropole Digital's website"
          >IMD - UFRN</a
        >
        🎓 <br />
        <img
          v-bind:src="Graduate"
          alt="Me celebrating."
          class="h-20 w-20 mx-1"
        />&nbsp;
        <i class="text-sm text-zinc-500 dark:text-zinc-500">on 6 Apr, 2024</i>
      </p>
    </span>
    <span class="inline-flex items-baseline py-2">
      <img
        src="https://avatars.githubusercontent.com/u/127868103?v=4"
        alt="My profile picture."
        class="self-center w-7 h-7 rounded-full mx-1 shadow-md"
      />
      <p class="content-center rounded-lg lg:w-max mx-2">
        <a
          href="https://github.com/Jmspter"
          class="font-semibold"
          alt="Link James's portfolio"
          >James Peter</a
        >
        joined to
        <a
          href="https://otsuki.vercel.app/"
          class="font-semibold"
          alt="Link for the Otsuki website"
          >Otsuki
        </a>
        <br class="lg:hidden" />
        <i class="text-sm text-zinc-500 dark:text-zinc-500">on 28 Jun, 2024</i>
      </p>
    </span>
    <span class="inline-flex items-baseline py-2">
      <img
        v-bind:src="ProfilePicture"
        alt="My profile picture."
        class="self-center w-7 h-7 rounded-full mx-1 bg-teal-100 shadow-md"
      />
      <p class="content-center rounded-lg lg:w-max mx-2">
        <a href="/" class="font-semibold" alt="Link Samuel's portfolio"
          >Felipe Samuel</a
        >
        got a Technician Diploma by IMD - UFRN <br class="lg:hidden" />
        <i class="text-sm text-zinc-500 dark:text-zinc-500">on 2 Dec, 2024</i>
      </p>
    </span>
    <span class="inline-flex items-baseline py-2">
      <img
        v-bind:src="ProfilePicture"
        alt="My profile picture."
        class="self-center w-7 h-7 rounded-full mx-1 bg-teal-100 shadow-md"
      />
      <p class="content-center rounded-lg lg:w-max mx-2">
        <a href="/" class="font-semibold" alt="Link Samuel's portfolio"
          >Felipe Samuel</a
        >
        started a new journey at
        <a
          href="https://portal.imd.ufrn.br/"
          class="font-semibold"
          alt="Link to Metropole Digital's website"
          >IMD - UFRN</a
        >
        as student of Artificial intelligence <br class="lg:hidden" />
        <i class="text-sm text-zinc-500 dark:text-zinc-500">on 17 Mar, 2025</i>
      </p>
    </span>
    <span class="inline-flex items-baseline py-2">
      <img
        v-bind:src="ProfilePicture"
        alt="My profile picture."
        class="self-center w-7 h-7 rounded-full mx-1 bg-teal-100 shadow-md"
      />
      <p class="content-center rounded-lg lg:w-max mx-2">
        <a href="/" class="font-semibold" alt="Link Samuel's portfolio"
          >Felipe Samuel</a
        >
        still studying and doing projects
        <img
          v-bind:src="Amen"
          alt="Me thanking God."
          class="h-20 w-20 mx-1"
        />&nbsp; <br class="lg:hidden" />
        <i class="text-sm text-zinc-500 dark:text-zinc-500">on 5 Mar, 2025</i>
      </p>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      Amen: require("@/assets/amen.webp"),
      Graduate: require("@/assets/graduate.webp"),
      Me: require("@/assets/me.webp"),
      ProfilePicture: require("@/assets/profile-picture.webp"),
    };
  },
  name: "TimeLine",
});
</script>
