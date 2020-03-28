<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>

    </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        bscroll:null,
      }
    },
    mounted() {
      this.bscroll=new BScroll(this.$refs.wrapper,{
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad,
        click:true

      })
      this.bscroll.on('scroll',position=>{
        this.$emit('contentScroll',position)
      })
      /*监听上拉加载更多*/
      this.bscroll.on('pullingUp',()=>{
       // console.log('上拉')
        this.$emit('pullingUp')
      })
    },
    methods:{
      finishPullUp(){
        this.bscroll.finishPullUp()
      },
      scrollTo(x,y,time = 300){
        this.bscroll && this.bscroll.scrollTo && this.bscroll.scrollTo(x,y, time)
      },
      refresh(){
        this.bscroll && this.bscroll.refresh && this.bscroll.refresh();
      },
      getScrollY(){
        return this.bscroll ? this.bscroll.y: 0
      }
    }
  }
</script>

<style scoped>

</style>
