import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";


import exports from './export'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        name: 'Layout',
        component: () => import('@/layout/layout.vue'),
        redirect: '/dashboard',
        meta: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                redirect: '/dashboard/home',
                component: () => import('@/components/transition/router-transition.vue'),
                meta: {
                    title: 'System Panel',
                    icon: 'icon-dianshang'
                },
                children: [
                    {
                        path: 'home',
                        name: 'dashboard-home',
                        component: () => import('@/components/views/shared/dashboard/index.vue'),
                        meta: {
                            title: 'Home',
                            icon: 'icon-dianshang'
                        }
                    },
                ]
            },
            {
                path: 'product',
                name: 'Product',
                redirect: '/product/item',
                component: () => import('@/components/transition/router-transition.vue'),
                meta: {
                    title: 'Product',
                    icon: 'icon-shangpin'
                },
                children: [
                    {
                        path: 'item',
                        name: 'product-item',
                        component: () => import('@/components/views/shared/product/item.vue'),
                        meta: {
                            title: 'Product Item',
                            icon: 'icon-list'
                        }
                    },
                    {
                        path: 'sku',
                        name: 'product-sku',
                        component: () => import('@/components/views/shared/product/sku.vue'),
                        meta: {
                            title: 'Product Sku',
                            icon: 'icon-list'
                        }
                    }
                    , {
                        path: 'serial',
                        name: 'product-serial',
                        component: () => import('@/components/views/shared/product/serial.vue'),
                        meta: {
                            title: 'Product Serial',
                            icon: 'icon-list'
                        }
                    }

                ]
            },
            {
                path: 'receive',
                name: 'Receive',
                redirect: '/receive/order',
                component: () => import('@/components/transition/router-transition.vue'),
                meta: {
                    title: 'Receive',
                    icon: 'icon-shangpin'
                },
                children: [
                    {
                        path: 'order',
                        name: 'receive-order',
                        component: () => import('@/components/views/shared/receive/order.vue'),
                        meta: {
                            title: 'Receive Order',
                            icon: 'icon-list'
                        }
                    },
                    {
                        path: 'detail',
                        name: 'receive-detail',
                        component: () => import('@/components/views/shared/receive/detail.vue'),
                        meta: {
                            title: 'Receive Detail',
                            icon: 'icon-list'
                        }
                    },

                ]
            },
            {
                path: 'setup',
                name: 'Setup',
                redirect: '/setup/auth',
                component: () => import('@/components/transition/router-transition.vue'),
                meta: {
                    title: 'Setup',
                    icon: 'icon-shangpin'
                },
                children: [
                    {
                        path: 'auth',
                        name: 'setup-auth',
                        component: () => import('@/components/views/shared/setup/auth.vue'),
                        meta: {
                            title: 'Setup Auth',
                            icon: 'icon-list'
                        }
                    },


                ]
            },
            {
                path: 'goods',
                name: 'goods',
                redirect: '/goods/list',
                component: () => import('@/components/transition/router-transition.vue'),
                meta: {
                    title: 'Goods',
                    icon: 'icon-shangpin'
                },
                children: [
                    {
                        path: 'list',
                        name: 'goods-list',
                        component: () => import('@/components/views/shared/goods/list.vue'),
                        meta: {
                            title: 'Goods List',
                            icon: 'icon-list'
                        }
                    }
                ]
            },
            {
                path: 'buying',
                name: 'buying',
                redirect: '/buying/list',
                component: () => import('@/components/transition/router-transition.vue'),
                meta: {
                    title: 'Buying',
                    icon: 'icon-shangpin'
                },
                children: [
                    {
                        path: 'list',
                        name: 'buying-list',
                        component: () => import('@/components/views/shared/buying/list.vue'),
                        meta: {
                            title: 'Buying List',
                            icon: 'icon-list'
                        },
                        // children: [
                        //     {
                        //         path: 'detail', name: 'buying-detail', component: () => import('@/components/views/shared/buying/auth.vue'),
                        //         meta: {
                        //             title: 'Buying Detail',
                        //             icon: 'icon-dulituihuodingdan'
                        //         }
                        //     }
                        // ]
                    },
                    {
                        path: 'list/detail/:id?',
                        name: 'buying-detail',
                        component: () => import('@/components/views/shared/buying/detail.vue'),
                        meta: {
                            title: 'Buying Detail',
                            icon: 'icon-dulituihuodingdan',
                            keepAlive: false
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