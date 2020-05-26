<template>
  <div id="app">
    <!--首页外卖-->
    <div class="content">
      <div class="on">
        <section class="msite">
          <!-- 头部封装组件 -->
            <Header>
              <span class="header_title">
             <span class="header_title_text ellipsis">首页111</span> </span>
            </Header>
          <!--首页导航-->
          <nav class="msite_nav">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/1.jpg" />
                    </div>
                    <span>甜品饮品</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/2.jpg" />
                    </div>
                    <span>商超便利</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/3.jpg" />
                    </div>
                    <span>美食</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/4.jpg" />
                    </div>
                    <span>简餐</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/5.jpg" />
                    </div>
                    <span>新店特惠</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/6.jpg" />
                    </div>
                    <span>准时达</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/7.jpg" />
                    </div>
                    <span>预订早餐</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/8.jpg" />
                    </div>
                    <span>土豪推荐</span>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/9.jpg" />
                    </div>
                    <span>甜品饮品</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/10.jpg" />
                    </div>
                    <span>商超便利</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/11.jpg" />
                    </div>
                    <span>美食</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/12.jpg" />
                    </div>
                    <span>简餐</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/13.jpg" />
                    </div>
                    <span>新店特惠</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/14.jpg" />
                    </div>
                    <span>准时达</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/1.jpg" />
                    </div>
                    <span>预订早餐</span>
                  </a>
                  <a href="javascript:" class="link_to_food">
                    <div class="food_container">
                      <img src="./images/nav/2.jpg" />
                    </div>
                    <span>土豪推荐</span>
                  </a>
                </div>
              </div>
              <!-- Add Pagination -->
              <div class="swiper-pagination"></div>
            </div>
          </nav>
          <!--首页附近商家-->
          <!-- 商家列表封装组件 -->
          <ShopList></ShopList>
        </section>
      </div>
    </div>

    <!-- footer -->
  <!-- footer组件封装 -->
  <Footer title="Home"></Footer>

  </div>

</template>

<script>
import Header from '@/components/Header/Header'
import ShopList from '@/components/ShopList/ShopList'
import Footer from '@/components/Footer/Footer'
export default {
  data () {
    return {}
  },
  created () {},
  methods: {},
  components: {
    Header,
    ShopList,
    Footer
  }
}
</script>

<style >

/* header */
#app .content > div > section.msite {
  width: 100%;
}
#app .content > div > section.msite .msite_header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
#app .content > div > section.msite .msite_header .header_search {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 50%;
}
#app .content > div > section.msite .msite_header .header_search .icon-sousuo {
  font-size: 25px;
  color: #fff;
}
#app .content > div > section.msite .msite_header .header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
  margin-left: -5%;
}
#app
  .content
  > div
  > section.msite
  .msite_header
  .header_title
  .header_title_text {
  font-size: 20px;
  color: #fff;
  display: block;
}
#app .content > div > section.msite .msite_header .header_login {
  font-size: 14px;
  color: #fff;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}
