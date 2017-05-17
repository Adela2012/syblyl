<template>
  <div class="banner">
    <h1>{{title}}</h1>
    <p>{{text}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '百乐园林'
      },
      text: {
        type: String,
        default: '用心，用情，用智，精心培养每一棵植物!'
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
  .banner{
    text-align: center;
    width:100%;
    height:200px;
    overflow: hidden;
    background:url("http://www.syblyl.com/assets/banner-bar/banner-bar8.jpg") 50% 50% no-repeat;
    &.ban1{
      background:url("http://www.syblyl.com/assets/banner-bar/banner-bar1.jpg") 50% 50% no-repeat;
    }
    &.ban2{
      background:url("http://www.syblyl.com/assets/banner-bar/banner-bar2.jpg") 50% 50% no-repeat;
    }
    &.ban3{
      background:url("http://www.syblyl.com/assets/banner-bar/banner-bar3.jpg") 50% 50% no-repeat;
    }
    &.ban4{
      background:url("http://www.syblyl.com/assets/banner-bar/banner-bar4.jpg") 50% 50% no-repeat;
    }
    &.ban5{
      background:url("http://www.syblyl.com/assets/banner-bar/banner-bar5.jpg") 50% 50% no-repeat;
    }
    &.ban6{
      background:url("http://www.syblyl.com/assets/banner-bar/banner-bar6.jpg") 50% 50% no-repeat;
    }
    &.ban7{
      background:url("http://www.syblyl.com/assets/banner-bar/banner-bar7.jpg") 50% 50% no-repeat;
    }
    &.ban8{
      background:url("http://www.syblyl.com/assets/banner-bar/banner-bar8.jpg") 50% 50% no-repeat;
    }
    &.ban9{
      background:url("http://www.syblyl.com/assets/banner-bar/banner-bar9.jpg") 50% 50% no-repeat;
    }
    &.ban10{
      background:url("http://www.syblyl.com/assets/banner-bar/banner-bar10.jpg") 50% 50% no-repeat;
    }
    &.ban11{
      background:url("http://www.syblyl.com/assets/banner-bar/banner-bar11.jpg") 50% 50% no-repeat;
    }
    &.ban12{
      background:url("http://www.syblyl.com/assets/banner-bar/banner-bar12.jpg") 50% 50% no-repeat;
    }
    h1{
      color:#fff;
      margin:65px 0 20px 0;
      font-size: 28px;
      line-height: 28px;
    }
    p{
      color:rgba(255, 255, 255, 0.8);
      font-size:20px;
    }
  }
</style>
