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
  'TAND TP Hà Nội: Đẩy mạnh ứng dụng công nghệ thông tin và số hóa 100% hồ sơ vụ án trọng điểm năm 2026',
  'Thông báo mở rộng tiếp nhận đơn khởi kiện và tài liệu tố tụng qua ứng dụng VNeID và Cổng dịch vụ công trực tuyến',
  'Hội nghị triển khai công tác xét xử: Nâng cao chất lượng tranh tụng và bản lĩnh Thẩm phán tại phiên tòa',
  'TAND TP Hà Nội phối hợp tổ chức các phiên tòa số hóa rút kinh nghiệm trực tuyến toàn thành phố'
]

export const hotSpotlightNews: NewsItem = {
  id: 'hot-1',
  title: 'TAND TP Hà Nội triển khai mô hình "Phòng xét xử số hóa" và trình chiếu tài liệu, chứng cứ điện tử tại phiên tòa',
  summary: 'Sáng nay, tại trụ sở TAND TP Hà Nội đã tổ chức Hội nghị chuyên đề thực hiện đột phá về chuyển đổi số trong công tác xét xử vụ án trọng điểm, đảm bảo tính khách quan, minh bạch và tranh tụng công khai.',
  content: `Nhằm thực hiện thắng lợi các Nghị quyết của Ban Cán sự Đảng TAND tối cao và Thành ủy Hà Nội về cải cách tư pháp và chuyển đổi số giai đoạn 2025-2030, Ban Lãnh đạo TAND TP Hà Nội đã chủ trì Hội nghị chuyên đề về đổi mới phương thức xét xử, ứng dụng "Phòng xét xử số hóa".

Theo báo cáo tại Hội nghị, 100% các Thẩm phán được phân công thụ lý các vụ án lớn, phức tạp đều ứng dụng thành thạo sơ đồ tư duy logic để tóm tắt vụ án và trình chiếu chứng cứ điện tử tại phiên tòa. Phương thức này không những rút ngắn thời gian xét hỏi mà còn nâng cao sức thuyết phục trong phán quyết của Hội đồng xét xử, triệt tiêu mọi khả năng làm sai lệch chứng cứ hay phát sinh tranh chấp về tài liệu hồ sơ.

Tại hội nghị, các đại biểu đã được trực tiếp theo dõi phần trình diễn mô phỏng phiên tòa xét xử rút kinh nghiệm truyền hình trực tuyến kết nối 30 điểm cầu TAND các quận, huyện, thị xã trên địa bàn Thủ đô. Toàn bộ bút lục, tài liệu giám định, video ghi âm ghi hình và vật chứng số đều được mã hóa, bảo mật theo đúng Quy chế bảo đảm an toàn thông tin ngành Tòa án nhân dân.

Phát biểu chỉ đạo tại Hội nghị, đồng chí Chánh án TAND TP Hà Nội nhấn mạnh: "Mỗi Thẩm phán, Thư ký Tòa án Thủ đô phải luôn khắc ghi lời dạy thiêng liêng của Chủ tịch Hồ Chí Minh: 'Phụng công - Thủ pháp - Chí công - Vô tư' và phương châm 'Gần dân, hiểu dân, giúp dân, học dân', không ngừng rèn luyện bản lĩnh chính trị, phẩm chất đạo đức nghề nghiệp và nâng tầm năng lực số để phụng sự công lý, bảo vệ quyền con người, quyền công dân theo Hiến pháp".`,
  category: 'Chỉ đạo điều hành',
  date: '28/10/2026',
  time: '08:45',
  author: 'Phòng Tham mưu - Tổng hợp',
  imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
  views: 4520,
  isHot: true,
  tag: 'TIÊU ĐIỂM TRONG NGÀY',
  source: 'Cổng thông tin điện tử Tòa án nhân dân tối cao',
  sourceUrl: 'https://toaan.gov.vn',
  verifiedAgency: 'Tòa án nhân dân tối cao',
  officialDocNumber: 'Kế hoạch số 118/KH-TANDTC về Chuyển đổi số ngành Tòa án nhân dân'
}

