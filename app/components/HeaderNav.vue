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
  subItems?: { title: string; href: string }[]
}

const navItems: NavLink[] = [
  { name: 'Trang chủ', href: '/' },
  {
    name: 'Tin tức sự kiện',
    href: '/#tin-tuc',
    subItems: [
      { title: 'Tin hoạt động của Lãnh đạo Viện', href: '/#tin-tuc' },
      { title: 'Thực hành quyền công tố & Kiểm sát xét xử', href: '/#tin-tuc' },
      { title: 'Tin tức Kiểm sát các quận, huyện', href: '/#tin-tuc' },
      { title: 'Điểm tin An ninh trật tự Thủ đô', href: '/#tin-tuc' }
    ]
  },
  {
    name: 'Thông báo',
    href: '/#thong-bao',
    subItems: [
      { title: 'Thông báo lịch tiếp công dân', href: '/#thong-bao' },
      { title: 'Văn bản chỉ đạo điều hành', href: '/#thong-bao' },
      { title: 'Thông báo tuyển dụng & bổ nhiệm', href: '/#thong-bao' },
      { title: 'Kết luận thanh tra, giải quyết khiếu nại', href: '/#thong-bao' }
    ]
  },
  {
    name: 'Lịch xét xử',
    href: '/#lich-xet-xu',
    subItems: [
      { title: 'Lịch xét xử án Hình sự', href: '/#lich-xet-xu' },
      { title: 'Lịch xét xử án Dân sự - Kinh doanh', href: '/#lich-xet-xu' },
      { title: 'Phiên tòa số hóa & Rút kinh nghiệm', href: '/#lich-xet-xu' }
    ]
  },
  {
    name: 'Giới thiệu',
    href: '/#gioi-thieu',
    subItems: [
      { title: 'Chức năng, nhiệm vụ của ngành VKS', href: '/#gioi-thieu' },
      { title: 'Ban Lãnh đạo VKSND TP Hà Nội', href: '/#gioi-thieu' },
      { title: 'Sơ đồ tổ chức các phòng nghiệp vụ', href: '/#gioi-thieu' },
      { title: 'Lịch sử truyền thống và thành tựu', href: '/#gioi-thieu' }
    ]
  },
  {
    name: 'Hoạt động khác',
    href: '/#hoat-dong-khac',
    subItems: [
      { title: 'Công tác xây dựng Đảng & Đoàn thể', href: '/#hoat-dong-khac' },
      { title: 'Phong trào thi đua - Khen thưởng', href: '/#hoat-dong-khac' },
      { title: 'Hoạt động thể thao, văn hóa', href: '/#hoat-dong-khac' },
      { title: 'Nghiên cứu khoa học pháp lý', href: '/#hoat-dong-khac' }
    ]
  },
  {
    name: 'Hướng dẫn thủ tục',
    href: '/#huong-dan-thu-tuc',
    subItems: [
      { title: 'Thủ tục gửi đơn khiếu nại, tố cáo', href: '/#huong-dan-thu-tuc' },
      { title: 'Quy trình tiếp nhận tin báo tội phạm', href: '/#huong-dan-thu-tuc' },
      { title: 'Mẫu văn bản, biểu mẫu tố tụng', href: '/#huong-dan-thu-tuc' },
      { title: 'Hỏi đáp pháp luật trực tuyến', href: '/#huong-dan-thu-tuc' }
    ]
  }
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

const handleSubClick = (sub: { title: string; href: string }) => {
  mobileMenuOpen.value = false
  if (typeof window !== 'undefined' && sub.href.startsWith('/#')) {
    if (window.location.pathname === '/') {
      const element = document.querySelector(sub.href.replace('/', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
  }
  router.push(sub.href)
}

const handleLoginClick = () => {
  mobileMenuOpen.value = false
  emit('openLoginModal')
}
</script>

<template>
  <!-- Navigation Bar: TƯƠI SÁNG, ĐẬM ĐÀ TÔNG MÀU CHỦ ĐẠO VÀNG CHANH -->
  <nav class="sticky top-0 z-40 bg-gradient-to-r from-lemon-400 via-lemon-300 to-lemon-400 border-b-2 border-lemon-500 shadow-md">
    <div class="max-w-7xl mx-auto px-3 sm:px-6">
      <div class="flex items-center justify-between h-12 sm:h-14">

        <!-- Desktop Nav Items (xl and above) -->
        <div class="hidden xl:flex items-center space-x-1">
          <div v-for="item in navItems" :key="item.name" class="relative group">
            <a 
              :href="item.href" 
              @click.prevent="handleNavClick(item)"
              class="h-9 sm:h-10 flex items-center gap-1.5 px-3 sm:px-3.5 text-[13px] font-bold tracking-wide transition-all duration-200 rounded-lg whitespace-nowrap cursor-pointer"
              :class="activeItem === item.name
                ? 'text-navy-950 bg-white font-black shadow-md'
                : 'text-slate-900 hover:text-black hover:bg-white/40'"
            >
              <span>{{ item.name }}</span>
              <svg 
                v-if="item.subItems"
                class="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-200"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <!-- Dropdown Menu - Tươi sáng, nền trắng viền vàng chanh -->
            <div 
              v-if="item.subItems"
              class="absolute left-0 top-full pt-1 hidden group-hover:block w-72 z-50 animate-fadeIn"
            >
              <div class="bg-white rounded-xl shadow-2xl border-2 border-lemon-400 py-2 overflow-hidden">
                <a 
                  v-for="sub in item.subItems" 
                  :key="sub.title" 
                  :href="sub.href" 
                  @click.prevent="handleSubClick(sub)"
                  class="flex items-center gap-2.5 px-4 py-2.5 text-xs text-slate-800 hover:text-navy-950 hover:bg-lemon-100/80 hover:font-bold transition-all border-l-4 border-transparent hover:border-lemon-500 cursor-pointer"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-lemon-500"></span>
                  <span>{{ sub.title }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Medium Screens scrollable nav (lg to xl) -->
        <div class="hidden lg:flex xl:hidden items-center space-x-1 overflow-x-auto py-1 scrollbar-none flex-1 mr-3">
          <a 
            v-for="item in navItems" 
            :key="item.name" 
            :href="item.href" 
            @click.prevent="handleNavClick(item)"
            class="h-9 sm:h-10 flex items-center whitespace-nowrap px-2.5 sm:px-3 text-xs font-bold rounded-lg transition-colors cursor-pointer" 
            :class="activeItem === item.name
              ? 'text-navy-950 bg-white font-black shadow-md'
              : 'text-slate-900 hover:text-black hover:bg-white/40'"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Mobile Left: Hamburger Menu Trigger + Menu Label (Under xl) -->
        <div class="flex xl:hidden items-center gap-1.5">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="h-9 sm:h-10 flex items-center gap-1.5 px-3 rounded-lg text-slate-900 hover:bg-lemon-500/70 focus:outline-none border border-lemon-600/30"
            aria-label="Toggle navigation menu"
          >
            <svg v-if="!mobileMenuOpen" class="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="text-xs font-black uppercase tracking-wider text-slate-900">Menu</span>
          </button>

          <!-- Quick Home Icon on Mobile -->
          <a 
            href="/"
            @click.prevent="handleNavClick({ name: 'Trang chủ', href: '/' })"
            class="h-9 sm:h-10 w-9 sm:w-10 flex items-center justify-center rounded-lg text-slate-900 hover:bg-lemon-500/70 transition-colors cursor-pointer"
            title="Trang chủ"
          >
            <svg class="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
        </div>

        <!-- Right Side: ĐĂNG NHẬP BUTTON (Height đồng nhất tuyệt đối h-9 sm:h-10, background trắng sang trọng) -->
        <div class="flex items-center gap-2 flex-shrink-0">
          <button 
            @click="handleLoginClick"
            class="h-9 sm:h-10 group relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 rounded-lg font-black text-xs sm:text-[13px] uppercase tracking-wider text-navy-950 bg-white hover:bg-slate-50 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap active:scale-95 border border-white/80"
          >
            <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-navy-950 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span class="whitespace-nowrap font-black">Đăng nhập</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Fullscreen Mobile Navigation Drawer - Nổi lên trên cùng, full height màn hình -->
    <Teleport to="body" v-if="isMounted && mobileMenuOpen">
      <div class="fixed inset-0 z-[999] flex flex-col bg-white overflow-hidden animate-fadeIn">
        <!-- Top Drawer Header Bar (Nền vàng chanh nhận diện thương hiệu) -->
        <div class="bg-gradient-to-r from-lemon-400 via-lemon-300 to-lemon-400 px-4 py-3 border-b-2 border-lemon-500 flex items-center justify-between shadow-sm flex-shrink-0">
          <div class="flex items-center gap-2.5 min-w-0">
            <img 
              src="https://vksndtc.gov.vn/Publishing_Resources/web/assets/img/logo.png" 
              alt="Logo VKSND" 
              class="w-8 h-8 rounded-full bg-white p-0.5 object-contain shadow flex-shrink-0"
            />
            <div class="min-w-0">
              <span class="text-[10px] font-black uppercase tracking-wider text-red-700 block leading-tight">
                VKSND TỐI CAO
              </span>
              <span class="text-xs font-black uppercase text-navy-950 block truncate leading-tight">
                VKSND THÀNH PHỐ HÀ NỘI
              </span>
            </div>
          </div>

          <!-- Nút ĐÓNG MENU to rõ ràng -->
          <button 
            @click="mobileMenuOpen = false"
            class="h-9 px-3.5 rounded-lg bg-navy-950 text-lemon-300 hover:bg-slate-900 active:scale-95 font-black text-xs uppercase flex items-center gap-1.5 shadow-md flex-shrink-0 border border-navy-800"
            aria-label="Đóng menu"
          >
            <svg class="w-4 h-4 text-lemon-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Đóng</span>
          </button>
        </div>

        <!-- Quick Action Shortcuts Bar -->
        <div class="p-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 flex-shrink-0">
          <button 
            @click="handleLoginClick"
            class="flex-1 h-9 flex items-center justify-center gap-1.5 rounded-lg bg-lemon-400 hover:bg-lemon-500 text-navy-950 font-black text-xs uppercase shadow-sm active:scale-95 border border-lemon-500/40"
          >
            <svg class="w-4 h-4 text-navy-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Đăng nhập</span>
          </button>

          <button 
            @click="handleNavClick({ name: 'Trang chủ', href: '/' })"
            class="h-9 px-3 flex items-center justify-center gap-1 rounded-lg bg-white hover:bg-slate-100 text-navy-950 font-bold text-xs shadow-sm active:scale-95 border border-slate-200"
          >
            <svg class="w-4 h-4 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Trang chủ</span>
          </button>
        </div>

        <!-- Scrollable Navigation Items List (Full height) -->
        <div class="flex-1 overflow-y-auto px-4 py-3 divide-y divide-slate-100 space-y-1">
          <div class="text-[11px] font-black text-amber-800 uppercase tracking-widest pb-2 mb-1">
            DANH MỤC HỆ THỐNG CỔNG THÔNG TIN
          </div>

          <div v-for="item in navItems" :key="item.name" class="pt-2 pb-1">
            <a 
              :href="item.href" 
              @click.prevent="handleNavClick(item)"
              class="flex items-center justify-between py-2.5 px-3 rounded-xl text-sm font-bold transition-all cursor-pointer"
              :class="activeItem === item.name 
                ? 'text-navy-950 font-black bg-lemon-100 border-2 border-lemon-400 shadow-sm' 
                : 'text-slate-800 hover:text-black hover:bg-slate-50'"
            >
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full" :class="activeItem === item.name ? 'bg-lemon-500' : 'bg-slate-300'"></span>
                <span>{{ item.name }}</span>
              </div>
              <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <!-- Mobile sub items -->
            <div v-if="item.subItems" class="pl-5 pt-1.5 pb-1 space-y-1">
              <a 
                v-for="sub in item.subItems" 
                :key="sub.title" 
                :href="sub.href" 
                @click.prevent="handleSubClick(sub)"
                class="flex items-center gap-2 py-1.5 px-2.5 rounded-lg text-xs text-slate-600 hover:text-navy-950 hover:bg-lemon-50 hover:font-bold transition-all cursor-pointer"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-lemon-400 flex-shrink-0"></span>
                <span>{{ sub.title }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Drawer Footer -->
        <div class="p-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 flex-shrink-0">
          <div class="flex items-center gap-1.5 font-bold text-navy-950">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Hotline: 0243.825.5999</span>
          </div>
          <span class="text-[11px] text-slate-400 font-mono">vkshanoi.gov.vn</span>
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
