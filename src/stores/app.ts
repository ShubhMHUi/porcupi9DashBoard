import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isSidebarCollapsed = ref(false)

  const menuItems = ref([
    { label: 'Dashboard', icon: 'i-lucide-home', path: '/' },
    { label: 'Transactions', icon: 'i-lucide-receipt', path: '/transactions' },
    { label: 'Profile', icon: 'i-lucide-user', path: '/profile' },
    { label: 'Settings', icon: 'i-lucide-settings', path: '/settings' },
  ])

  function toggleSidebar() {
    isSidebarCollapsed.value = !isSidebarCollapsed.value
  }

  function setSidebarCollapsed(value: boolean) {
    isSidebarCollapsed.value = value
  }

  return {
    isSidebarCollapsed,
    menuItems,
    toggleSidebar,
    setSidebarCollapsed,
  }
})
