import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import routes from "./router/routers";
import 'materialize-css/dist/js/materialize.min'
import 'materialize-css/dist/css/materialize.min.css'
import utilsPlugin from './utils/utils.plugins'






createApp(App)
    .use(utilsPlugin)
    .use(store)
    .use(routes)
    .mount('#app')
