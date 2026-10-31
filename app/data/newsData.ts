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
  'TAND Khu vực 7 – Hà Nội trao tặng 150 phần quà đến học sinh bị ảnh hưởng bởi mưa lũ tại Trường Mầm non Bắc Sơn A',
  'TAND Khu vực 9 – Hà Nội tổ chức thành công Hội nghị bàn về quy chế phối hợp công tác trong hoạt động tố tụng với UBND các xã, phường',
  'Đảng bộ Tòa án nhân dân quận Hai Bà Trưng tổ chức thành công Đại hội lần thứ VI - Nhiệm kỳ 2025-2030',
  'Liên ngành 04 cơ quan Tòa án – Viện kiểm sát – Công an – Thi hành án dân sự tăng cường phối hợp công tác tố tụng trên địa bàn Thủ đô'
]

export const hotSpotlightNews: NewsItem = {
  id: 'hot-1',
  title: 'TÒA ÁN NHÂN DÂN KHU VỰC 7 – HÀ NỘI TRAO TẶNG 150 PHẦN QUÀ ĐẾN HỌC SINH BỊ ẢNH HƯỞNG BỞI MƯA LŨ',
  summary: 'Dưới sự ảnh hưởng của hoàn lưu bão gây mưa lớn kéo dài làm ngập lụt nghiêm trọng tại nhiều địa phương trên địa bàn TP Hà Nội, Chi đoàn Tòa án nhân dân Khu vực 7 – Hà Nội đã tổ chức trao tặng 150 phần quà ý nghĩa đến các em học sinh tại Trường Mầm non Bắc Sơn A, xã Trung Giã, thành phố Hà Nội.',
  content: `Những ngày vừa qua, dưới sự ảnh hưởng của hoàn lưu hai cơn bão Pualoi và Matmo đã gây ra mưa lớn kéo dài làm ảnh hưởng ngập lụt nghiêm trọng tại nhiều địa phương trên địa bàn thành phố Hà Nội. Nhiều trường học bị thiệt hại về cơ sở vật chất, ảnh hưởng đến việc học của học sinh. Trong đó có trường mầm non Bắc Sơn A (địa chỉ: thôn Phúc Trí, xã Trung Giã, thành phố Hà Nội) bị ngập úng nặng, nhiều phòng học, thiết bị dạy học bị hư hỏng, việc giảng dạy và học tập bị gián đoạn.

Phát huy truyền thống tốt đẹp “tương thân tương ái”, “lá lành đùm lá rách” của dân tộc và tinh thần xung kích, tình nguyện vì cộng đồng của tuổi trẻ, Chi đoàn Tòa án nhân dân khu vực 7 – Hà Nội đã tổ chức chương trình tình nguyện, trao tặng 150 phần quà đến các em học sinh tại trường mầm non Bắc Sơn A.

Những phần quà tuy giá trị vật chất không lớn nhưng chứa đựng tình cảm, sự sẻ chia, là nguồn động viên kịp thời của cán bộ, công chức, đoàn viên Tòa án nhân dân khu vực 7 – Hà Nội gửi gắm đến các em học sinh và các thầy cô giáo vượt qua khó khăn, nhanh chóng khắc phục hậu quả thiên tai, ổn định việc dạy và học.

Đại diện Ban giám hiệu trường mầm non Bắc Sơn A đã gửi lời cảm ơn sâu sắc tới sự quan tâm, hỗ trợ kịp thời của Tòa án nhân dân khu vực 7 – Hà Nội, khẳng định đây là nguồn động viên tinh thần to lớn để nhà trường sớm đưa hoạt động giáo dục trở lại bình thường.`,
  category: 'Tin nổi bật',
  date: '21/10/2025',
  time: '08:30',
  author: 'Chi đoàn TAND Khu vực 7 - Hà Nội',
  imageUrl: '/images/tand_hanoi_charity_rain.jpg',
  views: 5240,
  isHot: true,
  tag: 'TIÊU ĐIỂM TRONG NGÀY',
  source: 'Cổng thông tin điện tử Tòa án nhân dân TP Hà Nội',
  sourceUrl: 'https://toaan.hanoi.gov.vn/tin-tuc-su-kien-noi-bat/-/view_content/6378905-toa-an-nhan-dan-khu-vuc-7-ha-noi-trao-tang-150-phan-qua-den-hoc-sinh-bi-anh-huong-boi-mua-lu.html',
  verifiedAgency: 'Tòa án nhân dân thành phố Hà Nội',
  officialDocNumber: 'Chương trình thiện nguyện vì cộng đồng năm 2025'
}

