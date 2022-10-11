//vue-router 4x引用方式 hash 模式是用 createWebHashHistory() 例http://localhost:8080/#/index
//createWebHistory 创建为历史模式，例http://localhost:8080/index
import { createRouter,createWebHistory } from 'vue-router' 
const routes = [
    {
      path:'/',
      redirect: "/home" 
    },
    {
        path:'/home',
        name:'home',
        component: ()=> import("@/views/index/home.vue")
    }
]

export const router = createRouter({
    history:createWebHistory('/h5/'),
    routes
})