<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tabBar></tabBar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>

<script>
import tabBar from 'components/content/mainTabbar/mainTabbar'
import Icon from 'components/content/Icon/Icon.vue'
import SvgIcon from 'components/content/Icon/svg.vue'
export default {
  name: 'App',
    data(){
      return{
          userName:'wuxiaolan'
      }

    },
  components: {
    tabBar,
    Icon,
    SvgIcon
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
