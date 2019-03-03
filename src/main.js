import './common/vendor'
import './common/global.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
