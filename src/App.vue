<template>
 <div id="app">
  <component :is="layout">
   <router-view/>
  </component>

 </div>

</template>

<script>


import Auth from "./layouts/Auth";
import MainLayout from "./layouts/MainLayout";
export default {
  name: 'App',
 data(){
   return{

   }
 },
  components: {
   Auth,
   MainLayout


  },
computed:{
   layout(){
    return this.$route.meta.layout || 'auth' + 'layout'
   }
},
 created() {

 },
 mounted() {

 }


}
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";


</style>
