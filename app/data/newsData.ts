export interface NewsItem {
  id: string
  title: string
  summary: string
  content?: string
  category: string
  date: string
  time?: string
  author: string
  imageUrl: string
  views: number
  isHot?: boolean
  isBreaking?: boolean
  tag?: string
  source?: string
  sourceUrl?: string
  verifiedAgency?: string
  officialDocNumber?: string
}

export interface CourtScheduleItem {
  id: string
  caseNumber: string
  caseName: string
  caseType: 'Hình sự' | 'Dân sự' | 'Hành chính' | 'Kinh doanh thương mại'
  courtDate: string
  courtTime: string
  courtRoom: string
  prosecutor: string
  judge: string
  status: 'Sắp diễn ra' | 'Đang xử' | 'Đã tuyên án' | 'Hoãn phiên tòa'
  level: 'Sơ thẩm' | 'Phúc thẩm'
}

export interface NoticeItem {
  id: string
  code: string
  title: string
  date: string
  department: string
  type: 'Thông báo' | 'Chỉ đạo điều hành' | 'Văn bản hướng dẫn' | 'Tuyển dụng'
  downloadUrl?: string
  content?: string
}

export interface PublicServiceItem {
  id: string
  title: string
  desc: string
  icon: string
  badge: string
  link: string
}

export const breakingNewsList = [
  'VKSND TP Hà Nội: Đẩy mạnh ứng dụng công nghệ thông tin và số hóa 100% hồ sơ vụ án hình sự trọng điểm năm 2026',
  'Thông báo mở rộng tiếp nhận tin báo, tố giác tội phạm qua ứng dụng VNeID và Cổng dịch vụ công trực tuyến',
  'Hội nghị giao ban công tác kiểm sát: Nâng cao chất lượng tranh tụng của Kiểm sát viên tại phiên tòa',
  'Triển khai thực hiện Nghị quyết số 205/2025/QH15 của Quốc hội về thí điểm khởi kiện bảo vệ lợi ích công cộng'
]

export const hotSpotlightNews: NewsItem = {
  id: 'hot-1',
  title: 'VKSND TP Hà Nội triển khai mô hình "Phòng xét xử số hóa" và trình chiếu tài liệu, chứng cứ điện tử tại phiên tòa',
  summary: 'Sáng nay, tại trụ sở VKSND TP Hà Nội đã tổ chức Hội nghị chuyên đề thực hiện đột phá về chuyển đổi số trong công tác thực hành quyền công tố và kiểm sát xét xử vụ án hình sự trọng điểm, đảm bảo tính khách quan, minh bạch và tranh tụng công khai.',
  content: `Nhằm thực hiện thắng lợi các Nghị quyết của Ban Cán sự Đảng VKSND tối cao và Thành ủy Hà Nội về cải cách tư pháp và chuyển đổi số giai đoạn 2025-2030, Ban Lãnh đạo VKSND TP Hà Nội đã chủ trì Hội nghị chuyên đề về đổi mới phương thức kiểm sát, ứng dụng "Phòng xét xử số hóa".

Theo báo cáo tại Hội nghị, 100% các Kiểm sát viên được phân công thụ lý các vụ án lớn, phức tạp đều ứng dụng thành thạo sơ đồ tư duy logic để báo cáo án và trình chiếu chứng cứ điện tử tại phiên tòa. Phương thức này không những rút ngắn thời gian xét hỏi mà còn nâng cao sức thuyết phục trong luận tội của Kiểm sát viên, triệt tiêu mọi khả năng làm sai lệch chứng cứ hay phát sinh tranh chấp về tài liệu hồ sơ.

Tại hội nghị, các đại biểu đã được trực tiếp theo dõi phần trình diễn mô phỏng phiên tòa xét xử rút kinh nghiệm truyền hình trực tuyến kết nối 30 điểm cầu VKSND các quận, huyện, thị xã trên địa bàn Thủ đô. Toàn bộ bút lục, tài liệu giám định, video ghi âm ghi hình hỏi cung và vật chứng số đều được mã hóa, bảo mật theo đúng Quy chế bảo đảm an toàn thông tin ngành Kiểm sát nhân dân.

Phát biểu chỉ đạo tại Hội nghị, đồng chí Viện trưởng VKSND TP Hà Nội nhấn mạnh: "Mỗi Kiểm sát viên Thủ đô phải luôn khắc ghi lời dạy thiêng liêng của Chủ tịch Hồ Chí Minh: 'Công minh - Chính trực - Khách quan - Thận trọng - Khiêm tốn', không ngừng rèn luyện bản lĩnh chính trị, phẩm chất đạo đức nghề nghiệp và nâng tầm năng lực số để phụng sự công lý, bảo vệ quyền con người, quyền công dân theo Hiến pháp".`,
  category: 'Chỉ đạo điều hành',
  date: '28/10/2026',
  time: '08:45',
  author: 'Phòng Tham mưu - Tổng hợp',
  imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
  views: 4520,
  isHot: true,
  tag: 'TIÊU ĐIỂM TRONG NGÀY',
  source: 'Cổng thông tin điện tử Viện kiểm sát nhân dân tối cao',
  sourceUrl: 'https://vksndtc.gov.vn',
  verifiedAgency: 'Viện kiểm sát nhân dân tối cao',
  officialDocNumber: 'Kế hoạch số 118/KH-VKSTC về Chuyển đổi số ngành Kiểm sát nhân dân'
}

