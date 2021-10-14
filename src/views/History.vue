<template>
    <div>
   <h3>History:</h3>

        <div class="history" v-for="(history,index) in historyR" :key="index">
            <h3 style="color:white">
            </h3>
        </div>
         {{allUNubers.toString()}}
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {

        name: "History",

        data(){
            return{
             historyR:[1,2,3,5]
            }
        },
        computed:{
            ...mapGetters(['allUNubers'])
        },
        beforeMount() {

        },
        mounted() {


        // this.historyR = totalHistory

        },

    }

</script>

<style scoped>

</style>