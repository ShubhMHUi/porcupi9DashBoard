<template>
  <header class="header">
    <div class="flex items-center justify-end gap-4 border-b border-teal-800 pb-4">
      <UTooltip text="Notifications" arrow :delay-duration="0">
        <UButton
          variant="soft"
          color="neutral"
          class="rounded-full p-3"
          icon="i-lucide-bell"
          size="xl"
        />
      </UTooltip>
      <UTooltip text="Logout" arrow :delay-duration="0">
        <UButton
          variant="soft"
          color="neutral"
          class="rounded-full p-3"
          icon="i-lucide-log-out"
          size="xl"
        />
      </UTooltip>
      <UColorModeButton variant="soft" class="rounded-full p-3" size="xl" color="neutral">
      </UColorModeButton>
    </div>
  </header>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
</script>

<style scoped></style>
