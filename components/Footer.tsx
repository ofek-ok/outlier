'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import OutlierLogo from './OutlierLogo';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { lang, toggleLang, t, site, isRtl } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#approach', label: t.nav.approach },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#151515] text-[#C8C1B5] border-t border-white/10 py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 pb-10 sm:pb-14 border-b border-white/10">
          
          {/* Logo & Tagline Column (6 cols) */}
          <div className="md:col-span-6 space-y-4 sm:space-y-5">
            <OutlierLogo
              variant="primary"
              theme="light"
              symbolSize={32}
              className="items-start"
            />

            <p className="text-xs sm:text-sm text-[#C8C1B5] max-w-sm leading-relaxed font-normal pt-1 sm:pt-2">
              {lang === 'en' ? site.businessCategoryEn : site.businessCategoryHe}
            </p>

            <p className="text-[11px] sm:text-xs text-[#565A50] max-w-sm leading-relaxed">
              {t.footer.privacyNote}
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3 pt-2 sm:pt-0">
            <h4 className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-[#F3F0E9]">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs uppercase tracking-wider font-mono">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#C8C1B5] hover:text-white transition-colors duration-200 inline-block py-1 sm:py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiries & Network (3 cols) */}
          <div className="md:col-span-3 space-y-3 pt-2 sm:pt-0">
            <h4 className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-[#F3F0E9]">
              {t.footer.contactTitle}
            </h4>
            
            <div className="text-sm space-y-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#565A50] block">
                  {isRtl ? 'פניות ישירות' : 'Inquiries'}
                </span>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-[#F3F0E9] hover:text-white transition-colors font-sans text-xs tracking-wider break-all"
                >
                  {site.contactEmail}
                </a>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-[#565A50] block">
                  {isRtl ? 'רשת מקצועית' : 'Network'}
                </span>
                <a
                  href={site.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C8C1B5] hover:text-white transition-colors uppercase tracking-wider font-mono py-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rtl-flip' : ''}`} />
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={toggleLang}
                  className="inline-flex items-center gap-2 px-4 py-2.5 sm:py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono uppercase text-[#C8C1B5] hover:text-white transition-colors border border-white/10 active:bg-white/20"
                >
                  <span>{lang === 'en' ? 'עברית (RTL)' : 'English (LTR)'}</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#565A50]">
          <div>
            © {new Date().getFullYear()} OUTLIER. {t.footer.copyright}
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#F3F0E9] transition-colors group uppercase tracking-wider text-[11px] py-2"
          >
            <span>{isRtl ? 'לראש העמוד' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
