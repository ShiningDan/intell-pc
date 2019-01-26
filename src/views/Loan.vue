<template>
  <div class="x-views-loan-main">
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
      <div class="x-views-loan-advantage x-views-section">
        <v-loan-advantage-title content="我们的优势"></v-loan-advantage-title>
        <div class="x-views-loan-advantage-main">
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
          <div class="x-views-loan-quality x-views-loan-section" v-if="qualitys.length > 0">
            <div><v-loan-quality-title content="贷款资质"></v-loan-quality-title></div>
            <div class="x-views-loan-quality-main">
              <v-loan-quality-tab
                v-for="quality in qualitys"
                :key="quality.id"
                :data="quality"
              ></v-loan-quality-tab>
            </div>
          </div>
          <div class="x-views-loan-house x-views-loan-section" v-if="houseloans.length > 0">
            <div>
              <v-sub-title>房抵贷</v-sub-title>
              <v-show-more style="float: right"></v-show-more>
            </div>
            <div class="x-views-loan-house-main">
              <v-loan-tab
                v-for="houseloan in houseloans"
                :key="houseloan.id"
                :data="houseloan"
              ></v-loan-tab>
            </div>
          </div>
          <div class="x-views-loan-credit x-views-loan-section" v-if="creditloans.length > 0">
            <div>
              <v-sub-title>信用贷</v-sub-title>
              <v-show-more style="float: right"></v-show-more>
            </div>
            <div class="x-views-loan-credit-main">
              <v-loan-tab
                v-for="creditloan in creditloans"
                :key="creditloan.id"
                :data="creditloan"
              ></v-loan-tab>
            </div>
          </div>
          <div class="x-views-loan-car x-views-loan-section" v-if="carloans.length > 0">
            <div>
              <v-sub-title>车抵贷</v-sub-title>
              <v-show-more style="float: right"></v-show-more>
            </div>
            <div class="x-views-loan-car-main">
              <v-loan-tab
                v-for="carloan in carloans"
                :key="carloan.id"
                :data="carloan"
              ></v-loan-tab>
            </div>
          </div>
        </div>
        <div class="x-views-loan-content-aside">
          <div class="x-views-loan-aside-compute x-views-loan-section">
            <v-loan-compute></v-loan-compute>
          </div>
          <div class="x-views-loan-aside-adviser x-views-loan-section">
            <v-loan-adviser-title>贷款顾问</v-loan-adviser-title>
            <div class="x-views-loan-adviser-main">
              <v-loan-adviser-tab
                v-for="adviser in advisers"
                :key="adviser.id"
                :data="adviser"
              ></v-loan-adviser-tab>
            </div>
          </div>
        </div>
      </div>
      <div class="x-views-loan-statement x-views-loan-section">
        <div><v-loan-quality-title content="特别声明"></v-loan-quality-title></div>
        <div class="x-views-loan-statement-content">
          <p>* 贷款额度，放款时间以审批结果为准；</p>
          <p>* 您的信息将只作为产品推荐使用，不会以任何形式泄露给其他人员或机构。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/common/lib/api.js'

// @ is an alias to /src
import VBanner from '@/components/banner/index.vue'
import VLoanForm from '@/components/loan-form/index.vue'
import VLoanAdvantageTitle from '@/components/loan-advantage-title/index.vue'
import VLoanAdvantageTab from '@/components/loan-advantage-tab/index.vue'
import VLoanQualityTitle from '@/components/loan-quality-title/index.vue'
import VLoanQualityTab from '@/components/loan-quality-tab/index.vue'
import VSubTitle from '@/components/sub-title/index.vue'
import VShowMore from '@/components/show-more/index.vue'
import VLoanTab from '@/components/loan-tab/index.vue'
import VLoanCompute from '@/components/loan-compute/index.vue'
import VLoanAdviserTitle from '@/components/loan-adviser-title/index.vue'
import VLoanAdviserTab from '@/components/loan-adviser-tab/index.vue'

