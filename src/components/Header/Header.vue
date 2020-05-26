<template>
  <!--首页头部-->
  <header class="msite_header">
    <slot name="left">
      <!-- <span class="header_search" >
              <i class="iconfont icon-sousuo"></i> -->
      <!-- </span> -->
    </slot>
    <slot>
       <!-- <span class="header_title">
        <span class="header_title_text ellipsis"></span> </span> -->
    </slot>
    <slot name="right">
      <!-- <span class="header_login">
              <span class="header_login_text">登录|注册</span>
            </span> -->
    </slot>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style scoped></style>
