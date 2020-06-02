<template>
  <!-- 首页 -->
  <div class="index">
    <BackTop :height="100" :bottom="200">
      <div class="top">返回顶端</div>
    </BackTop>
    <Header></Header>
    <div class="main">
      <section class="section1">
        <navHeaderr></navHeaderr>
        <navSlide></navSlide>
      </section>
      <section class="section2">
        <tabs></tabs>
      </section>
      <main>
        <section class="section3">
          <mainList></mainList>
        </section>
      </main>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../../components/indexHeader/header/index.vue";
import Footer from "../../components/indexFooter/footer/index.vue";
import navHeaderr from "../../components/nav/navHeader/index.vue";
import navSlide from "../../components/nav/navSlide/index.vue";
import navSwiper from "../../components/nav/navSwiper/index.vue";
import tabs from "../../components/tabs/index.vue";
import mainList from "../../components/mainList/index.vue";
export default {
  data() {
    return {
      navList: [
        {
          id: 1,
          name: "戏剧",
          path: "/Xijuilist"
        },
        { id: 2, name: "体育", path: "/Tiyulist" },
        { id: 3, name: "亲子", path: "/Qinzilist" },
        { id: 4, name: "舞蹈古典", path: "/Wudaoilist" },
        { id: 5, name: "摇滚", path: "/Yaogunilist" }
      ]
    };
  },
  methods: {},
  mounted() {},
  components: {
    Header,
    Footer,
    navHeaderr,
    navSlide,
    navSwiper,
    tabs,
    mainList
  }
};
</script>
<style lang="less" scoped>
.top {
  padding: 10px;
  background: rgba(0, 153, 229, 0.7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}
.index {
  width: 100%;
  height: 100%;
  .main {
    background-color: #f5f5f5;
    section {
      margin-bottom: 30px;
    }
    .section1 {
      position: relative;
      height: 470px;
      .section1-col1 {
        height: 50px;
        line-height: 50px;
        .col1-li {
          text-align: center;
          background-color: black;
          color: #fff;
        }
      }
      .section1-col2 {
        // border: 1px solid #dcdcdc;
        background-color: #ffffff;
        height: 100%;
        .fl-ul {
          width: 100%;
          border: 1px solid #dcdcdc;
          height: 50px;
          display: flex;
          align-items: center;
          .fl-ul-li1 {
            margin-left: 30px;
          }
          li {
            margin: 0 60px 0 0;
          }
        }
      }
    }
    .section2 {
      height: 350px;
    }
  }
}
</style>
