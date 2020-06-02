<template>
  <!-- footerMain -->
  <div class="footerMain">
    <Row>
      <Col push="1" span="20">
        <router-link to="">公司介绍</router-link>|
        <router-link to="">品牌识别</router-link>|
        <router-link to="">企业荣誉</router-link>|
        <router-link to="">隐私声明</router-link>|
        <router-link to="">联系及合作</router-link>|
        <router-link to="">招聘信息</router-link>|
        <router-link to="">网站地图</router-link>|
        <router-link to="">友情链接</router-link>|
        <router-link to="">公司大事记</router-link>|
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style lang="less" scoped>
.footerMain {
  height: 80px;
  line-height: 50px;
  text-align: center;
  a {
    color: black;
    vertical-align: middle;
    margin: 0 20px;
  }
  .border {
    border: 1px solid red;
  }
}
</style>