export const subHotNews: NewsItem[] = [
  {
    id: 'hot-2',
    title: 'Kiểm sát viên VKSND TP Hà Nội thể hiện bản lĩnh vững vàng trong phiên tòa xét xử sơ thẩm vụ án kinh tế trọng điểm',
    summary: 'Tại phiên tòa, Kiểm sát viên đã đối đáp sắc bén, phân tích toàn diện chứng cứ thu thập được, bảo vệ quan điểm truy tố đúng người, đúng tội, đúng pháp luật theo tinh thần Nghị quyết Trung ương.',
    content: `Trong suốt quá trình xét xử sơ thẩm công khai tại Tòa án nhân dân thành phố Hà Nội, đại diện Viện Kiểm sát nhân dân TP Hà Nội đã thực hành quyền công tố và kiểm sát xét xử với tinh thần thượng tôn pháp luật và kỷ cương tư pháp cao nhất.

Căn cứ vào kết quả điều tra và diễn biến thẩm vấn công khai tại phiên tòa, Kiểm sát viên đã trình bày bản Luận tội công tâm, phân tích khách quan động cơ, mục đích, hành vi phạm tội cũng như vai trò của từng bị cáo trong vụ án gây thất thoát tài sản đặc biệt lớn. Kiểm sát viên cũng làm rõ các tình tiết giảm nhẹ trách nhiệm hình sự, ghi nhận nỗ lực khắc phục toàn bộ hậu quả kinh tế của các bị cáo.

Quan điểm đối đáp của Viện kiểm sát nhận được sự đồng thuận cao từ Hội đồng xét xử, nhân dân theo dõi phiên tòa và các cơ quan truyền thông báo chí, khẳng định vai trò nòng cốt của ngành Kiểm sát Thủ đô trong đấu tranh phòng chống tham nhũng, lãng phí, tiêu cực.`,
    category: 'Thực hành quyền công tố',
    date: '28/10/2026',
    time: '07:30',
    author: 'Vũ Quốc Hùng - Phòng 3 VKSND TP Hà Nội',
    imageUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80',
    views: 3120,
    isHot: true,
    tag: 'TIN NÓNG',
    source: 'Báo Bảo vệ pháp luật',
    sourceUrl: 'https://baovephapluat.vn',
    verifiedAgency: 'Báo Bảo vệ pháp luật - Cơ quan ngôn luận của VKSND Tối cao',
    officialDocNumber: 'Chỉ thị số 01/CT-VKSTC của Viện trưởng VKSND Tối cao'
  },
  {
    id: 'hot-3',
    title: 'Tăng cường công tác kiểm sát việc tiếp nhận, giải quyết nguồn tin về tội phạm trên địa bàn Thủ đô',
    summary: 'Chủ động phối hợp chặt chẽ với Cơ quan Cảnh sát điều tra Công an TP Hà Nội, đảm bảo không để xảy ra oan sai, không bỏ lọt tội phạm và hành vi vi phạm.',
    content: `Thực hiện Thông tư liên tịch số 01 của Liên ngành tư pháp Trung ương và Chỉ thị công tác năm của Viện trưởng VKSND tối cao, VKSND TP Hà Nội đã phối hợp cùng Công an thành phố tổ chức Hội nghị giao ban liên ngành tăng cường hiệu lực kiểm sát nguồn tin tội phạm.

Hai đơn vị đã thống nhất quy trình số hóa tiếp nhận tố giác tội phạm từ cấp cơ sở, tích hợp dữ liệu cảnh báo sớm trên hệ thống phần mềm quản lý án hình sự. Các đơn vị nghiệp vụ Viện kiểm sát hai cấp thường xuyên bám sát hiện trường, kiểm sát chặt chẽ ngay từ thời điểm đầu tiếp nhận nguồn tin, kịp thời yêu cầu khởi tố hoặc hủy bỏ quyết định không có căn cứ pháp luật.

Đồng thời, đẩy mạnh việc tiếp nhận tin báo tố giác tội phạm qua ứng dụng VNeID và Cổng dịch vụ công trực tuyến, tạo thuận lợi tối đa cho người dân và doanh nghiệp giám sát hoạt động tư pháp.`,
    category: 'Kiểm sát tư pháp',
    date: '27/10/2026',
    time: '16:20',
    author: 'Nguyễn Thị Minh Hà - Văn phòng Viện',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    views: 2680,
    isHot: true,
    tag: 'HOẠT ĐỘNG NGÀNH',
    source: 'Cổng thông tin điện tử VKSND TP Hà Nội',
    sourceUrl: 'https://vkshanoi.gov.vn',
    verifiedAgency: 'Viện kiểm sát nhân dân thành phố Hà Nội',
    officialDocNumber: 'Thông tư liên tịch số 01/2021/TTLT-BCA-BQP-BTC-BNN&PTNT-VKSNDTC'
  }
]

