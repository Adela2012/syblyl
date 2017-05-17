<template>
  <div class="header">
    <div class="nav-wrapper">
      <div class="nav">
        <div class="nav-left">
          <ul>
              <li v-for="info in company.infos">
                <i class="iconfont icon-garden1 mr5 f16"></i>
                {{info}}
              </li>
          </ul>
        </div>
        <div class="nav-right">
          <i class="icon-phone iconfont mr10 f16"></i>
          {{company.phone[0]}}&nbsp;|&nbsp;{{company.phone[1]}}
          <span class="f12">(24小时在线)</span>
        </div>
      </div>
    </div>
    <div class="menu-wrapper">
      <div class="menu">
        <a class="banner" href="#" @click="reload">
          <img src="./images/banner.png" alt="" title="百乐官网" width="160" height="80">
        </a>
        <div class="menu-list">
          <ul>
            <li class="active"><router-link to="/index">首页</router-link></li>
            <!-- <li><router-link to="/profile">公司简介</router-link></li> -->
            <!-- <li><router-link to="/business">业务领域</router-link></li> -->
            <li><router-link to="/plants">植物种类</router-link></li>
            <!-- <li><router-link to="/packages">特惠套餐</router-link></li> -->
            <li><router-link to="/rent">花卉租赁</router-link></li>
            <li><router-link to="/design">设计施工</router-link></li>
            <!-- <li><router-link to="/cases">案例展示</router-link></li> -->
            <!-- <li><router-link to="/help">帮助中心</router-link></li> -->
            <li><router-link to="/about">关于百乐</router-link></li>
            <li><router-link to="/contact">联系我们</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      company: {
        type: Object
      }
    },
    methods: {
      reload() {
        window.location.reload()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~components/header/header.less";
</style>
