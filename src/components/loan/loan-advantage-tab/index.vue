<template>
  <el-card class="x-loan-advantage-tab" :body-style="{ padding: '0px' }">
    <div class="x-loan-advantage-tab-img">
      <img src="@/assets/home/logo.png" :alt="data.title" height="50" width="50" />
    </div>
    <div class="x-loan-advantage-tab-title">{{ data.title }}</div>
    <div class="x-loan-advantage-tab-content">
      <div v-for="(c, index) in contentSections" :key="index">{{ c }}</div>
    </div>
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
.x-loan-advantage-tab {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  text-align: center;
  .x-loan-advantage-tab-img {
    margin: 30px 0 20px;
  }
  .x-loan-advantage-tab-title {
    width: 200px;
    height: 30px;
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
  }
  .x-loan-advantage-tab-content {
    width: 200px;
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
