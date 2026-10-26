# Architecture & Technology Decisions

## 1. Decision Records

### ADR-01: Framework Choice — React 19 + Vite 6
- **Context**: Cần xây dựng landing page khoa học thẩm mỹ cao, tốc độ tải nhanh, module hóa linh hoạt.
- **Decision**: Sử dụng React với Vite.
- **Rationale**: Vite cung cấp tốc độ HMR tức thì, zero-configuration build tối ưu bundle, hệ sinh thái React cho phép chia nhỏ các section thành components độc lập, dễ bảo trì.

### ADR-02: Styling — Tailwind CSS v4 with `@tailwindcss/vite`
- **Context**: Yêu cầu từ spec sử dụng Tailwind CSS v4 với Vite plugin chính thức.
- **Decision**: Tích hợp `@tailwindcss/vite` trực tiếp vào `vite.config.js` mà không cần file `postcss.config.js` truyền thống.
- **Rationale**: Tailwind v4 cung cấp engine CSS thuần túy hiệu năng cao, import đơn giản qua `@import "tailwindcss";`, tương thích tối đa với tiêu chuẩn CSS mới.

### ADR-03: Iconography — Lucide React
- **Context**: Cần hệ thống biểu tượng kỹ thuật và sinh thái (lá cây, tòa nhà, phân tích, kính hiển vi, nước, đất).
- **Decision**: Sử dụng `lucide-react`.
- **Rationale**: Icon SVG dạng component, cây rung (tree-shaking) tự động, phong cách nét vẽ (stroke) hiện đại, sắc nét và nhẹ.

### ADR-04: Static Content Architecture & Scientific Disclaimers
- **Context**: Dự án không có backend hoặc cơ sở dữ liệu và đang trong quá trình nghiên cứu, dữ liệu cần có thể chỉnh sửa dễ dàng.
- **Decision**: Tập trung hóa dữ liệu nội dung trong một file cấu hình hoặc component độc lập (`src/data/researchData.js`), sử dụng nhãn rõ ràng cho các số liệu minh họa/placeholder.
- **Rationale**: Giúp người dùng hoặc nhóm nghiên cứu dễ dàng cập nhật thông số thí nghiệm thật sau này mà không cần động vào cấu trúc layout của UI.

### ADR-05: Image Assets
- **Context**: Cần hình ảnh chuyên nghiệp về phế thải xây dựng, đất trồng, cây mầm, phòng thí nghiệm môi trường.
- **Decision**: Sử dụng Unsplash photo links tuyển chọn chất lượng cao có fallback tự động và tối ưu responsive.
- **Rationale**: Tránh làm phình dung lượng repository bằng binary images lớn, đảm bảo tính thẩm mỹ cao ngay lần mở đầu tiên.
