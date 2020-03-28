<template>
    <div>
        <div class="shopTop">
            <img :src="shopInfo.shopLogo" alt="">
            <span class="showName">{{shopInfo.name}}</span>
        </div>
        <div class="shopInfoBox">
            <div class="shopInfoItem shopInfoItemLeft">
                <div class="infoSells">
                    <div class="sellsCount">
                        {{shopInfo.cGoods}}
                    </div>
                    <div class="sellsText">总销量</div>
                </div>
                <div class="infoSells">
                    <div class="sellsCount">
                        {{shopInfo.cSells}}
                    </div>
                    <div class="sellsText">全部宝贝</div>
                </div>
            </div>
            <div class="shopInfoItem shopDetailInfo">
                <table class="shopInfoTable">
                    <tr v-for="item in shopInfo.score">
                        <td>{{item.name}}</td>
                        <td class="score" :class="{colorTxt:item.isBetter}">{{item.score}}</td>
                        <td class="betterBox" :class="{redBg:item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="shopBottom">
            <a href="#">进店逛逛</a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "detailShopInfo",
    props:{
      shopInfo:{
        type:Object,
        data(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
    .shopTop{padding:10px 20px}
    .shopTop img{width:110px; height: 100px;border:1px solid #ddd;}
    .shopTop .showName{margin-left:10px;}
    .shopInfoBox{ display: flex;padding:0 0px;}
    .shopInfoItemLeft{justify-content: space-evenly;}
    .shopInfoItem{ flex:1;display: flex;align-items: center}
    .shopDetailInfo{ border-left: 1px solid #dddddd;padding-left:10px;}
    .redBg span{background-color: #ff5777;color:#fff;border-radius: 4px; padding:1px 4px;}
    .shopInfoTable tr td{padding:2px 10px;}
    .score{color: #5ea732;}
    .colorTxt{color: #ff5777}
    .shopBottom{text-align: center;padding-top: 10px;}
    .shopBottom a{color:#333;border:1px solid #ddd;border-radius: 5px;background-color: #f3f3f3;padding:5px 12px;margin-top:10px}
    .betterBox{ color:#5ea732; text-align: center}
</style>
