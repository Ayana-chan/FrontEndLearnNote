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

        display: flex;
        flex-wrap: wrap;
    }

    .dynamic-list .item{
        height: 100px;
        background-color: yellowgreen;
        border: 2px blue solid;

        flex: 1 0 60px;
    }

</style>