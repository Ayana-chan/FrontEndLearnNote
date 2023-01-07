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
        /* repeat表示n个参数都一样。其他时候可以写成多个参数表示每一列（行）的尺寸 */
        /* auto-fill表示自动重复最大次数 */
        /* minmax(100px,1fr)表示最窄100px，最宽占100%剩余空间（改掉1fr可以防止在列数过少的时候变形严重 */
        /* 似乎会尽量取到最小值，因此会每行塞尽量多的box */
        grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
        grid-auto-rows:120px;
    }

    .dynamic-list .item{
        height: 100px;
        background-color: yellowgreen;
        border: 2px blue solid;
    }

</style>