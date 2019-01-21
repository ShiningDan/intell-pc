<template>
  <div id="app">
    <div class="app-header">
      <v-header-top></v-header-top>
      <v-header></v-header>
    </div>
    <div class="app-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/header/index.vue'
import VHeaderTop from '@/components/header-top/index.vue'

export default {
  components: {
    VHeader,
    VHeaderTop,
  },
}
</script>

<style lang="scss">
#app {
  background-color: #f8f8f8;
  color: #171717;
  font-family: Circular, 'Hiragino Sans GB', '华文细黑', 'STHeiti', '微软雅黑', 'Microsoft YaHei',
    SimHei, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-family: "PingFang SC", "微软雅黑", "Microsoft YaHei", Helvetica, "Helvetica Neue", Tahoma, Arial, sans-serif;
}
.app-header {
  margin-bottom: 80px;
  position: relative;
}
.app-main {
  padding: 0px;
  background-color: #f8f8f8;
}
input::-webkit-input-placeholder {
  opacity: 1;
  font-size: 16px;
}
</style>
