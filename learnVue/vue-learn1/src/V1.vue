<script>
// 声明式渲染
//这里定义的property无论定义如何都可以被template访问到
export default {
  data() {
    return {
      num: 114,
      uname:"DeathWind",
      msg: "Hello, vue & vite!",

      dynid:"vid"
    };
  },
};
</script>

<template>
  <div>
    <!-- 双大括号使得值与组件中的对应项绑定 -->
    <p>{{num}}</p>
    <p>{{ uname }}</p>
    <p>{{ msg }}</p>
    <!-- v-bind语法，可以绑定元素属性 -->
    <p :id="dynid">My id is dynamic</p>
  </div>
</template>

<style>
#vid{
  background-color: pink;
}

</style>
