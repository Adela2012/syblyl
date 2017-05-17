<template>
  <div class="plants">
    <banner :title="title"></banner>
    <div class="bar">
      <ul>
        <li @click="show(item.type)" v-for="item in types"><span :class="{active: showtype===item.type}">{{item.name}}</span></li>
      </ul>
    </div>
    <div class="cards">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="(item,index) in plants" v-if="item.type===showtype">
          <div class="card" @click="showplant(index)">
            <div class="img">
              <img :src="item.pic" alt="">
            </div>
            <div class="info">
              <h1 class="title">{{item.name}}</h1>
            </div>
            <i class="iconfont icon-sousuo"></i>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="植物详情" v-model="dialogplant" top="30%">
      <div class="desclayer">
        <div class="avatar">
          <img :src="plant.pic" alt="">
        </div>
        <div class="desc">
          <div class="row-bar" v-if="plant.name">
            <div class="col-name">植物名称：</div>
            <div class="col-info">{{plant.name}}</div>
          </div>
          <div class="row-bar" v-if="plant.place">
            <div class="col-name">合适地点：</div>
            <div class="col-info">{{plant.place}}</div>
          </div>
          <div class="row-bar" v-if="plant.function">
            <div class="col-name">植物功能：</div>
            <div class="col-info">{{plant.function}}</div>
          </div>
          <div class="row-bar" v-if="plant.desc">
            <div class="col-name">植物描述：</div>
            <div class="col-info">{{plant.desc}}</div>
          </div>
          <div class="row-bar" v-if="plant.info">
            <div class="col-name">植物信息：</div>
            <div class="col-info">{{plant.info}}</div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import banner from "components/share/banner/banner.vue"
  import data from 'common/json/data.json'

  export default {
    data () {
      return {
        types: [],
        title: '植物花卉展示',
        plants: [],
        showtype: 1,
        plant:[],
        dialogplant:false,
      }
    },
    methods: {
      show(type) {
        this.showtype = type
      },
      showplant(index) {
        this.plant = data.plants[index]
        this.dialogplant = true  
      }
    },
    created() {
      this.plants = data.plants
      this.types = data.planttypes
      this.plant = data.plants[0]
    },
    components: {
      banner
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "~components/plants/plants.less";   
</style>
