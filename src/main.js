import './common/vendor'
import './common/global.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuescroll from 'vuescroll/dist/vuescroll-native'
import 'vuescroll/dist/vuescroll.css'
Vue.use(vuescroll, {
  ops: {
    scrollPanel: {
      verticalNativeBarPos: 'left',
    },
    vuescroll: {
      detectResize: false,
    },
    bar: {
      opacity: 0,
    },
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
