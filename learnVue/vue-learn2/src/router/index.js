import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/Home.vue';
import V1 from '@/V1响应与简化Script.vue';
import V2 from '@/V2Ref.vue';
import V3 from '@/V3计算属性.vue';
import V4 from '@/V4事件.vue';
import V5 from '@/V5表单输入绑定.vue';
import V6 from '@/V6模板引用.vue';
import V7 from '@/V7组件.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/V1',
      component: V1,
    },
    {
      path: '/V2',
      component: V2,
    },
    {
      path: '/V3',
      component: V3,
    },
    {
      path: '/V4',
      component: V4,
    },
    {
      path: '/V5',
      component: V5,
    },
    {
      path: '/V6',
      component: V6,
    },
    {
      path: '/V7',
      component: V7,
    },
  ],
});

export default router;
