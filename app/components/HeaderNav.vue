<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeItem = ref('Trang chủ')
const mobileMenuOpen = ref(false)
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})

watch(mobileMenuOpen, (val) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})

const emit = defineEmits(['openLoginModal', 'navigateSection'])

interface NavLink {
  name: string
  href: string
}

// Thứ tự menu chính xác theo yêu cầu (KHÔNG CÓ MENU CON):
// 1. Trang chủ | 2. Giới thiệu | 3. Thông báo | 4. Lịch xét xử | 5. Tin tức sự kiện | 6. Hướng dẫn thủ tục | 7. Đăng nhập
const navItems: NavLink[] = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Giới thiệu', href: '/#gioi-thieu' },
  { name: 'Thông báo', href: '/#thong-bao' },
  { name: 'Lịch xét xử', href: '/#lich-xet-xu' },
  { name: 'Tin tức sự kiện', href: '/#tin-tuc' },
  { name: 'Hướng dẫn thủ tục', href: '/#huong-dan-thu-tuc' }
]

const handleNavClick = (item: NavLink) => {
  activeItem.value = item.name
  mobileMenuOpen.value = false
  if (typeof window !== 'undefined' && item.href.startsWith('/#')) {
    if (window.location.pathname === '/') {
      const element = document.querySelector(item.href.replace('/', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
  }
  router.push(item.href)
}

const handleLoginClick = () => {
  mobileMenuOpen.value = false
  emit('openLoginModal')
}
</script>

<template>
  <!-- Navigation Bar: ĐẬM ĐÀ TÔNG MÀU CHỦ ĐẠO ĐỎ TƯ PHÁP #a41600 -->
  <nav
    class="sticky top-0 z-40 bg-gradient-to-r from-lemon-400 via-lemon-300 to-lemon-400 border-b-2 border-lemon-500 shadow-md">
    <div class="max-w-[96%] w-full mx-auto px-2 sm:px-4 lg:px-6 py-1">
      <div class="flex items-center justify-between h-12 sm:h-14">

        <!-- Desktop Nav Items (KHÔNG CÓ MENU CON, hiển thị phẳng rõ ràng, chuẩn thứ tự) -->
        <div class="hidden lg:flex items-center space-x-1 sm:space-x-2">
          <div v-for="item in navItems" :key="item.name" class="relative">
            <a :href="item.href" @click.prevent="handleNavClick(item)"
              class="h-9 sm:h-10 flex items-center px-3 sm:px-3.5 text-[13px] font-bold tracking-wide transition-all duration-200 rounded-lg whitespace-nowrap cursor-pointer"
              :class="activeItem === item.name
                ? 'text-lemon-400 bg-white font-black shadow-md'
                : 'text-white/95 hover:text-yellow-300 hover:bg-black/15'">
              <span>{{ item.name }}</span>
            </a>
          </div>
        </div>

        <!-- Mobile Left: Hamburger Menu Trigger (Màn hình nhỏ) -->
        <div class="flex lg:hidden items-center gap-1.5">
          <button @click="mobileMenuOpen = !mobileMenuOpen"
            class="h-9 sm:h-10 flex items-center gap-1.5 px-3 rounded-lg text-white hover:bg-black/20 focus:outline-none border border-white/20"
            aria-label="Toggle navigation menu">
            <svg v-if="!mobileMenuOpen" class="w-5 h-5 text-white" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="text-xs font-black uppercase tracking-wider text-white">Menu</span>
          </button>

          <!-- Quick Home Link on Mobile -->
          <a href="/" @click.prevent="handleNavClick({ name: 'Trang chủ', href: '/' })"
            class="h-9 sm:h-10 w-9 sm:w-10 flex items-center justify-center rounded-lg text-white hover:bg-black/20 transition-colors cursor-pointer"
            title="Trang chủ">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
        </div>

        <!-- Right Side: 7. ĐĂNG NHẬP BUTTON (Đồng nhất vị trí cuối cùng, nền trắng nổi bật) -->
        <div class="flex items-center gap-2 flex-shrink-0">
          <button @click="handleLoginClick"
            class="h-9 sm:h-10 group relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 rounded-lg font-black text-xs sm:text-[13px] uppercase tracking-wider text-lemon-400 bg-white hover:bg-yellow-50 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap active:scale-95 border border-white">
            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-lemon-400 flex-shrink-0" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span class="whitespace-nowrap font-black">Đăng nhập</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Fullscreen Mobile Navigation Drawer -->
    <Teleport to="body" v-if="isMounted && mobileMenuOpen">
      <div class="fixed inset-0 z-[999] flex flex-col bg-white overflow-hidden animate-fadeIn">
        <!-- Top Drawer Header Bar (Nền đỏ tư pháp nhận diện thương hiệu) -->
        <div
          class="bg-gradient-to-r from-lemon-500 via-lemon-400 to-lemon-500 px-4 py-3 border-b-2 border-lemon-600 flex items-center justify-between shadow-sm flex-shrink-0">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-9 h-9 flex items-center justify-center flex-shrink-0">
              <img src="/images/logo_tand.png" alt="Logo TAND"
                class="w-full h-full object-contain filter drop-shadow-sm" />
            </div>
            <div class="min-w-0">
              <span class="text-[10px] font-black uppercase tracking-wider text-yellow-300 block leading-tight">
                TÒA ÁN NHÂN DÂN TỐI CAO
              </span>
              <span class="text-xs font-black uppercase text-white block truncate leading-tight">
                TÒA ÁN NHÂN DÂN TP HÀ NỘI
              </span>
            </div>
          </div>

          <!-- Nút ĐÓNG MENU -->
          <button @click="mobileMenuOpen = false"
            class="h-9 px-3.5 rounded-lg bg-black/30 hover:bg-black/50 text-white active:scale-95 font-black text-xs uppercase flex items-center gap-1.5 shadow flex-shrink-0 border border-white/20"
            aria-label="Đóng menu">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Đóng</span>
          </button>
        </div>

        <!-- Quick Action Shortcuts Bar -->
        <div class="p-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 flex-shrink-0">
          <button @click="handleLoginClick"
            class="flex-1 h-9 flex items-center justify-center gap-1.5 rounded-lg bg-lemon-400 hover:bg-lemon-500 text-white font-black text-xs uppercase shadow-sm active:scale-95 border border-lemon-500/40">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Đăng nhập</span>
          </button>

          <button @click="handleNavClick({ name: 'Trang chủ', href: '/' })"
            class="h-9 px-3 flex items-center justify-center gap-1 rounded-lg bg-white hover:bg-slate-100 text-navy-950 font-bold text-xs shadow-sm active:scale-95 border border-slate-200">
            <svg class="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Trang chủ</span>
          </button>
        </div>

        <!-- Scrollable Navigation Items List (Danh mục chuẩn phẳng, không menu con) -->
        <div class="flex-1 overflow-y-auto px-4 py-3 divide-y divide-slate-100 space-y-1">
          <div class="text-[11px] font-black text-lemon-400 uppercase tracking-widest pb-2 mb-1">
            DANH MỤC HỆ THỐNG CỔNG THÔNG TIN
          </div>

          <div v-for="item in navItems" :key="item.name" class="pt-2 pb-1">
            <a :href="item.href" @click.prevent="handleNavClick(item)"
              class="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-bold transition-all cursor-pointer"
              :class="activeItem === item.name
                ? 'text-lemon-400 font-black bg-lemon-50 border-2 border-lemon-400 shadow-sm'
                : 'text-slate-800 hover:text-lemon-400 hover:bg-slate-50'">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full"
                  :class="activeItem === item.name ? 'bg-lemon-500' : 'bg-slate-300'"></span>
                <span>{{ item.name }}</span>
              </div>
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <!-- 7. Đăng nhập item in list -->
          <div class="pt-2 pb-1">
            <a href="#login" @click.prevent="handleLoginClick"
              class="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-bold transition-all cursor-pointer text-lemon-500 hover:bg-lemon-50">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-lemon-500"></span>
                <span>Đăng nhập</span>
              </div>
              <svg class="w-4 h-4 text-lemon-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Drawer Footer -->
        <div
          class="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 flex-shrink-0">
          <div class="flex items-center gap-1.5 font-bold text-navy-950">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Email: HaNoi@toaan.gov.vn</span>
          </div>
          <span class="text-[11px] text-slate-400 font-mono">HaNoi@toaan.gov.vn</span>
        </div>
      </div>
    </Teleport>
  </nav>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.2s ease-out forwards;
}
</style>
