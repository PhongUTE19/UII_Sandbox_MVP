// Dữ liệu học thuật tĩnh và các cấu hình placeholder cho đề tài nghiên cứu
// "Nghiên cứu công dụng phế thải xây dựng công trình sau phá dỡ làm vật liệu cải thiện tính chất đất trồng"

export const projectMeta = {
  title: "Nghiên cứu công dụng phế thải xây dựng công trình sau phá dỡ làm vật liệu cải thiện tính chất đất trồng",
  shortTitle: "Tái Chế Phế Thải Xây Dựng Cải Tạo Đất Trồng",
  code: "ĐTKH-ENV-2026",
  field: "Kỹ thuật Môi trường & Nông nghiệp Tuần hoàn",
  institution: "[Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE) - Khoa/Bộ môn Đang cập nhật]",
  lab: "[Phòng Thí nghiệm Công nghệ Môi trường & Địa kỹ thuật]",
  academicYear: "2025 - 2026",
};

export const heroStats = [
  {
    value: "3+",
    label: "Nhóm phế thải nghiên cứu",
    desc: "Bê tông nghiền, gạch đất nung vụn, vữa xi măng vôi",
  },
  {
    value: "5",
    label: "Giai đoạn thực nghiệm",
    desc: "Từ thu gom, phân loại hạt đến khảo nghiệm sinh học",
  },
  {
    value: "100%",
    label: "Định hướng tuần hoàn",
    desc: "Tái tạo tài nguyên, giảm tải bãi rác chôn lấp đô thị",
  },
  {
    value: "6.2 - 6.8",
    label: "Khoảng pH kỳ vọng",
    desc: "Điều hòa độ chua phèn cho đất trồng nén dẽ",
  },
];

export const problemAspects = [
  {
    id: "cdw-crisis",
    badge: "Thách thức Môi trường Đô thị",
    title: "Áp lực bùng nổ phế thải xây dựng (CDW)",
    description:
      "Tốc độ đô thị hóa nhanh tạo ra hàng triệu tấn phế thải phá dỡ mỗi năm. Phần lớn hiện nay bị đổ trộm hoặc chôn lấp thô sơ, gây lãng phí diện tích, ô nhiễm bụi mịn PM2.5, và tắc nghẽn dòng chảy ngầm.",
    stats: "Chiếm 30-40% tổng lượng chất thải rắn đô thị",
    impact: "Lãng phí nguồn khoáng chất silicat, canxi cacbonat có thể tái chế.",
  },
  {
    id: "soil-degradation",
    badge: "Thoái hóa Thổ nhưỡng",
    title: "Đất trồng đô thị & canh tác bị nén dẽ, chua hóa",
    description:
      "Đất trồng tại nhiều khu vực thâm canh và vùng đất đô thị bị suy giảm độ xốp nghiêm trọng, nén chặt, yếm khí, và tụt pH (chua phèn). Rễ cây khó hô hấp và khả năng giữ dinh dưỡng sụt giảm.",
    stats: "Trên 50% đất thâm canh gặp vấn đề chua phèn và nén dẽ",
    impact: "Tăng chi phí phân bón hóa học và làm cạn kiệt vi sinh vật có lợi.",
  },
  {
    id: "circular-bridge",
    badge: "Nút thắt Khoa học",
    title: "Thiếu giải pháp cấp phối & xử lý chuẩn hóa",
    description:
      "Phế thải xây dựng nếu dùng trực tiếp có thể gây kiềm hóa quá mức do vôi tự do hoặc nhiễm tạp chất. Đề tài tập trung giải quyết quy trình tiền xử lý, phân loại dải hạt và tỷ lệ phối trộn khoa học.",
    stats: "Cần quy chuẩn tỷ lệ hạt (0.5 - 5.0mm) & khử kiềm",
    impact: "Chuyển phế thải thành vật liệu cải tạo đất an toàn và ổn định lâu dài.",
  },
];