export const timelineNewsList: NewsItem[] = [
  {
    id: 'time-1',
    title: 'VKSND Quận Hoàn Kiếm tổ chức phiên tòa rút kinh nghiệm nội bộ về tội phạm sử dụng công nghệ cao',
    summary: 'Nâng cao kỹ năng phân tích chứng cứ dữ liệu số và kỹ năng tranh luận của Kiểm sát viên trẻ.',
    content: `Nhằm đào tạo, bồi dưỡng kỹ năng thực hành quyền công tố tại phiên tòa trong kỷ nguyên số, VKSND Quận Hoàn Kiếm phối hợp với TAND quận mở phiên tòa rút kinh nghiệm nội bộ. Kiểm sát viên đã sử dụng hệ thống máy chiếu, số hóa hồ sơ để đối đáp và chứng minh hành vi lừa đảo chiếm đoạt tài sản qua mạng viễn thông.

Sau phiên tòa, tập thể Lãnh đạo Viện và toàn thể cán bộ, Kiểm sát viên trong đơn vị đã tiến hành họp rút kinh nghiệm nghiêm túc, thẳng thắn đánh giá ưu điểm và những điểm cần khắc phục trong phong thái tranh tụng.`,
    category: 'Cơ sở',
    date: '28/10/2026',
    time: '11:15',
    author: 'Tổ Thư ký VKS Hoàn Kiếm',
    imageUrl: '/images/vksnd_courtroom_hall.jpg',
    views: 1450,
    tag: '11:15',
    source: 'Cổng thông tin điện tử VKSND TP Hà Nội',
    sourceUrl: 'https://vkshanoi.gov.vn',
    verifiedAgency: 'VKSND Quận Hoàn Kiếm - VKSND TP Hà Nội',
    officialDocNumber: 'Kế hoạch số 45/KH-VKSHK về Công tác tự đào tạo cán bộ'
  },
  {
    id: 'time-2',
    title: 'Ban thanh tra VKSND TP Hà Nội kiểm tra đột xuất kỷ luật công vụ tại các đơn vị trực thuộc',
    summary: 'Thực hiện nghiêm túc Quy định số 132-QĐ/TW của Bộ Chính trị về kiểm soát quyền lực, phòng chống tham nhũng, tiêu cực trong hoạt động tố tụng.',
    content: `Đoàn kiểm tra do Chánh Thanh tra VKSND TP Hà Nội làm trưởng đoàn đã tiến hành kiểm tra đột xuất việc chấp hành kỷ luật công vụ, trật tự nội vụ, thời giờ làm việc và việc ghi chép sổ thụ lý án tại 5 đơn vị VKSND cấp huyện.

Qua kiểm tra, đoàn đánh giá cao tinh thần trách nhiệm, tác phong chính quy, trang phục chuẩn mực của cán bộ, Kiểm sát viên; đồng thời nhắc nhở các đơn vị tiếp tục duy trì văn hóa công sở liêm chính, tận tụy phục vụ nhân dân.`,
    category: 'Xây dựng ngành',
    date: '28/10/2026',
    time: '10:05',
    author: 'Ban Thanh tra VKS',
    imageUrl: '/images/vksnd_hanoi_facade.jpg',
    views: 1890,
    tag: '10:05',
    source: 'Cổng thông tin điện tử Viện kiểm sát nhân dân tối cao',
    sourceUrl: 'https://vksndtc.gov.vn',
    verifiedAgency: 'Ban Thanh tra - VKSND TP Hà Nội',
    officialDocNumber: 'Quy định số 132-QĐ/TW của Bộ Chính trị'
  },
  {
    id: 'time-3',
    title: 'Tập huấn toàn ngành về quy trình bảo vệ bí mật Nhà nước và an toàn thông tin mạng',
    summary: '100% cán bộ, công chức, kiểm sát viên tham dự hội nghị trực tuyến kết nối 30 điểm cầu quận huyện.',
    content: `Hội nghị tập huấn quán triệt các văn bản quy phạm pháp luật mới về bảo vệ bí mật Nhà nước trong quá trình khởi tố, điều tra, truy tố và xét xử. Các chuyên gia an ninh mạng Bộ Công an và Cục 2 VKSND tối cao đã hướng dẫn chi tiết quy trình xử lý văn bản điện tử mật, phòng chống nguy cơ mã độc và rò rỉ dữ liệu tư pháp trên không gian mạng.`,
    category: 'Đào tạo',
    date: '28/10/2026',
    time: '09:20',
    author: 'Văn phòng Viện',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80',
    views: 1220,
    tag: '09:20',
    source: 'Cổng thông tin điện tử Chính phủ',
    sourceUrl: 'https://chinhphu.vn',
    verifiedAgency: 'Cổng Thông tin điện tử Chính phủ (chinhphu.vn)',
    officialDocNumber: 'Luật Bảo vệ bí mật Nhà nước số 29/2018/QH14'
  },
  {
    id: 'time-4',
    title: 'Chi đoàn Thanh niên VKSND TP Hà Nội tổ chức chương trình "Phiên tòa giả định" tại trường THPT',
    summary: 'Tuyên truyền phòng chống bạo lực học đường và nhận diện thủ đoạn dụ dỗ ma túy thế hệ mới cho hơn 1.500 học sinh.',
    content: `Với hình thức sân khấu hóa sinh động, phiên tòa giả định đã tái hiện chân thực một vụ án học sinh bị lôi kéo sử dụng và mua bán thuốc lá điện tử chứa chất ma túy. Bằng việc phân tích hậu quả pháp lý nghiêm khắc và những bi kịch gia đình, chương trình đã trang bị kiến thức pháp luật bổ ích và nâng cao kỹ năng tự bảo vệ cho các em học sinh Thủ đô.`,
    category: 'Đoàn thể',
    date: '28/10/2026',
    time: '08:10',
    author: 'Đoàn Thanh niên VKSND TP',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    views: 980,
    tag: '08:10',
    source: 'Báo Bảo vệ pháp luật',
    sourceUrl: 'https://baovephapluat.vn',
    verifiedAgency: 'Báo Bảo vệ pháp luật & Đoàn Khối các cơ quan TP Hà Nội',
    officialDocNumber: 'Chương trình phối hợp phổ biến giáo dục pháp luật năm 2026'
  }
]

export const courtSchedules: CourtScheduleItem[] = [
  {
    id: 'court-1',
    caseNumber: '142/2026/HSST',
    caseName: 'Vụ án vi phạm quy định về quản lý, sử dụng tài sản Nhà nước gây thất thoát, lãng phí xảy ra tại dự án xây dựng hạ tầng đô thị',
    caseType: 'Hình sự',
    courtDate: '29/10/2026',
    courtTime: '08:00',
    courtRoom: 'Phòng xử số 1 - Tòa án nhân dân TP Hà Nội',
    prosecutor: 'KSV Cao cấp: Nguyễn Quốc Hưng (Phòng 3)',
    judge: 'Thẩm phán - Chủ tọa: Vũ Anh Tuấn',
    status: 'Sắp diễn ra',
    level: 'Sơ thẩm'
  },
  {
    id: 'court-2',
    caseNumber: '89/2026/KDTM-ST',
    caseName: 'Tranh chấp hợp đồng tín dụng và thế chấp quyền sử dụng đất giá trị 320 tỷ đồng giữa Ngân hàng TMCP và Tập đoàn Đầu tư',
    caseType: 'Kinh doanh thương mại',
    courtDate: '29/10/2026',
    courtTime: '13:30',
    courtRoom: 'Phòng xử số 4 - Tòa án nhân dân TP Hà Nội',
    prosecutor: 'KSV Trung cấp: Lê Hoàng Mai (Phòng 10)',
    judge: 'Thẩm phán: Đỗ Văn Thành',
    status: 'Sắp diễn ra',
    level: 'Sơ thẩm'
  },
  {
    id: 'court-3',
    caseNumber: '215/2026/HSPT',
    caseName: 'Vụ án lừa đảo chiếm đoạt tài sản bằng hình thức huy động vốn đầu tư tiền kỹ thuật số xuyên quốc gia (Xét xử phúc thẩm)',
    caseType: 'Hình sự',
    courtDate: '28/10/2026',
    courtTime: '08:30',
    courtRoom: 'Phòng xử số 2 (Phòng số hóa) - TAND TP Hà Nội',
    prosecutor: 'KSV Cao cấp: Trần Thu Trang (Phòng 2)',
    judge: 'Thẩm phán - Chủ tọa: Hoàng Quốc Việt',
    status: 'Đang xử',
    level: 'Phúc thẩm'
  },
  {
    id: 'court-4',
    caseNumber: '56/2026/HC-ST',
    caseName: 'Khiếu kiện Quyết định hành chính về bồi thường, hỗ trợ tái định cư khi Nhà nước thu hồi đất thực hiện dự án giao thông trọng điểm',
    caseType: 'Hành chính',
    courtDate: '30/10/2026',
    courtTime: '09:00',
    courtRoom: 'Phòng xử số 3 - Tòa án nhân dân TP Hà Nội',
    prosecutor: 'KSV Trung cấp: Đinh Công Dũng (Phòng 9)',
    judge: 'Thẩm phán: Nguyễn Lan Anh',
    status: 'Sắp diễn ra',
    level: 'Sơ thẩm'
  }
]

