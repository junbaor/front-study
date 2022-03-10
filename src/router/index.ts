import {createRouter, createWebHistory} from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/home',
            component: Home
        }
    ]
})

export default router
