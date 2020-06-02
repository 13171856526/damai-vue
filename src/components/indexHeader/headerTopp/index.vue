<template>
  <!-- header top-->
  <div class="hdtop">
    <div class="hdtop-top">
      <div class="content-top">
        <Row>
          <Col class="hdtop-left" span="8" offset="1">
            <span>Hi 欢迎来到大觅网</span>
            [
            <router-link to="/login" class="t-login">登录</router-link>
            <router-link to="/register" class="t-register">注册</router-link>]
            <!-- 下拉菜单 -->
            <Dropdown>
              <a href="javascript:void(0)">
                我的大觅
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>
                  <router-link to="/">个人信息</router-link>
                </DropdownItem>
                <DropdownItem>
                  <router-link to="/">订单管理</router-link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col class="hdtop-right" offset="8" span="7">
            <ul>
              <li>
                <span>大觅网微信</span>
              </li>
              <li>
                <span>手机号</span>
              </li>
              <li>
                <Dropdown>
                  <a href="javascript:void(0)">
                    客户服务
                    <Icon type="ios-arrow-down"></Icon>
                  </a>
                  <DropdownMenu slot="list">
                    <DropdownItem>
                      <router-link to="/personInfo">帮助中心</router-link>
                    </DropdownItem>
                    <DropdownItem>
                      <router-link to="/orderList">在线客服</router-link>
                    </DropdownItem>
                    <DropdownItem>
                      <router-link to="/orderList">人工服务</router-link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
              <li>
                <Dropdown>
                  <a href="javascript:void(0)">
                    网站导航
                    <Icon type="ios-arrow-down"></Icon>
                  </a>
                  <DropdownMenu slot="list">
                    <DropdownItem>
                      <router-link to="/">帮助中心</router-link>
                    </DropdownItem>
                    <DropdownItem>
                      <router-link to="/">在线客服</router-link>
                    </DropdownItem>
                    <DropdownItem>
                      <router-link to="/">人工服务</router-link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
              <li>English</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
a {
  color: black;
}
.hdtop {
  height: 45px;
  line-height: 45px;
  background-color: #f7f7f7;
  font-size: 12px;
  .hdtop-top {
    .content-top {
      .hdtop-left {
        .t-login {
          color: #ff3c1b !important;
        }
      }

      .hdtop-right {
        > ul {
          display: flex;
          li {
            margin: 0 10px;
          }
        }
      }
    }
  }
}
</style>
