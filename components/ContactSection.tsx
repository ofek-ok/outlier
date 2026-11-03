'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import OutlierLogo from './OutlierLogo';
import { Mail, Building, Send, CheckCircle, Info, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactSection() {
  const { t, isRtl, site } = useLanguage();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    interest: 'market-expansion',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t.cta.feedback.errorRequired;
    }
    if (!formData.email.trim()) {
      newErrors.email = t.cta.feedback.errorRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.cta.feedback.errorEmail;
    }
    if (!formData.message.trim()) {
      newErrors.message = t.cta.feedback.errorRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      await response.json().catch(() => ({}));
      setSubmitted(true);
      setSubmittedData({ ...formData });
    } catch (err) {
      setSubmitted(true);
      setSubmittedData({ ...formData });
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      interest: 'market-expansion',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="py-16 sm:py-36 bg-[#F3F0E9] text-[#252724] border-t border-[#C8C1B5]/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-24">
          <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-[#565A50] mb-3 sm:mb-4">
            {t.cta.sectionBadge}
          </div>
          <h2 className="font-serif-headline text-3xl sm:text-6xl font-normal text-[#252724] tracking-tight leading-[1.1] mb-4 sm:mb-6">
            {t.cta.headline}
          </h2>
          <p className="text-sm sm:text-lg text-[#565A50] leading-relaxed max-w-2xl font-normal">
            {t.cta.text}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Direct Inquiries & Brand Position */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="p-6 sm:p-10 rounded-2xl bg-[#EAE5DB] border border-[#C8C1B5]">
              <OutlierLogo variant="primary" theme="dark" symbolSize={34} className="items-start mb-5 sm:mb-6" />
              
              <p className="text-xs sm:text-sm text-[#565A50] leading-relaxed mb-6 sm:mb-8">
                {t.hero.supportingHeadline}
              </p>

              <div className="space-y-4 pt-5 sm:pt-6 border-t border-[#C8C1B5] text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F3F0E9] border border-[#C8C1B5] flex items-center justify-center text-[#252724] flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#565A50]">
                      {isRtl ? 'דוא״ל ישיר' : 'Advisory Inquiries'}
                    </div>
                    <a
                      href={`mailto:${site.contactEmail}`}
                      className="text-[#252724] hover:text-[#565A50] font-medium text-xs sm:text-sm transition-colors truncate block"
                    >
                      {site.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F3F0E9] border border-[#C8C1B5] flex items-center justify-center text-[#252724] flex-shrink-0">
                    <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#565A50]">
                      {isRtl ? 'בסיס פעילות' : 'Operating Hub'}
                    </div>
                    <span className="text-[#252724] font-medium text-xs sm:text-sm">
                      {isRtl ? site.locationHe : site.locationEn}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Discretion Note */}
            <div className="p-5 sm:p-6 rounded-xl border border-[#C8C1B5] bg-[#F3F0E9] text-xs text-[#565A50] leading-relaxed">
              <span className="font-semibold text-[#252724] block mb-1 uppercase tracking-wider text-[10px] sm:text-[11px] font-mono">
                {isRtl ? 'דיסקרטיות מקצועית' : 'Discretion & Governance'}
              </span>
              {isRtl
                ? 'כל הפניות נבחנות בדיסקרטיות מלאה ישירות על ידי השותפים המייסדים. פרטיכם אינם מועברים לצד שלישי לעולם.'
                : 'All prospective inquiries are handled under strict confidentiality by founding partners. We do not share, sell, or disclose partner communications.'}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="p-6 sm:p-12 rounded-2xl bg-[#EAE5DB] border border-[#C8C1B5] shadow-sm">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
                  <div className="border-b border-[#C8C1B5] pb-4 mb-4 sm:mb-6">
                    <h3 className="font-serif-headline text-2xl sm:text-3xl font-normal text-[#252724] mb-1">
                      {t.cta.formTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#565A50]">
                      {t.cta.formSubtitle}
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#252724] mb-1.5 sm:mb-2">
                        {t.cta.formLabels.name} *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.cta.formLabels.namePlaceholder}
                        /* Use text-base on mobile to avoid iOS Safari auto-zoom */
                        className={`w-full px-4 py-3.5 rounded-lg bg-[#F3F0E9] border text-[#252724] text-base sm:text-sm placeholder:text-[#565A50]/60 focus:outline-none focus:ring-1 focus:ring-[#252724] transition-all ${
                          errors.name ? 'border-red-500' : 'border-[#C8C1B5]'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#252724] mb-1.5 sm:mb-2">
                        {t.cta.formLabels.email} *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.cta.formLabels.emailPlaceholder}
                        className={`w-full px-4 py-3.5 rounded-lg bg-[#F3F0E9] border text-[#252724] text-base sm:text-sm placeholder:text-[#565A50]/60 focus:outline-none focus:ring-1 focus:ring-[#252724] transition-all ${
                          errors.email ? 'border-red-500' : 'border-[#C8C1B5]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Interest Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#252724] mb-1.5 sm:mb-2">
                        {t.cta.formLabels.company}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={t.cta.formLabels.companyPlaceholder}
                        className="w-full px-4 py-3.5 rounded-lg bg-[#F3F0E9] border border-[#C8C1B5] text-[#252724] text-base sm:text-sm placeholder:text-[#565A50]/60 focus:outline-none focus:ring-1 focus:ring-[#252724] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#252724] mb-1.5 sm:mb-2">
                        {t.cta.formLabels.interest}
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-lg bg-[#F3F0E9] border border-[#C8C1B5] text-[#252724] text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#252724] transition-all cursor-pointer"
                      >
                        {t.cta.formLabels.interestOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-[#F3F0E9] text-[#252724]">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#252724] mb-1.5 sm:mb-2">
                      {t.cta.formLabels.message} *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.cta.formLabels.messagePlaceholder}
                      className={`w-full px-4 py-3 rounded-lg bg-[#F3F0E9] border text-[#252724] text-base sm:text-sm placeholder:text-[#565A50]/60 focus:outline-none focus:ring-1 focus:ring-[#252724] transition-all resize-y ${
                        errors.message ? 'border-red-500' : 'border-[#C8C1B5]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#252724] hover:bg-[#151515] active:scale-[0.98] text-[#F3F0E9] font-medium text-xs tracking-wider uppercase transition-all duration-200 disabled:opacity-50"
                    >
                      <span>{submitting ? t.cta.formLabels.submitting : t.cta.formLabels.submit}</span>
                      <Send className={`w-3.5 h-3.5 ${isRtl ? 'rtl-flip' : ''}`} />
                    </button>
                  </div>
                </form>
              ) : (
                /* Submission Confirmation */
                <div className="py-6 sm:py-8 space-y-5 sm:space-y-6 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#252724] text-[#F3F0E9] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>

                  <div className="max-w-md mx-auto">
                    <h3 className="font-serif-headline text-2xl sm:text-3xl font-normal text-[#252724] mb-2">
                      {t.cta.feedback.successTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#565A50] leading-relaxed">
                      {t.cta.feedback.successMessage}
                    </p>
                  </div>

                  {submittedData && (
                    <div className="p-4 rounded-xl bg-[#F3F0E9] border border-[#C8C1B5] text-xs text-[#565A50] space-y-1.5 max-w-md mx-auto text-start">
                      <div className="flex justify-between border-b border-[#C8C1B5]/40 pb-1">
                        <span className="font-mono">Contact:</span>
                        <span className="font-medium text-[#252724] truncate">{submittedData.name} ({submittedData.email})</span>
                      </div>
                      {submittedData.company && (
                        <div className="flex justify-between border-b border-[#C8C1B5]/40 pb-1">
                          <span className="font-mono">Company:</span>
                          <span className="font-medium text-[#252724]">{submittedData.company}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="font-mono">Area:</span>
                        <span className="font-medium text-[#252724]">{submittedData.interest}</span>
                      </div>
                    </div>
                  )}

                  <div className="p-4 rounded-xl bg-[#F3F0E9] border border-[#C8C1B5] text-xs text-[#565A50] max-w-md mx-auto flex items-start gap-2.5 text-start">
                    <Info className="w-4 h-4 text-[#252724] flex-shrink-0 mt-0.5" />
                    <span>{t.cta.feedback.devNotice}</span>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="text-xs font-mono text-[#565A50] hover:text-[#252724] underline underline-offset-4 py-2"
                    >
                      {t.cta.feedback.resetButton}
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
