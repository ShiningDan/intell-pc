<template>
  <div class="x-recomm-title">
    <div class="x-recomm-title-bar"></div>
    <span class="x-recomm-title-content">{{ content }}</span>
    <div class="x-recomm-title-bar"></div>
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
.x-recomm-title {
  height: 40px;
  color: #171717;
  text-align: center;
  margin-bottom: 20px;
  .x-recomm-title-bar {
    width: 100px;
    height: 2px;
    background-color: #171717;
    margin: 19px 0;
    display: inline-block;
  }
  .x-recomm-title-content {
    display: inline-block;
    font-size: 24px;
    line-height: 40px;
    height: 40px;
    padding: 0 20px;
    vertical-align: top;
  }
}
</style>
