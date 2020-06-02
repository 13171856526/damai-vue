<template>
  <div class="tabs">
    <Row>
      <Col span="22" push="1">
        <Tabs class="tabsStyle" value="name1">
          <TabPane
            v-for="(item, index) in tabslist"
            :key="index"
            :label="item.tabs"
            :name="item.name"
            class="se2-tabPane"
          >
            <div class="tabs-img" v-for="(main1, index) in item.main" :key="index">
              <dl>
                <dt @mouseenter="onMouseOver(index)" @mouseleave="onMouseOut(index)" class="dl-bj">
                  <!-- 图片 -->
                  <img :src="main1.img" alt />
                  <!-- 隐藏的 -->
                  <div class="tabs-img-show" v-if="main1.seen">
                    <p class="p1">{{main1.shuxing1}}</p>
                    <p class="p2">{{main1.shuxing2}}</p>
                  </div>
                </dt>

                <dd>{{main1.text}}</dd>
                <dd>
                  票价:
                  <span>￥ {{main1.piaojia}}</span>
                </dd>
              </dl>
            </div>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabslist: [],
      indexFor: []
    };
  },
  methods: {
    indexTabs: function() {
      this.$axios({
        method: "get",
        url: "api_index_tabs.json"
      }).then(res => {
        this.tabslist = res.data.data;
      });
    },
    // 显示
    onMouseOver(index) {
      this.tabslist[0].main[index].seen = true;
      this.tabslist[1].main[index].seen = true;
    },
    // 隐藏
    onMouseOut(index) {
      this.tabslist[0].main[index].seen = false;
      this.tabslist[1].main[index].seen = false;
    }
  },
  mounted() {
    this.indexTabs();
  }
};
</script>
<style lang="less" scoped>
.tabs {
  .ivu-row {
    .ivu-col {
      border: 1px solid #ccc;
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
                    height: 40px;
                    position: absolute;
                    z-index: 111;
                    bottom: 0;
                    left: 0;
                    p {
                      color: #fff;
                      text-align: center;
                      height: 20px;
                      display: -webkit-flex;
                      -webkit-box-orient: vertical;
                      -webkit-line-clamp: 1;
                      overflow: hidden;
                      padding: 0 20px;
                    }
                  }
                }
                dd {
                  width: 146px;
                  // height: 14px;
                  overflow: hidden;
                  font-size: 11px;
                  margin: 17px 0;
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
</style>