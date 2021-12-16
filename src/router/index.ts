import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";


import exports from './export'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('@/layout/layout.vue'),
        redirect: '/dashboard',
        meta: {
            title: 'Home'
        },
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                redirect: '/dashboard/home',
                component: () => import('@/components/transition/router-transition.vue'),
                meta: {
                    title: 'System Panel',
                    icon: 'icon-dianshang'
                },
                children: [
                    {
                        path: 'home', name: 'dashboard-home', component: () => import('@/components/views/shared/dashboard/index.vue'),
                        meta: {
                            title: 'Home',
                            icon: 'icon-dianshang'
                        }
                    },
                ]
            },
            {
                path: '/goods',
                name: 'goods',
                redirect: '/goods/list',
                component: () => import('@/components/transition/router-transition.vue'),
                meta: {
                    title: 'Goods',
                    icon: 'icon-shangpin'
                },
                children: [
                    {
                        path: 'list', name: 'goods-list', component: () => import('@/components/views/shared/goods/list.vue'),
                        meta: {
                            title: 'Goods List',
                            icon: 'icon-list'
                        }
                    }
                ]
            },
            {
                path: '/buying',
                name: 'buying',
                redirect: '/buying/list',
                component: () => import('@/components/transition/router-transition.vue'),
                meta: {
                    title: 'Buying',
                    icon: 'icon-shangpin'
                },
                children: [
                    {
                        path: 'list', name: 'buying-list', component: () => import('@/components/views/shared/buying/list.vue'),
                        meta: {
                            title: 'Buying List',
                            icon: 'icon-list'
                        }
                    },
                    {
                        path: '/detail/:purchase_no?', name: 'buying-detail', component: () => import('@/components/views/shared/buying/detail.vue'),
                        meta: {
                            title: 'Buying Detail',
                            icon: 'icon-dulituihuodingdan'
                        }
                    }

                ]
            }
        ]
    },
    ...exports

]
const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
})

export default router