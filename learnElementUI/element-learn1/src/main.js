import { createApp } from 'vue'
import './assets/reset.css' //全局使用，清除默认样式

import V1 from './V1.vue'
import V2 from './V2.vue'
import LoginPage from './LoginPage.vue'
import VV from './VV.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(LoginPage)

app.use(ElementPlus)
app.mount('#app')
