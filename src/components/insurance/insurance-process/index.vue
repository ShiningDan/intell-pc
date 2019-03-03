<template>
  <div class="insurance-process">
    <div class="insurance-process-item">
      <svg class="icon" aria-hidden="true"><use xlink:href="#icon-tianxie"></use></svg>
      <p>填写表单,在线预约</p>
    </div>
    <div class="bar"></div>
    <div class="insurance-process-item">
      <svg class="icon" aria-hidden="true"><use xlink:href="#icon-erji"></use></svg>
      <p>顾问回访,电话咨询</p>
    </div>
    <div class="bar"></div>
    <div class="insurance-process-item">
      <svg class="icon" aria-hidden="true"><use xlink:href="#icon-002dianhua"></use></svg>
      <p>确认需求,电话确认</p>
    </div>
    <div class="bar"></div>
    <div class="insurance-process-item">
      <svg class="icon" aria-hidden="true"><use xlink:href="#icon-biaodan"></use></svg>
      <p>线上投保,表单寄送</p>
    </div>
  </div>
</template>

<script>
import '@/assets/insurance/insurance.js'

export default {}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';

.icon {
  width: 50px;
  height: 50px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: $theme-color;
}
.insurance-process {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
.bar {
  width: 200px;
  height: 2px;
  background-color: #cccccc;
  margin: 49px 0;
}
.insurance-process-item {
  height: 100px;
  width: 150px;
  text-align: center;
  p {
    line-height: 50px;
    height: 50px;
  }
}
</style>
