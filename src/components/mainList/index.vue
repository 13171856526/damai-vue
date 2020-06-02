<template>
  <div class="mainlist">
    <Row class="section3-row" v-for="(item, index) in mainlist" :key="index">
      <Col class="section3-row-col" span="22" offset="1">
        <article>
          <div class="se3-header">
            <span class="span1">{{item.louceng}}</span>
            <span class="span2">{{item.title}}</span>
          </div>
          <div class="se3-main">
            <div class="se3-bottom">
              <div class="left-list" v-for="(item1, index) in item.main" :key="index">
                <div class="se3-bottom-left">
                  <P class="p-img">
                    <img :src="item1.images" alt />
                  </P>
                  <div class="left-bj">
                    <p class="p1">{{item1.title}}</p>
                    <p class="p2">￥{{item1.jiage}}起</p>
                  </div>
                </div>
              </div>
              <div class="right-list">
                <div class="right-i1" v-for="(item2, index) in item.mainright" :key="index">
                  <div class="right-bj">
                    <img :src="item2.images" alt />
                  </div>
                  <dl>
                    <dt>{{item2.title}}</dt>
                    <dd>{{item2.dizhi}}</dd>
                    <dd>{{item2.riqi}}</dd>
                    <dd>￥{{item2.piaojia}}起</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </article>
      </Col>
      <!-- <Col class="section3-row-colbt" span="5" offset="1">
        <aside v-for="(slideItem, index) in item.mainslide" :key="index">
          <div class="aside-top">
            <p>{{slideItem.title}}</p>
            <a>{{slideItem.gengduo}}</a>
          </div>
          <div class="aside-main">
            <ul>
              <li v-for="(slideItemList, id) in slideItem.list" :key="id">
                <i :style="randomRgb(item)" class="i1">{{slideItemList.index}}</i>
                <span class="span2">{{slideItemList.text}}</span>
              </li>
            </ul>
          </div>
        </aside>
      </Col>-->
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mainlist: []
    };
  },
  methods: {
    indexMain: function() {
      this.$axios({
        method: "get",
        url: "api_index_main.json"
      }).then(res => {
        // console.log(res.data.data);
        this.mainlist = res.data.data;
      });
    },
    randomRgb(item) {
      let R = Math.floor(Math.random() * 130 + 110);
      let G = Math.floor(Math.random() * 130 + 110);
      let B = Math.floor(Math.random() * 130 + 110);
      return {
        background: "rgb(" + R + "," + G + "," + B + ")"
      };
    }
  },
  mounted() {
    this.indexMain();
  }
};
</script>
<style lang="less" scoped>
.mainlist {
  width: 100%;
  //   height: 470px;
  .section3-row {
    width: 100%;
    height: 470px;
    margin-bottom: 30px;
    .section3-row-col {
      height: 100%;
      border: 1px solid #ccc;
      background-color: #fff;
      article {
        width: 100%;
        height: 100%;
        margin: 0 25px;
        .se3-header {
          height: 67px;
          line-height: 67px;
          .span1 {
            color: #ff721b;
            font-size: 20px;
          }
          .span2 {
            font-size: 20px;
          }
        }
        .se3-bottom {
          display: flex;
          .left-list {
            .se3-bottom-left {
              position: relative;
              width: 238px;

              height: 364px;
              float: left;

              .p-img {
                width: 100%;
                height: 100%;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .left-bj {
                width: 100%;
                height: 112px;
                background-color: rgba(169, 40, 18, 0.7);
                position: absolute;
                bottom: 0;

                p {
                  color: #fff;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                  font-size: 16px;
                }
                .p1 {

                  margin: 20px 38px 0 20px;
                }
                .p2 {
                  font-size: 20px;
                  margin: 10px 0 0 20px;
                }
              }
            }
          }

          .right-list {
            display: flex;
            flex-wrap: wrap;
            .right-i1 {
              margin-left: 35px;
              width: 266px;
              height: 150px;
              display: flex;
              .right-bj {
                margin-right: 10px;
                display: inline-block;
                width: 113px;
                height: 150px;

                img {
                  width: 100%;
                  height: 100%;
                }
              }
              dl {
                // width: ;
                dt,
                dd {
                  width: 135px;
                }
                dt {
                  font-size: 14px;
                  margin-bottom: 15px;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  overflow: hidden;
                }
                dd {
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 1;
                  overflow: hidden;
                  font-size: 18px;
                  // color: red;
                  &:nth-child(2) {
                    // color: blue;
                    font-size: 11px;
                  }
                  &:nth-child(3) {
                    font-size: 11px;
                  }
                  &:nth-child(4) {
                    margin-top: 20px;
                    color: red;
                  }
                }
              }
            }
          }
        }
      }
    }
    // .section3-row-colbt {
    //   height: 100%;

    //   aside {
    //     background-color: #fff;

    //     width: 100%;
    //     height: 100%;
    //     .aside-top {
    //       height: 75px;
    //       display: flex;
    //       justify-content: space-around;
    //       align-items: center;
    //     }
    //     .aside-main {
    //       ul {
    //         margin: 0 33px;
    //         li {
    //           margin-bottom: 10px;
    //           display: flex;
    //           align-items: center;
    //           justify-content: center;
    //           box-sizing: border-box;
    //           .i1 {
    //             width: 10%;
    //             height: 20px;
    //             background: #ccc;
    //             display: inline-block;
    //             text-align: center;
    //             border-radius: 50%;
    //             display: inline-block;
    //             margin-right: 8px;
    //           }
    //           .span2 {
    //             display: inline-block;
    //             width: 100%;
    //             height: 20px;
    //             overflow: hidden;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }
}
</style>