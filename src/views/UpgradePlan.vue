<template>
  <div class="h-full flex flex-col gap-8">
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
      class="flex-1"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-semibold leading-6 text-gray-900 dark:text-white">
            Upgrade Your Plan
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-lucide-arrow-left"
            class="-my-1"
            @click="$router.back()"
            label="Back"
          />
        </div>
      </template>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <div
          v-for="plan in plansStore.plans"
          :key="plan.id"
          class="relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:scale-105"
          :class="[
            'bg-linear-to-br backdrop-blur-sm dark:text-white',
            plan.recommended
              ? 'border-teal-500 shadow-lg shadow-teal-500/20'
              : 'border-gray-200 dark:border-gray-700 shadow-sm',
            plan.gradient,
          ]"
        >
          <div v-if="plan.recommended" class="absolute -top-4 left-1/2 -translate-x-1/2">
            <UBadge color="success" variant="solid" size="lg">Most Popular</UBadge>
          </div>

          <div class="mb-4">
            <h4 class="text-lg font-bold mb-2">{{ plan.name }}</h4>
            <div class="flex items-baseline gap-1">
              <span class="text-3xl font-bold">{{ plan.currency }}{{ plan.price }}</span>
              <span class="text-sm opacity-70">{{ plan.period }}</span>
            </div>
          </div>

          <ul class="flex-1 space-y-3 mb-8">
            <li
              v-for="(feature, index) in plan.features"
              :key="index"
              class="flex items-start gap-2 text-sm"
            >
              <UIcon name="i-lucide-check" class="shrink-0 w-5 h-5 text-teal-500" />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <UButton
            block
            :color="plan.recommended ? 'primary' : 'secondary'"
            :variant="plan.buttonVariant"
            size="xl"
            :ui="{ rounded: 'rounded-xl' }"
            @click="selectPlan(plan)"
          >
            {{ plan.price === '0' ? 'Current Plan' : 'Upgrade' }}
          </UButton>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
import { usePlansStore } from '@/stores/plans'
import type { Plan } from '@/stores/plans'

const plansStore = usePlansStore()

const selectPlan = (plan: Plan) => {
  console.log('Selected plan:', plan.name)
  // Logic for plan selection/payment would go here
}
</script>

<style scoped></style>
