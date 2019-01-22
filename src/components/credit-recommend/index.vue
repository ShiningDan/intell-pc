<template>
  <div class="x-credit-recomm x-credit-section" v-if="recommends.length > 0">
      <div>
        <v-sub-title>好卡推荐</v-sub-title>
        <v-show-more style="float: right"></v-show-more>
      </div>
      <div class="x-credit-recomm-main">
        <v-home-recomm-tab
          v-for="recommend in recommends"
          :key="recommend.id"
          :data="recommend"
        ></v-home-recomm-tab>
      </div>
  </div>
</template>
<script>
// @ is an alias to /src
import VHomeRecommTab from '@/components/home-recomm-tab/index.vue'
import VSubTitle from '@/components/sub-title/index.vue'
import VShowMore from '@/components/show-more/index.vue'

export default {
  components: {
    VHomeRecommTab,
    VSubTitle,
    VShowMore,
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
      this.recommends = recommends
    },
    async getRecommends() {
      return [
        {
          id: '1',
          img: '@/assets/home/recomm.png',
          title: '驯龙炮手·崔斯塔娜',
          content:
            '想要比迅捷蟹更快造成伤害吗？\n急速射击会炮喷射半自动龙炎火球，\n把坏蛋都烤熟甚至烤焦。',
        },
        {
          id: '2',
          img: '@/assets/home/recomm.png',
          title: '约德尔国队长·提莫',
          content: '提莫回去默默地看了下每分钟的死亡次数，\n毅然接下了这个重担。',
        },
        {
          id: '3',
          img: '@/assets/home/recomm.png',
          title: '大发明家·黑默丁格',
          content: '由于大发明家黑默丁格头比较大的特征，\n被人们外号称作“大头”。',
        },
        {
          id: '4',
          img: '@/assets/home/recomm.png',
          title: '邪恶小法师·维迦',
          content:
            '维迦的邪恶在于拥有超强的区域限制技能，\n让对手滞留于战场无法脱身，\n超高的AP输出让对手胆寒。',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
  .x-credit-section {
    padding: 40px 0;
  }
  .x-credit-recomm {
    background-color: #fff;
    .x-credit-recomm-main {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
  }
</style>
