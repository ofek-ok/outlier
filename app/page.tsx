'use client';

import React from 'react';
import { LanguageProvider } from '@/components/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Philosophy from '@/components/Philosophy';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F3F0E9] text-[#252724] flex flex-col selection:bg-[#252724] selection:text-[#F3F0E9]">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Introduction />
          <Services />
          <Approach />
          <Philosophy />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
