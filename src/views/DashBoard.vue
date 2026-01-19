<template>
  <div class="container flex flex-col gap-12">
    <div class="flex items-stretch gap-6">
      <UCard variant="subtle" class="flex-1 glow-shadow relative overflow-hidden group z-10">
        <template #header>
          <div class="flex items-center justify-between p-3">
            <div class="flex flex-col gap-4">
              <h5 class="text-xl font-semibold text-teal-800 dark:text-teal-50">Hi, Welcome</h5>
              <p class="text-5xl font-bold text-teal-700 dark:text-teal-50">
                {{ userStore.profile.name }}
              </p>
              <div class="flex items-center gap-4">
                <UBadge icon="i-lucide-calendar" color="primary" variant="soft"
                  >till date 27/04/2025</UBadge
                >
              </div>
            </div>
            <div class="flex flex-col items-center gap-4">
              <BadgeTier :tier="userStore.subscription.plan.toLowerCase() as any" />
              <div class="flex items-center gap-4">
                <UButton
                  size="xl"
                  icon="i-lucide-circle-fading-arrow-up"
                  color="primary"
                  variant="solid"
                  @click="$router.push('/upgrade-plan')"
                  >Upgrade</UButton
                >
              </div>
            </div>
            <div
              class="absolute -z-10 -bottom-24 -right-24 w-64 h-64 rounded-full bg-linear-to-br blur-3xl pointer-events-none transition-all duration-700 ease-in-out group-hover:scale-125 group-hover:rotate-12 group-hover:opacity-70 from-blue-500/30 to-purple-500/30"
            ></div>
            <div
              class="absolute -z-10 -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/5 backdrop-blur-md border border-white/5 pointer-events-none transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:-rotate-12"
            ></div>
          </div>
        </template>
      </UCard>

      <!-- Credit Usage Chart Card -->
    </div>

    <div class="flex gap-8 flex-wrap">
      <div class="flex-grow basis-full md:basis-0">
        <UCard
          variant="subtle"
          class="rounded-2xl h-full glow-shadow hover-box-shadow relative overflow-hidden group"
        >
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
                class="text-2xl text-center font-semibold tracking-[1em] px-8 py-4 border border-dashed rounded-xl bg-teal-200/10 dark:bg-teal-500/10 text-teal-800 dark:text-teal-50"
              >
                {{ userStore.subscription.key }}
              </p>
              <UTooltip text="Copy Key" arrow :delay-duration="0">
                <UButton size="xl" icon="i-lucide-copy" color="primary" variant="link"></UButton>
              </UTooltip>
            </div>
          </template>
          <template #footer>
            <div class="flex items-center justify-end relative z-5">
              <UButton size="xl" icon="i-lucide-key" color="primary" variant="solid"
                >View More Keys</UButton
              >
            </div>
            <div
              class="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-linear-to-br blur-3xl pointer-events-none transition-all duration-700 ease-in-out group-hover:scale-125 group-hover:rotate-12 group-hover:opacity-70 from-blue-500/30 to-purple-500/30"
            ></div>
            <div
              class="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/5 backdrop-blur-md border border-white/5 pointer-events-none transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:-rotate-12"
            ></div>
          </template>
        </UCard>
      </div>
      <div class="flex-grow basis-full md:basis-0">
        <UCard variant="subtle" class="rounded-2xl glow-shadow hover-box-shadow">
          <template #header>
            <h5 class="text-2xl text-teal-800 font-semibold dark:text-teal-50">AI Credit</h5>
          </template>
          <CreditUsageChart :total="userStore.credits.total" :used="userStore.credits.used" />
        </UCard>
      </div>
    </div>
    <UCard variant="subtle" class="rounded-2xl hover-box-shadow">
      <template #header>
        <h3 class="text-xl font-semibold dark:text-teal-50 text-teal-800">Transaction History</h3>
      </template>
      <UTable :columns="columns" :data="transactionStore.recentTransactions" class="flex-1">
      </UTable>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import BadgeTier from '@/components/misc/BadgeTier.vue'
import CreditUsageChart from '@/components/dashboard/CreditUsageChart.vue'
import { h, resolveComponent } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import { useUserStore } from '@/stores/user'
import { useTransactionStore } from '@/stores/transaction'
import type { Transaction } from '@/stores/transaction'

const UBadge = resolveComponent('UBadge')
const UButton = resolveComponent('UButton')
const UIcon = resolveComponent('UIcon')

const userStore = useUserStore()
const transactionStore = useTransactionStore()

const columns: TableColumn<Transaction>[] = [
  {
    accessorKey: 'id',
    header: '#',
    cell: ({ row }) => `#${row.getValue('id')}`,
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => {
      return new Date(row.getValue('date')).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      const color =
        {
          Completed: 'primary' as const,
          Pending: 'warning' as const,
          Failed: 'error' as const,
        }[status] || 'gray'

      return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () => status)
    },
  },
  {
    accessorKey: 'method',
    header: 'Method',
    cell: ({ row }) => {
      return h('div', { class: 'flex items-center gap-2' }, [
        h(UIcon, { name: row.original.methodIcon, class: 'w-5 h-5 text-gray-500' }),
        h('span', row.getValue('method') as string),
      ])
    },
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-start' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount') as string)

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
      }).format(amount)

      return h('div', { class: 'text-start font-medium ' }, formatted)
    },
  },
  {
    id: 'actions',
    header: 'Invoice',
    cell: () =>
      h(
        UButton,
        {
          icon: 'i-lucide-download',
          variant: 'outline',
          size: 'xl',
          label: 'Download',
          onClick: () => console.log('Download invoice'),
        },
        () => 'Download',
      ),
  },
]
</script>
