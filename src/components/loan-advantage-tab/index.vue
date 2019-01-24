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
  border: 2px #ff4500;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  .x-loan-advantage-tab-img {
    width: 200px;
    height: 80px;
    margin: 30px 75px 0px 75px;
  }
  .x-loan-advantage-tab-title {
    width: 200px;
    height: 30px;
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
    text-align: center;
    vertical-align: middle;
  }
  .x-loan-advantage-tab-content {
    width: 200px;
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
}
</style>
