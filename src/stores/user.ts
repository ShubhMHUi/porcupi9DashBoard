import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // State
  const profile = ref({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dob: '1990-05-15',
    city: 'New York',
    country: 'United States',
    createdDate: '2023-01-10',
    avatar: 'https://avatar.iran.liara.run/public/5',
  })

  const subscription = ref({
    plan: 'Plus', // 'Basic', 'Plus', 'Pro', 'Pro Plus'
    expiryDate: '2025-12-31',
    key: '1234567890',
  })

  const credits = ref({
    total: 1000,
    used: 650,
  })

  // Getters
  const remainingCredits = computed(() => credits.value.total - credits.value.used)
  const isProPlus = computed(() => subscription.value.plan === 'Pro Plus')

  // Actions
  function updateProfile(newProfile: Partial<typeof profile.value>) {
    profile.value = { ...profile.value, ...newProfile }
  }

  function upgradePlan(newPlan: string) {
    subscription.value.plan = newPlan
  }

  return {
    profile,
    subscription,
    credits,
    remainingCredits,
    isProPlus,
    updateProfile,
    upgradePlan,
  }
})
