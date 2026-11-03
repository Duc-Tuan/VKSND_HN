<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BuildingShowcase from '../components/BuildingShowcase.vue'
import HeroFeaturedNews from '../components/HeroFeaturedNews.vue'
import CourtScheduleSection from '../components/CourtScheduleSection.vue'
import NoticeDocumentsSection from '../components/NoticeDocumentsSection.vue'
import CategoryNewsSection from '../components/CategoryNewsSection.vue'
import PartnersSection from '../components/PartnersSection.vue'

// Local Interactive Modals for Court Schedule
import CourtDetailModal from '../components/CourtDetailModal.vue'

import type { NewsItem, CourtScheduleItem, NoticeItem } from '../data/newsData'

const router = useRouter()

// Direct page navigation when clicking ANY article or notice (NO POPUP!)
const handleOpenArticle = (article: NewsItem) => {
  router.push(`/tin-tuc/${article.id}`)
}

const handleViewNotice = (notice: NoticeItem) => {
  router.push(`/tin-tuc/${notice.id}`)
}

// Modal states for non-article features
const isCourtModalOpen = ref(false)
const selectedCourt = ref<CourtScheduleItem | null>(null)

const openCourtModal = (court: CourtScheduleItem) => {
  selectedCourt.value = court
  isCourtModalOpen.value = true
}
</script>

<template>
  <div class="homepage">
    <!-- Section 0: HÌNH ẢNH TRỤ SỞ TAND HÀ NỘI (Edge-to-edge Auto-slider) -->
    <BuildingShowcase />

    <!-- Section 1: Tin tức sự kiện nổi bật (Hero Spotlight + Sub-hot + Timeline 24/7) -->
    <HeroFeaturedNews 
      @openArticle="handleOpenArticle"
    />

    <!-- Section 2: Lịch xét xử tại Tòa án nhân dân thành phố Hà Nội -->
    <CourtScheduleSection 
      @openCourtModal="openCourtModal"
    />

    <!-- Section 3: Thông báo & Văn bản chỉ đạo điều hành mới nhất -->
    <NoticeDocumentsSection 
      @viewNotice="handleViewNotice"
    />

    <!-- Section 4: Chuyên mục Hoạt động xét xử nghiệp vụ (Án Hình sự, Dân sự, Xây dựng ngành) -->
    <CategoryNewsSection 
      @openArticle="handleOpenArticle"
    />

    <!-- Section 5: Liên kết cơ quan Đảng & Nhà nước -->
    <PartnersSection />

    <!-- Modals for Court Schedule -->
    <CourtDetailModal 
      :court="selectedCourt" 
      :isOpen="isCourtModalOpen" 
      @close="isCourtModalOpen = false" 
    />
  </div>
</template>
