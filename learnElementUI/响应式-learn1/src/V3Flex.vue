<script setup>
    const books=['aa','bb','cc','dd','ee','ff','gg','aa','aa','aa']
</script>

<template>
    <div class="list">
        <div class="item" v-for="item in books">
            {{item}}
        </div>
    </div>
</template>

<style scoped>
.list{
    width: 100%;
    background-color: #bfa;

    display: flex;
    /* wrap允许换行 */
    flex-wrap: wrap;
    
    justify-content: space-around;
}

.list .item{
    width: 100px;
    
    height: 150px;
    background-color: yellowgreen;
    border: 2px blue solid;

    /* flex-basis表示基准宽度，生效后width失效 */
    /* flex-basis: 100px;
    flex-grow: 1; */

    /* 简写，正常扩大，不允许缩小（指太小的时候宽高按比例缩小），基准宽度是100px */
    /* flex: 1 0 100px; */
}

</style>