export const subHotNews: NewsItem[] = [
  {
    id: 'hot-2',
    title: 'Hội đồng xét xử TAND TP Hà Nội thể hiện bản lĩnh vững vàng trong phiên tòa xét xử sơ thẩm vụ án kinh tế trọng điểm',
    summary: 'Tại phiên tòa, Hội đồng xét xử đã điều hành tranh tụng dân chủ, phân tích toàn diện chứng cứ thu thập được, tuyên bản án đúng người, đúng tội, đúng pháp luật theo tinh thần cải cách tư pháp.',
    content: `Trong suốt quá trình xét xử sơ thẩm công khai tại Tòa án nhân dân thành phố Hà Nội, Hội đồng xét xử đã điều hành phiên tòa với tinh thần thượng tôn pháp luật và kỷ cương tư pháp cao nhất.

Căn cứ vào kết quả thẩm vấn công khai tại phiên tòa và tài liệu hồ sơ vụ án, Thẩm phán - Chủ tọa phiên tòa đã phân tích khách quan động cơ, mục đích, hành vi phạm tội cũng như vai trò của từng bị cáo trong vụ án gây thất thoát tài sản đặc biệt lớn. Bản án cũng xem xét toàn diện các tình tiết giảm nhẹ trách nhiệm hình sự, ghi nhận nỗ lực khắc phục toàn bộ hậu quả kinh tế của các bị cáo.

Bản án của Tòa án nhận được sự đồng thuận cao từ nhân dân theo dõi phiên tòa và các cơ quan truyền thông báo chí, khẳng định vai trò nòng cốt của Tòa án Thủ đô trong thực hiện quyền tư pháp, đấu tranh phòng chống tham nhũng, lãng phí, tiêu cực.`,
    category: 'Hoạt động xét xử',
    date: '28/10/2026',
    time: '07:30',
    author: 'Phạm Quốc Hùng - TAND TP Hà Nội',
    imageUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80',
    views: 3120,
    isHot: true,
    tag: 'TIN NÓNG',
    source: 'Báo Công lý',
    sourceUrl: 'https://congly.vn',
    verifiedAgency: 'Báo Công lý - Cơ quan ngôn luận của TAND Tối cao',
    officialDocNumber: 'Chỉ thị số 01/CT-CA của Chánh án TAND Tối cao'
  },
  {
    id: 'hot-3',
    title: 'Tăng cường công tác thụ lý, giải quyết và xét xử các loại vụ án trên địa bàn Thủ đô',
    summary: 'Chủ động phối hợp chặt chẽ với các cơ quan tiến hành tố tụng, đảm bảo không để xảy ra oan sai, không bỏ lọt tội phạm và đảm bảo tiến độ luật định.',
    content: `Thực hiện Chỉ thị công tác năm của Chánh án TAND tối cao, TAND TP Hà Nội đã tổ chức Hội nghị giao ban nâng cao chất lượng xét xử và đẩy mạnh chuyển đổi số trong thụ lý hồ sơ vụ án.

Các Tòa chuyên trách và TAND cấp huyện đã thống nhất quy trình số hóa tiếp nhận đơn khởi kiện từ cấp cơ sở, tích hợp dữ liệu thụ lý trên hệ thống phần mềm quản lý án điện tử. Thẩm phán và Thư ký thường xuyên bám sát tiến độ giải quyết vụ án, kịp thời đưa ra xét xử đúng thời hạn quy định của pháp luật.

Đồng thời, đẩy mạnh việc nộp đơn khởi kiện, gửi tài liệu chứng cứ trực tuyến qua Cổng dịch vụ công quốc gia và ứng dụng VNeID, tạo thuận lợi tối đa cho người dân và doanh nghiệp tiếp cận công lý.`,
    category: 'Cải cách tư pháp',
    date: '27/10/2026',
    time: '16:20',
    author: 'Nguyễn Thị Minh Hà - Văn phòng Tòa',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    views: 2680,
    isHot: true,
    tag: 'HOẠT ĐỘNG NGÀNH',
    source: 'Cổng thông tin điện tử TAND TP Hà Nội',
    sourceUrl: 'https://hanoi.toaan.gov.vn',
    verifiedAgency: 'Tòa án nhân dân thành phố Hà Nội',
    officialDocNumber: 'Kế hoạch số 08/KH-TANDHN về nâng cao chất lượng xét xử'
  }
]

