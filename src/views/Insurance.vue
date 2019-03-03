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
          <v-insurance-tab-small
            v-for="item in illnessInsurances"
            :data="item"
            :key="item.id"
          ></v-insurance-tab-small>
        </div>
      </div>
    </div>
    <div class="x-views-container-bg-light">
      <div class="x-views-section" v-if="travelInsurances.length > 0">
        <v-sub-title>出行险</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
        <div class="x-views-main">
          <v-insurance-tab-small
            v-for="item in travelInsurances"
            :data="item"
            :key="item.id"
          ></v-insurance-tab-small>
        </div>
      </div>
    </div>
    <div class="x-views-container-bg-dark">
      <div class="x-views-section" v-if="healthInsurances.length > 0">
        <v-sub-title>健康险</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
        <div class="x-views-main">
          <v-insurance-tab-small
            v-for="item in healthInsurances"
            :data="item"
            :key="item.id"
          ></v-insurance-tab-small>
        </div>
      </div>
    </div>
    <div class="x-views-container-bg-light">
      <div class="x-views-section">
        <v-recomm-title content="投保流程"></v-recomm-title>
        <v-insurance-process></v-insurance-process>
      </div>
    </div>
    <div class="x-views-container-bg-dark">
      <div class="x-views-section">
        <v-recomm-title content="投保案例"></v-recomm-title>
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
import agent from '@/common/lib/agent.js'
// @ is an alias to /src
import VBanner from '@/components/public/banner/index.vue'
import VInsuranceForm from '@/components/insurance/insurance-form/index.vue'
import VRecommTitle from '@/components/public/recomm-title/index.vue'
import VInsuranceRecommTab from '@/components/insurance/insurance-recomm-tab/index.vue'
import VSubTitle from '@/components/public/sub-title/index.vue'
import VShowMore from '@/components/public/show-more/index.vue'
import VInsuranceTabSmall from '@/components/insurance/insurance-tab-small/index.vue'
import VInsuranceProcess from '@/components/insurance/insurance-process/index.vue'
import VInsuranceExample from '@/components/insurance/insurance-example/index.vue'

export default {
  components: {
    VBanner,
    VInsuranceForm,
    VInsuranceRecommTab,
    VSubTitle,
    VShowMore,
    VInsuranceTabSmall,
    VRecommTitle,
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
    agent.get('/insurance').then(res => {
      this.insurances = res.insurances
      this.illnessInsurances = res.illnessInsurances
      this.travelInsurances = res.travelInsurances
      this.healthInsurances = res.healthInsurances
      this.examples = res.examples
    })
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-views-insurances-main {
  .x-views-insurance-banner {
    width: 1366px;
    margin: auto;
    box-shadow: $box-shadow-secondary;
  }
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
