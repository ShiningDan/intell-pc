<template>
  <div class="x-header-top-container">
    <div class="x-heder-top-main">
      <span class="x-heder-top-left x-heder-top-loan">贷款就上联达动力</span>
      <span class="x-heder-top-left x-heder-top-phone">咨询电话：000-0000-0000</span>
      <div class="QR_app_code x-heder-top-right">
        <span class="hover-content x-heder-top-right">app 下载</span>
        <div class="app_code"></div>
      </div>
      <div class="QR_wchat_code x-heder-top-right">
        <span class="hover-content x-heder-top-right">关注微信</span>
        <div class="wchat_code"></div>
      </div>
      <span class="x-heder-top-right">帮助</span>
      <span class="x-heder-top-right">关于我们</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.x-header-top-container {
  background-color: #f5f5f5;
}
.x-heder-top-main {
  max-width: 1366px;
  margin: auto;
  height: 30px;
  color: #999999;
  font-size: 12px;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  .x-heder-top-left {
    float: left;
    text-align: left;
  }
  .x-heder-top-loan {
    width: 200px;
  }
  .x-heder-top-phone {
    width: 200px;
  }
  .x-heder-top-right {
    width: 100px;
    float: right;
  }
}
.QR_app_code {
  position: relative;
  span:hover + .app_code {
    opacity: 1;
    z-index: 9;
  }
  .app_code {
    position: absolute;
    width: 100px;
    height: 100px;
    background: url('~@/assets/home/QR_code.png');
    background-size: 100% 100%;
    z-index: -1;
    opacity: 0;
    top: 32px;
    transition: opacity 0.5s ease-in-out;
  }
}
.QR_wchat_code {
  position: relative;
  span:hover + .wchat_code {
    opacity: 1;
    z-index: 9;
  }
  .wchat_code {
    position: absolute;
    width: 100px;
    height: 100px;
    background: url('~@/assets/home/QR_code.png');
    background-size: 100% 100%;
    z-index: -1;
    opacity: 0;
    top: 32px;
    transition: opacity 0.5s ease-in-out;
  }
}
</style>
