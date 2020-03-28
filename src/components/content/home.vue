<template>
    <div class="wrap">

    </div>
</template>

<script>
  import navBar from 'components/common/navbar/navbar'
    export default {
        name: "home",
        data() {
            return {
                value: 2,
            };
        },
        methods:{
            handleChange(value){
                console.log(`selected ${value}`)
            }
        },
      components:{


      }
    }
</script>

<style scoped>
.wrap{
    margin:20px 20px;
    border:1px solid #ddd;
    padding:20px;
}
</style>
