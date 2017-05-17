<template>
  <div class="v-title">
    <div class="line"></div>
    <h1>{{title}}</h1>
    <div class="line"></div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '百乐园林'
      }
    },
    data () {
      return {
        
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "~common/less/common.less";
  .v-title{
    display:flex;
    position:relative;
    max-width:@w1;
    margin:50px auto;
    @h:26px;
    .line{
      diplay:inline-block;
      width:100%;
      height:1px;
      border-top:1px solid @line-color;
      margin-top:@h/2;
    }
    h1{
      flex:0 0 260px;
      display:inline-block;
      min-width:260px; 
      padding:0 10px;
      font-size:@h;
      line-height: @h;
      font-weight: 500;
      text-align: center;
      background:transparent;
      color: #333333;
    }
  }
</style>
