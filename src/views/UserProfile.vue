<template>
    <div class="user-page">
        <h4>User Page</h4>


            <hr>
            <div class="user-content">
                <span><h4>Info:</h4></span>
                <h4 style="color: white">{{info.name}}:</h4>
                <h4 style="color: white">{{info.image}}:</h4>
            </div>

        <div>
            <button class="btn yellow" @click="this.isActive = !this.isActive">Click To See Info:</button>
        </div>
        <input type="text" v-model="info.name">
             <h4 v-if="isActive">
                 <h4>Info:{{info.name}}  {{info.image}}
                 </h4>
             </h4>
        </div>

</template>

<script>
    export default {
        name: "UsersProfile",
        data(){
            return {
                info:{
                    name:'SomeName',
                    image:'some Image URL'
                },
                isActive:false

            }
        }
    }
</script>

<style scoped>
.user-page{
    position: absolute;
    width: 98%;
    height: 100%;
    margin-left: 1%;
    background-color: teal;




}

</style>