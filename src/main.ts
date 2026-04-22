import { createApp } from 'vue'
import { toast } from 'vue-sonner'
import App from './App.vue'
import router from './router'
import './styles/globals.css'

const app = createApp(App)

app.config.globalProperties.$toast = toast
app.provide('toast', toast)

app.use(router).mount('#app')

declare module 'vue' {
  interface ComponentCustomProperties {
    $toast: typeof toast
  }
}