import { createApp } from 'vue'
import './assets/reset.css'
import './assets/clearfix.css'

import V1 from './V1.vue'
import V2 from './V2Media.vue'
import V3 from './V3Flex.vue'
import V4 from './V4GridList.vue'
import V5 from './V5.vue'
import containerTry from './components/containerTry.vue'
import containerTryMain from './ContainerTryMain.vue'

createApp(V4).mount('#app')