export const objectives = [
  {
    number: "01",
    title: "Định lượng & Phân tích thành phần khoáng vật",
    description:
      "Xác định thành phần hóa học (XRF, XRD) của các mẫu bê tông, vữa xi măng và gạch nung sau phá dỡ; đánh giá hàm lượng canxi cacbonat, oxit silic và sàng lọc nguy cơ kim loại nặng.",
    iconName: "Microscope",
    tags: ["Phân tích hóa lý", "XRD / XRF", "Kiểm soát an toàn"],
  },
  {
    number: "02",
    title: "Phân loại cỡ hạt & Tiền xử lý hoạt hóa",
    description:
      "Nghiên cứu dải kích thước hạt tối ưu (0.5mm, 1.0 - 2.0mm, 2.0 - 5.0mm) bằng máy nghiền sàng cơ học; rửa trôi muối kiềm tự do dư thừa nhằm tạo giá thể trơ sinh thái bền vững.",
    iconName: "Layers",
    tags: ["Cấp phối hạt", "Xử lý kiềm", "Ổn định cấu trúc"],
  },
  {
    number: "03",
    title: "Đánh giá cải thiện tính chất vật lý & hóa học đất",
    description:
      "Đo lường sự thay đổi của dung trọng thể tích, độ rỗng thông khí, khả năng giữ ẩm hữu hiệu và diễn biến độ pH khi phối trộn các tỷ lệ phế thải xử lý vào đất đối chứng.",
    iconName: "FlaskConical",
    tags: ["Dung trọng", "Độ xốp dẫn khí", "Cân bằng pH"],
  },
  {
    number: "04",
    title: "Khảo nghiệm sinh học & Đánh giá an toàn thực vật",
    description:
      "Thử nghiệm gieo trồng cây chỉ thị (rau mầm/hoa cảnh quan) trên các công thức đất cải tạo; đánh giá tỷ lệ nảy mầm, tốc độ sinh khối rễ và khả năng tích lũy dưỡng chất.",
    iconName: "Sprout",
    tags: ["Cây trồng chỉ thị", "Sinh khối rễ", "An toàn sinh học"],
  },
];

export const methodologySteps = [
  {
    step: 1,
    title: "Thu gom & Tuyển lựa phế thải",
    shortDesc: "Thu thập mẫu bê tông, gạch, vữa từ các công trình phá dỡ dân dụng.",
    detail:
      "Thu thập đại diện tại các điểm công trình phá dỡ. Loại bỏ triệt để rác tạp, sắt thép, gỗ mục, nhựa và thạch cao lẫn tạp. Phân nhóm thành: (A) Bê tông vụn, (B) Gạch đất sét nung vụn, (C) Vữa trát tường.",
    outputs: "3 nhóm mẫu nguyên liệu đồng nhất thô",
    color: "emerald",
  },
  {
    step: 2,
    title: "Nghiền & Phân cấp hạt cơ học",
    shortDesc: "Nghiền hàm và sàng rây theo dải kích thước tiêu chuẩn.",
    detail:
      "Đưa nguyên liệu qua máy nghiền hàm thí nghiệm, tiếp tục sàng rây tiêu chuẩn để phân chia 3 phân đoạn kích thước: d < 1mm (bột mịn hỗ trợ khoáng), 1 - 2mm (cải thiện mao dẫn), 2 - 5mm (tạo khe rỗng thông khí).",
    outputs: "Vật liệu hạt cấp phối đồng nhất",
    color: "amber",
  },
  {
    step: 3,
    title: "Xử lý tiền hoạt hóa & Rửa kiềm",
    shortDesc: "Ngâm rửa, đo lường pH dịch chiết để khử kiềm tự do.",
    detail:
      "Đối với mẫu vữa và bê tông có tính kiềm ban đầu cao (pH > 10 do Ca(OH)2), tiến hành ngâm rửa nước và ổn định cacbonat hóa tự nhiên để hạ pH về ngưỡng an toàn (pH 7.0 - 7.5) trước khi đưa vào đất.",
    outputs: "Phụ gia khoáng đạt ngưỡng pH an toàn",
    color: "teal",
  },
  {
    step: 4,
    title: "Thiết kế nghiệm thức phối trộn",
    shortDesc: "Phối trộn với đất thoái hóa theo các dải tỷ lệ thể tích.",
    detail:
      "Bố trí thí nghiệm với đất đối chứng (ĐC) và các nghiệm thức bổ sung vật liệu phế thải đã xử lý với tỷ lệ 5%, 10%, 15%, 20% theo thể tích. Đánh giá sự đồng đều và tính ổn định kết tụ.",
    outputs: "5 tổ hợp nghiệm thức đất cải tạo",
    color: "stone",
  },
  {
    step: 5,
    title: "Quan trắc lý hóa & Khảo nghiệm sinh học",
    shortDesc: "Đo đạc chỉ tiêu đất và gieo trồng cây thử nghiệm đối chứng.",
    detail:
      "Định kỳ đo pH, EC, độ ẩm, dung trọng và độ xốp. Tiến hành gieo trồng cây thí nghiệm (cải xanh, hoa cúc cảnh) trong điều kiện buồng nuôi cấy có kiểm soát để theo dõi sinh trưởng thân lá và hệ rễ.",
    outputs: "Bộ số liệu đo đạc thực nghiệm toàn diện",
    color: "green",
  },
];

