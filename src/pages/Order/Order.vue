<template>
<div id="app">
  <div class="content">
      <!--订单-->
    <div>
      <section class="order">
       <Header>
          <span class="header_title">
             <span class="header_title_text ellipsis">订单</span> </span>
       </Header>
        <section class="order_no_login">
          <img src="./images/order/person.png">
          <h3>登录后查看外卖订单</h3>
          <button>立即登陆</button>
        </section>
      </section>
    </div>
  </div>
    <!-- footer组件封装 -->
  <Footer title="order"></Footer>

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

<style >

/* header */
#app .content > div > section.order .msite_header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
#app .content > div > section.order .msite_header .header_search {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 50%;
}
#app .content > div > section.order .msite_header .header_search .icon-sousuo {
  font-size: 25px;
  color: #fff;
}
#app .content > div > section.order .msite_header .header_title {
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
#app .content > div > section.order .msite_header .header_login {
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
/* order */
/* 订单 */
#app .content >div >section.order {
  width: 100%;
}
#app .content >div >section.order .order_no_login {
  padding-top: 140px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
#app .content >div >section.order .order_no_login >img {
  display: block;
  width: 100%;
  height: 30%;
}
#app .content >div >section.order .order_no_login >h3 {
  padding: 10px 0;
  font-size: 17px;
  color: #6a6a6a;
}
#app .content >div >section.order .order_no_login >button {
  display: inline-block;
  background: #02a774;
  font-size: 14px;
  color: #fff;
  border: 0;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
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
