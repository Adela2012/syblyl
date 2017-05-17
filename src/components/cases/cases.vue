<template>
  <div class="cases">
    <!-- banner -->
    <banner :text="text" :title="title" :class="{ban10: true}"></banner>
    <!-- 摆租案例 -->
    <Xtitle :title="aXtitle"></Xtitle>
    <div class="case">
      <el-row :gutter="30">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in cases">
          <div class="item">
            <div class="pic">
              <div class="cover"></div>
              <img :src="item.pic" alt="">
            </div>
            <div class="desc">
              <div class="info">
                <h4>{{item.name}}</h4>
                <p>合同期限：{{item.city}}</p>
                <p>合同期限：{{item.time}}</p>
                <p>租摆面积：{{item.place}}㎡</p>
              </div>
              <div class="text">
                <p>为什么选择百乐：</p>
                <p>{{item.why}}</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bg-wrapper">
      <Xtitle :title="bXtitle"></Xtitle>
      <judge></judge>
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
  import judge from "components/share/judge/judge.vue"
  import data from 'common/json/data.json'

  export default {
    data () {
      return {
        title:"客户见证",
        text:"我们为每一位客户都精心设计舒适的绿化环境",
        aXtitle:"精品摆租案例",
        bXtitle:"客户热评",
        cases:[],
        judge:[],
      }
    },
    created() {
      this.cases = data.cases
    },
    components: {
      banner,
      Xtitle,
      disbar,
      judge
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "~components/cases/cases.less";
</style>
