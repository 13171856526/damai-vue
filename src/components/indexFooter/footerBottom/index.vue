<template>
  <!-- footerBottom -->
  <div class="footerBottom">
    <img :src="logo1" alt="" />

    <img :src="logo2" alt="" />

    <img :src="logo3" alt="" />

    <img :src="logo4" alt="" />

    <img :src="logo5" alt="" />

    <img :src="logo6" alt="" />
  </div>
</template>
<script>
import logo1 from "../../../assets/img/ft-logo1.jpg";
import logo2 from "../../../assets/img/ft-logo2.png";
import logo3 from "../../../assets/img/ft-logo3.png";
import logo4 from "../../../assets/img/ft-logo4.png";
import logo5 from "../../../assets/img/ft-logo5.png";
import logo6 from "../../../assets/img/ft-logo6.png";
export default {
  data() {
    return {
      logo1,
      logo2,
      logo3,
      logo4,
      logo5,
      logo6,
    };
  },
  components: {},
};
</script>
<style lang="less" scoped>
.footerBottom {
  display: flex;
  align-items: baseline;
  margin-left: 17.77%;
  img {
    display: inline-block;
    // margin: 0 10px;
    transform: scale(.9);
  }
}
</style>
