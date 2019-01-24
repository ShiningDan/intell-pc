<template>
  <el-card class="x-loan-quality-tab" :body-style="{ padding: '0px' }">
    <div class="x-loan-quality-tab-head">
      <div class="x-loan-quality-tab-img">
        <img src="@/assets/home/logo.png" :alt="data.title" height="50" width="50" />
      </div>
      <div class="x-loan-quality-tab-title">{{ data.title }}</div>
    </div>
    <div class="x-loan-quality-tab-subtitle">{{ data.subtitle }}</div>
    <div class="x-loan-quality-tab-content">
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
.x-loan-quality-tab {
  cursor: pointer;
  width: 240px;
  height: 250px;
  .x-loan-quality-tab-head {
    width: 240px;
    height: 80px;
    background-color: #89cac4;
    display: flex;
    justify-content: flex-between;
    .x-home-recomm-tab-img {
      width: 100px;
      height: 80px;
      margin: 35px 15px 15px 15px;
    }
    .x-loan-quality-tab-title {
      width: 140px;
      height: 80px;
      line-height: 80px;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      vertical-align: middle;
    }
  }
  .x-loan-quality-tab-subtitle {
    width: 240px;
    height: 70px;
    line-height: 70px;
    font-size: 24px;
    text-align: center;
    vertical-align: middle;
  }
  .x-loan-quality-tab-content {
    width: 240px;
    margin: 20px;
    font-size: 18px;
  }
}
</style>
