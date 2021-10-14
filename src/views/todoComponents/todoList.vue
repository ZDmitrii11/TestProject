<template>
    <div class="todo-container">
        <div class="todo-control">
        </div>
        <div class="todo-items">
           <ul>
               <todoItem :todos="todos"/>
           </ul>
        </div>
    </div>
</template>

<script>
    import todoItem from "./todoItem";
    export default {
        name: "todoList",
        components:{
            todoItem
        },
        data(){
            return {
                todos:[1,2,3,4,5],
            }
        },

        methods:{
            formSubmit(){

            }
        },

    }
</script>

<style scoped>

</style>