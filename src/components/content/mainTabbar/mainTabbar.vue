<template>
    <tab-bar>
        <tab-bar-item path="/home" activeColor="green">
            <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
            <img slot="active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
            <div slot="text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category">
            <img slot="icon" src="~assets/img/tabbar/category.svg" alt="">
            <img slot="active-icon" src="~assets/img/tabbar/category_active.svg" alt="">
            <div slot="text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <img slot="icon" src="~assets/img/tabbar/cart.svg" alt="">
            <img slot="active-icon" src="~assets/img/tabbar/cart_active.svg" alt="">
            <div slot="text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="">
            <img slot="active-icon" src="~assets/img/tabbar/profile_active.svg" alt="">
            <div slot="text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import tabBar from 'components/common/tabbar/tabbar'
import tabBarItem from 'components/common/tabbar/tabbarItem'
  export default {
    name: "mainTabbar",
    components:{
      tabBar,
      tabBarItem
    }
  }
</script>

<style scoped>

</style>
