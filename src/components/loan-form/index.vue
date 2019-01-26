<template>
  <div class="x-loan-form">
    <div class="x-loan-form-title">免费申请</div>
    <el-form class="x-loan-form-content">
      <el-form-item class="x-loan-form-item">
        <el-input v-model="name" placeholder="请输入你的姓名"></el-input>
      </el-form-item>
      <el-form-item class="x-loan-form-item">
        <el-input v-model="phone" placeholder="请输入你的电话"></el-input>
      </el-form-item>
      <el-form-item class="x-loan-form-item">
        <el-input v-model="money" placeholder="请输入贷款金额"></el-input>
      </el-form-item>
      <el-form-item class="x-loan-form-item">
        <el-col :span="14">
          <el-input
            class="x-loan-form-item-verifycode"
            v-model="verifycode"
            placeholder="请输入验证码"
          ></el-input>
        </el-col>
        <el-col :span="14">
          <el-button class="x-loan-form-btn-verifycode">获取验证码</el-button>
        </el-col>
      </el-form-item>
      <el-form-item class="x-loan-form-item">
        <el-button class="x-loan-form-btn">立即申请</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      money: '',
      verifycode: '',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-loan-form {
  .x-loan-form-title {
    width: 300px;
    height: 80px;
    line-height: 80px;
    font-size: 24px;
    color: $theme-color;
    text-align: center;
    vertical-align: middle;
  }
  .x-loan-form-content {
    padding: 20px 30px 0px 30px;
  }
  .x-loan-form-btn {
    width: 120px;
    margin-left: 60px;
    font-size: 16px;
    background-color: $theme-color;
    color: #fff;
  }
  .x-loan-form-item {
    margin-bottom: 20px;
    .x-loan-form-item-verifycode {
      width: 120px;
    }
    .x-loan-form-btn-verifycode {
      width: 120px;
      height: 40px;
      margin-left: 0px;
      font-size: 16px;
      background-color: #11974f;
      color: #fff;
    }
  }
}
</style>
