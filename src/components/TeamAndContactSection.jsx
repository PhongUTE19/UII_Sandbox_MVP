import React, { useState } from 'react';
import { Users, Mail, Send, CheckCircle2, UserCheck, School, MessageSquare, AlertCircle } from 'lucide-react';
import { teamMembers, projectMeta } from '../data/researchData';

export default function TeamAndContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    topic: 'Hợp tác nghiên cứu',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert('Vui lòng điền đầy đủ các trường bắt buộc (Họ tên, Email, Nội dung liên hệ).');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="team" className="py-20 md:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-emerald-700" />
            <span>Nhóm Nghiên Cứu & Liên Hệ Học Thuật</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Đội ngũ thực hiện & Kết nối trao đổi khoa học
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Đề tài được thực hiện bởi nhóm nghiên cứu kỹ thuật môi trường và thổ nhưỡng với mong muốn 
            kết nối cùng các nhà khoa học, doanh nghiệp vật liệu và đơn vị nông nghiệp đô thị.
          </p>
        </div>

        {/* Team Members Cards (Placeholders clearly tagged) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-6">
            <UserCheck className="w-4 h-4 text-emerald-700" />
            <span>Thành viên hội đồng nghiên cứu đề tài</span>
            <span className="text-[11px] text-amber-700 bg-amber-100 px-2 py-0.5 rounded font-mono">
              [Thông tin Placeholder - Có thể cập nhật]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs hover:shadow-md hover:border-emerald-500/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-stone-100 text-stone-700 font-bold font-mono text-lg flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>

                  <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                    {member.role}
                  </span>

                  <h3 className="text-lg font-bold text-stone-900 mt-3 mb-1">
                    {member.name}
                  </h3>

                  <p className="text-xs font-medium text-stone-500 mb-3">
                    {member.title}
                  </p>

                  <div className="text-xs text-stone-600 space-y-1 pt-3 border-t border-stone-100">
                    <div className="flex items-start gap-1.5">
                      <School className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                      <span>{member.affiliation}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-stone-500">
                      <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{member.email}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-400 italic">
                  * Vị trí dành cho nhóm tác giả đề tài
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact" className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                Kênh liên hệ học thuật
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Gửi câu hỏi hoặc đề xuất hợp tác
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Chúng tôi hoan nghênh mọi góp ý phản biện khoa học, đề xuất phối hợp thử nghiệm mẫu 
                hoặc tài trợ thiết bị đo kiểm tra chuyên sâu từ các viện nghiên cứu và doanh nghiệp.
              </p>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2 text-stone-600">
                <div className="font-semibold text-stone-800">Thông tin địa chỉ phòng thí nghiệm:</div>
                <p>{projectMeta.lab}</p>
                <p>{projectMeta.institution}</p>
                <p className="font-mono text-emerald-800">Email: lienhe.nghiencuu@hcmute.edu.vn (Placeholder)</p>
              </div>
            </div>

            {/* Interactive Form Column */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">
                    Gửi thông tin liên hệ thành công!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Cảm ơn bạn <span className="font-semibold">{formState.name}</span>. Yêu cầu trao đổi về chủ đề "{formState.topic}" đã được ghi nhận tại giao diện nghiên cứu đề tài.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', organization: '', topic: 'Hợp tác nghiên cứu', message: '' });
                    }}
                    className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-700 text-white hover:bg-emerald-800 transition-colors"
                  >
                    Gửi thêm câu hỏi khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Họ và tên <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="VD: TS. Nguyễn Văn B"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Email liên lạc <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="VD: email@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Đơn vị / Cơ quan công tác
                      </label>
                      <input
                        type="text"
                        value={formState.organization}
                        onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                        placeholder="VD: Viện Khoa học Thổ nhưỡng"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Mục đích liên hệ
                      </label>
                      <select
                        value={formState.topic}
                        onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent bg-white transition-all"
                      >
                        <option value="Hợp tác nghiên cứu">Hợp tác nghiên cứu</option>
                        <option value="Trao đổi dữ liệu học thuật">Trao đổi dữ liệu học thuật</option>
                        <option value="Đề xuất thử nghiệm thực tế">Đề xuất thử nghiệm thực tế</option>
                        <option value="Khác">Câu hỏi khác</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Nội dung tin nhắn <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Nhập nội dung câu hỏi hoặc phản hồi học thuật tại đây..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-emerald-800 hover:bg-emerald-900 shadow-sm transition-all duration-150 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-emerald-200" />
                    <span>Gửi thông tin trao đổi</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
