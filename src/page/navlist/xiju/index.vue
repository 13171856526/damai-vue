<template>
  <div class="xiju">
    <xiJuHeader></xiJuHeader>
    <navheader>
      <div slot="navright">
        <Col class="section1-col2" span="22" push="1">
          <ul class="fl-ul">
            <li class="xj-shouye">
              <router-link to="/index">首页</router-link>
            </li>
            <li class="fl-ul-li1" v-for="(item,path, index) in navList" :key="index">
              <router-link
                :to="`${item.path}/${item.id}`"
                @click.native="$router.go(0)"
                active-class="active"
              >{{item.name}}</router-link>
            </li>
          </ul>
        </Col>
      </div>
    </navheader>
    <!-- 轮播图 -->
    <div class="xiju-swiper">
      <Row class="xiju-row2">
        <Col class="xiju-col-swiper" span="22" push="1">
          <xijuswiperr :navSwiperlist="navSwiperlistxiju"></xijuswiperr>
        </Col>
      </Row>
    </div>
    <div class="xiju-main main">
      <!-- 猜你喜欢 -->
      <div class="navrouter section1">
        <Row class="section1-row1">
          <Col class="section1-col" span="22" push="1">
            <sectionTop txt="猜你喜欢"></sectionTop>
            <div class="section1-bottom">
              <div class="bottom-box" v-for="(item, index) in zonghejson.data" :key="index">
                <dl>
                  <dt>
                    <img :src="item.images_info" alt />
                  </dt>
                  <dd>{{item.title}}</dd>
                  <dd>￥{{item.piaojia}}</dd>
                </dl>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <!-- 精彩聚集 -->
      <div class="navrouter section2">
        <Row class="section2-row1">
          <Col class="section2-col1" span="22" push="1">
            <sectionTop txt="精彩聚集"></sectionTop>
            <div class="section2-bottom" v-for="(item, index) in zonghejson.data2" :key="index">
              <div class="left">
                <div class="left-img" v-for="(item, index) in item.left" :key="index">
                  <img :src="item.images_info" alt />
                </div>
              </div>
              <div class="content">
                <div class="content-box" v-for="(item, index) in item.content" :key="index">
                  <img :src="item.images_info" alt />
                </div>
              </div>
              <div class="right">
                <div class="right-img" v-for="(item, index) in item.right" :key="index">
                  <img :src="item.images_info" alt />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <!-- tabs -->
      <div class="tabs section4">
        <Row>
          <Col span="22" push="1">
            <Tabs class="aaaaaaaaa" value="name1">
              <TabPane
                v-for="(item, index) in zonghejson.data4"
                :key="index"
                :label="item.tabs"
                :name="item.name"
                class="se2-tabPane"
              >
                <div class="tabs-img" v-for="(main1, index) in item.main" :key="index">
                  <dl>
                    <dt
                      @mouseenter="onMouseOver(index)"
                      @mouseleave="onMouseOut(index)"
                      class="dl-bj"
                    >
                      <!-- 图片 -->
                      <img :src="main1.img" alt />
                      <!-- 隐藏的 -->
                      <div class="tabs-img-show" v-if="main1.seen">
                        <p>标题一</p>
                        <p>标题二</p>
                      </div>
                    </dt>
                    <dd>{{main1.text}}</dd>
                    <dd>
                      票价:
                      <span>￥ {{main1.piaojia}}</span>
                      {{item.id}}
                    </dd>
                  </dl>
                </div>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import xiJuHeader from "../../../components/indexHeader/header/index.vue";
