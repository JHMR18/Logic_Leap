import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from '../components/Login.vue'
import Admin from '../components/Admin_Login.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/admin_login',
      name: 'admin_login',
      component: Admin,
    }
  ]
})

export default router