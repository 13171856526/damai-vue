<template>
  <!-- headerSearch 搜索框-->
  <div class="headerSearch">
    <Row>
      <Col class="logo" span="7" push="1">
        <div class="hd-Search-logo">
          <img :src="Logo" alt="" />
        </div>
      </Col>
      <Col class="search" span="7">
        <Input search enter-button="搜索" placeholder="请输入要搜索的内容" />
      </Col>
    </Row>
  </div>
</template>
<script>
import Logo from "../../../assets/img/logo.png";

export default {
  data() {
    return {
      Logo,
    };
  },
};
</script>
<style lang="less" scoped>
.headerSearch {
  padding-top: 13px;
  height: 130px;
  border-top: 2px solid #e5e5e5;
  background-color: #f5f5f5;
  .search {
    margin: auto 0;
  }
}
</style>
