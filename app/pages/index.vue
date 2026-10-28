<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BuildingShowcase from '../components/BuildingShowcase.vue'
import HeroFeaturedNews from '../components/HeroFeaturedNews.vue'
import CourtScheduleSection from '../components/CourtScheduleSection.vue'
import NoticeDocumentsSection from '../components/NoticeDocumentsSection.vue'
import PublicServicesSection from '../components/PublicServicesSection.vue'
import CategoryNewsSection from '../components/CategoryNewsSection.vue'
import InfographicMediaSection from '../components/InfographicMediaSection.vue'
import StatsSection from '../components/StatsSection.vue'
import PartnersSection from '../components/PartnersSection.vue'

// Local Interactive Modals for Court Schedule, Services, and Videos
import CourtDetailModal from '../components/CourtDetailModal.vue'
import ServiceModal from '../components/ServiceModal.vue'
import VideoModal from '../components/VideoModal.vue'

import type { NewsItem, CourtScheduleItem, PublicServiceItem, NoticeItem } from '../data/newsData'

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
const isServiceModalOpen = ref(false)
const isVideoModalOpen = ref(false)

const selectedCourt = ref<CourtScheduleItem | null>(null)
const selectedService = ref<PublicServiceItem | null>(null)
const selectedVideo = ref<any>(null)

const openCourtModal = (court: CourtScheduleItem) => {
  selectedCourt.value = court
  isCourtModalOpen.value = true
}

const openServiceModal = (service: PublicServiceItem) => {
  selectedService.value = service
  isServiceModalOpen.value = true
}

const openVideoModal = (video: any) => {
  selectedVideo.value = video
  isVideoModalOpen.value = true
}
</script>

<template>
  <div class="homepage">
    <!-- Section 0: HÌNH ẢNH TRỤ SỞ VKSND HÀ NỘI (Edge-to-edge Auto-slider) -->
    <BuildingShowcase />

    <!-- Section 1: Tin tức sự kiện nổi bật (Hero Spotlight + Sub-hot + Timeline 24/7) -->
    <HeroFeaturedNews 
      @openArticle="handleOpenArticle"
    />

    <!-- Section 2: Lịch xét xử tại Tòa án & Phân công Kiểm sát viên -->
    <CourtScheduleSection 
      @openCourtModal="openCourtModal"
    />

    <!-- Section 3: Thông báo & Văn bản chỉ đạo điều hành mới nhất -->
    <NoticeDocumentsSection 
      @viewNotice="handleViewNotice"
    />

    <!-- Section 4: Hướng dẫn thủ tục tư pháp & Cổng dịch vụ công trực tuyến -->
    <PublicServicesSection 
      @openServiceModal="openServiceModal"
    />

    <!-- Section 5: Chuyên mục Hoạt động kiểm sát nghiệp vụ (Án Hình sự, Dân sự, Xây dựng ngành) -->
    <CategoryNewsSection 
      @openArticle="handleOpenArticle"
    />

    <!-- Section 6: Truyền hình Kiểm sát & Infographic phổ biến pháp luật -->
    <InfographicMediaSection 
      @openVideoModal="openVideoModal"
    />

    <!-- Section 7: Chỉ tiêu công tác & Thành tựu nổi bật ngành VKS Thủ đô -->
    <StatsSection />

    <!-- Section 8: Liên kết cơ quan Đảng & Nhà nước -->
    <PartnersSection />

    <!-- Modals for Court Schedule, Online Services, Video Viewer -->
    <CourtDetailModal 
      :court="selectedCourt" 
      :isOpen="isCourtModalOpen" 
      @close="isCourtModalOpen = false" 
    />

    <ServiceModal 
      :service="selectedService" 
      :isOpen="isServiceModalOpen" 
      @close="isServiceModalOpen = false" 
    />

    <VideoModal 
      :video="selectedVideo" 
      :isOpen="isVideoModalOpen" 
      @close="isVideoModalOpen = false" 
    />
  </div>
</template>
