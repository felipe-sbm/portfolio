<template>
  <div class="about">
    <div class="flex display-inline">
      <img
        v-bind:src="Hello"
        alt="My snapchat character saying 'hi'."
        class="w-20 h-20"
      />
      <h1 class="font-bold">はじめまして!</h1>
    </div>
    <div class="flex">
      <p class="text-pretty">
        I’m Felipe Samuel, a software developer, web designer, and computer
        engineer. <br />Since childhood, I’ve been repairing computers and
        modifying websites with CSS. In 2022, I started my career in development
        when I joined IMD (a technology sector at UFRN). Since then, I haven’t
        stopped studying and working on projects like this portfolio. You can
        check out other projects on the
        <a
          href="/projects"
          class="underline font-medium text-zinc-950 dark:text-zinc-50"
          alt="Link for the Otsuki's website"
          >projects page</a
        >. Recently, I’ve been studying Japanese to improve my connection with
        other cultures. You are ready to see my timeline? Let's go!
      </p>
    </div>
    <div>
      <TimeLine />
    </div>
    <div class="relative mb-10">
      <img
        v-bind:src="Thanks"
        alt="My snapchat character saying 'hi'."
        class="absolute w-20 h-20 right-0"
      />
      <h6>
        Yeah, that's my history. <br class="lg:hidden" />
        Thanks for reading it!
      </h6>
      <i class="text-xs"
        >「世の中には10種類の人がいて、<br class="lg:hidden" />
        2進数を理解している人と理解していない人です」</i
      >
    </div>
    <TeachPages class="my-4" />
  </div>
</template>

<!-- 
      Aqui será usado futuramente, para deixar ao lado da timeline
      <span class="inline-flex items-baseline py-2">
        <span class="w-7 h-7 rounded-full bg-zinc-200 dark:bg-zinc-100">
          <Pencil
            class="self-center mx-auto my-1 w-5 h-5 text-zinc-950 mx-1"
          />
        </span>
        <p class="content-center rounded-lg lg:w-max mx-2">
          &nbsp;
          <a href="/" class="font-semibold" alt="Link Samuel's portfolio"
            >Felipe Samuel</a
          >
          finished school&nbsp;
        </p>
        <i class="text-sm text-zinc-500 dark:text-zinc-500">on 15 Dec, 2016</i>
      </span>
      <span class="inline-flex items-baseline py-2">
        <Smile
          class="self-center text-zinc-950 w-7 h-7 rounded-full mx-1 bg-zinc-200 dark:bg-zinc-100 p-0.5 shadow-md"
        />
        <p class="content-center rounded-lg lg:w-max mx-2">
          &nbsp;
          <a href="/" class="font-semibold" alt="Link Samuel's portfolio"
            >Felipe Samuel</a
          >
          finished school&nbsp;
        </p>
        <i class="text-sm text-zinc-500 dark:text-zinc-500">on 15 Dec, 2016</i>
      </span>
-->

<script lang="ts">
import { defineComponent } from "vue";
import TimeLine from "@/components/TimeLine.vue";
import TeachPages from "@/components/TeachPages.vue";

export default defineComponent({
  data() {
    return {
      Hello: require("@/assets/hello-world.webp"),
      Thanks: require("@/assets/thanks.webp"),
      Uthere: require("@/assets/u-there.webp"),
    };
  },
  name: "AboutView",
  components: { TimeLine, TeachPages },
});
</script>
