<template>
  <div class="login">
    <loginTop txt="欢迎登录"></loginTop>
    <Row class="lg-footer">
      <Col span="1" push="3" class="lg-ft-logoleft">
        <img :src="logoLeft" alt />
      </Col>
      <Col span="7" push="3" class="lg-ft-form">
        <!-- iview 登录注册 -->
        <Tabs type="card">
          <TabPane label="账号登录">
            <Form ref="formInline" :model="formInline" :rules="ruleInline" inline class="form">
              <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="请输入用户名">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="请输入密码">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="LoginIn()">登录</Button>
              </FormItem>
            </Form>
            <Row class="form-buttom">
              <Col span="12" push="1">
                <Radio></Radio>
                <span class="form-buttom-zd">下次自动登录</span>
              </Col>
              <Col span="12" push="3" class="form-buttom-link">
                <router-link to="/">忘记密码?</router-link>
                <router-link to="/" class="ljzc">立即注册</router-link>
              </Col>
            </Row>
            <Row class="form-buttom2">
              <Col span push="1">
                其他登录:
                <svg
                  t="1589594160662"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="7512"
                  width="32"
                  height="32"
                >
                  <path
                    d="M1010.8 628c0-141.2-141.3-256.2-299.9-256.2-168 0-300.3 115.1-300.3 256.2 0 141.4 132.3 256.2 300.3 256.2 35.2 0 70.7-8.9 106-17.7l96.8 53-26.6-88.2c70.9-53.2 123.7-123.7 123.7-203.3zM618 588.8c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40c0 22-17.9 40-40 40z m194.3-0.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
                    fill="#00C800"
                    p-id="7513"
                  />
                  <path
                    d="M366.3 106.9c-194.1 0-353.1 132.3-353.1 300.3 0 97 52.9 176.6 141.3 238.4l-35.3 106.2 123.4-61.9c44.2 8.7 79.6 17.7 123.7 17.7 11.1 0 22.1-0.5 33-1.4-6.9-23.6-10.9-48.3-10.9-74 0-154.3 132.5-279.5 300.2-279.5 11.5 0 22.8 0.8 34 2.1C692 212.6 539.9 106.9 366.3 106.9zM247.7 349.2c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m246.6 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
                    fill="#00C800"
                    p-id="7514"
                  />
                </svg>
              </Col>
            </Row>
          </TabPane>
          <TabPane label="短信快捷登录">
            <Form class="form">
              <FormItem>
                <Input type="text" placeholder="请输入要登录的手机号">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem class="input-yzh">
                <Row>
                  <Col span="16">
                    <Input type="text" placeholder="请输入验证码" class>
                      <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                  </Col>
                  <Col span="4" offset="1">
                    <Button type="info">获取验证码</Button>
                  </Col>
                </Row>
              </FormItem>

              <FormItem>
                <Button type="primary">登录</Button>
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
    <footerMain class="footerBottom2"></footerMain>
    <footerBottom2></footerBottom2>
  </div>
</template>

<script>
import loginTop from "../../components/loginTop/index.vue";
import footerMain from "../../components/indexFooter/footerMain/index.vue";
import footerBottom2 from "../../components/indexFooter/footerBottom2/index.vue";
import logoLeft from "../../assets/img/logo-left.jpg";
export default {
  data() {
    return {
      formInline: {
        user: "1317856526",
        password: "123456"
      },
      returnCode: "",
      ruleInline: {
        user: [
          {
            required: true,
            message: "请填写用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请填写密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6位.",
            trigger: "blur"
          }
        ]
      },
      logoLeft
    };
  },
  methods: {
    LoginIn() {
      this.$axios.post("/api/users", this.formInline).then(res => {
        console.log(res.data);
        if (res.data > 0) {
          this.$router.push("index");
        }
      });
      // this.$refs[name].validate((valid) => {
      //   if (valid) {
      //     this.$Message.success("登录成功!");
      //   } else {
      //     this.$Message.error("账号或密码不正确");
      //   }
      // });
    }
  },
  components: {
    loginTop,
    footerMain,
    footerBottom2
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  // max-height: 100%;
  background-color: #f5f5f5;

  .lg-footer {
    margin: 90px 0;
    height: 400px;
    .lg-ft-logoleft {
      width: 525px;
      height: 400px;
      margin-right: 16px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .lg-ft-form {
      height: 400px;
      border: 1px solid #e5e5e5;
      .form {
        margin: 15px 20px;
      }
    }
  }
  // .lg-fm {
  //   height: 300px;
  // }
}
.form-buttom,
.form-buttom2 {
  margin: 20px 0;
  .ivu-col-push-1 {
    left: 5%;
    .ivu-radio-wrapper {
      vertical-align: bottom;
      margin-right: 0;
    }
    .form-buttom-zd {
      font-size: 12px;
    }
  }
  .form-buttom-link {
    font-size: 12px;
    .ljzc {
      color: #ff0000;
    }
  }
}
.form-buttom2 {
  font-size: 12px;
  .icon {
    width: 25px;
    height: 25px;
    vertical-align: middle;
  }
}
.input-yzh {
  .ivu-btn-info {
    border: none;
  }
}

.footerBottom2 {
  a {
    margin: 0 30px;
  }
}

// 表单宽度
.ivu-form-inline .ivu-form-item {
  // width: 100%;
  display: block;
}
.ivu-btn-primary {
  width: 100%;
  background-color: #ff3c1b;
  border: 0;
}
</style>
