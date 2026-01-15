<template>
  <div class="flex flex-col gap-2">
    <slot name="title">
      <h1 class="text-3xl font-bold text-teal-800 dark:text-teal-50">
        {{ title }}
      </h1>
    </slot>
    <slot name="description">
      <p class="text-gray-500 dark:text-gray-400">
        {{ description }}
      </p>
    </slot>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>
