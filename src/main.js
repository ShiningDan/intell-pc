import './common/vendor'
import './common/global.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuescroll from 'vuescroll/dist/vuescroll-native'
import 'vuescroll/dist/vuescroll.css'
Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      detectResize: false,
    },
    bar: {
      background: '#8D8E8E',
    },
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
