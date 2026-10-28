<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface BuildingImage {
  id: string
  title: string
  subtitle: string
  url: string
  description: string
  badge: string
}

const buildingImages: BuildingImage[] = [
  {
    id: 'b-1',
    title: 'Trụ sở Tòa án nhân dân thành phố Hà Nội',
    subtitle: 'Công trình kiến trúc Pháp cổ tại số 43 Hai Bà Trưng, Hoàn Kiếm, Hà Nội',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVbBgGBxspnUMpUKXB5ULZvZj7TfQqpc8AvvygBBImfPHXwoFwi6T09A&s=10',
    description: 'Trụ sở Tòa án nhân dân thành phố Hà Nội với kiến trúc Pháp cổ đặc trưng, Quốc huy nước CHXHCN Việt Nam và cờ đỏ sao vàng tung bay trang trọng.',
    badge: 'TRỤ SỞ TAND TP HÀ NỘI'
  },
  {
    id: 'b-2',
    title: 'Toàn cảnh Trụ sở Tòa án nhân dân thành phố Hà Nội',
    subtitle: 'Kiến trúc bề thế, kỷ cương, biểu tượng công lý của Thủ đô Hà Nội',
    url: '/images/tand_hanoi_facade.jpg',
    description: 'Mặt tiền bề thế của Tòa án nhân dân thành phố Hà Nội với biển tên mạ vàng, cột trụ vững chãi và khuôn viên cây xanh mát.',
    badge: 'MẶT TIỀN TRỤ SỞ CHÍNH'
  },
  {
    id: 'b-3',
    title: 'Hội trường xét xử & Phòng xử án số hóa TAND',
    subtitle: 'Hệ thống phòng xử án hiện đại, trang bị công nghệ xét xử trực tuyến',
    url: '/images/tand_courtroom_hall.jpg',
    description: 'Phòng xử án trang nghiêm với Quốc huy Việt Nam, bàn Hội đồng xét xử chuẩn mực tư pháp và màn hình số hóa hồ sơ tranh tụng điện tử.',
    badge: 'PHÒNG XÉT XỬ TAND'
  }
]

const currentIndex = ref(0)
const isAutoPlay = ref(true)
const isLightboxOpen = ref(false)
const slideProgress = ref(0)
let progressInterval: any = null
const SLIDE_DURATION = 5000
const PROGRESS_STEP = 50

// Safe computed image to completely prevent TypeScript/Volar 'possibly undefined' error
const currentImage = computed<BuildingImage>(() => {
  return buildingImages[currentIndex.value] ?? buildingImages[0] ?? {
    id: 'b-default',
    title: 'Trụ sở Tòa án nhân dân Thành phố Hà Nội',
    subtitle: 'Cơ quan xét xử, thực hiện quyền tư pháp của Nhà nước',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVbBgGBxspnUMpUKXB5ULZvZj7TfQqpc8AvvygBBImfPHXwoFwi6T09A&s=10',
    description: 'Trụ sở cơ quan TAND TP Hà Nội',
    badge: 'TRỤ SỞ CHÍNH'
  }
})

const nextSlide = () => {
  slideProgress.value = 0
  currentIndex.value = (currentIndex.value + 1) % buildingImages.length
}

const prevSlide = () => {
  slideProgress.value = 0
  currentIndex.value = (currentIndex.value - 1 + buildingImages.length) % buildingImages.length
}

const selectSlide = (idx: number) => {
  slideProgress.value = 0
  currentIndex.value = idx
}

onMounted(() => {
  progressInterval = setInterval(() => {
    if (isAutoPlay.value) {
      slideProgress.value += (PROGRESS_STEP / SLIDE_DURATION) * 100
      if (slideProgress.value >= 100) {
        nextSlide()
      }
    }
  }, PROGRESS_STEP)
})

onUnmounted(() => {
  if (progressInterval) clearInterval(progressInterval)
})
</script>

