<template>
  <ul>
    <el-popover placement="left" width="250" trigger="hover" ref="popover1">
      <h1 style="color: #ff4500">400-400-4000</h1>
      <span>7x24小时服务热线</span>
    </el-popover>
    <el-popover placement="left" width="200" trigger="hover" ref="popover2">
      <p style="text-align: center;">
        扫描二维码
        <br />
        下载官方App
      </p>
      <img src="@/assets/home/QR_code.png" alt="微信二维码" width="174px" height="174px" />
    </el-popover>
    <el-popover placement="left" width="200" trigger="hover" ref="popover3">
      <p style="text-align: center;">
        扫描二维码
        <br />
        关注官方微信订阅号
      </p>
      <img src="@/assets/home/QR_code.png" alt="微信二维码" width="174px" height="174px" />
    </el-popover>
    <li @mouseleave="show(0)" @mouseenter="show(0)" v-popover:popover1>
      <svg class="icon" v-show="!visible[0]"><use xlink:href="#icon-bangzhu"></use></svg>
      <span v-show="visible[0]">帮助中心</span>
    </li>
    <li @mouseleave="show(1)" @mouseenter="show(1)" v-popover:popover2>
      <svg class="icon" v-show="!visible[1]"><use xlink:href="#icon-app"></use></svg>
      <span v-show="visible[1]">App下载</span>
    </li>
    <li @mouseleave="show(2)" @mouseenter="show(2)" v-popover:popover3>
      <svg class="icon" v-show="!visible[2]"><use xlink:href="#icon-weixin"></use></svg>
      <span v-show="visible[2]">官方微信</span>
    </li>
    <li @mouseleave="show(3)" @mouseenter="show(3)">
      <svg class="icon" v-show="!visible[3]"><use xlink:href="#icon-kefu"></use></svg>
      <span v-show="visible[4]">在线客服</span>
    </li>
    <li @mouseleave="show(4)" @mouseenter="show(4)" @click="toTop">
      <svg class="icon" aria-hidden="true" v-show="!visible[4]">
        <use xlink:href="#icon-dingbu"></use>
      </svg>
      <span v-show="visible[4]">回到顶部</span>
    </li>
  </ul>
</template>

<script>
import '@/assets/asideBar/asideBar.js'
export default {
  data() {
    return {
      visible: [0, 0, 0, 0, 0],
    }
  },
  methods: {
    show(index) {
      this.visible[index] = !this.visible[index]
    },
    toTop() {
      let top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      let toTop = setInterval(() => {
        top -= 20
        document.body.scollTop = top
        document.documentElement.scrollTop = top
        window.pageYOffset = top
        if (top <= 0) {
          clearInterval(toTop)
        }
      }, 1)
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  position: fixed;
  right: 0;
  z-index: 9;
  width: 50px;
  height: 300px;
  top: calc(50vh - 150px);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  li {
    & + li {
      border-top: 1px solid #eee;
    }
    height: 60px;
    cursor: pointer;
    text-align: center;
    padding: 14px 9px;
    &:hover {
      background-color: #222;
      color: #fff;
    }
    span {
      display: block;
      height: 32px;
      width: 32px;
      text-align: center;
      line-height: 16px;
      font-size: 14px;
    }
  }
}
.icon {
  width: 32px;
  height: 32px;
  fill: currentColor;
  overflow: hidden;
}
</style>
