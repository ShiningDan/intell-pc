<template>
  <div class="x-credit-apply-form">
    <div class="x-credit-apply-form-title">填写信息(<a class="x-credit-apply-form-title-light">您正在申请理财产品，请务必确保信息真实准确</a>)
    </div>
    <div class="x-credit-apply-form-box">
      <div class="x-credit-apply-form-left">
        <p>姓名：</p><p>性别：</p>
        <p>身份证号：</p>
        <p>联系方式：</p>
        <p>月收入范围：</p>
        <p>申请额度：</p>
        <p>收卡地址：</p>
      </div>
      <div class="x-credit-apply-form-right">
        <el-form class="x-credit-apply-form-content">
          <el-form-item class="x-credit-apply-form-item">
            <el-input v-model="name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item class="x-credit-apply-form-item">
            <el-radio v-model="sex" label="man">男</el-radio>
            <el-radio v-model="sex" label="woman">女</el-radio>
          </el-form-item>
          <el-form-item class="x-credit-apply-form-item">
            <el-input v-model="idNumber" placeholder="请输入身份证号码"></el-input>
          </el-form-item>
          <el-form-item class="x-credit-apply-form-item">
            <el-input v-model="phone" placeholder="请输入联系方式"></el-input>
          </el-form-item>
          <el-form-item class="x-credit-apply-form-item">
            <el-select v-model="income" placeholder="月收入范围">
              <el-option
                v-for="item in incomes"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="x-credit-apply-form-item">
            <el-select v-model="quota" placeholder="申请额度">
              <el-option
                v-for="item in quotas"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="x-credit-apply-form-item">
            <el-input type="textarea" v-model="address" placeholder="请输入收卡地址"></el-input>
          </el-form-item>
          <el-form-item class="x-credit-apply-form-item">
            <el-col :span="12">
              <el-input v-model="verificationCode" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="12">
              <el-button class="x-credit-apply-form-btn-icode">获取验证码</el-button>
            </el-col>
          </el-form-item>
          <el-form-item class="x-credit-apply-form-item">
            <el-button class="x-credit-apply-form-btn">确认申请</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      phone: '',
      sex: 'man',
      idNumber: '',
      address:'',
      verificationCode:'',
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
.x-credit-apply-form {
  width: 500px;
  border-radius: 0px 10px 10px 0px;
  .x-credit-apply-form-title {
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: $text-primary;
    font-size: 18px;
    .x-credit-apply-form-title-light{
      color: $theme-color;
    }
  }
  .x-credit-apply-form-box{
    .x-credit-apply-form-left{
      text-align: right;
      line-height: 62px;
      width: 120px;
      height: 360px;
      margin-top: 0px;
      float: left;
    }
    .x-credit-apply-form-right{
      display: inline-block;
    }
    .x-credit-apply-form-content {
      padding: 0px 30px 0px 30px;
    }
    .x-credit-apply-form-btn {
      width: 120px;
      height: 40px;
      margin-left: 60px;
      font-size: 16px;
      background-color: $theme-color;
      color: #fff;
    }
    .x-credit-apply-form-item {
      margin-top: 10px;
      width: 240px;
      .x-credit-apply-form-btn-icode {
        width: 120px;
        height: 40px;
        margin-left: 0px;
        font-size: 16px;
        background-color: #11974f;
        color: #fff;
      }
    }
  }
}
</style>
