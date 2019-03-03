<template>
  <div class="signInPage">
    <div class="signInPage-info">这里填写宣传语</div>
    <div class="signInPage-form">
      <div class="signInPage-form-content">
        <h4>注册</h4>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
          <el-form-item prop="username">
            <el-input type="text" v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="password_again">
            <el-input type="password" v-model="ruleForm.password_again" placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="verification">
            <el-input v-model="ruleForm.verification" placeholder="请输入验证码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          </el-form-item>
        </el-form>
        <div>
          <a class="form-aisde" href="#">已有账号</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkusername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('用户名不能为空'))
      } else if (/^\w+$/.test(value)) {
        callback()
      } else {
        callback(new Error('格式不正确'))
      }
    }
    var checkpassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var checkpassword_again = (rule, value, callback) => {
      if (value === this.ruleForm.password && this.ruleForm.password !== '') {
        callback()
      } else {
        callback(new Error('两次输入密码不一致'))
      }
    }
    var checkverification = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: '',
        password_again: '',
        verification: '',
      },
      rules: {
        username: [{ validator: checkusername, trigger: 'change' }],
        password: [{ validator: checkpassword, trigger: 'change' }],
        password_again: [{ validator: checkpassword_again, trigger: 'change' }],
        verification: [{ validator: checkverification, trigger: 'change' }],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.signInPage {
  background: url('~@/assets/sign_in/bg.jpg');
  display: flex;
  width: 100%;
  height: calc(100vh - 112px);
  .signInPage-info,
  .signInPage-form {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .signInPage-info {
    font-weight: 500;
    font-size: 22px;
    line-height: 1.5;
    text-align: center;
  }
  .signInPage-form-content {
    width: 320px;
    text-align: center;
    h4 {
      margin-bottom: 40px;
      font-weight: 500;
      font-size: 22px;
      text-align: center;
      letter-spacing: 4px;
    }
    .el-button {
      margin-top: 40px;
      width: 180px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      border-radius: 50px;
      border: 0px;
      box-shadow: rgba(152, 22, 244, 0.19) 0px 5px 10px 2px;
      padding: 0;
      span {
        display: block;
        height: 48px;
        line-height: 48px;
      }
    }
    .form-aisde {
      color: rgb(153, 153, 153);
      font-size: 12px;
      margin: 0px 5px;
    }
  }
}
</style>
