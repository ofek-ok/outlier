'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import OutlierLogo from './OutlierLogo';

export default function Introduction() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-36 bg-[#F3F0E9] text-[#252724] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Marker */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <OutlierLogo variant="symbol" theme="dark" symbolSize={22} />
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#565A50]">
            {t.intro.sectionBadge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Statement (7 cols) */}
          <div className="lg:col-span-7">
            <h2 className="font-serif-headline text-3xl sm:text-5xl lg:text-6xl font-normal text-[#252724] tracking-tight leading-[1.15] mb-8 sm:mb-10">
              {t.intro.headline}
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#565A50] leading-relaxed max-w-xl font-normal">
              <p>{t.intro.paragraph1}</p>
              <p className="text-[#252724] font-medium">{t.intro.paragraph2}</p>
            </div>

            {/* Editorial Positioning Note: What We Are Not */}
            <div className="mt-10 sm:mt-12 pt-8 border-t border-[#C8C1B5]/50">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#565A50] block mb-4">
                {t.intro.differentiatorLabel}
              </span>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {t.intro.differentiators.map((diff, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-sm px-4 py-2 rounded-full border border-[#C8C1B5] bg-[#EAE5DB]/60 text-[#252724] font-medium"
                  >
                    {diff}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Architectural Concrete Portal Imagery (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#252724]/10 border border-[#C8C1B5]">
              <img
                src="/images/architectural-portal.jpg"
                alt="OUTLIER Architectural Perspective - Opening Ways In"
                className="w-full h-[420px] sm:h-[520px] object-cover object-center filter contrast-[1.02]"
              />
              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#151515]/80 via-[#151515]/30 to-transparent p-6 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#DCD4C7] block mb-1">
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
