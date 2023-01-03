<script setup>
  import {ref} from 'vue'

  const count=ref(0)

  function increment(){
    count.value++
  }
</script>

<template>
  <p>v2</p>
  <button @click="increment">
    <!-- 顶层元素（没有任何中介）的操作会自动解包，无需value也能访问 -->
    <!-- 即使不是顶层元素，只要文本插值的结果是个ref（比如{{obj.elem}}），也会给解包出来（elem） -->
    {{ count }}
  </button>
</template>