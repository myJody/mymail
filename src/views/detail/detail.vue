<template>
    <div class="detailWrap">
        <detail-navbar></detail-navbar>
        <scroll :probeType="2" class="content" ref="scroll" @shopImgLoaded="shopInfoLoaded">
            <a-carousel autoplay id="ant-carousel">
                <div v-for="item in topImages" class="carouselItem">
                    <img :src="item" alt="">
                </div>
            </a-carousel>
            <detail-goods-info :goods-info="goodsInfo"></detail-goods-info>

            <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>

            <detail-info-image :detailInfoImages="detailInfoImages"></detail-info-image>
        </scroll>
    </div>
</template>

<script>
  import detailNavbar from "./childComps/detailNavbar";
  import detailGoodsInfo from "./childComps/detailGoodsInfo";
  import detailShopInfo from "./childComps/detailShopInfo";
  import detailInfoImage from "./childComps/detailInfoImage";

  import scroll from "../../components/common/scroll/scroll";

  import {getDetailData,goodsInfo} from "../../network/detail";

  export default {
    name: "detail",
    data() {
      return {
        iid:null,
        topImages:[],
        goodsInfo:{},
        shopInfo:{},
        detailInfoImages:{}
      }
    },
    components: {
      detailNavbar,
      detailGoodsInfo,
      detailShopInfo,
      detailInfoImage,
      scroll
    },
    created() {
      this._getDetailData()
    },
    mounted() {


    },
    methods: {
      _getDetailData() {
        //获取当前iid
        //const iid =this.$route.query.iid
        this.iid  = this.$route.query.iid
        //发送请求
        getDetailData(this.iid).then(res => {
          const resData=res.data.result
          this.topImages=resData.itemInfo.topImages
          console.log(resData)
          console.log(resData.columns)

          //取出相关数据进行整合存入goodsInfo
          this.goodsInfo =new goodsInfo(resData.itemInfo,resData.columns,resData.shopInfo.services)

          //取出店铺信息
          this.shopInfo=resData.shopInfo

          //取出详情图片信息
          this.detailInfoImages=resData.detailInfo
        })
      },
      shopInfoLoaded(){
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
    .detailWrap{height: 100vh; position: relative;z-index: 999; background-color: #fff}
   .content{ height: calc(100% - 44px);overflow: hidden}
    #ant-carousel{height: 360px;overflow: hidden;position: relative;}
    /*其它组件中生成的结构样式重置，需要新建less文件，引用才可以*/

</style>
