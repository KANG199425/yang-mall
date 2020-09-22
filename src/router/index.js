import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect: '/home'
    },
    {
        path:'/home',
        component:()=> import ('views/home/home')
    },
    {
        path:'/cart',
        component:()=> import ('views/cart/cart')
    },
    {
        path:'/profile',
        component:()=> import ('views/profile/profile')
    },
    {
        path:'/category',
        component:()=> import ('views/category/category')
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router