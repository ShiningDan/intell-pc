<template>
  <el-card class="x-loan-adviser-tab" :body-style="{ padding: '0px' }">
    <div class="x-loan-adviser-tab-img">
      <img :src="data.url" :alt="data.title" width="100" height="110" />
    </div>
    <div class="x-loan-adviser-tab-content">
      <div class="x-loan-adviser-tab-content-name">{{ data.title }}</div>
      <div class="x-loan-adviser-tab-content-desc">
        <div v-for="(c, index) in contentSections" :key="index">{{ c }}</div>
      </div>
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
@import '@/common/_variable.scss';
.x-loan-adviser-tab {
  cursor: pointer;
  width: 320px;
  height: 150px;
  position: relative;
  .x-loan-adviser-tab-img {
    position: absolute;
    top: 20px;
    left: 10px;
  }
  .x-loan-adviser-tab-content {
    position: absolute;
    height: 180px;
    width: 170px;
    top: 0;
    right: 0;
    .x-loan-adviser-tab-content-name {
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      margin-top: 20px;
      text-align: left;
    }
    .x-loan-adviser-tab-content-desc {
      margin-top: 10px;
      font-size: 14px;
      line-height: 30px;
      text-align: left;
    }
  }
}
</style>
