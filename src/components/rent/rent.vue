<template>
  <div class="rent">
    <!-- banner -->
    <banner :text="text" :title="title" :class="{ban4: true}"></banner>
    <!-- 推荐套餐 -->
    <div class="wrapper pdb50">
      <Xtitle :title="bXtitle"></Xtitle>
      <pack></pack>
    </div>
     <!-- 服务流程 -->
    <div class="bg-wrapper">
      <Xtitle :title="flowXtitle"></Xtitle>
      <flow :disbar="disbar"></flow>
    </div>
     <!-- 租赁案例 -->
    <div class="wrapper">
      <Xtitle :title="caseXtitle"></Xtitle>
        <ul class="renttype">
          <li v-for="item in renttypes" @click="show(item.type)" :class="{active: showtype===item.type}">{{item.name}}</li>
        </ul>
        <div class="cards">
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in rentcases"  v-if="item.type===showtype">
              <div class="card">
                <div class="img">
                  <img :src="item.pic" alt="">
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
    </div>
  </div>
</template>

<script>
  import data from 'common/json/data.json'
  import Xtitle from "components/share/Xtitle/Xtitle.vue"
  import pack from "components/share/pack/pack.vue"
  import banner from "components/share/banner/banner.vue"
  import flow from "components/share/flow/flow.vue"

  export default {
    data () {
      return {
        home: [],
        bXtitle: "特惠套餐",
        title: '设计师免费上门服务',
        cXtitle: "客户评价",
        flowXtitle: "租赁服务流程",
        caseXtitle: "租赁案例",
        showtype: 1,
        renttypes:[],
        rentcases:[],
        disbar: [
          {
            "title": "了解需求",
            "text": "选择套餐方案或设计规划",
            "icon": "icon-liaojie"
          },
          {
            "title": "上门服务",
            "text": "联系百乐，进行上门规划",
            "icon": "icon-shangmenfuwu"
          },
          {
            "title": "摆放方案",
            "text": "根据场所给出套餐摆放方案",
            "icon": "icon-scheme"
          },
          {
            "title": "确认合同",
            "text": "方案修改至满意，签订合同",
            "icon": "icon-hetongdaiqueren"
          },
          {
            "title": "植物配送",
            "text": "植物专人配送，按方案摆放",
            "icon": "icon-fahuo"
          },
          {
            "title": "养护更换",
            "text": "每周养护，承诺植物死亡更换",
            "icon": "icon-yanghu"
          }
        ]
      }
    },
    methods: {
      show(itype) {
        this.showtype = itype
      }
    },
    created() {
      this.rentcases = data.rentcases
      this.renttypes = data.renttypes
    },
    components: {
      Xtitle,
      banner,
      flow,
      pack
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "~common/less/common.less";
  .rent{
    .renttype{
      max-width:1000px;
      margin:0 auto;
      display:flex;
      justify-content: space-between; 
      li{
        display:inline-block;
        width:80px;
        background:#eee;
        height:30px;
        line-height: 30px;
        vertical-align: middle;
        text-align: center;
        transition:all .3s ease;
        cursor:pointer;
        &:hover,&.active{
          background:@primary;
          color:#fff;
        }
      }
    }
    .cards{
      max-width:@w1;
      margin:0 auto;
      padding-bottom:50px;
      .card{
        position:relative;
        width:100%;
        height:0;
        padding-top:75%;
        margin-top:30px;
        img{
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
        }
      }
    }
  }
</style>
