<template>
  <div class="home">
    <!-- banner -->
    <div class="block">
      <el-carousel height="350px">
        <el-carousel-item v-for="item in home.banner">
          <div class="banner"  :style="{ background: 'url( '+item+') 50% 50% no-repeat'}"></div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 百乐服务 -->
    <div class="display">
      <Xtitle :title="aXtitle"></Xtitle>
      <div class="dis_inner">
        <div  v-for="(item,index) in display" class="dis"  :class="{active:index === activeIndex}" @click="show(index)">
          <div class="iconfont" :class="item.icon" ></div>
          <div class="desc">
            <h4>{{item.title}}</h4>
            <p>{{item.text}}</p>
          </div> 
        </div>
      </div>
      <div class="dis_main">
        <el-row :gutter="20">
          <el-col :span="8"  v-for="item in disimg">
            <!-- <router-link :to="'golink'" class="dis" tag="div"> -->
            <div class="dis" @click="golink(activeIndex)">    
              <img  :src="item.pic" alt="">
              <div class="layer">
                <i class="iconfont icon-sou"></i>
                <h3 class="ellipsis">{{item.title}}</h3>
                <p class="ellipsis">{{item.desc}}</p>
              </div>
            </div>
            <!-- </router-link> -->
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="phone-bar">
      <phonebar></phonebar>
    </div>
    <!-- 推荐套餐 -->
    <div class="wrapper pdb50">
      <Xtitle :title="bXtitle"></Xtitle>
      <pack></pack>
    </div>
    <!-- 客户评价 -->
    <div class="bg-wrapper">
      <Xtitle :title="cXtitle"></Xtitle>
      <judge></judge>
    </div>
    <!-- 服务流程 -->
<!--     <div class="bg-wrapper">
      <Xtitle :title="flowXtitle"></Xtitle>
      <flow></flow>
    </div> -->
    <!-- 展示优势 -->
    <div class="dis-bar">
      <disbar></disbar>
    </div>
  </div>
</template>

<script>
  import data from 'common/json/data.json'
  import Xtitle from "components/share/Xtitle/Xtitle.vue"
  import flow from "components/share/flow/flow.vue"
  import disbar from "components/share/disbar/disbar.vue"
  import pack from "components/share/pack/pack.vue"
  import judge from "components/share/judge/judge.vue"
  import phonebar from "components/share/phonebar/phonebar.vue"

  export default {
    data () {
      return {
        home: [],
        aXtitle: "百乐服务",
        bXtitle: "推荐套餐",
        cXtitle: "客户评价",
        flowXtitle: "租赁服务流程",
        display:[],
        disimg:[],
        activeIndex: 0
      }
    },
    methods: {
      show(type) {
        this.disimg = this.display[type].imgs
        this.activeIndex = type
      },
      golink(link) {
        console.log(link);
        let arr=["rent","design","about"]
        // router.push();
        // this.$router.push(`/component/${name}`)
        this.$router.push(arr[link])
      }
    },
    created() {
      this.home = data.home
      this.display = data.homeservice
      this.disimg = data.homeservice[0].imgs
    },
    components: {
      Xtitle,
      pack,
      disbar,
      flow,
      judge,
      phonebar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "~components/index/index.less";
</style>