export const sampleResults = {
  disclaimer:
    "LƯU Ý KHOA HỌC: Các số liệu dưới đây là bộ thông số phân tích mô phỏng / chỉ số phòng thí nghiệm mẫu nhằm minh họa cho quy chuẩn nghiệm thu của đề tài. Dữ liệu thực nghiệm chính thức đang được nhóm nghiên cứu cập nhật liên tục.",
  parameters: [
    {
      name: "Dung trọng thể tích (Bulk Density)",
      before: "1.42 g/cm³ (Đất nén dẽ)",
      after: "1.18 g/cm³ (Phối trộn 15% gạch/bê tông)",
      diff: "-16.9%",
      evaluation: "Cải thiện rõ rệt: Đất tơi xốp hơn, rễ dễ đâm sâu",
      trend: "positive",
    },
    {
      name: "Độ xốp tổng thể (Total Porosity)",
      before: "38.5%",
      after: "51.2%",
      diff: "+33.0%",
      evaluation: "Tăng thể tích lỗ rỗng mao dẫn và khí quyển",
      trend: "positive",
    },
    {
      name: "Độ phản ứng pH (Cân bằng đất chua)",
      before: "pH 4.6 (Đất chua nặng)",
      after: "pH 6.4 (Vùng trung tính lý tưởng)",
      diff: "+1.8 đơn vị pH",
      evaluation: "Khoáng canxi từ vôi vữa đóng vai trò chất điều hòa pH tự nhiên",
      trend: "positive",
    },
    {
      name: "Tốc độ thấm nước bão hòa (Hydraulic Cond.)",
      before: "1.2 cm/h (Thoát nước kém, đọng vũng)",
      after: "4.8 cm/h (Thoát nước tối ưu)",
      diff: "+300%",
      evaluation: "Giảm hẳn hiện tượng ngập úng gốc khi mưa lớn",
      trend: "positive",
    },
  ],
  materialComparison: [
    {
      material: "Gạch đất sét nung nghiền (Crushed Clay Brick)",
      role: "Cung cấp độ xốp vi mao dẫn, giữ ẩm và trao đổi khí",
      recommendedRate: "10% - 15% thể tích",
      keyAdvantage: "Cấu trúc xốp bền vững, không bị mục rữa theo thời gian",
    },
    {
      material: "Bê tông tái chế xử lý rửa (Recycled Concrete Aggregate)",
      role: "Cung cấp khung đỡ hạt thô, ngăn nén dẽ bề mặt",
      recommendedRate: "5% - 10% thể tích",
      keyAdvantage: "Độ bền cơ học cao, tăng cường độ thoát nước tầng rễ",
    },
    {
      material: "Bột khoáng vôi vữa mịn (Mortar Powder)",
      role: "Điều hòa độ chua, bổ sung khoáng Ca và Mg",
      recommendedRate: "2% - 5% (tùy độ chua ban đầu)",
      keyAdvantage: "Thay thế hiệu quả vôi nông nghiệp thương phẩm",
    },
  ],
};

export const environmentalBenefits = [
  {
    title: "Thúc đẩy Kinh tế Tuần hoàn (Circular Economy)",
    description:
      "Tạo vòng đời thứ hai cho phế thải xây dựng, chuyển dịch từ mô hình khai thác - xả thải tuyến tính sang mô hình tuần hoàn khép kín giữa công nghiệp xây dựng và nông nghiệp sinh thái.",
    icon: "Recycle",
  },
  {
    title: "Giảm áp lực bãi chôn lấp & ô nhiễm đô thị",
    description:
      "Mỗi mét khối phế thải được tái sử dụng trực tiếp làm giảm diện tích bãi chôn lấp rác thải rắn, giảm thiểu chi phí vận chuyển và ngăn ngừa nguy cơ phát tán bụi ra cộng đồng.",
    icon: "ShieldCheck",
  },
  {
    title: "Thay thế giá thể khoáng nhập khẩu đắt đỏ",
    description:
      "Gạch nung và bê tông nghiền xốp có tiềm năng thay thế một phần các vật liệu đắt tiền như đá perlite, vermiculite hay đá bọt pumice dùng trong làm vườn đô thị và mái xanh.",
    icon: "Coins",
  },
  {
    title: "Tiềm năng cô lập Carbon gián tiếp",
    description:
      "Bê tông nghiền nhỏ có diện tích bề mặt tiếp xúc lớn, đẩy nhanh quá trình tái cacbonat hóa (hấp thụ CO2 tự nhiên từ không khí để biến Ca(OH)2 thành CaCO3 bền vững).",
    icon: "Leaf",
  },
];

