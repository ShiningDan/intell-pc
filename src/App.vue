<template>
  <div id="app">
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
          <v-sub-title>合作机构</v-sub-title>
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
import VHeader from '@/components/header/index.vue'
import VHeaderTop from '@/components/header-top/index.vue'
import VPartner from '@/components/partner/index.vue'
import VFooter from '@/components/footer/index.vue'
import VSubTitle from '@/components/sub-title/index.vue'

export default {
  components: {
    VHeader,
    VHeaderTop,
    VSubTitle,
    VFooter,
    VPartner,
  },
  data() {
    return {
      isfixed: false,
      partners: [],
    }
  },
  mounted() {
    this.init()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
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
  <<<<<<<headbackground-color: #f8f8f8;
  color: #171717;
  width: 1366px;
  =======//width: 100%;
  // margin: auto;
  background-color: $bg-primary;
  color: $text-primary;
  >>>>>>>d32d6faab166a798f9133bb1fd6e88a2b9ea140ffont-family: Circular, 'Hiragino Sans GB',
    '华文细黑', 'STHeiti', '微软雅黑', 'Microsoft YaHei', SimHei, 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
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
  }
  .app-footer {
    background-color: $bg-primary;
  }
}
</style>
