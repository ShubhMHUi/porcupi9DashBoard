import '../src/assets/main.css'

import '@/assets/css/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ui from '@nuxt/ui/vue-plugin'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ui)
app.use(VueApexCharts)

app.mount('#app')
