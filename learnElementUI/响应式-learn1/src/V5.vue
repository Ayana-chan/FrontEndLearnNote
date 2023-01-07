


<template>
    <div class="box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laborum quaerat voluptates labore architecto, iusto aliquam, quos provident, neque dicta tempore. Iste et dolores nemo? Explicabo, et consectetur placeat minus dignissimos magni quisquam, neque harum repellat aut, qui at eius impedit nisi numquam molestiae eveniet recusandae debitis! Reprehenderit eum repudiandae non veritatis similique commodi, cumque sed ab nam earum recusandae animi nemo quam ad, qui, aperiam minus reiciendis assumenda vitae facere voluptatibus magni? Omnis, ut eaque inventore quas ratione itaque rerum officiis explicabo enim similique adipisci vero culpa placeat autem iure delectus, atque numquam commodi assumenda. Quaerat aspernatur nobis dolorum.
    </div>
</template>

<style scoped>
.box{
    background-color: rebeccapurple;
    height: 300px;

    /* 即使宽度是百分比式的，依然可以规定最大最小宽度 */
    /* clamp：左最小界限右最大界限，中间为首选值 */
    width: clamp(200px,60%,500px);
    /* 也可以设成下面三行 */
    /* min-width: 200px;
    width:60%;
    max-width: 500px; */

    /* 使字体大小跟着视口大小发生变化。这可以用在body上来改变全局 */
    font-size: clamp(0.5rem, 3.5vw,10rem);
}
</style>