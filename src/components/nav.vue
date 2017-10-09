<template>
  <nav class="top-nav">
    <div class="main-nav">
      <router-link class="sub-nav" to="/">首页</router-link>
      <a class="sub-nav">标签</a>
      <router-link class="sub-nav" to="/about">关于</router-link>
    </div>
  </nav>
</template>
<style lang="stylus" scoped>
@import '../assets/css/mixin.styl'
.top-nav{
  background-color :#474a4f
  width :100%
  min-height :56px
  line-height :56px
  box-shadow: 0px 1px 10px #888888
  transition(all,.5s,ease)
  &:hover{
    box-shadow: 0px 3px 10px #888888
  }
  .main-nav{
    max-width :1024px
    margin:0 auto
    .sub-nav{
      display :inline-block
      padding: 0 10px
      font-size :1.4rem
      color :#fff
    }
  }
}
</style>
