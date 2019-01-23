<template>
  <div class="x-views-credit-main">
    <v-banner class="x-views-credit-banner">
      <template slot="carousel">
        <el-carousel height="400px">
          <el-carousel-item v-for="item in 4" :key="item" class="">
            <div class="x-views-credit-banner-carousel-item">
              <h3>{{ item }}</h3>
            </div>
          </el-carousel-item>
        </el-carousel>
      </template>
      <template slot="form">
        <v-credit-form></v-credit-form>
      </template>
    </v-banner>
    <div class="x-views-credit-adv">
      <v-home-recomm-title content="我们的优势"></v-home-recomm-title>
      <v-credit-advantage></v-credit-advantage>
    </div>
    <div class="x-views-credit-discount">
      <div class="x-views-credit-discount-title">
        <v-sub-title>优惠活动</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
      </div>
      <v-credit-discount></v-credit-discount>
    </div>
    <div class="x-views-credit-recomm x-views-credit-section" v-if="recommends.length > 0">
      <div>
        <v-sub-title>好卡推荐</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
      </div>
      <div class="x-views-credit-recomm-main">
        <v-home-recomm-tab
          v-for="recommend in recommends"
          :key="recommend.id"
          :data="recommend"
        ></v-home-recomm-tab>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VBanner from '@/components/banner/index.vue'
import VCreditAdvantage from '@/components/credit-advantage/index.vue'
import VCreditDiscount from '@/components/credit-discount/index.vue'
import VCreditForm from '@/components/credit-form/index.vue'
import VHomeRecommTitle from '@/components/home-recomm-title/index.vue'
import VHomeRecommTab from '@/components/home-recomm-tab/index.vue'
import VSubTitle from '@/components/sub-title/index.vue'
import VShowMore from '@/components/show-more/index.vue'

export default {
  components: {
    VBanner,
    VCreditAdvantage,
    VCreditForm,
    VCreditDiscount,
    VHomeRecommTitle,
    VHomeRecommTab,
    VSubTitle,
    VShowMore,
  },
  data() {
    return {
      recommends: [],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const recommends = await this.getRecommends()
      this.recommends = recommends
    },
    async getRecommends() {
      return [
        {
          id: 1,
          img: '@/assets/credit/card1.png',
          title: '苏宁易购联名卡',
          content:
            '白金卡，免年费，免版面费\n新客户核卡后60天内任意合格消费，获一年\n期苏宁SUPER VIP会员',
        },
        {
          id: 2,
          img: '@/assets/credit/card2.png',
          title: '浦发腾讯联名卡',
          content:
            '白金卡，免年费，免版面费\n新户核卡后6个自然月内使用微信支付累计享\n3倍积分，每月封顶20000积分',
        },
        {
          id: 3,
          img: '@/assets/credit/card3.png',
          title: 'VISA白金卡简约版',
          content:
            '白金卡，免年费，免版面费\n指定五星级酒店自助餐买一赠一\n指定酒店免费双早/入住升级礼遇',
        },
        {
          id: 4,
          img: '@/assets/credit/card4.png',
          title: '中信银行优酷联名卡',
          content: '白金卡，免年费，免版面费\n新用户刷卡月月领VIP会员\n9元买电影票，9积分兑星巴克',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.x-views-credit-main {
  .x-views-credit-banner {
    width: 100%;
  }
  .x-views-credit-adv {
    width: 100%;
    // height: 340;
    padding: 40px 0px 40px 0px;
  }
  .x-views-credit-discount {
    width: 100%;
    height: 360px;
    background-color: #f8f8f8;
    padding: 40px 0 40px 0;
  }
  .x-views-credit-section {
    padding: 40px 0;
  }
  .x-views-credit-recomm {
    background-color: #fff;
    .x-views-credit-recomm-main {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
}
// 这里是轮播图的测试样式，换成图片后可以删除
.x-views-credit-banner-carousel-item {
  // width: 100%;
}
.x-views-credit-banner-carousel-item h3 {
  text-align: center;
  color: #475669;
  font-size: 20px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.x-views-credit-banner-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}

.x-views-credit-banner-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
