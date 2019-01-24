import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
    {
      path: '/loan',
      name: 'loan',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Loan.vue'),
    },
    {
      path: '/insurance',
      name: 'insurance',
      component: () => import(/* webpackChunkName: "about" */ './views/Insurance.vue'),
    },
    {
      path: '/creditCard',
      name: 'creditCard',
      component: () => import(/* webpackChunkName: "about" */ './views/CreditCard.vue'),
    },
    {
      path: '/creditCardMatch',
      name: 'creditCardMatch',
      component: () => import(/* webpackChunkName: "about" */ './views/CreditCardMatch.vue'),
    },
    {
      path: '/creditCardApply',
      name: 'creditCardApply',
      component: () => import(/* webpackChunkName: "about" */ './views/CreditCardApply.vue'),
    },
  ],
})
