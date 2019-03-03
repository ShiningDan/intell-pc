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
      path: '/sign_in',
      name: 'sign_in',
      component: () => import(/* webpackChunkName: "about" */ './views/sign_in.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/register.vue'),
    },
    {
      path: '/loan/:id',
      name: 'loanID',
      component: () => import(/* webpackChunkName: "about" */ './views/loan-tab.vue'),
    },
    {
      path: '/insurance/:id',
      name: 'insuranceID',
      component: () => import(/* webpackChunkName: "about" */ './views/insurance-tab.vue'),
    },
    {
      path: '/creditCard/:id',
      name: 'creditCardID',
      component: () => import(/* webpackChunkName: "about" */ './views/creditCard-tab.vue'),
    },
  ],
})
