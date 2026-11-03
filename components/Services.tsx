'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const { t, isRtl } = useLanguage();
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 sm:py-36 bg-[#EAE5DB] text-[#252724] border-t border-[#C8C1B5]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#565A50] mb-4">
            {t.services.sectionBadge}
          </div>
          <h2 className="font-serif-headline text-4xl sm:text-6xl font-normal text-[#252724] tracking-tight leading-[1.1] mb-6">
            {t.services.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#565A50] leading-relaxed max-w-2xl font-normal">
            {t.services.intro}
          </p>
        </div>

        {/* 4 Pillars Editorial Grid - Directly matching reference board layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 border-t border-[#C8C1B5] pt-12">
          {t.services.pillars.map((pillar, index) => {
            const isHovered = activePillar === index;

            return (
              <div
                key={pillar.number}
                onMouseEnter={() => setActivePillar(index)}
                onMouseLeave={() => setActivePillar(null)}
                className="group flex flex-col justify-between py-2 transition-all duration-300"
              >
                <div>
                  {/* Pillar Number */}
                  <div className="text-2xl sm:text-3xl font-mono text-[#565A50] tracking-tighter mb-6 group-hover:text-[#252724] transition-colors">
                    {pillar.number}
                  </div>

                  {/* Pillar Title in Cormorant Garamond */}
                  <h3 className="font-serif-headline text-2xl sm:text-[26px] font-normal text-[#252724] leading-snug mb-4 group-hover:underline underline-offset-4 decoration-[#565A50]/40 transition-all">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="text-sm text-[#565A50] leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Capability Tags */}
                <div className="pt-4 border-t border-[#C8C1B5]/60 flex flex-wrap gap-1.5">
                  {pillar.highlights.map((highlight, hIdx) => (
                    <span
                      key={hIdx}
                      className="text-[11px] font-sans px-2.5 py-1 rounded bg-[#F3F0E9] border border-[#C8C1B5]/70 text-[#252724] font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Landscape Break: Winding Mountain Road Banner */}
        <div className="mt-20 sm:mt-28 rounded-2xl overflow-hidden relative shadow-xl border border-[#C8C1B5]/60">
          <div className="relative h-[280px] sm:h-[360px] w-full">
            <img
              src="/images/winding-mountain-road.jpg"
              alt="OUTLIER Strategic Road - Paving New Paths In"
              className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#151515]/75 via-[#151515]/40 to-transparent flex items-center p-8 sm:p-14">
              <div className="max-w-md text-white">
                <span className="text-[10px] font-mono tracking-[0.28em] uppercase text-[#C8C1B5] block mb-2">
                  EXPLORATION &amp; ACCESS
                </span>
                <p className="font-serif-headline text-2xl sm:text-3xl font-normal leading-snug text-[#F3F0E9]">
                  {isRtl
                    ? 'אנו מתווים דרכים חדשות היכן שאחרים רואים רק מחסומים.'
                    : 'Uncovering uncrowded pathways where conventional approaches stall.'}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
