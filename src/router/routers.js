import {createRouter,createWebHashHistory} from "vue-router/dist/vue-router.esm-browser";


const routes = [


    {
        path: '/login',
        name:'login',
        meta:{layout : 'auth'},
        component: ()=>import('../views/Login')

    },
    {
        path: '/register',
        name:'register',
        meta:{layout : 'auth'},
        component: ()=>import('../views/Register')

    },
    {
        path:'/',
        name:'home',
        component:()=>import('../views/Home'),
        meta:{layout : 'main-layout'}
    },
    {
        path: '/categories',
        name:'categories',
        meta:{layout : 'main-layout'},
        component: ()=>import('../views/Categories'),

    },
    {
        path:'/history',
        name:'history',
        meta:{layout : 'main-layout'},
        component: ()=>import('../views/History'),

    },
    {
        path:'/orders',
        name:'orders',
        meta:{layout : 'main-layout'},
        component: ()=>import('../views/Orders'),
    },
    {
        path:'/user-profile',
        name:'user-profile',
        meta:{layout : 'main-layout'},
        component: ()=>import('../views/UserProfile'),

    },
    {
        path: '/todo-list',
        name:'todo-list',
        meta: {layout: 'main-layout'},
        component: ()=>import('../views/todoComponents/todoList'),
        children:[{
            path:'/todo-item',
            name:'todo-item',
            meta:{layout: 'main-layout'},
            component: ()=>import('../views/todoComponents/todoItem')
        }],

    }


]

const router = createRouter({
    history:createWebHashHistory(),
    routes,

})


export default router;