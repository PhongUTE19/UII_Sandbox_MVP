import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, ArrowUpRight, BookOpen } from 'lucide-react';
import { projectMeta } from '../data/researchData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vấn đề', href: '#problem' },
    { name: 'Mục tiêu', href: '#objectives' },
    { name: 'Quy trình', href: '#methodology' },
    { name: 'Kết quả', href: '#results' },
    { name: 'Ý nghĩa', href: '#significance' },
    { name: 'Nhóm nghiên cứu', href: '#team' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-sm py-3'
          : 'bg-stone-50/90 backdrop-blur-md py-4 border-b border-stone-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Branding */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-green-800 flex items-center justify-center text-white shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform duration-200">
              <Leaf className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-emerald-800 font-mono">
                {projectMeta.code}
              </span>
              <span className="block text-sm sm:text-base font-bold text-stone-900 tracking-tight leading-tight line-clamp-1">
                Tái Sinh Đất Từ Phế Thải CDW
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-stone-600 hover:text-emerald-800 hover:bg-emerald-50/80 transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#methodology"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm hover:shadow transition-all duration-150 active:scale-95"
            >
              <BookOpen className="w-4 h-4 text-emerald-200" />
              <span>Xem Nghiên Cứu</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-stone-50/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider px-3 mb-2">
            Mục lục đề tài
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-stone-700 hover:text-emerald-800 hover:bg-emerald-50 active:bg-emerald-100 transition-colors"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-4 h-4 text-stone-400" />
            </a>
          ))}
          <div className="pt-3 border-t border-stone-200">
            <a
              href="#methodology"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-emerald-700 text-white shadow hover:bg-emerald-800 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Khám Phá Nghiên Cứu</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
