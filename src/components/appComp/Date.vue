<template>
    <div class="date-container">
        <div class="date-now">
          <span style="color:white">{{date}}</span>

        </div>
    </div>
</template>

<script>

    export default {
        name: "Date",
        data(){
            return {
                date:new Intl.DateTimeFormat().format(),

                formatDate:null,
            }
        },
        mounted() {



        },
        beforeUnmount() {
            // clearInterval(this.interval)

        }
    }
</script>

<style scoped>
.data-container{
    display: flex;
    flex-direction: row;
}
</style>