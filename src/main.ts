import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

import './assets/styles/reset.css'

const pinia = createPinia()
const app = createApp(App).use(router);

app.use(pinia)
app.mount('#app')
