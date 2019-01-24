<template>
  <span class="x-sub-title"><slot></slot></span>
</template>

<style lang="scss" scoped>
@import '@/common/_variable.scss';
.x-sub-title {
  display: inline-block;
  min-width: 100px;
  height: 40px;
  font-size: 24px;
  line-height: 40px;
  border-bottom: 1px solid $theme-color;
  color: #171717;
  margin-bottom: 20px;
}
</style>
