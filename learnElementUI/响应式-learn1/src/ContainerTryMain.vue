<script setup>
import {ref} from 'vue'

import containerTryVue from './components/containerTry.vue';

const boxWidth=ref(300)
</script>

<template>
    <input type="text" v-model="boxWidth" />
    <div :style="'width:'+boxWidth+'px'">
        <containerTryVue />
    </div>
</template>

<style scoped>

</style>