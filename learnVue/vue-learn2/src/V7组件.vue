<script setup>
import v1 from './V1响应与简化Script.vue'
import V2 from './V2Ref.vue'
import V3 from './V3计算属性.vue'

</script>

<template>
    <!-- 使用props可以给子组件传参 -->
    <!-- 而子组件可以用$emit('事件名')来给父组件传一个自定义事件，
        父组件可以在子组件中添加@监听来捕获它
     -->
    <v1 />
    <v2 />
    <v3 />

    <!-- 可以使用插槽来像html一样向子组件传递文本内容，让其显示出来 -->

    <!-- 使用is可以切换组件 -->

</template>