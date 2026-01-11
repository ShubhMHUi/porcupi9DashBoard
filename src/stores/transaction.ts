import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Transaction {
  id: string
  amount: number
  status: 'Completed' | 'Pending' | 'Failed'
  method: string
  methodIcon: string
  date: string // ISO string
}

export const useTransactionStore = defineStore('transaction', () => {
  // State
  const transactions = ref<Transaction[]>([
    {
      id: 'TXN-1001',
      amount: 50.0,
      status: 'Completed',
      method: 'Credit Card',
      methodIcon: 'i-lucide-credit-card',
      date: '2024-04-25T10:30:00',
    },
    {
      id: 'TXN-1002',
      amount: 120.5,
      status: 'Pending',
      method: 'UPI',
      methodIcon: 'i-lucide-badge-indian-rupee',
      date: '2024-04-24T14:20:00',
    },
    {
      id: 'TXN-1003',
      amount: 9.99,
      status: 'Failed',
      method: 'Stripe',
      methodIcon: 'i-lucide-credit-card',
      date: '2024-04-22T09:15:00',
    },
    {
      id: 'TXN-1004',
      amount: 200.0,
      status: 'Completed',
      method: 'Credit Card',
      methodIcon: 'i-lucide-credit-card',
      date: '2024-04-20T16:45:00',
    },
    {
      id: 'TXN-1005',
      amount: 75.25,
      status: 'Completed',
      method: 'Apple Pay',
      methodIcon: 'i-lucide-apple',
      date: '2024-04-18T11:00:00',
    },
    {
      id: 'TXN-1006',
      amount: 320.0,
      status: 'Completed',
      method: 'Credit Card',
      methodIcon: 'i-lucide-credit-card',
      date: '2024-04-15T13:30:00',
    },
    {
      id: 'TXN-1007',
      amount: 45.5,
      status: 'Pending',
      method: 'UPI',
      methodIcon: 'i-lucide-badge-indian-rupee',
      date: '2024-04-12T08:20:00',
    },
    {
      id: 'TXN-1008',
      amount: 15.0,
      status: 'Completed',
      method: 'Stripe',
      methodIcon: 'i-lucide-credit-card',
      date: '2024-04-10T09:45:00',
    },
    {
      id: 'TXN-1009',
      amount: 89.99,
      status: 'Failed',
      method: 'Credit Card',
      methodIcon: 'i-lucide-credit-card',
      date: '2024-04-08T15:10:00',
    },
    {
      id: 'TXN-1010',
      amount: 150.0,
      status: 'Completed',
      method: 'UPI',
      methodIcon: 'i-lucide-badge-indian-rupee',
      date: '2024-04-05T11:30:00',
    },
    {
      id: 'TXN-1011',
      amount: 25.5,
      status: 'Pending',
      method: 'Apple Pay',
      methodIcon: 'i-lucide-apple',
      date: '2024-04-03T14:45:00',
    },
    {
      id: 'TXN-1012',
      amount: 499.99,
      status: 'Completed',
      method: 'Credit Card',
      methodIcon: 'i-lucide-credit-card',
      date: '2024-03-30T10:00:00',
    },
    {
      id: 'TXN-1013',
      amount: 12.0,
      status: 'Completed',
      method: 'Stripe',
      methodIcon: 'i-lucide-credit-card',
      date: '2024-03-28T16:20:00',
    },
    {
      id: 'TXN-1014',
      amount: 65.0,
      status: 'Failed',
      method: 'UPI',
      methodIcon: 'i-lucide-badge-indian-rupee',
      date: '2024-03-25T09:30:00',
    },
    {
      id: 'TXN-1015',
      amount: 110.0,
      status: 'Completed',
      method: 'Apple Pay',
      methodIcon: 'i-lucide-apple',
      date: '2024-03-22T13:15:00',
    },
    {
      id: 'TXN-1016',
      amount: 35.75,
      status: 'Pending',
      method: 'Credit Card',
      methodIcon: 'i-lucide-credit-card',
      date: '2024-03-20T11:45:00',
    },
    {
      id: 'TXN-1017',
      amount: 210.5,
      status: 'Completed',
      method: 'UPI',
      methodIcon: 'i-lucide-badge-indian-rupee',
      date: '2024-03-18T15:00:00',
    },
    {
      id: 'TXN-1018',
      amount: 8.5,
      status: 'Completed',
      method: 'Stripe',
      methodIcon: 'i-lucide-credit-card',
      date: '2024-03-15T10:10:00',
    },
    {
      id: 'TXN-1019',
      amount: 1200.0,
      status: 'Failed',
      method: 'Credit Card',
      methodIcon: 'i-lucide-credit-card',
      date: '2024-03-12T14:30:00',
    },
    {
      id: 'TXN-1020',
      amount: 55.0,
      status: 'Completed',
      method: 'Apple Pay',
      methodIcon: 'i-lucide-apple',
      date: '2024-03-10T09:20:00',
    },
  ])

  // Getters
  const recentTransactions = computed(() => {
    // Return top 5 recent transactions
    return transactions.value.slice(0, 5)
  })

  // Actions
  function addTransaction(transaction: Transaction) {
    transactions.value.unshift(transaction)
  }

  return {
    transactions,
    recentTransactions,
    addTransaction,
  }
})
