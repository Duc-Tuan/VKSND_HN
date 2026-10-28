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
      class="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Modal Box -->
    <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border-2 border-lemon-400 z-10 animate-scaleUp my-auto">
      <!-- Top Decorative Lemon Bar -->
      <div class="h-2 bg-gradient-to-r from-lemon-400 via-amber-400 to-lemon-500"></div>

      <!-- Header with Logo - Tươi sáng, phong cách vàng chanh -->
      <div class="p-4 sm:p-6 bg-gradient-to-r from-lemon-400 via-lemon-300 to-amber-300 text-navy-950 relative">
        <button 
          @click="$emit('close')" 
          class="absolute top-3.5 right-3.5 text-slate-800 hover:text-black p-1.5 rounded-full hover:bg-lemon-400/80 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="flex items-center gap-3">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 bg-white shadow-md flex items-center justify-center flex-shrink-0">
            <div class="w-full h-full rounded-full bg-white flex items-center justify-center p-0.5">
              <img
                src="https://vksndtc.gov.vn/Publishing_Resources/web/assets/img/logo.png"
                alt="Logo VKSND"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-black text-navy-950">ĐĂNG NHẬP HỆ THỐNG</h3>
            <p class="text-[11px] sm:text-xs text-slate-800 font-bold">Cổng TTĐT VKSND TP Hà Nội</p>
          </div>
        </div>

        <!-- Tabs -->
        <div class="grid grid-cols-2 gap-2 mt-4 sm:mt-5 p-1 bg-lemon-200/80 rounded-xl text-xs font-bold border border-lemon-400/60">
          <button
            @click="activeTab = 'officer'"
            class="py-2 px-1 rounded-lg transition-all flex items-center justify-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-bold"
            :class="activeTab === 'officer' 
              ? 'bg-navy-950 text-lemon-300 font-black shadow-md' 
              : 'text-slate-800 hover:text-black hover:bg-lemon-300/60'"
          >
            <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <span class="truncate">Cán bộ KSV</span>
          </button>
          <button
            @click="activeTab = 'citizen'"
            class="py-2 px-1 rounded-md transition-all flex items-center justify-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs"
            :class="activeTab === 'citizen' 
              ? 'bg-lemon-400 text-navy-950 font-bold shadow-sm' 
              : 'text-slate-300 hover:text-white'"
          >
            <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <span class="truncate">Công dân / DN</span>
          </button>
        </div>
      </div>

      <!-- Tab 1: Cán bộ KSV -->
      <div v-if="activeTab === 'officer'" class="p-4 sm:p-6 space-y-3.5 sm:space-y-4">
        <form @submit="handleLogin" class="space-y-3 sm:space-y-4">
          <div>
            <label class="block text-xs font-bold text-navy-950 mb-1">
              Mã định danh cán bộ / Email ngành:
            </label>
            <input
              v-model="username"
              type="text"
              placeholder="ksv.hanoi@vksnd.gov.vn"
              required
              class="w-full text-xs px-3 py-2 sm:py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-lemon-500 focus:ring-1 focus:ring-lemon-400"
            />
          </div>

          <div>
            <div class="flex items-center justify-between mb-1">
              <label class="text-xs font-bold text-navy-950">Mật khẩu:</label>
              <a href="#" class="text-[11px] text-lemon-700 hover:underline">Quên mật khẩu?</a>
            </div>
            <div class="relative">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="••••••••"
                required
                class="w-full text-xs px-3 py-2 sm:py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-lemon-500 focus:ring-1 focus:ring-lemon-400 pr-10"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-2.5 top-2 sm:top-2.5 text-slate-400 hover:text-slate-600"
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

          <div class="flex items-center justify-between text-xs text-slate-600">
            <label class="flex items-center gap-1.5 cursor-pointer">
              <input v-model="rememberMe" type="checkbox" class="rounded text-lemon-500 focus:ring-lemon-400"/>
              <span class="text-[11px] sm:text-xs">Ghi nhớ phiên</span>
            </label>
            <span class="text-[10px] sm:text-[11px] text-slate-400">SSL 256-bit</span>
          </div>

          <button
            type="submit"
            class="w-full py-2.5 px-4 rounded-lg bg-lemon-400 hover:bg-lemon-300 text-navy-950 font-black text-xs uppercase tracking-wide transition-all shadow-md hover:shadow-lemon-glow flex items-center justify-center gap-2 active:scale-95"
          >
            <span v-if="!loginSuccess">Đăng nhập tài khoản ngành</span>
            <span v-else class="text-emerald-950 font-bold flex items-center gap-1">
              ✓ Đăng nhập thành công!
            </span>
          </button>
        </form>

        <div class="pt-2 sm:pt-3 border-t border-slate-100">
          <button class="w-full py-2 px-3 rounded border border-navy-800 text-navy-900 hover:bg-slate-50 text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-2">
            <svg class="w-4 h-4 text-lemon-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            <span>Đăng nhập bằng USB Token (Chữ ký số)</span>
          </button>
        </div>
      </div>

      <!-- Tab 2: Công dân VNeID -->
      <div v-else class="p-4 sm:p-6 space-y-3.5 sm:space-y-4">
        <div class="text-center space-y-2">
          <div class="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-lg">
            ★
          </div>
          <h4 class="text-xs sm:text-sm font-bold text-navy-950">Đăng nhập qua Định danh điện tử Quốc gia (VNeID)</h4>
          <p class="text-[11px] sm:text-xs text-slate-500">
            Dành cho công dân nộp đơn thư tố giác, tra cứu tiến độ vụ án và tham gia dịch vụ công tư pháp.
          </p>
        </div>

        <button
          @click="handleLogin"
          class="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wide transition-colors shadow-md flex items-center justify-center gap-2 active:scale-95"
        >
          <span v-if="!loginSuccess">Đăng nhập với VNeID</span>
          <span v-else class="text-white font-bold">✓ Xác thực thành công!</span>
        </button>

        <button
          @click="handleLogin"
          class="w-full py-2 sm:py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wide transition-colors shadow-md flex items-center justify-center gap-2 active:scale-95"
        >
          <span>Cổng Dịch vụ công Quốc gia</span>
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
  animation: scaleUp 0.25s ease-out forwards;
}
</style>
