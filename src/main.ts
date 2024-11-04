import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ToastPlugin from 'vue-toast-notification'
import './assets/main.css'
import '@progress/kendo-theme-default/dist/all.css'
import 'vue-toast-notification/dist/theme-bootstrap.css'
const pinia = createPinia()
createApp(App).use(router).use(ToastPlugin).use(pinia).mount('#app')
