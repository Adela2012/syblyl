<template>
  <div class="design">
    <!-- banner -->
    <banner :text="text" :title="title" :class="{ban10: true}"></banner>
    <!-- 推荐套餐 -->
    <div class="wrapper pdb50">
      <Xtitle :title="designXtitle"></Xtitle>
      <div class="dis_main">
        <el-row :gutter="20">
          <el-col :span="8"  v-for="(item,index) in designcases">
            <div class="dis" tag="div" @click="showdes(index)">
              <img  :src="item.pic" alt="">
              <div class="layer">
                <i class="iconfont icon-sou"></i>
                <h3 class="ellipsis">{{item.name}}</h3>
                <p class="ellipsis">设计日期：{{item.date}}</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
     <!-- 服务流程 -->
    <div class="bg-wrapper">
      <Xtitle :title="flowXtitle"></Xtitle>
      <flow :disbar="disbar"></flow>
    </div>
     <!-- 施工案例 -->
    <div class="wrapper">
      <Xtitle :title="constructXtitle"></Xtitle>
        <ul class="type">
          <li v-for="(item,index) in constructcases" @click="showcon(index)" :class="{active:index === constructIndex}">{{item.name}}</li>
        </ul>
        <div class="cards">
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in showconstruct"  >
              <div class="card">
                <div class="img">
                  <img :src="item.img" alt="">
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
    </div>
    <el-dialog id="dialogo" title="设计案例详情" v-model="dialogdesign" size="full">
      <div class="desclayer">
        <h1>{{layertitle}}</h1>
        <h2>设计时间：{{layertime}}</h2>
        <div class="dcards">
<!--           <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="8" :lg="6"   > -->
              <div class="dcard" v-for="item in showdesign">
                <div class="dimg">
                  <img :src="item.img" alt="">
                </div>
              </div>
<!--             </el-col>
          </el-row> -->
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import data from 'common/json/data.json'
  import Xtitle from "components/share/Xtitle/Xtitle.vue"
  import banner from "components/share/banner/banner.vue"
  import flow from "components/share/flow/flow.vue"

  export default {
    data () {
      return {
        home: [],
        designXtitle: "设计案例",
        constructXtitle: "施工案例",
        title: '设计施工',
        text:"我们为每一位客户都精心设计舒适的绿化环境",
        flowXtitle: "绿化项目流程",
        designcases:[],
        showdesign:[],
        designIndex:0,
        dialogdesign:false,
        constructcases:[],
        showconstruct:[],
        constructIndex:0,
        layertitle:'',
        layertime:'',
        disbar: [
          {
            "title": "了解需求",
            "text": "大致了解设计施工要求",
            "icon": "icon-liaojie"
          },
          {
            "title": "上门服务",
            "text": "联系百乐，进行上门规划",
            "icon": "icon-shangmenfuwu"
          },
          {
            "title": "设计方案",
            "text": "根据场所给出设计或改造方案",
            "icon": "icon-scheme"
          },
          {
            "title": "确认合同",
            "text": "方案修改至满意，签订合同",
            "icon": "icon-hetongdaiqueren"
          },
          {
            "title": "开始施工",
            "text": "按照设计方案，进行施工",
            "icon": "icon-plant1"
          },
          {
            "title": "养护更换",
            "text": "一年养护，承诺植物死亡更换",
            "icon": "icon-yanghu"
          }
        ]
      }
    },
    methods: {
      showcon(type) {
        this.showconstruct = this.constructcases[type].imgs
        this.constructIndex = type
      },
      showdes(index) {
        this.showdesign = data.designcases[index].imgs
        this.dialogdesign = true 
        this.layertitle = data.designcases[index].name
        this.layertime = data.designcases[index].date
      }
    },
    created() {
      this.designcases = data.designcases
      this.showdesign = data.designcases[0].imgs
      this.constructcases = data.constructcases
      this.showconstruct = data.constructcases[0].imgs
    },
    components: {
      Xtitle,
      banner,
      flow
      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "~common/less/common.less";
  .design{
    .type{
      max-width:1000px;
      margin:0 auto;
      display:flex;
      justify-content: space-between; 
      li{
        display:inline-block;
        width:120px;
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
    .dis_main{
      max-width:@w1;
      margin:0 auto;
      padding-bottom:40px;
      .dis{
        position:relative;
        margin-bottom:20px;
        &:hover{
          .layer{
              background:radial-gradient(400px at center center,rgba(0,0,0,0.8),rgba(0,0,0,0.2));
            h3,p{
              transform:translate3D(-50%,-100%,0);
              opacity:1;
            }
            i{
              opacity:1;
              font-size:60px;
              cursor:pointer;
            }
          }
        }
        .layer{
          transition:all 0.5s ease;
          background: linear-gradient(to bottom,transparent 0% ,rgba(0,0,0,0.2) 70% ,rgba(0,0,0,0.8) 100%);
          position:absolute;
          width:100%;
          height:100%;
          top:0;
          left:0;
          h3{
            font-size:20px;
            bottom:30px;
          }
          p{
            font-size:12px;
            bottom:10px; 
            opacity:0;          
          }
          i{
            font-size:10px;
            bottom:120px;  
            opacity:0;
          }
          h3,p,i{
            display:block;
            transition: all 0.5s ease;
            position:absolute;
            color:#fff;
            left:50%;
            transform:translate3D(-50%,0,0);
          }
        }
        img{
          width:100%;
          display:inline-block;
        }

      }
    }
    .desclayer{
      h1{
        width:100%;
        font-size:30px;
        font-weight:500;
        text-align:center;
      }
      h2{
        width:100%;
        font-size:16px;
        font-weight:500;
        text-align:center;
        margin:20px 0 10px;
      }
      .dcards{
        .dcard{
          .dimg{
          }
        }
      }
    }
    .el-dialog{
      background:rgba(255,255,255,0.6)!important;
    }
    .el-dialog__header,.el-dialog__body{
      max-width:@w1!important;
      margin:0 auto;
      background:rgb(255,255,255)!important;
      // box-shadow: 0 0 3px rgba(34,25,25,.4);
    }
  }
</style>
