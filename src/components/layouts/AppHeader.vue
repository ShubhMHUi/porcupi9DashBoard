<template>
  <header class="header">
    <div class="flex items-center justify-between border-b border-teal-800 pb-4">
      <picture class="border border-teal-800 rounded-full w-12 h-12">
        <img src="@/assets/img/porcupine_Icon.png" class="w-full h-full" alt="" />
      </picture>
      <div class="flex items-center justify-end gap-4">
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
        <UTooltip arrow text="Dark/Light" :delay-duration="0">
          <UColorModeButton variant="soft" class="rounded-full p-3" size="xl" color="neutral">
          </UColorModeButton>
        </UTooltip>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
</script>

<style scoped></style>
