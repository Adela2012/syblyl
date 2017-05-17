<template>
  <div class="disbar">
    <div  v-for="item in disbar" class="dis">
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
    data () {
      return {
        disbar:[
          {
            "title": "送货上门",
            "text": "租赁套餐，专人送货上门",
            "icon": "icon-fahuo"
          },
          {
            "title": "免费更换",
            "text": "期间植物死亡，免费更换",
            "icon": "icon-zuiretaocan"
          },
          {
            "title": "每周养护",
            "text": "提供每周上门精心养护",
            "icon": "icon-planttime"
          },
          {
            "title": "设计规划",
            "text": "设计师免费上门服务规划",
            "icon": "icon-sheji"
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "~common/less/common.less";
  .disbar{
    padding:50px 0;
    max-width:@w1;
    margin:0 auto;
    display:flex;
    align-items: center;
    .dis{
      flex:1;
      display:flex;
      align-items: center;
      .iconfont{
        @h:60px;
        flex: 0 0 @h+15;
        font-size:@h;
        display: inline-block;
        width:@h;
        height:@h;
        line-height: @h;
        vertical-align: top;
      }
      .desc{
        flex:1;
        display:inline-block;
        h4{
          font-size: 18px;
          line-height: 18px;
          margin-bottom:10px;
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
