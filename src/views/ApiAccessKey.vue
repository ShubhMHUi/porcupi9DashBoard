<template>
  <div class="flex flex-col gap-6 flex-wrap">
    <PageHeader title="API Access Key" description="Manage your API access keys and permissions." />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UCard
        v-for="apiKey in apiKeyStore.apiKeys"
        :key="apiKey.id"
        class="relative overflow-hidden group"
        variant="subtle"
      >
        <template #header>
          <div class="flex flex-col justify-between gap-2 z-10 relative">
            <div class="flex justify-between w-full">
              <h5 class="font-semibold text-xl text-teal-800 dark:text-teal-50">
                {{ apiKey.label }}
              </h5>
              <UBadge :color="apiKey.status === 'Active' ? 'primary' : 'neutral'" variant="subtle">
                {{ apiKey.status }}
              </UBadge>
            </div>
            <div class="flex items-center gap-1">
              <UIcon name="i-lucide-clock" class="text-muted text-sm dark:text-teal-50" />
              <p class="text-muted text-xs dark:text-teal-50">
                created on: {{ apiKey.createdDate }}
              </p>
            </div>
          </div>
        </template>
        <template #default>
          <div class="flex flex-col gap-3 justify-between z-10 relative">
            <div class="flex flex-col gap-3">
              <p class="text-lg font-semibold text-teal-500 dark:text-teal-50">API Key</p>
              <p
                class="text-xl text-center font-semibold tracking-[1em] px-4 py-3 border border-dashed rounded-xl bg-teal-200/10 dark:bg-teal-500/10 text-teal-800 dark:text-teal-50 truncate"
              >
                {{ apiKey.key }}
              </p>
              <div class="flex items-center gap-2">
                <UIcon name="i-lucide-calendar-days" class="text-muted text-md dark:text-teal-50" />
                <span class="text-teal-600 font-medium text-md sm:text-sm dark:text-teal-50"
                  >Duration {{ apiKey.durationRemaining }} day Remaining
                </span>
              </div>
            </div>
          </div>
          <!-- Glassy Decoration -->
          <div
            class="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-linear-to-br blur-3xl pointer-events-none transition-all duration-700 ease-in-out group-hover:scale-125 group-hover:rotate-12 group-hover:opacity-70"
            :class="apiKey.gradient"
          ></div>
          <div
            class="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/5 backdrop-blur-md border border-white/5 pointer-events-none transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:-rotate-12"
          ></div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/common/PageHeader.vue'
import { useApiKeyStore } from '@/stores/apiKey'

const apiKeyStore = useApiKeyStore()
</script>
