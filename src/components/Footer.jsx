import React from 'react';
import { Leaf, ArrowUp, ExternalLink, ShieldCheck } from 'lucide-react';
import { projectMeta } from '../data/researchData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Project Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <Leaf className="w-5 h-5 text-emerald-100" />
              </div>
              <div>
                <span className="block text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                  {projectMeta.code}
                </span>
                <span className="block text-base font-bold text-white">
                  Tái Sinh Đất Từ Phế Thải CDW
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              {projectMeta.title}
            </p>

            <div className="text-xs text-stone-400 space-y-1">
              <p><span className="text-stone-300 font-semibold">Đơn vị chủ trì:</span> {projectMeta.institution}</p>
              <p><span className="text-stone-300 font-semibold">Địa điểm thực hiện:</span> {projectMeta.lab}</p>
              <p><span className="text-stone-300 font-semibold">Niên khóa đề tài:</span> {projectMeta.academicYear}</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-stone-200">
              Điều hướng đề tài
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#problem" className="hover:text-emerald-400 transition-colors">
                  Thực trạng & Động lực nghiên cứu
                </a>
              </li>
              <li>
                <a href="#objectives" className="hover:text-emerald-400 transition-colors">
                  4 Mục tiêu khoa học
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-emerald-400 transition-colors">
                  Quy trình thực nghiệm 5 giai đoạn
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-emerald-400 transition-colors">
                  Chỉ số & Kết quả phân tích lab
                </a>
              </li>
              <li>
                <a href="#significance" className="hover:text-emerald-400 transition-colors">
                  Ý nghĩa môi trường & Ứng dụng
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-emerald-400 transition-colors">
                  Nhóm tác giả & Liên hệ học thuật
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Citation Box */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-stone-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Gợi ý trích dẫn học thuật</span>
            </h4>
            <div className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700 font-mono text-[11px] text-stone-300 leading-relaxed select-all">
              Nhóm nghiên cứu đề tài ({projectMeta.academicYear}). <em>"{projectMeta.title}"</em>. {projectMeta.institution}. Mã đề tài: {projectMeta.code}.
            </div>
            <p className="text-[11px] text-stone-400">
              Trang thông tin phục vụ mục đích nghiên cứu, công bố khoa học và chuyển giao công nghệ sinh thái.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} Nhóm Nghiên Cứu Đề Tài Khoa Học. Bản quyền bảo lưu.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white transition-colors cursor-pointer"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
