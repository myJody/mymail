<template>
    <div class="detailImgInfo">
        <div class="imgTopInfo">
            {{detailInfoImages.desc}}
        </div>
        {{imgLength}}
        <div class="imgDetailBox" v-for="(item,index) in detailInfoImages.detailImage" :key="index">
            <p> {{item.key}}</p>
            <div class="imgList">
                <img :src="item" alt="" v-for="(item,index) in item.list" :key="index" @load="shopImgLoaded">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "detailInfoImage",
    props:{
      detailInfoImages:{
        type:Object,
        data(){
          return{}
        }
      }
    },
    data(){
      return{
        counter:0,
        imgLength:0
    }
    },
    methods:{
      shopImgLoaded(){
        console.log(this.imgLength)
        //将当前加载完的图片数量和要加载的图片长度比较，避免发送多次事件，只进行一次回调
        if(++this.counter===this.imgLength){
          console.log('加载完了')
            this.$emit('shopImgLoaded')
        }
      }
    },
    watch:{
      /*监测传过来的变量detailInfoImages值的变化*/
      detailInfoImages(){
        this.imgLength=this.detailInfoImages.detailImage[0].list.length;
      }

    }
  }
</script>

<style scoped>
    .detailImgInfo{padding:20px;}
    .imgList img{ width: 100%;}
</style>
