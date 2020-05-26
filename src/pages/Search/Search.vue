<template>
   <!--搜索-->
<div id="app">
  <div class="content">
    <div>
      <section class="search">
           <!-- 头部封装组件 -->
            <Header>
              <span class="header_title">
             <span class="header_title_text ellipsis">搜索</span> </span>
            </Header>
        <form class="search_form" action="#">
          <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
          <input type="submit" name="submit" class="search_submit">
        </form>
      </section>
    </div>
  </div>
    <Footer title="Search"></Footer>

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
#app .content > div > section.search .msite_header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
#app .content > div > section.search .msite_header .header_search {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 50%;
}
#app .content > div > section.search .msite_header .header_search .icon-sousuo {
  font-size: 25px;
  color: #fff;
}
#app .content > div > section.search .msite_header .header_title {
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
#app .content > div > section.search .msite_header .header_login {
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

/* search */
#app .content >div >section.search {
  width: 100%;
}
#app .content >div >section.search .search_form {
  *zoom: 1;
  margin-top: 45px;
  background-color: #fff;
  padding: 12px 8px;
}

#app .content >div >section.search .search_form::after {
  content: '';
  display: block;
  clear: both;
}
#app .content >div >section.search .search_form input {
  height: 35px;
  padding: 0 4px;
  border-radius: 2px;
  font-weight: bold;
  outline: none;
}
#app .content >div >section.search .search_form input.search_input {
  float: left;
  width: 79%;
  border: 4px solid #f2f2f2;
  font-size: 14px;
  color: #333;
  background-color: #f2f2f2;
}
#app .content >div >section.search .search_form input.search_submit {
  float: right;
  width: 18%;
  border: 4px solid #02a774;
  font-size: 16px;
  color: #fff;
  background-color: #02a774;
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
