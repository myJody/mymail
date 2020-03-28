<template>
    <div>
        <a-carousel autoplay>
            <div v-for="(banner,key) in banners" :key="key" class="bannerItemBox">
                <a :href="banner.link">
                    <img :src="banner.image" alt="" @load="swiperLoaded">
                </a>
            </div>
        </a-carousel>
    </div>
</template>
<script>

    export default {
        name: "swiper",
        props:{
          banners:{
            type:Array,
            default:[]
          }
        },
        data(){
            return{
                isloaded:false
            }
        },
        created() {

        },
       methods:{
         swiperLoaded(){
           if(!this.isloaded){
             this.$emit('swiperLoaded')
             this.isloaded=true
           }
         }
       }
    }

</script>
<style scoped>
    /* For demo */
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 200px;
        line-height: 250px;
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }

    .bannerItemBox  img{width: 100%; height: 100%;}
</style>
