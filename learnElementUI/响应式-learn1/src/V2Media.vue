<script setup>
    const books=['aa','bb','cc','dd','ee','ff','gg','aa','aa','aa']
</script>

<template>
    <div class="list clearfix">
        <div class="item" v-for="item in books">
            <div class="panel">
                {{item}}
            </div>
        </div>
    </div>
</template>

<style scoped>
.list{
    width: 100%;
    /* height: 300px; */
    background-color: #bfa;
}

.list .item{
    /* width: 100px; */
    height: 60px;
    float: left;
}

.panel{
    width: 85%;
    height: 80%;

    border: 2px blue solid;
    margin: 2px auto;
}

@media screen and (max-device-width:300px) {
    .list .item{
        width: 100%;
    }
}
@media screen and (min-device-width:301px) and (max-device-width:500px) {
    .list .item{
        width: 50%;
    }
}
@media screen and (min-device-width:501px) {
    .list .item{
        width: 33.3%;
    }
}
</style>