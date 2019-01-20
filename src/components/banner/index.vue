<template>
  <el-card class="x-banner-main" :body-style="{ padding: '0px' }">
    <div class="x-banner-carousel"><slot name="carousel"></slot></div>
    <div class="x-banner-form"><slot name="form"></slot></div>
  </el-card>
</template>

<style lang="scss" scoped>
.x-banner-main {
  border-radius: 10px;
  position: relative;
  width: 100%;
  .x-banner-carousel {
    width: calc(100% - 300px);
    margin-right: 200px;
  }
  .x-banner-form {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
  }
}
</style>