export const timelineNewsList: NewsItem[] = [
  {
    id: 'time-1',
    title: 'TAND Quận Hoàn Kiếm tổ chức phiên tòa rút kinh nghiệm trực tuyến về tội phạm sử dụng công nghệ cao',
    summary: 'Nâng cao kỹ năng điều hành tranh tụng, trình chiếu chứng cứ dữ liệu số của Thẩm phán trẻ.',
    content: `Nhằm đào tạo, bồi dưỡng kỹ năng xét xử tại phiên tòa trong kỷ nguyên số, TAND Quận Hoàn Kiếm đã mở phiên tòa rút kinh nghiệm trực tuyến. Hội đồng xét xử đã sử dụng hệ thống máy chiếu, số hóa hồ sơ để thẩm vấn và làm rõ hành vi lừa đảo chiếm đoạt tài sản qua mạng viễn thông.
Sau phiên tòa, tập thể Lãnh đạo Tòa án và toàn thể Thẩm phán, Thư ký trong đơn vị đã tiến hành họp rút kinh nghiệm nghiêm túc, thẳng thắn đánh giá ưu điểm và những điểm cần khắc phục trong điều hành tranh tụng.`,
    category: 'Cơ sở',
    date: '28/10/2026',
    time: '11:15',
    author: 'Tổ Thư ký TAND Hoàn Kiếm',
    imageUrl: '/images/tand_courtroom_hall.jpg',
    views: 1450,
    tag: '11:15',
    source: 'Cổng thông tin điện tử TAND TP Hà Nội',
    sourceUrl: 'https://hanoi.toaan.gov.vn',
    verifiedAgency: 'TAND Quận Hoàn Kiếm - TAND TP Hà Nội',
    officialDocNumber: 'Kế hoạch số 45/KH-TAHK về Công tác tự đào tạo cán bộ'
  },
  {
    id: 'time-2',
    title: 'Ban thanh tra TAND TP Hà Nội kiểm tra đột xuất kỷ luật công vụ tại các đơn vị trực thuộc',
    summary: 'Thực hiện nghiêm túc Quy định số 132-QĐ/TW của Bộ Chính trị về kiểm soát quyền lực, phòng chống tham nhũng, tiêu cực trong hoạt động tố tụng.',
    content: `Đoàn kiểm tra do Chánh Thanh tra TAND TP Hà Nội làm trưởng đoàn đã tiến hành kiểm tra đột xuất việc chấp hành kỷ luật công vụ, trật tự nội vụ, thời giờ làm việc và việc ghi chép sổ thụ lý án tại 5 đơn vị TAND cấp huyện.

Qua kiểm tra, đoàn đánh giá cao tinh thần trách nhiệm, tác phong chính quy, trang phục chuẩn mực của Thẩm phán, Thư ký; đồng thời nhắc nhở các đơn vị tiếp tục duy trì văn hóa công sở liêm chính, tận tụy phục vụ nhân dân.`,
    category: 'Xây dựng ngành',
    date: '28/10/2026',
    time: '10:05',
    author: 'Ban Thanh tra TAND TP',
    imageUrl: '/images/tand_hanoi_facade.jpg',
    views: 1890,
    tag: '10:05',
    source: 'Cổng thông tin điện tử Tòa án nhân dân tối cao',
    sourceUrl: 'https://toaan.gov.vn',
    verifiedAgency: 'Ban Thanh tra - TAND TP Hà Nội',
    officialDocNumber: 'Quy định số 132-QĐ/TW của Bộ Chính trị'
  },
  {
    id: 'time-3',
    title: 'Tập huấn toàn ngành về quy trình bảo vệ bí mật Nhà nước và an toàn thông tin mạng trong xét xử',
    summary: '100% cán bộ, Thẩm phán, Thư ký tham dự hội nghị trực tuyến kết nối 30 điểm cầu quận huyện.',
    content: `Hội nghị tập huấn quán triệt các văn bản quy phạm pháp luật mới về bảo vệ bí mật Nhà nước trong quá trình xét xử. Các chuyên gia an ninh mạng Bộ Công an và Vụ Pháp chế TAND tối cao đã hướng dẫn chi tiết quy trình xử lý văn bản điện tử mật, phòng chống nguy cơ mã độc và rò rỉ dữ liệu tư pháp trên không gian mạng.`,
    category: 'Đào tạo',
    date: '28/10/2026',
    time: '09:20',
    author: 'Văn phòng Tòa án',
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
    title: 'Chi đoàn Thanh niên TAND TP Hà Nội tổ chức chương trình "Phiên tòa giả định" tại trường THPT',
    summary: 'Tuyên truyền phòng chống bạo lực học đường và nhận diện thủ đoạn dụ dỗ ma túy thế hệ mới cho hơn 1.500 học sinh.',
    content: `Với hình thức sân khấu hóa sinh động, phiên tòa giả định đã tái hiện chân thực một vụ án học sinh bị lôi kéo sử dụng và mua bán thuốc lá điện tử chứa chất ma túy. Bằng việc phân tích hậu quả pháp lý nghiêm khắc và những bi kịch gia đình, chương trình đã trang bị kiến thức pháp luật bổ ích và nâng cao kỹ năng tự bảo vệ cho các em học sinh Thủ đô.`,
    category: 'Đoàn thể',
    date: '28/10/2026',
    time: '08:10',
    author: 'Đoàn Thanh niên TAND TP',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    views: 980,
    tag: '08:10',
    source: 'Báo Công lý',
    sourceUrl: 'https://congly.vn',
    verifiedAgency: 'Báo Công lý & Đoàn Khối các cơ quan TP Hà Nội',
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
    code: '128/TB-TAHN',
    title: 'Thông báo về việc tiếp nhận đơn khiếu nại, tố cáo và lịch tiếp công dân định kỳ tháng 11/2026 của Lãnh đạo Tòa án',
    date: '28/10/2026',
    department: 'Ban Tiếp công dân',
    type: 'Thông báo',
    downloadUrl: '#'
  },
  {
    id: 'not-2',
    code: '05/HD-TAND',
    title: 'Hướng dẫn nghiệp vụ thu thập, đánh giá chứng cứ điện tử và số hóa hồ sơ trong các vụ án công nghệ cao',
    date: '27/10/2026',
    department: 'Tòa Hình sự',
    type: 'Văn bản hướng dẫn',
    downloadUrl: '#'
  },
  {
    id: 'not-3',
    code: '89/CT-TANDTC',
    title: 'Chỉ thị của Chánh án TAND tối cao về tăng cường kỷ luật kỷ cương công vụ và nâng cao chất lượng xét xử',
    date: '25/10/2026',
    department: 'TAND Tối Cao',
    type: 'Chỉ đạo điều hành',
    downloadUrl: '#'
  },
  {
    id: 'not-4',
    code: '42/TB-TCCB',
    title: 'Thông báo kết quả sát hạch nghiệp vụ và danh sách trúng tuyển kỳ thi tuyển Thư ký Tòa án đợt 2/2026',
    date: '24/10/2026',
    department: 'Phòng Tổ chức cán bộ',
    type: 'Tuyển dụng',
    downloadUrl: '#'
  }
]

