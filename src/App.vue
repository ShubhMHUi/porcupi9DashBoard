<script setup lang="ts">
// import { ref } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from './components/layouts/AppHeader.vue'
import AppFooter from './components/layouts/AppFooter.vue'
import AppSideBar from './components/layouts/AppSideBar.vue'

// const isCollapsed = ref(false)
</script>

<template>
  <UApp>
    <div class="flex h-screen w-full p-4 md:p-8 overflow-hidden">
      <!-- Sidebar -->
      <AppSideBar />

      <!-- Main Content Area -->
      <div class="flex flex-col gap-12 flex-1 h-full overflow-y-auto">
        <AppHeader />

        <main class="flex-1 px-4 md:px-8 rounded-2xl main-content">
          <RouterView />
        </main>
        <AppFooter />
      </div>
    </div>
  </UApp>
</template>
<style scoped></style>
