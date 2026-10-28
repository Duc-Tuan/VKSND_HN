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
const submitted = ref(false)

const handleSubmit = (e: Event) => {
  e.preventDefault()
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    emit('close')
  }, 1800)
}
</script>

<template>
  <div v-if="isOpen && service" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Backdrop -->
    <div 
      @click="$emit('close')" 
      class="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Modal Box -->
    <div class="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border-2 border-lemon-400 z-10 animate-scaleUp">
      <!-- Header -->
      <div class="bg-navy-950 text-white p-5 border-b-2 border-lemon-400 flex items-center justify-between">
        <div>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-lemon-400 text-navy-950">
            Dịch vụ công trực tuyến
          </span>
          <h3 class="text-base font-extrabold text-white mt-1">{{ service.title }}</h3>
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

      <!-- Form Body -->
      <div class="p-6">
        <div v-if="!submitted" class="space-y-4">
          <p class="text-xs text-slate-600 leading-relaxed bg-lemon-50 p-3 rounded-lg border border-lemon-200">
            {{ service.desc }} - Dữ liệu được mã hóa bảo mật theo tiêu chuẩn an toàn thông tin cơ quan Nhà nước.
          </p>

          <form @submit="handleSubmit" class="space-y-3">
            <div>
              <label class="block text-xs font-bold text-navy-950 mb-1">Họ và tên người gửi / Đại diện tổ chức *</label>
              <input
                v-model="citizenName"
                type="text"
                placeholder="Ví dụ: Nguyễn Văn An"
                required
                class="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-lemon-500 focus:ring-1 focus:ring-lemon-400"
              />
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <label class="block text-xs font-bold text-navy-950 mb-1">Số điện thoại liên hệ *</label>
                <input
                  v-model="citizenPhone"
                  type="tel"
                  placeholder="0912.xxx.xxx"
                  required
                  class="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-lemon-500 focus:ring-1 focus:ring-lemon-400"
                />
              </div>
              <div>
                <label class="block text-xs font-bold text-navy-950 mb-1">Số CCCD / Mã định danh</label>
                <input
                  v-model="citizenCccd"
                  type="text"
                  placeholder="00109xxxxxxxx"
                  class="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-lemon-500 focus:ring-1 focus:ring-lemon-400"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-navy-950 mb-1">Tóm tắt nội dung yêu cầu / Tố giác *</label>
              <textarea
                v-model="reportContent"
                rows="4"
                placeholder="Nhập chi tiết nội dung sự việc hoặc yêu cầu hỗ trợ..."
                required
                class="w-full text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-lemon-500 focus:ring-1 focus:ring-lemon-400"
              ></textarea>
            </div>

            <div class="p-3 bg-slate-50 rounded-lg border border-dashed border-slate-300 text-center">
              <span class="text-xs text-slate-500">Kèm theo tệp tài liệu, hình ảnh chứng cứ (tối đa 25MB)</span>
              <button type="button" class="mt-1 block mx-auto text-xs font-bold text-lemon-700 hover:underline">
                + Chọn tệp tải lên
              </button>
            </div>

            <div class="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                @click="$emit('close')"
                class="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                class="px-5 py-2 rounded-lg bg-lemon-400 hover:bg-lemon-300 text-navy-950 font-bold text-xs uppercase shadow-lemon-sm"
              >
                Gửi hồ sơ trực tuyến
              </button>
            </div>
          </form>
        </div>

        <!-- Success notification -->
        <div v-else class="text-center py-8 space-y-3">
          <div class="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold">
            ✓
          </div>
          <h4 class="text-base font-bold text-navy-950">Gửi hồ sơ thành công!</h4>
          <p class="text-xs text-slate-600 max-w-sm mx-auto">
            Hệ thống Cổng TTĐT VKSND TP Hà Nội đã tiếp nhận yêu cầu. Mã biên nhận hồ sơ của bạn là <strong class="font-mono text-navy-950">HN-2026-94821</strong>.
          </p>
        </div>
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
