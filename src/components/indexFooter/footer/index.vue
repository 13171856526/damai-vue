<template>
  <!-- footer -->
  <div class="footer">
    <footerTop></footerTop>
    <footerMain></footerMain>
    <footerBottom></footerBottom>
  </div>
</template>
<script>
import footerTop from "../footerTop/index.vue";
import footerMain from "../footerMain/index.vue";
import footerBottom from "../footerBottom/index.vue";
export default {
  components: {
    footerTop,
    footerBottom,
    footerMain,
  },
};
</script>
<style lang="less" scoped>
.footer {
  height: 400px;
  background-color: #e6e6e6;
}
</style>
