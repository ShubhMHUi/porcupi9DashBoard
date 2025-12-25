<template>
  <div class="container flex flex-col gap-14">
    <div class="flex items-stretch gap-6">
      <UCard
        variant="subtle"
        class="flex-1 bg-background bg-linear-to-r/oklab from-teal-50/75 to-teal-100/75 rounded-2xl transition-transform duration-500"
      >
        <template #header>
          <div class="flex items-center justify-between p-3">
            <div class="flex flex-col gap-4">
              <h5 class="text-xl font-semibold text-teal-800 dark:text-teal-50">Hi, Welcome</h5>
              <p class="text-5xl font-bold text-teal-700 dark:text-teal-50">John Doe</p>
              <div class="flex items-center gap-4">
                <UBadge icon="i-lucide-calendar" color="primary" variant="soft"
                  >till date 27/04/2025</UBadge
                >
              </div>
            </div>
            <div class="flex flex-col items-center gap-4">
              <BadgeTier tier="basic" />
              <div class="flex items-center gap-4">
                <UButton
                  size="xl"
                  icon="i-lucide-circle-fading-arrow-up"
                  color="primary"
                  variant="solid"
                  >Upgrade</UButton
                >
              </div>
            </div>
          </div>
        </template>
        <template #default></template>
      </UCard>

      <!-- Credit Usage Chart Card -->
    </div>

    <div class="flex gap-6">
      <div class="basis-2/3">
        <UCard variant="subtle" class="rounded-2xl h-full">
          <template #header>
            <div class="flex items-center gap-2">
              <!-- <UIcon name="i-lucide-key" class="w-6 h-6 text-teal-800" /> -->
              <h5 class="text-2xl text-teal-800 dark:text-teal-50 font-semibold">
                Subscription Key
              </h5>
            </div>
          </template>
          <template #default>
            <div class="flex items-center justify-between py-12">
              <p
                class="text-2xl text-center font-semibold tracking-[1em] px-8 py-4 border border-dashed rounded-xl bg-teal-50 dark:bg-teal-500 text-teal-800 dark:text-teal-50"
              >
                1234567890
              </p>
              <UTooltip text="Copy Key" arrow :delay-duration="0">
                <UButton size="xl" icon="i-lucide-copy" color="primary" variant="link"></UButton>
              </UTooltip>
            </div>
          </template>
          <template #footer>
            <div class="flex items-center justify-end">
              <UButton size="xl" icon="i-lucide-key" color="primary" variant="solid"
                >View More Keys</UButton
              >
            </div>
          </template>
        </UCard>
      </div>
      <div class="basis-1/2">
        <UCard variant="subtle" class="rounded-2xl">
          <template #header>
            <h5 class="text-2xl text-teal-800 font-semibold dark:text-teal-50">AI Credit</h5>
          </template>
          <CreditUsageChart :total="1000" :used="650" />
        </UCard>
      </div>
    </div>
    <UCard variant="subtle" class="rounded-2xl">
      <template #header>
        <h3 class="text-xl font-semibold dark:text-teal-50 text-teal-800">Transaction History</h3>
      </template>
      <UTable :columns="columns" :data="transactions" class="flex-1">
        <template #status="{ row }">
          <UBadge :color="getStatusColor(row.original.status)" variant="subtle" size="xs">
            {{ row.original.status }}
          </UBadge>
          <UBadge color="error" variant="solid">Hello</UBadge>
        </template>

        <template #method="{ row }">
          <div class="flex items-center gap-2">
            <UIcon :name="row.original.methodIcon" class="w-5 h-5 opacity-70" />
            <span>{{ row.original.method }}</span>
          </div>
        </template>

        <template #invoice>
          <UButton
            icon="i-lucide-file-text"
            size="xs"
            color="gray"
            variant="ghost"
            label="Invoice"
          />
        </template>
      </UTable>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import BadgeTier from '@/components/misc/BadgeTier.vue'
import CreditUsageChart from '@/components/dashboard/CreditUsageChart.vue'
import { ref } from 'vue'

interface Transaction {
  id: string
  amount: string
  status: 'Completed' | 'Pending' | 'Failed'
  method: string
  methodIcon: string
  date: string
}

const getStatusColor = (status: string) => {
  if (status === 'Completed') return 'primary'
  if (status === 'Pending') return 'orange'
  return 'red'
}

// const columns = [
//   {
//     id: 'id',
//     key: 'id',
//     label: 'Transaction ID',
//   },
//   {
//     id: 'amount',
//     key: 'amount',
//     label: 'Amount',
//   },
//   {
//     id: 'status',
//     key: 'status',
//     label: 'Status',
//   },
//   {
//     id: 'method',
//     key: 'method',
//     label: 'Method',
//   },
//   {
//     id: 'date',
//     key: 'date',
//     label: 'Date',
//   },
//   {
//     id: 'invoice',
//     key: 'invoice',
//     label: 'Invoice',
//   },
// ]
const columns = [
  {
    accessorKey: 'id',
    header: 'Transaction ID',
    key: 'id',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    key: 'amount',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    key: 'status',
  },
  {
    accessorKey: 'method',
    header: 'Method',
    key: 'method',
  },
  {
    accessorKey: 'date',
    header: 'Date',
    key: 'date',
  },
  {
    id: 'invoice',
    header: 'Invoice',
    key: 'invoice',
  },
]

const transactions = ref<Transaction[]>([
  {
    id: 'TXN-1001',
    amount: '$50.00',
    status: 'Completed',
    method: 'Credit Card',
    methodIcon: 'i-lucide-credit-card',
    date: '2024-04-25',
  },
  {
    id: 'TXN-1002',
    amount: '$120.50',
    status: 'Pending',
    method: 'PayPal',
    methodIcon: 'i-simple-icons-paypal',
    date: '2024-04-24',
  },
  {
    id: 'TXN-1003',
    amount: '$9.99',
    status: 'Failed',
    method: 'Stripe',
    methodIcon: 'i-simple-icons-stripe',
    date: '2024-04-22',
  },
  {
    id: 'TXN-1004',
    amount: '$200.00',
    status: 'Completed',
    method: 'Credit Card',
    methodIcon: 'i-lucide-credit-card',
    date: '2024-04-20',
  },
  {
    id: 'TXN-1005',
    amount: '$75.25',
    status: 'Completed',
    method: 'Apple Pay',
    methodIcon: 'i-simple-icons-applepay',
    date: '2024-04-18',
  },
])
</script>
