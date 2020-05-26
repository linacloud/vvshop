<template>
    <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item " :class="{on:'/home'===$route.path}" @click="$router.replace('/home')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/search'===$route.path}" @click="$router.replace('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/order'===$route.path}" @click="$router.replace('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:'/profile'===$route.path}"  @click="$router.replace('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    title: String
  },
  created () {
    console.log(this)
    console.log(this.title)
  },
  methods: {

  }
}
</script>

<style  scope>

</style>
