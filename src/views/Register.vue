<template>
    <div class="register-page">
        <div class="register-container" style="text-align: center">
            <h3>Register</h3>
            <form @submit.prevent="Register" >
                <div class="register-inputs">
                    <label>User Name:</label>
                    <input type="text" v-model="name">
                </div>
                <div class="register-inputs">
                    <label>Password:</label>
                    <input type="password" v-model="password">
                </div>
              <div class="registerButtons">
                  <button class="btn my-btn" @click="Register" :disabled="triggerButton">Click for Register</button>
                  <button class="btn my-btn" @click="BackToLogin">Back To Login</button>
              </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                name: '',
                password: '',
                isActive:false
            }
        },
        watch:{

        },
        computed: {
            triggerButton() {
                return (this.password.trim() && this.name.trim()) ? this.isActive : !this.isActive
            }
        },
        methods:{
            Register(){

                if (!this.isActive){
                    console.log('registred',this.name,this.password)
                    if (this.$route.currentRoute !== '/login' ){
                        this.$router.push('/login')
                    }
                }

            },
            BackToLogin(){
                this.$router.push('/login')
            }
        },
    }
</script>

<style scoped>
    .register-page {
        width: auto;
        margin: 50px;
        padding: 2rem;
        background-color: lightyellow;
        display: flex;
        justify-content: center;

    }

    .login-container > h3 {
        text-align: center;
    }

    .register-container {
        width: 500px;
    }





    .register-inputs {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .my-btn{
        margin-left: 10px;
    }
    .registerButtons{
        margin: 2rem;
        padding: 2rem;
        display: flex;
    }
</style>