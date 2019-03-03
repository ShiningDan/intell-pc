<template>
  <div>
    <div class="x-views-container-bg-light">
      <v-banner class="x-views-loan-banner">
        <template slot="carousel">
          <el-carousel height="400px">
            <el-carousel-item v-for="item in 4" :key="item" class>
              <div class="x-views-loan-banner-carousel-item">
                <h3>{{ item }}</h3>
              </div>
            </el-carousel-item>
          </el-carousel>
        </template>
        <template slot="form">
          <v-loan-form></v-loan-form>
        </template>
      </v-banner>
      <div class="x-views-section">
        <v-recomm-title content="我们的优势"></v-recomm-title>
        <div class="x-views-main">
          <v-loan-advantage-tab
            v-for="advantage in advantages"
            :key="advantage.id"
            :data="advantage"
          ></v-loan-advantage-tab>
        </div>
      </div>
    </div>
    <div class="x-views-container-bg-dark">
      <div class="x-views-loan-content">
        <div class="x-views-loan-content-main">
          <div class="x-views-loan-section" v-if="qualitys.length > 0">
            <v-recomm-title content="贷款资质"></v-recomm-title>
            <div class="x-views-quality">
              <v-loan-quality-tab
                v-for="quality in qualitys"
                :key="quality.id"
                :data="quality"
              ></v-loan-quality-tab>
            </div>
          </div>
          <div class="x-views-loan-section" v-if="houseloans.length > 0">
            <v-sub-title>房抵贷</v-sub-title>
            <v-show-more style="float: right"></v-show-more>
            <div class="x-views-loan-main">
              <v-loan-tab
                v-for="houseloan in houseloans"
                :key="houseloan.id"
                :data="houseloan"
              ></v-loan-tab>
            </div>
          </div>
          <div class="x-views-loan-section" v-if="creditloans.length > 0">
            <div>
              <v-sub-title>信用贷</v-sub-title>
              <v-show-more style="float: right"></v-show-more>
            </div>
            <div class="x-views-loan-main">
              <v-loan-tab
                v-for="creditloan in creditloans"
                :key="creditloan.id"
                :data="creditloan"
              ></v-loan-tab>
            </div>
          </div>
          <div class="x-views-loan-section" v-if="carloans.length > 0">
            <div>
              <v-sub-title>车抵贷</v-sub-title>
              <v-show-more style="float: right"></v-show-more>
            </div>
            <div class="x-views-loan-main">
              <v-loan-tab
                v-for="carloan in carloans"
                :key="carloan.id"
                :data="carloan"
              ></v-loan-tab>
            </div>
          </div>
        </div>
        <div class="x-views-loan-content-aside">
          <div class="x-views-loan-aside"><v-loan-compute></v-loan-compute></div>
          <div class="x-views-loan-aside">
            <v-loan-adviser-title>贷款顾问</v-loan-adviser-title>
            <v-loan-adviser-tab
              v-for="adviser in advisers"
              :key="adviser.id"
              :data="adviser"
            ></v-loan-adviser-tab>
          </div>
        </div>
      </div>
      <div class="x-views-section x-views-loan-statement">
        <v-recomm-title content="特别声明"></v-recomm-title>
        <div class="x-views-loan-statement-content">
          <p>* 贷款额度，放款时间以审批结果为准；</p>
          <p>* 您的信息将只作为产品推荐使用，不会以任何形式泄露给其他人员或机构。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import agent from '@/common/lib/agent.js'
// @ is an alias to /src
import VRecommTitle from '@/components/public/recomm-title/index.vue'
import VBanner from '@/components/public/banner/index.vue'
import VLoanForm from '@/components/loan/loan-form/index.vue'
import VLoanAdvantageTab from '@/components/loan/loan-advantage-tab/index.vue'
import VLoanQualityTab from '@/components/loan/loan-quality-tab/index.vue'
import VSubTitle from '@/components/public/sub-title/index.vue'
import VShowMore from '@/components/public/show-more/index.vue'
import VLoanTab from '@/components/loan/loan-tab/index.vue'
import VLoanCompute from '@/components/loan/loan-compute/index.vue'
import VLoanAdviserTitle from '@/components/loan/loan-adviser-title/index.vue'
import VLoanAdviserTab from '@/components/loan/loan-adviser-tab/index.vue'

