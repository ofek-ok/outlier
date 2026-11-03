'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, SiteContent } from '@/content/types';
import { enContent } from '@/content/en';
import { heContent } from '@/content/he';
import { siteConfig } from '@/config/site';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: SiteContent;
  dir: 'ltr' | 'rtl';
  isRtl: boolean;
  site: typeof siteConfig;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    // Check localStorage or browser language on mount
    try {
      const saved = localStorage.getItem('waysin_lang') as Language | null;
      if (saved === 'en' || saved === 'he') {
        setLangState(saved);
        return;
      }
      if (typeof navigator !== 'undefined' && navigator.language?.startsWith('he')) {
        setLangState('he');
      }
    } catch {
      // LocalStorage unavailable in certain sandbox or privacy modes
    }
  }, []);

  useEffect(() => {
    const isRtl = lang === 'he';
    const dir = isRtl ? 'rtl' : 'ltr';
    if (typeof document !== 'undefined') {
      document.documentElement.dir = dir;
      document.documentElement.lang = lang;
      // Also toggle class for font families
      if (isRtl) {
        document.documentElement.classList.add('font-hebrew');
        document.documentElement.classList.remove('font-english');
      } else {
        document.documentElement.classList.add('font-english');
        document.documentElement.classList.remove('font-hebrew');
      }
    }
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('waysin_lang', newLang);
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'he' : 'en');
  };

  const t = lang === 'en' ? enContent : heContent;
  const isRtl = lang === 'he';
  const dir = isRtl ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        dir,
        isRtl,
        site: siteConfig,
      }}
    >
      <div dir={dir} className={isRtl ? 'font-hebrew' : 'font-english'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
