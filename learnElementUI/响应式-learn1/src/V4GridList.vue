<script setup>
    const books=['aa','bb','cc','dd','ee','ff','gg','aa','aa','aa']
</script>

<template>
    <div class="dynamic-list">
        <div class="item" v-for="item in books">
            {{ item }}
        </div>
    </div>
</template>

<style scoped>
    .dynamic-list{
        background-color: #bfa;

        display: grid;
        gap:0.2rem 0.8rem;
        /* repeat表示n个参数都一样 */
        /* auto-fill表示自动计算列数并用空白填充剩余不够的空位 */
        /* minmax(100px,1fr)表示最窄100px，最宽占100%剩余空间 */
        /* 似乎会尽量取到最小值来塞尽量多的box */
        grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
        grid-auto-rows:120px;
    }

    .dynamic-list .item{
        height: 100px;
        background-color: yellowgreen;
        border: 2px blue solid;
    }

</style>