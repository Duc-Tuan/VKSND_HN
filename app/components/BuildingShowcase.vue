<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface BuildingImage {
  id: string
  title: string
  subtitle: string
  url: string
  description: string
  badge: string
  objectPosition?: string
}

const buildingImages: BuildingImage[] = [
  {
    id: 'b-1',
    title: 'Toàn cảnh Trụ sở Tòa án nhân dân thành phố Hà Nội',
    subtitle: 'Góc rộng trên cao - Công trình kiến trúc tư pháp hiện đại, biểu tượng công lý Thủ đô',
    url: '/images/tand_hanoi_aerial.jpg',
    description: 'Toàn cảnh Trụ sở Tòa án nhân dân thành phố Hà Nội nhìn từ trên cao, khuôn viên cây xanh khang trang, bề thế, thể hiện tính tôn nghiêm và vị thế cơ quan tư pháp.',
    badge: 'TOÀN CẢNH TRỤ SỞ',
    objectPosition: '50% 65%' // Căn giữa tòa nhà chính diện khi ở góc chụp trên cao
  },
  {
    id: 'b-2',
    title: 'Mặt tiền chính diện Trụ sở Tòa án nhân dân TP. Hà Nội',
    subtitle: 'Kiến trúc tân cổ điển trang nghiêm với hàng cột đá uy nghi và Quốc huy Việt Nam',
    url: '/images/tand_hanoi_facade_wide.jpg',
    description: 'Mặt tiền bề thế của Tòa án nhân dân thành phố Hà Nội với Quốc huy rực rỡ, biển tên cơ quan mạ vàng chuẩn mực và hàng cột trụ vững chãi.',
    badge: 'MẶT TIỀN TRỤ SỞ',
    objectPosition: '50% 20%' // Căn chuẩn vào hàng cột và Quốc huy trên đỉnh mái
  },
  {
    id: 'b-3',
    title: 'Hội trường xét xử & Phòng xử án số hóa TAND',
    subtitle: 'Hệ thống phòng xử án hiện đại, trang bị công nghệ xét xử trực tuyến',
    url: '/images/tand_courtroom_hall.jpg',
    description: 'Phòng xử án trang nghiêm với Quốc huy Việt Nam, bàn Hội đồng xét xử chuẩn mực tư pháp và màn hình số hóa hồ sơ tranh tụng điện tử.',
    badge: 'PHÒNG XÉT XỬ TAND',
    objectPosition: '50% 35%'
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
  <section class="w-full relative overflow-hidden bg-navy-950 border-b-2 border-lemon-400 group select-none"
    @mouseenter="isAutoPlay = false" @mouseleave="isAutoPlay = true">
    <!-- Top Auto Slide Progress Bar (Chạy liên tục theo chu kỳ 5 giây) -->
    <div class="absolute top-0 left-0 right-0 h-[3px] bg-black/40 z-30">
      <div
        class="h-full bg-gradient-to-r from-lemon-400 via-lemon-300 to-amber-400 transition-all duration-75 ease-linear shadow-lemon-sm"
        :style="{ width: `${slideProgress}%` }"></div>
    </div>

    <!-- Main Full-Width Slider Viewport (Chiều cao linh hoạt từ mobile đến PC và màn hình siêu rộng Ultrawide) -->
    <div class="hero-slider-viewport">

      <!-- Slide Images with Instant Smooth Crossfade (Không bị màn hình đen khi chuyển) -->
      <transition name="hero-fade">
        <div :key="currentIndex" class="absolute inset-0 w-full h-full">
          <img :src="currentImage.url" :alt="currentImage.title"
            @error="(e: any) => e.target.src = '/images/tand_hanoi_facade.jpg'"
            class="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-700 ease-out"
            :style="{ objectPosition: currentImage.objectPosition || '50% 50%' }" />
        </div>
      </transition>

      <!-- Atmospheric Cinematic Gradients for Edge-to-Edge Banner -->
      <div class="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-black/20 pointer-events-none">
      </div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/20 to-transparent pointer-events-none">
      </div>

      <!-- Top Utility Floating Header (Breadcrumb & Fullscreen Trigger) -->
      <div class="absolute top-3 sm:top-4 inset-x-0 z-20 pointer-events-none">
        <div class="max-w-[96%] w-full mx-auto px-2 sm:px-4 lg:px-6 flex items-center justify-between">
          <div
            class="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border-2 border-lemon-400 text-slate-900 text-[10px] sm:text-xs font-bold shadow-lg pointer-events-auto">
            <span class="w-2 h-2 rounded-full bg-lemon-500 animate-pulse"></span>
            <span class="text-lemon-700 font-black uppercase tracking-wider">{{ currentImage.badge }}</span>
            <span class="text-slate-300">•</span>
            <span class="hidden sm:inline text-slate-800 font-bold">TÒA ÁN NHÂN DÂN THÀNH PHỐ HÀ NỘI</span>
          </div>

          <button @click="isLightboxOpen = true"
            class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 hover:bg-lemon-400 text-slate-900 hover:text-white text-[11px] sm:text-xs font-bold transition-all border-2 border-lemon-400 backdrop-blur-md shadow-lg pointer-events-auto">
            <svg class="w-3.5 h-3.5 text-lemon-600 group-hover:text-white" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            <span class="hidden sm:inline">Xem toàn màn hình</span>
          </button>
        </div>
      </div>

      <!-- Left / Right Navigation Arrow Buttons (Full-Width Edge Anchored) -->
      <button @click="prevSlide"
        class="absolute left-2.5 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-navy-950/60 hover:bg-lemon-400 text-white hover:text-white border border-white/20 hover:border-lemon-400 backdrop-blur-md transition-all active:scale-90 shadow-xl flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 duration-300"
        title="Ảnh trước">
        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button @click="nextSlide"
        class="absolute right-2.5 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-navy-950/60 hover:bg-lemon-400 text-white hover:text-white border border-white/20 hover:border-lemon-400 backdrop-blur-md transition-all active:scale-90 shadow-xl flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 duration-300"
        title="Ảnh kế tiếp">
        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Bottom Content & Navigation Overlay Area -->
      <div class="absolute bottom-0 inset-x-0 z-20 pb-3 sm:pb-5 md:pb-6 flex flex-col justify-end">
        <div
          class="max-w-[96%] w-full mx-auto px-2 sm:px-4 lg:px-6 flex flex-col md:flex-row md:items-end justify-between gap-3">

          <!-- Slide Caption Details -->
          <div class="max-w-2xl space-y-1 sm:space-y-1.5">
            <div class="flex items-center gap-2">
              <span
                class="px-2 py-0.5 rounded bg-lemon-400 text-white text-[9px] sm:text-[10px] font-black tracking-wider uppercase shadow-sm">
                {{ currentImage.badge }}
              </span>
              <span class="text-xs text-lemon-300 font-mono font-bold">
                {{ currentIndex + 1 }} / {{ buildingImages.length }}
              </span>
            </div>

            <h2
              class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight drop-shadow-md leading-tight">
              {{ currentImage.title }}
            </h2>

            <p class="text-xs sm:text-sm text-lemon-300 font-semibold drop-shadow line-clamp-1">
              {{ currentImage.subtitle }}
            </p>

            <p class="text-[11px] sm:text-xs text-slate-300 line-clamp-1 sm:line-clamp-2 max-w-xl drop-shadow">
              {{ currentImage.description }}
            </p>
          </div>

          <!-- Bottom Slide Thumbnail / Dot Pills (Tươi sáng, viền đỏ tư pháp hiện đại) -->
          <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 self-start md:self-end">
            <button v-for="(img, idx) in buildingImages" :key="img.id" @click="selectSlide(idx)"
              class="relative rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-200 flex items-center gap-1.5 p-1 sm:p-1.5 shadow-lg"
              :class="currentIndex === idx
                ? 'border-lemon-400 bg-white text-lemon-400 shadow-lemon-glow scale-105 ring-2 ring-lemon-400'
                : 'border-white/60 bg-white/80 hover:bg-white text-slate-800 opacity-80 hover:opacity-100'"
              :title="img.title">
              <div class="w-9 h-6 sm:w-12 sm:h-8 rounded-md overflow-hidden flex-shrink-0 bg-black shadow-inner">
                <img :src="img.url" :alt="img.title" @error="(e: any) => e.target.src = '/images/tand_hanoi_facade.jpg'"
                  class="w-full h-full object-cover" />
              </div>
              <div class="hidden lg:block text-left pr-1.5">
                <span class="text-[9px] font-black uppercase tracking-wider block"
                  :class="currentIndex === idx ? 'text-lemon-700' : 'text-slate-600'">
                  {{ img.badge }}
                </span>
                <span class="text-[10px] sm:text-[11px] font-bold block truncate max-w-[110px]"
                  :class="currentIndex === idx ? 'text-lemon-700 font-black' : 'text-slate-800 font-semibold'">
                  {{ img.title }}
                </span>
              </div>
            </button>
          </div>

        </div>
      </div>

    </div>

    <!-- Fullscreen Lightbox Modal -->
    <div v-if="isLightboxOpen"
      class="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 backdrop-blur-md"
      @click.self="isLightboxOpen = false">
      <button @click="isLightboxOpen = false"
        class="absolute top-4 right-4 text-white hover:text-lemon-400 p-2.5 rounded-full bg-navy-900/80 border border-slate-700 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="max-w-5xl w-full text-center space-y-3">
        <img :src="currentImage.url" :alt="currentImage.title"
          class="max-h-[80vh] w-auto mx-auto rounded-xl shadow-2xl border-2 border-lemon-400 object-contain" />
        <div class="text-white">
          <h4 class="text-base sm:text-lg font-bold text-white">{{ currentImage.title }}</h4>
          <p class="text-xs text-lemon-300">{{ currentImage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-slider-viewport {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  background-color: #020617;
}

@media (min-width: 480px) {
  .hero-slider-viewport {
    height: 380px;
  }
}

@media (min-width: 640px) {
  .hero-slider-viewport {
    height: 440px;
  }
}

@media (min-width: 768px) {
  .hero-slider-viewport {
    height: 500px;
  }
}

@media (min-width: 1024px) {
  .hero-slider-viewport {
    height: 580px;
  }
}

@media (min-width: 1280px) {
  .hero-slider-viewport {
    height: 640px;
  }
}

@media (min-width: 1536px) {
  .hero-slider-viewport {
    height: 720px;
  }
}

@media (min-width: 1920px) {
  .hero-slider-viewport {
    height: 800px;
  }
}

@media (min-width: 2400px) {
  .hero-slider-viewport {
    height: 880px;
  }
}

@media (min-width: 2800px) {
  .hero-slider-viewport {
    height: 960px;
  }
}

.hero-fade-enter-active,
.hero-fade-leave-active {
  transition: opacity 0.6s ease;
}

.hero-fade-enter-from,
.hero-fade-leave-to {
  opacity: 0;
}
</style>
