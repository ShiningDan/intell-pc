<template>
  <div class="insurance-example">
    <img alt width="100" height="100" class="insurance-example-left" :src="data.url" />
    <div class="insurance-example-left">
      <p>
        <span>{{ data.name }}，</span>
        <span>{{ data.age }}</span>
        岁
      </p>
      <p>{{ data.description }}</p>
    </div>
    <div class="insurance-example-right">
      年交保费:
      <span>{{ data.insuranceCost }}</span>
      元
    </div>
    <div class="insurance-example-right">
      基本保额:
      <span>{{ data.insuranceAmount }}</span>
      万
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
}
</script>
<style lang="scss" scoped>
@import '@/common/_variable.scss';

.insurance-example {
  margin-top: 20px;
  width: 100%;
  height: 100px;
  &::after {
    display: block;
    content: '';
    clear: both;
  }
  .insurance-example-left {
    float: left;
    margin-right: 20px;
    p {
      line-height: 50px;
    }
  }
  .insurance-example-right {
    float: right;
    margin: 20px 20px 20px 0;
    height: 60px;
    width: 160px;
    background-color: $theme-color;
    color: #fff;
    line-height: 60px;
    text-align: center;
    border-radius: 5px;
  }
}
</style>
