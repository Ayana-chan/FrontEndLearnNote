<script setup>
import axios from 'axios';//测试用
import { onMounted } from 'vue'

// import api from './api';
import {  getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();

function getOnePeople(){
  proxy.$api.people.getOne().then((res)=>{
        console.log('get message')
        console.log(res.data.data)
  })
}

function getAllPeople(){
  proxy.$api.people.getAll().then((res)=>{
        console.log('get message')
        console.log(res.data.data)
  })
}



onMounted(() => {
    axios.get("/mockBasicTest").then(res => { console.log(res); });
})
</script>

<template>
  <el-button type="primary" size="default" @click="getOnePeople">people.getOne</el-button>
  <el-button type="primary" size="default" @click="getAllPeople">people.getAll</el-button>
  
</template>

<style scoped>

</style>
