<template>
  <div>
    <div class="x-credit-discount">
      <img src="@/assets/credit/discount1.png" class="x-credit-discount-img" />
      <div class="x-credit-discount-content">
        <p class="title">
          <i class="icon el-icon-star-off"></i>
          开卡享好礼
        </p>
        <div class="detail">
          <p>即日起至2019年4月30日，通过本站开通</p>
          <p>任意一张中信银行信用卡，即可获赠阿尔</p>
          <p>卑斯20寸拉杆箱或OralB牙刷+乐扣保温</p>
          <p>杯盒套装</p>
        </div>
        <el-button class="btn" @click="selectTab('/creditCardActivities')">了解详情</el-button>
      </div>
    </div>
    <div class="x-credit-discount">
      <img src="@/assets/credit/discount2.png" class="x-credit-discount-img" />
      <div class="x-credit-discount-content">
        <p class="title">
          <i class="icon el-icon-goods"></i>
          大胆买，随心购
        </p>
        <div class="detail">
          <p>中信信用卡中心联合众安保险"安心购"</p>
          <p>推出白金卡用户专享购物保障服务，安心</p>
          <p>购精英版和安心购尊贵版。"安心购"30天</p>
          <p>无理由退货100%全额赔付，穿过、洗过、</p>
          <p>有无吊牌均可退。</p>
        </div>
        <el-button class="btn" @click="selectTab('/creditCardActivities')">了解详情</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    selectTab(path) {
      this.$router.replace(path)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-credit-discount {
  background-color: #fff;
  width: 590px;
  height: 200px;
  margin-top: 40px;
  margin-left: 70px;
  // border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: $box-shadow-primary;
  display: inline-block;
  .x-credit-discount-img {
    width: 240px;
    height: 200px;
    border: 1px solid #e5e5e5;
    border-radius: 5px 0px 0px 5px;
    float: left;
  }
  .x-credit-discount-content {
    width: 328px;
    height: 200px;
    display: inline-block;
    margin-left: 20px;
    .title {
      width: 240px;
      height: 28px;
      font-size: 24px;
      margin-top: 10px;
      .icon {
        color: $theme-color;
      }
    }
    .detail {
      width: 280px;
      height: 100px;
      font-size: 14px;
      margin-top: 10px;
    }
    .btn {
      width: 120px;
      height: 40px;
      font-size: 16px;
      margin-left: 60px;
      color: #fff;
      background-color: $theme-color;
    }
  }
}
</style>
