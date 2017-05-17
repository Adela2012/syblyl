<template>
  <div class="footer">
    <div class="top"></div>
    <div class="bottom">
     <p>Copyright © 2011-2017 上虞百乐园林有限公司(syblyl.com)版权所有</p> 
     <p>浙B2-201500xx号 浙ICP备120223xx号 </p>
    </div>
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
  .footer{
    width:100%;
    background:#475669;
    color:@gray-light;
    .bottom,.top{
      margin:0 auto;
      max-width:@w1;
    }
    .top{

    }
    .bottom{
      padding:20px;
      line-height: 24px;
      font-size:14px;
      text-align: center;
    }
  } 
</style>
