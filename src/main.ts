import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue';
import { permission } from '@/directives/permission'
// import { AButton } from '@/components/button/index'

const app = createApp(App)
// app.component('AButton', AButton)
app.use(Antd)
app.use(router)
app.directive('permission', permission)
router.isReady().then(() => app.mount('#app'))

