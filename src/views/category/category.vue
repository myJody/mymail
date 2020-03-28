<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <div class="innerBox">
                测试
            </div>
        </div>
    </div>
</template>

<script>
  import BSscroll from 'better-scroll'
   import productList from './productList'
   export default {
        name: "category",
        components:{
            productList
        },
     created() {

     },
     mounted() {
       const wrapper=this.$refs.wrapper
       this.bscroll=new BSscroll(wrapper,{
            probeType:3,
            pullUpLoad:true
          })
       this.bscroll.on('scroll',position=>{
         // console.log(position)
       })
       this.bscroll.on('pullingUp',()=>{
         console.log('上拉加载更多')
       })
     }
   }
</script>

<style scoped>
    .wrapper{ height:400px;  overflow: hidden}
    .content{ height: 400px;}
    .innerBox{height: calc(100% - 10px);border:1px solid red;}
.content{ }
</style>
