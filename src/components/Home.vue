<template>
  <div class="welcome">
    <div>
      <h1>Hey there! I'm</h1>
    </div>
    <div>
      <img :src="Logo" alt="Logo com a sigla SBM" />
    </div>
  </div>
</template>

<script lang="ts">
import Logo from "../assets/sbm-logo.svg";

export default {
  data: function () {
    return {
      Logo: Logo,
    };
  },
};
</script>

<style lang="scss">
$red-hat: "Red Hat Text", sans-serif;
.welcome {
    font-family: $red-hat;
    img {
        width: 100rem;
    }
}
</style>
