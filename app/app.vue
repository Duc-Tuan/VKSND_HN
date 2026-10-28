<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import HeaderTopBar from './components/HeaderTopBar.vue'
import HeaderBanner from './components/HeaderBanner.vue'
import HeaderNav from './components/HeaderNav.vue'
import TickerBar from './components/TickerBar.vue'
import FooterSection from './components/FooterSection.vue'

// Global Modals (Accessible from top navigation bar)
import LoginModal from './components/LoginModal.vue'
import SearchModal from './components/SearchModal.vue'

import { useScrollObserver } from './composables/useScrollObserver'

const router = useRouter()

// Initialize Scroll Observer for animations
useScrollObserver()

// Scroll progress bar with RAF throttle for butter-smooth 60fps scrolling
const scrollProgress = ref(0)
const showScrollTop = ref(false)
let ticking = false
let cachedDocHeight = 0

const updateDocDimensions = () => {
  if (typeof window === 'undefined') return
  cachedDocHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
}

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollTop = window.scrollY
      if (cachedDocHeight > 0) {
        scrollProgress.value = Math.min(1, Math.max(0, scrollTop / cachedDocHeight))
      }
      showScrollTop.value = scrollTop > 350
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  updateDocDimensions()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', updateDocDimensions, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateDocDimensions)
})

// Modal states
const isLoginModalOpen = ref(false)
const isSearchModalOpen = ref(false)

// When selecting an item from the global search modal -> NAVIGATE TO DETAIL PAGE (NO POPUP!)
const handleSelectSearchArticle = (item: any) => {
  isSearchModalOpen.value = false
  router.push(`/tin-tuc/${item.id}`)
}

// Scroll to top
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-lemon-400 selection:text-navy-950 relative">
    <!-- Top Reading Scroll Progress Indicator (Thanh tiến trình đọc cuộn trang - GPU Accelerated) -->
    <div 
      class="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-lemon-400 via-amber-300 to-lemon-500 z-50 origin-left pointer-events-none will-change-transform shadow-lemon-sm"
      :style="{ transform: `scaleX(${scrollProgress})` }"
    ></div>

    <!-- Top Utility Bar (Real-time Clock, Hotline, Search) -->
    <HeaderTopBar 
      class="animate-fadeInDown"
      @openSearch="isSearchModalOpen = true" 
    />

    <!-- Main Header Banner (Trụ sở TAND background, Logo TAND, Slogan Bác dạy) -->
    <HeaderBanner />

    <!-- Navigation Bar (Trang chủ, Tin tức sự kiện, Thông báo, Lịch xét xử, Giới thiệu, Hoạt động khác, Hướng dẫn thủ tục, Đăng nhập) -->
    <HeaderNav 
      @openLoginModal="isLoginModalOpen = true"
    />

    <!-- Breaking News Ticker (Điểm tin nổi bật 24/7) -->
    <TickerBar />

    <!-- Main Content Area: Renders active route page (Home index.vue or /tin-tuc/[id].vue) -->
    <main class="flex-grow">
      <NuxtPage />
    </main>

    <!-- Footer Cơ quan Nhà nước chuẩn mực & trang trọng -->
    <FooterSection />

    <!-- Global Modals -->
    <LoginModal 
      :isOpen="isLoginModalOpen" 
      @close="isLoginModalOpen = false" 
    />

    <SearchModal 
      :isOpen="isSearchModalOpen" 
      @close="isSearchModalOpen = false"
      @selectArticle="handleSelectSearchArticle"
    />

    <!-- Floating Scroll-to-Top Button with smooth entrance -->
    <transition name="fade">
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 z-30 p-3 rounded-full bg-lemon-400 hover:bg-lemon-300 text-navy-950 shadow-lemon-glow hover:scale-110 active:scale-95 transition-all border border-lemon-300 animate-floatSoft"
        title="Lên đầu trang"
        aria-label="Lên đầu trang"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
