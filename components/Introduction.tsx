'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import OutlierLogo from './OutlierLogo';

export default function Introduction() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-36 bg-[#F3F0E9] text-[#252724] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-2.5 mb-8 sm:mb-16">
          <OutlierLogo variant="symbol" theme="dark" symbolSize={20} />
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-[#565A50]">
            {t.intro.sectionBadge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Main Statement (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="font-serif-headline text-3xl sm:text-5xl lg:text-6xl font-normal text-[#252724] tracking-tight leading-[1.12] mb-6 sm:mb-10">
              {t.intro.headline}
            </h2>

            <div className="space-y-5 text-sm sm:text-lg text-[#565A50] leading-relaxed max-w-xl font-normal">
              <p>{t.intro.paragraph1}</p>
              <p className="text-[#252724] font-medium">{t.intro.paragraph2}</p>
            </div>

            {/* Differentiators */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#C8C1B5]/50">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#565A50] block mb-3 sm:mb-4">
                {t.intro.differentiatorLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {t.intro.differentiators.map((diff, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-sm px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#C8C1B5] bg-[#EAE5DB]/60 text-[#252724] font-medium"
                  >
                    {diff}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Architectural Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#C8C1B5]">
              <img
                src="/images/architectural-portal.jpg"
                alt="OUTLIER Architectural Perspective - Opening Ways In"
                className="w-full h-[280px] sm:h-[460px] lg:h-[520px] object-cover object-center filter contrast-[1.02]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#151515]/90 via-[#151515]/40 to-transparent p-5 sm:p-6 text-white">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#DCD4C7] block mb-1">
                  ARCHITECTURAL PRINCIPLE
                </span>
                <p className="text-xs sm:text-sm text-[#F3F0E9] font-serif-headline italic">
                  {isRtl
                    ? '"לכל אתגר עסקי יש פתח כניסה ייחודי הממתין להיחשף."'
                    : '"Every commercial barrier conceals a distinct point of entry."'}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
