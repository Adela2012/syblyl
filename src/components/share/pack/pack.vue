<template>
  <div class="pack">
    <ul class="group">
      <li v-for="item in pack">
        <h1 class="title">{{item.name}}</h1>
        <p class="text">适合{{item.space}}面积</p>
        <div class="iconfont" :class="item.icon"></div>
        <p class="price">价格：<span>{{item.price}}元</span>/月</p>
        <p class="info">套餐内包括<span>{{item.count}}</span>盆绿植</p>
        <router-link to="/contact" tag="button">联系我们</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import data from 'common/json/data.json'

  export default {
    data () {
      return {
        pack: [],
      }
    },
    created() {
      this.pack = data.pack
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~common/less/common.less";
.pack{
  padding:0 10px;
  .group{
    display:flex;
    max-width:@w1;
    font-size:0;
    margin:0 auto;
    li{
      text-align: center;
      flex:1;
      display:inline-block;
      border: 1px solid @line-color;
      font-size:14px;
      padding:38px 20px 30px;
      transition:all 0.5s ease;
      margin-left:-1px;
      &:nth-child(1){margin-left:0}
      &:hover,&.active{
        z-index: 100;
        margin-top:-5px;
        border:1px solid @primary;
        box-shadow: 0 2px 14px 4px overlay(@primary,#eee);
        .title{
          color:overlay(@primary,#333);
        }
        button{
          background: overlay(@primary,#555);
          color:#fff;
        }
      }
      .title{
        font-size:20px;
        font-weight: 700px;
        color:@text;
        margin-bottom:10px;
      }
      .text{
        font-size: 14px;
        color:@text-light;
      }
      .iconfont{
        line-height:70px;
        font-size:50px;
        color:@primary;
        margin:20px auto;
        width:70px;
        height:70px;
        border-radius: 50%;
        border: 2px solid @primary;
        background:overlay(@primary,#eee);
      }
      .price,.info{
        line-height: 28px;
        span{
          font-size:20px;
          color:@primary;
        }
      }
      button{
        display:block;
        line-height: 34px;
        text-align: center;
        background: overlay(@primary,#fafafa);
        border: 1px solid #e4e4e4;
        border-radius: 2px;
        padding: 0 6px;
        width: 120px;
        height: 36px;
        margin:20px auto 0;
        cursor:pointer;
        font-family: "Microsoft Yahei", "微软雅黑";
        color:@text;
      }
    }
  }
}
</style>
