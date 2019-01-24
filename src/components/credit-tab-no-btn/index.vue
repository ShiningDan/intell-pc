<template>
  <div>
    <div class="x-credit-tab">
      <img :src="data.img" class="x-credit-tab-img" />
      <div class="x-credit-tab-content">
        <p class="title">
          <i class="icon el-icon-star-on"></i>
          {{data.cardTitle}}
        </p>
        <p class="title">
          <i class="icon el-icon-check"></i>
          {{data.cardWeal1}}
        </p>
        <p class="title">
          <i class="icon el-icon-check"></i>
          {{data.cardWeal2}}
        </p>
        <p class="title">
          <i class="icon el-icon-check"></i>
          {{data.cardWeal3}}
        </p>
        <p class="titlesmall">
          <i class="icon el-icon-goods"></i>
          已申请人数（<a class="titlesmall-light">{{data.applied}}</a>）人
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
}
</script>
<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-credit-tab {
  width: 660px;
  height: 200px;
  // border: 1px solid #e5e5e5;
  border-radius: 5px;
  // box-shadow: #e5e5e5 1px 1px 1px 1px;
  display: inline-block;
  .x-credit-tab-img {
    width: 320px;
    height: 200px;
    border: 1px solid #e5e5e5;
    border-radius: 5px ;
    box-shadow: #e5e5e5 1px 1px 1px 1px;
    float: left;
  }
  .x-credit-tab-content {
    width: 300px;
    height: 200px;
    display: inline-block;
    margin-left: 20px;
    .title {
      height: 20px;
      font-size: 18px;
      margin-top: 15px;
      .icon {
        color: $theme-color;
      }
    }
    .titlesmall {
      height: 20px;
      font-size: 14px;
      margin-top: 30px;
      margin-left: 2px;
      .icon {
        color: $theme-color;
      }
      .titlesmall-light{
        color: $theme-color;
      }
    }
    .btn {
      width: 120px;
      height: 40px;
      font-size: 16px;
      margin-left: 80px;
      margin-top: 10px;
      color: #fff;
      background-color: $theme-color;
    }
  }
}
</style>