export const noticeDocuments: NoticeItem[] = [
  {
    id: 'not-1',
    code: '128/TB-VKSHN',
    title: 'Thông báo về việc tiếp nhận đơn khiếu nại, tố cáo và lịch tiếp công dân định kỳ tháng 11/2026 của Lãnh đạo Viện',
    date: '28/10/2026',
    department: 'Thanh tra - Khiếu tố',
    type: 'Thông báo',
    downloadUrl: '#'
  },
  {
    id: 'not-2',
    code: '05/HD-VKS-P1',
    title: 'Hướng dẫn nghiệp vụ kiểm sát khám nghiệm hiện trường và thu thập chứng cứ điện tử trong các vụ án công nghệ cao',
    date: '27/10/2026',
    department: 'Phòng 1',
    type: 'Văn bản hướng dẫn',
    downloadUrl: '#'
  },
  {
    id: 'not-3',
    code: '89/CT-VKSTC',
    title: 'Chỉ thị của Viện trưởng VKSND tối cao về tăng cường kỷ luật kỷ cương công vụ và nâng cao hiệu quả tranh tụng tại tòa',
    date: '25/10/2026',
    department: 'VKSND Tối Cao',
    type: 'Chỉ đạo điều hành',
    downloadUrl: '#'
  },
  {
    id: 'not-4',
    code: '42/TB-TCCB',
    title: 'Thông báo kết quả sát hạch nghiệp vụ và danh sách trúng tuyển Kiểm tra chức danh Kiểm sát viên sơ cấp đợt 2/2026',
    date: '24/10/2026',
    department: 'Phòng Tổ chức cán bộ',
    type: 'Tuyển dụng',
    downloadUrl: '#'
  }
]

export const publicServices: PublicServiceItem[] = [
  {
    id: 'ps-1',
    title: 'Nộp Đơn Tố Giác Tội Phạm Trực Tuyến',
    desc: 'Tiếp nhận thông tin tố giác, tin báo tội phạm 24/7 có mã hóa bảo mật danh tính người tố giác.',
    icon: 'ShieldAlert',
    badge: 'Xử lý ưu tiên',
    link: '#to-giac'
  },
  {
    id: 'ps-2',
    title: 'Đặt Lịch Tiếp Công Dân Của Lãnh Đạo Viện',
    desc: 'Đăng ký hẹn lịch tiếp công dân trực tiếp của Viện trưởng và các Phó Viện trưởng định kỳ hàng tháng.',
    icon: 'CalendarClock',
    badge: 'Trực tuyến 100%',
    link: '#dat-lich'
  },
  {
    id: 'ps-3',
    title: 'Tra Cứu Quá Trình Giải Quyết Đơn Thư',
    desc: 'Nhập số CCCD/Mã hồ sơ để kiểm tra tiến độ thụ lý và kết quả giải quyết khiếu nại, tố cáo tư pháp.',
    icon: 'SearchCheck',
    badge: 'Công khai minh bạch',
    link: '#tra-cuu'
  },
  {
    id: 'ps-4',
    title: 'Hướng dẫn thủ tục Tư pháp & Biểu mẫu điện tử',
    desc: 'Tải các mẫu đơn khởi kiện, đơn khiếu nại quyết định tố tụng, hướng dẫn quyền và nghĩa vụ công dân.',
    icon: 'FileText',
    badge: 'Tải miễn phí',
    link: '#huong-dan'
  }
]

export interface CategoryNewsCollection {
  hinhsu: NewsItem[]
  dansu: NewsItem[]
  xaydung: NewsItem[]
  [key: string]: NewsItem[]
}

