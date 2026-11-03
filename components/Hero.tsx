'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const { t, isRtl } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-end pb-14 sm:pb-24 pt-28 sm:pt-44 bg-[#151515] overflow-hidden"
    >
      {/* Background Cinematic Mountain Ridge Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-mountain-ridge.jpg"
          alt="OUTLIER - Mountain Ridge and Horizon"
          className="w-full h-full object-cover object-center transform scale-[1.02] filter brightness-[0.88] contrast-[1.04]"
        />
        {/* Responsive Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/50 to-[#151515]/60 sm:via-[#151515]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515]/90 via-[#151515]/50 to-transparent sm:via-[#151515]/30" />
      </div>

      {/* Main Hero Editorial Composition */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Category Marker */}
          <div className="inline-block text-[10px] sm:text-xs tracking-[0.25em] uppercase font-mono text-[#DCD4C7]/90 mb-5 sm:mb-8 border-b border-[#DCD4C7]/30 pb-1">
            {t.hero.categoryBadge}
          </div>

          {/* Main Headline */}
          <h1 className="font-serif-headline text-4xl sm:text-7xl lg:text-8xl font-normal text-[#F3F0E9] tracking-tight leading-[1.08] mb-6 sm:mb-8">
            {t.hero.headline}
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-lg lg:text-xl text-[#DCD4C7] leading-relaxed mb-8 sm:mb-10 max-w-xl font-normal">
            {t.hero.supportingText}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollTo('#contact')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-3.5 rounded-full bg-[#F3F0E9] hover:bg-white text-[#252724] font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-black/40 group active:scale-[0.98]"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rtl-flip group-hover:-translate-x-1' : ''}`} />
            </button>

            <button
              onClick={() => scrollTo('#services')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[#C8C1B5] hover:text-white font-normal text-xs sm:text-sm tracking-wider uppercase transition-colors"
            >
              <span>{t.hero.secondaryCta}</span>
              <ArrowDown className="w-3.5 h-3.5 opacity-60" />
            </button>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Perspective Badge */}
      <div className="absolute bottom-6 end-6 sm:end-8 hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#C8C1B5]/60">
        <span>PERSPECTIVE · STRATEGY · EXECUTION</span>
      </div>
    </section>
  );
}
