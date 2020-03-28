<template>
        <div class="tab-bar-item" @click="itemClick">
            <div v-if="!isActive"><slot name="icon"></slot></div>
            <div v-else=""><slot name="active-icon"></slot></div>
            <div :class="{active:isActive}" :style="activeStyle"><slot name="text"></slot></div>
        </div>
<!--        <div class="tab-bar-item">-->
<!--            <div><img src="@/assets/img/tabbar/subjecctIcon.png" alt=""></div>-->
<!--            <div>分类</div>-->
<!--        </div>-->
<!--        <div class="tab-bar-item">-->
<!--            <div> <img src="@/assets/img/tabbar/msgIcon.png" alt=""></div>-->
<!--            <div>购物车</div>-->
<!--        </div>-->
<!--        <div class="tab-bar-item">-->
<!--            <div> <img src="@/assets/img/tabbar/mineIcon.png" alt=""></div>-->
<!--            <div>我的</div>-->
<!--        </div>-->

</template>

<script>
    export default {
        name: "tabbarItem",
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'rgb(255, 87, 119)'
            }
        },
        data(){
            return {
                //isActive:false
            }
        },
        computed:{
            isActive(){
                return this.$route.path.indexOf(this.path)!==-1
            },
            activeStyle(){
                return this.isActive?{color:this.activeColor}:{}
            }
        },
        methods:{
            itemClick(){
                this.$router.replace(this.path);
            }
        }
    }
</script>

<style scoped>

    .tab-bar-item{ flex:1;height: 49px;  text-align: center}
    .tab-bar-item img{width: 22px; height: 22px;}
    .active{color: #55cdf9}
</style>
