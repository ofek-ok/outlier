'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import OutlierLogo from './OutlierLogo';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLang, t, isRtl } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#approach', label: t.nav.approach },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mobileMenuOpen
            ? 'bg-[#151515] border-b border-white/10 py-4'
            : scrolled
            ? 'bg-[#151515]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-md shadow-black/20'
            : 'bg-transparent py-5 sm:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="group flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-400 rounded-sm"
              aria-label="OUTLIER - Home"
            >
              <OutlierLogo
                variant="secondary"
                theme="light"
                symbolSize={26}
                className="scale-90 sm:scale-100 origin-left"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs sm:text-[13px] tracking-widest uppercase font-medium text-[#DCD4C7]">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-white transition-colors duration-200 py-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={toggleLang}
                className="text-xs tracking-widest font-mono uppercase text-[#C8C1B5] hover:text-white transition-colors focus:outline-none px-2 py-1"
                title={lang === 'en' ? 'עבור לעברית' : 'Switch to English'}
                aria-label="Toggle language"
              >
                <span className={lang === 'en' ? 'text-white font-semibold' : 'opacity-60'}>EN</span>
                <span className="mx-1.5 opacity-40">|</span>
                <span className={lang === 'he' ? 'text-white font-semibold' : 'opacity-60'}>HE</span>
              </button>

              <button
                onClick={() => handleNavClick('#contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs tracking-wider uppercase font-medium text-[#252724] bg-[#F3F0E9] hover:bg-white active:scale-[0.98] transition-all duration-200"
              >
                <span>{t.nav.ctaButton}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rtl-flip' : ''}`} />
              </button>
            </div>

            {/* Mobile Actions: Language Quick Pill + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleLang}
                className="inline-flex items-center gap-1 text-[11px] font-mono uppercase px-2.5 py-1.5 rounded-full border border-white/20 text-[#DCD4C7] bg-white/5 active:bg-white/10 transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="w-3 h-3 text-[#C8C1B5]" />
                <span>{lang === 'en' ? 'עב' : 'EN'}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#F3F0E9] hover:text-white focus:outline-none rounded-lg active:bg-white/10 transition-colors"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#151515] pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-start py-4 text-lg font-serif-headline tracking-wide text-[#F3F0E9] border-b border-white/10 active:text-[#C8C1B5] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#565A50]">→</span>
              </button>
            ))}
          </nav>

          {/* Drawer Footer Actions */}
          <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#F3F0E9] text-[#252724] font-medium text-xs tracking-widest uppercase active:scale-[0.98] transition-all shadow-lg"
            >
              <span>{t.nav.ctaButton}</span>
              <ArrowUpRight className={`w-4 h-4 ${isRtl ? 'rtl-flip' : ''}`} />
            </button>

            <div className="flex items-center justify-between text-xs text-[#565A50] font-mono pt-2">
              <span>OUTLIER · ADVISORY</span>
              <button
                onClick={toggleLang}
                className="underline underline-offset-4 text-[#C8C1B5]"
              >
                {lang === 'en' ? 'עבור לעברית (RTL)' : 'Switch to English (LTR)'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
