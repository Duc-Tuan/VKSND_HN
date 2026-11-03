<script setup lang="ts">
import type { CourtScheduleItem } from '../data/newsData'

defineProps<{
  court: CourtScheduleItem | null
  isOpen: boolean
}>()

defineEmits(['close'])
</script>

<template>
  <div v-if="isOpen && court" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
    <!-- Backdrop -->
    <div 
      @click="$emit('close')" 
      class="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Modal Box - Chuẩn phong cách tư pháp hiện đại -->
    <div class="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl sm:max-w-3xl w-full overflow-hidden border border-slate-200/90 z-10 animate-scaleUp my-auto">
      <!-- Top Decorative Accent Bar -->
      <div class="h-1.5 w-full bg-gradient-to-r from-red-800 via-red-600 to-amber-500"></div>

      <!-- Header: Gradient Đỏ Tư Pháp Trang Trọng -->
      <div class="bg-gradient-to-r from-[#861200] via-[#a41600] to-[#781000] text-white p-4 sm:p-5 sm:px-6 relative flex items-start justify-between gap-3 shadow-sm">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/20 text-yellow-300 backdrop-blur-sm border border-white/20 shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
              {{ court.caseType }} • {{ court.level }}
            </span>
            <span class="text-white/60 text-xs hidden sm:inline">•</span>
            <span class="text-white/80 font-mono text-xs font-semibold hidden sm:inline">{{ court.caseNumber }}</span>
          </div>
          <h3 class="text-base sm:text-lg font-black text-white leading-snug tracking-tight drop-shadow-sm">
            Thông Tin Lịch Xét Xử Phiên Tòa
          </h3>
        </div>

        <button 
          @click="$emit('close')" 
          class="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 flex-shrink-0 active:scale-90"
          title="Đóng cửa sổ"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Body -->
      <div class="p-5 sm:p-6 space-y-4">
        <!-- Tên vụ án -->
        <div class="p-3.5 bg-red-50/50 rounded-xl border border-red-100">
          <span class="text-[11px] font-bold text-red-800 uppercase tracking-wider block mb-1">Tên vụ án xét xử:</span>
          <h4 class="text-sm sm:text-base font-bold text-slate-900 leading-snug">
            {{ court.caseName }}
          </h4>
          <div class="mt-2 text-xs font-mono text-slate-500 sm:hidden">
            Số thụ lý: {{ court.caseNumber }}
          </div>
        </div>

        <!-- Bảng chi tiết phiên xử -->
        <div class="p-4 bg-slate-50/80 rounded-2xl border border-slate-200/90 divide-y divide-slate-200/70 text-xs sm:text-sm">
          <div class="flex items-center justify-between py-2.5 first:pt-0">
            <span class="text-slate-500 font-medium flex items-center gap-2">
              <svg class="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Thời gian mở phiên:
            </span>
            <strong class="text-slate-900 font-bold text-sm">{{ court.courtTime }} - {{ court.courtDate }}</strong>
          </div>

          <div class="flex items-center justify-between py-2.5">
            <span class="text-slate-500 font-medium flex items-center gap-2">
              <svg class="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              Địa điểm / Phòng xử:
            </span>
            <span class="text-slate-900 font-bold">{{ court.courtRoom }}</span>
          </div>

          <div class="flex items-center justify-between py-2.5">
            <span class="text-slate-500 font-medium flex items-center gap-2">
              <svg class="w-4 h-4 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Thẩm phán chủ tọa:
            </span>
            <span class="text-red-700 font-bold">{{ court.judge }}</span>
          </div>

          <div class="flex items-center justify-between py-2.5">
            <span class="text-slate-500 font-medium flex items-center gap-2">
              <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Kiểm sát viên THQCT (VKS):
            </span>
            <span class="text-slate-800 font-semibold">{{ court.prosecutor }}</span>
          </div>

          <div class="flex items-center justify-between py-2.5 last:pb-0">
            <span class="text-slate-500 font-medium flex items-center gap-2">
              <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Trạng thái phiên tòa:
            </span>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-300">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              {{ court.status }}
            </span>
          </div>
        </div>

        <!-- Hướng dẫn người tham gia tố tụng -->
        <div class="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-amber-50/90 border border-amber-200/90 text-amber-950 text-xs leading-relaxed">
          <svg class="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
          </svg>
          <div>
            <strong class="font-bold text-amber-900">Lưu ý đối với người tham gia tố tụng:</strong>
            <p class="mt-0.5 text-amber-900/90">Yêu cầu có mặt đúng giờ, xuất trình Căn cước công dân / Giấy triệu tập và tuân thủ Nội quy phòng xử án do Hội đồng xét xử điều hành.</p>
          </div>
        </div>

        <!-- Buttons -->
        <div class="pt-2 flex items-center justify-end gap-2.5">
          <button
            @click="$emit('close')"
            class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#861200] via-[#a41600] to-[#861200] hover:brightness-110 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scaleUp {
  from { opacity: 0; transform: scale(0.96) translateY(8px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-scaleUp {
  animation: scaleUp 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