export const subHotNews: NewsItem[] = [
  {
    id: 'hot-2',
    title: 'TÒA ÁN NHÂN DÂN KHU VỰC 9 – HÀ NỘI TỔ CHỨC THÀNH CÔNG HỘI NGHỊ BÀN VỀ QUY CHẾ PHỐI HỢP CÔNG TÁC TRONG HOẠT ĐỘNG TỐ TỤNG VỚI UBND CÁC XÃ, PHƯỜNG',
    summary: 'Thực hiện chỉ đạo của Tòa án nhân dân tối cao và TAND TP Hà Nội về việc tăng cường phối hợp giữa Tòa án và UBND các cấp trong hoạt động tố tụng, TAND Khu vực 9 – Hà Nội đã tổ chức thành công Hội nghị bàn về quy chế phối hợp công tác.',
    content: `Thực hiện chỉ đạo của Tòa án nhân dân tối cao, Tòa án nhân dân thành phố Hà Nội về việc tăng cường phối hợp giữa Tòa án và UBND các cấp trong hoạt động tố tụng, tại trụ sở Tòa án nhân dân khu vực 9 – Hà Nội cơ sở 2, Tòa án nhân dân khu vực 9 – Hà Nội đã tổ chức Hội nghị bàn về Quy chế phối hợp công tác trong hoạt động tố tụng với UBND các xã, phường trên địa bàn.

Hội nghị nhằm đánh giá những kết quả đạt được, đồng thời thẳng thắn chỉ ra những tồn tại, khó khăn, vướng mắc trong quá trình phối hợp giữa Tòa án nhân dân với chính quyền địa phương thời gian qua, đặc biệt trong công tác tống đạt văn bản tố tụng, thu thập chứng cứ, định giá tài sản, xem xét thẩm định tại chỗ và giải quyết các vụ việc khiếu kiện hành chính, tranh chấp đất đai.

Đại diện lãnh đạo UBND các xã, phường đã trao đổi, đóng góp nhiều ý kiến tâm huyết, thiết thực đối với dự thảo Quy chế phối hợp. Các bên thống nhất việc xây dựng và ban hành Quy chế phối hợp công tác sẽ tạo cơ sở pháp lý vững chắc, nâng cao trách nhiệm và hiệu quả công tác phối hợp, góp phần đẩy nhanh tiến độ và nâng cao chất lượng giải quyết các loại vụ án, phục vụ tốt nhiệm vụ chính trị của địa phương.`,
    category: 'Hoạt động ngành',
    date: '13/08/2025',
    time: '09:00',
    author: 'TAND Khu vực 9 - Hà Nội',
    imageUrl: '/images/tand_hanoi_khuvuc9_hoi_nghi.jpg',
    views: 3850,
    isHot: true,
    tag: 'TIN NÓNG',
    source: 'Cổng thông tin điện tử TAND TP Hà Nội',
    sourceUrl: 'https://toaan.hanoi.gov.vn/tin-tuc-su-kien-noi-bat/-/view_content/6350836-toa-an-nhan-dan-khu-vuc-9-ha-noi-to-chuc-thanh-cong-hoi-nghi-ban-ve-quy-che-phoi-hop-cong-tac-trong-hoat-dong-to-tung-voi-ubnd-cac-xa-phuong-.html',
    verifiedAgency: 'Tòa án nhân dân thành phố Hà Nội',
    officialDocNumber: 'Kế hoạch phối hợp công tác tố tụng năm 2025'
  },
  {
    id: 'hot-3',
    title: 'ĐẢNG BỘ TÒA ÁN NHÂN DÂN QUẬN HAI BÀ TRƯNG ĐÃ TỔ CHỨC THÀNH CÔNG ĐẠI HỘI LẦN THỨ VI - NHIỆM KỲ 2025-2030',
    summary: 'Đảng bộ TAND quận Hai Bà Trưng đã long trọng tổ chức Đại hội Đảng bộ lần thứ VI, nhiệm kỳ 2025-2030. Dự Đại hội có đồng chí Nguyễn Thị Hà - Ủy viên Ban Thường vụ Đảng bộ, Phó Chánh án Tòa án nhân dân thành phố Hà Nội.',
    content: `Đảng bộ Tòa án nhân dân quận Hai Bà Trưng đã long trọng tổ chức Đại hội Đảng bộ lần thứ VI, nhiệm kỳ 2025-2030.

Dự Đại hội có đồng chí Nguyễn Thị Hà - Ủy viên Ban Thường vụ Đảng bộ, Phó Chánh án Tòa án nhân dân TP Hà Nội; đồng chí Nguyễn Quang Trung - Ủy viên Ban Thường vụ Quận ủy, Trưởng Ban Tổ chức Quận ủy Hai Bà Trưng; đồng chí Nguyễn Văn Thuận – Quận ủy viên, Bí thư Chi bộ, Viện trưởng VKSND quận Hai Bà Trưng cùng toàn thể đảng viên trong Đảng bộ Tòa án nhân dân quận Hai Bà Trưng.

Đại hội đã tổng kết, đánh giá toàn diện kết quả thực hiện Nghị quyết Đại hội Đảng bộ nhiệm kỳ 2020-2025; kiểm điểm sự lãnh đạo của Ban Chấp hành Đảng bộ; xác định phương hướng, mục tiêu, nhiệm vụ và các giải pháp chủ yếu nhiệm kỳ 2025-2030. Trong nhiệm kỳ qua, Đảng ủy TAND quận đã lãnh đạo, chỉ đạo đơn vị hoàn thành xuất sắc nhiệm vụ chính trị, tỷ lệ giải quyết các loại vụ án luôn đạt và vượt chỉ tiêu của Quốc hội và TAND tối cao giao, không để xảy ra án oan sai, bỏ lọt tội phạm.

Đại hội đã sáng suốt bầu ra Ban Chấp hành Đảng bộ Tòa án nhân dân quận Hai Bà Trưng khóa VI, nhiệm kỳ 2025-2030 gồm các đồng chí có đủ phẩm chất chính trị, đạo đức, năng lực công tác để lãnh đạo đơn vị ngày càng phát triển vững mạnh.`,
    category: 'Công tác Đảng',
    date: '17/06/2025',
    time: '14:30',
    author: 'Đảng bộ TAND quận Hai Bà Trưng',
    imageUrl: '/images/tand_hanoi_daihoi_haibatrung.jpg',
    views: 3410,
    isHot: true,
    tag: 'HOẠT ĐỘNG NGÀNH',
    source: 'Cổng thông tin điện tử TAND TP Hà Nội',
    sourceUrl: 'https://toaan.hanoi.gov.vn/tin-tuc-su-kien-noi-bat/-/view_content/6334810-dang-bo-toa-an-nhan-dan-quan-hai-ba-trung-da-to-chuc-thanh-cong-dai-hoi-lan-thu-vi-nhiem-ky-2025-2030-.html',
    verifiedAgency: 'Tòa án nhân dân thành phố Hà Nội',
    officialDocNumber: 'Nghị quyết Đại hội Đảng bộ TAND quận Hai Bà Trưng nhiệm kỳ 2025-2030'
  }
]

