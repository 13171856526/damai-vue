<template>
  <div class="app">
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  activated: function() {
    this.getCase();
  }
};
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
