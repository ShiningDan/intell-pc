<template>
  <div id="app">
    <v-aside-nav></v-aside-nav>
    <div class="app-header">
      <v-header-top></v-header-top>
      <v-header
        :class="[isfixed ? 'x-header-container-fixed' : 'x-header-container-default']"
      ></v-header>
    </div>
    <div class="app-main"><router-view></router-view></div>
    <div class="app-footer">
      <div class="x-views-container-bg-light">
        <div class="x-views-home-partner x-views-section">
          <v-sub-title>合作伙伴</v-sub-title>
          <v-partner :data="partners"></v-partner>
        </div>
      </div>
      <div class="x-views-container-bg-dark">
        <div class="x-views-section"><v-footer></v-footer></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VHeader from '@/components/public/header/index.vue'
import VHeaderTop from '@/components/public/header-top/index.vue'
import VPartner from '@/components/public/partner/index.vue'
import VFooter from '@/components/public/footer/index.vue'
import VSubTitle from '@/components/public/sub-title/index.vue'
import VAsideNav from '@/components/public/aside-nav/index.vue'
import agent from '@/common/lib/agent.js'

export default {
  components: {
    VHeader,
    VHeaderTop,
    VSubTitle,
    VFooter,
    VPartner,
    VAsideNav,
  },
  data() {
    return {
      isfixed: false,
      partners: [],
    }
  },
  mounted() {
    agent.get('/alive').then(res => console.log(res, '~~~~~~~'))
    this.init()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let scrollTop =
        document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      if (scrollTop >= 32) {
        this.isfixed = true
      } else {
        this.isfixed = false
      }
    },
    async init() {
      const partners = await this.getPartners()
      this.partners = partners
    },
    async getPartners() {
      return [
        {
          id: 1,
          title: '1',
          url: require('@/assets/home/fff.png'),
        },
        {
          id: 2,
          title: '2',
          url: require('@/assets/home/fff.png'),
        },
        {
          id: 3,
          title: '3',
          url: require('@/assets/home/fff.png'),
        },
        {
          id: 4,
          title: '4',
          url: require('@/assets/home/fff.png'),
        },
        {
          id: 5,
          title: '5',
          url: require('@/assets/home/fff.png'),
        },
        {
          id: 6,
          title: '6',
          url: require('@/assets/home/fff.png'),
        },
      ]
    },
  },
}
</script>

<style lang="scss">
@import '@/common/_variable.scss';

#app {
  min-width: 1366px;
  background-color: $bg-primary;
  color: $text-primary;
  font-family: tahoma, arial, '\5fae\8f6f\96c5\9ed1', 'Hiragino Sans GB', sans-serif !important;
  .app-header {
    margin-bottom: 80px;
    position: relative;
    .x-header-container-fixed {
      position: fixed;
      top: 0;
    }
    .x-header-container-default {
      position: absolute;
    }
  }
  .app-main {
    padding: 0px;
    background-color: $bg-primary;
    min-height: calc(100vh - 110px);
  }
  .app-footer {
    background-color: $bg-primary;
  }
  .x-views-container-bg-light {
    background-color: #fff;
    width: 100%;
    box-shadow: $box-shadow-primary;
  }
  .x-views-container-bg-dark {
    width: 100%;
  }
  .x-views-section {
    padding: 40px 0;
    width: 1366px;
    margin: auto;
  }
}
</style>