export const potentialApplications = [
  {
    area: "Giá thể mái xanh đô thị (Green Roofs)",
    detail: "Đòi hỏi vật liệu nhẹ, thoát nước nhanh, không bị phân hủy hữu cơ làm sụt lún theo thời gian.",
  },
  {
    area: "Cải tạo đất cây xanh công viên & dải phân cách",
    detail: "Khắc phục triệt để tình trạng đất đô thị bị đầm nén do xe cộ và người đi bộ dẫm đạp.",
  },
  {
    area: "Giá thể ươm cây cảnh quan & vườn ươm lâm nghiệp",
    detail: "Tạo độ thông thoáng tuyệt đối cho bộ rễ non, nâng cao tỷ lệ sống của cây ghép và cây giống.",
  },
  {
    area: "Cải tạo đất nông nghiệp vùng đồi dốc thoái hóa",
    detail: "Tăng khả năng thấm nước tầng sâu, hạn chế xói mòn rửa trôi bề mặt vào mùa mưa lũ.",
  },
];

export const teamMembers = [
  {
    role: "Chủ nhiệm Đề tài",
    name: "[TS. Nguyễn Văn A - Placeholder]",
    title: "Giảng viên / Nhà nghiên cứu chính",
    affiliation: "[Bộ môn Kỹ thuật Môi trường / Khoa Xây dựng - Đang cập nhật]",
    email: "[chuniem.detai@hcmute.edu.vn - Placeholder]",
  },
  {
    role: "Cán bộ Nghiên cứu Phối hợp",
    name: "[ThS. Trần Thị B - Placeholder]",
    title: "Chuyên gia Thổ nhưỡng & Sinh thái đất",
    affiliation: "[Phòng Thí nghiệm Phân tích Môi trường - Đang cập nhật]",
    email: "[nghiencuu.env@hcmute.edu.vn - Placeholder]",
  },
  {
    role: "Nhóm Sinh viên Nghiên cứu Thực nghiệm",
    name: "[Nhóm Sinh viên Khóa 2022-2026 - Placeholder]",
    title: "Thực hiện thí nghiệm & Thu thập dữ liệu",
    affiliation: "[Ngành Công nghệ Kỹ thuật Môi trường - Đang cập nhật]",
    email: "[sinhvien.lab@hcmute.edu.vn - Placeholder]",
  },
];

export const faqItems = [
  {
    question: "Phế thải bê tông và vữa có làm đất bị kiềm hóa quá mức không?",
    answer:
      "Nếu dùng trực tiếp không qua xử lý, vôi tự do trong xi măng có thể làm pH tăng cao. Vì vậy, quy trình nghiên cứu của đề tài bắt buộc bước phân tích pH ban đầu, tiền xử lý rửa hoặc phơi phong hóa cacbonat hóa để đưa pH về mức kiểm soát (6.5 - 7.5) trước khi trộn đất.",
  },
  {
    question: "Có nguy cơ tồn dư kim loại nặng hay chất độc hại trong phế thải không?",
    answer:
      "Đề tài áp dụng quy trình phân loại nghiêm ngặt: chỉ thu nhận phế thải từ kết cấu khối xây dân dụng tiêu chuẩn (bê tông, gạch nung thông thường), tuyệt đối loại bỏ vật liệu từ khu công nghiệp hóa chất, phế thải sơn phủ chì hoặc amiăng, đồng thời kiểm tra sàng lọc mẫu bằng quang phổ XRF.",
  },
  {
    question: "Vật liệu này so với các loại đá bọt nhân tạo thương mại có ưu điểm gì?",
    answer:
      "Ưu điểm lớn nhất là chi phí nguyên liệu gần như bằng không (tận dụng từ nguồn rác phá dỡ đô thị), độ bền vật lý vĩnh cửu không bị xẹp lún như mùn cưa/xơ dừa, và đóng góp trực tiếp vào mục tiêu cắt giảm phát thải rác thải rắn đô thị.",
  },
];
