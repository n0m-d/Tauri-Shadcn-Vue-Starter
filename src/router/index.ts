import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/components/dashboard/DashboardPage.vue'
import AuthenticationPage from '@/views/AuthenticationPage.vue'
import { startRouteLoading, stopRouteLoading } from '@/composables/useRouteLoading'

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DashboardLayout.vue'),
        children: [
            {
                path: '',
                name: 'dashboard',
                component: DashboardPage,
            },
            {
                path: 'modals',
                name: 'modals',
                component: () => import('@/views/ModalsPage.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: AuthenticationPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((_, __, next) => {
    startRouteLoading()
    next()
})

router.afterEach(() => {
    stopRouteLoading()
})

router.onError(() => {
    stopRouteLoading()
})

export default router
