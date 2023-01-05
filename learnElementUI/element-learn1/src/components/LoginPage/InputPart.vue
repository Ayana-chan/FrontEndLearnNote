<script setup>
import {ref} from 'vue'

const email=ref("")

</script>

<template>
  <!-- 大标题 -->
  <h1 class="title">Ink-Tea Library</h1>
  
  <div class="input-box">
    <!-- 小标题 -->
    <div class="login-title">
      <h2>Login</h2>
    </div>
    <el-input
      class="email-input"
      v-model="email"
      placeholder="114514@xidian.edu.cn"
    ></el-input>
    <el-button type="primary">
      Send Verification Code
    </el-button>
  </div>
</template>

<style scoped>
.title {
  height: 40px;
  width: 50%;

  margin: 50px auto 90px auto;

  text-align: center;
  color: #334455;
  font-size: 40px;
  font-weight: bold;
}

.input-box{
  width: 300px;
  border: 2px #dddddd solid;
  padding: 20px;

  margin: 0 auto;
}

.input-box .login-title{
  color: #333;
  font-size: 25px;
}

.input-box .email-input{
  width: 200px;
}

</style>