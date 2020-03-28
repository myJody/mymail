<template>
    <div class="backTop" @click="backTop">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "backTop",
    methods:{
      backTop(){
        //this.$emit('backTop')
      }
    }
  }
</script>

<style scoped>
.backTop{ position: absolute;bottom:100px; right: 10px}
</style>