export const publicServices: PublicServiceItem[] = [
  {
    id: 'ps-1',
    title: 'Nộp Đơn Khởi Kiện & Tài Liệu Trực Tuyến',
    desc: 'Tiếp nhận đơn khởi kiện vụ án dân sự, hành chính, kinh doanh thương mại và tài liệu chứng cứ trực tuyến 24/7.',
    icon: 'ShieldAlert',
    badge: 'Xử lý ưu tiên',
    link: '#nop-don'
  },
  {
    id: 'ps-2',
    title: 'Đặt Lịch Tiếp Công Dân Của Lãnh Đạo Tòa Án',
    desc: 'Đăng ký hẹn lịch tiếp công dân trực tiếp của Chánh án và các Phó Chánh án định kỳ hàng tháng.',
    icon: 'CalendarClock',
    badge: 'Trực tuyến 100%',
    link: '#dat-lich'
  },
  {
    id: 'ps-3',
    title: 'Tra Cứu Bản Án & Tiến Độ Giải Quyết Vụ Án',
    desc: 'Nhập số thụ lý/CCCD để kiểm tra tiến độ giải quyết vụ án và tra cứu các bản án đã có hiệu lực pháp luật.',
    icon: 'SearchCheck',
    badge: 'Công khai minh bạch',
    link: '#tra-cuu'
  },
  {
    id: 'ps-4',
    title: 'Hướng dẫn thủ tục Tư pháp & Biểu mẫu Tòa án',
    desc: 'Tải các mẫu đơn khởi kiện, đơn kháng cáo, đơn yêu cầu áp dụng biện pháp khẩn cấp tạm thời miễn phí.',
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
      title: 'Xét xử sơ thẩm vụ án thao túng thị trường chứng khoán thu lợi bất chính hàng chục tỷ đồng',
      summary: 'Tòa án nhân dân thành phố Hà Nội mở phiên tòa xét xử công khai đối với 4 bị cáo về tội Thao túng thị trường chứng khoán.',
      content: `TAND TP Hà Nội vừa mở phiên tòa xét xử sơ thẩm công khai đối với nhóm 4 bị cáo về tội "Thao túng thị trường chứng khoán" theo Điều 211 Bộ luật Hình sự.

Theo cáo trạng và diễn biến tranh tụng, các bị cáo đã sử dụng hàng chục tài khoản chứng khoán khác nhau, liên tục thực hiện các giao dịch chéo, khớp lệnh giả tạo nhằm tạo cung cầu ảo và đẩy giá cổ phiếu lên cao, sau đó bán tháo để thu lợi bất chính hơn 50 tỷ đồng, gây thiệt hại nghiêm trọng cho các nhà đầu tư chân chính.

Hội đồng xét xử đã điều hành phần xét hỏi, tranh luận dân chủ, bảo đảm quyền tranh tụng của các luật sư và các bị cáo theo đúng quy định của Bộ luật Tố tụng hình sự.`,
      category: 'Án Hình sự',
      date: '28/10/2026',
      author: 'Nguyễn Văn Hải - Tòa Hình sự',
      imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80',
      views: 2950,
      source: 'Báo Công lý',
      sourceUrl: 'https://congly.vn',
      verifiedAgency: 'Tòa Hình sự - TAND TP Hà Nội',
      officialDocNumber: 'Quyết định đưa vụ án ra xét xử số 412/2026/QĐXXST-HS'
    },
    {
      id: 'hs-2',
      title: 'TAND TP Hà Nội đưa ra xét xử đường dây mua bán vận chuyển trái phép chất ma túy liên tỉnh',
      summary: 'Phiên tòa được tổ chức nghiêm minh, áp dụng hình phạt nghiêm khắc đối với các đối tượng cầm đầu.',
      content: `TAND TP Hà Nội đã đưa ra xét xử sơ thẩm vụ án vận chuyển trái phép chất ma túy từ biên giới Tây Bắc về tiêu thụ tại địa bàn Thủ đô với số lượng đặc biệt lớn.

Căn cứ vào kết quả tranh tụng công khai tại phiên tòa, Hội đồng xét xử đã tuyên phạt mức án cao nhất đối với các bị cáo chủ mưu cầm đầu, thể hiện sự nghiêm minh của pháp luật và quyết tâm phòng chống tội phạm ma túy của các cơ quan tư pháp Thủ đô.`,
      category: 'Án Hình sự',
      date: '27/10/2026',
      author: 'Trần Tuấn Kiệt - Thư ký Tòa án',
      imageUrl: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80',
      views: 1820,
      source: 'Cổng thông tin điện tử TAND TP Hà Nội',
      sourceUrl: 'https://hanoi.toaan.gov.vn',
      verifiedAgency: 'TAND TP Hà Nội',
      officialDocNumber: 'Bản án hình sự sơ thẩm số 1026/2026/HS-ST'
    },
    {
      id: 'hs-3',
      title: 'TAND TP Hà Nội rút kinh nghiệm về công tác xét xử và đánh giá chứng cứ điện tử',
      summary: 'Thực hiện đúng quy định tố tụng nhằm bảo đảm minh bạch và tranh tụng dân chủ tại phiên tòa.',
      content: `TAND thành phố Hà Nội vừa tổ chức Hội nghị rút kinh nghiệm về công tác xét xử và áp dụng các quy định về chứng cứ dữ liệu điện tử, video ghi âm ghi hình trong quá trình xét xử vụ án hình sự theo tinh thần cải cách tư pháp.

Văn bản chỉ đạo nêu rõ, các Thẩm phán - Chủ tọa phiên tòa cần chủ động chuẩn bị kỹ kế hoạch xét hỏi, tạo điều kiện thuận lợi nhất để các bên đương sự và luật sư tiếp cận chứng cứ số, trình chiếu công khai tại phiên tòa nhằm làm sáng tỏ sự thật khách quan của vụ án.`,
      category: 'Án Hình sự',
      date: '25/10/2026',
      author: 'Đặng Mai Phương - Ban Pháp chế',
      imageUrl: 'https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=600&q=80',
      views: 1450,
      source: 'Cổng thông tin điện tử Tòa án nhân dân tối cao',
      sourceUrl: 'https://toaan.gov.vn',
      verifiedAgency: 'Văn phòng TAND Tối cao',
      officialDocNumber: 'Thông tư liên tịch số 03/2018/TTLT-BCA-VKSNDTC-TANDTC-BQP'
    }
  ],
  dansu: [
    {
      id: 'ds-1',
      title: 'TAND TP Hà Nội hòa giải thành công vụ tranh chấp di sản thừa kế bất động sản phức tạp kéo dài 10 năm',
      summary: 'Hàn gắn tình cảm gia đình, bảo đảm quyền lợi đương sự thông qua trung tâm hòa giải, đối thoại tại Tòa án.',
      content: `TAND thành phố Hà Nội vừa hòa giải thành công vụ án dân sự về tranh chấp di sản thừa kế nhà đất có giá trị lớn tại quận Ba Đình kéo dài qua nhiều cấp xét xử.

Nhờ sự kiên trì, công tâm và phân tích thấu tình đạt lý của Thẩm phán được phân công chủ trì phiên hòa giải, các bên đương sự đã tự nguyện thống nhất phương án phân chia tài sản, khép lại vụ việc kéo dài nhiều năm, bảo đảm sự ổn định và hòa thuận trong cộng đồng dân cư.`,
      category: 'Dân sự - Hành chính',
      date: '28/10/2026',
      author: 'Lê Ngọc Lan - Tòa Dân sự',
      imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
      views: 1680,
      source: 'Cổng thông tin điện tử TAND TP Hà Nội',
      sourceUrl: 'https://hanoi.toaan.gov.vn',
      verifiedAgency: 'Tòa Dân sự - TAND TP Hà Nội',
      officialDocNumber: 'Quyết định công nhận hòa giải thành số 22/2026/QĐST-DS'
    },
    {
      id: 'ds-2',
      title: 'Tăng cường bảo vệ quyền lợi hợp pháp của người lao động trong các tranh chấp bảo hiểm xã hội',
      summary: 'Thẩm phán tổ chức hòa giải tích cực, thúc đẩy doanh nghiệp chi trả nợ bảo hiểm cho hàng trăm công nhân.',
      content: `Triển khai tinh thần cải cách tư pháp về việc bảo vệ quyền và lợi ích hợp pháp của người lao động và nhóm yếu thế, TAND TP Hà Nội đã đẩy nhanh tiến độ thụ lý và xét xử các vụ án tranh chấp nợ đọng BHXH kéo dài.

Nhờ sự vào cuộc quyết liệt và đối thoại trách nhiệm của Hội đồng xét xử, đơn vị nợ đọng đã tự nguyện chuyển nộp hơn 12 tỷ đồng tiền nợ BHXH, bảo đảm quyền lợi thai sản, ốm đau và chế độ hưu trí cho hơn 300 lao động.`,
      category: 'Dân sự - Hành chính',
      date: '26/10/2026',
      author: 'Hoàng Anh Quân - Tòa Lao động',
      imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
      views: 1190,
      source: 'Báo Công lý',
      sourceUrl: 'https://congly.vn',
      verifiedAgency: 'Báo Công lý & BHXH Thành phố Hà Nội',
      officialDocNumber: 'Nghị quyết số 205/2025/QH15 của Quốc hội'
    },
    {
      id: 'ds-3',
      title: 'Nâng cao chất lượng ban hành bản án, quyết định thi hành án dân sự tại TAND hai cấp',
      summary: 'Tập trung tháo gỡ khó khăn vướng mắc, bảo đảm bản án tuyên rõ ràng, khả thi khi tổ chức thi hành án.',
      content: `TAND TP Hà Nội đã chủ trì Hội nghị liên ngành với Cục Thi hành án dân sự thành phố nhằm đánh giá công tác phối hợp trong chuyển giao bản án, quyết định có hiệu lực pháp luật.

Các Thẩm phán đã trao đổi, rút kinh nghiệm để các phán quyết luôn đảm bảo tính chính xác, chặt chẽ, tạo điều kiện thuận lợi cho việc tổ chức thi hành án nhanh chóng, bảo vệ kỷ cương pháp luật.`,
      category: 'Dân sự - Hành chính',
      date: '25/10/2026',
      author: 'Phạm Hồng Thái - TAND TP Hà Nội',
      imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
      views: 1530,
      source: 'Cổng thông tin điện tử Tòa án nhân dân tối cao',
      sourceUrl: 'https://toaan.gov.vn',
      verifiedAgency: 'TAND TP Hà Nội',
      officialDocNumber: 'Kế hoạch liên ngành số 18/KHLN-TA-THADS'
    }
  ],
  xaydung: [
    {
      id: 'xd-1',
      title: 'Tổ chức lễ công bố và trao quyết định bổ nhiệm chức danh Thẩm phán năm 2026',
      summary: 'Chúc mừng 32 đồng chí xuất sắc vượt qua kỳ thi sát hạch nghiệp vụ cấp quốc gia được Chủ tịch nước bổ nhiệm.',
      content: `Sáng ngày 27/10/2026, TAND thành phố Hà Nội long trọng tổ chức Lễ công bố và trao Quyết định của Chủ tịch nước về việc bổ nhiệm chức danh Thẩm phán trung cấp và Thẩm phán sơ cấp cho 32 đồng chí thuộc hai cấp Tòa án Thủ đô.

Đồng chí Chánh án phát biểu giao nhiệm vụ: "Được bổ nhiệm chức danh Thẩm phán là vinh dự to lớn nhưng cũng gắn liền với trọng trách nặng nề trước Đảng, Nhà nước và Nhân dân. Mỗi đồng chí phải không ngừng rèn đức, luyện tài, giữ vững tinh thần 'Phụng công, thủ pháp, chí công, vô tư', bảo vệ lẽ phải và công lý".`,
      category: 'Xây dựng ngành',
      date: '27/10/2026',
      author: 'Phòng Tổ chức cán bộ',
      imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      views: 3410,
      source: 'Cổng thông tin điện tử Tòa án nhân dân tối cao',
      sourceUrl: 'https://toaan.gov.vn',
      verifiedAgency: 'Vụ Tổ chức cán bộ - TAND Tối cao',
      officialDocNumber: 'Quyết định số 389/QĐ-CTN'
    },
    {
      id: 'xd-2',
      title: 'Hội nghị điển hình tiên tiến và giao lưu thể thao chào mừng ngày truyền thống Tòa án nhân dân',
      summary: 'Tạo không khí thi đua sôi nổi, rèn luyện thể chất và thắt chặt tình đoàn kết giữa các đơn vị hai cấp ngành Tòa án Hà Nội.',
      content: `Nhân dịp kỷ niệm ngày truyền thống Tòa án nhân dân, Công đoàn và Đoàn Thanh niên TAND TP Hà Nội đã phối hợp tổ chức Hội nghị biểu dương gương điển hình tiên tiến trong phong trào thi đua "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh" kết hợp Hội thao truyền thống.

Hội thao quy tụ hơn 200 vận động viên là Thẩm phán, Thư ký, cán bộ, công chức đến từ 30 đơn vị TAND quận, huyện, thị xã tranh tài ở các môn bóng đá, cầu lông, bóng bàn và quần vợt, mang lại bầu không khí rèn luyện thân thể và đoàn kết gắn bó sâu sắc.`,
      category: 'Xây dựng ngành',
      date: '25/10/2026',
      author: 'Công đoàn TAND TP Hà Nội',
      imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
      views: 1780,
      source: 'Cổng thông tin điện tử TAND TP Hà Nội',
      sourceUrl: 'https://hanoi.toaan.gov.vn',
      verifiedAgency: 'Công đoàn cơ quan TAND TP Hà Nội',
      officialDocNumber: 'Kế hoạch thi đua số 12/KH-CĐ-TAHN'
    },
    {
      id: 'xd-3',
      title: 'Ứng dụng trợ lý ảo AI hỗ trợ Thẩm phán tra cứu án lệ và quy định tố tụng',
      summary: 'Bước đột phá trong triển khai Đề án chuyển đổi số toàn diện ngành Tòa án nhân dân đến năm 2030.',
      content: `Thực hiện chỉ đạo của Chánh án TAND tối cao về ứng dụng trí tuệ nhân tạo (AI) trong hoạt động tư pháp, TAND TP Hà Nội là đơn vị tiên phong triển khai hệ thống Trợ lý ảo Tòa án tích hợp toàn bộ kho án lệ, văn bản giải đáp nghiệp vụ và hệ thống văn bản quy phạm pháp luật.

Hệ thống cho phép Thẩm phán và Thư ký tra cứu nhanh các tình tiết tương đồng, gợi ý các điều luật liên quan và cảnh báo các mốc thời hạn tố tụng, giúp nâng cao chất lượng lập hồ sơ và xét xử chuẩn xác tại phiên tòa.`,
      category: 'Xây dựng ngành',
      date: '24/10/2026',
      author: 'Ban Chỉ đạo Chuyển đổi số TAND TP',
      imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80',
      views: 2890,
      source: 'Cổng thông tin điện tử TAND TP Hà Nội',
      sourceUrl: 'https://hanoi.toaan.gov.vn',
      verifiedAgency: 'Ban Chỉ đạo CNTT & Chuyển đổi số TAND TP Hà Nội',
      officialDocNumber: 'Kế hoạch số 86/KH-BCĐ-TAHN'
    }
  ] // Completed xaydung articles list
}

