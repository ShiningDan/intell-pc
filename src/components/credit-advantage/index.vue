<template>
  <div>
    <div class="x-credit-advantage-main">
      <i class="icon el-icon-star-off"></i>
      <div class="x-credit-advantage-big">免年费</div>
      <div class="x-credit-advantage-small">刷卡达标<a class="x-credit-advantage-light">年年</a>免</div>
    </div>
       <div class="x-credit-advantage-main">
      <i class="icon el-icon-goods"></i>
      <div class="x-credit-advantage-big">享好礼</div>
      <div class="x-credit-advantage-small">消费积分<a class="x-credit-advantage-light">兑好礼</a></div>
    </div>
       <div class="x-credit-advantage-main">
      <i class="icon el-icon-date"></i>
      <div class="x-credit-advantage-big">长免息</div>
      <div class="x-credit-advantage-small">最长<a class="x-credit-advantage-light">50</a>天免息</div>
    </div>
       <div class="x-credit-advantage-main">
      <i class="icon el-icon-circle-check-outline"></i>
      <div class="x-credit-advantage-big">高保障</div>
      <div class="x-credit-advantage-small">交易刷卡更<a class="x-credit-advantage-light">安全</a></div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-credit-advantage-main{
  width: 200px;
  height: 200px;
  display: inline-block;
  margin-top: 20px;
  margin-left: 113px;
  border: 1px solid $theme-color;
  border-radius: 50%;
  .icon{
    width: 48px;
    height: 48px;
    margin-top: 20px;
    margin-left: 76px;
    font-size: 48px;
    color: #ff4500;
  }
  .x-credit-advantage-big{
     width: 100px;
    height: 30px;
    margin-top: 22px;
    margin-left: 50px;
    font-size: 24px;
    text-align: center;
  }
  .x-credit-advantage-small{
     width: 120px;
    height: 20px;
    margin-top: 10px;
    margin-left: 40px;
    font-size: 16px;
    text-align: center;
    .x-credit-advantage-light{
      color: $theme-color;
    }
  }
}
</style>
