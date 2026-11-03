<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close'])

const activeTab = ref<'officer' | 'citizen'>('officer')
const username = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(true)
const loginSuccess = ref(false)

const handleLogin = (e: Event) => {
  e.preventDefault()
  loginSuccess.value = true
  setTimeout(() => {
    loginSuccess.value = false
    emit('close')
  }, 1200)
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
    <!-- Backdrop -->
    <div 
      @click="$emit('close')" 
      class="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Modal Box - Thiết kế hiện đại chuẩn Cổng thông tin Nhà nước -->
    <div class="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-md sm:max-w-lg w-full overflow-hidden border border-slate-200/90 z-10 animate-scaleUp my-auto">
      <!-- Top Decorative Accent Bar -->
      <div class="h-1.5 w-full bg-gradient-to-r from-red-800 via-red-600 to-amber-500"></div>

      <!-- Header: Gradient Đỏ Tư Pháp Trang Trọng -->
      <div class="p-5 sm:p-6 bg-gradient-to-r from-[#861200] via-[#a41600] to-[#781000] text-white relative shadow-sm">
        <button 
          @click="$emit('close')" 
          class="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 absolute top-4 right-4 active:scale-90"
          title="Đóng cửa sổ"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="flex items-center gap-3">
          <div class="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-white/10 rounded-2xl p-1 border border-white/20 shadow-inner">
            <img
              src="/images/logo_tand.png"
              alt="Logo TAND"
              class="w-full h-full object-contain filter drop-shadow-md"
            />
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-black text-white leading-tight">ĐĂNG NHẬP HỆ THỐNG</h3>
            <p class="text-[11px] sm:text-xs text-yellow-300 font-bold mt-0.5">Cổng TTĐT TAND TP Hà Nội</p>
          </div>
        </div>

        <!-- Segmented Tabs Switcher -->
        <div class="grid grid-cols-2 gap-1.5 mt-5 p-1 bg-black/25 rounded-xl text-xs font-bold border border-white/15 backdrop-blur-sm">
          <button
            @click="activeTab = 'officer'"
            class="py-2 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 text-xs font-bold"
            :class="activeTab === 'officer' 
              ? 'bg-white text-red-800 shadow-md' 
              : 'text-white/80 hover:text-white hover:bg-white/10'"
          >
            <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <span class="truncate">Thẩm phán / Cán bộ</span>
          </button>
          <button
            @click="activeTab = 'citizen'"
            class="py-2 px-2 rounded-lg transition-all flex items-center justify-center gap-1.5 text-xs font-bold"
            :class="activeTab === 'citizen' 
              ? 'bg-white text-red-800 shadow-md' 
              : 'text-white/80 hover:text-white hover:bg-white/10'"
          >
            <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <span class="truncate">Công dân / DN</span>
          </button>
        </div>
      </div>

      <!-- Tab 1: Thẩm phán / Cán bộ ngành -->
      <div v-if="activeTab === 'officer'" class="p-5 sm:p-6 space-y-4">
        <form @submit="handleLogin" class="space-y-3.5">
          <div>
            <label class="block text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">
              Mã định danh cán bộ / Email ngành <span class="text-red-600">*</span>
            </label>
            <input
              v-model="username"
              type="text"
              placeholder="thamphan.hanoi@toaan.gov.vn"
              required
              class="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-500/20 bg-slate-50/50 hover:bg-white focus:bg-white transition-all shadow-sm placeholder-slate-400"
            />
          </div>

          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="text-xs font-bold text-slate-800 uppercase tracking-wide">
                Mật khẩu <span class="text-red-600">*</span>
              </label>
              <a href="#" class="text-[11px] text-red-700 hover:text-red-800 font-semibold hover:underline">Quên mật khẩu?</a>
            </div>
            <div class="relative">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                required
                class="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-500/20 bg-slate-50/50 hover:bg-white focus:bg-white transition-all shadow-sm placeholder-slate-400 pr-10"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
              >
                <svg v-if="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between text-xs text-slate-600 pt-0.5">
            <label class="flex items-center gap-2 cursor-pointer select-none">
              <input v-model="rememberMe" type="checkbox" class="w-4 h-4 rounded text-red-600 focus:ring-red-500 border-slate-300"/>
              <span class="text-xs font-medium text-slate-700">Ghi nhớ phiên làm việc</span>
            </label>
            <span class="text-[11px] text-slate-400 font-mono">Bảo mật SSL 256-bit</span>
          </div>

          <button
            type="submit"
            class="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r from-[#861200] via-[#a41600] to-[#861200] hover:brightness-110 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-95"
          >
            <span v-if="!loginSuccess">Đăng nhập tài khoản ngành</span>
            <span v-else class="text-white font-bold flex items-center gap-1">
              ✓ Xác thực thành công!
            </span>
          </button>
        </form>

        <div class="pt-2 border-t border-slate-200">
          <button class="w-full py-2.5 px-3 rounded-xl border border-slate-300 hover:border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm">
            <svg class="w-4 h-4 text-red-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <span>Đăng nhập bằng USB Token (Chữ ký số chuyên dùng)</span>
          </button>
        </div>
      </div>

      <!-- Tab 2: Công dân VNeID & Doanh nghiệp -->
      <div v-else class="p-5 sm:p-6 space-y-4">
        <div class="text-center space-y-2 p-4 bg-red-50/70 rounded-2xl border border-red-100">
          <div class="w-12 h-12 mx-auto rounded-full bg-red-600 text-yellow-300 flex items-center justify-center font-black text-xl shadow-md border-2 border-yellow-300">
            ★
          </div>
          <h4 class="text-sm font-bold text-slate-900">Định danh điện tử Quốc gia (VNeID)</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            Dành cho công dân nộp đơn thư, đăng ký tiếp công dân, tra cứu tiến độ vụ án và tham gia dịch vụ tư pháp.
          </p>
        </div>

        <div class="space-y-2.5 pt-1">
          <button
            @click="handleLogin"
            class="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-95"
          >
            <span v-if="!loginSuccess" class="flex items-center gap-2">
              <span class="text-yellow-300 text-base">★</span> Đăng nhập với VNeID
            </span>
            <span v-else class="text-white font-bold">✓ Xác thực VNeID thành công!</span>
          </button>

          <button
            @click="handleLogin"
            class="w-full py-2.5 px-4 rounded-xl bg-[#00529c] hover:bg-[#004080] text-white font-bold text-xs uppercase tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 active:scale-95"
          >
            <span>Cổng Dịch vụ công Quốc gia</span>
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
