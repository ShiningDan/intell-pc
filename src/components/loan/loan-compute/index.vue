<template>
  <el-card class="x-loan-compute" :body-style="{ padding: '0px' }">
    <div class="x-loan-compute-title">算算我能贷多少</div>
    <el-form class="x-loan-compute-form">
      <el-form-item>
        <el-select v-model="job" placeholder="请选择你的职业">
          <el-option
            v-for="job in jonOptions"
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
        <el-select v-model="house" placeholder="请选择你的房产类型">
          <el-option
            v-for="house in houseOptions"
            :key="house.value"
            :label="house.label"
            :value="house.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="car" placeholder="请选择你的汽车购置价格">
          <el-option
            v-for="car in carOptions"
            :key="car.value"
            :label="car.label"
            :value="car.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button class="x-loan-compute-btn">立即评估</el-button>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      job: '',
      salary: '',
      house: '',
      car: '',
      jonOptions: [
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
      houseOptions: [
        {
          label: '商品住宅',
          value: 'commercialHouse',
        },
        {
          label: '商铺',
          value: 'shops',
        },
        {
          label: '办公楼',
          value: 'office',
        },
        {
          label: '厂房',
          value: 'factory',
        },
        {
          label: '无房产',
          value: 'none',
        },
      ],
      carOptions: [
        {
          label: '10w以下',
          value: '10-',
        },
        {
          label: '10w-50w',
          value: '10-50',
        },
        {
          label: '50w-100w',
          value: '50-100',
        },
        {
          label: '100w-200w',
          value: '100-200',
        },
        {
          label: '200w以上',
          value: '-200',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-loan-compute {
  border-radius: 10px;
  width: 320px;
  height: 360px;
  text-align: center;
  vertical-align: middle;
  .x-loan-compute-title {
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    border-top: 4px solid $theme-color;
  }
  .x-loan-compute-form {
    height: 260px;
    padding: 20px 30px;
  }
  .x-loan-compute-btn {
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
