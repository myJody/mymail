<template>
    <div class="">
        <div>我的</div>
        <a-form></a-form>
        <login></login>
<!--        <p>{{userlist}}</p>-->
    </div>
</template>

<script>
    import login from 'components/content/login.vue'
    export default {
        name: "profile",
        computed:{
                userlist(){
                    return this.$route.params.userid
                }

        },
        components:{
            login
        }

    }
</script>

<style scoped>

</style>