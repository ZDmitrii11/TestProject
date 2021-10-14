<template>
    <div class="dropdown">

        <button class="btn" >
            <ul style="background-color: gray " id="slide-out" ref="dropDown" class="sidenav"
            >
                <li style="background-color: white; border: 2px solid black" v-for="el in links" :key="el.url" >
                   <router-link
                   :to="el.url"
                   active-class="active"
                   :exact="el.exact"
                   @click="closeDropDown">
                       <a href="#" >{{el.title}}</a>
                   </router-link>
                   </li>
                <div>
                    <img  class="user-dropdown-image"
                          src="https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw" alt="userPicture">
                </div>

                <footer style="margin-top: auto;border: 1px solid white;height: 100px">Footer For Drop Down</footer>
            </ul>

            <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons" style="color: white">Side
                Bar</i></a>

        </button>

 <div>

 </div>

    </div>

</template>

<script>
    import M from 'materialize-css'

    export default {
        name: "DropDown",
        data(){
            return {
                links: [
                    {title: 'Home', url: '/' , exact:true},
                    {title: 'Categories', url: 'categories'},
                    {title: 'History', url: 'history'},
                    {title: 'Orders', url: 'orders'},
                    {title: 'Todo-List',url: 'todo-list'},
                    {title: 'UserProfile', url: 'user-profile'},
                    {title: 'LogOut', url: 'login'},

                ],
               drowDown:null
            }
            },
        computed:{


          }
       ,

        methods: {
         closeDropDown(){
             M.Sidenav.init(this.$refs.dropDown).close()
         }
        },
        mounted() {

         this.dropDown = M.Sidenav.init(this.$refs.dropDown)


        },
        beforeUnmount() {
            if (this.dropDown && this.dropDown.destroy){
                this.dropDown.destroy()
                console.log('dropDown Destroyed')
            }
        }
    }
</script>

<style scoped>
    .user-dropdown-image{
        height: 200px;
    }
</style>