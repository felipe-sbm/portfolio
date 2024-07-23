<template class="flex antialiased">
  <div class="w-screen mx-auto py-10 px-12 justify-center dark:bg-zinc-950">
    <div class="max-w-4xl">
      <nav class="flex justify-start space-x-4 mt-4 mb-12">
        <router-link to="/">home</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/blog">blog</router-link>
        <router-link to="/guestbook">guestbook</router-link>
      </nav>
      <router-view />
    </div>
  </div>
</template>
