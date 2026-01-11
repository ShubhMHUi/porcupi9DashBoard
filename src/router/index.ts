import DashBoard from '@/views/DashBoard.vue'
import Setting from '@/views/UsersSetting.vue'
import Details from '@/views/UsersDetails.vue'
import TransactionHistory from '@/views/TransactionHistory.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoard,
    },
    {
      path: '/users',
      name: 'users',
      component: Details,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Setting,
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionHistory,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
    },
  ],
})

export default router
