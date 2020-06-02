<template>
  <!-- 注册 -->
  <div class="register">
    <regLoginTop txt="账户注册"></regLoginTop>
    <div class="from">
      <div class="from-input">
        <Form>
          <FormItem label>
            <Input type="text" v-model="formInline.user" placeholder="请输入手机号">
              <Icon type="md-person" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem label>
            <Input type="text" v-model="formInline.password" placeholder="请输入登录密码">
              <Icon type="md-unlock" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem label>
            <Input type="text" v-model="formInline.password2" placeholder="请输入登录密码">
              <Icon type="md-unlock" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem label>
            <Row>
              <Col span="18">
                <Input type="text" v-model="formInline.yanzheng" placeholder="请输入验证码">
                  <Icon type="md-chatboxes" slot="prepend"></Icon>
                </Input>
              </Col>
              <Col span="4" offset="1">
                <Button>获取验证码</Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Button @click="registerInfo()" type="error" long>立即注册</Button>
          </FormItem>
        </Form>
      </div>
    </div>

    <footerMain1></footerMain1>
    <footerBottom2></footerBottom2>
  </div>
</template>
<script>
import regLoginTop from "../../components/loginTop/index.vue";
import footerMain1 from "../../components/indexFooter/footerMain/index.vue";
import footerBottom2 from "../../components/indexFooter/footerBottom2/index.vue";
export default {
  data() {
    return {
      formInline: {
        user: "13171856526",
        password: "zaxy02260319",
        password2: "zaxy02260319",
        yanzheng: "123445"
      }
    };
  },
  components: {
    regLoginTop,
    footerMain1,
    footerBottom2
  },
  methods: {
    registerInfo() {
      this.$axios.post("/api/register", this.formInline).then(res => {
        console.log(res);
        if (
          this.formInline.user == "" ||
          this.formInline.password == "" ||
          this.formInline.password2 == "" ||
          this.formInline.yanzheng == ""
        ) {
          alert("账号或者密码不能为空");
          return false;
        } else if (res.data == 1) {
          alert("注册成功");
          this.$router.push("/login");
        } else {
          alert("账号已注册");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.register {
  background-color: #f5f5f5;
  .from {
    margin: 90px auto;
    width: 1000px;
    height: 445px;
    background-color: #fff;
    .from-input {
      display: block;
      margin: 0 200px 0;
      padding: 50px 0 0 0;
    }
  }
}
</style>
