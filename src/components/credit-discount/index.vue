<template>
  <div>
  <div class="x-credit-discount">
    <img src="@/assets/credit/discount1.png" class="x-credit-discount-img"/>
    <div class="x-credit-discount-content">
      <p class="title"><i class="icon el-icon-star-off" ></i>开卡享好礼</p>
      <p class="detail">即日起至2019年4月30日，通过本站开通<br>
                        任意一张中信银行信用卡，即可获赠阿尔<br>
                        卑斯20寸拉杆箱或Oral B 牙刷+乐扣保温<br>
                        杯盒套装</p>
      <button class="btn">立即参加</button>
    </div>
  </div>
  <div class="x-credit-discount">
    <img src="@/assets/credit/discount2.png" class="x-credit-discount-img"/>
    <div class="x-credit-discount-content">
      <p class="title"><i class="icon el-icon-goods" ></i>大胆买，随心购</p>
      <p class="detail">中信信用卡中心联合众安保险"安心购"<br>
                        推出白金卡用户专享购物保障服务，安心<br>
                        购精英版和安心购尊贵版。"安心购"30天<br>
                        无理由退货100%全额赔付，穿过、洗过、<br>有无吊牌均可退。
                        </p>
      <button class="btn">立即参加</button>
    </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.x-credit-discount{
  width: 590px;
  height: 200px;
  margin-top: 40px;
  margin-left: 70px;
  border:1px solid #e5e5e5;
  border-radius: 5px 5px 5px 5px;
  box-shadow: #e5e5e5 1px 1px 1px 1px;
  display:inline-block;
  .x-credit-discount-img{
    width: 240px;
    height: 200px;
    border:1px solid #e5e5e5;
    border-radius: 5px 0px 0px 5px;
    float: left;
  }
  .x-credit-discount-content{
    width: 328px;
    height: 200px;
    display:inline-block;
    margin-left: 20px;
    .title{
      width: 240px;
      height: 28px;
      font-size: 24px;
      margin-top: 10px;
      .icon{
        color: #ff4500;
      }
    }
    .detail{
      width: 280px;
      height: 100px;
      font-size: 14px;
      margin-top: 10px;
    }
    .btn{
    width: 120px;
    height: 40px;
    font-size: 16px;
    margin-left: 60px;
    background-color: #ff4500;
  }
  }

}
</style>
