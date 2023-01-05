<script setup>
import { ref } from "vue"

const message = ref("")

const pick=ref("")
const first="borrower"
const second="administrator"
</script>

<template>
  <!-- v-model绑定输入的赋值目标变量 -->
  <input v-model.trim="message" placeholder="please input" />
  <p>Your Input is: {{ message }}</p>

  <br><br>

  <input type="radio" v-model="pick" :value="first" />
  <input type="radio" v-model="pick" :value="second" />
  <p>Your Pick is: {{ pick }}</p>
</template>
