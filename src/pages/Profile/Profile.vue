<template>
 <div id="app">
   <div class="content">
      <!--我的-->
    <div>
      <section class="profile">
      <Header>
          <a class="header_title">
            <span class="header_title_text">我的</span>
          </a>
        </Header>
        <section class="profile-number">
          <router-link  class="profile-link" to="/login">
            <div class="profile_image">
              <i class="iconfont icon-person"></i>
            </div>
            <div class="user-info">
              <p class="user-info-top">登录/注册</p>
              <p>
                <span class="user-icon">
                  <i class="iconfont icon-shouji icon-mobile"></i>
                </span>
                <span class="icon-mobile-number">暂无绑定手机号</span>
              </p>
            </div>
            <span class="arrow">
              <i class="iconfont icon-jiantou1"></i>
            </span>
          </router-link>
        </section>
        <section class="profile_info_data border-1px">
          <ul class="info_data_list">
            <a href="javascript:" class="info_data_link">
              <span class="info_data_top"><span>0.00</span>元</span>
              <span class="info_data_bottom">我的余额</span>
            </a>
            <a href="javascript:" class="info_data_link">
              <span class="info_data_top"><span>0</span>个</span>
              <span class="info_data_bottom">我的优惠</span>
            </a>
            <a href="javascript:" class="info_data_link">
              <span class="info_data_top"><span>0</span>分</span>
              <span class="info_data_bottom">我的积分</span>
            </a>
          </ul>
        </section>
        <section class="profile_my_order border-1px">
          <!-- 我的订单 -->
          <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-order-s"></i>
            </span>
            <div class="my_order_div">
              <span>我的订单</span>
              <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
            </div>
          </a>
          <!-- 积分商城 -->
          <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-jifen"></i>
            </span>
            <div class="my_order_div">
              <span>积分商城</span>
              <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
            </div>
          </a>
          <!-- 硅谷外卖会员卡 -->
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-vip"></i>
            </span>
            <div class="my_order_div">
              <span>硅谷外卖会员卡</span>
              <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
            </div>
          </a>
        </section>
        <section class="profile_my_order border-1px">
          <!-- 服务中心 -->
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-fuwu"></i>
            </span>
            <div class="my_order_div">
              <span>服务中心</span>
              <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
            </div>
          </a>
        </section>
      </section>
    </div>
   </div>
     <Footer title="Profile"></Footer>

 </div>
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  },
  components: {
    Header,
    Footer
  }
}
</script>

<style  >

/* header */
#app .content > div > section.profile .msite_header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
#app .content > div > section.profile .msite_header .header_search {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 50%;
}
#app .content > div > section.profile .msite_header .header_search .icon-sousuo {
  font-size: 25px;
  color: #fff;
}
#app .content > div > section.profile .msite_header .header_title {
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
#app .content > div > section.profile .msite_header .header_login {
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

