import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    },
    {path: '/admin', 
    name: 'admin', 
    component: AdminDashboard}
  ]
})

export default router