export default {
  components: {
    VBanner,
    VLoanForm,
    VLoanAdvantageTitle,
    VLoanAdvantageTab,
    VLoanQualityTitle,
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
    this.init()
    api.mockdata('/data/loan').then(res => {
      this.houseloans = res.houseloans
      this.creditloans = res.creditloans
      this.advisers = res.advisers
      this.carloans = res.carloans
    })
  },
  methods: {
    async init() {
      const advantages = await this.getAdvantages()
      const qualitys = await this.getQualitys()
      // const houseloans = await this.getHouseLoan()
      // const creditloans = await this.getCreditLoan()
      // const carloans = await this.getCarLoan()
      // const advisers = await this.getAdviser()
      this.advantages = advantages
      this.qualitys = qualitys
      // this.houseloans = houseloans
      // this.creditloans = creditloans
      // this.carloans = carloans
      // this.advisers = advisers
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
    // async getHouseLoan() {
    //   return [
    //     {
    //       id: 1,
    //       title: '房屋抵押消费贷款',
    //       description: '批贷时间：3-7个工作日\n贷款期限：1-20年\n利率范围：4.75%起',
    //       maxAmount: '房产值8-9成',
    //     },
    //     {
    //       id: 2,
    //       title: '房屋二次抵押贷款',
    //       description: '批贷时间：最快24小时\n贷款期限：1-5年\n利率范围：0.52%起',
    //       maxAmount: '10-500万',
    //     },
    //     {
    //       id: 3,
    //       title: '商业房产抵押贷款',
    //       description: '批贷时间：最快1小时\n贷款期限：1-2年\n利率范围：0.8%起',
    //       maxAmount: '5500万',
    //     },
    //   ]
    // },
    // async getCreditLoan() {
    //   return [
    //     {
    //       id: 1,
    //       title: '工资贷',
    //       description: '批贷时间：3-7个工作日\n贷款期限：1-20年\n利率范围：4.75%起',
    //       maxAmount: '50万',
    //     },
    //     {
    //       id: 2,
    //       title: '保单贷',
    //       description: '批贷时间：最快24小时\n贷款期限：1-5年\n利率范围：0.52%起',
    //       maxAmount: '50万',
    //     },
    //     {
    //       id: 3,
    //       title: '公积金贷',
    //       description: '批贷时间：最快1小时\n贷款期限：1-2年\n利率范围：0.8%起',
    //       maxAmount: '100万',
    //     },
    //   ]
    // },
    // async getCarLoan() {
    //   return [
    //     {
    //       id: 1,
    //       title: '免押车贷款',
    //       description: '批贷时间：3-7个工作日\n贷款期限：1-20年\n利率范围：4.75%起',
    //       maxAmount: '无上限',
    //     },
    //     {
    //       id: 2,
    //       title: '汽车抵押贷款',
    //       description: '批贷时间：最快24小时\n贷款期限：1-5年\n利率范围：0.52%起',
    //       maxAmount: '无上限',
    //     },
    //   ]
    // },
    // async getAdviser() {
    //   return [
    //     {
    //       id: 1,
    //       title: '张三',
    //       content: '咨询人数：107\n从业时间：2年',
    //     },
    //     {
    //       id: 2,
    //       title: '张三',
    //       content: '咨询人数：107\n从业时间：2年',
    //     },
    //     {
    //       id: 3,
    //       title: '张三',
    //       content: '咨询人数：107\n从业时间：2年',
    //     },
    //   ]
    // },
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';

.x-views-container-bg-light {
  &:first-child {
    padding-top: 20px;
  }
}
.x-views-loan-main {
  .x-views-loan-banner {
    width: 1366px;
    margin: auto;
  }
  .x-views-loan-section {
    padding: 40px 0;
    margin: auto;
  }
  .x-views-loan-advantage {
    background-color: #fff;
    .x-views-loan-advantage-main {
      width: 1166px;
      display: flex;
      justify-content: space-between;
      margin: 20px 100px 0px 100px;
    }
  }
  .x-views-loan-content {
    margin: auto;
    width: 1366px;
    display: flex;
    justify-content: space-between;
    .x-views-loan-content-main {
      width: 1020px;
      .x-views-loan-quality {
        .x-views-loan-quality-main {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }
      }
      .x-loan-tab {
        margin-left: 20px;
        &:nth-child(3n + 1) {
          margin-left: 0;
        }
        &:nth-child(n + 4) {
          margin-top: 20px;
        }
      }
      .x-views-loan-house {
        .x-views-loan-house-main {
          display: flex;
          // justify-content: space-around;
          flex-wrap: wrap;
          margin-top: 20px;
        }
      }
      .x-views-loan-credit {
        .x-views-loan-credit-main {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-top: 20px;
        }
      }
      .x-views-loan-car {
        .x-views-loan-car-main {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          flex-wrap: wrap;
        }
      }
    }
    .x-views-loan-content-aside {
      width: 346px;
      .x-views-loan-aside-compute {
        margin-left: 26px;
      }
      .x-views-loan-aside-adviser {
        margin-left: 26px;
      }
    }
  }
  .x-views-loan-statement {
    width: 1366px;
    .x-views-loan-statement-content {
      margin-top: 20px;
      padding-left: 140px;
      text-align: left;
      font-size: 14px;
      line-height: 30px;
    }
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
