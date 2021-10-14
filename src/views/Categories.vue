<template>
    <div class="categories-page">
        <div class="categories-container">
            <h3>Categories :</h3>
          <div class="categories-list" v-for="oneText in text" :key="oneText">
              <h3>{{text+1}}</h3>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Categories",
        props:{
            text:String
        }
    }
</script>

<style scoped>

</style>