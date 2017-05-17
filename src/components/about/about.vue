<template>
  <div class="about">
    <banner :text="text" :title="title" :class="{ban5: true}"></banner>
    <div class="aboutus">
      <div class="img">
        <img src="http://www.syblyl.com/assets/about/about1.jpg" alt="">
      </div>
      <div class="info">        
        <p>绍兴上虞百乐园林工程有限公司成立于2005年，主营苗木租赁、花卉出售（实体店）、庭院景观设计施工、厂区绿化设计施工、办公单位及工厂苗木租赁、苗木养护管理等业务。</p>
        <p>公司业务由景观设计、苗木培育和景观施工三大板块构成，拥有10多年设计施工经验的景观主管和多处苗木培育基地，业务辐射上虞全区。</p>
        <p>公司以传统的中式景观为主，凭借多年来丰富的施工经验、不断求新的设计创意，新技术的研究与应用，以及合理的造价，完成了无数私家庭院的设计与建造，作品遍布上虞高品质的别墅小区，并且得到业主方的一致好评与肯定。</p>
        <p>在公司花卉实体店店内，更为您集结了国内外众多知名观花观叶植物近百种，供您选购。</p>
      </div>
    </div>
    <div class="tab_wrapper">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="苗木基地" name="first">
<!--           <div class="flex">
            <img src="../../assets/about/jidi/0.jpg" alt="" width="600" height="400">
            <div class=""><p>公司以传统的中式景观为主，凭借多年来丰富的施工经验、不断求新的设计创意，新技术的研究与应用，以及合理的造价，完成了无数私家庭院的设计与建造，作品遍布上虞高品质的别墅小区，并且得到业主方的一致好评与肯定。</p></div>
          </div> -->
          <img src="../../assets/about/jidi/0.jpg" alt="">
          <div class="flex">
            <img src="../../assets/about/jidi/1.jpg" alt="" class="img_3">
            <img src="../../assets/about/jidi/2.jpg" alt="" class="img_3">
            <img src="../../assets/about/jidi/3.jpg" alt="" class="img_3">
          </div>
        </el-tab-pane>
        <el-tab-pane label="门店销售" name="second">
          <img src="../../assets/about/huadian/0.jpg" alt="">
          <div class="flex">
            <img src="../../assets/about/huadian/1_1.jpg" alt="" class="img_3">
            <img src="../../assets/about/huadian/1_2.jpg" alt="" class="img_3">
            <img src="../../assets/about/huadian/1_3.jpg" alt="" class="img_3">
          </div>
          <div class="flex">
            <img src="../../assets/about/huadian/2_1.jpg" alt="" class="img_4">
            <img src="../../assets/about/huadian/2_2.jpg" alt="" class="img_4">
            <img src="../../assets/about/huadian/2_3.jpg" alt="" class="img_4">
            <img src="../../assets/about/huadian/2_4.jpg" alt="" class="img_4">
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import banner from "components/share/banner/banner.vue"
  import data from 'common/json/data.json'

  export default {
    data () {
      return {
        title: '关于百乐',
        text:'百乐基地以及百乐门店',
        activeName: 'first'

      }
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      }
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
  .about{
    .aboutus{
      max-width: @w1;
      margin:0 auto;
      padding:50px 10px;
      display:flex; 
      .img{
        flex:0 0 400px;
        width:350px;
        height:210px;
        overflow:hidden;
        margin-left:20px;
        img{
          width:350px;
          height:210px;
        }
      }
      .info{  
        flex:1;     
        p{
          line-height: 30px;
          font-size:14px;
          text-indent: 2em;
        }
      }
    }
    .flex{
      display:flex;
      justify-content:space-between;
    }
    .img_3{
      width:390px;
      flex:0 0 390px ;
      margin-top:10px;
      height:293px;
    }
    .img_4{
      width:290px;
      height:387px;
      flex: 0 0 290px;
      margin-top:10px;
    }
    .tab_wrapper{
      width:@w1;
      margin:0 auto;
      padding-bottom:50px;
      .el-tabs__item{
        width:595px;
        text-align: center;
        font-size:20px;
      }
      .el-tab-pane{

      }
    }
  }

</style>
