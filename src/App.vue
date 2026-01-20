<script setup lang="ts">
// import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app'
import AppHeader from './components/layouts/AppHeader.vue'
import AppFooter from './components/layouts/AppFooter.vue'
import AppSideBar from './components/layouts/AppSideBar.vue'

const appStore = useAppStore()

onMounted(() => {
  if (window.innerWidth < 1024) {
    appStore.setSidebarCollapsed(true)
  }
})
</script>

<template>
  <UApp>
    <div
      class="relative flex h-screen w-full p-4 md:p-8 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <!-- Background Decorative Blobs -->
      <div
        class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-400/20 blur-[120px] rounded-full animate-blob"
      ></div>
      <div
        class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-500/15 blur-[120px] rounded-full animate-blob animation-delay-4000"
      ></div>

      <!-- Sidebar -->
      <AppSideBar />

      <!-- Main Content Area -->
      <div class="relative flex flex-col gap-12 flex-1 h-full overflow-y-auto z-10">
        <AppHeader />

        <main class="flex-1 px-4 md:px-8 rounded-2xl main-content">
          <RouterView />
        </main>
        <AppFooter />
      </div>
    </div>
  </UApp>
</template>
<style>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 7s infinite alternate;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
