<template>
    <div class="navBar">
        <div class="navLeft"><slot name="left"></slot></div>
        <div class="navCenter"><slot  name="center"></slot></div>
        <div class="navRight"><slot  name="right"></slot></div>
    </div>
</template>

<script>
  export default {
    name: "navbar",
    data(){
      return {
      }
    },
    props:{
      hasNavColorBg:{
        type:String,
        default:'rgb(255, 87, 119)'
      }
    },
    computed:{
    }
  }
</script>

<style scoped>
.navBar{display:flex; height: 44px; line-height: 44px; text-align: center}
.navLeft{width: 60px}
.navCenter{flex: 1; text-align: center}
.navRight{width: 60px}
.navBgColor{ background-color: rgb(255, 87, 119)}
</style>
