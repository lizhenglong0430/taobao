import VueRouter from 'vue-router'

import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../components/Home'
import ItemList from '../components/ItemList'
import Cart from '../components/Cart'
import Personal from '../components/Personal'
import store from "../store/index";

const router = new VueRouter({
    mode:'hash',
    routes:[
        {   
            path:'/',
            redirect:'/home'
        },
        {
            name:"login",
            path:'/login',
            component:Login
        },
        {
            name:"register",
            path:'/register',
            component:Register
        },
        {
            name:"home",
            path: '/home',
            component: Home,
        },
        {
            name:'cart',
            path: '/cart',
            component: Cart,
            meta:{isAuth:true}
        },
        {
            name:"itemList",
            path:'/itemList',
            component:ItemList,
            meta:{title:"itemList",isAuth:true}
        },
        {
            name:"personal",
            path:'/personal',
            component:Personal,
            meta:{isAuth:true}
        }
    ]
})

// 全局前置路由守卫——初始化的时候被调用，每次路由切换之前调用
router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth){

        if(sessionStorage.getItem("token") === store.state.cookie){
            next()
        }else{
            alert("请先登录账号")
        }
    }else{
        next()
    }
})

// 全局后置路由守卫——初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to)=>{
    document.title = to.meta.title || '淘宝网站'
})
export default router