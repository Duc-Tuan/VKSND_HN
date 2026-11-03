<script setup lang="ts">
import { ref } from 'vue'
import type { PublicServiceItem } from '../data/newsData'

const props = defineProps<{
  service: PublicServiceItem | null
  isOpen: boolean
}>()

const emit = defineEmits(['close'])

const citizenName = ref('')
const citizenPhone = ref('')
const citizenCccd = ref('')
const reportContent = ref('')
const fileName = ref('')
const submitted = ref(false)

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) {
    fileName.value = target.files[0].name
  }
}

const handleSubmit = (e: Event) => {
  e.preventDefault()
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    citizenName.value = ''
    citizenPhone.value = ''
    citizenCccd.value = ''
    reportContent.value = ''
    fileName.value = ''
    emit('close')
  }, 2200)
}
</script>

<template>
  <div v-if="isOpen && service" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
    <!-- Backdrop -->
    <div 
      @click="$emit('close')" 
      class="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Modal Box - Thiết kế hiện đại, sang trọng chuẩn Cổng thông tin Nhà nước -->
    <div class="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl sm:max-w-3xl w-full overflow-hidden border border-slate-200/90 z-10 animate-scaleUp my-auto">
      <!-- Top Decorative Judicial Red Bar -->
      <div class="h-1.5 w-full bg-gradient-to-r from-red-800 via-red-600 to-amber-500"></div>

      <!-- Header: Phong cách đỏ tư pháp trang trọng, tươi sáng -->
      <div class="bg-gradient-to-r from-[#861200] via-[#a41600] to-[#781000] text-white p-4 sm:p-5 sm:px-6 relative flex items-start justify-between gap-3 shadow-sm">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/20 text-yellow-300 backdrop-blur-sm border border-white/20 shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
              DỊCH VỤ CÔNG TƯ PHÁP
            </span>
            <span class="text-white/60 text-xs hidden sm:inline">•</span>
            <span class="text-white/80 text-[11px] font-medium hidden sm:inline">TAND TP HÀ NỘI</span>
          </div>
          <h3 class="text-base sm:text-lg font-black text-white leading-snug tracking-tight drop-shadow-sm">
            {{ service.title }}
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

      <!-- Form Body -->
      <div class="p-4 sm:p-6">
        <div v-if="!submitted" class="space-y-4">
          <!-- Information notice box -->
          <div class="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/90 text-amber-950 text-xs leading-relaxed">
            <svg class="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
            </svg>
            <div>
              <p class="font-medium text-slate-700">{{ service.desc }}</p>
              <p class="text-[11px] text-amber-800 font-semibold mt-0.5">Dữ liệu được tiếp nhận và xử lý bảo mật theo tiêu chuẩn an toàn thông tin cơ quan Nhà nước.</p>
            </div>
          </div>

          <form @submit="handleSubmit" class="space-y-3.5">
            <!-- Full Name -->
            <div>
              <label class="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                Họ và tên người gửi / Đại diện tổ chức <span class="text-red-600">*</span>
              </label>
              <input
                v-model="citizenName"
                type="text"
                placeholder="Ví dụ: Nguyễn Văn An"
                required
                class="w-full text-xs sm:text-sm px-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-500/20 bg-slate-50/50 hover:bg-white focus:bg-white transition-all shadow-sm placeholder-slate-400"
              />
            </div>

            <!-- Phone & CCCD Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                  Số điện thoại liên hệ <span class="text-red-600">*</span>
                </label>
                <input
                  v-model="citizenPhone"
                  type="tel"
                  placeholder="0912.xxx.xxx"
                  required
                  class="w-full text-xs sm:text-sm px-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-500/20 bg-slate-50/50 hover:bg-white focus:bg-white transition-all shadow-sm placeholder-slate-400"
                />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                  Số CCCD / Mã định danh
                </label>
                <input
                  v-model="citizenCccd"
                  type="text"
                  placeholder="00109xxxxxxxx"
                  class="w-full text-xs sm:text-sm px-3.5 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-500/20 bg-slate-50/50 hover:bg-white focus:bg-white transition-all shadow-sm placeholder-slate-400"
                />
              </div>
            </div>

            <!-- Content Detail -->
            <div>
              <label class="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
                Tóm tắt nội dung yêu cầu <span class="text-red-600">*</span>
              </label>
              <textarea
                v-model="reportContent"
                rows="3"
                placeholder="Nhập chi tiết nội dung sự việc hoặc yêu cầu hỗ trợ..."
                required
                class="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-500/20 bg-slate-50/50 hover:bg-white focus:bg-white transition-all shadow-sm placeholder-slate-400"
              ></textarea>
            </div>

            <!-- Modern File Upload Area -->
            <label class="block p-3.5 sm:p-4 rounded-xl border-2 border-dashed border-slate-300 hover:border-red-500 bg-slate-50/60 hover:bg-red-50/20 text-center transition-all cursor-pointer group">
              <input type="file" @change="handleFileChange" class="hidden" />
              <div class="flex flex-col items-center justify-center gap-1">
                <svg class="w-6 h-6 text-slate-400 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                </svg>
                <span v-if="!fileName" class="text-xs font-semibold text-slate-700 group-hover:text-red-700">
                  <span class="text-red-700 font-bold underline">Bấm để tải tệp lên</span> hoặc kéo thả vào đây
                </span>
                <span v-else class="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  ✓ Đã chọn: {{ fileName }}
                </span>
                <span class="text-[11px] text-slate-400">Hỗ trợ PDF, DOCX, JPG, PNG (Tối đa 25MB)</span>
              </div>
            </label>

            <!-- Bottom Actions -->
            <div class="pt-2 flex items-center justify-end gap-2.5 sm:gap-3">
              <button
                type="button"
                @click="$emit('close')"
                class="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-all active:scale-95"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                class="px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#861200] via-[#a41600] to-[#861200] hover:brightness-110 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-1.5"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                <span>Gửi hồ sơ</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Success Notification -->
        <div v-else class="text-center py-6 sm:py-8 space-y-3.5">
          <div class="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl font-bold shadow-sm">
            ✓
          </div>
          <div class="space-y-1">
            <h4 class="text-lg font-black text-slate-900">Tiếp nhận hồ sơ thành công!</h4>
            <p class="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              Hệ thống Cổng thông tin điện tử TAND TP Hà Nội đã tiếp nhận yêu cầu của bạn.
            </p>
          </div>
          <div class="p-3 rounded-xl bg-slate-100 border border-slate-200 inline-block font-mono text-xs sm:text-sm text-slate-800">
            Mã biên nhận: <strong class="text-red-700 font-black">HN-2026-94821</strong>
          </div>
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
