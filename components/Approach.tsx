'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import OutlierLogo from './OutlierLogo';

export default function Approach() {
  const { t, isRtl } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="approach" className="py-24 sm:py-36 bg-[#F3F0E9] text-[#252724] border-t border-[#C8C1B5]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#565A50] mb-4">
            {t.approach.sectionBadge}
          </div>
          <h2 className="font-serif-headline text-4xl sm:text-6xl font-normal text-[#252724] tracking-tight leading-[1.1] mb-6">
            {t.approach.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#565A50] leading-relaxed max-w-2xl font-normal">
            {t.approach.intro}
          </p>
        </div>

        {/* Desktop View: Refined Editorial Horizontal Timeline */}
        <div className="hidden lg:block">
          
          {/* Stage Sequence Line */}
          <div className="relative mb-14">
            <div className="absolute top-5 left-0 right-0 h-[1px] bg-[#C8C1B5]" />
            <div
              className="absolute top-5 h-[1.5px] bg-[#252724] transition-all duration-400"
              style={{
                left: isRtl ? 'auto' : 0,
                right: isRtl ? 0 : 'auto',
                width: `${((activeStep + 1) / t.approach.stages.length) * 100}%`,
              }}
            />

            <div className="grid grid-cols-6 gap-4 relative z-10">
              {t.approach.stages.map((stage, idx) => {
                const isSelected = activeStep === idx;
                const isPast = activeStep >= idx;

                return (
                  <button
                    key={stage.step}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center group focus:outline-none"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-semibold transition-all duration-300 border ${
                        isSelected
                          ? 'bg-[#252724] border-[#252724] text-[#F3F0E9] shadow-md scale-105'
                          : isPast
                          ? 'bg-[#EAE5DB] border-[#252724] text-[#252724]'
                          : 'bg-[#F3F0E9] border-[#C8C1B5] text-[#565A50] group-hover:border-[#252724]'
                      }`}
                    >
                      {stage.step}
                    </div>

                    <span
                      className={`mt-4 text-xs font-mono tracking-widest uppercase transition-colors ${
                        isSelected ? 'text-[#252724] font-bold' : 'text-[#565A50] group-hover:text-[#252724]'
                      }`}
                    >
                      {stage.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Editorial Feature Card */}
          <div className="p-10 sm:p-14 rounded-2xl bg-[#EAE5DB] border border-[#C8C1B5] shadow-sm relative">
            <div className="flex items-start justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#F3F0E9] text-[#565A50] border border-[#C8C1B5]">
                    STAGE {t.approach.stages[activeStep].step} OF 06
                  </span>
                  <span className="text-xl font-serif-headline text-[#252724] tracking-wide">
                    {t.approach.stages[activeStep].name}
                  </span>
                </div>
                <p className="font-serif-headline text-3xl sm:text-4xl text-[#252724] font-normal leading-relaxed mt-4">
                  "{t.approach.stages[activeStep].description}"
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-full border border-[#C8C1B5] text-xs font-mono uppercase text-[#252724] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#F3F0E9] transition-colors"
                >
                  {isRtl ? 'הקודם ←' : '← PREV'}
                </button>
                <button
                  disabled={activeStep === t.approach.stages.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(t.approach.stages.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-full border border-[#252724] bg-[#252724] text-[#F3F0E9] text-xs font-mono uppercase disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#151515] transition-colors"
                >
                  {isRtl ? 'הבא →' : 'NEXT →'}
                </button>
              </div>
            </div>
          </div>

          {/* Compact 6-Stage Row */}
          <div className="grid grid-cols-6 gap-4 mt-8">
            {t.approach.stages.map((stage, idx) => (
              <div
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border text-start ${
                  activeStep === idx
                    ? 'bg-[#EAE5DB] border-[#252724]'
                    : 'bg-[#F3F0E9] border-[#C8C1B5]/50 hover:border-[#C8C1B5]'
                }`}
              >
                <div className="text-[11px] font-mono text-[#565A50] mb-1">{stage.step}</div>
                <div className="text-xs font-medium text-[#252724] truncate">{stage.name}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile View: Vertical Editorial Timeline */}
        <div className="block lg:hidden relative">
          <div className="absolute top-0 bottom-0 start-5 w-[1px] bg-[#C8C1B5]" />

          <div className="space-y-6 relative">
            {t.approach.stages.map((stage) => (
              <div key={stage.step} className="flex items-start gap-4 sm:gap-5">
                <div className="w-10 h-10 rounded-full bg-[#EAE5DB] border border-[#252724] flex items-center justify-center font-mono text-xs font-bold text-[#252724] flex-shrink-0 z-10 shadow-sm">
                  {stage.step}
                </div>

                <div className="p-5 sm:p-6 rounded-xl bg-[#EAE5DB] border border-[#C8C1B5] flex-1">
                  <span className="text-xs font-mono uppercase text-[#565A50] font-semibold tracking-wider">
                    {stage.name}
                  </span>
                  <p className="font-serif-headline text-lg sm:text-xl text-[#252724] mt-2 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