export const categoryNewsList: CategoryNewsCollection = {
  hinhsu: [
    {
      id: 'hs-1',
      title: 'Khởi tố vụ án thao túng thị trường chứng khoán thu lợi bất chính hàng chục tỷ đồng',
      summary: 'Viện kiểm sát đã phê chuẩn quyết định khởi tố bị can, lệnh tạm giam đối với 4 đối tượng cầm đầu.',
      content: `VKSND TP Hà Nội vừa phê chuẩn Quyết định khởi tố bị can, Lệnh bắt bị can để tạm giam đối với nhóm 4 đối tượng về tội "Thao túng thị trường chứng khoán" theo Điều 211 Bộ luật Hình sự.

Theo kết quả điều tra ban đầu, các đối tượng đã sử dụng hàng chục tài khoản chứng khoán khác nhau, liên tục thực hiện các giao dịch chéo, khớp lệnh giả tạo nhằm tạo cung cầu ảo và đẩy giá cổ phiếu lên cao, sau đó bán tháo để thu lợi bất chính hơn 50 tỷ đồng, gây thiệt hại nghiêm trọng cho các nhà đầu tư chân chính.

Kiểm sát viên thụ lý vụ án đã bám sát quá trình khám xét, niêm phong tài liệu điện tử và thiết bị máy chủ, đảm bảo việc thu thập chứng cứ số tuân thủ nghiêm ngặt quy định của Bộ luật Tố tụng hình sự.`,
      category: 'Án Hình sự',
      date: '28/10/2026',
      author: 'Nguyễn Văn Hải - Phòng 3',
      imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80',
      views: 2950,
      source: 'Cổng thông tin điện tử Viện kiểm sát nhân dân tối cao',
      sourceUrl: 'https://vksndtc.gov.vn',
      verifiedAgency: 'Phòng 3 - VKSND TP Hà Nội',
      officialDocNumber: 'Quyết định phê chuẩn số 412/QĐ-VKSHN-P3'
    },
    {
      id: 'hs-2',
      title: 'Phối hợp triệt phá đường dây mua bán vận chuyển trái phép chất ma túy liên tỉnh',
      summary: 'Kiểm sát viên trực tiếp tham gia khám nghiệm hiện trường và giám sát kiểm đếm tang vật ma túy số lượng đặc biệt lớn.',
      content: `Thực hiện kế hoạch cao điểm đấu tranh phòng chống tội phạm ma túy, VKSND TP Hà Nội đã phối hợp với Cục Cảnh sát điều tra tội phạm về ma túy (C04 Bộ Công an) và Công an thành phố triệt phá thành công đường dây vận chuyển trái phép chất ma túy từ biên giới Tây Bắc về tiêu thụ tại địa bàn Thủ đô.

Tại thời điểm bắt quả tang, lực lượng chức năng đã thu giữ 20 bánh heroin và 15kg ma túy tổng hợp dạng đá. Kiểm sát viên được phân công đã trực tiếp có mặt tại hiện trường, giám sát chặt chẽ quy trình niêm phong, lập biên bản và lấy lời khai ban đầu của các đối tượng, bảo đảm tính có căn cứ và hợp pháp của chứng cứ.`,
      category: 'Án Hình sự',
      date: '27/10/2026',
      author: 'Trần Tuấn Kiệt - Phòng 1',
      imageUrl: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80',
      views: 1820,
      source: 'Báo Bảo vệ pháp luật',
      sourceUrl: 'https://baovephapluat.vn',
      verifiedAgency: 'Báo Bảo vệ pháp luật & C04 Bộ Công an',
      officialDocNumber: 'Chuyên án ma túy liên tỉnh 1026-HN'
    },
    {
      id: 'hs-3',
      title: 'Nâng cao chất lượng hỏi cung có ghi âm, ghi hình có âm thanh tại các cơ quan điều tra',
      summary: 'Thực hiện đúng Thông tư liên tịch số 03 nhằm bảo đảm minh bạch trong hoạt động tố tụng và chống bức cung, nhục hình.',
      content: `VKSND thành phố Hà Nội vừa ban hành Thông báo rút kinh nghiệm về công tác kiểm sát việc ghi âm, ghi hình có âm thanh trong quá trình hỏi cung bị can theo quy định của Bộ luật Tố tụng hình sự năm 2015 và Thông tư liên tịch số 03.

Văn bản nêu rõ, 100% các vụ án do Cơ quan điều tra thụ lý phải thực hiện nghiêm ngặt quy định ghi âm hoặc ghi hình có âm thanh; Kiểm sát viên trực tiếp tham gia hỏi cung hoặc kiểm sát việc hỏi cung phải kiểm tra kỹ thuật thiết bị trước khi tiến hành, bảo đảm dữ liệu ghi hình được lưu trữ nguyên vẹn vào hồ sơ vụ án để phục vụ công tác tranh tụng công khai tại phiên tòa.`,
      category: 'Án Hình sự',
      date: '25/10/2026',
      author: 'Đặng Mai Phương - Ban Pháp chế',
      imageUrl: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=600&q=80',
      views: 1450,
      source: 'Cổng thông tin điện tử Viện kiểm sát nhân dân tối cao',
      sourceUrl: 'https://vksndtc.gov.vn',
      verifiedAgency: 'Văn phòng Ban Cán sự Đảng VKSND Tối cao',
      officialDocNumber: 'Thông tư liên tịch số 03/2018/TTLT-BCA-VKSNDTC-TANDTC-BQP'
    }
  ],
  dansu: [
    {
      id: 'ds-1',
      title: 'Kiểm sát việc giải quyết vụ án tranh chấp di sản thừa kế phức tạp kéo dài 10 năm',
      summary: 'Kháng nghị phúc thẩm của Viện kiểm sát được Tòa án chấp nhận toàn bộ, đảm bảo quyền lợi đương sự theo đúng quy định pháp luật.',
      content: `VKSND thành phố Hà Nội vừa phát biểu quan điểm và bảo vệ thành công bản Kháng nghị phúc thẩm đối với bản án dân sự sơ thẩm về tranh chấp di sản thừa kế nhà đất có giá trị lớn tại quận Ba Đình kéo dài qua nhiều cấp xét xử.

Qua công tác kiểm sát bản án, Kiểm sát viên đã phát hiện Tòa án cấp sơ thẩm có vi phạm nghiêm trọng trong việc xác định diện người thừa kế và áp dụng sai thời hiệu khởi kiện. Tại phiên tòa phúc thẩm, Hội đồng xét xử đã chấp nhận toàn bộ quan điểm của Viện kiểm sát, sửa bản án sơ thẩm, bảo đảm quyền và lợi ích hợp pháp của các đương sự.`,
      category: 'Dân sự - Hành chính',
      date: '28/10/2026',
      author: 'Lê Ngọc Lan - Phòng 9',
      imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
      views: 1680,
      source: 'Cổng thông tin điện tử VKSND TP Hà Nội',
      sourceUrl: 'https://vkshanoi.gov.vn',
      verifiedAgency: 'Phòng 9 - VKSND TP Hà Nội',
      officialDocNumber: 'Kháng nghị số 22/KNPT-VKSHN-P9'
    },
    {
      id: 'ds-2',
      title: 'Tăng cường bảo vệ quyền lợi hợp pháp của người lao động trong các tranh chấp bảo hiểm xã hội',
      summary: 'Kiểm sát viên phát biểu quan điểm sâu sắc tại phiên họp hòa giải, thúc đẩy doanh nghiệp chi trả nợ bảo hiểm cho hàng trăm công nhân.',
      content: `Triển khai tinh thần Nghị quyết số 205/2025/QH15 của Quốc hội về việc Viện kiểm sát khởi kiện và tham gia tố tụng bảo vệ lợi ích công cộng và nhóm yếu thế, VKSND TP Hà Nội đã chủ động phối hợp với Liên đoàn Lao động thành phố rà soát các doanh nghiệp trốn đóng BHXH kéo dài.

Nhờ sự vào cuộc quyết liệt và đối thoại trách nhiệm của Kiểm sát viên, đơn vị nợ đọng đã tự nguyện chuyển nộp hơn 12 tỷ đồng tiền nợ BHXH, bảo đảm quyền lợi thai sản, ốm đau và chế độ hưu trí cho hơn 300 lao động.`,
      category: 'Dân sự - Hành chính',
      date: '26/10/2026',
      author: 'Hoàng Anh Quân - Phòng 10',
      imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
      views: 1190,
      source: 'Báo Bảo vệ pháp luật',
      sourceUrl: 'https://baovephapluat.vn',
      verifiedAgency: 'Báo Bảo vệ pháp luật & BHXH Thành phố Hà Nội',
      officialDocNumber: 'Nghị quyết số 205/2025/QH15 của Quốc hội'
    },
    {
      id: 'ds-3',
      title: 'Kiểm sát thi hành án dân sự thu hồi hơn 85 tỷ đồng trong các vụ án kinh tế, tham nhũng',
      summary: 'Phối hợp chặt chẽ với Cục Thi hành án dân sự TP Hà Nội xác minh tài sản, cưỡng chế kê biên đúng pháp luật.',
      content: `VKSND thành phố Hà Nội vừa tiến hành kiểm sát trực tiếp công tác thi hành án dân sự tại Cục Thi hành án dân sự thành phố và các Chi cục trực thuộc.

Qua kiểm sát, Viện kiểm sát đã kịp thời phát hiện và ban hành nhiều kiến nghị khắc phục vi phạm trong việc phân loại điều kiện thi hành án, thẩm định giá và bán đấu giá tài sản. Đồng thời, phối hợp cưỡng chế thành công, thu hồi nộp ngân sách Nhà nước hơn 85 tỷ đồng tiền thi hành án đối với các vụ việc tồn đọng phức tạp, bảo vệ kỷ cương pháp luật.`,
      category: 'Dân sự - Hành chính',
      date: '25/10/2026',
      author: 'Phạm Hồng Thái - Phòng 11',
      imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
      views: 1530,
      source: 'Cổng thông tin điện tử Viện kiểm sát nhân dân tối cao',
      sourceUrl: 'https://vksndtc.gov.vn',
      verifiedAgency: 'Phòng 11 - VKSND TP Hà Nội',
      officialDocNumber: 'Kiến nghị số 18/KN-VKSHN-P11'
    }
  ],
  xaydung: [
    {
      id: 'xd-1',
      title: 'Tổ chức lễ công bố và trao quyết định điều động, bổ nhiệm chức danh Kiểm sát viên năm 2026',
      summary: 'Chúc mừng 32 đồng chí xuất sắc vượt qua kỳ thi sát hạch nghiệp vụ cấp quốc gia được bổ nhiệm chức danh Kiểm sát viên.',
      content: `Sáng ngày 27/10/2026, VKSND thành phố Hà Nội long trọng tổ chức Lễ công bố và trao Quyết định của Viện trưởng VKSND tối cao về việc điều động và bổ nhiệm chức danh Kiểm sát viên cao cấp, Kiểm sát viên trung cấp và sơ cấp cho 32 đồng chí thuộc hai cấp Kiểm sát Thủ đô.

Đồng chí Viện trưởng phát biểu giao nhiệm vụ: "Được bổ nhiệm chức danh Kiểm sát viên là vinh dự to lớn nhưng cũng gắn liền với trọng trách nặng nề trước Đảng, Nhà nước và Nhân dân. Mỗi đồng chí phải không ngừng rèn đức, luyện tài, giữ vững tinh thần công minh, dũng cảm đấu tranh với cái sai, cái xấu, bảo vệ lẽ phải và thượng tôn pháp luật".`,
      category: 'Xây dựng ngành',
      date: '27/10/2026',
      author: 'Phòng Tổ chức cán bộ',
      imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      views: 3410,
      source: 'Cổng thông tin điện tử Viện kiểm sát nhân dân tối cao',
      sourceUrl: 'https://vksndtc.gov.vn',
      verifiedAgency: 'Vụ Tổ chức cán bộ - VKSND Tối cao',
      officialDocNumber: 'Quyết định số 389/QĐ-VKSTC-V15'
    },
    {
      id: 'xd-2',
      title: 'Hội nghị điển hình tiên tiến và giao lưu thể thao chào mừng ngày truyền thống ngành Kiểm sát',
      summary: 'Tạo không khí thi đua sôi nổi, rèn luyện thể chất và thắt chặt tình đoàn kết giữa các đơn vị hai cấp ngành Kiểm sát Hà Nội.',
      content: `Nhân dịp kỷ niệm ngày truyền thống ngành Kiểm sát nhân dân, Công đoàn và Đoàn Thanh niên VKSND TP Hà Nội đã phối hợp tổ chức Hội nghị biểu dương gương điển hình tiên tiến trong phong trào thi đua "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh" kết hợp Hội thao truyền thống.

Hội thao quy tụ hơn 200 vận động viên là cán bộ, công chức, người lao động đến từ 30 đơn vị VKSND quận, huyện, thị xã tranh tài ở các môn bóng đá, cầu lông, bóng bàn và quần vợt, mang lại bầu không khí rèn luyện thân thể và đoàn kết gắn bó sâu sắc.`,
      category: 'Xây dựng ngành',
      date: '25/10/2026',
      author: 'Công đoàn VKS TP Hà Nội',
      imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
      views: 1780,
      source: 'Cổng thông tin điện tử VKSND TP Hà Nội',
      sourceUrl: 'https://vkshanoi.gov.vn',
      verifiedAgency: 'Công đoàn cơ quan VKSND TP Hà Nội',
      officialDocNumber: 'Kế hoạch thi đua số 12/KH-CĐ-VKSHN'
    },
    {
      id: 'xd-3',
      title: 'Ứng dụng trợ lý ảo AI hỗ trợ Kiểm sát viên tra cứu án lệ và quy định tố tụng',
      summary: 'Bước đột phá trong triển khai Đề án chuyển đổi số toàn diện ngành Kiểm sát nhân dân đến năm 2030.',
      content: `Thực hiện chỉ đạo của Viện trưởng VKSND tối cao về ứng dụng trí tuệ nhân tạo (AI) trong hoạt động tư pháp, VKSND TP Hà Nội là đơn vị đầu tiên thí điểm triển khai hệ thống Trợ lý ảo tư pháp tích hợp toàn bộ kho án lệ, văn bản giải đáp nghiệp vụ và Bộ luật Tố tụng hình sự.

Hệ thống cho phép Kiểm sát viên tra cứu nhanh các tình tiết tương đồng, gợi ý các điều luật liên quan và cảnh báo các mốc thời hạn tố tụng, giúp nâng cao chất lượng lập hồ sơ và đối đáp sắc bén tại phiên tòa.`,
      category: 'Xây dựng ngành',
      date: '24/10/2026',
      author: 'Ban Chỉ đạo Chuyển đổi số VKSND TP',
      imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80',
      views: 2890,
      source: 'Cổng thông tin điện tử VKSND TP Hà Nội',
      sourceUrl: 'https://vkshanoi.gov.vn',
      verifiedAgency: 'Ban Chỉ đạo CNTT & Chuyển đổi số VKSND TP Hà Nội',
      officialDocNumber: 'Kế hoạch số 86/KH-BCĐ-VKSHN'
    }
  ]
}

