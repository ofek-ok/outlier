'use client';

import React from 'react';

interface OutlierLogoProps {
  variant?: 'primary' | 'secondary' | 'symbol' | 'wordmark';
  theme?: 'dark' | 'light' | 'current';
  showTagline?: boolean;
  className?: string;
  symbolSize?: number;
}

export default function OutlierLogo({
  variant = 'secondary',
  theme = 'dark',
  showTagline = false,
  className = '',
  symbolSize = 36,
}: OutlierLogoProps) {
  // Determine color tokens
  const fillColor =
    theme === 'light'
      ? '#F3F0E9'
      : theme === 'current'
      ? 'currentColor'
      : '#252724';

  const facetColor =
    theme === 'light'
      ? '#C8C1B5'
      : theme === 'current'
      ? 'currentColor'
      : '#565A50';

  const taglineColor =
    theme === 'light'
      ? '#C8C1B5'
      : theme === 'current'
      ? 'currentColor'
      : '#565A50';

  // Standalone Ridge Symbol SVG
  const RidgeSymbol = ({ size = symbolSize }: { size?: number }) => (
    <svg
      viewBox="0 0 200 80"
      width={size}
      height={size * 0.4}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block transition-transform duration-300"
      aria-hidden="true"
    >
      <path
        d="M 10 66 C 36 58 66 34 94 13 C 96 11.5 98.5 11.5 100.5 13 C 126 33 154 54 180 66 C 166 60 142 43 118 26 C 102 14.5 96.5 14.5 93 17.5 C 75 33.5 42 55 10 66 Z"
        fill={fillColor}
      />
      <path
        d="M 36 57 C 60 43 82 27 95 13.5 C 92 18 83 29 72 39 C 56 50.5 42 55.5 36 57 Z"
        fill={facetColor}
        opacity={theme === 'current' ? 0.4 : 0.45}
      />
    </svg>
  );

  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <RidgeSymbol size={symbolSize} />
      </div>
    );
  }

  if (variant === 'wordmark') {
    return (
      <span
        className={`font-sans tracking-[0.34em] uppercase font-medium select-none ${className}`}
        style={{ color: fillColor }}
      >
        OUTLIER
      </span>
    );
  }

  // Primary or Secondary
  const hasTagline = variant === 'primary' || showTagline;

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <RidgeSymbol size={symbolSize} />
      <span
        className="font-sans text-[17px] sm:text-[19px] tracking-[0.36em] uppercase font-medium mt-1 pl-[0.36em] transition-colors"
        style={{ color: fillColor }}
      >
        OUTLIER
      </span>
      {hasTagline && (
        <span
          className="font-sans text-[8px] sm:text-[8.5px] tracking-[0.28em] uppercase font-medium mt-1 pl-[0.28em] transition-colors"
          style={{ color: taglineColor }}
        >
          WE CREATE WAYS IN.
        </span>
      )}
    </div>
  );
}
