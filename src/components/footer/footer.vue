<template>
  <div class="footer">
    <div class="top">
      <div class="top_bar">
        <span class="top_title">百乐介绍</span>
        <router-link to="/plants" class="top_text">植物种类</router-link>
        <router-link to="/rent" class="top_text">花卉租赁</router-link>
        <router-link to="/design" class="top_text">设计施工</router-link>
        <router-link to="/about" class="top_text">苗木基地</router-link>
        <router-link to="/about" class="top_text">门店销售</router-link>
        <router-link to="/contact" class="top_text">联系我们</router-link>  
      </div>
      <div class="top_bar">
        <span class="top_title">花圃地址</span>
        <span class="top_text">浙江省绍兴市上虞区百官街道施家堰村百乐园林基地（近百崧河）</span>
      </div>
      <div class="top_bar">
        <span class="top_title">店铺地址</span>
        <span class="top_text">浙江省绍兴市上虞区上虞市花鸟市场5-6店面</span>
      </div>
      <div class="top_right">
        <div class="text">热线电话</div>
        <div class="phone">13967526622&nbsp;|&nbsp;18967590205</div>
        <div class="text">24小时在线</div>
      </div>
      

    </div>
    <div class="bottom">
     <p>Copyright © 2017 绍兴上虞百乐园林有限公司(syblyl.com)版权所有</p> 
     <!-- <p>浙B2-201500xx号 浙ICP备120223xx号 </p> -->
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
      position:relative;
      padding:20px 0 ;
      border-bottom:1px solid #aaa;
      .top_bar{
        margin-top:20px;
        &:nth-child(1){
          margin-top:0;
        }
        .top_title{
          font-size:16px;
          font-weight: 700;
        }
        .top_text{
          color:@gray-light;
          margin-left:20px;
          font-size: 14px;
        }
        a:hover{
          color:#fff;
        }
      }
      .top_right{
        position:absolute;
        right:0;
        top:15px;
        line-height: 26px;
        .text{
          font-size:12px;
          text-align: right;
          padding-right:18px;
        }
        .phone{
          @h:48px;
          font-size:16px;
          border:1px solid @gray-light;
          border-radius: 30px;
          height:@h;
          line-height: @h;
          width:236px;
          text-align: center;
        }
      }
    }
    .bottom{
      padding:20px;
      line-height: 24px;
      font-size:14px;
      text-align: center;
    }
  } 
</style>
