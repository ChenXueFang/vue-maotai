<template>
  <el-container>
    <el-header style="margin: 0;padding: 0;">
      <!--  banner轮播-->
        <swiper :options="swiperOption" style="margin-top: -2px;">
          <swiper-slide><img src="./img/banner5.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./img/banner4.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./img/banner3.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./img/banner2.jpg" alt=""></swiper-slide>
          <swiper-slide><img src="./img/banner1.jpg" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      <!--  banner轮播-->
    </el-header>

    <el-main>
      <ul class="main_news" style="margin-top: 470px;">
        <li><a href="#" title="更多新闻资讯"><img src="./img/new-bg.jpg"></a></li>
        <li></li>
      </ul>



    </el-main>
  </el-container>
</template>

<script>
    export default {
      name: "Pos.vue",
      data() {
        return {
          swiperOption: {
            effect : 'fade',
            loop:true,
            autoplay: { //自动轮播
              //设置为true启动自动切换，并使用默认的切换设置。 默认false
              delay: 2000
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }
        }
      }
    }
</script>

<style scoped>
  /*banner轮播*/
  .el-carousel__item:nth-child(3) {
    background:url("./img/banner1.jpg");
    background-size: 100% 520px;
  }
  .el-carousel__item:nth-child(4) {
    background:url("./img/banner2.jpg");
    background-size: 100% 520px;
  }
  .el-carousel__item:nth-child(5) {
    background:url("./img/banner3.jpg");
    background-size: 100% 520px;
  }
  .el-carousel__item:nth-child(6) {
    background:url("./img/banner4.jpg");
    background-size: 100% 520px;
  }
  .el-carousel__item:nth-child(7) {
    background:url("./img/banner5.jpg");
    background-size: 100% 520px;
  }
</style>

