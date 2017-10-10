<template>
  <div class="back-to-top" v-show="show">
    <div class="arrow-outer">
      <div class="arrow-shadow" @click="backToTop"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.menu)
  },
  methods: {
    backToTop () {
      let timer = setInterval(function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let ispeed = Math.floor(-scrollTop / 6)
        if (scrollTop === 0) {
          clearInterval(timer)
        }
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed
      }, 30)
    },
    menu () {
      this.scroll = document.body.scrollTop
      if (this.scroll > 56) {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.back-to-top{
  position :fixed
  z-index :999
  bottom :10%
  right :10%
  .arrow-outer{
    width :45px
    height :24px
    overflow :hidden
    .arrow-shadow{
      width :20px
      height :20px
      border: 1px solid #dddddd
      transform :rotate(45deg)
      -ms-transform :rotate(45deg)
      -webkit-transform :rotate(45deg)
      -webkit-box-shadow:0 0 10px 0 #00c853
      margin-left :10px
      margin-top :13px
      background-color :#00c853
    }
  }
}
</style>
