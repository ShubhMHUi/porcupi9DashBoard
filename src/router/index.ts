import DashBoard from '@/views/DashBoard.vue'
import Setting from '@/views/UsersSetting.vue'
import Details from '@/views/UsersDetails.vue'
import TransactionHistory from '@/views/TransactionHistory.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import ApiAccessKey from '@/views/ApiAccessKey.vue'
import UpgradePlan from '@/views/UpgradePlan.vue'
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
      path: '/api-access-key',
      name: 'api-access-key',
      component: ApiAccessKey,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
    },
    {
      path: '/upgrade-plan',
      name: 'upgrade-plan',
      component: UpgradePlan,
    },
  ],
})

export default router
