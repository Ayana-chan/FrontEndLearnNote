<!-- <script>
import {reactive} from 'vue'

export default{
  //
  setup(){
    const state=reactive({count: 0})

    function increment(){
      state.count++
    }

    //暴露
    return {
      state,
      increment
    }
  }
}
</script> -->

<!-- 加了setup表示这些都被放入setup并且全部曝光 -->
<script setup>
import { nextTick,reactive,ref } from "vue";

// 通过reactive创建响应式对象（使对象被代理。也就是说可以把已有对象代理成响应式，此时修改原对象不会触发响应）
// 响应式对象发生改变就会让浏览器更新（可能不是每次都更新）
// 响应是深层的，任何成员、数组都被代理，其变化都会被检测到
// 无法代理原始类型（此例把原始类型装进对象）
// 当我们将响应式对象的属性赋值或解构至本地变量时，或是将该属性传入一个函数时，我们会失去响应性（失去引用）
const state = reactive({ count: 0 });

function increment() {
  state.count++;
  nextTick(()=>{
    console.log("运行完毕increment并且DOM已更新")
  })
}

// ref可以让任意对象响应（因为让所有对象都变成“引用”了），生成.value属性
const num=ref(0)
console.log(num) // { value: 0 }
console.log(num.value) // 0
num.value++
console.log(num.value) // 1

// 对象类型的可以通过赋值响应式地替换
const objectRef = ref({ count: 0 })
// 这是响应式的替换
objectRef.value = { count: 1 }

</script>

<template>
  <!-- ’@‘是‘v-on:’的简写，表示事件监听 -->
  <button @click="increment">
    {{ state.count }}
  </button>
</template>
