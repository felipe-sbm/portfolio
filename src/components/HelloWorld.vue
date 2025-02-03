<template>
  <div class="justify-center">
    <h1
      class="flex justify-start mb-7 text-2xl font-medium text-zinc-950 dark:text-zinc-100"
    >
      {{ msg }}
    </h1>
    <p class="font-light subpixel-antialiased text-zinc-900 dark:text-zinc-300">
      I'm a fullstack developer, computer engineer, software student and
      webdesigner since 2019. I worked in
      <a
        href="https://github.com/felipe-sbm/piaf-ufrn"
        alt="Link for the PIAF - UFRN repository"
        ><span
          class="inline-flex items-center rounded-md bg-red-100 dark:bg-red-700 text-sm px-2.5 py-0.5 text-red-700 dark:text-red-100"
        >
          <svg
            width="208"
            height="208"
            viewBox="0 0 208 208"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="-ms-1 me-1.5 h-3.5 w-3.5 justify-start"
          >
            <circle cx="104" cy="104" r="104" fill="white" />
            <path
              d="M76.3653 112.807C53.8654 116.807 49.5 57.5 49.5 57.5C16.9995 103.307 21.3652 183.307 107.365 179.807C193.366 176.307 193.135 93.5 170 63.5C170 63.5 150.5 98 142.5 98C134.5 98 111 40 111 40C111 40 98.8651 108.807 76.3653 112.807Z"
              stroke="#980F0F"
              stroke-width="16"
            />
          </svg>
          PIAF - UFRN
        </span></a
      >
      and made some projects in my own, like
      <a
        href="https://github.com/otsuki-dev"
        alt="Link for the Otsuki repository"
        ><span
          class="inline-flex items-center rounded-md bg-purple-100 dark:bg-purple-900 px-2.5 text-sm py-0.5 text-purple-700 dark:text-purple-100"
        >
          <svg
            viewBox="0 0 515 515"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="-ms-1 me-1.5 h-3.5 w-3.5 justify-start"
          >
            <rect width="515" height="515" rx="250.5" fill="black" />
            <g filter="url(#filter0_i_138_2)">
              <path
                d="M291.36 452.889C213.445 478.79 61.6177 404.382 58.085 272.047C54.5522 139.712 161.815 62.9486 264.136 58.2392C366.458 53.5298 459.392 118.52 457.984 239.081C456.576 359.642 358.948 382.247 291.36 382.247C223.771 382.247 149.385 332.327 149.385 256.977C149.385 181.626 201.241 139.712 264.136 139.712C327.032 139.712 400.722 185.864 375.376 256.977C350.03 328.089 264.136 256.977 264.136 256.977"
                stroke="white"
                stroke-width="40"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_138_2"
                x="37.9985"
                y="38.0005"
                width="446.001"
                height="449.012"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="6" dy="9" />
                <feGaussianBlur stdDeviation="7.075" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_138_2"
                />
              </filter>
            </defs>
          </svg>
          Otsuki
        </span></a
      >. <br />
      I keep practicing every day<i class="text-xs font-thin">/7*</i> and
      learning new technologies to improve my skills.
      <span class="font-semibold">ようこそ!</span>
    </p>
    <PhotoAlbum />
    <p
      class="font-light mb-8 subpixel-antialiased text-zinc-900 dark:text-zinc-300"
    >
      Currently I'm working at project
      <a
        href="https://utsuki.vercel.app"
        class="underline text-zinc-950 dark:text-zinc-50"
        alt="Link for the Otsuki website"
        >Otsuki</a
      >. I actually work as a Freelancer, making websites, systems, repairing
      computers and building home servers. But that's not that all, I made some
      project in my own, look some of they.
    </p>
    <div class="block max-w-4xl">
      <HomeCards />
    </div>
    <p
      class="font-light subpixel-antialiased text-zinc-900 dark:text-zinc-300 my-8"
    >
      Some time ago, I just started a Blog and a Youtube Channel to teach people
      in the dev world. Tutorials, Q&A and news from technologies its just a
      slice of the content that im actually creating. Making projects and
      sharing knowledge is my passion, and I'm happy to share it. <br />
      I can show that
      <i class="text-blue-700 dark:text-blue-500"> Typescript, </i>
      <i class="text-red-700 dark:text-red-500"> Ruby, </i>
      <i class="text-purple-700 dark:text-purple-500"> Julia </i>and
      <i class="text-lime-700 dark:text-lime-500"> C# </i> are fun, check it out
      bellow!
    </p>
    <TeachPages />
    <span class="hidden">
      <a href="https://felipe-sbm.blogspot.com/" alt="Link for my blog"
        >Blog Link</a
      ><br />
      <a
        href="https://www.youtube.com/@felipe_sbm"
        alt="Link fot my youtube channel"
        >YouTube Link</a
      >
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PhotoAlbum from "./PhotoAlbum.vue";
import HomeCards from "./HomeCards.vue";
import TeachPages from "./TeachPages.vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    PhotoAlbum,
    HomeCards,
    TeachPages,
  },
});
</script>
