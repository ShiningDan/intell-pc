<template>
  <el-card class="x-credit-compute" :body-style="{ padding: '0px' }">
    <div class="x-credit-compute-title">快速匹配适合你的信用卡</div>
    <el-form class="x-credit-compute-form">
      <el-form-item>
        <el-select v-model="job" placeholder="请选择你的职业">
          <el-option
            v-for="job in jobOptions"
            :key="job.value"
            :label="job.label"
            :value="job.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="salary" placeholder="请选择你的月收入">
          <el-option
            v-for="salary in salaryOptions"
            :key="salary.value"
            :label="salary.label"
            :value="salary.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="use" placeholder="选择你贷款的主要用途">
          <el-option
            v-for="use in useOptions"
            :key="use.value"
            :label="use.label"
            :value="use.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="amount" placeholder="请选择你的申请额度">
          <el-option
            v-for="amount in amountOptions"
            :key="amount.value"
            :label="amount.label"
            :value="amount.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button class="x-credit-compute-btn">立即匹配</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      job: '',
      salary: '',
      use: '',
      amount: '',
      jobOptions: [
        {
          label: '学生',
          value: 'student',
        },
        {
          label: '上班族',
          value: 'worker',
        },
        {
          label: '企业主',
          value: 'owner',
        },
        {
          label: '自由职业',
          value: 'freelance',
        },
      ],
      salaryOptions: [
        {
          label: '5k以下',
          value: '5-',
        },
        {
          label: '5-10k',
          value: '5-10',
        },
        {
          label: '10k-15k',
          value: '10-15',
        },
        {
          label: '15k-20k',
          value: '15-20',
        },
        {
          label: '20k-25k',
          value: '20-25',
        },
        {
          label: '25k以上',
          value: '-25',
        },
      ],
      useOptions: [
        {
          label: '旅游',
          value: 'use-tourism',
        },
        {
          label: '商城购物',
          value: 'use-shopping',
        },
        {
          label: '大额取现',
          value: 'use-cash',
        },
        {
          label: '网络联名',
          value: 'use-name',
        },
      ],
      amountOptions: [
        {
          label: '2k以下',
          value: '2-',
        },
        {
          label: '2k-5k',
          value: '2-5',
        },
        {
          label: '5k-10k',
          value: '5-10',
        },
        {
          label: '10k-20k',
          value: '10-20',
        },
        {
          label: '20k以上',
          value: '-20',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-credit-compute {
  border-radius: 10px;
  width: 320px;
  height: 360px;
  text-align: center;
  vertical-align: middle;
  .x-credit-compute-title {
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    border-top: 4px solid $theme-color;
  }
  .x-credit-compute-form {
    height: 260px;
    padding: 20px 30px;
  }
  .x-credit-compute-btn {
    height: 40px;
    padding: 0px;
    width: 120px;
    font-size: 16px;
    color: #fff;
    background-color: $theme-color;
    margin: 10px;
  }
}
</style>