// Articles mapped specifically for ticker breaking news items
export const tickerArticles: NewsItem[] = [
  {
    id: 'ticker-1',
    title: 'VKSND TP Hà Nội: Đẩy mạnh ứng dụng công nghệ thông tin và số hóa 100% hồ sơ vụ án hình sự trọng điểm năm 2026',
    summary: 'Triển khai đồng bộ hạ tầng số hóa hồ sơ vụ án, phục vụ hiệu quả công tác báo cáo án bằng sơ đồ tư duy và trình chiếu chứng cứ tại phiên tòa.',
    content: `Thực hiện Chỉ thị số 03/CT-VKSTC của Viện trưởng VKSND tối cao về tăng cường ứng dụng công nghệ thông tin và chuyển đổi số ngành Kiểm sát nhân dân, VKSND thành phố Hà Nội đã hoàn thành chỉ tiêu 100% hồ sơ các vụ án hình sự trọng điểm, phức tạp được số hóa và lưu trữ trên hệ thống máy chủ nội bộ bảo mật cao.

Việc số hóa hồ sơ giúp Kiểm sát viên thuận tiện trong việc tra cứu bút lục, trích xuất tài liệu phục vụ xét hỏi, tranh luận tại phiên tòa một cách nhanh chóng, chuẩn xác. Đồng thời loại bỏ hoàn toàn nguy cơ thất lạc tài liệu, nâng cao tính chuyên nghiệp và hiện đại hóa nền tư pháp Thủ đô.`,
    category: 'Chỉ đạo điều hành',
    date: '28/10/2026',
    time: '08:00',
    author: 'Tổ CNTT - Văn phòng Viện',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    views: 3890,
    source: 'Cổng thông tin điện tử Viện kiểm sát nhân dân tối cao',
    sourceUrl: 'https://vksndtc.gov.vn',
    verifiedAgency: 'VKSND TP Hà Nội & Cục 2 VKSND Tối cao',
    officialDocNumber: 'Chỉ thị số 03/CT-VKSTC của Viện trưởng VKSND Tối cao'
  },
  {
    id: 'ticker-2',
    title: 'Thông báo mở rộng tiếp nhận tin báo, tố giác tội phạm qua ứng dụng VNeID và Cổng dịch vụ công trực tuyến',
    summary: 'Tạo kênh tương tác trực tuyến an toàn, bảo mật tuyệt đối thông tin cá nhân của người cung cấp tin báo tội phạm.',
    content: `Nhằm phát huy sức mạnh của toàn dân trong đấu tranh phòng chống tội phạm, VKSND thành phố Hà Nội chính thức đưa vào vận hành phân hệ tiếp nhận tin báo, tố giác tội phạm kết nối đồng bộ với Cơ sở dữ liệu quốc gia về dân cư thông qua tài khoản định danh điện tử VNeID mức độ 2.
Người dân Thủ đô và cả nước có thể trực tiếp gửi video, hình ảnh, tài liệu chứng cứ vi phạm pháp luật tới Cơ quan kiểm sát 24/7. Toàn bộ thông tin cá nhân của người tố giác đều được mã hóa theo tiêu chuẩn an ninh quốc gia, bảo vệ an toàn tuyệt đối tính mạng, sức khỏe và danh dự theo quy định của Luật Tố cáo.`,
    category: 'Dịch vụ công',
    date: '28/10/2026',
    time: '07:45',
    author: 'Phòng Tiếp công dân & Xử lý đơn',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    views: 4120,
    source: 'Cổng thông tin điện tử VKSND TP Hà Nội',
    sourceUrl: 'https://vkshanoi.gov.vn',
    verifiedAgency: 'VKSND TP Hà Nội & Bộ Công an',
    officialDocNumber: 'Quy chế phối hợp số 04/QCPH-VKSHN-CATP'
  },
  {
    id: 'ticker-3',
    title: 'Hội nghị giao ban công tác kiểm sát: Nâng cao chất lượng tranh tụng của Kiểm sát viên tại phiên tòa',
    summary: 'Quán triệt nguyên tắc tranh tụng công khai, bình đẳng, không áp đặt ý chí chủ quan, tôn trọng sự thật khách quan.',
    content: `Tại Hội nghị giao ban trực tuyến ngành Kiểm sát Thủ đô, đồng chí Viện trưởng yêu cầu mỗi Kiểm sát viên khi thực hành quyền công tố phải nắm chắc từng chứng cứ buộc tội và gỡ tội, chuẩn bị kỹ đề cương đối đáp, chủ động tranh luận đến cùng với người bào chữa về từng tình tiết của vụ án.

Kiểm sát viên phải thực hiện đúng phương châm "Trọng chứng hơn trọng cung", mọi kết luận luận tội phải dựa trên chứng cứ hợp pháp đã được thẩm tra công khai tại tòa, kiên quyết không để xảy ra án oan hoặc bỏ lọt tội phạm.`,
    category: 'Thực hành quyền công tố',
    date: '27/10/2026',
    time: '14:30',
    author: 'Phòng 7 - VKSND TP Hà Nội',
    imageUrl: '/images/vksnd_courtroom_hall.jpg',
    views: 2750,
    source: 'Báo Bảo vệ pháp luật',
    sourceUrl: 'https://baovephapluat.vn',
    verifiedAgency: 'VKSND TP Hà Nội',
    officialDocNumber: 'Thông báo kết luận số 88/TB-VKSHN'
  },
  {
    id: 'ticker-4',
    title: 'Triển khai thực hiện Nghị quyết số 205/2025/QH15 của Quốc hội về thí điểm khởi kiện bảo vệ lợi ích công cộng',
    summary: 'Nhiệm vụ mới mở rộng thẩm quyền của Viện kiểm sát trong bảo vệ môi trường, tài sản công và nhóm người yếu thế.',
    content: `Quốc hội khóa XV đã chính thức thông qua Nghị quyết số 205/2025/QH15 cho phép Viện kiểm sát nhân dân thực hiện thí điểm quyền khởi kiện các vụ án dân sự, hành chính để bảo vệ lợi ích của Nhà nước, quyền và lợi ích hợp pháp của nhóm yếu thế (trẻ em, người khuyết tật, người cao tuổi neo đơn) và bảo vệ môi trường sinh thái.

VKSND TP Hà Nội là đơn vị trọng điểm được giao triển khai mô hình này. Hiện các phòng nghiệp vụ đang phối hợp cùng các sở, ban, ngành rà soát các vụ việc xả thải gây ô nhiễm môi trường và vi phạm trật tự xây dựng công cộng để kịp thời thụ lý theo thẩm quyền mới.`,
    category: 'Chỉ đạo điều hành',
    date: '27/10/2026',
    time: '10:00',
    author: 'Phòng 9 & Phòng 10',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    views: 3340,
    source: 'Cổng thông tin điện tử Chính phủ',
    sourceUrl: 'https://chinhphu.vn',
    verifiedAgency: 'Ủy ban Thường vụ Quốc hội & VKSND Tối cao',
    officialDocNumber: 'Nghị quyết số 205/2025/QH15 của Quốc hội'
  }
]

