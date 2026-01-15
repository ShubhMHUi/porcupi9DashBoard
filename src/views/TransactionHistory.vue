<template>
  <div class="flex flex-col gap-6">
    <PageHeader>
      <template #title>
        <h1 class="text-3xl font-bold text-teal-800 dark:text-teal-50">Transaction History</h1>
      </template>
      <template #description>
        <p class="text-gray-500 dark:text-gray-400">View and manage your transaction history.</p>
      </template>
    </PageHeader>
    <UCard
      variant="subtle"
      class="rounded-2xl glow-shadow hover-box-shadow bg-background/50 backdrop-blur-md"
    >
      <template #header>
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <!-- Filters -->
          <div class="flex flex-col sm:flex-wrap sm:flex-row gap-3">
            <USelect
              v-model="statusFilter"
              :items="statusOptions"
              placeholder="All Status"
              class="w-full sm:w-40"
              size="xl"
            />
            <USelect
              v-model="methodFilter"
              :items="methodOptions"
              placeholder="All Methods"
              class="w-full sm:w-40"
              size="xl"
            />
            <UInput
              v-model="dateFilter"
              type="date"
              class="w-full sm:w-auto"
              size="xl"
              icon="i-lucide-calendar"
            />
            <UButton
              v-if="statusFilter || methodFilter || dateFilter"
              icon="i-lucide-x"
              color="gray"
              variant="soft"
              size="xl"
              @click="clearFilters"
            >
              Clear
            </UButton>
          </div>
        </div>
      </template>

      <!-- Table -->
      <div class="overflow-x-auto">
        <UTable :columns="columns" :data="filteredTransactions" :loading="loading" class="w-full">
          <template #empty-state>
            <div class="flex flex-col items-center justify-center py-12 gap-3">
              <UIcon name="i-lucide-inbox" class="w-12 h-12 text-gray-400" />
              <span class="text-gray-500 font-medium">No transactions found</span>
            </div>
          </template>
        </UTable>
      </div>

      <template #footer>
        <div class="flex justify-center md:justify-end text-sm text-gray-500">
          Showing {{ filteredTransactions.length }} transactions
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import { useTransactionStore } from '@/stores/transaction'
import PageHeader from '@/components/common/PageHeader.vue'

const UBadge = resolveComponent('UBadge')
const UIcon = resolveComponent('UIcon')

// Types
interface Transaction {
  id: string
  amount: number
  status: 'Completed' | 'Pending' | 'Failed'
  method: string
  methodIcon: string
  date: string
}

// Data
const statusFilter = ref('')
const methodFilter = ref('')
const dateFilter = ref('')
const loading = ref(false)

const statusOptions = ['Completed', 'Pending', 'Failed']
const methodOptions = ['Credit Card', 'UPI', 'Stripe', 'Apple Pay']

const clearFilters = () => {
  statusFilter.value = ''
  methodFilter.value = ''
  dateFilter.value = ''
}

const transactionStore = useTransactionStore()

// Computed
const filteredTransactions = computed(() => {
  return transactionStore.transactions.filter((txn) => {
    const matchesStatus = !statusFilter.value || txn.status === statusFilter.value
    const matchesMethod = !methodFilter.value || txn.method === methodFilter.value
    const matchesDate = !dateFilter.value || txn.date.startsWith(dateFilter.value)
    return matchesStatus && matchesMethod && matchesDate
  })
})

// Columns
const columns: TableColumn<Transaction>[] = [
  {
    accessorKey: 'id',
    header: 'Transaction ID',
    cell: ({ row }) =>
      h('span', { class: 'font-medium text-gray-900 dark:text-white' }, `#${row.original.id}`),
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => {
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(row.original.amount)
      return h('span', { class: 'font-semibold' }, formatted)
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status
      const colorMap: Record<string, 'primary' | 'warning' | 'error' | 'gray'> = {
        Completed: 'primary',
        Pending: 'warning',
        Failed: 'error',
      }
      const color = colorMap[status] || 'gray'

      return h(
        UBadge,
        {
          class: 'capitalize',
          variant: 'subtle',
          color,
        },
        () => status,
      )
    },
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      return new Date(row.original.date).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    },
  },
  {
    accessorKey: 'method',
    header: 'Method',
    cell: ({ row }) => {
      return h('div', { class: 'flex items-center gap-2' }, [
        h(UIcon, { name: row.original.methodIcon, class: 'w-5 h-5 text-gray-400' }),
        h('span', row.original.method),
      ])
    },
  },
]
</script>
