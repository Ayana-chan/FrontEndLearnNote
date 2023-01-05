<script setup>
import { ref } from 'vue'

const count=ref(0)

const name = ref('Vue.js')
function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` 是 DOM 原生事件
//   可以通过event看看是触发了什么
  if (event) {
    alert(event.target.tagName)
  }
}

function say(msg){[
    alert(msg)
]}

// event.preventDefault()可以取消默认事件按原路进行，比如可以用来取消表单提交和超链接跳转

</script>

<template>
    <!-- 内联事件处理器 -->
    <button @click="count++">
        Count Add 1
    </button>
    <p>{{ count }}</p>

    <!-- 方法事件处理器，会接收DOM -->
    <button @click="greet">
        Greet
    </button>

    <!-- 可以传参（这里是内联） -->
    <!-- .one表示只能触发一次 -->
    <button @click.once="say('hello')">
        Say Hello
    </button>

    <!-- 会在聚焦的时候监听回车键 -->
    <input @keyup.enter="say('submit')" type="text">

    <div @click.ctrl="say('ctrl+click')"> ctrl+click </div>

    <div @click.right="say('rightclick')"> rightclick </div>

</template>









