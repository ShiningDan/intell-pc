<template>
  <div>
    <div class="x-credit-tab">
      <img src="@/assets/credit/card1.png" class="x-credit-tab-img" />
      <div class="x-credit-tab-content">
        <p class="title">
          <i class="icon el-icon-star-on"></i>
          苏宁易购联名卡
        </p>
        <p class="title">
          <i class="icon el-icon-check"></i>
          白金卡，免年费
        </p>
        <p class="title">
          <i class="icon el-icon-check"></i>
          开卡得苏宁SUPER VIP会员
        </p>
        <p class="title">
          <i class="icon el-icon-check"></i>
          9元看电影，9积分兑星巴克
        </p>
        <p class="titlesmall">
          <i class="icon el-icon-goods"></i>
          已申请人数（<a class="titlesmall-light">123</a>）人
        </p>
        <el-button class="btn">立即参加</el-button>
      </div>
    </div>
  </div>
</template>

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
      margin-top: 10px;
      .icon {
        color: $theme-color;
      }
    }
    .titlesmall {
      height: 20px;
      font-size: 14px;
      margin-top: 10px;
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
