<template>
    <div class="login-page">

        <div class="login-container">
            <div class="loginText" style="text-align: center"><h3>Login:</h3></div>
            <form class="form-control" @submit.prevent="Login">
                <div class="login-inputs">
                    <label>User Name:</label>
                    <input type="text" v-model="user.email" autocomplete="off" :rules="emailregex">

                </div>
                <div class="login-inputs">
                    <label>Password:</label>
                    <input type="password" v-model="user.password" autocomplete="off" :rules="passwordregex">
                </div>
                <button class="btn register-btn" @click="Login" :disabled="triggerButton">Click for Login</button>
            </form>
            <div class="toRegister-container">
                <span>Not Have Accaunt?</span> <a style="cursor: pointer" @click="Register">Register It!</a>
            </div>
        </div>
    </div>

</template>

<script>

    import axios from 'axios'
    export default {
        name: "Login",


        data() {
            return {
                user:{
                    email: '',
                    password: '',

                },
                isActive: false,
                emailregex:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                passwordregex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/gm,
                error:false

            }
        },

        computed: {
            triggerButton() {
                return (this.user.password.trim() && this.user.email.trim()) ? this.isActive : !this.isActive
            }
        },
        methods: {
            Login() {
                if (!this.emailregex.test(this.user.email) && !this.passwordregex.test(this.user.password)){
                    this.error = !this.error
                }
                if (this.emailregex.test(this.user.email) && this.passwordregex.test(this.user.password)){
                  axios.post('http://localhost:3000/users',{
                        email:this.email,
                        user:this.user
                    }).then(res=>console.log(res.data))
                    this.$router.push('/')
                    return this.$route.meta.layout = 'main'

                }



            },
            Register() {
                this.user.email = this.user.password = ''
                if (this.$route.currentRoute !== '/register') {
                    this.$router.push('/register')
                }
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    .login-page {
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

    .login-container {
        width: 500px;
    }

    .register-btn {
        margin-left: 200px;
    }

    .login-inputs {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .toRegister-container {
        display: flex;
        justify-content: center;
        margin: 1rem;
    }

    .error {
        background-color: red;
    }
</style>