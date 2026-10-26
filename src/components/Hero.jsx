import React from 'react';
import { ArrowDown, Sparkles, Beaker, Recycle, ShieldCheck, ArrowRight } from 'lucide-react';
import { projectMeta, heroStats } from '../data/researchData';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-stone-50 border-b border-stone-200/80">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-emerald-200/40 via-green-100/30 to-amber-100/30 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200/20 blur-2xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Meta Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-medium shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Đề tài Nghiên cứu Khoa học & Công nghệ Môi trường 2025–2026</span>
            </div>

            {/* Main Research Title (H1) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight lg:leading-[1.18]">
              Nghiên cứu công dụng{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-amber-700 to-amber-900 underline decoration-amber-500/40 decoration-wavy decoration-2">
                phế thải xây dựng
              </span>{' '}
              công trình sau phá dỡ làm vật liệu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-green-700 to-teal-800">
                cải thiện tính chất đất trồng
              </span>
            </h1>

            {/* Subtitle / Executive Summary */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              Nghiên cứu đánh giá tiềm năng tuần hoàn của xà bần, bê tông nghiền và gạch nung sau phá dỡ (CDW) 
              thông qua quy trình tiền xử lý, phân cấp hạt và phối trộn khoa học nhằm giảm độ nén chặt, 
              tăng độ thoáng khí và điều hòa độ pH cho đất trồng đô thị và nông nghiệp bền vững.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#methodology"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-emerald-800 hover:bg-emerald-900 shadow-md shadow-emerald-950/15 hover:shadow-lg transition-all duration-200 active:scale-98"
              >
                <span>Xem quy trình thực nghiệm</span>
                <ArrowRight className="w-4 h-4 text-emerald-200" />
              </a>

              <a
                href="#results"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-300 shadow-xs hover:border-stone-400 transition-all duration-200"
              >
                <Beaker className="w-4 h-4 text-amber-700" />
                <span>Số liệu mô phỏng thí nghiệm</span>
              </a>
            </div>

            {/* Institution metadata line */}
            <div className="pt-2 text-xs sm:text-sm text-stone-500 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="font-medium text-stone-700">Đơn vị:</span>
              <span>{projectMeta.institution}</span>
            </div>
          </div>

          {/* Hero Visual Card Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-600/30 to-emerald-600/30 rounded-3xl blur-md -z-10" />

              {/* Main Visual Box */}
              <div className="bg-white rounded-2xl border border-stone-200/90 shadow-xl overflow-hidden p-3 sm:p-4">
                
                {/* Visual Imagery */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80"
                    alt="Cây non sinh trưởng trên nền giá thể tái chế sinh thái"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                  
                  {/* Floating Badges on Image */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-stone-900/80 backdrop-blur-md border border-stone-700/60 text-xs font-medium text-emerald-300 flex items-center gap-1.5">
                    <Recycle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Mô hình Kinh tế Tuần hoàn</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-mono text-emerald-300 uppercase tracking-wider mb-1">
                      Chuyển hóa phế phẩm thành tài nguyên
                    </p>
                    <p className="text-sm font-medium leading-snug line-clamp-2">
                      Gạch nung & bê tông nghiền phân cấp kích thước 0.5 – 5.0mm tạo cấu trúc vi mao dẫn lý tưởng cho hệ rễ.
                    </p>
                  </div>
                </div>

                {/* Sub-cards showing contrast */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-left">
                  <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200/60">
                    <span className="block text-xs font-semibold text-amber-900 uppercase">
                      Đầu vào nghiên cứu
                    </span>
                    <span className="text-xs text-stone-600 leading-tight block mt-1">
                      Xà bần bê tông, vữa xi măng & gạch vỡ sau phá dỡ
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/60">
                    <span className="block text-xs font-semibold text-emerald-900 uppercase">
                      Mục tiêu đầu ra
                    </span>
                    <span className="text-xs text-stone-600 leading-tight block mt-1">
                      Đất tơi xốp, giàu khoáng chất, rễ cây thông khí tối ưu
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Hero Stats Strip */}
        <div className="mt-14 pt-10 border-t border-stone-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {heroStats.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-xs p-5 rounded-xl border border-stone-200/70 hover:border-emerald-300 transition-colors shadow-2xs text-left"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-mono tracking-tight text-emerald-800">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-stone-800 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-stone-500 mt-1 leading-normal">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
