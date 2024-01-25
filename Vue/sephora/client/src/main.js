import { createApp } from 'vue'
import './assets/base.css'
import './assets/reset.css'
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import { Tabbar, TabbarItem, Field, CellGroup,Lazyload } from 'vant';
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
app.use(Tabbar)
app.use(Lazyload)
app.use(TabbarItem)
app.use(Field)
app.use(CellGroup)
app.use(router)
app.mount('#app')
