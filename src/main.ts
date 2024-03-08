import { createApp } from 'vue'
import router from "./router";
import store from './store'
import ElementPlus from 'element-plus'
import * as echarts from 'echarts'

import './assets/css/common.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import Loading from "./components/Loading/index.vue";
import MenuList from "./components/MenuList/index.vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.component('Loading', Loading)
app.component('MenuList', MenuList)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
app.component(key, component)
}
app.config.globalProperties.$echarts = echarts
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
