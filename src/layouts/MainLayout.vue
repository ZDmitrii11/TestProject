<template>
    <div class="grey darken-3  main-layout">
        <div class="log-date" style="display: flex; justify-content: space-between">
            <!-- Modal Trigger -->
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">LogOut</a>

            <!-- Modal Structure -->
            <div id="modal1" ref="forModal" class="modal" style="width: 500px">

                <div class="modal-footer" style="display: flex;justify-content: center">
                    <router-link to="/login" class="btn red center modal-close waves-effect waves-green">LogOut
                    </router-link>
                    <router-link to="/" class="btn green center modal-close waves-effect waves-green">Back</router-link>

                </div>
            </div>


            <Date/>
        </div>
        <NavBar @clickIt="someFunction" :hist="historyRout"/>
        <DropDown/>

        <div class="fixed-action-btn">
            <router-link to="/categories" class="btn-floating btn-large red"><i class="material-icons">+</i></router-link>

        </div>

        <router-view/>
    </div>
</template>

<script>


    import NavBar from "../components/appComp/NavBar";


    import DropDown from "../components/appComp/DropDown";

    import Date from "../components/appComp/Date";

    import M from 'materialize-css'


    export default {
        name: "main",
        components: {
            NavBar, DropDown, Date
        },
        data() {
            return {
                someRouter: '',
                historyRout: [],
                myActiv: false,
                isAAA: false
            }
        },
        computed: {},
        methods: {
            someFunction() {
                if (this.$router.currentRoute.path !== '/') {
                    this.$router.push('/')
                }
            },
            logOutF() {
                if (this.$router.currentRoute.path !== '/login') {
                    this.$router.push('/login?message=logout')
                }

            },
            test() {
                this.myActiv = !this.myActiv
            }
        },


        mounted() {

            M.Modal.init(this.$refs.forModal)
            console.log(this.$refs.forModal)
            // this.$router.beforeEach((to,from)=> {
            //     this.historyRout.push(from.name)
            //         console.log(this.historyRout)
            //
            // })

        }


    }
</script>

<style scoped>

    .main-layout {
        width: 100%;
        height: 800px

    }
</style>