<template>
  <aside class="aside transition-all duration-300" :class="props.collapsed ? 'w-22' : 'w-72'">
    <div class="flex items-center justify-center mb-8">
      <UButton
        variant="solid"
        class="rounded-full p-3"
        color="primary"
        size="xl"
        :icon="props.collapsed ? 'i-lucide-chevron-right' : 'i-lucide-chevron-left'"
        @click="emit('toggle')"
      />
    </div>
    <nav class="flex flex-col justify-center gap-6">
      <div class="sidebar-userlogin flex flex-col items-center gap-3">
        <picture class="border border-2 border-dashed border-teal-800 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/5"
            alt=""
            class="transition-all duration-300"
            :class="props.collapsed ? 'w-13 h-13' : 'w-26 h-26'"
          />
        </picture>
        <!-- <h6
          v-if="!props.collapsed"
          class="text-2xl text-center font-medium transition-all duration-300"
        >
          John Doe
        </h6> -->
      </div>
      <!-- Dashboard -->
      <div
        class="menu-item flex items-center gap-3 hover:bg-teal-800 transition-all duration-300 rounded-4xl cursor-pointer p-4"
        :class="{
          'active-aside': $route.path === '/',
        }"
        @click="navigateTo('/')"
      >
        <UIcon color="teal-500" name="i-lucide-home" class="w-6 h-6" />
        <p v-if="!props.collapsed" class="text-md font-medium">Dashboard</p>
      </div>

      <!-- Users -->
      <div
        class="menu-item flex items-center gap-3 transition-all duration-300 rounded-4xl cursor-pointer p-4"
        :class="{ 'active-aside': $route.path === '/users' }"
        @click="navigateTo('/users')"
      >
        <UIcon color="teal-500" fill="teal-500" name="i-lucide-users" class="w-6 h-6" />
        <p v-if="!props.collapsed" class="text-md font-medium">Users</p>
      </div>

      <!-- Settings -->
      <div
        class="menu-item flex items-center gap-3 hover:bg-teal-800 transition-all duration-300 rounded-4xl cursor-pointer p-4"
        :class="{ 'active-aside': $route.path === '/settings' }"
        @click="navigateTo('/settings')"
      >
        <UIcon color="teal-500" fill="teal-500" name="i-lucide-settings" class="w-6 h-6" />
        <p v-if="!props.collapsed" class="text-md font-medium">Settings</p>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['expand', 'toggle'])
const router = useRouter()

const navigateTo = (path: string) => {
  router.push(path)
  if (props.collapsed) {
    emit('expand')
  }
}
</script>

<style scoped></style>
