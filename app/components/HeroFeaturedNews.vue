<script setup lang="ts">
import { ref, computed } from 'vue'
import { hotSpotlightNews, subHotNews, timelineNewsList, type NewsItem } from '../data/newsData'

const activeFilter = ref('all')
const isAudioPlaying = ref(false)

const emit = defineEmits(['openArticle'])

const toggleAudio = () => {
  isAudioPlaying.value = !isAudioPlaying.value
}

const filteredSubHotNews = computed(() => {
  if (activeFilter.value === 'all') return subHotNews
  return subHotNews.filter(n => n.category.toLowerCase().includes(activeFilter.value.toLowerCase()))
})
</script>

<template>
  <section id="tin-tuc" class="py-5 sm:py-8 overflow-hidden">
    <div class="max-w-[96%] w-full mx-auto px-2 sm:px-4 lg:px-6">

      <!-- Section Header with Category Tabs -->
      <div
        class="reveal-on-scroll flex flex-col md:flex-row md:items-center justify-between pb-3 sm:pb-4 mb-4 sm:mb-6 border-b-2 border-lemon-400 gap-2.5 sm:gap-3">
        <div class="flex items-center gap-2.5 sm:gap-3">
          <div class="w-2 sm:w-2.5 h-6 sm:h-7 bg-lemon-500 rounded-sm shadow-lemon-sm animate-pulse flex-shrink-0">
          </div>
          <div>
            <h2
              class="text-base sm:text-xl md:text-2xl font-black text-navy-950 uppercase tracking-tight flex items-center gap-2">
              TIN TỨC - SỰ KIỆN NỔI BẬT
              <span
                class="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-white/90 text-lemon-700 border border-lemon-200 hidden sm:inline-block animate-floatSoft shadow-sm">
                Cập nhật 24/7
              </span>
            </h2>
            <p class="text-[11px] sm:text-xs text-slate-500 font-medium">Bản tin thông tin chính thống của Tòa án nhân
              dân thành phố Hà Nội</p>
          </div>
        </div>

        <!-- Filter tabs (Horizontal scrollable on mobile) -->
        <div
          class="flex items-center gap-1 overflow-x-auto p-1 bg-white/90 backdrop-blur-sm rounded-full border border-slate-200/90 text-xs font-semibold scrollbar-none w-full md:w-auto shadow-sm">
          <button @click="activeFilter = 'all'"
            class="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-200 whitespace-nowrap transform active:scale-95 text-[11px] sm:text-xs"
            :class="activeFilter === 'all'
              ? 'bg-white text-navy-950 font-black shadow-sm'
              : 'text-slate-600 hover:text-navy-900'">
            Tất cả tin tức
          </button>
          <button @click="activeFilter = 'hoạt động'"
            class="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-200 whitespace-nowrap transform active:scale-95 text-[11px] sm:text-xs"
            :class="activeFilter === 'hoạt động'
              ? 'bg-white text-navy-950 font-black shadow-sm'
              : 'text-slate-600 hover:text-navy-900'">
            Hoạt động ngành
          </button>
          <button @click="activeFilter = 'đảng'"
            class="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all duration-200 whitespace-nowrap transform active:scale-95 text-[11px] sm:text-xs"
            :class="activeFilter === 'đảng'
              ? 'bg-white text-navy-950 font-black shadow-sm'
              : 'text-slate-600 hover:text-navy-900'">
            Công tác Đảng
          </button>
        </div>
      </div>

      <!-- Main Layout: BỐ CỤC ĐẶC TRƯNG CHO TIN HOT TRONG NGÀY -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">

        <!-- CỘT TRÁI (8 Cột): TIN TIÊU ĐIỂM SIÊU HOT + 2 TIN PHỤ -->
        <div class="lg:col-span-8 space-y-5 sm:space-y-6">

          <!-- ★ KHỐI TIN TIÊU ĐIỂM ĐẶC TRƯNG NHẤT (HERO SPOTLIGHT) -->
          <article @click="$emit('openArticle', hotSpotlightNews)"
            class="reveal-left group cursor-pointer relative bg-white rounded-xl overflow-hidden border-2 border-lemon-400/80 shadow-lg hover:shadow-2xl hover:border-lemon-500 transition-all duration-300 transform hover:-translate-y-1">
            <!-- Hot Glow Accent Bar on top with animated gradient -->
            <div class="h-1.5 bg-gradient-to-r from-lemon-500 via-lemon-400 to-amber-500 animate-pulse"></div>

            <div class="grid grid-cols-1 md:grid-cols-12">
              <!-- Spotlight Image with zoom effect (Height responsive) -->
              <div
                class="md:col-span-7 relative overflow-hidden h-48 sm:h-64 md:h-80 lg:h-96 min-[2400px]:h-[480px] bg-slate-900">
                <img :src="hotSpotlightNews.imageUrl" :alt="hotSpotlightNews.title"
                  @error="(e: any) => e.target.src = '/images/tand_hanoi_charity_rain.jpg'"
                  class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out" />
                <div class="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent"></div>

                <!-- Special Badge Tiêu điểm trong ngày -->
                <div class="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-2">
                  <span
                    class="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded bg-lemon-400 text-white text-[10px] sm:text-xs font-black tracking-wide uppercase shadow-lg border border-lemon-300 animate-floatSoft">
                    <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-300 animate-spin" style="animation-duration: 4s;"
                      fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {{ hotSpotlightNews.tag }}
                  </span>
                </div>

                <!-- Category tag bottom left on image -->
                <div class="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3">
                  <span
                    class="px-2 py-0.5 rounded-sm bg-navy-900/90 text-lemon-300 text-[10px] sm:text-[11px] font-semibold backdrop-blur-sm border border-lemon-400/30">
                    {{ hotSpotlightNews.category }}
                  </span>
                </div>
              </div>

              <!-- Spotlight Details & Text -->
              <div
                class="md:col-span-5 p-4 sm:p-5 md:p-6 flex flex-col justify-between bg-gradient-to-b from-white to-lemon-50/30">
                <div>
                  <!-- Date & Time -->
                  <div class="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 mb-1.5 sm:mb-2">
                    <span class="flex items-center gap-1 font-medium text-slate-600">
                      <svg class="w-3.5 h-3.5 text-lemon-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {{ hotSpotlightNews.date }} ({{ hotSpotlightNews.time }})
                    </span>
                    <span>•</span>
                    <span class="flex items-center gap-1">
                      {{ hotSpotlightNews.views }} lượt đọc
                    </span>
                  </div>

                  <!-- Title (Responsive sizing) -->
                  <h3
                    class="text-sm sm:text-base md:text-xl font-bold text-navy-950 group-hover:text-lemon-700 transition-colors duration-300 leading-snug mb-2 sm:mb-3">
                    {{ hotSpotlightNews.title }}
                  </h3>

                  <!-- Summary excerpt -->
                  <p
                    class="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-4 mb-3 sm:mb-4">
                    {{ hotSpotlightNews.summary }}
                  </p>
                </div>

                <!-- Footer with Audio simulation and CTA button -->
                <div class="pt-2.5 sm:pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <!-- Audio Listen Button -->
                  <button @click.stop="toggleAudio"
                    class="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-1 rounded bg-slate-100 hover:bg-lemon-100 text-slate-700 hover:text-navy-950 transition-all border border-slate-200 active:scale-95"
                    :title="isAudioPlaying ? 'Dừng đọc bản tin' : 'Nghe giọng đọc AI'">
                    <svg v-if="!isAudioPlaying" class="w-3.5 h-3.5 text-lemon-600" fill="currentColor"
                      viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                        clip-rule="evenodd" />
                    </svg>
                    <svg v-else class="w-3.5 h-3.5 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd" />
                    </svg>
                    <span>{{ isAudioPlaying ? 'Đang phát...' : 'Nghe đọc' }}</span>
                  </button>

                  <!-- Read More CTA -->
                  <span
                    class="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-navy-900 group-hover:text-lemon-700 transition-colors">
                    <span>Đọc toàn văn</span>
                    <svg class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </article>

          <!-- 2 TIN NÓNG KẾ TIẾP (SUB-HOT) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <article v-for="(sub, idx) in filteredSubHotNews" :key="sub.id" @click="$emit('openArticle', sub)"
              class="reveal-on-scroll group cursor-pointer bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-lemon-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
              :class="idx === 0 ? 'delay-100' : 'delay-200'">
              <div>
                <div class="relative h-40 sm:h-48 md:h-52 2xl:h-60 overflow-hidden bg-slate-900">
                  <img :src="sub.imageUrl" :alt="sub.title"
                    @error="(e: any) => e.target.src = '/images/tand_hanoi_khuvuc9_hoi_nghi.jpg'"
                    class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" />
                  <!-- Sub tag -->
                  <span
                    class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-lemon-400 text-white shadow">
                    {{ sub.tag }}
                  </span>
                  <span
                    class="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] bg-navy-950/80 text-white font-medium">
                    {{ sub.time }}
                  </span>
                </div>

                <div class="p-3.5 sm:p-4">
                  <div class="flex items-center justify-between text-[11px] text-slate-500 mb-1.5">
                    <span class="text-lemon-700 font-semibold">{{ sub.category }}</span>
                    <span>{{ sub.date }}</span>
                  </div>

                  <h4
                    class="text-xs sm:text-sm font-bold text-navy-950 group-hover:text-lemon-700 transition-colors line-clamp-2 mb-1.5 sm:mb-2 leading-snug">
                    {{ sub.title }}
                  </h4>

                  <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {{ sub.summary }}
                  </p>
                </div>
              </div>

              <div
                class="px-3.5 sm:px-4 py-2 sm:py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span class="text-slate-500 font-medium">Tác giả: {{ sub.author }}</span>
                <span class="text-lemon-700 font-bold group-hover:underline">Chi tiết ›</span>
              </div>
            </article>
          </div>
        </div>

        <!-- CỘT PHẢI (4 Cột): DÒNG SỰ KIỆN 24/7 (TIMELINE NHANH NỔI BẬT) -->
        <div class="lg:col-span-4 flex flex-col justify-between space-y-4">
          <div
            class="reveal-right bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-sm relative overflow-hidden">
            <!-- Lemon side ribbon: Căn giữa đối xứng đường chéo góc phải, hiển thị trọn vẹn "TRỰC TIẾP" -->
            <div class="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
              <div
                class="absolute top-4 -right-8 w-28 bg-lemon-400 text-white text-[9px] font-black uppercase py-0.5 text-center rotate-45 shadow-sm tracking-wider">
                Trực tiếp
              </div>
            </div>

            <!-- Header -->
            <div class="flex items-center gap-2 pb-2.5 sm:pb-3 mb-3 sm:mb-4 border-b border-slate-200">
              <div
                class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-lemon-400/20 text-lemon-700 flex items-center justify-center font-bold flex-shrink-0">
                <svg class="w-4 h-4 text-navy-900 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xs sm:text-sm font-extrabold text-navy-950 uppercase tracking-wide">
                  DÒNG SỰ KIỆN 24/7
                </h3>
                <p class="text-[10px] sm:text-[11px] text-slate-500">Tin vắn các quận, huyện & cơ sở</p>
              </div>
            </div>

            <!-- Timeline List with cascading delays -->
            <div class="relative border-l-2 border-lemon-300 ml-2 pl-3.5 sm:pl-4 space-y-3.5 sm:space-y-4">
              <div v-for="(item, idx) in timelineNewsList" :key="item.id" @click="$emit('openArticle', item)"
                class="reveal-on-scroll group cursor-pointer relative" :class="'delay-' + ((idx + 1) * 100)">
                <!-- Dot node on timeline with lemon yellow pulse -->
                <div
                  class="absolute -left-[21px] sm:-left-[23px] top-1 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white border-2 border-lemon-500 group-hover:bg-lemon-400 group-hover:scale-125 transition-all duration-300">
                </div>

                <!-- Time tag -->
                <div class="flex items-center gap-2 mb-1">
                  <span
                    class="inline-block px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-bold bg-navy-900 text-white">
                    {{ item.tag }}
                  </span>
                  <span class="text-[10px] sm:text-[11px] font-semibold text-lemon-700">
                    {{ item.category }}
                  </span>
                </div>

                <!-- Title -->
                <h5
                  class="text-xs font-semibold text-slate-800 group-hover:text-lemon-700 transition-colors leading-snug line-clamp-2">
                  {{ item.title }}
                </h5>

                <p class="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                  {{ item.summary }}
                </p>
              </div>
            </div>

            <!-- Bottom Action -->
            <div class="mt-3.5 sm:mt-4 pt-3 border-t border-slate-100 text-center">
              <a href="#tat-ca-tin"
                class="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-lemon-700 transition-colors">
                <span>Xem kho lưu trữ tin tức sự kiện</span>
                <svg class="w-3.5 h-3.5 fill-none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Banner Chuyên mục: THÔNG BÁO TUYÊN BỐ PHÁ SẢN (Lấp đầy khoảng trống cân đối bố cục) -->
          <div class="reveal-right delay-150">
            <a href="#thong-bao"
              class="group block relative rounded-xl overflow-hidden border-2 border-lemon-400 hover:border-lemon-500 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
              title="Chuyên mục: Thông báo Tuyên bố phá sản">
              <img src="/images/banner_thong_bao_pha_san.png"
                alt="Thông báo tuyên bố phá sản - Tòa án nhân dân thành phố Hà Nội"
                class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
            </a>
          </div>

          <!-- Quick Box: Lời Bác Hồ dạy cán bộ Tòa án - Tươi sáng, trang nghiêm với nền đỏ tư pháp thanh thoát -->
          <div
            class="reveal-right delay-200 bg-gradient-to-r from-lemon-50 via-white to-lemon-50 p-3.5 sm:p-4 rounded-xl text-navy-950 border-l-4 border-lemon-400 border border-lemon-200 shadow-sm">
            <div class="flex items-center gap-2 text-lemon-700 text-xs font-black mb-1 uppercase tracking-wider">
              <svg class="w-4 h-4 text-lemon-600 animate-pulse flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a10.99 10.99 0 00-.25 2.349v3.6a1 1 0 00.553.894l5 2.5a1 1 0 00.894 0l5-2.5a1 1 0 00.553-.894v-3.6a10.99 10.99 0 00-.25-2.349l2.644-1.131a1 1 0 000-1.84l-7-3z" />
              </svg>
              <span class="text-[11px] sm:text-xs">LỜI BÁC HỒ DẠY CÁN BỘ TÒA ÁN</span>
            </div>
            <p class="text-[11px] sm:text-xs text-slate-800 italic leading-relaxed">
              "Người làm công tác xét xử phải: <strong class="text-lemon-700 font-black">Phụng công</strong> - <strong
                class="text-lemon-700 font-black">Thủ pháp</strong> - <strong class="text-lemon-700 font-black">Chí
                công</strong> - <strong class="text-lemon-700 font-black">Vô tư</strong> với phương châm <strong
                class="text-navy-950 font-black">"Gần dân, hiểu dân, giúp dân, học dân"</strong>"
            </p>
            <span
              class="block text-right text-[10px] sm:text-[11px] text-lemon-700 mt-1.5 font-extrabold tracking-wide">-
              Chủ tịch Hồ Chí Minh</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
