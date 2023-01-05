<script setup>
import {ref,onMounted} from 'vue'

// ref是模板引用，可以从template中找到带有ref属性的与其值同名的元素进行绑定
const inputr=ref(null)

onMounted(()=>{
  // 加载完毕就聚焦到inputr上面
  inputr.value.focus()
})

</script>

<template>
  <input ref="inputr" type="text">
</template>