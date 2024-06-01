import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Admin from '../components/Admin_Login.vue'
import Dashboard from '../views/Dashboard.vue'
console.log('Login:', Login); // Check if the component is being imported correctly
console.log('Admin:', Admin);
console.log('Dashboard:', Dashboard);
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
    {
    path: '/admin_login',
    name: 'admin_login',
    component: Admin,
    }
  ]
})

export default router
