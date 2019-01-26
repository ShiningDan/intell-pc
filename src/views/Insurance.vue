<template>
  <div class="x-views-insurances-main">
    <div class="x-views-container-bg-light">
      <v-banner class="x-views-insurance-banner">
        <template slot="carousel">
          <el-carousel height="400px">
            <el-carousel-item v-for="item in 4" :key="item" class>
              <div class="x-views-insurance-banner-carousel-item">
                <h3>{{ item }}</h3>
              </div>
            </el-carousel-item>
          </el-carousel>
        </template>
        <template slot="form">
          <v-insurance-form></v-insurance-form>
        </template>
      </v-banner>
      <div class="x-views-section" v-if="insurances.length > 0">
        <div class="x-views-main">
          <v-insurance-recomm-tab
            v-for="insurance in insurances"
            :key="insurance.id"
            :data="insurance"
          ></v-insurance-recomm-tab>
        </div>
      </div>
    </div>
    <div class="x-views-container-bg-dark">
      <div class="x-views-section" v-if="illnessInsurances.length > 0">
        <v-sub-title>重疾险</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
        <div class="x-views-main">
          <v-home-insurance-tab-small
            v-for="item in illnessInsurances"
            :data="item"
            :key="item.id"
          ></v-home-insurance-tab-small>
        </div>
      </div>
    </div>
    <div class="x-views-container-bg-light">
      <div class="x-views-section" v-if="travelInsurances.length > 0">
        <v-sub-title>出行险</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
        <div class="x-views-main">
          <v-home-insurance-tab-small
            v-for="item in travelInsurances"
            :data="item"
            :key="item.id"
          ></v-home-insurance-tab-small>
        </div>
      </div>
    </div>
    <div class="x-views-container-bg-dark">
      <div class="x-views-section" v-if="healthInsurances.length > 0">
        <v-sub-title>健康险</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
        <div class="x-views-main">
          <v-home-insurance-tab-small
            v-for="item in healthInsurances"
            :data="item"
            :key="item.id"
          ></v-home-insurance-tab-small>
        </div>
      </div>
    </div>
    <div class="x-views-container-bg-light">
      <div class="x-views-section">
        <v-home-recomm-title content="投保流程"></v-home-recomm-title>
        <v-insurance-process></v-insurance-process>
      </div>
    </div>
    <div class="x-views-container-bg-dark">
      <div class="x-views-section">
        <v-home-recomm-title content="投保案例"></v-home-recomm-title>
        <v-insurance-example
          v-for="item in examples"
          :data="item"
          :key="item.id"
        ></v-insurance-example>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/common/lib/api.js'
// @ is an alias to /src
import VBanner from '@/components/banner/index.vue'
import VInsuranceForm from '@/components/insurance-form/index.vue'
import VHomeRecommTitle from '@/components/home-recomm-title/index.vue'
import VInsuranceRecommTab from '@/components/insurance-recomm-tab/index.vue'
import VSubTitle from '@/components/sub-title/index.vue'
import VShowMore from '@/components/show-more/index.vue'
import VHomeInsuranceTabSmall from '@/components/home-insurance-tab-small/index.vue'
import VInsuranceProcess from '@/components/insurance-process/index.vue'
import VInsuranceExample from '@/components/insurance-example/index.vue'

