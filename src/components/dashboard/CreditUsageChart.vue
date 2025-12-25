<template>
  <div class="flex flex-col items-center justify-center w-full h-full">
    <apexchart
      v-if="mounted"
      type="radialBar"
      height="180"
      :options="chartOptions"
      :series="series"
    ></apexchart>

    <!-- Legend / Details -->
    <div class="flex items-center gap-6">
      <UBadge icon="i-lucide-layers" color="secondary" variant="soft" size="md">
        Total: {{ total }}
      </UBadge>
      <UBadge icon="i-lucide-database-zap" color="primary" variant="soft" size="md">
        Used: {{ used }}
      </UBadge>
      <UBadge icon="i-lucide-coins" :color="remainingBadgeColor" variant="soft" size="md">
        Remaining: {{ remaining }}
      </UBadge>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    default: 1000,
  },
  used: {
    type: Number,
    default: 650,
  },
})

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})

const remaining = computed(() => props.total - props.used)
const usagePercent = computed(() => Math.round((props.used / props.total) * 100))

// Dynamic badge color logic
const remainingBadgeColor = computed(() => {
  const threshold = props.total * 0.2 // Low credit threshold (20%)
  return remaining.value < threshold ? 'error' : 'info'
})

const series = computed(() => [usagePercent.value])

const chartOptions = ref({
  chart: {
    type: 'radialBar',
    offsetY: -20,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        size: '65%',
      },
      track: {
        background: '#e7e7e7',
        strokeWidth: '60%',
        margin: 5,
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.5,
        },
      },
      dataLabels: {
        name: {
          show: true,
          offsetY: -4,
          offsetX: 8,
          fontSize: '14px',
        },
        value: {
          offsetY: 6,
          offsetX: 7,
          fontSize: '18px',
        },
      },
    },
  },
  grid: {
    padding: {
      top: -10,
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 53, 91],
    },
  },
  stroke: {
    lineCap: 'round',
  },
  labels: ['Credit Usage'],
  colors: ['#0d9488'], // Teal-600
})
</script>
