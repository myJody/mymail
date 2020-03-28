import Vue from 'vue'
import VueRouter from 'vue-router'
// const Home =() => import('components/content/home.vue')


const NavHome =() => import('../views/home/home.vue')
const Category =() => import('../views/category/category.vue')
const Cart =() => import('../views/cart/cart.vue')
const Profile =() => import('../views/profile/profile.vue')
const Detail= () => import('../views/detail/detail')

const Login =() =>import('components/content/login.vue')


Vue.use(VueRouter)

const routes=[
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:NavHome,
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile/:userid',
        component:Profile
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/detail',
        component:Detail
    }
]
const router=new VueRouter({
    //配置路由和组件之间的应用关系
    routes:routes,
    mode:'history',
    linkActiveClass:'active'//将选中状态的类修改为active
})
export default router

