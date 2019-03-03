<template>
  <div class="x-views-home-main">
    <div class="x-views-container-bg-light">
      <v-banner class="x-views-home-banner">
        <template slot="carousel">
          <el-carousel height="400px">
            <el-carousel-item v-for="item in 4" :key="item" class>
              <div class="x-views-home-banner-carousel-item">
                <h3>{{ item }}</h3>
              </div>
            </el-carousel-item>
          </el-carousel>
        </template>
        <template slot="form">
          <v-home-loan-form></v-home-loan-form>
        </template>
      </v-banner>
      <div class="x-views-section" v-if="recommends.length > 0">
        <v-recomm-title content="特别推荐"></v-recomm-title>
        <div class="x-views-main">
          <v-home-recomm-tab
            v-for="recommend in recommends"
            :key="recommend.id"
            :data="recommend"
          ></v-home-recomm-tab>
        </div>
      </div>
    </div>
    <div class="x-views-container-bg-dark">
      <div class="x-views-section" v-if="loans.length > 0">
        <v-sub-title>贷款</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
        <div class="x-views-main">
          <v-loan-tab v-for="loan in loans" :key="loan.id" :data="loan"></v-loan-tab>
          <v-loan-compute></v-loan-compute>
        </div>
      </div>
    </div>
    <div class="x-views-container-bg-light">
      <div class="x-views-section" v-if="insuracnes.length > 0">
        <v-sub-title>保险</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
        <div class="x-views-main">
          <div><v-insurance-tab-big :data="insuracnes[0]"></v-insurance-tab-big></div>
          <div>
            <v-insurance-tab-small :data="insuracnes[1]"></v-insurance-tab-small>
            <v-insurance-tab-small
              style="margin-top: 20px"
              :data="insuracnes[2]"
            ></v-insurance-tab-small>
          </div>
        </div>
      </div>
    </div>
    <div class="x-views-container-bg-dark">
      <div class="x-views-section" v-if="credits.length > 0">
        <v-sub-title>信用卡</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
        <div class="x-views-main">
          <v-home-recomm-tab
            v-for="credit in credits"
            :key="credit.id"
            :data="credit"
          ></v-home-recomm-tab>
          <v-credit-compute></v-credit-compute>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'
// @ is an alias to /src
import VBanner from '@/components/public/banner/index.vue'
import VHomeLoanForm from '@/components/home/home-loan-form/index.vue'
import VRecommTitle from '@/components/public/recomm-title/index.vue'
import VHomeRecommTab from '@/components/home/home-recomm-tab/index.vue'
import VSubTitle from '@/components/public/sub-title/index.vue'
import VShowMore from '@/components/public/show-more/index.vue'
import VLoanTab from '@/components/loan/loan-tab/index.vue'
import VLoanCompute from '@/components/loan/loan-compute/index.vue'
import VCreditCompute from '@/components/creditcard/credit-compute/index.vue'
import VInsuranceTabBig from '@/components/insurance/insurance-tab-big/index.vue'
import VInsuranceTabSmall from '@/components/insurance/insurance-tab-small/index.vue'

export default {
  components: {
    VBanner,
    VHomeLoanForm,
    VRecommTitle,
    VHomeRecommTab,
    VSubTitle,
    VShowMore,
    VLoanTab,
    VLoanCompute,
    VInsuranceTabBig,
    VInsuranceTabSmall,
    VCreditCompute,
  },
  data() {
    return {
      recommends: [],
      loans: [],
      insuracnes: [],
      credits: [],
    }
  },
  mounted() {
    agent.get('/home').then(res => {
      this.recommends = res.recommends
      this.loans = res.loans
      this.insuracnes = res.insuracnes
      this.credits = res.credits
    })
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-views-home-main {
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
  .x-views-main {
    display: flex;
    justify-content: space-between;
  }
  .x-views-home-banner {
    width: 1366px;
    margin: auto;
    box-shadow: $box-shadow-secondary;
  }
}

// 这里是轮播图的测试样式，换成图片后可以删除
//.x-views-home-banner-carousel-item {
// width: 100%;
//}
.x-views-home-banner-carousel-item h3 {
  text-align: center;
  color: #475669;
  font-size: 20px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.x-views-home-banner-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}

.x-views-home-banner-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