// Alias noticeDocuments as noticesList for backward and cross-component compatibility
export const noticesList = noticeDocuments

export const mediaVideos = [
  {
    id: 'vid-1',
    title: 'Phim tài liệu: "VKSND TP Hà Nội - Bản lĩnh, Kỷ cương và Khát vọng phụng sự Công lý"',
    duration: '18:45',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
    date: '25/10/2026'
  },
  {
    id: 'vid-2',
    title: 'Tọa đàm truyền hình: Nhận diện thủ đoạn lừa đảo "Bẫy tài chính công nghệ cao"',
    duration: '24:10',
    thumbnail: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80',
    date: '22/10/2026'
  },
  {
    id: 'vid-3',
    title: 'Phóng sự: Kiểm sát viên số hóa tài liệu chứng cứ - Bước tiến trong tranh tụng',
    duration: '12:30',
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
    date: '20/10/2026'
  }
]

export const keyStatistics = [
  { number: '100%', label: 'Án truy tố đúng thời hạn quy định', sub: 'Không có án quá hạn luật định' },
  { number: '0', label: 'Vụ án xảy ra oan sai, bỏ lọt tội phạm', sub: 'Đảm bảo công bằng xã hội' },
  { number: '18.450+', label: 'Lượt tiếp công dân & giải quyết đơn thư', sub: 'Tỷ lệ hài lòng đạt trên 99%' },
  { number: '100%', label: 'Vụ án trọng điểm được số hóa dữ liệu', sub: 'Trình chiếu chứng cứ số tại phiên tòa' }
]

