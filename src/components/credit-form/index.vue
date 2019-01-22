<template>
  <div class="x-credit-form">
    <div class="x-credit-form-title">快速匹配适合您的信用卡</div>
    <el-form class="x-credit-form-content">
      <el-form-item class="x-credit-form-item" >
        <el-select v-model="income" placeholder="月收入范围">
          <el-option
            v-for="item in incomes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="x-credit-form-item">
        <el-select v-model="quota" placeholder="申请额度">
          <el-option
            v-for="item in quotas"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="x-credit-form-item">
        <el-input v-model="name" placeholder="请输入联系方式"></el-input>
      </el-form-item>
      <el-form-item class="x-credit-form-item">
        <el-col :span="12">
        <el-input v-model="phone" placeholder="请输入验证码"></el-input>
        </el-col>
        <el-col :span="12">
        <el-button class="x-credit-form-btn-icode" >获取验证码</el-button>
        </el-col>
      </el-form-item>
      <el-form-item class="x-credit-form-item">
        <el-button class="x-credit-form-btn">立即申请</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      income: '',
      incomes: [
        {
          value: 'salaryLoan',
          label: '10k以下',
        },
        {
          value: 'houseLoan',
          label: '10k~20k',
        },
        {
          value: 'fundLoan',
          label: '20~30k',
        },
        {
          value: 'carLoan',
          label: '30k以上',
        },
      ],
      quota: '',
      quotas: [
        {
          value: 'salaryLoan',
          label: '2w以下',
        },
        {
          value: 'houseLoan',
          label: '2w~5w',
        },
        {
          value: 'fundLoan',
          label: '5w~10w',
        },
        {
          value: 'carLoan',
          label: '10w以上',
        },
      ],
      name: '',
      phone: '',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-credit-form {
  width: 300px;
  height: 400px;
  border: 0px solid #e91212;
  border-radius: 0px 10px 10px 0px;
  // background-color: aqua;
  .x-credit-form-title {
    width: 300px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: $text-primary;
    font-size: 24px;
    // background-color:#ff4500;
  }
  .x-credit-form-content {
    padding: 0px 30px 0px 30px;
  }
  .x-credit-form-btn {
    width: 120px;
    height: 40px;
    margin-left: 60px;
    font-size: 16px;
    background-color: $theme-color;
    color: #fff;
  }
  .x-credit-form-item {
    margin-top: 20px;
    width: 240px;
   .x-credit-form-btn-icode{
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
