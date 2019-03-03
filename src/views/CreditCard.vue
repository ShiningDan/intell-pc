<template>
  <div class="x-views-credit-main">
    <div class="x-views-container-bg-light">
      <v-banner class="x-views-credit-banner">
        <template slot="carousel">
          <el-carousel height="400px">
            <el-carousel-item v-for="item in 4" :key="item" class>
              <div class="x-views-credit-banner-carousel-item">
                <h3>{{ item }}</h3>
              </div>
            </el-carousel-item>
          </el-carousel>
        </template>
        <template slot="form">
          <v-credit-match-form></v-credit-match-form>
        </template>
      </v-banner>
      <div class="x-views-section">
        <v-recomm-title content="我们的优势"></v-recomm-title>
        <v-credit-advantage></v-credit-advantage>
      </div>
    </div>
    <div class="x-views-container-bg-dark">
      <div class="x-views-section">
        <v-sub-title>优惠活动</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
        <v-credit-discount></v-credit-discount>
      </div>
      <div class="x-views-section" v-if="recommends.length > 0">
        <v-sub-title>好卡推荐</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
        <div class="x-views-credit-recomm-main">
          <v-credit-card
            v-for="recommend in recommends"
            :key="recommend.id"
            :data="recommend"
          ></v-credit-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'
// @ is an alias to /src
import VBanner from '@/components/public/banner/index.vue'
import VCreditAdvantage from '@/components/creditcard/credit-advantage/index.vue'
import VCreditDiscount from '@/components/creditcard/credit-discount/index.vue'
import VCreditMatchForm from '@/components/creditcard/credit-match-form/index.vue'
import VRecommTitle from '@/components/public/recomm-title/index.vue'
import VCreditCard from '@/components/creditcard/credit-card/index.vue'
import VSubTitle from '@/components/public/sub-title/index.vue'
import VShowMore from '@/components/public/show-more/index.vue'

export default {
  components: {
    VBanner,
    VCreditAdvantage,
    VCreditMatchForm,
    VCreditDiscount,
    VRecommTitle,
    VCreditCard,
    VSubTitle,
    VShowMore,
  },
  data() {
    return {
      recommends: [],
    }
  },
  mounted() {
    agent.get('/credit').then(res => {
      this.recommends = res.recommends
    })
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-views-credit-main {
  .x-views-container-bg-light {
    background-color: #fff;
    width: 100%;
    box-shadow: $box-shadow-primary;
    &:first-child {
      padding-top: 20px;
    }
  }
  .x-views-container-bg-dark {
    width: 100%;
  }
  .x-views-section {
    padding: 40px 0;
    width: 1366px;
    margin: auto;
  }
  .x-views-credit-banner {
    width: 1366px;
    margin: auto;
  }
  .x-views-credit-recomm-main {
    display: flex;
    flex-wrap: wrap;
    .x-home-recomm-tab {
      margin-left: calc(86px / 3);
      &:nth-child(4n + 1) {
        margin-left: 0;
      }
      &:nth-child(n + 5) {
        margin-top: calc(86px / 3);
      }
    }
  }
}
// 这里是轮播图的测试样式，换成图片后可以删除
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
