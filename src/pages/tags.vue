<template>
  <section class="tags">
    <div class="content-wrap">
      <div class="contents">
        <div class="content">
          <div class="collection-title">
            <h2 class="mg-left">标签</h2>
          </div>
          <div class="collection-content" v-for="(x, index) in tagsNames" :key="index">
            <router-link class="mg-left" :to="{ path: `/tags/${x}` }">{{x}} ({{tags[x].length}})</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      tagsNames: []
    }
  },
  created () {
    this.$store.dispatch('getTags')
    this.tagsNames = Object.keys(this.tags)
  },
  computed: {
    ...mapGetters([
      'tags'
    ])
  }
}
</script>
<style lang="stylus" scoped>
.tags {
  .content-wrap {
    position: relative;

    .contents {
      &:after {
        content: ' ';
        position: absolute;
        top: 15px;
        left: 0;
        margin-left: -2px;
        width: 4px;
        height: 100%;
        background: #f5f5f5;
        z-index: -1;
      }

      .content {
        .collection-title {
          position: relative;

          &:before {
            content: ' ';
            position: absolute;
            left: 0;
            top: 50%;
            margin-left: -4px;
            margin-top: -4px;
            width: 8px;
            height: 8px;
            background: #bbb;
            border-radius: 50%;
          }

          .mg-left {
            margin-left: 20px;
          }
        }

        .collection-content {
          margin: 20px 0;
          padding-bottom: 10px;
          border-bottom: 1px dashed #ccc;
          position: relative;

          &:before {
            content: ' ';
            position: absolute;
            left: 0;
            top: 5px;
            width: 6px;
            height: 6px;
            margin-left: -4px;
            background: #bbb;
            border-radius: 50%;
            border: 1px solid #fff;
          }

          &:hover {
            border-bottom-color: #666;
          }

          &:hover:before {
            background: #222;
          }

          a {
            cursor: pointer;
          }

          .mg-left {
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>
