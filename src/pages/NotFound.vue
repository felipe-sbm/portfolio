<template>
    <div class="not-found">
        <div class="intro">
            <h6 class="eyebrow">404 Error</h6>
            <h1>nao foi achado boy</h1>
            <p>Looks like you reached something that doesn't exist.</p>
            <small>Go back or go to the Home page</small>
        </div>
        <img :src=AaFolou alt="Sad Dog">
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AaFolou from "@/assets/images/adobe-express.webp"

export default defineComponent({
    data() {
        return {
            AaFolou,
        };
    },
    name: "NotFound",
});
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.not-found {
    
    img {
        max-width: 20rem;
    }
}
</style>