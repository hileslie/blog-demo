<template>
  <div class="back">
    <div class="back-to-top" v-show="show">
      <div class="arrow-outer">
        <div class="arrow-shadow" @click="backToTop"></div>
      </div>
    </div>
    <div class="back-to" v-if="showBack">
      <div class="arrow-outer">
        <div class="arrow-shadow" @click="backTo"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import routes from '@src/router/index'
// const Routes = routes.options.routes
export default {
  data () {
    return {
      show: false,
      showBack: false
    }
  },
  created () {
    // Routes.forEach((value, index) => {
    //   console.log(value.path === '/')
    //   if (value.path !== '/' && value.path !== '/about' && value.path !== '*') {
    //     this.showBack = true
    //   }
    // })
    // console.log(window.location.href)
    console.log(this.$route)
    this.$router.beforeEach((to, from, next) => {
      if (to.path !== '/' && to.path !== '/about' && to.path !== '*') {
        this.showBack = true
      } else {
        this.showBack = false
      }
      next()
    })
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
    },
    backTo () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.back {
  .back-to-top {
    position: fixed;
    z-index: 999;
    bottom: 10%;
    right: 10%;

    .arrow-outer {
      width: 45px;
      height: 24px;
      overflow: hidden;

      .arrow-shadow {
        width: 30px;
        height: 30px;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -webkit-box-shadow: 0 0 10px 0 #00c853;
        margin-left: 10px;
        margin-top: 13px;
        background-color: #00c853;
      }
    }
  }
  .back-to {
    position: fixed;
    z-index: 999;
    top: 10%;
    right: 10%;
    .arrow-outer {
      width: 23px;
      height: 45px;
      overflow: hidden;
      .arrow-shadow {
        width: 30px;
        height: 30px;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        -webkit-box-shadow: 0 0 5px 0 #00c853;
        margin-top :8px
        margin-left :8px
        background-color: #00c853;
      }
    }
  }
}
</style>
