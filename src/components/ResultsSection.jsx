import React from 'react';
import { BarChart3, AlertCircle, ArrowUp, ArrowDown, Info, ShieldAlert, Sparkles, Check } from 'lucide-react';
import { sampleResults } from '../data/researchData';

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 md:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-semibold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-blue-700" />
            <span>Kết Quả & Phân Tích Thực Nghiệm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Chỉ số cơ lý hóa và mô hình đánh giá
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Khảo sát sự biến thiên của các đặc tính thổ nhưỡng trước và sau khi bổ sung thành phần khoáng phế thải xây dựng qua xử lý.
          </p>
        </div>

        {/* Prominent Scientific Disclaimer / Placeholder Notice */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-amber-50/90 border-2 border-amber-300 text-amber-950 flex items-start gap-3 shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <span className="font-bold uppercase tracking-wider block sm:inline mr-1 text-amber-900">
              [Thông báo tính minh bạch khoa học - Placeholder]:
            </span>
            {sampleResults.disclaimer}
          </div>
        </div>

        {/* 4 Core Soil Parameters Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sampleResults.parameters.map((param, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                    Chỉ số 0{idx + 1}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {param.diff.startsWith('+') ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                    {param.diff}
                  </span>
                </div>

                <h3 className="text-base font-bold text-stone-900 mb-4 leading-snug">
                  {param.name}
                </h3>

                <div className="space-y-2 mb-4 text-xs font-mono">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-stone-50 border border-stone-100">
                    <span className="text-stone-500">Đối chứng (Chưa trộn):</span>
                    <span className="font-semibold text-stone-800">{param.before}</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-emerald-50/70 border border-emerald-100">
                    <span className="text-emerald-800 font-semibold">Sau phối trộn:</span>
                    <span className="font-bold text-emerald-950">{param.after}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 text-xs text-stone-600 leading-relaxed italic">
                {param.evaluation}
              </div>
            </div>
          ))}
        </div>

        {/* Material Characteristics Matrix */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                Đặc tính và vai trò các nhóm vật liệu CDW
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                Tỷ lệ phối trộn được khuyến nghị sau khi sàng lọc kích cỡ hạt d = 0.5 – 5.0mm
              </p>
            </div>
            <span className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-700 font-mono">
              Quy chuẩn cấp phối lab
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleResults.materialComparison.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-stone-50/70 border border-stone-200 hover:border-emerald-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold font-mono text-emerald-800 uppercase tracking-wider mb-2">
                    Vật liệu 0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 mb-2 leading-tight">
                    {item.material}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
                    <span className="font-semibold text-stone-800">Vai trò sinh thái: </span>
                    {item.role}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-stone-200/80">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500">Tỷ lệ thử nghiệm:</span>
                    <span className="font-mono font-bold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
                      {item.recommendedRate}
                    </span>
                  </div>
                  <div className="text-xs text-stone-600 flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item.keyAdvantage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scientific Note */}
          <div className="mt-8 pt-6 border-t border-stone-200 text-xs text-stone-500 flex items-center gap-2">
            <Info className="w-4 h-4 text-stone-400 shrink-0" />
            <span>
              Tất cả các mẫu thử nghiệm đều tuân thủ việc loại bỏ sơn gốc chì, nhựa đường và tạp chất hữu cơ trước khi nghiền sàng.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
