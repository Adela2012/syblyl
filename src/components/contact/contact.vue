<template>
  <div class="contact">
    <banner :text="text" :title="title" class="ban11"></banner>
    <div class="bg-wrapper">
      <div class="contactus">
        <ul>
          <li>公司名称：上虞市百乐园林工程有限公司</li>
          <li>热线电话：13967526622&nbsp;|&nbsp;18967590205</li>
          <li>邮箱地址：787969084@qq.com</li>
          <li>客服QQ：787969084</li>
          <li>店铺地址：浙江省绍兴市上虞区上虞市花鸟市场5-6店面</li>
          <li>花圃地址：浙江省绍兴市上虞区百官街道施家堰村百乐园林基地（近百崧河）</li>
        </ul>
        <div class="img">
          <img src="http://www.syblyl.com/assets/about/contact.jpg" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import banner from "components/share/banner/banner.vue"
  import data from 'common/json/data.json'

  export default {
    data () {
      return {
        title: '联系我们',
        text:'赶快加入百乐花园，开启绿色生活吧！'
      }
    },
    methods: {

    },
    created() {

    },
    components: {
      banner
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~common/less/common.less";
  .contact{
    .contactus{
      margin:0 auto;
      width:@w1;
      padding:50px 40px;
      display:flex;
      .img{
        flex:0 0 300px;
        width:300px;
        height:250px;
        border-radius:50%;
        overflow:hidden;
        margin-right:100px;
        img{
          width:300px;
          height:250px;
        }
      }
      ul{
        flex:1;
        margin-left:200px;
        li{
          line-height: 45px;
          font-size:16px;
          list-style-type: circle;
        }
      }
    }
  }

</style>
