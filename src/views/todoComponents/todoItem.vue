<template>
    <div class="todo-items">

        <div class="todo-item" v-for="todo in todos" :key="todo">
          <li>{{todo}}</li>
            <button><nbsp>X</nbsp></button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "todoItem",
        props: {
           todos: {
               type: Array,
               required:true,
           }
        }

    }
</script>

<style scoped>

</style>