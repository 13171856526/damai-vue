<template>
  <div class="navheader">
    <Row>
      <slot name="navright">
        <Col class="section1-col2" span="18" offset="5">
          <ul class="fl-ul">
            <li
              class="fl-ul-li1"
              @click="selected(item.name), fenlei()"
              :class="{active : active == item.name}"
              v-for="(item,id) in navList"
              :key="item.id"
            >
              <!--   -->
              <router-link :to="`${item.path}/${item.id}`">{{item.name}}</router-link>
            </li>
          </ul>
          <router-view></router-view>
        </Col>
      </slot>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          id: 1,
          name: "戏剧",
          path: "/Xijuilist"
        },
        { id: 2, name: "体育", path: "/Xijuilist" },
        { id: 3, name: "亲子", path: "/Xijuilist" },
        { id: 4, name: "舞蹈古典", path: "/Xijuilist" },
        { id: 5, name: "摇滚", path: "/Xijuilist" }
      ],
      quanbu: true,
      active: ""
    };
  },
  mounted() {
    // this.getUrlImg();
  },
  methods: {
    selected(name) {
      this.active = name;
    },
    fenlei: function() {
      this.quanbu = false;
    },

    getUrlImg: function() {
      this.$axios.get("swiper_navs.json").then(res => {
        console.log(res.data);
        this.navList = res.data.NavsList;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.navheader {
  // height: 100px;
  .ivu-row {
    height: 100%;
  }
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
  [v-cloak] {
    display: none;
  }
}
</style>