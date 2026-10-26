import React from 'react';
import { Target, Microscope, Layers, FlaskConical, Sprout, CheckCircle } from 'lucide-react';
import { objectives } from '../data/researchData';

const iconMap = {
  Microscope,
  Layers,
  FlaskConical,
  Sprout,
};

export default function ObjectivesSection() {
  return (
    <section id="objectives" className="py-20 md:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Target className="w-3.5 h-3.5 text-emerald-700" />
            <span>Mục Tiêu Nghiên Cứu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            4 Trọng tâm khoa học được định hướng rõ ràng
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Đề tài kết hợp giữa kỹ thuật vật liệu xây dựng và khoa học thổ nhưỡng nhằm thiết lập quy chuẩn khoa học 
            từ kiểm soát an toàn vật liệu đến chứng minh hiệu quả sinh học trên cây trồng.
          </p>
        </div>

        {/* 4 Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((obj) => {
            const IconComponent = iconMap[obj.iconName] || Target;
            return (
              <div
                key={obj.number}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-emerald-500/70 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-600 text-emerald-700 group-hover:text-white flex items-center justify-center transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-stone-300 font-mono group-hover:text-emerald-700 transition-colors">
                      {obj.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-900 transition-colors">
                    {obj.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {obj.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap gap-2">
                  {obj.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors"
                    >
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
