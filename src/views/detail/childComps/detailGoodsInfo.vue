<template>
    <div>
        <div v-if="Object.keys(goodsInfo).length !==0" class="goodsInfo" >
            <div class="infoTitle">{{goodsInfo.title}}</div>
            <div class="infoPrice">
                <span class="nPrice">￥{{goodsInfo.realPrice}}</span>
                <span class="oPrice">{{goodsInfo.oldPrice}}</span>
                <span class="disCount" :style="{background:goodsInfo.discountBgColor}">{{goodsInfo.disCount}}</span>
            </div>
            <div class="inforOther">
                <span>{{goodsInfo.columns[0]}}</span>
                <span>{{goodsInfo.columns[1]}}</span>
                <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
            </div>
            <div class="infoService">
                <div class="inforServiceItem" v-for="index in goodsInfo.services.length-1" :key="index">
                    <img :src="goodsInfo.services[index-1].icon" alt="">
                    <span>{{goodsInfo.services[index-1].name}}</span>
                </div>
<!--                <div class="inforServiceItem">-->
<!--                    <img :src="goodsInfo.services[1].icon" alt="">-->
<!--                    <span>{{goodsInfo.services[2].name}}</span>-->
<!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "detailGoodsInfo",
    props:{
      goodsInfo:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style scoped>
    .goodsInfo{ padding:10px 20px;}
    .infoTitle{color: #222;font-size: 14px;}
    .nPrice{color:#ff5777;font-size: 24px;}
    .oPrice{margin-left: 5px;text-decoration: line-through; }
    .infoPrice{padding:10px 0}
    .inforOther{display: flex;  justify-content: space-between;border-bottom:1px solid #efefef;padding-bottom: 10px;}
    .disCount{color:#fff;border-radius: 10px; text-align: center; padding:2px 4px; position: relative; top:-8px;margin-left:10px;}
    .infoService{display: flex; justify-content: space-between;padding-top: 10px;}
    .infoService img{width: 14px; height: 14px;margin-right: 5px;}
    .inforServiceItem{}
</style>
