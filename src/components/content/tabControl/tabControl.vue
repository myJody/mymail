<template>
    <div class="tabControl">
        <div v-for="(item,index) in titles" :key="index" class="tabControlItem" :class="{active:currentIndex===index}" @click="tabToggle(index)" >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "tabControl",
    props:{
      titles:{
        type:Array,
        default:[]
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      tabToggle(index){
        this.currentIndex=index
        this.$emit('tabHandle',index)
      }
    }
  }
</script>

<style scoped>
.tabControl{ display: flex;margin: 15px 0;}
.tabControlItem{ flex: 1; text-align: center;font-size: 16px;}
 .active{color:#ff5777;}
.active span{border-bottom: 2px solid #ff5777;padding-bottom: 6px;}
</style>
