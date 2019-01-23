<template>
  <div class="x-views-home-main">
    <v-banner class="x-views-home-banner">
      <template slot="carousel">
        <el-carousel height="400px">
          <el-carousel-item v-for="item in 4" :key="item" class="">
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
    <div class="x-views-home-recomm x-views-home-section" v-if="recommends.length > 0">
      <v-home-recomm-title content="特别推荐"></v-home-recomm-title>
      <div class="x-views-home-recomm-main">
        <v-home-recomm-tab
          v-for="recommend in recommends"
          :key="recommend.id"
          :data="recommend"
        ></v-home-recomm-tab>
      </div>
    </div>
    <div class="x-views-home-loan x-views-home-section" v-if="loans.length > 0">
      <div>
        <v-sub-title>贷款</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
      </div>
      <div class="x-views-home-loan-main">
        <v-loan-tab v-for="loan in loans" :key="loan.id" :data="loan"></v-loan-tab>
        <v-loan-compute></v-loan-compute>
      </div>
    </div>
    <div class="x-views-home-insurance x-views-home-section" v-if="insuracnes.length > 0">
      <div>
        <v-sub-title>保险</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
      </div>
      <div class="x-views-home-insurance-main">
        <div><v-home-insurance-tab-big :data="insuracnes[0]"></v-home-insurance-tab-big></div>
        <div>
          <v-home-insurance-tab-small :data="insuracnes[1]"></v-home-insurance-tab-small>
          <v-home-insurance-tab-small
            style="margin-top: 20px"
            :data="insuracnes[2]"
          ></v-home-insurance-tab-small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VBanner from '@/components/banner/index.vue'
import VHomeLoanForm from '@/components/home-loan-form/index.vue'
import VHomeRecommTitle from '@/components/home-recomm-title/index.vue'
import VHomeRecommTab from '@/components/home-recomm-tab/index.vue'
import VSubTitle from '@/components/sub-title/index.vue'
import VShowMore from '@/components/show-more/index.vue'
import VLoanTab from '@/components/loan-tab/index.vue'
import VLoanCompute from '@/components/loan-compute/index.vue'
import VHomeInsuranceTabBig from '@/components/home-insurance-tab-big/index.vue'
import VHomeInsuranceTabSmall from '@/components/home-insurance-tab-small/index.vue'

export default {
  components: {
    VBanner,
    VHomeLoanForm,
    VHomeRecommTitle,
    VHomeRecommTab,
    VSubTitle,
    VShowMore,
    VLoanTab,
    VLoanCompute,
    VHomeInsuranceTabBig,
    VHomeInsuranceTabSmall,
  },
  data() {
    return {
      recommends: [],
      loans: [],
      insuracnes: [],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const recommends = await this.getRecommends()
      const loans = await this.getLoan()
      const insuracnes = await this.getInsurance()
      this.recommends = recommends
      this.loans = loans
      this.insuracnes = insuracnes
    },
    async getRecommends() {
      return [
        {
          id: 1,
          img: '@/assets/home/recomm.png',
          title: '驯龙炮手·崔斯塔娜',
          content:
            '想要比迅捷蟹更快造成伤害吗？\n急速射击会炮喷射半自动龙炎火球，\n把坏蛋都烤熟甚至烤焦。',
        },
        {
          id: 2,
          img: '@/assets/home/recomm.png',
          title: '约德尔国队长·提莫',
          content: '提莫回去默默地看了下每分钟的死亡次数，\n毅然接下了这个重担。',
        },
        {
          id: 3,
          img: '@/assets/home/recomm.png',
          title: '大发明家·黑默丁格',
          content: '由于大发明家黑默丁格头比较大的特征，\n被人们外号称作“大头”。',
        },
        {
          id: 4,
          img: '@/assets/home/recomm.png',
          title: '邪恶小法师·维迦',
          content:
            '维迦的邪恶在于拥有超强的区域限制技能，\n让对手滞留于战场无法脱身，\n超高的AP输出让对手胆寒。',
        },
      ]
    },
    async getLoan() {
      return [
        {
          id: 1,
          title: '房屋抵押消费贷款',
          description: '批贷时间：3-7个工作日\n贷款期限：1-20年\n利率范围：4.75%起',
          maxAmount: '房产值8-9成',
        },
        {
          id: 2,
          title: '工资贷',
          description: '批贷时间：最快24小时\n贷款期限：1-5年\n利率范围：0.52%起',
          maxAmount: '50万',
        },
        {
          id: 3,
          title: '汽车抵押贷款',
          description: '批贷时间：最快1小时\n贷款期限：1-2年\n利率范围：0.8%起',
          maxAmount: '无上限',
        },
      ]
    },
    async getInsurance() {
      return [
        {
          id: 1,
          title: '“乐游人生”境外旅行救援保险(尊贵版)',
          subtitle: '全球医疗 24h救援 超值保障 天数自选 延误赔付',
          description:
            '紧急医疗转送 1,000,000、\n境外住院医疗费用 300,000、\n境外意外伤害保险责任 100,000',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 199,
        },
        {
          id: 2,
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
          title: '个人意外综合保险',
          subtitle: '综合保障意外+医疗+伤残补助，最高可达100万',
          description:
            '个人人身意外伤害保险 50,000、附加意外伤害骨折保险 5,000、附加个人意外伤害医疗保险 5,000',
          age: '30-65周岁',
          timeLimit: '终身',
          price: 399,
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.x-views-home-main {
  .x-views-home-banner {
    width: 100%;
  }
  .x-views-home-section {
    padding: 40px 0;
  }
  .x-views-home-recomm {
    background-color: #fff;
    .x-views-home-recomm-main {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
  .x-views-home-loan {
    background-color: #f8f8f8;
    .x-views-home-loan-main {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
  .x-views-home-insurance {
    background-color: #fff;
    .x-views-home-insurance-main {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
}
// 这里是轮播图的测试样式，换成图片后可以删除
.x-views-home-banner-carousel-item {
  // width: 100%;
}
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
