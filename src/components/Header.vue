<template>
    <nav class="flex justify-start space-x-4 mt-12 mb-12">
        <router-link class="hover:drop-shadow-xl" to="/">home</router-link>
        <router-link class="hover:drop-shadow-xl" to="/about">about</router-link>
        <router-link class="hover:drop-shadow-xl" to="/projects">projects</router-link>
        <router-link class="hover:drop-shadow-xl" to="/blog">blog</router-link>
        <router-link class="hover:drop-shadow-xl" to="/guestbook">guestbook</router-link>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AppHeader',
});
</script>