import navheader from "../../../components/nav/navHeader/index";
import xijuswiperr from "../../../components/nav/navSwiper/index";
import sectionTop from "../../../components/navrouter/sectionTop/index.vue";
import Footer from "../../../components/indexFooter/footer/index.vue";
export default {
  data() {
    return {
      navList: [],
      navSwiperlistxiju: [],
      zonghejson: [],
      zonghe: [
        "zonghejson.json",
        "zonghejson1.json",
        "zonghejson2.json",
        "zonghejson3.json",
        "zonghejson4.json",
        "zonghejson5.json"
      ],
      zongheid: ""
    };
  },
  created() {},

  beforeMount() {},

  mounted() {
    this.zongheid = this.$route.params.aid;
    console.log("zongheid=" + this.zongheid);
    this.$axios.get(this.zonghe[this.zongheid]).then(res => {
      this.zonghejson = res.data;
    });
    this.fetchData();
    this.getUrlImg();
  },
  methods: {
    fetchData() {
      console.log("路由发送变化doing...");
    },
    // 调取图片和导航数据
    getUrlImg: function() {
      this.$axios.get(`/swiper_navs.json`).then(res => {
        // console.log(res.data);
        this.navList = res.data.NavsList;
        this.navSwiperlistxiju = res.data.Swiper;
      });
    },
    // 显示
    onMouseOver(index) {
      this.zonghejson.data4[0].main[index].seen = true;
      this.zonghejson.data4[1].main[index].seen = true;
    },
    // 隐藏
    onMouseOut(index) {
      this.zonghejson.data4[0].main[index].seen = false;
      this.zonghejson.data4[1].main[index].seen = false;
    }
  },
  components: {
    xiJuHeader,
    navheader,
    xijuswiperr,
    Footer,
    sectionTop
  },
  updated() {}
};
</script>
<style lang="less" scoped>
.xiju {
  .section1-col2 {
    background-color: #ffffff;
    height: 100%;
    .fl-ul {
      width: 100%;
      border: 1px solid #dcdcdc;
      height: 50px;
      display: flex;
      align-items: center;
      .xj-shouye {
        margin-left: 100px;
      }
      .fl-ul-li1 {
        margin-left: 30px;
        height: 50px;
        line-height: 50px;
      }
      li {
        margin: 0 60px 0 0;
      }

      .active {
        background: #fd7522;
        // border: 1px solid #fd7522;
        color: #fff;
        background: #fd7522;
        // border: 1px solid #fd7522;
        color: #fff;
        display: inline-block;
        width: 100px;
        height: 100%;
        text-align: center;
      }
    }
  }
  .xiju-row2 {
    .xiju-col-swiper {
      .navswiper {
        // width: 100%;
        // height: 100%;
        .index-swiper {
          width: 100%;
          height: 100%;
          overflow: hidden;
          .ivu-carousel {
            .ivu-carousel-list {
              .ivu-carousel-track {
                .bbbbb {
                  width: 100%;
                  height: 500px;
                  /* 如果需要让图片各方位居中 */
                  // display: flex;
                  // justify-content: center;
                  // align-items: center;
                  a {
                    img {
                      width: auto;
                      height: auto;
                      max-width: 100%;
                      max-height: 100%;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .xiju-main {
    .section1 {
      margin: 20px 0;

      .section1-row1 {
        height: 345px;
        margin-top: 20px;
        margin-bottom: 20px;
        .section1-col {
          border: 1px solid #ccc;
          .section1-bottom {
            height: 80%;
            display: flex;
            // justify-content: space-around;
            align-items: center;
            .bottom-box {
              margin: 0 55px 0 5px;
              dl {
                dt {
                  width: 143px;
                  height: 193px;
                  margin-top: 10px;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                dd {
                  width: 146px;
                  font-size: 11px;
                  margin: 20px 0;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                  &:first-of-type {
                    margin-bottom: 19px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .section2 {
      margin: 20px 0;

      .section2-row1 {
        box-sizing: border-box;
        height: 625px;
        .section2-col1 {
          border: 1px solid #ccc;
          //   height: 100%;
          .section2-bottom {
            height: 85%;
            display: flex;
            flex: none;
            margin-bottom: 10px;
            .left {
              margin: 0 5px;
              width: 285px;
              height: 535px;
              flex: none;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .content {
              display: flex;
              justify-content: space-around;
              align-items: center;
              flex-wrap: wrap;
              margin: 0 20px;
              .content-box {
                //   margin: 0 5px;
                width: 185px;
                height: 265px;

                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
            .right {
              margin: 0 8px;

              width: 285px;
              flex: none;
              height: 535px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
    .section3 {
      height: 132px;
      margin-bottom: 20px;
      .ivu-row {
        height: 100%;
        .ivu-col {
          height: 100%;
          .section3-box {
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        }
      }
    }
    .section4 {
      // height: 270px;
      margin-bottom: 20px;
      .ivu-row {
        .ivu-col {
          // border: 1px solid red;
          padding: 0px 30px;
          background: #fff;
          .ivu-tabs {
            .ivu-tabs-content {
              // 自定义的样式
              .se2-tabPane {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .tabs-img {
                  dl {
                    font-size: 11px;
                    width: 150px;
                    .dl-bj {
                      box-sizing: border-box;
                      width: 146px;
                      height: 192px;
                      position: relative;
                      img {
                        box-sizing: border-box;
                        width: 146px;
                        height: 192px;
                      }
                      .tabs-img-show {
                        background: rgba(0, 0, 0, 0.3);
                        width: 100%;
                        height: 60px;
                        position: absolute;
                        z-index: 111;
                        bottom: 0;
                        left: 0;

                        p {
                          color: #fff;
                          text-align: center;
                        }
                      }
                    }
                    dd {
                      width: 146px;
                      // height: 14px;
                      overflow: hidden;
                      font-size: 11px;
                      margin: 20px 0;
                      display: -webkit-box;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 2;
                      overflow: hidden;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>