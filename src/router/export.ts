import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";

import Test2 from "@/components/Test2.vue";
import layout from "@/layout/layout.vue";
import {RouterTransition} from '@/components/transition'


export const routes: Array<RouteRecordRaw> = [
    {
        path: '/syuppin',
        name: 'Export',
        component: () => import('@/layout/export.vue'),
        // redirect: '/syuppin/sn',
        meta: {
            title: 'Home'
        },
        children: [
            {
                path: 'sn',
                name: 'sn',
                // redirect: '/syuppin/sn',
                component: () => import('@/components/views/syuppin/sn/sn.vue'),
            },
            {
                path: 'sn/edit/:id',
                name: 'sn-edit',
                // redirect: '/syuppin/sn',
                component: () => import('@/components/views/syuppin/sn/sn-form.vue'),
            },
        ]
    },

]

export default routes