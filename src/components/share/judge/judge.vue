<template>
  <div class="judge">
    <el-row :gutter="30">
      <el-col :xs="24" :sm="12" :md="12" v-for="item in judge">
        <div class="item">
          <div class="avatar">
            <img :src="item.avatar" alt="">
          </div>
          <div class="desc">
            <h3 class="title">{{item.name}}<span>面积：{{item.area}}㎡</span></h3>
            <div class="info">已{{item.type}}{{item.count}}盆百乐高端植物</div>
            <div class="text">{{item.text}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import data from 'common/json/data.json'

  export default {
    data () {
      return {
        judge:[],
      }
    },
    created() {
      this.judge = data.judge
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "~common/less/common.less";
  .judge{
    margin: 0 auto 50px;
    max-width: @w1;
    padding:0 10px;
    .item{
      width:100%;
      border:1px solid @line-color;
      display:flex;
      margin-bottom:30px;
      padding:30px;
      box-sizing: border-box;
      .avatar{
        flex: 0 0 100px;
        width:100px;
        height:100px;
        border-radius: 50%;
        overflow:hidden;
        display:inline-block;
        img{
          width:100%;
          height:100%;
        }
      }
      .desc{
        display:inline-block;
        margin-left:30px;
        height:120px;
        overflow:hidden;
        .title{
          font-size:18px;
          line-height: 18px;
          font-weight: 700;
          margin:5px 0 10px;
          span{
            margin-left:10px;
            font-size:14px;
            line-height: 18px;
            padding: 0 5px;
            background:@primary;
            color:#fff;
            border-radius: 4px;
          }
        }
        .info{
          font-size:14px;
          line-height: 14px;
          margin-bottom:5px;
          color:@text-light;
        }
        .text{
          font-size:14px;
          line-height: 24px;
          .line(3);
        }
      }
    }
  }
</style>
