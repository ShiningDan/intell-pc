<template>
  <div class="x-views-credit-match-main">
    <div class="x-views-credit-match-title">信用卡>匹配详情</div>
    <div class="x-views-credit-match-tips">
      <v-home-recomm-title
        content="尊敬的客户您好，根据您刚才所填信息，为您推荐以下产品">
      </v-home-recomm-title>
    </div>
    <div div class="x-views-credit-match-content">
         <div class="x-views-credit-match-card">
      <v-credit-tab
          v-for="card in cards"
          :key="card.id"
          :data="card"
      ></v-credit-tab>
    </div>
      <div class="x-views-credit-match-info-title">基本信息|专享特权</div>
      <div class="x-views-credit-match-info-key">
        <p>年费政策：</p>
        <p>积分规则：</p>
        <p>积分有效期：</p>
        <p>取现：</p>
        <p>免息期：</p>
        <p>短信通知：</p>
        <p>失卡保障：</p>
      </div>
      <div class="x-views-credit-match-info-value">
        <p>开卡消费或取现一次（不限金额）免首年免费，再刷卡消费或取现五次（不限金额）免次年年费</p>
        <p>普卡消费或取现1元积1分 金卡消费或取现1元积2分 生日双倍积分</p>
        <p>有效期1-2年，账单年最后一天的积分有效期为1年，第一天积分有效期2年</p>
        <p>最高取现比例30%，取现手续费为取现金额的2%，最低境内收费20元</p>
        <p>最短20天，最长50天</p>
        <p>中信银行信用卡交易短信通知</p>
        <p>中信银行信用卡可享受48小时挂失前失卡保障服务，每月收取4元</p>
      </div>
       <div class="x-views-credit-match-info-title">专享特权</div>
      <div class="x-views-credit-match-info-key">
        <p>9元看电影：</p>
        <p>兑星巴克：</p>
        <p>双倍积分：</p>
        <p>免费双早：</p>
        <p>购机票返利：</p>
      </div>
      <div class="x-views-credit-match-info-value">
        <p>周一至周五9:00——17:00，到指定影院，电影票只需9元/张，每张信用卡限购两张</p>
        <p>每周三，可以花费9积分兑换星巴克咖啡，每天限两次</p>
        <p>到指定商场购物，刷卡消费享双倍积分</p>
        <p>到指定酒店住宿，提供免费双早</p>
        <p>购买东方航空机票，返利20%，可用于下次购票</p>
      </div>
    </div>
    <div class="x-views-credit-match-credit-procedure">
      <v-credit-procedure></v-credit-procedure>
    </div>
  </div>
</template>
<script>
import VHomeRecommTitle from '@/components/home-recomm-title/index.vue'
import VCreditTab from '@/components/credit-tab/index.vue'
import VCreditProcedure from '@/components/credit-procedure/index.vue'

export default {
  components: {
    VHomeRecommTitle,
    VCreditTab,
    VCreditProcedure,
  },
  data() {
    return {
      cards: [],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const cards = await this.getcards()
      this.cards = cards
    },
    async getcards() {
      return [
        {
          id: 1,
          img: require('@/assets/credit/card1.png'),
          cardTitle: '苏宁易购联名卡',
          cardWeal1: '白金卡，免年费',
          cardWeal2: '开卡得苏宁SUPER VIP会员',
          cardWeal3: '9元看电影，9积分兑星巴克',
          applied:1234,
        },
      ]
    },
  }
}
</script>


<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-views-credit-match-main{
  width: 100%;
  padding: 0;
  .x-views-credit-match-title{
    font-size: 18px;
    padding: 20px;
    box-shadow: #e5e5e5  0px 1px;
  }
  .x-views-credit-match-tips{
    margin-top: 20px;
  }
  .x-views-credit-match-content{
    margin-left: 300px;
    .x-views-credit-match-card{
      height: 200px;
      margin-top: 50px;
      margin-left: 50px;
      // text-align: center;
    }
    .x-views-credit-match-info-title{
      font-size: 18px;
      margin-top: 40px;
      margin-left: 20px;
    }
    .x-views-credit-match-info-key{
      width: 100px;
      font-size: 14px;
      text-align: right;
      line-height: 30px;
      margin-top: 20px;
      display: inline-block;
    }
    .x-views-credit-match-info-value{
      width: 600px;
      font-size: 14px;
      text-align: left;
      line-height: 30px;
      margin-top: 20px;
      display: inline-block;
    }
  }
  .x-views-credit-match-credit-procedure{
    margin-top: 100px;
  }
}
</style>
