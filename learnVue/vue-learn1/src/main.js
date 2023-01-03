import { createApp } from 'vue'
import V1 from './V1.vue'

//根组件V1是被引入的V1.vue，将其绑定到id=app上
//这样id=app的东西就会加载V1.vue
//'#app'也可以换成具体的dom元素
//应用实例必须在调用了 .mount() 方法后才会渲染出来
createApp(V1).mount('#app')


//直接写根组件模板，在app被mount之后就能读取其中的变量值
// const app1=createApp({
//     data(){
//         return { count: 4 }
//     }
// })
// const vm1=app1.mount('#app');
// console.log(vm1.count);
