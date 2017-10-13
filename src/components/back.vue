<template>
  <div class="back">
    <transition name="fade">
      <div class="back-top" v-show="show" @click="backTop">
        <div class="back-top-wrap">
          <span class="back-line back-line-first"></span>
          <span class="back-line back-line-middle"></span>
          <span class="back-line back-line-last"></span>
        </div>
      </div>
    </transition>
    <div class="back-to" v-if="showBack" @click="backTo">
      <div class="back-to-wrap">
        <span class="back-line back-line-first"></span>
        <span class="back-line back-line-middle"></span>
        <span class="back-line back-line-last"></span>
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
    // console.log(window.location.href)
    // console.log(this.$route)
    this.$router.beforeEach((to, from, next) => {
      if (to.path !== '/' && to.path !== '/archives' && to.path !== '/categories' && to.path !== '/tags' && to.path !== '/about' && to.path !== '*') {
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
    backTop () {
      let timer = setInterval(() => {
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
// @import '../assets/css/mixin.styl'
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to { /* .fade-leave-active in below version 2.1.8 */
  opacity: 0;
}

.back {
  .back-top {
    position: fixed;
    z-index: 999;
    top: 20%;
    right: 10%;
    padding: 5px;
    width: 30px;
    height: 30px;
    border-radius :100%
    background-color: #222;
    line-height: 0;
    cursor: pointer;

    .back-top-wrap {
      .back-line {
        position: relative;
        background-color: #fff;
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: 2px;
      }

      .back-line-first {
        width: 50%;
        top: 5px;
        right: -2px;
        transform: rotate(-45deg);
      }

      .back-line-middle {
        margin: 12px 0;
        transform: rotate(90deg);
      }

      .back-line-last {
        width: 50%;
        top: -23px;
        right: -13px;
        transform: rotate(45deg);
      }
    }
  }

  .back-to {
    position: fixed;
    z-index: 999;
    top: 10%;
    right: 10%;
    padding: 5px;
    width: 30px;
    height: 30px;
    border-radius :100%
    background-color: #222;
    line-height: 0;
    cursor: pointer;

    .back-to-wrap {
      .back-line {
        position: relative;
        background-color: #fff;
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: 2px;
      }

      .back-line-first {
        width: 50%;
        top :9px
        left :-2px
        transform: rotate(-45deg);
      }

      .back-line-middle {
        margin: 12px 0;
      }

      .back-line-last {
        width: 50%;
        top :-9px
        left :-2px
        transform: rotate(45deg);
      }
    }
  }
}
</style>
