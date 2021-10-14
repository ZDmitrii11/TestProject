<template>
    <div class="green darken-1 auth-layout">
      <router-view/>
    </div>
</template>

<script>
    export default {
        name: "auth",
        mounted() {
            console.log(this.$route.meta.layout)
        }
    }
</script>

<style scoped>
    body{

    }
    .auth-layout{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        position: absolute;
    }
</style>