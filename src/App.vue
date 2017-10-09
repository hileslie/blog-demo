<template>
  <div id="app">
    <v-nav></v-nav>
    <router-view class="main-view"></router-view>
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
.main-view{
  width :100%
  margin-top :10px
  word-wrap: break-word
  word-break: normal
  &>p:first-child{
    display :none
  }
}
</style>
