<template>
  <el-card class="x-home-recomm-tab" :body-style="{ padding: '0px' }">
    <router-link :to="'/creditcard/' + data.id">
      <div class="x-home-recomm-tab-img">
        <img :src="data.url" :alt="data.title" height="200" width="320" />
      </div>
      <div class="x-home-recomm-tab-title">{{ data.title }}</div>
      <div class="x-home-recomm-tab-content">
        <div v-for="(c, index) in contentSections" :key="index">{{ c }}</div>
      </div>
    </router-link>
  </el-card>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      contentSections: [],
    }
  },
  watch: {
    data: {
      immediate: true,
      handler(data) {
        if (data && typeof data.content === 'string') {
          this.contentSections = data.content.split('\n')
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.x-home-recomm-tab {
  transition: all 0.333s ease-out 0s;
  &:hover {
    box-shadow: 2px 8px 20px 0 #ccc;
  }
  cursor: pointer;
  border-radius: 10px;
  width: 320px;
  height: 360px;
  .x-home-recomm-tab-img {
    width: 320px;
    height: 200px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
  }
  .x-home-recomm-tab-title {
    font-size: 16px;
    font-weight: bold;
    line-height: 60px;
    text-align: center;
    vertical-align: middle;
    height: 60px;
  }
  .x-home-recomm-tab-content {
    width: 280px;
    height: 80px;
    margin: 10px 20px;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
