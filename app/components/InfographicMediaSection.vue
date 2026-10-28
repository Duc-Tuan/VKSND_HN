<script setup lang="ts">
import { computed } from 'vue'
import { mediaVideos } from '../data/newsData'

const emit = defineEmits(['openVideoModal'])

const featuredVideo = computed(() => mediaVideos[0])
const otherVideos = computed(() => mediaVideos.slice(1))
</script>

<template>
  <section class="py-8 bg-white border-b border-slate-200 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- CỘT TRÁI: VIDEO & TRUYỀN HÌNH KIỂM SÁT (7 Cột) -->
        <div class="reveal-left lg:col-span-7 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 sm:pb-3 border-b-2 border-lemon-400 gap-1.5 sm:gap-3">
            <div class="flex items-center gap-2 sm:gap-2.5">
              <div class="w-2.5 h-6 bg-lemon-500 rounded-sm flex-shrink-0"></div>
              <h2 class="text-base sm:text-lg md:text-xl font-extrabold text-navy-950 uppercase">
                TRUYỀN HÌNH KIỂM SÁT HÀ NỘI
              </h2>
            </div>
            <a href="#video-all" class="text-xs font-bold text-lemon-700 hover:text-navy-950 flex items-center gap-1 transition-colors self-start sm:self-auto pl-5 sm:pl-0">
              <span>Xem tất cả video</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <!-- Featured Video Player Card -->
          <div 
            v-if="featuredVideo"
            @click="$emit('openVideoModal', featuredVideo)"
            class="group cursor-pointer relative rounded-xl overflow-hidden bg-slate-950 aspect-video shadow-md border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-lemon-400"
          >
            <img
              :src="featuredVideo.thumbnail"
              :alt="featuredVideo.title"
              @error="(e: any) => e.target.src = '/images/vksnd_courtroom_hall.jpg'"
              class="w-full h-full object-cover opacity-85 group-hover:scale-108 group-hover:opacity-75 transition-all duration-500"
            />
            
            <!-- Play Button: Nền trong màu trắng, căn giữa chuẩn, icon màu vàng chanh -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div class="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-lemon-400/35 backdrop-blur-md border-2 border-lemon-400/80 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-lemon-400/50 transition-all duration-300">
                <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-100">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 text-lemon-500 fill-lemon-500 drop-shadow-sm" viewBox="0 0 24 24">
                    <path d="M8 5.5v13l10-6.5-10-6.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Bottom Video Overlay Info -->
            <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent">
              <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-lemon-400 text-navy-950 mb-1">
                Thời lượng: {{ featuredVideo.duration }}
              </span>
              <h3 class="text-sm sm:text-base font-bold text-white group-hover:text-lemon-300 transition-colors line-clamp-2">
                {{ featuredVideo.title }}
              </h3>
            </div>
          </div>

          <!-- Secondary Video List -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div
              v-for="(v, index) in otherVideos"
              :key="v.id"
              @click="$emit('openVideoModal', v)"
              class="reveal-on-scroll group cursor-pointer flex items-center gap-3 p-2 rounded-lg bg-slate-50 hover:bg-lemon-50 border border-slate-200 hover:border-lemon-400 transition-all duration-300 transform hover:-translate-y-0.5"
              :class="index === 0 ? 'delay-100' : 'delay-200'"
            >
              <div class="relative w-24 h-16 rounded overflow-hidden flex-shrink-0 bg-slate-800">
                <img :src="v.thumbnail" :alt="v.title" @error="(e: any) => e.target.src = '/images/vksnd_courtroom_hall.jpg'" class="w-full h-full object-cover group-hover:scale-105 transition-transform"/>
                <span class="absolute bottom-1 right-1 px-1 rounded bg-black/80 text-white text-[9px] font-mono">
                  {{ v.duration }}
                </span>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-xs font-bold text-navy-950 group-hover:text-lemon-700 transition-colors line-clamp-2 leading-snug">
                  {{ v.title }}
                </h4>
                <span class="text-[10px] text-slate-400 mt-1 block">{{ v.date }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- CỘT PHẢI: INFOGRAPHIC & PHỔ BIẾN PHÁP LUẬT (5 Cột) -->
        <div class="reveal-right lg:col-span-5 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 sm:pb-3 border-b-2 border-lemon-400 gap-1.5 sm:gap-2">
            <div class="flex items-center gap-2 sm:gap-2.5">
              <div class="w-2.5 h-6 bg-lemon-500 rounded-sm flex-shrink-0"></div>
              <h2 class="text-base sm:text-lg md:text-xl font-extrabold text-navy-950 uppercase">
                INFOGRAPHIC PHÁP LUẬT
              </h2>
            </div>
            <span class="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-lemon-100 text-lemon-900 border border-lemon-300 self-start sm:self-auto">
              Trực quan hóa
            </span>
          </div>

          <!-- Infographic Visual Card 1 - Tươi sáng, tinh tế với nền trắng ngà viền vàng chanh -->
          <div class="reveal-scale delay-100 group relative rounded-xl overflow-hidden border-2 border-lemon-400 bg-gradient-to-br from-lemon-50/80 via-white to-lemon-100/60 text-slate-900 p-4 sm:p-5 shadow-sm hover:shadow-lg hover:border-lemon-500 transition-all duration-300">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span class="px-2.5 py-1 rounded bg-lemon-400 text-navy-950 text-[10px] font-black uppercase shadow-sm">
                Cảnh báo an ninh mạng
              </span>
              <span class="text-xs font-mono font-bold text-amber-800">Nghị định 13/2023</span>
            </div>

            <h3 class="text-sm sm:text-base font-extrabold text-navy-950 group-hover:text-amber-800 transition-colors mb-2 leading-snug">
              Nhận diện 24 phương thức, thủ đoạn lừa đảo trực tuyến phổ biến
            </h3>

            <p class="text-xs text-slate-700 leading-relaxed mb-4">
              Cẩm nang infographic hướng dẫn người dân phòng tránh mất tiền trong tài khoản ngân hàng, giả danh công an, viện kiểm sát gọi điện đe dọa.
            </p>

            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-3 border-t border-lemon-200 text-xs">
              <span class="text-slate-500 font-medium">Dung lượng: 2.4 MB (PDF Full HD)</span>
              <a href="#infographic" class="text-navy-950 font-black hover:text-amber-800 inline-flex items-center justify-center gap-1.5 bg-lemon-400 hover:bg-lemon-300 px-3.5 py-1.5 rounded-lg shadow-sm transition-all whitespace-nowrap self-start sm:self-auto">
                <span>Tải Infographic</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Infographic Visual Card 2 -->
          <div class="reveal-scale delay-200 group relative rounded-xl overflow-hidden border border-slate-200 bg-white p-4 shadow-sm hover:border-lemon-400 hover:shadow-md transition-all duration-300">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-lg bg-lemon-100 text-lemon-700 flex items-center justify-center flex-shrink-0 font-bold group-hover:bg-lemon-400 group-hover:text-navy-950 transition-colors">
                <svg class="w-6 h-6 text-inherit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                </svg>
              </div>
              <div class="flex-1">
                <span class="text-[10px] font-bold text-lemon-700 uppercase block">Số hóa tra cứu</span>
                <h4 class="text-xs sm:text-sm font-bold text-navy-950 group-hover:text-lemon-700 transition-colors">
                  Quét mã QR tra cứu Bộ luật Hình sự và Tố tụng Hình sự hiện hành
                </h4>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
