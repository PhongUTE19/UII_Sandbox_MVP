import React, { useState } from 'react';
import { GitBranch, ArrowRight, CheckCircle2, ChevronRight, Beaker, FileSpreadsheet } from 'lucide-react';
import { methodologySteps } from '../data/researchData';

export default function MethodologySection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = methodologySteps[activeStep];

  return (
    <section id="methodology" className="py-20 md:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-semibold uppercase tracking-wider">
            <GitBranch className="w-3.5 h-3.5 text-teal-700" />
            <span>Phương Pháp & Quy Trình Thực Nghiệm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Quy trình nghiên cứu 5 giai đoạn chuẩn hóa
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Mỗi giai đoạn được thiết kế theo các tiêu chuẩn thí nghiệm vật liệu xây dựng (TCVN / ASTM) 
            và phương pháp khảo nghiệm thổ nhưỡng chuyên sâu nhằm đảm bảo tính lặp lại và an toàn sinh học.
          </p>
        </div>

        {/* Step Navigation Pill Strip */}
        <div className="flex overflow-x-auto pb-4 gap-2 sm:gap-3 justify-start lg:justify-center no-scrollbar mb-10">
          {methodologySteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/20'
                    : 'bg-stone-100 hover:bg-stone-200/80 text-stone-700'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                    isActive ? 'bg-emerald-600 text-white' : 'bg-stone-300 text-stone-700'
                  }`}
                >
                  {step.step}
                </span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="bg-stone-50 rounded-3xl border border-stone-200/90 p-6 sm:p-10 shadow-sm transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Detail */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-bold font-mono uppercase tracking-wider">
                  Giai đoạn 0{current.step} / 05
                </span>
                <span className="text-xs font-semibold text-stone-500">
                  Quy trình chuẩn phòng thí nghiệm
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                {current.title}
              </h3>

              <p className="text-base text-stone-700 leading-relaxed">
                {current.detail}
              </p>

              <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Sản phẩm nghiệm thu của giai đoạn:</span>
                </div>
                <p className="text-sm font-medium text-stone-900">
                  {current.outputs}
                </p>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-lg text-xs font-semibold border border-stone-300 bg-white hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  ← Giai đoạn trước
                </button>
                <button
                  disabled={activeStep === methodologySteps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(methodologySteps.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1"
                >
                  <span>Giai đoạn tiếp theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Process Flow Diagram */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs">
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-stone-400" />
                <span>Toàn bộ lộ trình thực nghiệm</span>
              </h4>

              <div className="space-y-3">
                {methodologySteps.map((step, idx) => {
                  const isCurrent = activeStep === idx;
                  const isPast = activeStep > idx;
                  return (
                    <div
                      key={step.step}
                      onClick={() => setActiveStep(idx)}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-150 flex items-center justify-between ${
                        isCurrent
                          ? 'border-emerald-600 bg-emerald-50/50'
                          : isPast
                          ? 'border-stone-200 bg-stone-50/50 hover:bg-stone-100'
                          : 'border-dashed border-stone-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
                            isCurrent
                              ? 'bg-emerald-700 text-white'
                              : isPast
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-stone-200 text-stone-600'
                          }`}
                        >
                          {step.step}
                        </span>
                        <div>
                          <div className={`text-xs font-bold ${isCurrent ? 'text-emerald-950' : 'text-stone-800'}`}>
                            {step.title}
                          </div>
                          <div className="text-[11px] text-stone-500 line-clamp-1">
                            {step.shortDesc}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isCurrent ? 'text-emerald-700' : 'text-stone-300'}`} />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
