<template>
    <div  class="home-page">
        <h3>Home:</h3>


    </div>
</template>

<script>


      import {mapGetters} from 'vuex'
    export default {
        name: "Home",
        data(){
            return {
                text : 'Some Text',
                isActive:true,
                users:[]
            }
        },
        computed:{
            ...mapGetters(['allUsers'])
        },
        components: {


        },
        methods:{

        },
        mounted() {
       this.users =  this.$store.dispatch('Users')
        }


    }
</script>

<style scoped>

</style>