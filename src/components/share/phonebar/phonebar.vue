<template>
  <div class="phonebar">
    <p><i class="iconfont icon-fangan"></i>开启绿色生活，请拨打热线电话：13967526622</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "~common/less/common.less";
  .phonebar{
    // max-width:@w1;
    // margin:0 auto;
    width:100%;
    background:url('../../../assets/bg/bg4.jpg') 50% 20% no-repeat;
    p{
    padding:30px 0;
      height:50px;
      background-color:rgba(0,0,0,0.4);
      line-height:50px;
      color:#fff;
      // color:overlay(@primary, #000);
      font-size:28px;
      text-align: center;

      i{
        font-size:38px; 
        margin-right:20px;
      }
    }
  }
</style>
