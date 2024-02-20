import './assets/reset.css'

import {createApp} from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
    .use(pinia)
    .use(router)
    
router.isReady()
    .then(() => {
        app.mount('#app')
    })
