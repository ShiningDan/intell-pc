<template>
  <div class="clearfix">
    <div class="x-footer-left">
      <div class="x-footer-left-tab clearfix">
        <a href="#">企业合作</a>
        <a href="#">加入我们</a>
        <a href="#">关于我们</a>
        <a href="#">联系我们</a>
        <a href="#">网站声明</a>
        <a href="#">隐私声明</a>
      </div>
      <p>© 2018 XXX商务顾问(北京)有限公司 All rights reserved</p>
      <p>京ICP证 100953号 京公网安备 11010502020657 京ICP备12025643号-1</p>
    </div>
    <p class="x-footer-number">
      <span>400-400-4000</span>
      <br />
      7x24小时服务热线
    </p>
    <div class="x-footer-right">
      app下载
      <br />
      <img src="@/assets/home/QR_code.png" alt="app下载" width="100" height="100" />
    </div>
    <div class="x-footer-right">
      微信小程序
      <br />
      <img src="@/assets/home/QR_code.png" alt="微信小程序" width="100" height="100" />
    </div>
    <div class="x-footer-right">
      微信公众号
      <br />
      <img src="@/assets/home/QR_code.png" alt="微信公众号" width="100" height="100" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.clearfix::after {
  display: block;
  content: '';
  clear: both;
}
.x-footer-left {
  float: left;
  .x-footer-left-tab {
    a {
      float: left;
      height: 60px;
      margin-left: 20px;
      &:first-child {
        margin: 0;
      }
    }
  }
  p {
    // height: 30px;
    color: #666;
    font-size: 14px;
  }
}
.x-footer-right {
  text-align: right;
  float: right;
  width: 100px;
  margin-left: 20px;
  text-align: center;
}
.x-footer-number {
  float: left;
  margin-top: 20px;
  margin-left: 20px;
  width: 300px;
  text-align: right;
  span {
    font-size: 32px;
    color: #ff4500;
  }
}
</style>
