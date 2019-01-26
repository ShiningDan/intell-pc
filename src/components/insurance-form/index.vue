<template>
  <div class="x-insurance-header-form">
    <h2>保费免费试算</h2>
    <el-form :model="form" label-width="60px">
      <el-form-item label="您的年龄">
        <el-input-number
          controls-position="right"
          :min="0"
          :max="100"
          v-model="form.age"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="您的性别">
        <el-radio-group v-model="form.sex">
          <el-radio-button label="男"></el-radio-button>
          <el-radio-button label="女"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="保险类型">
        <el-select v-model="form.insuranceType" placeholder="请选择保险类型">
          <el-option
            v-for="item in insuranceType"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="基本保额">
        <el-radio-group v-model="form.insuranceAmount" size="medium">
          <el-radio-button label="10w"></el-radio-button>
          <el-radio-button label="20w"></el-radio-button>
          <el-radio-button label="30w"></el-radio-button>
          <el-radio-button label="更多"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item><el-button type="primary">立即试算</el-button></el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      insuranceType: [
        {
          value: 'lifeInsurance',
          label: '寿险',
        },
        {
          value: 'healthInsurance',
          label: '健康险',
        },
        {
          value: 'travelInsurance',
          label: '出行险',
        },
      ],
      form: {
        age: '',
        sex: '男',
        insuranceType: '',
        insuranceAmount: '10w',
      },
    }
  },
}
</script>

<style lang="scss">
@import '@/common/_variable.scss';
.x-insurance-header-form {
  padding: 0 20px;
  h2 {
    height: 80px;
    margin-bottom: 20px;
    line-height: 80px;
    text-align: center;
  }
  .el-radio-group {
    .el-radio-button__orig-radio:checked + .el-radio-button__inner {
      background-color: $theme-color;
      border-color: $theme-color;
      box-shadow: -1px 0 0 0 $theme-color;
    }
    .el-radio-button--medium {
      .el-radio-button__inner {
        padding: 12px 10px;
        width: 50px;
      }
    }
  }
  .el-input-number {
    width: 200px;
  }
  .el-form-item {
    height: 40px;
    margin-bottom: 20px;
    .el-form-item__label {
      padding: 0;
      text-align: left;
    }
  }
  .el-button--primary {
    color: #fff;
    background-color: $theme-color;
    border-color: $theme-color;
  }
}
</style>