<template>
  <!-- Full-Width Hero Slider Banner (Tràn viền 100vw, tự chuyển slide với thanh tiến trình) -->
  <section 
    class="w-full relative overflow-hidden bg-navy-950 border-b-2 border-lemon-400 group select-none"
    @mouseenter="isAutoPlay = false"
    @mouseleave="isAutoPlay = true"
  >
    <!-- Top Auto Slide Progress Bar (Chạy liên tục theo chu kỳ 5 giây) -->
    <div class="absolute top-0 left-0 right-0 h-[3px] bg-black/40 z-30">
      <div 
        class="h-full bg-gradient-to-r from-lemon-400 via-lemon-300 to-amber-400 transition-all duration-75 ease-linear shadow-lemon-sm"
        :style="{ width: `${slideProgress}%` }"
      ></div>
    </div>

    <!-- Main Full-Width Slider Viewport -->
    <div class="relative w-full h-[360px] sm:h-[460px] md:h-[520px] lg:h-[580px] overflow-hidden bg-black">
      
      <!-- Slide Images with Instant Smooth Crossfade (Không bị màn hình đen khi chuyển) -->
      <transition name="hero-fade">
        <div :key="currentIndex" class="absolute inset-0 w-full h-full">
          <img
            :src="currentImage.url"
            :alt="currentImage.title"
            @error="(e: any) => e.target.src = '/images/tand_hanoi_facade.jpg'"
            class="w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </transition>

      <!-- Atmospheric Cinematic Gradients for Edge-to-Edge Banner -->
      <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-black/30 pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/20 to-transparent pointer-events-none"></div>

      <!-- Top Utility Floating Header (Breadcrumb & Fullscreen Trigger) -->
      <div class="absolute top-4 sm:top-6 inset-x-0 z-20 px-4 sm:px-8 flex items-center justify-between pointer-events-none">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border-2 border-lemon-400 text-slate-900 text-[11px] sm:text-xs font-bold shadow-lg pointer-events-auto">
          <span class="w-2.5 h-2.5 rounded-full bg-lemon-500 animate-pulse"></span>
          <span class="text-amber-800 font-black uppercase tracking-wider">{{ currentImage.badge }}</span>
          <span class="text-slate-300">•</span>
          <span class="hidden sm:inline text-slate-800 font-bold">TÒA ÁN NHÂN DÂN THÀNH PHỐ HÀ NỘI</span>
        </div>

        <button
          @click="isLightboxOpen = true"
          class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 hover:bg-lemon-400 text-slate-900 hover:text-navy-950 text-xs font-bold transition-all border-2 border-lemon-400 backdrop-blur-md shadow-lg pointer-events-auto"
        >
          <svg class="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
          </svg>
          <span class="hidden sm:inline">Xem toàn màn hình</span>
        </button>
      </div>

      <!-- Left / Right Navigation Arrow Buttons (Full-Width Edge Anchored) -->
      <button 
        @click="prevSlide" 
        class="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-950/60 hover:bg-lemon-400 text-white hover:text-navy-950 border border-white/20 hover:border-lemon-400 backdrop-blur-md transition-all active:scale-90 shadow-xl flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 duration-300"
        title="Ảnh trước"
      >
        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <button 
        @click="nextSlide" 
        class="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-950/60 hover:bg-lemon-400 text-white hover:text-navy-950 border border-white/20 hover:border-lemon-400 backdrop-blur-md transition-all active:scale-90 shadow-xl flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 duration-300"
        title="Ảnh kế tiếp"
      >
        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
        </svg>
      </button>

      <!-- Bottom Content & Navigation Overlay Area -->
      <div class="absolute bottom-0 inset-x-0 z-20 p-4 sm:p-8 md:p-10 flex flex-col justify-end">
        <div class="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-4">
          
          <!-- Slide Caption Details -->
          <div class="max-w-3xl space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded bg-lemon-400 text-navy-950 text-[10px] sm:text-xs font-black tracking-wider uppercase shadow-sm">
                {{ currentImage.badge }}
              </span>
              <span class="text-xs text-lemon-300 font-mono font-bold">
                {{ currentIndex + 1 }} / {{ buildingImages.length }}
              </span>
            </div>

            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-md leading-tight">
              {{ currentImage.title }}
            </h2>

            <p class="text-xs sm:text-sm md:text-base text-lemon-300 font-semibold drop-shadow">
              {{ currentImage.subtitle }}
            </p>

            <p class="text-[11px] sm:text-xs md:text-sm text-slate-300 line-clamp-2 max-w-2xl drop-shadow">
              {{ currentImage.description }}
            </p>
          </div>

          <!-- Bottom Slide Thumbnail / Dot Pills (Tươi sáng, viền vàng chanh hiện đại) -->
          <div class="flex items-center gap-2 sm:gap-3 flex-shrink-0 self-start md:self-end">
            <button
              v-for="(img, idx) in buildingImages"
              :key="img.id"
              @click="selectSlide(idx)"
              class="relative rounded-xl overflow-hidden border-2 transition-all duration-200 flex items-center gap-2 p-1 sm:p-1.5 shadow-lg"
              :class="currentIndex === idx 
                ? 'border-lemon-400 bg-white text-navy-950 shadow-lemon-glow scale-105 ring-2 ring-lemon-400' 
                : 'border-white/60 bg-white/80 hover:bg-white text-slate-800 opacity-80 hover:opacity-100'"
              :title="img.title"
            >
              <div class="w-10 h-7 sm:w-14 sm:h-9 rounded-lg overflow-hidden flex-shrink-0 bg-black shadow-inner">
                <img :src="img.url" :alt="img.title" @error="(e: any) => e.target.src = '/images/tand_hanoi_facade.jpg'" class="w-full h-full object-cover"/>
              </div>
              <div class="hidden lg:block text-left pr-2">
                <span 
                  class="text-[9px] font-black uppercase tracking-wider block"
                  :class="currentIndex === idx ? 'text-amber-800' : 'text-slate-600'"
                >
                  {{ img.badge }}
                </span>
                <span 
                  class="text-[11px] font-bold block truncate max-w-[120px]"
                  :class="currentIndex === idx ? 'text-navy-950 font-black' : 'text-slate-800 font-semibold'"
                >
                  {{ img.title }}
                </span>
              </div>
            </button>
          </div>

        </div>
      </div>

    </div>

    <!-- Fullscreen Lightbox Modal -->
    <div 
      v-if="isLightboxOpen" 
      class="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md"
      @click.self="isLightboxOpen = false"
    >
      <button 
        @click="isLightboxOpen = false" 
        class="absolute top-4 right-4 text-white hover:text-lemon-400 p-2.5 rounded-full bg-navy-900/80 border border-slate-700 transition-colors"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <div class="max-w-5xl w-full text-center space-y-3">
        <img 
          :src="currentImage.url" 
          :alt="currentImage.title"
          class="max-h-[80vh] w-auto mx-auto rounded-xl shadow-2xl border-2 border-lemon-400 object-contain"
        />
        <div class="text-white">
          <h4 class="text-base sm:text-lg font-bold text-white">{{ currentImage.title }}</h4>
          <p class="text-xs text-lemon-300">{{ currentImage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.6s ease;
}
.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}
</style>
