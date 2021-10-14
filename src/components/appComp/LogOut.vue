<template>
    <div class="logout"  >
       <button class="btn grey" @click="$emit('myFunction')">LogOut</button>
</div>

</template>

<script>
    export default {
        name: "LogOut"
    }
</script>

<style scoped>
@import "~materialize-css/dist/css/materialize.min.css";
</style>