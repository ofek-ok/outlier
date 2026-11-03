'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import OutlierLogo from './OutlierLogo';
import { Compass, KeyRound, Cog } from 'lucide-react';

export default function Philosophy() {
  const { t, isRtl } = useLanguage();

  const scenarios = [
    {
      icon: <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8C1B5]" />,
      tag: isRtl ? 'מסלול 01' : 'PATHWAY 01',
      title: isRtl ? 'אסטרטגיית שוק חדשה' : 'A New Market Strategy',
      desc: isRtl
        ? 'זיהוי חלונות הזדמנות בלתי מנוצלים וגיבוש מודל חדירה מדויק.'
        : 'Unlocking untapped territorial or sector opportunities through targeted market entry.',
    },
    {
      icon: <KeyRound className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8C1B5]" />,
      tag: isRtl ? 'מסלול 02' : 'PATHWAY 02',
      title: isRtl ? 'דרך שונה להגיע למקבל החלטות' : 'A Different Outreach Angle',
      desc: isRtl
        ? 'פתיחת דלתות לחשבונות מפתח באמצעות נרטיב משכנע וקשרים אסטרטגיים.'
        : 'Bypassing conventional friction points to engage high-value decision-makers directly.',
    },
    {
      icon: <Cog className="w-4 h-4 sm:w-5 sm:h-5 text-[#C8C1B5]" />,
      tag: isRtl ? 'מסלול 03' : 'PATHWAY 03',
      title: isRtl ? 'בנייה מחדש של תהליך פנימי' : 'Process Re-engineering',
      desc: isRtl
        ? 'תיאום מסגרות התפעול והפיתוח העסקי לתמיכה בצמיחה מתמשכת.'
        : 'Restructuring internal business development workflows to sustain repeatable execution.',
    },
  ];

  return (
    <section id="philosophy" className="py-16 sm:py-36 bg-[#151515] text-[#F3F0E9] relative overflow-hidden">
      {/* Subtle Embossed Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5 w-[320px] sm:w-[600px] lg:w-[900px] select-none">
        <OutlierLogo variant="symbol" theme="light" symbolSize={600} />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-24">
          <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-[#C8C1B5] mb-3 sm:mb-4">
            {t.philosophy.sectionBadge}
          </div>
          <h2 className="font-serif-headline text-3xl sm:text-6xl lg:text-7xl font-normal text-[#F3F0E9] tracking-tight leading-[1.08] mb-4 sm:mb-6">
            {t.philosophy.headline}
          </h2>
          <p className="font-serif-headline text-xl sm:text-3xl text-[#C8C1B5] font-normal leading-relaxed italic">
            "{t.philosophy.coreQuote}"
          </p>
        </div>

        {/* Narrative & Strategic Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Detailed Editorial Narrative */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-sm sm:text-lg text-[#C8C1B5] leading-relaxed font-normal">
            <p>{t.philosophy.paragraph1}</p>
            <p>{t.philosophy.paragraph2}</p>
            <p className="text-[#F3F0E9] font-medium">{t.philosophy.paragraph3}</p>

            <div className="pt-6 sm:pt-8 border-t border-white/10">
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#DCD4C7]/80">
                {t.philosophy.conclusion}
              </p>
            </div>
          </div>

          {/* Three Ways In Pathways */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            {scenarios.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-2xl bg-[#252724]/90 border border-white/10 hover:border-[#C8C1B5]/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-[#C8C1B5] uppercase tracking-widest">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif-headline text-xl sm:text-2xl font-normal text-[#F3F0E9] mb-1.5 sm:mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#C8C1B5] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
