<template>
  <div class="demo">
    <!-- banner -->
    <banner :text="text" :title="title" :class="{ban4: true}"></banner>
    <div>
      <Xtitle ></Xtitle>
    </div>
  </div>
</template>

<script>
  import banner from "components/share/banner/banner.vue"
  import Xtitle from "components/share/Xtitle/Xtitle.vue"
  export default {
    data () {
      return {
        
      }
    },
    components: {
      banner,
      Xtitle,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
