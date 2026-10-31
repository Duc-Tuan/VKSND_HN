<script setup lang="ts">
defineProps<{
  video: { id: string; title: string; duration: string; thumbnail: string; date: string } | null
  isOpen: boolean
}>()

defineEmits(['close'])
</script>

<template>
  <div v-if="isOpen && video" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Backdrop -->
    <div 
      @click="$emit('close')" 
      class="fixed inset-0 bg-navy-950/85 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Modal Box -->
    <div class="relative bg-navy-950 text-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border-2 border-lemon-400 z-10 animate-scaleUp">
      <!-- Header -->
      <div class="p-4 border-b border-navy-800 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-lemon-400 text-white">
            Truyền hình Tòa án
          </span>
          <span class="text-xs text-slate-300 font-mono">{{ video.duration }}</span>
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

      <!-- Video Screen Mock Player -->
      <div class="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
        <img :src="video.thumbnail" :alt="video.title" class="w-full h-full object-cover opacity-60"/>
        
        <!-- Video Controls Overlay -->
        <div class="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-transparent to-black/40">
          <div class="flex items-center justify-between text-xs text-slate-300">
            <span>Đang phát: {{ video.title }}</span>
            <span class="text-yellow-400 font-mono">1080p HD</span>
          </div>

          <div class="flex items-center justify-center">
            <button class="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-lemon-400/35 backdrop-blur-md border-2 border-lemon-400/80 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-lemon-400/50 transition-all duration-300">
              <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shadow-md border border-slate-100">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-lemon-400 fill-lemon-400 drop-shadow-sm" viewBox="0 0 24 24">
                  <path d="M8 5.5v13l10-6.5-10-6.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>
              </div>
            </button>
          </div>

          <!-- Progress Bar -->
          <div class="space-y-1">
            <div class="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div class="w-1/3 h-full bg-lemon-400 rounded-full"></div>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>06:12</span>
              <span>{{ video.duration }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Info -->
      <div class="p-5">
        <h3 class="text-sm sm:text-base font-bold text-white mb-2">{{ video.title }}</h3>
        <p class="text-xs text-slate-400">
          Phát sóng chuyên mục "Pháp đình & Công lý" - Ban Biên tập Cổng thông tin điện tử Tòa án nhân dân thành phố Hà Nội.
        </p>
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