export const partnerLinks = [
  { name: 'Cổng TTĐT Chính Phủ', url: 'https://chinhphu.vn', desc: 'Cơ quan hành chính cao nhất' },
  { name: 'VKSND Tối Cao', url: 'https://vksndtc.gov.vn', desc: 'Viện Kiểm sát Nhân dân Tối cao' },
  { name: 'Tòa Án Nhân Dân Tối Cao', url: 'https://toaan.gov.vn', desc: 'Hệ thống Tòa án Nhân dân' },
  { name: 'Bộ Tư Pháp', url: 'https://moj.gov.vn', desc: 'Bộ Tư pháp Việt Nam' },
  { name: 'Công An TP Hà Nội', url: 'https://congan.hanoi.gov.vn', desc: 'Công an Thành phố Hà Nội' },
  { name: 'Báo Bảo Vệ Pháp Luật', url: 'https://baovephapluat.vn', desc: 'Cơ quan ngôn luận ngành VKS' }
]

// Helper function to get all articles in a flat list
export const getAllNews = (): NewsItem[] => {
  return [
    hotSpotlightNews,
    ...subHotNews,
    ...timelineNewsList,
    ...(categoryNewsList.hinhsu || []),
    ...(categoryNewsList.dansu || []),
    ...(categoryNewsList.xaydung || []),
    ...tickerArticles
  ]
}

// Helper function to find an article by ID
export const getArticleById = (id: string): NewsItem | undefined => {
  const all = getAllNews()
  const found = all.find(item => item.id === id)
  if (found) return found

  // Also check if it's a notice document id
  const notice = noticeDocuments.find(n => n.id === id)
  if (notice) {
    return {
      id: notice.id,
      title: notice.title,
      summary: `${notice.code} - Do ${notice.department} ban hành ngày ${notice.date}.`,
      content: `Văn bản số ${notice.code} của ${notice.department} thuộc VKSND thành phố Hà Nội được ban hành chính thức ngày ${notice.date}.\n\nYêu cầu các đơn vị trực thuộc, các Viện kiểm sát quận, huyện, thị xã và cán bộ công chức liên quan nghiên cứu, quán triệt và triển khai thực hiện nghiêm túc theo đúng thẩm quyền và thời hạn quy định.\n\nMọi phản hồi hoặc vướng mắc trong quá trình thực hiện đề nghị liên hệ trực tiếp với Văn phòng VKSND TP Hà Nội để được hướng dẫn giải đáp kịp thời.`,
      category: notice.type,
      date: notice.date,
      time: '08:00',
      author: notice.department,
      imageUrl: '/images/vksnd_hanoi_facade.jpg',
      views: 1250,
      source: 'Cổng thông tin điện tử VKSND TP Hà Nội',
      sourceUrl: 'https://vkshanoi.gov.vn',
      verifiedAgency: 'Văn phòng VKSND TP Hà Nội',
      officialDocNumber: notice.code
    }
  }

  return undefined
}

// Helper function to find related articles in same or other categories
export const getRelatedNews = (category: string, currentId: string, limit = 4): NewsItem[] => {
  const all = getAllNews()
  return all
    .filter(item => item.id !== currentId)
    .sort((a, b) => (a.category === category ? -1 : 1))
    .slice(0, limit)
}

