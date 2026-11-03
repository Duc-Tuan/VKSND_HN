<script setup lang="ts">
defineProps<{
  video: { id: string; title: string; duration: string; thumbnail: string; date: string } | null
  isOpen: boolean
}>()

defineEmits(['close'])
</script>

<template>
  <div v-if="isOpen && video" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
    <!-- Backdrop -->
    <div 
      @click="$emit('close')" 
      class="fixed inset-0 bg-slate-950/85 backdrop-blur-sm transition-opacity"
    ></div>

    <!-- Modal Box -->
    <div class="relative bg-slate-950 text-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl sm:max-w-3xl w-full overflow-hidden border border-slate-700/80 z-10 animate-scaleUp my-auto">
      <!-- Top Decorative Accent Bar -->
      <div class="h-1.5 w-full bg-gradient-to-r from-red-800 via-red-600 to-amber-500"></div>

      <!-- Header: Gradient Đỏ Tư Pháp -->
      <div class="p-4 sm:p-5 bg-gradient-to-r from-[#861200] via-[#a41600] to-[#781000] border-b border-white/10 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/20 text-yellow-300 backdrop-blur-sm border border-white/20 shadow-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
            Truyền hình Tòa án
          </span>
          <span class="text-white/60 text-xs">•</span>
          <span class="text-white/80 text-xs font-mono font-medium">{{ video.duration }}</span>
        </div>

        <button 
          @click="$emit('close')" 
          class="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all duration-200 active:scale-90"
          title="Đóng video"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Video Screen Mock Player -->
      <div class="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
        <img :src="video.thumbnail" :alt="video.title" class="w-full h-full object-cover opacity-60"/>
        
        <!-- Video Controls Overlay -->
        <div class="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/85 via-transparent to-black/40">
          <div class="flex items-center justify-between text-xs text-slate-300">
            <span class="font-medium truncate max-w-[70%]">Đang phát: {{ video.title }}</span>
            <span class="text-amber-400 font-mono font-bold bg-black/40 px-2 py-0.5 rounded border border-amber-400/30">1080p HD</span>
          </div>

          <div class="flex items-center justify-center">
            <button class="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-red-600/35 backdrop-blur-md border-2 border-red-500/80 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-red-600/50 transition-all duration-300 group">
              <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shadow-md">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-red-700 fill-red-700 ml-0.5 group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
                  <path d="M8 5.5v13l10-6.5-10-6.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>
              </div>
            </button>
          </div>

          <!-- Progress Bar -->
          <div class="space-y-1.5">
            <div class="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div class="w-1/3 h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full"></div>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>06:12</span>
              <span>{{ video.duration }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Info -->
      <div class="p-5 bg-slate-900 border-t border-slate-800">
        <h3 class="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug">{{ video.title }}</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Phát sóng chuyên mục "Pháp đình & Công lý" - Ban Biên tập Cổng thông tin điện tử Tòa án nhân dân thành phố Hà Nội.
        </p>
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
