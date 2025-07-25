<template>
  <div class="version-2022">
    <h6>Oie pessoal!</h6>
    <div class="container">
      <h1>Bem vindo ao html de Felipe SBM!</h1>
      <h2>Versão 0.02 - Pré-alfa</h2>
      <p>Eu com você 💀 x Eu sem você ☠</p>
      <div class="image">
        <img src="@/assets/images/visualizer/2022/skeleton.webp" alt="esqueleto dançando" />
        <img src="@/assets/images/visualizer/2022/bones.webp" alt="esqueleto quebrado" />
      </div>
      <div class="email">
        <a href="mailto:felipe.sbm@icloud.com">felipe.sbm@icloud.com</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Version2022"
};
</script>

<style lang="css">
.version-2022 {
  background-color: rgb(234, 253, 248);
  margin: 0;
  height: 100%;
  width: 100%;
  position: relative;
  font-family: 'Times New Roman', Times, serif;
  overflow-y: auto;
  overflow-x: hidden;
  font-size: 0.7rem;
  transform: scale(0.85);

  h6 {
    margin: 0;
    position: absolute;
    color: #000;
  }
}

.container {
  max-width: 400px;
  width: 85%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  margin: 0 auto;
  padding: 2rem;
  color: #000;

  img {
    width: 5rem;
    height: auto;
  }
}

.container .email {
  margin-top: 5px;
}

.container .email a {
  font-family: verdana, arial;
  font-size: 17px;
  padding-top: 10px;
  color: blue;
  font-size: 0.7rem;
}
</style>