// Articles mapped specifically for ticker breaking news items
export const tickerArticles: NewsItem[] = [
  {
    id: 'ticker-1',
    title: 'TAND TP Hà Nội: Đẩy mạnh ứng dụng công nghệ thông tin và số hóa 100% hồ sơ vụ án trọng điểm năm 2026',
    summary: 'Triển khai đồng bộ hạ tầng số hóa hồ sơ vụ án, phục vụ hiệu quả công tác báo cáo án bằng sơ đồ tư duy và trình chiếu chứng cứ tại phiên tòa.',
    content: `Thực hiện Chỉ thị của Chánh án TAND tối cao về tăng cường ứng dụng công nghệ thông tin và chuyển đổi số ngành Tòa án nhân dân, TAND thành phố Hà Nội đã hoàn thành chỉ tiêu 100% hồ sơ các vụ án hình sự trọng điểm, phức tạp được số hóa và lưu trữ trên hệ thống máy chủ nội bộ bảo mật cao.

Việc số hóa hồ sơ giúp Thẩm phán và Hội đồng xét xử thuận tiện trong việc tra cứu bút lục, trích xuất tài liệu phục vụ xét hỏi, tranh luận tại phiên tòa một cách nhanh chóng, chuẩn xác. Đồng thời loại bỏ hoàn toàn nguy cơ thất lạc tài liệu, nâng cao tính chuyên nghiệp và hiện đại hóa nền tư pháp Thủ đô.`,
    category: 'Chỉ đạo điều hành',
    date: '28/10/2026',
    time: '08:00',
    author: 'Tổ CNTT - Văn phòng Tòa án',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    views: 3890,
    source: 'Cổng thông tin điện tử Tòa án nhân dân tối cao',
    sourceUrl: 'https://toaan.gov.vn',
    verifiedAgency: 'TAND TP Hà Nội & Cục CNTT TAND Tối cao',
    officialDocNumber: 'Kế hoạch Chuyển đổi số TAND Tối cao'
  },
  {
    id: 'ticker-2',
    title: 'Thông báo mở rộng tiếp nhận đơn khởi kiện và tài liệu tố tụng qua ứng dụng VNeID và Cổng dịch vụ công trực tuyến',
    summary: 'Tạo kênh tương tác trực tuyến an toàn, thuận tiện cho người dân nộp đơn khởi kiện và theo dõi tiến độ giải quyết vụ án.',
    content: `Nhằm tạo thuận lợi tối đa cho người dân tiếp cận công lý, TAND thành phố Hà Nội chính thức đưa vào vận hành phân hệ tiếp nhận đơn khởi kiện trực tuyến kết nối đồng bộ với Cơ sở dữ liệu quốc gia về dân cư thông qua tài khoản định danh điện tử VNeID mức độ 2.
Người dân Thủ đô và cả nước có thể trực tiếp gửi đơn khởi kiện, tài liệu chứng cứ tới Tòa án 24/7. Toàn bộ thông tin cá nhân và tài liệu vụ án đều được mã hóa theo tiêu chuẩn an ninh quốc gia, bảo vệ an toàn tuyệt đối quyền và lợi ích hợp pháp của đương sự.`,
    category: 'Dịch vụ công',
    date: '28/10/2026',
    time: '07:45',
    author: 'Tổ Tiếp nhận đơn & Hành chính tư pháp',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    views: 4120,
    source: 'Cổng thông tin điện tử TAND TP Hà Nội',
    sourceUrl: 'https://hanoi.toaan.gov.vn',
    verifiedAgency: 'TAND TP Hà Nội',
    officialDocNumber: 'Thông báo số 04/TB-TANDHN'
  },
  {
    id: 'ticker-3',
    title: 'Hội nghị triển khai công tác xét xử: Nâng cao chất lượng tranh tụng và bản lĩnh Thẩm phán tại phiên tòa',
    summary: 'Quán triệt nguyên tắc tranh tụng công khai, dân chủ, bình đẳng, không áp đặt ý chí chủ quan, tôn trọng sự thật khách quan.',
    content: `Tại Hội nghị giao ban công tác xét xử ngành Tòa án Thủ đô, đồng chí Chánh án yêu cầu mỗi Thẩm phán khi điều hành phiên tòa phải bảo đảm quyền tranh tụng công bằng, dân chủ cho các bên đương sự và luật sư.

Hội đồng xét xử phải thực hiện đúng nguyên tắc độc lập xét xử và chỉ tuân theo pháp luật, mọi phán quyết phải căn cứ vào kết quả tranh tụng công khai tại tòa và chứng cứ hợp pháp đã được thẩm tra, kiên quyết không để xảy ra án oan hoặc bỏ lọt tội phạm.`,
    category: 'Hoạt động xét xử',
    date: '27/10/2026',
    time: '14:30',
    author: 'Phòng Kiểm tra nghiệp vụ - TAND TP Hà Nội',
    imageUrl: '/images/tand_courtroom_hall.jpg',
    views: 2750,
    source: 'Báo Công lý',
    sourceUrl: 'https://congly.vn',
    verifiedAgency: 'TAND TP Hà Nội',
    officialDocNumber: 'Thông báo kết luận số 88/TB-TAHN'
  },
  {
    id: 'ticker-4',
    title: 'TAND TP Hà Nội phối hợp tổ chức các phiên tòa số hóa rút kinh nghiệm trực tuyến toàn thành phố',
    summary: 'Tăng cường ứng dụng công nghệ, nâng cao kỹ năng điều hành phiên tòa trực tuyến của Thẩm phán hai cấp.',
    content: `TAND TP Hà Nội đã tổ chức kết nối trực tuyến phiên tòa số hóa rút kinh nghiệm từ trụ sở Tòa án thành phố đến các điểm cầu TAND cấp quận, huyện. Mô hình này giúp đội ngũ Thẩm phán, Thư ký học hỏi kinh nghiệm điều hành phiên tòa, chuẩn hóa quy trình tố tụng điện tử và nâng cao năng lực ứng dụng công nghệ số.`,
    category: 'Chỉ đạo điều hành',
    date: '27/10/2026',
    time: '10:00',
    author: 'Ban Đổi mới công tác xét xử TAND TP',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    views: 3340,
    source: 'Cổng thông tin điện tử TAND TP Hà Nội',
    sourceUrl: 'https://hanoi.toaan.gov.vn',
    verifiedAgency: 'TAND TP Hà Nội & TAND Tối cao',
    officialDocNumber: 'Kế hoạch phối hợp số 105/KH-TANDHN'
  }
]

