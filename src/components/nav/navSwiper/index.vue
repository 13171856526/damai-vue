<template>
  <div class="navswiper">
    <Row>
      <Col class="section1-col2">
        <div class="index-swiper">
          <Carousel class="aaaaa" v-model="value1" autoplay loop>
            <CarouselItem class="bbbbb" v-for="(item, index) in navSwiperlist" :key="index">
              <router-link class="ccccccc" to>
                <img :src="item.images" alt />
              </router-link>
            </CarouselItem>
          </Carousel>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0
    };
  },
  props: ["navSwiperlist"]
};
</script>
<style lang="less" scoped>
.navswiper {
  // position: absolute;
  // top: 50px;
  width: 100%;

  .ivu-row {
    .section1-col2 {
      height: 420px;
      .index-swiper,
      .ivu-carousel {
        width: 100%;
        height: 100%;
      }
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
</style>