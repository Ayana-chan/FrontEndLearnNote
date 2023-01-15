<script setup>
import api from './api';

function getOnePeople(){
    api.people.getOne('Bob').then(()=>{
        console.log('get message')
    })
}
</script>

<template>
  <el-button type="primary" size="default" @click="getOnePeople">people.getOne</el-button>
  
</template>

<style scoped>

</style>
