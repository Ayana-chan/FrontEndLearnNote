<script>
// 声明式渲染
//这里暴露出的各种property都可以被template访问到
export default {
  data() {
    return {
      num: 111,
      uname:"DeathWind",
      msg: "Hello, vue & vite!",

      dynid:"vid",
      dyat:"id",

      seen: false,
    };
  },
};
</script>

<template>
  <div>
    <!-- 双大括号使得值与组件中的对应项绑定 -->
    <p>{{ uname }}</p>
    <p>{{ msg }}</p>
    <!-- 也可以塞json表达式。可见双括号只是标记此处要匹配变量名并赋值
        也可以说，双括号本身就在解析一个js表达式
    -->
    <p>{{num+3}}</p>

    <!-- v-bind语法，可以绑定元素属性 -->
    <!-- 如果objectOfAttrs是个内涵多个属性的对象，
      可以用<div v-bind="objectOfAttrs"></div>同时赋多个值
     -->
    <!--完整写法： <p v-bind:id="dynid">My id is dynamic</p> -->
    <p :id="dynid">My id is dynamic</p>

    <!-- 属性名也能动态化 -->
    <p :[dyat]="dynid">My attribute is dynamic</p>

    <!-- seen真假决定元素是否被移除 -->
    <p v-if="seen">My Existence is Connected with seen</p>

    <!-- JS表达式（必须可求值，可以有函数）可以被使用在如下场景上：
      在文本插值中 (双大括号)
      在任何 Vue指令(以v-开头的特殊属性)的值中 -->

    <!-- 动态参数设为null时，相当于显式移除绑定 -->
  </div>
</template>

<style>
#vid{
  background-color: pink;
}

</style>
