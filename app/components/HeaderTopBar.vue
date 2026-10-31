<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
const currentDate = ref('')
const shortDate = ref('')
let timer: any = null

const updateDateTime = () => {
  const now = new Date()
  const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
  const shortDays = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']

  const dayName = days[now.getDay()]
  const shortDayName = shortDays[now.getDay()]
  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const year = now.getFullYear()
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')

  currentDate.value = `${dayName}, ngày ${day}/${month}/${year}`
  shortDate.value = `${shortDayName}, ${day}/${month}/${year}`
  currentTime.value = `${hours}:${minutes}:${seconds}`
}

onMounted(() => {
  updateDateTime()
  timer = setInterval(updateDateTime, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

defineEmits(['openSearch'])
</script>

<template>
  <!-- Top Utility Bar - Tươi sáng, tinh tế với điểm nhấn đỏ tư pháp -->
  <div
    class="w-full bg-gradient-to-r from-lemon-50 via-white to-lemon-50 text-slate-800 text-xs border-b border-lemon-200 py-1.5 shadow-sm">
    <div class="max-w-[96%] w-full mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between gap-2">
      <!-- Left: Real-time Date & Clock -->
      <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <span class="inline-flex items-center gap-1.5 font-semibold text-slate-900">
          <svg class="w-3.5 h-3.5 text-lemon-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="hidden sm:inline">{{ currentDate }}</span>
          <span class="inline sm:hidden text-[11px] font-bold">{{ shortDate }}</span>
        </span>

        <span class="hidden md:inline-block text-lemon-300">|</span>
        <span class="hidden md:inline-flex items-center gap-1.5 text-slate-800 font-mono font-bold">
          <svg class="w-3.5 h-3.5 text-lemon-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {{ currentTime }} (Giờ Hà Nội)
        </span>
      </div>

      <!-- Right: Hotline & Quick Search -->
      <div class="flex items-center gap-3 sm:gap-4 flex-shrink-0">
        <!-- Quick Search Button -->
        <button @click="$emit('openSearch')"
          class="flex items-center gap-1.5 text-slate-800 hover:text-lemon-400 transition-colors py-0.5 px-2.5 rounded-full bg-white hover:bg-lemon-50 border border-lemon-200 shadow-sm"
          title="Tìm kiếm thông tin">
          <svg class="w-3.5 h-3.5 text-lemon-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span class="text-[11px] sm:text-xs font-bold">Tìm kiếm</span>
        </button>
      </div>
    </div>
  </div>
</template>
