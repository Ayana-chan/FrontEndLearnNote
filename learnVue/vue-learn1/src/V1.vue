<script setup>
import { ref } from "vue";
// 声明式渲染
//这里暴露出的各种property都可以被template访问到

const num = 111;
const uname = "DeathWind";
const msg = "Hello, vue & vite!";

const dynid = "vid";
const dynamicAttribute = "id";

const seen = true;

const items = ref([{ name: "David" }, { name: "Lucy" }]);
const obj = {
  a1: "aaa",
  a2: 123,
  a3: {
    b1: "bbb",
    b2: 456,
  },
};
</script>

<!-- template是一个模板占位符，可以用来包裹元素而不产生多余的div -->
<template>
  <div>
    <!-- JS表达式（必须可求值，可以有函数）可以被使用在如下场景上：
      在文本插值中 (双大括号)
      在任何 Vue指令(以v-开头的特殊属性)的值中 -->

    <!-- 动态参数设为null时，相当于显式移除绑定 -->

    <!-- 双大括号使得值与组件中的对应项绑定 -->
    <p>{{ uname }}</p>
    <p>{{ msg }}</p>
    <!-- 也可以塞json表达式。可见双括号只是标记此处要匹配变量名并赋值
        也可以说，双括号本身就在解析一个js表达式
    -->
    <p>{{ num + 3 }}</p>

    <!-- v-bind语法，可以绑定元素属性 -->
    <!-- 如果objectOfAttrs是个内涵多个属性的对象，
      可以用<div v-bind="objectOfAttrs"></div>同时赋多个值
     -->
    <!--完整写法： <p v-bind:id="dynid">My id is dynamic</p> -->
    <p :id="dynid">My id is dynamic</p>

    <!-- 属性名也能动态化 -->
    <p :[dynamicAttribute]="dynid">My attribute is dynamic</p>

    <!-- v-if真假决定元素是否被移除（v-show只是让元素display，依旧占位且不能用else） -->
    <p v-if="seen">My Existence is Connected with seen</p>
    <p v-else>Not Seen</p>

    <!-- v-for显示数组（可以使用计算属性） -->
    <!-- key用于标识每一项以加快变化后的渲染，可以是其任意主键值（似乎有更多作用） -->
    <li v-for="item in items" :key="item.name">
      {{ item.name }}
    </li>
    <!-- 第一个参数表示值，第二个参数表示索引 -->
    <li v-for="(item, index) in items">{{ index }} - {{ item.name }}</li>
    <!-- 解构 -->
    <li v-for="{ name } in items">
      {{ name }}
    </li>
    <!-- 遍历属性 -->
    <li v-for="(value, key, index) in obj">
      {{ index }} - {{ key }} - {{ value }}
      <!-- {{ key }} - {{ value }} -->
    </li>
    <span v-for="n in 10">{{ n }}-</span>
  </div>
</template>

<!-- 可以以这种方式引入外部css -->
<!-- <style src="@/style/reset.css"  scoped></style> -->

<style>
#vid {
  background-color: pink;
}
</style>
