<template>
  <nav class="flex justify-start space-x-4">
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/blog">blog</router-link>
    <router-link to="/guestbook">guestbook</router-link>
  </nav>
  <router-view/>
</template>
