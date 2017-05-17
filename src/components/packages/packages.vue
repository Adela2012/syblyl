<template>
  <div class="packages">
    <!-- banner -->
    <banner :text="text" :title="title" :class="{ban4: true}"></banner>
    <!-- 特惠套餐 -->
    <Xtitle :title="aXtitle"></Xtitle>
    <ul class="group">
      <li v-for="(item,index) in pack"  :class="{active:index === activeIndex}">
        <h1 class="title">{{item.name}}</h1>
        <p class="text">适合{{item.space}}面积</p>
        <div class="iconfont icon-garden2"></div>
        <p class="price">价格：<span>{{item.price}}元</span>/月</p>
        <p class="info">套餐内包括<span>{{item.count}}</span>盆绿植</p>
        <button  @click="show(index)">查看详情</button>
      </li>
    </ul>
    <!-- 百乐承诺 -->
    <div class="well">
      <strong class="green f16">百乐承诺</strong>：
      在租赁过程中，植物出现死亡，请拨打我们的热线电话，我们最快会在24小时内更换植物，确保用户环境的良好视觉效果！
    </div>
    <!-- 套餐详情 -->
    <Xtitle :title="bXtitle"></Xtitle>
    <div class="well">
      <strong class="green f16">套餐清单</strong>：
      <span v-for="item in showpack" class="item-text">{{item.name}}&nbsp;({{item.count}}盆)</span>
    </div>
    <div class="cards">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in showpack" >
          <div class="card">
            <div class="img">
              <img :src="item.pic" alt="">
            </div>
            <div class="info">
              <h1 class="title">{{item.name}}&nbsp;({{item.count}}盆)&nbsp;</h1>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 承诺说明 -->
    <div class="dis-bar">
      <disbar></disbar>
    </div>
  </div>
</template>

<script>
  import banner from "components/share/banner/banner.vue"
  import Xtitle from "components/share/Xtitle/Xtitle.vue"
  import disbar from "components/share/disbar/disbar.vue"
  import data from 'common/json/data.json'

  export default {
    data () {
      return {
        text: '任何（面积,环境）都可进行高端定制，我们的设计师将会上门免费设计！',
        title: '设计师免费上门服务',
        aXtitle: '特惠套餐',
        bXtitle: '套餐详情',
        pack: [],
        showpack: [],
        activeIndex: 0
      }
    },
    methods: {
      show(type) {
        this.showpack = this.pack[type].packplants
        this.activeIndex = type
        this.bXtitle = this.pack[type].name
      }
    },
    components: {
      banner,
      Xtitle,
      disbar
    },
    created() {
      this.pack = data.pack
      this.showpack = data.pack[0].packplants
      this.bXtitle = data.pack[0].name
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "~components/packages/packages.less";
</style>
