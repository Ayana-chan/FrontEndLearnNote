<script>
// 声明式渲染
//这里定义的property无论定义如何都可以被template访问到
export default {
  data() {
    return {
      num: 114,
      uname:"DeathWind"
    };
  },
};
</script>

<template>
  <div>
    <p>{{num}}</p>
    <p>{{ uname }}</p>
  </div>
</template>
