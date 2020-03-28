<template>
    <div class="detailNavBar">
        <navbar>
            <span slot="left" class="backIcon" @click="backFun"><img src="~assets/img/common/back.svg" alt=""></span>
            <div slot="center" class="titleBox">
                <div v-for="(item,index) in titles" :key="index" class="titleItem" @click="handleNavItem(index)" :class="{navActive:currentIndex==index}">
                    {{item}}
                </div>
            </div>
        </navbar>
    </div>
</template>

<script>
  import navbar from "components/common/navbar/navbar";
  export default {
    name: "detailNavbar",
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        iid:null,
        currentIndex:0
      }
    },
    components:{
      navbar
    },
    methods:{
      handleNavItem(index){
        this.currentIndex =index
      },
      backFun(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
    .detailNavBar{ background-color: #fff}
    .backIcon{}
    .titleBox{ display: flex}
    .titleItem{flex:1}
    .navActive{ color: #ff5777}
</style>
