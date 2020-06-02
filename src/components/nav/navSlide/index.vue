<template>
  <div class="navslide">
    <Row>
      <Col class="section1-col1" span="4" push="1">
        <div class="col1-li">全部商品分类</div>
        <ul id="nav">
          <li v-for="(item, index) in navSlide" :key="index" @mouseenter="fn(index)">
            <Icon :type="item.iconfont" />
            <span>{{item.text}}</span>
            &gt;
          </li>
        </ul>
      </Col>
      <div class="navshow" v-if="onshow">
        <!-- {{this.onshowindex}} -->
        <tabsList tabsStyle="tabsStyle"></tabsList>
        <span class="delete" @click="deletelist">
          <Icon size="20" type="md-close" />
        </span>
      </div>
      <Col class="section1-col2" span="18" push="5">
        <xijuswiperr :navSwiperlist="navSwiperlistxiju"></xijuswiperr>
      </Col>
    </Row>
  </div>
</template>
<script>
import xijuswiperr from "../navSwiper/index.vue";
import tabsList from "../../tabs/index";
export default {
  data() {
    return {
      navSwiperlistxiju: [],
      navSlide: [
        {
          text: "演唱会",
          iconfont: "ios-heart-outline"
        },
        {
          text: "音乐会",
          iconfont: "ios-heart-outline"
        },
        {
          text: "歌剧喜剧",
          iconfont: "ios-heart-outline"
        },
        {
          text: "曲苑杂坛",
          iconfont: "ios-heart-outline"
        },
        {
          text: "体育比赛",
          iconfont: "ios-heart-outline"
        },
        {
          text: "儿童亲子",
          iconfont: "ios-heart-outline"
        },
        {
          text: "舞蹈芭蕾",
          iconfont: "ios-heart-outline"
        }
      ],
      onshow: false,
      onshowindex: ""
    };
  },
  components: {
    xijuswiperr,
    tabsList
  },
  mounted() {
    this.getUrlImg();
  },
  methods: {
    fn: function(index) {
      this.onshowindex = index;
      this.onshow = true;
    },
    deletelist: function() {
      this.active = "";
      this.onshow = false;
    },
    // 调取图片和导航数据
    getUrlImg: function() {
      this.$axios.get("swiper_navs.json").then(res => {
        console.log(res.data);
        this.navSwiperlistxiju = res.data.Swiper;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.navslide {
  .navshow {
    width: 70%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 280px;
    z-index: 1;
    color: white;
    padding: 25px 0;

    .delete {
      position: absolute;
      right: 20px;
      top: 10px;
    }
  }
  .section1-col1 {
    height: 50px;
    line-height: 50px;
    position: absolute;
    top: -50px;
    .col1-li {
      text-align: center;
      background-color: black;
      color: #fff;
    }
    // }
    // .section1-col2 {
    height: 420px;
    line-height: 50px;
    #nav {
      height: 100%;
      color: #fff;
      background-color: red;
      li {
        display: flex;
        justify-content: space-around;
        align-items: center;
        span {
          width: 60px;
          text-align: center;
        }
        &:hover {
          background: rgba(24, 23, 33, 0.6);
        }
      }
    }
  }
}
.active {
  background-color: black;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.navshow /deep/ .tabsStyle {
  overflow: hidden;
  overflow-x: scroll;
  // padding: 25px;
  // margin: 20px;
  .ivu-tabs-content {
    width: 0;
  }
  
}
</style>