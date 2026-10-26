import React from 'react';
import { AlertTriangle, TrendingDown, Layers, HelpCircle, CheckCircle2, Factory, Trees } from 'lucide-react';
import { problemAspects } from '../data/researchData';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
            <span>Thực Trạng & Động Lực Nghiên Cứu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Gánh nặng phế thải xây dựng và sự suy thoái của đất trồng
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Sự phát triển đô thị nhanh chóng đang tạo ra bài toán kép: hàng triệu tấn xà bần phá dỡ không có nơi chứa, 
            trong khi đất trồng đô thị và nông nghiệp đối mặt với tình trạng chai cứng, nén chặt và yếm khí nghiêm trọng.
          </p>
        </div>

        {/* 3 Main Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemAspects.map((aspect, idx) => (
            <div
              key={aspect.id}
              className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 hover:border-amber-400/80 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-md">
                    {aspect.badge}
                  </span>
                  <span className="text-xs font-mono font-semibold text-stone-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-900 leading-snug">
                  {aspect.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {aspect.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-200/80 space-y-2">
                <div className="text-xs font-semibold text-stone-500 uppercase">
                  Chỉ số thực tế:
                </div>
                <div className="text-sm font-semibold text-stone-800 flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                  <span>{aspect.stats}</span>
                </div>
                <div className="text-xs text-stone-500 italic mt-1">
                  {aspect.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Callout: Linear vs Circular Soil Economy */}
        <div className="mt-16 bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-wider">
                Giải pháp cốt lõi của đề tài
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-100">
                Chuyển dịch từ "Xả thải chôn lấp" sang "Vật liệu tái sinh giá trị cao"
              </h3>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                Thay vì coi bê tông nghiền và gạch vỡ là rác thải trơ cần tống khứ, đề tài khai thác đặc tính 
                cấu trúc rỗng của gạch đất nung và nguồn canxi silicat trong xi măng để chế tạo 
                hạt phụ gia điều hòa lý hóa tính cho đất thoái hóa.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700">
                <Factory className="w-6 h-6 text-amber-400 mb-2" />
                <div className="text-xs font-semibold text-stone-400 uppercase">Mô hình cũ</div>
                <div className="text-sm font-bold text-stone-200 mt-1">Chôn lấp tuyến tính</div>
                <div className="text-xs text-stone-400 mt-1">Quá tải bãi rác, tốn diện tích, ô nhiễm bụi đất</div>
              </div>

              <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-700/60">
                <Trees className="w-6 h-6 text-emerald-400 mb-2" />
                <div className="text-xs font-semibold text-emerald-300 uppercase">Mô hình đề tài</div>
                <div className="text-sm font-bold text-emerald-200 mt-1">Kinh tế tuần hoàn</div>
                <div className="text-xs text-emerald-100/80 mt-1">Đất tơi xốp, cân bằng pH, giảm phát thải carbon</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
