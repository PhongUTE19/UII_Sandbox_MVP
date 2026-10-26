# Verification & Test Checklist

## 1. Automated Verification Commands

| Command | Mục đích | Kết quả thực tế | Trạng thái |
|---|---|---|---|
| `npm run build` | Kiểm tra toàn vẹn JSX, module resolution, bundle CSS Tailwind v4 | Đóng gói thành công toàn bộ 1,943 modules trong 730ms, không phát sinh bất kỳ lỗi cú pháp hay import nào (`dist/index.html`: 1.51 kB, `dist/assets/index-*.css`: 55.43 kB, `dist/assets/index-*.js`: 293.58 kB) | **PASSED** |
| `npm install` | Cài đặt và kiểm tra tính tương thích của dependencies | Cài đặt hoàn tất sạch, không xung đột gói (`tailwindcss`, `@tailwindcss/vite`, `lucide-react`) | **PASSED** |

---

## 2. Manual UI & Functional Test Cases

| STT | Hạng mục kiểm tra | Mô tả thao tác | Kết quả kỳ vọng | Trạng thái ghi nhận |
|---|---|---|---|---|
| TC-01 | Navbar Sticky & Links | Nhấp vào các link điều hướng (Vấn đề, Mục tiêu, Quy trình, Kết quả, Ý nghĩa, Nhóm, Liên hệ) | Màn hình cuộn mượt (smooth scroll) đến đúng section tương ứng | **Unverified (Chờ kiểm tra trình duyệt ngoài)** |
| TC-02 | Mobile Menu Hamburger | Thu nhỏ màn hình < 768px, nhấn mở icon hamburger | Drawer menu xuất hiện, nhấn vào link thì cuộn đến vị trí và menu tự đóng | **Unverified (Chờ kiểm tra trình duyệt ngoài)** |
| TC-03 | Hero Section CTAs | Nhấn nút "Xem quy trình thực nghiệm" và "Số liệu mô phỏng thí nghiệm" | Cuộn chính xác đến #methodology và #results | **Unverified (Chờ kiểm tra trình duyệt ngoài)** |
| TC-04 | Methodology Interactive Steps | Chuyển đổi giữa các Giai đoạn 01 đến 05 trong quy trình thực nghiệm | Cập nhật chi tiết mô tả, sản phẩm đầu ra và lộ trình tương ứng | **Code verified / UI Unverified** |
| TC-05 | Results Transparency Notice | Kiểm tra nội dung cảnh báo tính minh bạch khoa học | Hiển thị rõ ràng nhãn `[Thông báo tính minh bạch khoa học - Placeholder]` | **PASSED (Xác minh qua mã nguồn & bundle)** |
| TC-06 | Interactive FAQ Accordion | Nhấp mở/đóng các câu hỏi kỹ thuật về độ kiềm và kim loại nặng | Đóng/mở mượt mà từng câu hỏi độc lập | **Code verified / UI Unverified** |
| TC-07 | Interactive Contact Form | Nhập họ tên, email, tin nhắn và nhấn gửi | Hiển thị thông báo gửi thành công và cho phép nhập câu hỏi mới | **Code verified / UI Unverified** |
| TC-08 | Responsive Layout & Visual Hierarchy | Kiểm tra giao diện trên Desktop, Tablet, Mobile | Đảm bảo tính cân đối, không tràn viền ngang | **Code verified / UI Unverified** |

---

## 3. Ghi chú về Browser Verification
- Trình quản lý trình duyệt tự động trong môi trường sandbox gặp lỗi tải driver (Playwright download 404). Tuân thủ nguyên tắc liêm chính khoa học và quy tắc `AGENTS.md`: *Không ngụy tạo hoặc khẳng định đã kiểm thử trình duyệt khi chưa thực hiện trực tiếp*.
- Đề xuất người dùng khởi chạy `npm run dev` trên trình duyệt máy tính cá nhân để trải nghiệm trực quan.
