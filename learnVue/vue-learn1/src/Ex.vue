<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  // 为按钮添加事件
  let button = document.querySelector('.button');
  button.addEventListener('click', listfunction);
});
</script>

<script>
const words = ['first', 'second', 'third'];
let cnt = 0;
function listfunction() {
  // 第一项文字变换
  let cs = document.getElementById('list').children;
  cs[0].innerText = words[++cnt % 3];

  //循环下移
  const temp=cs[1].innerText;
  for(let i=1;i<cs.length-1;i++){
    cs[i].innerText=cs[i+1].innerText
  }
  cs[cs.length-1].innerText=temp
}
</script>

<template>
  <div id="main">
    <div class="left">
      <div class="left-content">
        <ul id="list">
          <li>first</li>
          <li>a1</li>
          <li>a2</li>
          <li>a3</li>
          <li>a4</li>
          <li>a5</li>
          <li>a6</li>
          <li>a7</li>
          <li>a8</li>
        </ul>

        <div class="button">click</div>
      </div>
    </div>

    <div class="block"></div>
  </div>
</template>

<style scoped>
#main {
  background-color: #bfa;

  width: 600px;
  height: 600px;
  margin: 0 auto;
}

.left {
  background-color: rgba(100, 100, 100, 0.8);
  float: left;
  width: 50%;
  height: 100%;
}

.left-content {
  height: 90%;
  width: 94%;
  margin: 10% 3%;
  background-color: rgba(200, 200, 200, 0.3);
}

#list {
  border-bottom: 2px pink solid;
  margin: 10px;
  padding: 0;
  list-style: none;
  width: 30%;
  float: left;
}
#list li:first-child{
  color: red;
}
#list li:nth-child(2n){
  font-size: 40px;
}

.button {
  width: 100px;
  height: 50px;
  margin-top: 40px;
  margin-left: 10px;
  line-height: 50px;
  font-size: 25px;
  font-weight: 800;
  background-color: blueviolet;
  text-align: center;
  float: left;
  /* 设置鼠标样式 */
  cursor: pointer;
  user-select: none;
}
.button:hover {
  background-color: purple;
}
.button:active {
  background-color: pink;
}
</style>
