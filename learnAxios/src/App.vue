<script setup>
// import api from './api';
// import {  getCurrentInstance } from "vue";
// const { proxy } = getCurrentInstance();

// function getOnePeople(){
//   proxy.$api.people.getOne('Bob').then(()=>{
//         console.log('get message')
//   })
// }

import axios from 'axios';
import { onMounted } from 'vue'

onMounted(() => {
    axios.get("/api/getUserInfo").then(res => { console.log(res); });
})
</script>

<template>
  <el-button type="primary" size="default" @click="getOnePeople">people.getOne</el-button>
  
</template>

<style scoped>

</style>
