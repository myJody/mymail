<template>
    <div class="homeWrapper">
        <navBar path="/home" class="homeNav">
            <span slot="center">购物街</span>
        </navBar>
        <tabControl :titles="titles" @tabHandle="tabContrlHandle" ref="tabControl1" v-show="istabFixed"></tabControl>
        <scroll :probeType="2"  ref="scroll" class="content"
                :pullUpLoad="true"
                @pullingUp="loadingMore"
                @contentScroll="contentScroll">
            <swiper :banners="banners" @swiperLoaded="swiperLoaded"></swiper>
            <feture :recommends="recommends"></feture>
            <div><img src="~assets/img/home/recommend_bg.jpg" alt="" class="recommendImg"></div>
            <tabControl :titles="titles" @tabHandle="tabContrlHandle" ref="tabControl2" :class="{tabFixed:istabFixed}"></tabControl>
            <goodLists :cgoodsLists="goodsList[currentType].list"></goodLists>
        </scroll>
        <backTop class="backTopBox" @click.native="backTop" v-if="ifshowbackTop">
            <img src="~assets/img/common/top.png" alt="">
        </backTop>
    </div>
</template>

<script>
  import navBar  from 'components/common/navbar/navbar'
  import swiper  from 'components/content/swiper'
  import feture  from './childComps/fetureView'
  import goodLists from "./childComps/goodLists"
  import scroll from "../../components/common/scroll/scroll"
  import backTop from "../../components/content/backTop/backTop"
  import tabControl  from 'components/content/tabControl/tabControl'
  import {getHomeMultiData,getHomeGoodsData} from "network/home"

  export default {
        name: "home",
        data(){
            return {
                banners:[],
                recommends:[],
                titles:['流行','新款','精选'],
                goodsList: {
                'pop': {page: 0, list: []},
                'new': {page: 0, list: []},
                'sell': {page: 0, list: []}
                },
              currentType:'pop',
              ifshowbackTop:false,
              tabTopOffset:0,
              istabFixed:false,
              saveY:0,
              iid:''
            }
        },
        components:{
            navBar,
            swiper,
            feture,
            goodLists,
            scroll,
            backTop,
            tabControl

        },
      created() {
        this._getMultiData(),
        this._getHomeGoodsData('pop'),
        this._getHomeGoodsData('new'),
        this._getHomeGoodsData('sell')
      },
    mounted() {
      /*监听item中图片加截完成，重新刷新*/
      this.$bus.$on('itemImageLoad',()=>{
        this.scroll && this.$refs.scroll.refresh()
      })
    },
    activated() {
      console.log('进入页面')
      console.log(this.saveY)
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY=this.$refs.scroll.getScrollY()
      console.log(this.saveY)
    },
    methods:{
          tabContrlHandle(index){
            console.log(index)
            switch (index) {
              case 0:
                 this.currentType='pop'
                break;
              case 1:
                this.currentType='new'
                break;
              case 2:
                this.currentType='sell'
                break;
            }
            this.$refs.tabControl1.currentIndex= index
            console.log(this.$refs.tabControl2.currentIndex)
            this.$refs.tabControl2.currentIndex= index

          },
          /*获取轮播数据*/
          _getMultiData(){
            getHomeMultiData().then(res=>{
              this.banners=res.data.data.banner.list;
              this.recommends=res.data.data.recommend.list;
            }).catch(err=>{
              console.log(err)
            })
          },
          _getHomeGoodsData(type){
            const page=this.goodsList[type].page + 1
            getHomeGoodsData(type,page).then(res=>{
              const goodList=res.data.data.list
              this.goodsList[type].list.push(...goodList)
             this.goodsList[type].page += 1

              this.$refs.scroll.finishPullUp()

            })
          },
          loadingMore(){
            this._getHomeGoodsData(this.currentType)
          },
          contentScroll(position){
            this.ifshowbackTop=(-position.y)>1000
            this.istabFixed=(-position.y)>this.tabTopOffset
          },
          backTop(){
            //scrollTo为scroll组件中封装的方法
          this.$refs.scroll.scrollTo(0,0,0)
          },
          swiperLoaded(){
            console.log('图片加截完了')
            this.tabTopOffset=this.$refs.tabControl2.$el.offsetTop;

          }
        }
    }
</script>

<style scoped lang="less">
.homeWrapper{/*padding-bottom: 100px;*/ height:100vh; position: relative}
.homeNav{background-color: rgb(255, 87, 119);color: #fff; }
.recommendImg{width: 100%;}
/*首页滚动方式一*/
.content{height: calc( ~"100% - 93px" );overflow: hidden}
/*首页滚动方式二*/
//.content{position: absolute;top:44px; bottom:49px;left:0;right: 0;overflow:hidden;background-color:green;z-index: 999}
.backTopBox img{ width: 60px; height: 60px;}
.tabFixed{position:fixed;top:0;right:0;left:0}

</style>
