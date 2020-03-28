<template>
    <div class="goodsList">
        <div class="goodsItem" v-for="(item,index) in cgoodsLists" :key="index" @click="goToDetail(item.iid)" ref="goodsItemList">
                <img :src="item.show.img" alt="" @load="imageLoaded" >
                <div class="infoDetail">
                    <p>{{item.iid}}</p>
                    <p class="goodsItemTit">{{item.title}}</p>
                    <span class="priceTxt">￥{{item.price}}</span>
                    <span class="likeBox">{{item.cfav}}</span>
                </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "goodLists",
    props: {
      cgoodsLists:{
        type:Array,
        default:[]
      }
    },
    data(){
      return {
      }
    },
    mounted() {

    },
    methods:{
        imageLoaded(){
          console.log('图片加截完了')
          this.$bus.$emit('itemImageLoad')
        },
      goToDetail(iid){
        console.log(iid)
        /*query方式传参*/
       this.$router.push({path: '/detail',query: {iid}})

        //params方式传参
        //传一个参数
        // this.$router.push('/detail/'+iid)

        //传多个参数
        //this.$router.push({name:'detail', params: {iid:iid}})



      }
    }
  }
</script>

<style scoped>
 .goodsList{display: flex; flex-wrap: wrap;justify-content: space-evenly}
 .goodsItem{width:49%}
 .goodsItemTit{ width: 100%;white-space:nowrap;margin-bottom:2px;text-overflow: ellipsis;overflow: hidden}
 .goodsList .goodsItem img{width: 100%;border-radius: 6px;}
 .infoDetail{ text-align: center;padding:0px 0px 10px;}
 .priceTxt{color:#ff5777}
 .infoDetail .likeBox{ margin-left: 10px; }
 .infoDetail .likeBox::before{
     position: relative;
     content: '';
     display: inline-block;
     left: 0px;
     top: 2px;
     width: 14px;
     height: 14px;
     background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
 }
</style>
