<template>
  <div id="app">
    <v-header :company="company" ></v-header>
    <router-view></router-view>
    <v-footer :company="company" ></v-footer>
    <gotop></gotop>
  </div>
</template>

<script>
  import header from "components/header/header.vue"
  import footer from "components/footer/footer.vue"
  import gotop from "components/share/gotop/gotop.vue"
  import data from 'common/json/data.json'

  export default {
    data () {
      return {
        company: []
      }
    },
    methods: {
    },
    created() {
      this.company = data.company
    },
    components: {
      'v-header': header,
      'v-footer': footer,
      gotop
    }
  }
</script>

<style lang="less">
  @import "common/less/common.less";
  @import "common/less/reset.less";
  @import "common/less/fonts/iconfont.less";
  @import "common/less/base.less";
</style>
