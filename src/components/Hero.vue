<template>
    <div class="background">
        <img :src={blobBackground} alt="">
    </div>
</template>

<script>
import blobBackground from "@/assets/images/background.webp"

export default {
    data() {
        { blobBackground }
    }
}
</script>

<style lang="scss" scoped>
@use "@/style.scss" as *;

.background {
    height: 100%;
    width: 100%;
}
</style>