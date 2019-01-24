<template>
  <div class="x-loan-quality-title">
    <div class="x-loan-quality-title-bar"></div>
    {{ content }}
    <div class="x-loan-quality-title-bar"></div>
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
.x-loan-quality-title {
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  color: #171717;
  text-align: center;
  vertical-align: middle;
  .x-loan-quality-title-bar {
    display: inline-block;
    width: 100px;
    height: 2px;
    background-color: #171717;
    margin: 10px;
  }
}
</style>
