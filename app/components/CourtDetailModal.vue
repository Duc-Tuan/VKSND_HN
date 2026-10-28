<script setup lang="ts">
import type { CourtScheduleItem } from '../data/newsData'

defineProps<{
  court: CourtScheduleItem | null
  isOpen: boolean
}>()

defineEmits(['close'])
</script>

<template>
  <div v-if="isOpen && court" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Backdrop -->
    <div 
      @click="$emit('close')" 
      class="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Modal Box -->
    <div class="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border-2 border-lemon-400 z-10 animate-scaleUp">
      <!-- Header -->
      <div class="bg-navy-950 text-white p-5 border-b-2 border-lemon-400 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-lemon-400 text-navy-950">
            {{ court.caseType }} - {{ court.level }}
          </span>
          <span class="text-xs text-slate-300 font-mono">{{ court.caseNumber }}</span>
        </div>

        <button 
          @click="$emit('close')" 
          class="text-slate-400 hover:text-white p-1 rounded-full hover:bg-navy-800"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Body -->
      <div class="p-6 space-y-4">
        <div>
          <span class="text-[11px] text-slate-400 uppercase tracking-wider block mb-1">Tên vụ án xét xử:</span>
          <h3 class="text-base font-bold text-navy-950 leading-snug">
            {{ court.caseName }}
          </h3>
        </div>

        <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5 text-xs">
          <div class="flex items-center justify-between">
            <span class="text-slate-500">Thời gian mở phiên:</span>
            <strong class="text-navy-950 text-sm font-bold">{{ court.courtTime }} - {{ court.courtDate }}</strong>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-500">Địa điểm / Phòng xử:</span>
            <span class="text-navy-950 font-medium">{{ court.courtRoom }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-500">Kiểm sát viên THQCT:</span>
            <strong class="text-lemon-700 font-bold">{{ court.prosecutor }}</strong>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-500">Thẩm phán chủ tọa:</span>
            <span class="text-navy-950 font-medium">{{ court.judge }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-500">Trạng thái hiện tại:</span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-lemon-100 text-lemon-900 border border-lemon-400">
              {{ court.status }}
            </span>
          </div>
        </div>

        <div class="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 leading-relaxed">
          <strong>Lưu ý đối với người tham gia tố tụng:</strong> Yêu cầu có mặt đúng giờ, xuất trình căn cước công dân và tuân thủ Nội quy phòng xử án do Hội đồng xét xử điều hành.
        </div>

        <button
          @click="$emit('close')"
          class="w-full py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase transition-colors"
        >
          Đóng cửa sổ
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.animate-scaleUp {
  animation: scaleUp 0.2s ease-out forwards;
}
</style>
