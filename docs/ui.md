# UI Design Specification

## 1. Visual Direction & Aesthetic
- **Concept**: Khoa học môi trường hiện đại (Modern Environmental Science & Circular Bio-Architecture).
- **Tone**: Uy tín, khoa học, chỉn chu, tươi sáng và bền vững.
- **Mood**: Sự giao thoa giữa kỹ thuật phá dỡ xây dựng (bê tông, đá sỏi, cấu trúc rắn) và sự tái sinh màu mỡ của đất trồng & cây xanh.

## 2. Design Tokens & Palette
- **Primary / Eco Green**: `#15803d` (Green 700) to `#166534` (Green 800) – đại diện cho nông nghiệp sinh thái & sự hồi sinh xanh.
- **Accent Emerald / Jade**: `#059669` (Emerald 600) & `#10b981` (Emerald 500) – điểm nhấn cho badge, icon highlights, CTA.
- **Earth / Terra Cotta / Mineral Tones**: `#b45309` (Amber 700), `#78350f` (Amber 900), `#57534e` (Stone 600) – đại diện cho khoáng chất vôi, gạch gốm nghiền và thổ nhưỡng.
- **Backgrounds**:
  - Main background: `#fafaf9` (Stone 50) và `#f4f4f5` (Zinc 100)
  - Card & Glass background: `#ffffff` với đường viền tinh tế `#e7e5e4` (Stone 200) hoặc backdrop blur mờ ảo.
- **Text colors**:
  - Heading & Primary text: `#1c1917` (Stone 900)
  - Secondary / Body text: `#44403c` (Stone 700) và `#78716c` (Stone 500)

## 3. Typography
- Font Family: Inter / Be Vietnam Pro / Segoe UI, sans-serif.
- Strong typographic scale:
  - Hero H1: 2.75rem – 3.75rem (font-extrabold / bold, tracking-tight)
  - Section Titles: 2rem – 2.5rem (font-bold)
  - Subheadings & Cards: 1.125rem – 1.35rem (font-semibold)
  - Body: 1rem (line-height 1.7)

## 4. Components & Layout Breakdown
1. **Header / Navbar**:
   - Sticky navbar với hiệu ứng backdrop-blur mờ tinh tế.
   - Logo sinh thái, tên viết tắt đề tài, liên kết điều hướng mượt mà (smooth scrolling): Giới thiệu, Đặt vấn đề, Mục tiêu, Quy trình, Kết quả, Ý nghĩa, Nhóm nghiên cứu.
2. **Hero Section**:
   - Tiêu đề nghiên cứu chính thức nổi bật, badge "Đề tài Nghiên cứu Khoa học & Công nghệ".
   - Đoạn tóm tắt định hướng, nút kêu gọi hành động (CTA) "Xem quy trình nghiên cứu" & "Tìm hiểu kết quả".
   - Khung hình ảnh/đồ họa minh họa chất lượng cao kết hợp giữa phế thải bê tông/gạch nghiền và cây mầm phát triển.
3. **Problem & Motivation (Đặt vấn đề & Thực trạng)**:
   - Thống kê về phế thải xây dựng đô thị (CDW) và thoái hóa đất nông nghiệp.
   - Thẻ so sánh (Thách thức môi trường vs. Cơ hội tuần hoàn).
4. **Research Objectives (Mục tiêu nghiên cứu)**:
   - Các trụ cột mục tiêu: Phân tích thành phần, Thử nghiệm tỷ lệ phối trộn, Đánh giá sinh trưởng thực vật, Tối ưu hóa chi phí.
5. **Experimental Methodology (Quy trình thực nghiệm)**:
   - Timeline/bước quy trình tương tác: Thu gom & Phân loại -> Nghiền sàng đồng nhất -> Phối trộn giá thể -> Kiểm tra tính chất đất -> Thử nghiệm nảy mầm/trồng cây.
6. **Research Results (Kết quả & Dữ liệu thực nghiệm)**:
   - Thẻ hiển thị chỉ số cơ lý hóa (Độ pH, Độ rỗng - porosity, Dung trọng - bulk density, Khả năng trao đổi cation CEC) với nhãn `[Dữ liệu minh họa / Đang trong pha kiểm chuẩn]`.
7. **Significance & Application (Ý nghĩa & Ứng dụng)**:
   - Lợi ích 3 chiều: Môi trường (giảm chôn lấp), Kinh tế (vật liệu chi phí thấp), Nông nghiệp đô thị (công viên, mái xanh, vườn hoa).
8. **Research Team & Contact**:
   - Thẻ thành viên nhóm nghiên cứu với placeholder rõ ràng.
   - Form liên hệ / gửi phản hồi học thuật (client-side form với thông báo thành công).
9. **Footer**:
   - Bản quyền học thuật, liên kết nhanh, ghi chú bản quyền và trích dẫn khoa học.

## 5. Responsive Behavior
- Desktop (>= 1024px): Bố cục đa cột (3-4 cột), ảnh hero song song nội dung.
- Tablet (768px - 1023px): 2 cột, menu điều hướng co giãn.
- Mobile (< 768px): 1 cột, menu hamburger di động trượt mượt mà, tối ưu kích thước cảm ứng.
