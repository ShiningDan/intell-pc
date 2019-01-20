<template>
  <el-card class="x-loan-tab" :body-style="{ padding: '0px' }">
    <div class="x-loan-tab-title">{{ data.title }}</div>
    <div class="x-loan-tab-desc">
      <div v-for="(c, index) in descSections" :key="index">{{ c }}</div>
    </div>
    <div class="x-loan-tab-amount">
      <div class="x-loan-tab-max-amount">{{ data.maxAmount }}</div>
      最高额度
    </div>
    <el-button class="x-loan-tab-btn">立即申请</el-button>
  </el-card>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      descSections: [],
    }
  },
  watch: {
    data: {
      immediate: true,
      handler(data) {
        if (data && typeof data.description === 'string') {
          this.descSections = data.description.split('\n')
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-loan-tab {
  width: 320px;
  height: 360px;
  border-radius: 10px;
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
  .x-loan-tab-title {
    height: 100px;
    line-height: 100px;
    font-size: 18px;
    font-weight: bold;
  }
  .x-loan-tab-desc {
    height: 100px;
    line-height: 20px;
  }
  .x-loan-tab-amount {
    height: 100px;
    .x-loan-tab-max-amount {
      color: $theme-color;
      font-size: 32px;
      line-height: 48px;
    }
  }
  .x-loan-tab-btn {
    height: 40px;
    padding: 0px;
    width: 120px;
    font-size: 16px;
    color: #fff;
    background-color: $theme-color;
    margin: 10px;
  }
}
</style>