#app
  .content
  > div
  > section.msite
  .msite_header
  .header_login
  .header_login_text {
  color: #fff;
}
/* nav */
#app .content > div > section.msite .msite_nav {
  position: relative;
  margin-top: 45px;
  height: 200px;
  background: #fff;
}
#app .content > div > section.msite .msite_nav::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  transform: scaleY(0.5);
}
#app .content > div > section.msite .msite_nav .swiper-container {
  width: 100%;
  height: 100%;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper {
  width: 100%;
  height: 100%;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide
  .link_to_food {
  width: 25%;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide
  .link_to_food
  .food_container {
  display: block;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  font-size: 0;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide
  .link_to_food
  .food_container
  img {
  display: inline-block;
  width: 50px;
  height: 50px;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide
  .link_to_food
  span {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #666;
}
#app
  .content
  > div
  > section.msite
  .msite_nav
  .swiper-container
  .swiper-pagination
  > span.swiper-pagination-bullet-active {
  background: #02a774;
}
/* shoplist */
#app .content > div > section.msite .msite_shop_list {
  position: relative;
  margin-top: 10px;
  background: #fff;
}
#app .content > div > section.msite .msite_shop_list::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
}
#app .content > div > section.msite .msite_shop_list .shop_header {
  padding: 10px 10px 0;
}
#app .content > div > section.msite .msite_shop_list .shop_header .shop_icon {
  margin-left: 5px;
  color: #999;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_header
  .shop_header_title {
  color: #999;
  font-size: 14px;
  line-height: 20px;
}
#app .content > div > section.msite .msite_shop_list .shop_container {
  margin-bottom: 50px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li {
  position: relative;
  width: 100%;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #f1f1f1;
  transform: scaleY(0.5);
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a {
  *zoom: 1;
  display: block;
  box-sizing: border-box;
  padding: 15px 8px;
  width: 100%;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a::after {
  content: "";
  display: block;
  clear: both;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_left {
  float: left;
  box-sizing: border-box;
  width: 23%;
  height: 75px;
  padding-right: 10px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_left
  .shop_img {
  display: block;
  width: 100%;
  height: 100%;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right {
  float: right;
  width: 77%;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header {
  *zoom: 1;
  width: 100%;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header::after {
  content: "";
  display: block;
  clear: both;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header
  .shop_title {
  float: left;
  width: 140px;
  color: #333;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header
  .shop_title::before {
  content: "品牌";
  display: inline-block;
  font-size: 11px;
  line-height: 11px;
  color: #333;
  background-color: #ffd930;
  padding: 2px 2px;
  border-radius: 2px;
  margin-right: 5px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header
  .shop_detail_ul {
  float: right;
  margin-top: 3px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header
  .shop_detail_ul
  .supports {
  float: left;
  font-size: 10px;
  color: #999;
  border: 1px solid #f1f1f1;
  padding: 0 2px;
  border-radius: 2px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order {
  *zoom: 1;
  width: 100%;
  margin-top: 18px;
  margin-bottom: 8px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order::after {
  content: "";
  display: block;
  clear: both;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left {
  float: left;
  color: #ff9a0d;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star {
  float: left;
  font-size: 0;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star
  .star-item {
  display: inline-block;
  background-repeat: no-repeat;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item {
  width: 20px;
  height: 20px;
  margin-right: 22px;
  background-size: 20px 20px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item:last-child {
  margin-right: 0;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item.on {
  background-image: url("./images/stars/star48_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-48
    .star-item.on {
    background-image: url("./images/stars/star48_on@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item.half {
  background-image: url("./images/stars/star48_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-48
    .star-item.half {
    background-image: url("./images/stars/star48_half@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item.off {
  background-image: url("./images/stars/star48_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-48
    .star-item.off {
    background-image: url("./images/stars/star48_off@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item {
  width: 15px;
  height: 15px;
  margin-right: 6px;
  background-size: 15px 15px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item:last-child {
  margin-right: 0;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item.on {
  background-image: url("./images/stars/star36_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-36
    .star-item.on {
    background-image: url("./images/stars/star36_on@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item.half {
  background-image: url("./images/stars/star36_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-36
    .star-item.half {
    background-image: url("./images/stars/star36_half@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item.off {
  background-image: url("./images/stars/star36_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-36
    .star-item.off {
    background-image: url("./images/stars/star36_off@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item {
  width: 10px;
  height: 10px;
  margin-right: 3px;
  background-size: 10px 10px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item:last-child {
  margin-right: 0;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item.on {
  background-image: url("./images/stars/star24_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-24
    .star-item.on {
    background-image: url("./images/stars/star24_on@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item.half {
  background-image: url("./images/stars/star24_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-24
    .star-item.half {
    background-image: url("./images/stars/star24_half@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item.off {
  background-image: url("./images/stars/star24_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  #app
    .content
    > div
    > section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-24
    .star-item.off {
    background-image: url("./images/stars/star24_off@3x.png");
  }
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .rating_section {
  float: left;
  font-size: 10px;
  color: #ff6000;
  margin-left: 4px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .order_section {
  float: left;
  font-size: 10px;
  color: #666;
  transform: scale(0.8);
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_right {
  float: right;
  font-size: 0;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_right
  .delivery_style {
  transform-origin: 35px 0;
  transform: scale(0.7);
  display: inline-block;
  font-size: 12px;
  padding: 1px;
  border-radius: 2px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_right
  .delivery_left {
  color: #fff;
  margin-right: -10px;
  background-color: #02a774;
  border: 1px solid #02a774;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_right
  .delivery_right {
  color: #02a774;
  border: 1px solid #02a774;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_distance {
  *zoom: 1;
  width: 100%;
  font-size: 12px;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_distance::after {
  content: "";
  display: block;
  clear: both;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_distance
  .shop_delivery_msg {
  float: left;
  transform-origin: 0;
  transform: scale(0.9);
  color: #666;
}
#app
  .content
  > div
  > section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_distance
  .segmentation {
  color: #ccc;
}

/* footer */
#app .footer_guide {
  position: relative;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
}
#app .footer_guide::before {
  content: '';
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
}
#app .footer_guide .guide_item {
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  color: #999;
}
#app .footer_guide .guide_item.on {
  color: #02a774;
}
#app .footer_guide .guide_item span {
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 2px;
}
#app .footer_guide .guide_item span .iconfont {
  font-size: 22px;
}

</style>
