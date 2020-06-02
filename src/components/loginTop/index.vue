<template>
  <div class="logintop">
    <Row class="lg-header">
      <Col push="3">
        <img :src="Logo" alt="" class="lg-header-img" />
        <p class="p2">{{ txt }}</p>
      </Col>
    </Row>
  </div>
</template>
<script>
import Logo from "../../assets/img/logo.png";

export default {
  data() {
    return {
      Logo,

    };
  },
  props: ["txt"],
};
</script>
<style lang="less">
.logintop {
  .lg-header {
    background: #fff;
    height: 88px !important;
    line-height: 88px !important;
    display: flex;
    align-items: center;
    div {
      height: 40px;
      line-height: 40px;
      display: flex;
      align-items: center;
      .lg-header-img {
        margin-right: 25px;
      }
      .p2 {
        border-left: 2px solid red;
        padding-left: 10px;
        font-size: 16px;
      }
    }
  }
}
</style>
