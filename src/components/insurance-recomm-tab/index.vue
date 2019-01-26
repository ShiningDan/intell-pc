<template>
  <el-card
    class="x-insurance-recomm-tab"
    :body-style="{ padding: '0px' }"
    :style="data.background"
    @mouseenter.native="toggle"
    @mouseleave.native="toggle"
  >
    <div
      :class="[
        'x-insurance-recomm-tab-content-show',
        { 'x-insurance-recomm-tab-content-hide': !ishover },
      ]"
    >
      <p>{{ data.title }}</p>
      <p>
        <span class="price">{{ data.price }}</span>
        元/月起
      </p>
    </div>
    <div :class="['x-insurance-recomm-tab-hide', { 'x-insurance-recomm-tab-show': !ishover }]">
      <p>{{ data.title }}</p>
      <p>
        <span class="price">{{ data.price }}</span>
        元/月起
      </p>
      <p class="data-content">{{ data.content }}</p>
      <el-button>立即投保</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      ishover: true,
    }
  },
  methods: {
    toggle() {
      this.ishover = !this.ishover
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';

.x-insurance-recomm-tab {
  cursor: pointer;
  border-radius: 10px;
  width: 320px;
  height: 320px;
  border: 0;
  position: relative;
  .x-insurance-recomm-tab-hide {
    position: absolute;
    z-index: 2;
    width: 100%;
    top: 320px;
    transition: top 0.4s;
    height: 100%;
    text-align: center;
    background-color: rgba(36, 21, 21, 0.6);
    color: #fff;
    p {
      width: 200px;
      height: 40px;
      margin-left: 60px;
      &:first-child {
        margin-top: 70px;
      }
    }
    .data-content {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      line-height: 20px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .el-button {
      width: 160px;
      height: 40px;
      margin-top: 20px;
      font-size: 16px;
      background: $theme-color;
      border: 0;
      color: #fff;
    }
  }
  .x-insurance-recomm-tab-show {
    top: 0px;
    transition: top 0.4s;
  }
}
.x-insurance-recomm-tab-content-show {
  height: 100px;
  width: 100%;
  text-align: center;
  font-size: 16px;
  background-color: #fff;
  position: absolute;
  top: 220px;
  transition: top 0.4s;
  p:first-child {
    line-height: 50px;
    height: 50px;
  }
}
.x-insurance-recomm-tab-content-hide {
  top: 320px;
  transition: top 0.4s;
}
.price {
  font-size: 24px;
  color: $theme-color;
}
</style>
