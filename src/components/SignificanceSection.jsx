import React, { useState } from 'react';
import { Globe, Recycle, ShieldCheck, Coins, Leaf, ChevronDown, ChevronUp, Building2, Trees, Flower2, Mountain } from 'lucide-react';
import { environmentalBenefits, potentialApplications, faqItems } from '../data/researchData';

const benefitIcons = {
  Recycle,
  ShieldCheck,
  Coins,
  Leaf,
};

const appIcons = [Building2, Trees, Flower2, Mountain];

export default function SignificanceSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="significance" className="py-20 md:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 text-emerald-700" />
            <span>Ý Nghĩa Môi Trường & Ứng Dụng Thực Tiễn</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Giá trị sinh thái và tiềm năng ứng dụng tuần hoàn
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Kết nối mục tiêu xử lý chất thải đô thị với nhu cầu tái tạo đất trồng xanh, 
            góp phần vào chiến lược giảm phát thải ròng (Net Zero) và bảo tồn tài nguyên đất.
          </p>
        </div>

        {/* 4 Environmental Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {environmentalBenefits.map((item, idx) => {
            const Icon = benefitIcons[item.icon] || Leaf;
            return (
              <div
                key={idx}
                className="bg-stone-50 rounded-2xl p-6 border border-stone-200 hover:border-emerald-500/80 transition-all duration-300 hover:shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Potential Applications Grid */}
        <div className="bg-gradient-to-br from-emerald-900 via-green-900 to-stone-900 rounded-3xl text-white p-6 sm:p-10 mb-16 shadow-xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-300">
              Không gian triển khai tiềm năng
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
              4 Lĩnh vực ứng dụng thực tiễn được định hướng
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {potentialApplications.map((app, idx) => {
              const AppIcon = appIcons[idx] || Trees;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 hover:bg-white/15 transition-colors"
                >
                  <AppIcon className="w-8 h-8 text-emerald-300 mb-3" />
                  <h4 className="text-base font-bold text-white mb-2">
                    {app.area}
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {app.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scientific FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
              Giải đáp các câu hỏi học thuật & an toàn
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Làm rõ các lo ngại kỹ thuật về kiềm hóa, kim loại nặng và tính an toàn cây trồng
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-stone-200 overflow-hidden bg-white shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-stone-800 hover:text-emerald-800 hover:bg-stone-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base">{item.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-emerald-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
