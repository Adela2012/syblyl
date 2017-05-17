<template>
  <div class="gotop">
  <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=787969084&site=qq&menu=yes"title="点击这里给我发消息">
    <div class="help">
      <i class="iconfont icon-QQ"></i>
      <p>客服</p>
    </div>
    </a>
    <div class="go" @click="gotop()">
      <div class="icon">
        <i class="el-icon-arrow-up"></i>
      </div>
      <div class="text">
        返回<br>顶部
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      gotop(){
        if( document.getElementById("dialogo") && (document.getElementById("dialogo").style.display != "none"))
          {document.getElementsByClassName("el-dialog")[0].scrollTop =0;}
        else
          {document.documentElement.scrollTop = document.body.scrollTop =0;}
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .gotop{
    @h:50px;
    @s:26px;
    position:fixed;
    bottom:100px;
    right:0;
    z-index:2500;
    .help{
      &:hover{
        background:#28354a;
      }
      width:@h;
      background:#28354a;
      color:#fff;
      padding:12px 0 10px;
      text-align: center;
      cursor:pointer;
      border-radius: 5px 0 0 5px;
      margin-bottom:10px;
      .iconfont{
        font-size:@s;
        vertical-align: top;
        line-height: @s;
      }
      p{
        font-size:14px;
        margin-top:10px;
      }
    }
    .go{
      &:hover{
        background:#28354a;
        .icon{
          margin-top:-@h;
        }
      }
      overflow:hidden;
      width:@h;
      height:@h;
      background:#88909a;
      color:#fff;
      font-size:@s;
      line-height: @h;
      text-align: center;
      cursor:pointer;
      border-radius: 5px 0 0 5px;
      div{
        width:@h;
        height:@h;
        transition:all 0.5s ease;
      }
      .text{
        font-size:12px;
        line-height: @h/3;
        padding:@h/5 0;
      }
    }

  }
</style>
