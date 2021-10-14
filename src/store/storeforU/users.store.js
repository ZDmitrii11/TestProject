import axios from "axios";
export default {
    state: {
        numbers: [1, 2, 3, 4, 5],
        users: null
    },
    actions: {
        async Users({commit}) {
            await axios.get('http://localhost:3000/users').then(
                res => {
                    commit('getUsers', res.data)
                    console.log('users', res.data)
                }
            )
        }
    },
    mutations: {
        getUsers(state, payload) {
            state.users = payload
        }
    },
    getters: {
        allUsers: state => state.users,
        allUNubers: state => state.numbers
    }
}