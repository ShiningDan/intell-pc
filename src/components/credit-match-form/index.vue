<template>
  <div class="x-credit-match-form">
    <div class="x-credit-match-form-title">快速匹配适合您的信用卡</div>
    <el-form class="x-credit-match-form-content">
      <el-form-item class="x-credit-match-form-item">
        <el-select v-model="income" placeholder="月收入范围">
          <el-option
            v-for="item in incomes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="x-credit-match-form-item">
        <el-select v-model="quota" placeholder="申请额度">
          <el-option
            v-for="item in quotas"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="x-credit-match-form-item">
        <el-input v-model="name" placeholder="请输入联系方式"></el-input>
      </el-form-item>
      <el-form-item class="x-credit-match-form-item">
        <el-col :span="12">
          <el-input v-model="phone" placeholder="请输入验证码"></el-input>
        </el-col>
        <el-col :span="12">
          <el-button class="x-credit-match-form-btn-icode">获取验证码</el-button>
        </el-col>
      </el-form-item>
      <el-form-item class="x-credit-match-form-item">
        <el-button class="x-credit-match-form-btn" @click="selectTab('/creditCardMatch')">立即匹配</el-button>
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
          value: 'wages-10k',
          label: '10k以下',
        },
        {
          value: 'wages10-20k',
          label: '10k~20k',
        },
        {
          value: 'wages20-30k',
          label: '20~30k',
        },
        {
          value: 'wages30k+',
          label: '30k以上',
        },
      ],
      quota: '',
      quotas: [
        {
          value: 'quota-2w',
          label: '2w以下',
        },
        {
          value: 'quota2w-5w',
          label: '2w~5w',
        },
        {
          value: 'quota5w-10w',
          label: '5w~10w',
        },
        {
          value: 'quota10w+',
          label: '10w以上',
        },
      ],
      name: '',
      phone: '',
    }
  },
  methods: {
    selectTab(path) {
      this.$router.replace(path)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-credit-match-form {
  width: 300px;
  height: 400px;
  border-radius: 0px 10px 10px 0px;
  .x-credit-match-form-title {
    width: 300px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: $text-primary;
    font-size: 24px;
  }
  .x-credit-match-form-content {
    padding: 0px 30px 0px 30px;
  }
  .x-credit-match-form-btn {
    width: 120px;
    height: 40px;
    margin-left: 60px;
    font-size: 16px;
    background-color: $theme-color;
    color: #fff;
  }
  .x-credit-match-form-item {
    margin-top: 20px;
    width: 240px;
    .x-credit-match-form-btn-icode {
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