/* profile */
#app .content >div >section.profile {
  width: 100%;
}
#app .content >div >section.profile .profile-number {
  margin-top: 45.5px;
}
#app .content >div >section.profile .profile-number .profile-link {
  *zoom: 1;
  position: relative;
  display: block;
  background: #02a774;
  padding: 20px 10px;
}
#app .content >div >section.profile .profile-number .profile-link::after {
  content: '';
  display: block;
  clear: both;
}
#app .content >div >section.profile .profile-number .profile-link .profile_image {
  float: left;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: top;
}
#app .content >div >section.profile .profile-number .profile-link .profile_image .icon-person {
  background: #e4e4e4;
  font-size: 62px;
}
#app .content >div >section.profile .profile-number .profile-link .user-info {
  float: left;
  margin-top: 8px;
  margin-left: 15px;
}
#app .content >div >section.profile .profile-number .profile-link .user-info p {
  font-weight: 700;
  font-size: 18px;
  color: #fff;
}
#app .content >div >section.profile .profile-number .profile-link .user-info p.user-info-top {
  padding-bottom: 8px;
}
#app .content >div >section.profile .profile-number .profile-link .user-info p .user-icon {
  display: inline-block;
  margin-left: -15px;
  margin-right: 5px;
  width: 20px;
  height: 20px;
}
#app .content >div >section.profile .profile-number .profile-link .user-info p .user-icon .icon-mobile {
  font-size: 30px;
  vertical-align: text-top;
}
#app .content >div >section.profile .profile-number .profile-link .user-info p .icon-mobile-number {
  font-size: 14px;
  color: #fff;
}
#app .content >div >section.profile .profile-number .profile-link .arrow {
  width: 12px;
  height: 12px;
  position: absolute;
  right: 15px;
  top: 40%;
}
#app .content >div >section.profile .profile-number .profile-link .arrow .icon-jiantou1 {
  color: #fff;
  font-size: 5px;
}
#app .content >div >section.profile .profile_info_data {
  position: relative;
  width: 100%;
  background: #fff;
  overflow: hidden;
}
#app .content >div >section.profile .profile_info_data::before {
  content: '';
  position: absolute;
  z-index: 200;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  transform: scaleY(0.5);
}
#app .content >div >section.profile .profile_info_data .info_data_list {
  *zoom: 1;
}
#app .content >div >section.profile .profile_info_data .info_data_list::after {
  content: '';
  display: block;
  clear: both;
}
#app .content >div >section.profile .profile_info_data .info_data_list .info_data_link {
  float: left;
  width: 33%;
  text-align: center;
  border-right: 1px solid #f1f1f1;
}
#app .content >div >section.profile .profile_info_data .info_data_list .info_data_link .info_data_top {
  display: block;
  width: 100%;
  font-size: 14px;
  color: #333;
  padding: 15px 5px 10px;
}
#app .content >div >section.profile .profile_info_data .info_data_list .info_data_link .info_data_top span {
  display: inline-block;
  font-size: 30px;
  color: #f90;
  font-weight: 700;
  line-height: 30px;
}
#app .content >div >section.profile .profile_info_data .info_data_list .info_data_link .info_data_bottom {
  display: inline-block;
  font-size: 14px;
  color: #666;
  font-weight: 400;
  padding-bottom: 10px;
}
#app .content >div >section.profile .profile_info_data .info_data_list .info_data_link:nth-of-type(2) .info_data_top span {
  color: #ff5f3e;
}
#app .content >div >section.profile .profile_info_data .info_data_list .info_data_link:nth-of-type(3) {
  border: 0;
}
#app .content >div >section.profile .profile_info_data .info_data_list .info_data_link:nth-of-type(3) .info_data_top span {
  color: #6ac20b;
}
#app .content >div >section.profile .profile_my_order {
  position: relative;
  margin-top: 10px;
  background: #fff;
}
#app .content >div >section.profile .profile_my_order::before {
  content: '';
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
}
#app .content >div >section.profile .profile_my_order .my_order {
  display: flex;
  align-items: center;
  padding-left: 15px;
}
#app .content >div >section.profile .profile_my_order .my_order >span {
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
}
#app .content >div >section.profile .profile_my_order .my_order >span >.iconfont {
  margin-left: -10px;
  font-size: 30px;
}
#app .content >div >section.profile .profile_my_order .my_order >span .icon-order-s {
  color: #02a774;
}
#app .content >div >section.profile .profile_my_order .my_order >span .icon-jifen {
  color: #ff5f3e;
}
#app .content >div >section.profile .profile_my_order .my_order >span .icon-vip {
  color: #f90;
}
#app .content >div >section.profile .profile_my_order .my_order >span .icon-fuwu {
  color: #02a774;
}
#app .content >div >section.profile .profile_my_order .my_order .my_order_div {
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: 18px 10px 18px 0;
  font-size: 16px;
  color: #333;
  display: flex;
  justify-content: space-between;
}
#app .content >div >section.profile .profile_my_order .my_order .my_order_div span {
  display: block;
}
#app .content >div >section.profile .profile_my_order .my_order .my_order_div .my_order_icon {
  width: 10px;
  height: 10px;
}
#app .content >div >section.profile .profile_my_order .my_order .my_order_div .my_order_icon .icon-jiantou1 {
  color: #bbb;
  font-size: 10px;
}
#app >.off {
  display: none;
}
#app >.on {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
}
#app >.on .loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;
}
#app >.on .loginContainer .loginInner {
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}
#app >.on .loginContainer .loginInner .login_header .login_logo {
  font-size: 40px;
  font-weight: bold;
  color: #02a774;
  text-align: center;
}
#app >.on .loginContainer .loginInner .login_header .login_header_title {
  padding-top: 40px;
  text-align: center;
}
#app >.on .loginContainer .loginInner .login_header .login_header_title >a {
  color: #333;
  font-size: 14px;
  padding-bottom: 4px;
}
#app >.on .loginContainer .loginInner .login_header .login_header_title >a:first-child {
  margin-right: 40px;
}
#app >.on .loginContainer .loginInner .login_header .login_header_title >a.on {
  color: #02a774;
  font-weight: 700;
  border-bottom: 2px solid #02a774;
}
#app >.on .loginContainer .loginInner .login_content >form >div {
  display: none;
}
#app >.on .loginContainer .loginInner .login_content >form >div.on {
  display: block;
}
#app >.on .loginContainer .loginInner .login_content >form >div input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}
#app >.on .loginContainer .loginInner .login_content >form >div input:focus {
  border: 1px solid #02a774;
}
#app >.on .loginContainer .loginInner .login_content >form >div .login_message {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
#app >.on .loginContainer .loginInner .login_content >form >div .login_message .get_verification {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: 0;
  color: #ccc;
  font-size: 14px;
  background: transparent;
}
#app >.on .loginContainer .loginInner .login_content >form >div .login_verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}
#app >.on .loginContainer .loginInner .login_content >form >div .login_verification .switch_button {
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s, border-color 0.3s;
  padding: 0 6px;
  width: 30px;
  height: 16px;
  line-height: 16px;
  color: #fff;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
#app >.on .loginContainer .loginInner .login_content >form >div .login_verification .switch_button.off {
  background: #fff;
}
#app >.on .loginContainer .loginInner .login_content >form >div .login_verification .switch_button.off .switch_text {
  float: right;
  color: #ddd;
}
#app >.on .loginContainer .loginInner .login_content >form >div .login_verification .switch_button.on {
  background: #02a774;
}
#app >.on .loginContainer .loginInner .login_content >form >div .login_verification .switch_button >.switch_circle {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 16px;
  height: 16px;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  transition: transform 0.3s;
}
#app >.on .loginContainer .loginInner .login_content >form >div .login_hint {
  margin-top: 12px;
  color: #999;
  font-size: 14px;
  line-height: 20px;
}
#app >.on .loginContainer .loginInner .login_content >form >div .login_hint >a {
  color: #02a774;
}
#app >.on .loginContainer .loginInner .login_content >form .login_submit {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #4cd96f;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  border: 0;
}
#app >.on .loginContainer .loginInner .login_content .about_us {
  display: block;
  font-size: 12px;
  margin-top: 20px;
  text-align: center;
  color: #999;
}
#app >.on .loginContainer .loginInner .go_back {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 30px;
  height: 30px;
}
#app >.on .loginContainer .loginInner .go_back >.iconfont {
  font-size: 20px;
  color: #999;
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
