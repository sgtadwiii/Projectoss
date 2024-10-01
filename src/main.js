import './assets/main.css'

import { createApp } from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Create the app instance
const app = createApp(App)

// Use the plugins
app.use(VueSweetalert2)
app.use(createPinia())
app.use(router)

// Mount the app to the DOM
app.mount('#app')
