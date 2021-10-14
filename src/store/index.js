import {createStore} from "vuex";
import userStore from './storeforU/users.store'

const store = new createStore({
    modules: {userStore}
})

export default store

