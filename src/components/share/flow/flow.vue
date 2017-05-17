<template>
  <div class="flowbar">
    <div  v-for="item in disbar" class="flow">
      <div class="iconfont" :class="item.icon"></div>
      <div class="desc">
        <h4>{{item.title}}</h4>
        <p>{{item.text}}</p>
      </div> 
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      disbar:{
        type: Array
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "~common/less/common.less";
  .flowbar{
    padding:0 0 50px;
    max-width:@w1;
    margin:0 auto;
    display:flex;
    align-items: center;
    .flow{
      flex:1;
      text-align: center;
      .iconfont{
        @h:60px;
        color:@text-light;
        font-size:@h;
        width:@h;
        height:@h;
        line-height: @h;
        vertical-align: top;
        margin:0 auto;
      }
      .desc{
        h4{
          font-size: 18px;
          line-height: 18px;
          margin-bottom:10px;
          margin-top:10px;
        }
        p{
          font-size: 14px;
          color:@text-light;
          line-height: 20px;
        }
      }
    }    
  }
</style>
