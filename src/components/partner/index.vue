<template>
  <div class="x-partner">
    <img
      v-for="item in data"
      :key="item.id"
      :src="item.url"
      width="160"
      height="60"
      :alt="item.title"
    />
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
}
</script>

<style lang="scss" scoped>
.x-partner {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
</style>
