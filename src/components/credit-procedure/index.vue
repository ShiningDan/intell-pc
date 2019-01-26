<template>
  <div class="x-credit-procedure">
    <v-home-recomm-title content="申卡流程"></v-home-recomm-title>
    <div class="x-credit-procedure-icon-row">
      <i class="icon el-icon-edit"></i>
      <div class="x-credit-procedure-line"></div>
      <i class="icon el-icon-search"></i>
      <div class="x-credit-procedure-line"></div>
      <i class="icon el-icon-circle-check-outline"></i>
      <div class="x-credit-procedure-line"></div>
      <i class="icon el-icon-message"></i>
    </div>
    <div class="x-credit-procedure-content">
      <div class="content0">选择卡片,填写表单</div>
      <div class="content">确认身份,提交审核</div>
      <div class="content">审核通过,确认发卡</div>
      <div class="content">寄卡到户,激活即用</div>
    </div>
  </div>
</template>
<script>
import VHomeRecommTitle from '@/components/home-recomm-title/index.vue'
export default {
  components:{
    VHomeRecommTitle,
  },
}
</script>


<style lang="scss" scoped>
@import '@/common/_variable.scss';

.x-credit-procedure{
  width: 100%px;
  height: 200px;
  // background-color: #e5e5e5;
  box-shadow: #e5e5e5 0px 0px 5px 0px;
  padding: 20px 0 0 0;
  .x-credit-procedure-icon-row{
    height: 40px;
    line-height: 50px;
    font-size: 24px;
    color: #e5e5e5;
    text-align: center;
    vertical-align: middle;
    margin-top: 20px;
    margin-left: 80px;
    display: flex;
    align-content: space-around;
    .x-credit-procedure-line{
      width: 320px;
      height: 2px;
      background-color: #e5e5e5;
      margin: 10px;
    }
    .icon{
      color: $theme-color;
      font-size: 40px;
    }
  }
  .x-credit-procedure-content{
    height: 30px;
    padding: 30px;
    display: flex;
    align-content: space-around;
    .content0{
      margin-left: 15px;
    }
    .content{
      margin-left: 245px;
    }
  }
}
</style>
