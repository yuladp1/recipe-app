import { createApp } from 'vue'
import { markRaw } from 'vue'
import router from "./router";
import { createPinia } from 'pinia'
import App from './App.vue'
import "../node_modules/bulma/css/bulma.css";
const store = createPinia()
store.use(({ store }) => {
    store.router = markRaw(router)
  })

const app = createApp(App)
app.use(router).use(store).mount('#app')