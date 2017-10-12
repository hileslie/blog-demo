<template>
  <div id="app">
    <v-nav></v-nav>
    <section class="main">
      <transition name="fade">
        <router-view class="main-view"></router-view>
      </transition>
    </section>
    <v-back></v-back>
  </div>
</template>

<script>
import Back from '@components/back'
import Nav from '@components/nav'
export default {
  name: 'app',
  components: {
    'v-nav': Nav,
    'v-back': Back
  }
}
</script>

<style lang="stylus">
@import './assets/css/markdown.styl'

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}

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
