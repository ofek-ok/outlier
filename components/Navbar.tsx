'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import OutlierLogo from './OutlierLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLang, t, isRtl } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-[#151515]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-sm'
          : 'bg-transparent py-6 sm:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-stone-400 rounded-sm"
            aria-label="OUTLIER - Home"
          >
            <OutlierLogo
              variant="secondary"
              theme="light"
              symbolSize={30}
              className="scale-90 sm:scale-100 origin-left"
            />
          </a>

          {/* Minimalist Desktop Navigation */}
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

          {/* Language Switcher & Direct CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={toggleLang}
              className="text-xs tracking-widest font-mono uppercase text-[#C8C1B5] hover:text-white transition-colors focus:outline-none"
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

          {/* Mobile Menu Trigger & Language Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLang}
              className="text-[11px] font-mono uppercase px-2.5 py-1 rounded border border-white/20 text-[#DCD4C7]"
              aria-label="Toggle language"
            >
              {lang === 'en' ? 'HE' : 'EN'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#F3F0E9] hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#151515] border-b border-white/10 px-6 py-8 backdrop-blur-xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-5 text-sm tracking-widest uppercase font-medium">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-start py-2 text-[#DCD4C7] hover:text-white border-b border-white/5 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#F3F0E9] text-[#252724] font-semibold text-xs tracking-wider uppercase"
              >
                <span>{t.nav.ctaButton}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rtl-flip' : ''}`} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
