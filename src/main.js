import './assets/reset.css'

import {createApp} from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

const app = createApp(App)
    .use(pinia)
    .use(router)
    
router.isReady()
    .then(() => {
        app.mount('#app')
    })