// Alias noticeDocuments as noticesList for backward and cross-component compatibility
export const noticesList = noticeDocuments

export const mediaVideos = [
  {
    id: 'vid-1',
    title: 'Phim tài liệu: "TAND TP Hà Nội - Bản lĩnh, Kỷ cương và Khát vọng phụng sự Công lý"',
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
    title: 'Phóng sự: Tòa án số hóa tài liệu chứng cứ - Bước tiến trong xét xử và tranh tụng',
    duration: '12:30',
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
    date: '20/10/2026'
  }
]

export const keyStatistics = [
  { number: '100%', label: 'Vụ án xét xử đúng thời hạn quy định', sub: 'Không có án quá hạn luật định' },
  { number: '0', label: 'Vụ án xảy ra oan sai, bỏ lọt tội phạm', sub: 'Đảm bảo công bằng xã hội' },
  { number: '18.450+', label: 'Lượt tiếp công dân & giải quyết đơn thư', sub: 'Tỷ lệ hài lòng đạt trên 99%' },
  { number: '100%', label: 'Vụ án trọng điểm được số hóa dữ liệu', sub: 'Trình chiếu chứng cứ số tại phiên tòa' }
]

export const partnerLinks = [
  { name: 'Cổng TTĐT Chính Phủ', url: 'https://chinhphu.vn', desc: 'Cơ quan hành chính cao nhất' },
  { name: 'Tòa Án Nhân Dân Tối Cao', url: 'https://toaan.gov.vn', desc: 'Hệ thống Tòa án Nhân dân' },
  { name: 'Bộ Tư Pháp', url: 'https://moj.gov.vn', desc: 'Bộ Tư pháp Việt Nam' },
  { name: 'Công An TP Hà Nội', url: 'https://congan.hanoi.gov.vn', desc: 'Công an Thành phố Hà Nội' },
  { name: 'Báo Công Lý', url: 'https://congly.vn', desc: 'Cơ quan ngôn luận của TAND Tối cao' },
  { name: 'VKSND Tối Cao', url: 'https://vksndtc.gov.vn', desc: 'Viện Kiểm sát Nhân dân Tối cao' }
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
      content: `Văn bản số ${notice.code} của ${notice.department} thuộc TAND thành phố Hà Nội được ban hành chính thức ngày ${notice.date}.\n\nYêu cầu các tòa chuyên trách, TAND các quận, huyện, thị xã và cán bộ công chức liên quan nghiên cứu, quán triệt và triển khai thực hiện nghiêm túc theo đúng thẩm quyền và thời hạn quy định.\n\nMọi phản hồi hoặc vướng mắc trong quá trình thực hiện đề nghị liên hệ trực tiếp với Văn phòng TAND TP Hà Nội để được hướng dẫn giải đáp kịp thời.`,
      category: notice.type,
      date: notice.date,
      time: '08:00',
      author: notice.department,
      imageUrl: '/images/tand_hanoi_facade.jpg',
      views: 1250,
      source: 'Cổng thông tin điện tử TAND TP Hà Nội',
      sourceUrl: 'https://hanoi.toaan.gov.vn',
      verifiedAgency: 'Văn phòng TAND TP Hà Nội',
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

