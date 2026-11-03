export type Language = 'en' | 'he';

export interface NavItem {
  id: string;
  label: string;
}

export interface ServicePillar {
  number: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ApproachStage {
  step: string;
  name: string;
  description: string;
}

export interface SiteContent {
  nav: {
    home: string;
    services: string;
    approach: string;
    about: string;
    philosophy: string;
    contact: string;
    ctaButton: string;
  };
  hero: {
    categoryBadge: string;
    headline: string;
    supportingHeadline: string;
    supportingText: string;
    primaryCta: string;
    secondaryCta: string;
    microStats: {
      label: string;
      value: string;
    }[];
  };
  intro: {
    sectionBadge: string;
    headline: string;
    paragraph1: string;
    paragraph2: string;
    differentiatorLabel: string;
    differentiators: string[];
  };
  services: {
    sectionBadge: string;
    headline: string;
    intro: string;
    pillars: ServicePillar[];
  };
  approach: {
    sectionBadge: string;
    headline: string;
    intro: string;
    stages: ApproachStage[];
  };
  philosophy: {
    sectionBadge: string;
    headline: string;
    coreQuote: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    conclusion: string;
  };
  cta: {
    sectionBadge: string;
    headline: string;
    text: string;
    primaryButton: string;
    formTitle: string;
    formSubtitle: string;
    formLabels: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      companyPlaceholder: string;
      interest: string;
      interestOptions: { value: string; label: string }[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
    };
    feedback: {
      successTitle: string;
      successMessage: string;
      devNotice: string;
      resetButton: string;
      errorRequired: string;
      errorEmail: string;
    };
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    contactTitle: string;
    languageTitle: string;
    copyright: string;
    privacyNote: string;
  };
}
