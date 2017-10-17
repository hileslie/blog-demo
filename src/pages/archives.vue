<template>
  <section class="archives">
    归档
    {{archives}}
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  created () {
    this.$store.dispatch('getArchives')
    var arr = Object.keys(this.archives)
    var len = arr.length
    console.log(len)
  },
  computed: {
    ...mapGetters([
      'archives'
    ])
  }
}
</script>

