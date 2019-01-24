<template>
  <div class="x-loan-advantage-title">
    <div class="x-loan-advantage-title-bar"></div>
    {{ content }}
    <div class="x-loan-advantage-title-bar"></div>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
  },
}
</script>

<style lang="scss" scoped>
.x-loan-advantage-title {
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  font-weight: bold;
  color: #171717;
  text-align: center;
  vertical-align: middle;
  .x-loan-advantage-title-bar {
    display: inline-block;
    width: 100px;
    height: 2px;
    background-color: #171717;
    margin: 10px;
  }
}
</style>
