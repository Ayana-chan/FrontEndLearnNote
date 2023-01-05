<script setup>
import InputPart from "./components/LoginPage/InputPart.vue";
</script>

<template>
  <div class="back">
  <header></header>

  <main>
    <img class="left-view" src="./assets/strawberry2.jpg" height="720" />
    <div class="right-view">
      <InputPart />
    </div>
  </main>

  <footer></footer>
  </div>
</template>

<style scoped>
.back{
  background-color: #aea;
}

main {
  width: 1500px;

  margin: 0 auto;

  background-color: rgba(87, 196, 33, 0.15);
}

.left-view {
  width: 60%;
  /* float: left; */
}

.right-view {
  width: 40%;

  float: right;
}
</style>


