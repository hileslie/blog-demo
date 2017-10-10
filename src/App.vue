<template>
  <div id="app">
    <v-nav></v-nav>
    <section class="main">
      <router-view class="main-view"></router-view>
    </section>
  </div>
</template>

<script>
import nav from '@components/nav'
export default {
  name: 'app',
  components: {
    'v-nav': nav
  }
}
</script>

<style lang="stylus">
@import './assets/css/markdown.styl'

.main{
  max-width :1024px
  margin :10px auto
  padding: 0 10px
  .main-view{
    box-sizing: border-box;
    box-shadow: 0 3px 12px rgba(0,0,0,.3)
    word-wrap: break-word
    word-break: normal
    padding : 10px
    &>p:first-child{
      display :none
    }
    img{
      width :100%
    }
  }
}
</style>