export default {
  components: {
    VBanner,
    VInsuranceForm,
    VInsuranceRecommTab,
    VSubTitle,
    VShowMore,
    VHomeInsuranceTabSmall,
    VHomeRecommTitle,
    VInsuranceProcess,
    VInsuranceExample,
  },
  data() {
    return {
      insurances: [],
      illnessInsurances: [],
      travelInsurances: [],
      healthInsurances: [],
      examples: [],
    }
  },
  mounted() {
    this.init()
    // api.mockdata('/data/insurance').then(res => {
    //   this.insurances = res.insurances
    //   this.illnessInsurances = res.illnessInsurances
    //   this.travelInsurances = res.travelInsurances
    //   this.healthInsurances = res.healthInsurances
    //   this.examples = res.examples
    // })
  },
  methods: {
    async init() {
      const insurances = await this.getInsurances()
      const illnessInsurances = await this.getIllnessInsurances()
      const travelInsurances = await this.getTravelInsurances()
      const healthInsurances = await this.getHealthInsurances()
      const examples = await this.getExamples()
      this.insurances = insurances
      this.illnessInsurances = illnessInsurances
      this.travelInsurances = travelInsurances
      this.healthInsurances = healthInsurances
      this.examples = examples
    },
    async getInsurances() {
      return [
        {
          id: 1,
          background: {
            background: 'url(' + require('@/assets/insurance/ccc.png') + ')',
            // background:  "url('https://dummyimage.com/320x320/ccc/ccc')",
          },
          title: '乐享百万医疗保险',
          content: '600万最高保障，涵盖88种重疾，重疾国内二次诊疗。',
          price: 166,
        },
        {
          id: 2,
          background: {
            background: 'url(' + require('@/assets/insurance/ccc.png') + ')',
          },
          title: '金诺人生重大疾病保险',
          content: '百种重疾全面保障，五十种轻症三次赔付。',
          price: 188,
        },
        {
          id: 3,
          background: {
            background: 'url(' + require('@/assets/insurance/ccc.png') + ')',
          },
          title: '个人意外综合保险',
          content: '综合保障意外+医疗+伤残补助，最高可达100万。',
          price: 199,
        },
        {
          id: 4,
          background: {
            background: 'url(' + require('@/assets/insurance/ccc.png') + ')',
          },
          title: '家政雇佣责任险',
          content: '家政服务人员意外伤害及医疗费用赔偿。',
          price: 298,
        },
      ]
    },
    async getIllnessInsurances() {
      return [
        {
          id: 1,
          url: require('@/assets/home/home-insurance-small.png'),
          title: '乐享百万医疗保险',
          subtitle: '600万最高保障，涵盖88种重疾，重疾国内二次诊疗',
          description:
            '疾病住院医疗 限额100万/年、意外住院医疗 限额200万/年、重大疾病医疗 限额300万/年',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 299,
        },
        {
          id: 2,
          url: require('@/assets/home/home-insurance-small.png'),
          title: '乐享百万医疗保险',
          subtitle: '600万最高保障，涵盖88种重疾，重疾国内二次诊疗',
          description:
            '疾病住院医疗 限额100万/年、意外住院医疗 限额200万/年、重大疾病医疗 限额300万/年',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 299,
        },
        {
          id: 3,
          url: require('@/assets/home/home-insurance-small.png'),
          title: '乐享百万医疗保险',
          subtitle: '600万最高保障，涵盖88种重疾，重疾国内二次诊疗',
          description:
            '疾病住院医疗 限额100万/年、意外住院医疗 限额200万/年、重大疾病医疗 限额300万/年',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 299,
        },
        {
          id: 4,
          url: require('@/assets/home/home-insurance-small.png'),
          title: '乐享百万医疗保险',
          subtitle: '600万最高保障，涵盖88种重疾，重疾国内二次诊疗',
          description:
            '疾病住院医疗 限额100万/年、意外住院医疗 限额200万/年、重大疾病医疗 限额300万/年',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 299,
        },
      ]
    },
    async getTravelInsurances() {
      return [
        {
          id: 1,
          url: require('@/assets/home/home-insurance-small.png'),
          title: '乐享百万医疗保险',
          subtitle: '600万最高保障，涵盖88种重疾，重疾国内二次诊疗',
          description:
            '疾病住院医疗 限额100万/年、意外住院医疗 限额200万/年、重大疾病医疗 限额300万/年',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 299,
        },
        {
          id: 2,
          url: require('@/assets/home/home-insurance-small.png'),
          title: '乐享百万医疗保险',
          subtitle: '600万最高保障，涵盖88种重疾，重疾国内二次诊疗',
          description:
            '疾病住院医疗 限额100万/年、意外住院医疗 限额200万/年、重大疾病医疗 限额300万/年',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 299,
        },
        {
          id: 3,
          url: require('@/assets/home/home-insurance-small.png'),
          title: '乐享百万医疗保险',
          subtitle: '600万最高保障，涵盖88种重疾，重疾国内二次诊疗',
          description:
            '疾病住院医疗 限额100万/年、意外住院医疗 限额200万/年、重大疾病医疗 限额300万/年',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 299,
        },
        {
          id: 4,
          url: require('@/assets/home/home-insurance-small.png'),
          title: '乐享百万医疗保险',
          subtitle: '600万最高保障，涵盖88种重疾，重疾国内二次诊疗',
          description:
            '疾病住院医疗 限额100万/年、意外住院医疗 限额200万/年、重大疾病医疗 限额300万/年',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 299,
        },
      ]
    },
    async getHealthInsurances() {
      return [
        {
          id: 1,
          url: require('@/assets/home/home-insurance-small.png'),
          title: '乐享百万医疗保险',
          subtitle: '600万最高保障，涵盖88种重疾，重疾国内二次诊疗',
          description:
            '疾病住院医疗 限额100万/年、意外住院医疗 限额200万/年、重大疾病医疗 限额300万/年',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 299,
        },
        {
          id: 2,
          url: require('@/assets/home/home-insurance-small.png'),
          title: '乐享百万医疗保险',
          subtitle: '600万最高保障，涵盖88种重疾，重疾国内二次诊疗',
          description:
            '疾病住院医疗 限额100万/年、意外住院医疗 限额200万/年、重大疾病医疗 限额300万/年',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 299,
        },
        {
          id: 3,
          url: require('@/assets/home/home-insurance-small.png'),
          title: '乐享百万医疗保险',
          subtitle: '600万最高保障，涵盖88种重疾，重疾国内二次诊疗',
          description:
            '疾病住院医疗 限额100万/年、意外住院医疗 限额200万/年、重大疾病医疗 限额300万/年',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 299,
        },
        {
          id: 4,
          url: require('@/assets/home/home-insurance-small.png'),
          title: '乐享百万医疗保险',
          subtitle: '600万最高保障，涵盖88种重疾，重疾国内二次诊疗',
          description:
            '疾病住院医疗 限额100万/年、意外住院医疗 限额200万/年、重大疾病医疗 限额300万/年',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 299,
        },
      ]
    },
    async getExamples() {
      return [
        {
          id: 1,
          url: require('@/assets/insurance/fff.png'),
          name: '刘先生',
          age: '66',
          description: '刘先生经过联达多维度性价比评估分析后,购买了弘康-哆啦A保。',
          insuranceCost: 2999,
          insuranceAmount: 300,
        },
        {
          id: 2,
          url: require('@/assets/insurance/fff.png'),
          name: '刘先生',
          age: '66',
          description: '刘先生经过联达多维度性价比评估分析后,购买了弘康-哆啦A保。',
          insuranceCost: 2999,
          insuranceAmount: 300,
        },
      ]
    },
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
.x-views-insurances-main {
  .x-views-insurance-banner {
    width: 1366px;
    margin: auto;
    box-shadow: $box-shadow-secondary;
  }
  .x-views-main {
    flex-wrap: wrap;
    .x-home-insurance-tab-small {
      &:nth-child(n + 3) {
        margin-top: 20px;
      }
    }
  }
}
// 这里是轮播图的测试样式，换成图片后可以删除
//.x-views-insurance-banner-carousel-item {
// width: 100%;
//}
.x-views-insurance-banner-carousel-item h3 {
  text-align: center;
  color: #475669;
  font-size: 20px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.x-views-insurance-banner-carousel-item:nth-child(2n) {
  background-color: #99a9bf;
}

.x-views-insurance-banner-carousel-item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