export const timelineNewsList: NewsItem[] = [
  {
    id: 'time-1',
    title: 'TAND quận Cầu Giấy xét xử các đối tượng tàng trữ, mua bán pháo nổ trái phép',
    summary: 'Tòa án nhân dân quận Cầu Giấy đã đưa ra xét xử công khai vụ án hình sự đối với các đối tượng về tội buôn bán, vận chuyển hàng cấm dịp Tết.',
    content: `Ngày 23/01/2025, Tòa án nhân dân quận Cầu Giấy, thành phố Hà Nội đã đưa ra xét xử sơ thẩm công khai vụ án hình sự đối với các bị cáo về hành vi tàng trữ, buôn bán pháo nổ trái phép.

Theo cáo trạng, các bị cáo do hám lợi đã đặt mua hàng chục hộp pháo hoa nổ qua mạng xã hội rồi vận chuyển về Hà Nội cất giấu để bán kiếm lời. Hành vi của các bị cáo đã xâm phạm trật tự quản lý kinh tế của Nhà nước và tiềm ẩn nguy cơ mất an toàn trật tự xã hội.

Hội đồng xét xử đã tuyên phạt các bị cáo mức án nghiêm khắc, thể hiện tính răn đe, giáo dục và phòng ngừa chung đối với các hành vi vi phạm pháp luật về quản lý, sử dụng pháo nổ.`,
    category: 'Tin xét xử',
    date: '24/01/2025',
    time: '09:30',
    author: 'TAND quận Cầu Giấy',
    imageUrl: '/images/tand_caugiay_xetxu_phao.jpg',
    views: 2150,
    tag: '09:30',
    source: 'Cổng thông tin điện tử TAND TP Hà Nội',
    sourceUrl: 'https://toaan.hanoi.gov.vn/tin-xet-xu/-/view_content/6233174-toa-an-nhan-dan-quan-cau-giay-xet-xu-cac-doi-tuong-tang-tru-mua-ban-phao-no-trai-phep-.html',
    verifiedAgency: 'TAND quận Cầu Giấy - TAND TP Hà Nội',
    officialDocNumber: 'Bản án hình sự sơ thẩm số 18/2025/HS-ST'
  },
  {
    id: 'time-2',
    title: 'Hội nghị tổng kết công tác phối hợp năm 2023 và sửa đổi Quy chế phối hợp liên ngành năm 2024 tại Đống Đa',
    summary: 'Liên ngành 04 cơ quan Tòa án – Viện kiểm sát – Công an – Thi hành án dân sự quận Đống Đa tổng kết công tác phối hợp.',
    content: `Liên ngành 04 cơ quan Tòa án – Viện kiểm sát – Công an – Thi hành án dân sự quận Đống Đa đã phối hợp tổ chức Hội nghị tổng kết, rút kinh nghiệm công tác phối hợp năm 2023 và thảo luận sửa đổi, bổ sung Quy chế phối hợp liên ngành năm 2024.

Đến dự và chỉ đạo Hội nghị có đồng chí Nguyễn Hoàng Giáp – Phó Chủ tịch thường trực UBND quận Đống Đa, đại diện lãnh đạo các phòng ban nghiệp vụ TAND TP Hà Nội và lãnh đạo liên ngành quận Đống Đa.

Hội nghị đã đánh giá cao sự phối hợp chặt chẽ, hiệu quả giữa 4 cơ quan trong công tác tiếp nhận, giải quyết tố giác tin báo tội phạm, điều tra, truy tố, xét xử và thi hành án dân sự, đảm bảo không xảy ra oan sai, không bỏ lọt tội phạm, giữ vững an ninh chính trị, trật tự an toàn xã hội trên địa bàn quận.`,
    category: 'Liên ngành',
    date: '04/01/2024',
    time: '14:00',
    author: 'Liên ngành tố tụng quận Đống Đa',
    imageUrl: '/images/tand_dongda_lien_nganh.jpg',
    views: 1870,
    tag: '14:00',
    source: 'Cổng thông tin điện tử TAND TP Hà Nội',
    sourceUrl: 'https://toaan.hanoi.gov.vn/hoat-dong-cua-toa-an/-/view_content/5320367-hoi-nghi-tong-ket-rut-kinh-nghiem-cong-tac-phoi-hop-nam-2023-va-thao-luan-sua-doi-bo-sung-quy-che-phoi-hop-lien-nganh-nam-2024-giua-04-co-quan-toa-an-.html',
    verifiedAgency: 'TAND quận Đống Đa - TAND TP Hà Nội',
    officialDocNumber: 'Quy chế phối hợp liên ngành số 01/QCPH-LN-ĐĐ'
  },
  {
    id: 'time-3',
    title: 'TAND quận Hai Bà Trưng xét xử trực tuyến đối tượng phạm tội về ma túy đặc biệt nguy hiểm',
    summary: 'Góp phần trong công tác cải cách tư pháp, ứng dụng công nghệ xét xử trực tuyến, xây dựng Tòa án điện tử Thủ đô.',
    content: `Tòa án nhân dân quận Hai Bà Trưng, thành phố Hà Nội đã tổ chức phiên tòa xét xử trực tuyến vụ án hình sự đối với bị cáo Nguyễn Xuân Quý phạm tội về ma túy đặc biệt nguy hiểm.

Phiên tòa được kết nối trực tuyến từ điểm cầu trung tâm tại trụ sở TAND quận Hai Bà Trưng tới điểm cầu thành phần tại Trại tạm giam số 1 - Công an thành phố Hà Nội. Quá trình xét xử diễn ra trang nghiêm, trật tự, đảm bảo đầy đủ các quyền và lợi ích hợp pháp của bị cáo theo quy định của Bộ luật Tố tụng hình sự.

Việc tổ chức thành công các phiên tòa trực tuyến thể hiện sự chủ động, quyết tâm của TAND quận Hai Bà Trưng trong việc thực hiện Nghị quyết số 33/2021/QH15 của Quốc hội về tổ chức phiên tòa trực tuyến, góp phần nâng cao hiệu quả công tác cải cách tư pháp và xây dựng Tòa án thông minh.`,
    category: 'Xét xử trực tuyến',
    date: '27/12/2023',
    time: '10:15',
    author: 'TAND quận Hai Bà Trưng',
    imageUrl: '/images/tand_haibatrung_xetxutructuyen.jpg',
    views: 2450,
    tag: '10:15',
    source: 'Cổng thông tin điện tử TAND TP Hà Nội',
    sourceUrl: 'https://toaan.hanoi.gov.vn/tin-xet-xu/-/view_content/5238673-toa-an-nhan-dan-quan-hai-ba-trung-xet-xu-truc-tuyen-doi-tuong-pham-toi-ve-ma-tuydac-biet-nguy-hiem-gop-phan-trong-cong-tac-cai-cach-tu-phap-xay-dung-1.html',
    verifiedAgency: 'TAND quận Hai Bà Trưng - TAND TP Hà Nội',
    officialDocNumber: 'Nghị quyết số 33/2021/QH15 về xét xử trực tuyến'
  },
  {
    id: 'time-4',
    title: 'TAND quận Hai Bà Trưng tổ chức chương trình kỷ niệm 94 năm ngày thành lập Đoàn TNCS Hồ Chí Minh',
    summary: 'Chi đoàn TAND quận Hai Bà Trưng nhiều năm liền xuất sắc toàn diện trong công tác Đoàn và phong trào thanh niên Thủ đô.',
    content: `Chi đoàn Tòa án nhân dân quận Hai Bà Trưng đã tổ chức chương trình kỷ niệm 94 năm ngày thành lập Đoàn TNCS Hồ Chí Minh (26/3/1931 - 26/3/2025).

Đoàn Thanh niên TAND quận Hai Bà Trưng tự hào là Chi đoàn nhiều năm liền xuất sắc toàn diện trong công tác Đoàn của Thủ đô nói chung, của quận Hai Bà Trưng nói riêng, bồi dưỡng được nhiều Đoàn viên có lý tưởng, đủ phẩm chất, đạo đức, có nhận thức đúng đắn, hiểu, tin, sẵn sàng hoàn thành mọi nhiệm vụ được giao.

Tại buổi lễ, các đoàn viên thanh niên đã cùng nhau ôn lại truyền thống vẻ vang của Đoàn TNCS Hồ Chí Minh, khẳng định tinh thần tiền phong, bản lĩnh của tuổi trẻ ngành Tòa án nhân dân trong học tập, rèn luyện và thực thi nhiệm vụ tư pháp.`,
    category: 'Đoàn thể',
    date: '31/03/2025',
    time: '15:45',
    author: 'Chi đoàn TAND quận Hai Bà Trưng',
    imageUrl: '/images/tand_hanoi_facade_wide.jpg',
    views: 1320,
    tag: '15:45',
    source: 'Cổng thông tin điện tử TAND TP Hà Nội',
    sourceUrl: 'https://toaan.hanoi.gov.vn/hoat-dong-dia-phuong/-/view_content/6296679-toa-an-nhan-dan-quan-hai-ba-trung-to-chuc-chuong-trinh-ky-niem-93-nam-ngay-thanh-lap-doan-tncs-ho-chi-mi-1.html',
    verifiedAgency: 'Chi đoàn TAND quận Hai Bà Trưng',
    officialDocNumber: 'Kế hoạch công tác thanh niên năm 2025'
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
    id: 'not-ps-1',
    code: '15/2026/QĐ-TBPS',
    title: 'Thông báo về việc Tuyên bố phá sản đối với doanh nghiệp theo quy định của Luật Phá sản',
    date: '28/10/2026',
    department: 'Tòa Kinh tế - TAND TP Hà Nội',
    type: 'Thông báo',
    downloadUrl: '#'
  },
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

