<script setup></script>

<template>
    <div id="size-color"></div>
</template>

<style scoped>
#size-color{
    width: 100px;
    height: 200px;
}

/* max-device-width获取的是设备宽度 */
/* 如果换成max-width就是浏览器宽度，把浏览器缩小也会触发 */
@media screen and (max-device-width:399px){
    #size-color{
        background-color: green;
    }
}
@media screen and (min-device-width:400px) and (max-device-width:800px) {
    #size-color{
        background-color: red;
    }
}
@media screen and (min-device-width:801px){
    #size-color{
        background-color: blue;
    }
}
</style>