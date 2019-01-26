<template>
  <div class="x-views-credit-activities-main">
    <div class="x-views-credit-activities-detail-title">信用卡>活动详情</div>
    <div class="x-views-credit-activities-title">【中信】看电影，最高立减15元</div>
    <div class="x-views-credit-activities-card-h">活动简介：</div>
    <div
      class="x-views-credit-activities-introduce"
      v-for="(detail, index) in details"
      :key="index"
    >
      {{ detail }}
    </div>
    <div class="x-views-credit-activities-card-h">参加活动的信用卡：</div>
    <div class="x-views-credit-activities-card">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="card in cards" :key="card.id">
          <img class="x-views-credit-activities-card-img" v-bind:src="card.url" />
          <h3 class="x-views-credit-activities-card-img-title">{{ card.title }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="x-views-credit-activities-card-h">活动细则：</div>
    <div class="x-views-credit-activities-introduce" v-for="(rule, index) in rules" :key="index">
      {{ rule }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: '白金卡1',
          url: require('@/assets/credit/card1.png'),
        },
        {
          id: 2,
          title: '白金卡2',
          url: require('@/assets/credit/card2.png'),
        },
        {
          id: 3,
          title: '白金卡3',
          url: require('@/assets/credit/card3.png'),
        },
        {
          id: 4,
          title: '白金卡4',
          url: require('@/assets/credit/card4.png'),
        },
      ],
      details: [
        '1.开卡消费或取现一次（不限金额）免首年免费，再刷卡消费或取现五次（不限金额）免次年年费',
        '2.普卡消费或取现1元积1分 金卡消费或取现1元积2分 生日双倍积分',
        '3.有效期1-2年，账单年最后一天的积分有效期为1年，第一天积分有效期2年',
        '4.最高取现比例30%，取现手续费为取现金额的2%，最低境内收费20元',
        '5.参与步骤：登录格瓦拉网站或手机APP客户端→选择影片、影院及座位→选择中国农业银行快捷支付→勾选使用积分支付→确认使用积分抵扣的金额以及剩余应付金额→完成支付',
        '6.优惠时间：长期有效',
        '7.适用地区：全国范围',
      ],
      rules: [
        '1、本活动限农行信用卡主卡持卡人参加（航空类联名卡、准贷记卡、商务卡除外）。附属卡持卡人的积分合并计入其主卡账户，由主卡持卡人使用',
        '2、持卡人如有下述任何一种情况，包含但不限于：违反《中国农业银行金穗信用卡章程》和《中国农业银行金穗贷记卡领用合约(个人卡)》、账户状态不正常或违反其他相关规定的，中国农业银行有权取消其参加资格',
        '3、参与步骤：登录格瓦拉网站或手机APP客户端→选择影片、影院及座位→选择中国农业银行快捷支付→勾选使用积分支付→确认使用积分抵扣的金额以及剩余应付金额→完成支付',
        '4、积分抵扣金额为1元的整数倍，每600信用卡积分可抵扣1元，单卡单日最高抵扣150元（即90000个信用卡积分）。每日抵扣名额有限，先到先得，用完即止',
        '5、积分支付一旦完成，所需积分将从指定账户中扣除并折抵消费金额，不接受更改。若积分余额不足则兑换失败',
        '6、选择积分支付后，该笔订单中的剩余金额必须使用农行信用卡快捷支付完成。若由于额度不足等特殊原因造成交易中止或失败，则已扣除的积分将自动退回持卡人账户',
        '7、如遇退票，原先扣除的积分将于7个工作日内退回至持卡人信用卡账户',
        '8、使用积分所抵扣的消费金额不再累计积分',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.x-views-credit-activities-main {
  .x-views-credit-activities-detail-title {
    font-size: 18px;
    padding: 20px;
    box-shadow: #e5e5e5 0px 1px;
  }
  .x-views-credit-activities-title {
    line-height: 40px;
    text-align: center;
    vertical-align: middle;
    font-size: 24px;
    margin: 40px;
  }
  .x-views-credit-activities-introduce {
    width: 800px;
    margin: 20px;
    line-height: 30px;
    text-align: left;
    margin-left: 300px;
  }
  .x-views-credit-activities-card-h {
    margin: 20px;
    line-height: 30px;
    font-size: 18px;
    text-align: left;
    margin-left: 300px;
  }
  .x-views-credit-activities-card {
    width: 800px;
    margin-left: 300px;
    .x-views-credit-activities-card-img {
      width: 100%;
      height: 250px;
      border-radius: 10px;
    }
    .x-views-credit-activities-card-img-title {
      margin-top: 20px;
      text-align: center;
    }
  }
}
</style>