export default {
  components: {
    VRecommTitle,
    VBanner,
    VLoanForm,
    VLoanAdvantageTab,
    VLoanQualityTab,
    VSubTitle,
    VShowMore,
    VLoanTab,
    VLoanCompute,
    VLoanAdviserTitle,
    VLoanAdviserTab,
  },
  data() {
    return {
      advantages: [],
      qualitys: [],
      houseloans: [],
      creditloans: [],
      carloans: [],
      advisers: [],
    }
  },
  mounted() {
    this.init(),
      agent.get('/loan').then(res => {
        this.houseloans = res.houseloans
        this.creditloans = res.creditloans
        this.carloans = res.carloans
        this.advisers = res.advisers
      })
  },
  methods: {
    async init() {
      const advantages = await this.getAdvantages()
      const qualitys = await this.getQualitys()
      this.advantages = advantages
      this.qualitys = qualitys
    },
    async getAdvantages() {
      return [
        {
          id: 1,
          img: '@/assets/home/loanadvan1.png',
          title: '易申请',
          content: '电话即可申请',
        },
        {
          id: 2,
          img: '@/assets/home/logo.png',
          title: '放款快',
          content: '最快24小时放款',
        },
        {
          id: 3,
          img: '@/assets/home/logo.png',
          title: '额度高',
          content: '最高可贷5000万',
        },
        {
          id: 4,
          img: '@/assets/home/logo.png',
          title: '低利率',
          content: '利率低至0.4%',
        },
      ]
    },
    async getQualitys() {
      return [
        {
          id: 1,
          img: '@/assets/home/loanadvan1.png',
          title: '我有房',
          subtitle: '有房就能贷',
          content: '抵押贷款、二次抵押贷款、按揭房放大贷',
        },
        {
          id: 2,
          img: '@/assets/home/logo.png',
          title: '我有车',
          subtitle: '有车就能贷',
          content: '新车贷、车辆抵押贷款、按揭车放大贷',
        },
        {
          id: 3,
          img: '@/assets/home/logo.png',
          title: '我是上班族',
          subtitle: '月入2000即可贷',
          content: '身份证贷款、手机贷款、公积金贷款',
        },
        {
          id: 4,
          img: '@/assets/home/logo.png',
          title: '我是企业主',
          subtitle: '有经营场所就能贷',
          content: '双周供、循环贷、存抵贷、气球贷',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
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
.x-views-loan-banner {
  width: 1366px;
  margin: auto;
  box-shadow: $box-shadow-secondary;
}
.x-views-section {
  padding: 40px 0;
  width: 1366px;
  margin: auto;
}
.x-views-main {
  display: flex;
  justify-content: space-around;
}
.x-views-loan-content {
  margin: auto;
  width: 1366px;
  display: flex;
  justify-content: space-between;
  .x-views-loan-content-main {
    width: 1000px;
    .x-views-loan-section {
      padding: 40px 0;
      .x-views-quality {
        display: flex;
        justify-content: space-between;
      }
    }
    .x-views-loan-main {
      display: flex;
      flex-wrap: wrap;
      .x-loan-tab {
        margin-left: 20px;
        &:nth-child(3n + 1) {
          margin-left: 0;
        }
        &:nth-child(n + 4) {
          margin-top: 20px;
        }
      }
    }
  }
  .x-views-loan-content-aside {
    width: 320px;
    .x-views-loan-aside {
      margin-top: 40px;
    }
  }
}
.x-views-loan-statement {
  opacity: 0.7;
  .x-views-loan-statement-content {
    margin-top: 20px;
    padding-left: 140px;
    text-align: left;
    font-size: 14px;
    line-height: 30px;
  }
}

// 这里是轮播图的测试样式，换成图片后可以删除
.x-views-loan-banner-carousel-item {
  width: 100%;
}
.x-views-loan-banner-carousel-item h3 {
  text-align: center;
  color: #475669;
  font-size: 20px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.x-views-loan-banner-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}

.x-views-loan-banner-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
