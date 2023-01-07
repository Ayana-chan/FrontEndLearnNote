<script setup>
    const books=['aa','bb','cc','dd','ee','ff','gg','aa','aa','aa']
</script>

<template>
    <div class="list">
        <div class="item" v-for="item in books">
            <div class="panel">
                {{item}}
            </div>
        </div>
    </div>

</template>

<style scoped>
.list{
    container-type: inline-size;
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

@container(width <= 300px) {
    .list .item{
        width: 100%;
    }
}
@container(300px < width <= 500px){
    .list .item{
        width: 50%;
    }
}
@container(width > 500px){
    .list .item{
        width: 33.3%;
    }
}

</style>




<!-- .card-container {
  container-type: inline-size;
}

.card {
  color: red;
}

@container (width >= 400px) {
  .card {
    color: blue;
  }
}

<div class="card-container">
        <div class="card">aaa</div>
    </div> -->