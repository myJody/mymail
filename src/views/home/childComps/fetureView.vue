<template>
    <div class="feature">
        <div v-for="item in recommends" class="feature-item">
            <img :src="item.image" alt="">
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "recommendView",
    props:{
      recommends:{
        type:Array,
        default:[]
      }
    }
  }
</script>

<style scoped>
    .feature {
        display: flex;
        margin-top: 10px;
        font-size: 14px;
        border-bottom: 4px solid #eee;
    }

    .feature-item {
        flex: 1;
        text-align: center;
    }

    .feature img {
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }
</style>
