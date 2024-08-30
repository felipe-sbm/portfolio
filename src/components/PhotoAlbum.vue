<template>
    <div class="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8 transition">
        <div class="relative h-40 transition hover:shadow-md"><img alt="Me at orchestra's shalom concert"
                class="rounded-lg object-cover" v-bind:src="Orchestra"></div>
        <div class="relative sm:row-span-2 row-span-1 transition hover:shadow-md"><img
                alt="Go-RN, a tech event that I participated in 2023"
                class="rounded-lg object-cover object-top sm:object-center" v-bind:src="GoRn"></div>
        <div class="relative transition hover:shadow-md"><img
                alt="ProtoLab, a laboratory in UFRN that I studied in 2024" class="rounded-lg object-cover"
                v-bind:src="Lab"></div>
        <div class="relative row-span-2 transition hover:shadow-md"><img alt="Myself at a google maps"
                class="rounded-lg object-cover sm:object-center" v-bind:src="Maps"></div>
        <div class="relative row-span-2 transition hover:shadow-md"><img alt="A subaru car that I saw"
                class="rounded-lg object-cover" v-bind:src="Subaru"></div>
        <div class="relative h-40 transition hover:shadow-md"><img alt="My Selfie at school"
                class="rounded-lg object-cover" v-bind:src="Selfie">
        </div>
    </div>
</template>

<style>
img {
    position: absolute;
    height: 100%;
    width: 100%;
    color: transparent;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            Orchestra: require('@/assets/photos/shalom.webp'),
            GoRn: require('@/assets/photos/gorn-2023.webp'),
            Lab: require('@/assets/photos/laboratory.webp'),
            Maps: require('@/assets/photos/maps.webp'),
            Selfie: require('@/assets/photos/classic.webp'),
            Subaru: require('@/assets/photos/spotting.webp')
        };
    },
    name: 'PhotoAl',
    props: {
        msg: String,
    }
});
</script>