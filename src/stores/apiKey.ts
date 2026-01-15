import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface ApiKey {
  id: string
  label: string
  status: 'Active' | 'Inactive' | 'Revoked'
  key: string
  createdDate: string
  durationRemaining: number // in days
  gradient: string // CSS classes for the gradient blob
}

export const useApiKeyStore = defineStore('apiKey', () => {
  const apiKeys = ref<ApiKey[]>([
    {
      id: '1',
      label: 'API Key No. 1',
      status: 'Active',
      key: '123456789',
      createdDate: 'Sun Jan 15, 2025',
      durationRemaining: 27,
      gradient: 'from-teal-400/30 to-purple-500/30',
    },
    {
      id: '2',
      label: 'API Key No. 2',
      status: 'Active',
      key: '987654321',
      createdDate: 'Mon Feb 20, 2025',
      durationRemaining: 15,
      gradient: 'from-blue-400/30 to-cyan-500/30',
    },
    {
      id: '3',
      label: 'Development Key',
      status: 'Inactive',
      key: 'DEV-KEY-001',
      createdDate: 'Fri Mar 10, 2025',
      durationRemaining: 0,
      gradient: 'from-orange-400/30 to-red-500/30',
    },
    {
      id: '4',
      label: 'API Key No. 4',
      status: 'Active',
      key: '123456789',
      createdDate: 'Sun Jan 15, 2025',
      durationRemaining: 27,
      gradient: 'from-teal-400/30 to-purple-500/30',
    },
    {
      id: '5',
      label: 'API Key No. 5',
      status: 'Active',
      key: '987654321',
      createdDate: 'Mon Feb 20, 2025',
      durationRemaining: 15,
      gradient: 'from-blue-400/30 to-cyan-500/30',
    },
    {
      id: '6',
      label: 'Development Key',
      status: 'Inactive',
      key: 'DEV-KEY-001',
      createdDate: 'Fri Mar 10, 2025',
      durationRemaining: 0,
      gradient: 'from-orange-400/30 to-red-500/30',
    },
  ])

  return {
    apiKeys,
  }
})
