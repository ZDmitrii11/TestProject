<template>
      <div>


    <nav class="grey darken-1">
        <a href="#" @click.prevent="$emit('clickIt')" class="logo" style="font-size: 30px">Logo</a>

        <ul id="nav-mobile" class="right my-navigator " >
            <router-link
                    v-for="link in links"  :key="link.to"
                    tag="li"
                    :to="link.to"
                    active-class="active"
                    :exact="link.title"

            >
                <li >
                    <a style="rgba(0,0,0,0.1)" :href="link.to">{{link.title}}</a>
                </li>
            </router-link>

        </ul>

    </nav>

      </div>
</template>

<script>



    export default {
        name: "NavBar",
        components: {

        },

        props: ['hist'],

        data() {
            return {
                links: [
                    {title: 'Home', to: '/', exact: true},
                    {title: 'Categories', to: 'categories'},
                    {title: 'History', to: 'history', history},
                    {title: 'Orders', to: 'orders'},
                    {title: 'Todo-List', to: 'todo-list'},
                    {title: 'UserProfile', to: 'user-profile'},


                ],
                isActive:false
            }
        },

        computed: {

        },
        methods: {
            emitClick() {

            }
        },
        created() {

        },
        mounted() {

        }
    }
</script>

<style scoped>
    @import "~materialize-css/dist/css/materialize.min.css";
 #nav-mobile{

     display: flex;
     flex-direction: row;

 }
    @media screen and (max-width: 995px) {
        .my-navigator{
            width: auto;
            display: flex;
             flex-wrap: nowrap;
            font-size: small;
        }
    }

    .back {
        color: black;
        background-color: rgba(0,0,0,0.1);
    }

</style>