<template>
  <div class="x-home-loan-form">
    <img src="@/assets/home/home-loan.png" alt="房抵贷" width="300" height="150" />
    <el-form class="x-home-loan-form-content">
      <el-form-item class="x-home-loan-form-item">
        <el-select v-model="bizType" placeholder="请选择您想了解的业务">
          <el-option
            v-for="item in bizOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="x-home-loan-form-item">
        <el-input v-model="name" placeholder="请输入你的姓名"></el-input>
      </el-form-item>
      <el-form-item class="x-home-loan-form-item">
        <el-input v-model="phone" placeholder="请输入你的电话"></el-input>
      </el-form-item>
      <el-form-item class="x-home-loan-form-item">
        <el-button class="x-home-loan-form-btn">立即申请</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bizType: '',
      bizOptions: [
        {
          value: 'salaryLoan',
          label: '工资贷',
        },
        {
          value: 'houseLoan',
          label: '房屋抵押贷款',
        },
        {
          value: 'fundLoan',
          label: '公积金贷款',
        },
        {
          value: 'carLoan',
          label: '汽车抵押贷款',
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
.x-home-loan-form {
  .x-home-loan-form-header {
    width: 300px;
    height: 150px;
    background-color: #475669;
  }
  .x-home-loan-form-content {
    padding: 20px 30px 10px 30px;
  }
  .x-home-loan-form-btn {
    width: 120px;
    margin-left: 60px;
    font-size: 16px;
    background-color: $theme-color;
    color: #fff;
  }
  .x-home-loan-form-item {
    margin-bottom: 20px;
  }
}
</style>
