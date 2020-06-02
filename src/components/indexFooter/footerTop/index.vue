<template>
  <!-- footerTop -->
  <div class="footerTop">
    <Row class="ft-top-row">
      <Col span="3" offset="1">
        <dl>
          <dt>订购方式</dt>
          <dd>在钱订购</dd>
          <dd>电话订购</dd>
          <dd>上门订购</dd>
          <dd>大喜户固体订购</dd>
          <dd>大麦起吸票订购</dd>
        </dl>
      </Col>

      <Col span="3">
        <dl>
          <dt>配送方式</dt>
          <dd>送货上门</dd>
          <dd>电子票</dd>
          <dd>上门自取</dd>
          <dd>大麦自助机换票</dd>
        </dl>
      </Col>
      <Col span="3">
        <dl>
          <dt>支付方式</dt>
          <dd>在线支付</dd>
          <dd>柜台村款</dd>
        </dl>
      </Col>
      <Col span="2">
        <dl>
          <dt>大麦网微信</dt>
          <dd>1</dd>
        </dl>
      </Col>
      <Col span="3">
        <dl>
          <dt>大麦网触屏版</dt>
          <dd>2</dd>
        </dl>
      </Col>
      <Col span="3">
        <dl>
          <dt>账户安全</dt>
          <dd>找回座码</dd>
          <dd>账户注册</dd>
          <dd>账户娜定</dd>
          <dd>SsL安全证书</dd>
        </dl>
      </Col>
      <Col span="3">
        <dl>
          <dt>配送方式</dt>
          <dd>退换及缺货说明</dd>
          <dd>发票帮助</dd>
          <dd>订夏服务会数</dd>
        </dl>
      </Col>
      <Col span="3">
        <dl>
          <dt>特色服务</dt>
          <dd>演出订阋</dd>
        </dl>
      </Col>
      <Col class="border" push="1" span="22"> </Col>
    </Row>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style lang="less" scoped>
.footerTop {
  .ft-top-row {
    padding-top: 55px;
    dl {
      dt {
        margin-bottom: 10%;
        // font-weight: bold;
        font-size: 15px;
      }
      dd {
        margin-bottom: 3%;
        font-size: 12px;
      }
    }
    .border {
      margin-top: 20px;
      border: 1px solid red;
    }
  }
}
</style>
