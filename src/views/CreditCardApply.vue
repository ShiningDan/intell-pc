<template>
  <div class="x-views-credit-apply-main">
    <div class="x-views-credit-apply-title">信用卡>信用卡申请</div>
    <div class="x-views-credit-apply-select">
      <div class="x-views-credit-apply-select-title">请选择卡面：</div>
      <el-select
        v-model="cardType"
        class="x-views-credit-apply-select-item"
        @change="showCard(cardType)"
      >
        <el-option
          v-for="item in cardTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="x-views-credit-apply-card">
      <v-credit-tab-no-btn
        v-for="card in cards"
        :key="card.id"
        :data="card"
        v-show="card.show"
      ></v-credit-tab-no-btn>
    </div>
    <div class="x-views-credit-apply-form"><v-credit-apply-form></v-credit-apply-form></div>
    <div class="x-views-credit-apply-card-tips">
      <p>温馨提示：中信银行将对您的资料严格保密，请放心填写。</p>
      <p>该卡将自动开通购汇还款功能，您的账单将以人民币入账显示，并使用人民币还款即可！</p>
    </div>
    <v-credit-procedure></v-credit-procedure>
  </div>
</template>

<script>
// @ is an alias to /src
import VCreditApplyForm from '@/components/credit-apply-form/index.vue'
import VCreditTabNoBtn from '@/components/credit-tab-no-btn/index.vue'
import VCreditProcedure from '@/components/credit-procedure/index.vue'
export default {
  components: {
    VCreditApplyForm,
    VCreditTabNoBtn,
    VCreditProcedure,
  },
  data() {
    return {
      cardType: '苏宁易购联名卡',
      cardTypes: [
        {
          value: 'card-suning',
          label: '苏宁易购联名卡',
        },
        {
          value: 'card-pufa-tenxun',
          label: '浦发腾讯联名卡',
        },
        {
          value: 'card-visa-white',
          label: 'VISA白金卡',
        },
        {
          value: 'card-youku',
          label: '中信优酷联名卡',
        },
      ],
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
          cardWeals: '白金卡，免年费\n开卡得苏宁SUPER VIP会员\n9元看电影，9积分兑星巴克',
          show: true,
          value: 'card-suning',
          applied: 1234,
        },
        {
          id: 2,
          img: require('@/assets/credit/card2.png'),
          cardTitle: '浦发腾讯联名卡',
          cardWeals: '白金卡，免年费\n微信支付享3倍积分\n9积分兑星巴克',
          show: false,
          value: 'card-pufa-tenxun',
          applied: 1234,
        },
        {
          id: 3,
          img: require('@/assets/credit/card3.png'),
          cardTitle: 'VISA白金卡',
          cardWeals:
            '白金卡，免年费，免版面费\n指定五星级酒店自助餐买一赠一\n指定酒店免费双早/入住升级礼遇',
          show: false,
          value: 'card-visa-white',
          applied: 1234,
        },
        {
          id: 4,
          img: require('@/assets/credit/card4.png'),
          cardTitle: '中信优酷联名卡',
          cardWeals: '白金卡，免年费\n新户刷卡月月领VIP会员\n9元买电影票',
          show: false,
          value: 'card-youku',
          applied: 1234,
        },
      ]
    },
    showCard(cType) {
      var cardCount = 0
      while (cardCount < this.cards.length) {
        if (cType === this.cards[cardCount].value) {
          this.cards[cardCount].show = true
        } else {
          this.cards[cardCount].show = false
        }
        cardCount++
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-views-credit-apply-main {
  .x-views-credit-apply-title {
    font-size: 18px;
    padding: 20px;
    box-shadow: #e5e5e5 0px 1px;
  }
  .x-views-credit-apply-select {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    .x-views-credit-apply-select-title {
      width: 150;
      line-height: 40px;
    }
    .x-views-credit-apply-select-item {
      width: 200px;
    }
  }
  .x-views-credit-apply-card,
  .x-views-credit-apply-form {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  .x-views-credit-apply-card-tips {
    text-align: center;
    line-height: 30px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
}
</style>
