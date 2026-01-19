<script setup lang="ts">
import { computed } from 'vue'

type Tier = 'basic' | 'pro' | 'pro-plus'

interface Props {
  tier: Tier
}

const props = defineProps<Props>()

const tierConfig = computed(() => {
  switch (props.tier) {
    case 'basic':
      return {
        label: 'BASIC',
        gradient: 'bg-[linear-gradient(135deg,#d4d4d8,#a1a1aa)]',
        icon: 'i-lucide-star',
        iconColor: 'text-gray-600',
      }

    case 'pro':
      return {
        label: 'PRO',
        gradient: 'bg-[linear-gradient(135deg,#3b82f6,#1e40af)]',
        icon: 'i-lucide-sparkle',
        iconColor: 'text-blue-600',
      }

    case 'pro-plus':
      return {
        label: 'PRO PLUS',
        gradient: 'bg-[linear-gradient(135deg,#f5d033,#e4a700,#d48800)]',
        icon: 'i-lucide-sparkles',
        iconColor: 'text-yellow-500',
      }

    default:
      return {
        label: 'BASIC',
        gradient: 'bg-[linear-gradient(135deg,#d4d4d8,#a1a1aa)]',
        icon: 'i-lucide-circle',
        iconColor: 'text-gray-600',
      }
  }
})
</script>

<template>
  <div
    class="relative inline-flex items-center justify-center animate-[float_3s_ease-in-out_infinite]"
  >
    <!-- Glow -->
    <div
      class="absolute inset-0 rounded-xl [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] bg-white/20 blur-xl animate-[pulse_4s_ease-in-out_infinite] pointer-events-none"
    ></div>

    <!-- Octagon -->
    <div
      class="w-28 h-28 [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] rounded-xl flex items-center justify-center shadow-lg"
      :class="tierConfig.gradient"
    >
      <!-- Inner circle -->
      <div
        class="w-18 h-18 bg-white rounded-full flex items-center justify-center animate-[pop_2.5s_ease-in-out_infinite] shadow"
      >
        <UIcon :name="tierConfig.icon" class="w-8 h-8" :class="tierConfig.iconColor" />
      </div>
    </div>

    <!-- Label -->
    <div
      class="absolute bottom-2 px-3 py-1 bg-neutral-800/75 text-white text-sm font-semibold rounded-md shadow-md"
    >
      {{ tierConfig.label }}
    </div>
  </div>
</template>

<style>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}

@keyframes pop {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}
</style>
