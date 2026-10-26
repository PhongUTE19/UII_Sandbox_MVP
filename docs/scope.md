# Project Scope & Acceptance Criteria

## 1. MVP Requirements (In Scope)
- **Single Page Application (SPA)**: Landing page khoa học với ngôn ngữ tiếng Việt hoàn chỉnh.
- **Section Structure**:
  1. Header / Navbar (Sticky, logo, link điều hướng smooth scroll, mobile drawer).
  2. Hero Section (Tiêu đề nghiên cứu chính thức, phụ đề, CTA, minh họa sinh thái).
  3. Problem & Motivation (Thực trạng rác thải xây dựng và nhu cầu cải tạo đất).
  4. Research Objectives (4 mục tiêu trọng tâm rõ ràng).
  5. Methodology & Workflow (5 giai đoạn thực nghiệm từ thu gom, nghiền sàng, phối trộn, phân tích đến kiểm nghiệm).
  6. Research Results & Analytics (Bảng dữ liệu và chỉ số mẫu minh họa với nhãn placeholder khoa học minh bạch).
  7. Environmental & Practical Significance (Ý nghĩa tuần hoàn và tiềm năng ứng dụng thực tế).
  8. Research Team & Academic Contact (Thông tin nhóm nghiên cứu dạng placeholder, form liên hệ tương tác client-side).
  9. Footer (Thông tin bản quyền và trích dẫn).
- **Responsive Design**: Hoạt động tối ưu trên mobile (375px+), tablet (768px), và desktop (1280px+).
- **Asset Integrity**: Sử dụng hình ảnh chất lượng cao từ Unsplash hoặc vector SVG an toàn, không có ảnh vỡ hay phụ thuộc ngoài không ổn định.
- **Scientific Honesty**: Không giả mạo kết quả khoa học; sử dụng nhãn rõ ràng cho số liệu giả định/thử nghiệm mô phỏng.

## 2. Explicit Exclusions (Out of Scope)
- Không có backend server (Node.js/Express, Python/FastAPI, v.v.).
- Không có database (PostgreSQL, MongoDB, Supabase, v.v.).
- Không có hệ thống authentication/login.
- Không có AI API integration (OpenAI, Gemini API, Claude API, v.v.).
- Không có containerization / Docker.
- Không thu thập dữ liệu người dùng thực tế lên máy chủ ngoài.

## 3. Acceptance Criteria
- [ ] Ứng dụng chạy mượt mà bằng Vite dev server (`npm run dev`) và build thành công với `npm run build` không lỗi.
- [ ] Toàn bộ 9 section hiển thị đầy đủ, đúng văn phong tiếng Việt học thuật, chuẩn chính tả.
- [ ] Navbar điều hướng cuộn mượt (smooth scroll) đến đúng từng section bằng ID tương ứng.
- [ ] Menu hamburger trên mobile mở/đóng bình thường, tự đóng khi click chuyển section.
- [ ] Không có lỗi console error hay hình ảnh bị vỡ (broken images).
- [ ] Màu sắc đúng định hướng sinh thái: xanh lá, đất nung/khoáng sỏi, nền kem/stone thanh lịch.
- [ ] Tất cả tài liệu theo quy định (`AGENTS.md`, `README.md`, `docs/*.md`) được khởi tạo đồng bộ.
