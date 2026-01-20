<template>
  <aside
    class="aside transition-all duration-300 fixed lg:static z-20 h-full"
    :class="[
      appStore.isSidebarCollapsed
        ? '-translate-x-full lg:translate-x-0 lg:w-22'
        : 'translate-x-0 w-72 lg:w-72',
    ]"
  >
    <div class="flex items-center justify-center mb-8">
      <UButton
        variant="solid"
        class="rounded-full p-3"
        color="primary"
        size="xl"
        :icon="appStore.isSidebarCollapsed ? 'i-lucide-chevron-right' : 'i-lucide-chevron-left'"
        @click="appStore.toggleSidebar()"
      />
      <!-- :avatar="{
          src: porcupineIcon,
          size: 'xl',
        }" -->
    </div>
    <nav class="flex flex-col justify-center gap-6">
      <div class="sidebar-userlogin flex flex-col items-center gap-3">
        <picture class="border-2 border-dashed border-teal-200 rounded-full">
          <img
            :src="userStore.profile.avatar || '../assets/img/avatar.png'"
            alt="User Avatar"
            class="transition-all duration-300"
            :class="appStore.isSidebarCollapsed ? 'w-13 h-13' : 'w-26 h-26'"
          />
        </picture>
        <!-- <h6
          v-if="!props.collapsed"
          class="text-2xl text-center font-medium transition-all duration-300"
        >
          John Doe
        </h6> -->
      </div>
      <div
        v-for="item in appStore.menuItems"
        :key="item.path"
        class="menu-item flex items-center gap-3 transition-all duration-300 rounded-4xl cursor-pointer p-4 group"
        :class="[$route.path === item.path ? 'active-aside' : '']"
        @click="navigateTo(item.path)"
      >
        <UIcon :name="item.icon" class="w-6 h-6 transition-colors duration-300" />
        <p v-if="!appStore.isSidebarCollapsed" class="text-md font-medium">{{ item.label }}</p>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import { useUserStore } from '@/stores/user'

const appStore = useAppStore()
const userStore = useUserStore()
const router = useRouter()

const navigateTo = (path: string) => {
  router.push(path)
  if (window.innerWidth < 1024) {
    appStore.setSidebarCollapsed(true)
  } else if (appStore.isSidebarCollapsed) {
    appStore.setSidebarCollapsed(false)
  }
}
</script>

<style scoped></style>
