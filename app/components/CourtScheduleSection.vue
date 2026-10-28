<script setup lang="ts">
import { ref, computed } from 'vue'
import { courtSchedules, type CourtScheduleItem } from '../data/newsData'

const selectedType = ref('Tất cả')
const searchQuery = ref('')

const emit = defineEmits(['openCourtModal'])

const filteredSchedules = computed(() => {
  return courtSchedules.filter(item => {
    const matchType = selectedType.value === 'Tất cả' || item.caseType === selectedType.value
    const matchSearch = searchQuery.value === '' ||
      item.caseName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.caseNumber.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.prosecutor.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchType && matchSearch
  })
})

const getStatusBadge = (status: CourtScheduleItem['status']) => {
  switch (status) {
    case 'Đang xử':
      return 'bg-amber-100 text-amber-900 border-amber-300 animate-pulse'
    case 'Sắp diễn ra':
      return 'bg-lemon-100 text-navy-950 border-lemon-400 font-bold'
    case 'Đã tuyên án':
      return 'bg-emerald-100 text-emerald-800 border-emerald-300'
    default:
      return 'bg-slate-100 text-slate-700 border-slate-300'
  }
}
</script>

<template>
  <section id="lich-xet-xu" class="py-6 sm:py-8 bg-white border-y border-slate-200">
    <div class="max-w-7xl mx-auto px-3 sm:px-6">

      <!-- Section Title & Filter Bar -->
      <div
        class="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-lemon-400 gap-3 sm:gap-4">
        <div>
          <div class="flex items-center gap-2 text-xs font-bold text-lemon-700 uppercase tracking-wider mb-1">
            <svg class="w-4 h-4 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            <span>Thực hành quyền công tố & Kiểm sát xét xử</span>
          </div>
          <h2 class="text-base sm:text-xl md:text-2xl font-black text-navy-950 uppercase">
            LỊCH XÉT XỬ CÁC VỤ ÁN TẠI TÒA ÁN
          </h2>
          <p class="text-[11px] sm:text-xs text-slate-500">Công khai minh bạch lịch phân công Kiểm sát viên và phiên xét
            xử công khai</p>
        </div>

        <!-- Filter Buttons & Search -->
        <div class="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <!-- Type Filters -->
          <div class="inline-flex rounded-lg border border-slate-200 p-0.5 sm:p-1 bg-slate-100 text-xs">
            <button v-for="t in ['Tất cả', 'Hình sự', 'Dân sự']" :key="t" @click="selectedType = t"
              class="px-2.5 sm:px-3 py-1 rounded-md font-semibold transition-all duration-200 text-[11px] sm:text-xs"
              :class="selectedType === t ? 'bg-white text-navy-950 shadow-sm font-black' : 'text-slate-600 hover:text-navy-900'">
              {{ t }}
            </button>
          </div>

          <!-- Quick Filter Input -->
          <div class="relative flex-1 sm:flex-initial">
            <input v-model="searchQuery" type="text" placeholder="Tìm vụ án, KSV..."
              class="w-full sm:w-64 text-xs pl-7 pr-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:border-lemon-500 focus:ring-1 focus:ring-lemon-400 bg-white" />
            <svg class="w-3.5 h-3.5 text-slate-400 absolute left-2 top-2" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Schedule Cards Grid with Smooth Transition (mode out-in prevents stuttering) -->
      <transition name="tab-fade" mode="out-in">
        <div 
          :key="selectedType + searchQuery"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4"
        >
          <div v-for="court in filteredSchedules" :key="court.id" @click="$emit('openCourtModal', court)"
            class="group cursor-pointer bg-slate-50 hover:bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200 hover:border-lemon-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <!-- Top Status & Type Badges (Không méo pill, không gãy vụn chữ) -->
              <div class="flex items-start justify-between gap-2 mb-2.5">
                <div class="flex items-center gap-1.5 flex-wrap flex-1 min-w-0">
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold tracking-wide leading-tight"
                    :class="court.caseType === 'Hình sự' ? 'bg-rose-100 text-rose-800 border border-rose-200' : 'bg-blue-100 text-blue-800 border border-blue-200'">
                    {{ court.caseType }}
                  </span>
                  <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200 whitespace-nowrap">
                    {{ court.level }}
                  </span>
                </div>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold border whitespace-nowrap flex-shrink-0 shadow-sm" :class="getStatusBadge(court.status)">
                  {{ court.status }}
                </span>
              </div>

              <!-- Case Number -->
              <span class="text-[11px] font-mono font-semibold text-slate-500 block mb-1">
                Số thụ lý: {{ court.caseNumber }}
              </span>

              <!-- Case Name -->
              <h4
                class="text-xs sm:text-sm font-bold text-navy-950 group-hover:text-lemon-700 transition-colors line-clamp-3 mb-3 leading-snug">
                {{ court.caseName }}
              </h4>
            </div>

            <!-- Schedule Metadata Details -->
            <div class="space-y-1.5 pt-3 border-t border-slate-200/80 text-[11px] text-slate-600">
              <!-- Court Time & Date -->
              <div class="flex items-center gap-1.5 font-medium text-slate-800">
                <svg class="w-3.5 h-3.5 text-lemon-600 flex-shrink-0" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{{ court.courtTime }} - {{ court.courtDate }}</span>
              </div>

              <!-- Court Room -->
              <div class="flex items-center gap-1.5 truncate">
                <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span class="truncate">{{ court.courtRoom }}</span>
              </div>

              <!-- Prosecutor Assigned -->
              <div class="flex items-center gap-1.5 text-navy-900 font-semibold truncate">
                <svg class="w-3.5 h-3.5 text-lemon-600 flex-shrink-0" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="truncate">{{ court.prosecutor }}</span>
              </div>

              <!-- View details link -->
              <div class="pt-2 text-right">
                <span class="text-xs font-bold text-lemon-700 group-hover:underline inline-flex items-center gap-1">
                  Chi tiết phiên tòa ›
                </span>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- Empty state -->
      <div v-if="filteredSchedules.length === 0" class="py-12 text-center text-slate-400 text-xs">
        Không tìm thấy lịch xét xử nào phù hợp.
      </div>

      <!-- Bottom Banner Notice -->
      <div
        class="mt-5 sm:mt-6 p-3 rounded-lg bg-lemon-50 border border-lemon-300/80 flex flex-col sm:flex-row items-center justify-between text-xs text-navy-950 gap-2 text-center sm:text-left">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-lemon-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd" />
          </svg>
          <span class="text-[11px] sm:text-xs">Các đương sự, người tham gia tố tụng vui lòng mang theo Giấy triệu tập và
            CCCD gắn chip khi tham dự phiên tòa.</span>
        </div>
        <a href="#tra-cuu"
          class="font-bold text-lemon-800 hover:text-navy-950 underline whitespace-nowrap text-[11px] sm:text-xs">
          Quy chế nội quy phòng xử án ›
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
