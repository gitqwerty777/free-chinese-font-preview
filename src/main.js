import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueRouter)

import FontPreviews from "./components/FontPreviews.vue";
import About from "./components/About.vue";

const routes = [
  { path: '/', component: FontPreviews },
  { path: '/about', component: About }
]

// 3. 創建 router 實例，然後傳 `routes` 配置
// 你還可以傳別的配置參數, 不過先這麼簡單著吧。
const router = new VueRouter({
  routes // (縮寫) 相當於 routes: routes
})

// 4. 創建和掛載根實例。
// 記得要通過 router 配置參數注入路由，
// 從而讓整個應用都有路由功能
// 5. 創建並掛載根實例
new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')