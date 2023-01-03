<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

//计算属性，返回的是ref
//和它有关系的响应变量触发响应的时候就会重新计算它的值
//如果响应结果不改变的时候被调用，那么会直接拿结果值无需重新计算
//如果改用带返回值的方法的话，每次响应触发也会在重新渲染中触发结果更新，但每个地方都得重新计算，无意义耗时
//可以通过同时设置getter和setter使得计算属性可被修改
const isBookExist=computed(()=>{
    return author.books.length>0? 'Yes' : 'No'
})

</script>

<template>
    <!-- 显示返回结果（已解包） -->
    <div>{{ isBookExist }}</div>
</template>