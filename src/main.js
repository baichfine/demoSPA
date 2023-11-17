import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'
import vuetify from './plugins/vuetify'
import './css/main.css'

createApp(App).use(vuetify).use(store).mount('#app')
