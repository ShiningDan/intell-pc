<template>
  <el-card class="x-header-main" :body-style="{ padding: '0px' }">
    <div class="x-header-logo" @click="selectTab('/')">
      <img src="@/assets/home/logo.png" alt="Logo" width="200" height="80" />
    </div>
    <div class="x-header-left x-header-tab" @click="selectTab('/')">首页</div>
    <div class="x-header-left x-header-tab" @click="selectTab('/loan')">贷款</div>
    <div class="x-header-left x-header-tab" @click="selectTab('/insurance')">保险</div>
    <div class="x-header-left x-header-tab" @click="selectTab('/creditCard')">信用卡</div>
    <div class="x-header-right x-header-tab">注册</div>
    <div class="x-header-right x-header-tab">登录</div>
    <div class="x-header-search">
      <el-input placeholder="搜索" v-model="search">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    }
  },
  methods: {
    onSearch() {
      console.log(this.search)
    },
    selectTab(path) {
      this.$router.replace(path)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-header-main {
  width: 100%;
  height: 80px;
  font-size: 18px;
  line-height: 80px;
  background-color: #fff;
  color: #171717;
  text-align: center;
  vertical-align: middle;
  .x-header-tab {
    cursor: pointer;
    &:hover {
      background-color: #f8f8f8;
    }
  }
  .x-header-logo {
    background-color: $theme-color;
    width: 200px;
    height: 80px;
    float: left;
    color: #fff;
    cursor: pointer;
  }
  .x-header-search {
    float: right;
    height: 40px;
    .el-input {
      width: 260px;
    }
  }
  .x-header-left {
    width: 100px;
    float: left;
  }
  .x-header-right {
    width: 100px;
    float: right;
  }
}
</style>
