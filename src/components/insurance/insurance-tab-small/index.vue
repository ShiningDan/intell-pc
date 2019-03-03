<template>
  <el-card class="x-home-insurance-tab-small" :body-style="{ padding: '0px' }">
    <router-link :to="'/insurance/' + data.id">
      <div class="x-home-insurance-tab-small-img">
        <img :src="data.url" :alt="data.title" width="270" height="170" />
      </div>
      <div class="x-home-insurance-tab-small-content">
        <div class="x-home-insurance-tab-small-header">{{ data.title }}</div>
        <div class="x-home-insurance-tab-small-desc">
          <div>
            <p class="x-home-insurance-tab-small-desc-subtitle">{{ data.subtitle }}</p>
            <p v-for="(desc, index) in descSections" :key="index" class="text-overflow-hidden">
              {{ desc }}
            </p>
          </div>
        </div>
        <div class="x-home-insurance-tab-small-footer">
          <div class="x-home-insurance-tab-small-footer-tab">
            <p>承保年龄</p>
            <p>{{ data.age }}周岁</p>
          </div>
          <div class="x-home-insurance-tab-small-footer-tab">
            <p>保障期限</p>
            <p>{{ data.timeLimit }}</p>
          </div>
          <div class="x-home-insurance-tab-small-footer-price">
            <span class="price">{{ data.price }}</span>
            元/月起
          </div>
        </div>
      </div>
    </router-link>
  </el-card>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      descSections: [],
    }
  },
  watch: {
    data: {
      immediate: true,
      handler(data) {
        if (data && typeof data.description === 'string') {
          this.descSections = data.description.split('\n')
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
.text-overflow-hidden {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  height: 40px;
  line-height: 20px;
  width: 100%;
}
.x-home-insurance-tab-small {
  transition: all 0.333s ease-out 0s;
  &:hover {
    box-shadow: 2px 8px 20px 0 #ccc;
  }
  cursor: pointer;
  border-radius: 10px;
  width: 673px;
  height: 170px;
  position: relative;
  text-align: center;
  vertical-align: middle;
  .x-home-insurance-tab-small-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .x-home-insurance-tab-small-content {
    position: absolute;
    height: 170px;
    width: 403px;
    top: 0;
    right: 0;
    overflow: hidden;
    .x-home-insurance-tab-small-header {
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      font-weight: bold;
    }
    .x-home-insurance-tab-small-desc {
      margin: 0 20px;
      height: 80px;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: left;
      .x-home-insurance-tab-small-desc-subtitle {
        font-weight: bold;
      }
    }
    .x-home-insurance-tab-small-footer {
      background-color: #f8f8f8;
      height: 50px;
      padding-left: 20px;
      .x-home-insurance-tab-small-footer-tab {
        float: left;
        padding: 5px 0;
        width: 100px;
        color: #666;
        font-size: 14px;
        line-height: 20px;
      }
      .x-home-insurance-tab-small-footer-price {
        float: right;
        width: 120px;
        height: inherit;
        font-size: 14px;
        .price {
          font-family: SourceHanSansSC-regular;
          display: inline-block;
          padding-top: 2px;
          color: $theme-color;
          font-size: 32px;
          line-height: 48px;
        }
      }
    }
  }
}
</style>
