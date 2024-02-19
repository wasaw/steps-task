import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Clinics',
        component: () => import('../pages/Clinics.vue')
    }, 
    {
        path: '/doctors',
        name: 'doctors',
        component: () => import('../pages/Doctors.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router