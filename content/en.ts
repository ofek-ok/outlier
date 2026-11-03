import { SiteContent } from './types';

export const enContent: SiteContent = {
  nav: {
    home: 'Home',
    services: 'What We Do',
    approach: 'Our Approach',
    about: 'About',
    philosophy: 'Philosophy',
    contact: 'Contact',
    ctaButton: "Let's Talk",
  },
  hero: {
    categoryBadge: 'Strategic Market Development & Creative Advisory',
    headline: 'We Create Ways In.',
    supportingHeadline: 'Strategic thinking and creative solutions to reach new markets, customers, and opportunities.',
    supportingText: 'We help businesses unlock new opportunities, enter new markets, and reach the customers that move them forward.',
    primaryCta: "Let's Talk",
    secondaryCta: 'Explore What We Do',
    microStats: [
      { label: 'Core Philosophy', value: 'Bespoke Market Entry' },
      { label: 'Scope', value: 'Domestic & International' },
      { label: 'Execution', value: 'Strategy to Action' },
    ],
  },
  intro: {
    sectionBadge: 'The Premise',
    headline: "New Opportunities Don't Happen by Chance.",
    paragraph1:
      'Growth requires more than a good idea. It takes a clear understanding of the market, the right strategy, creative thinking, and the ability to turn plans into action.',
    paragraph2:
      'We work with businesses to identify opportunities, develop tailored approaches, and build meaningful connections with the markets and customers they want to reach.',
    differentiatorLabel: 'What We Are Not',
    differentiators: [
      'Not a gift company',
      'Not a traditional marketing agency',
      'Not merely a lead-generation service',
    ],
  },
  services: {
    sectionBadge: 'Our Focus Areas',
    headline: 'Where Strategy Meets Opportunity.',
    intro:
      'We combine rigorous market intelligence, creative problem-solving, and hands-on execution across four foundational pillars.',
    pillars: [
      {
        number: '01',
        title: 'Market Development & Expansion',
        description:
          'Identifying opportunities, exploring new markets, and developing strategies for geographic expansion and new customer segments.',
        highlights: [
          'Geographic Market Entry',
          'Segment Identification',
          'Opportunity & Risk Mapping',
          'Go-to-Market Strategy',
        ],
      },
      {
        number: '02',
        title: 'Customer Acquisition & Strategic Outreach',
        description:
          'Developing tailored approaches to identify, reach, and engage potential customers and decision-makers.',
        highlights: [
          'Decision-Maker Targeting',
          'Tailored Outreach Narratives',
          'High-Value Account Engagement',
          'Relationship Architecture',
        ],
      },
      {
        number: '03',
        title: 'Strategic & Creative Solutions',
        description:
          'Turning complex business challenges into practical, original, and effective solutions.',
        highlights: [
          'Creative Problem Framing',
          'Value Proposition Positioning',
          'Commercial Differentiation',
          'Actionable Roadmaps',
        ],
      },
      {
        number: '04',
        title: 'Business Process Development',
        description:
          'Building the processes, workflows, and operational frameworks that support business growth and execution.',
        highlights: [
          'BD & Sales Workflows',
          'Operational Frameworks',
          'Team Enablement Systems',
          'Sustainable Execution Models',
        ],
      },
    ],
  },
  approach: {
    sectionBadge: 'Methodology',
    headline: 'From Insight to Impact.',
    intro:
      'A structured, six-stage engagement model engineered to transform market ambiguity into decisive competitive advantage.',
    stages: [
      {
        step: '01',
        name: 'DISCOVER',
        description: 'Understand the business, objectives, challenges, and opportunities.',
      },
      {
        step: '02',
        name: 'RESEARCH',
        description: 'Explore markets, audiences, customers, and potential opportunities.',
      },
      {
        step: '03',
        name: 'STRATEGIZE',
        description: 'Develop a tailored strategy and actionable plan.',
      },
      {
        step: '04',
        name: 'DESIGN',
        description: 'Build the approach, creative concepts, and operational framework.',
      },
      {
        step: '05',
        name: 'EXECUTE',
        description: 'Put the strategy into action through coordinated implementation.',
      },
      {
        step: '06',
        name: 'OPTIMIZE',
        description: 'Measure performance, learn, and improve.',
      },
    ],
  },
  philosophy: {
    sectionBadge: 'Our Mindset',
    headline: 'Every Challenge Has a Different Way In.',
    coreQuote: 'We don’t believe in one-size-fits-all solutions.',
    paragraph1:
      'Every business, market, and customer is different. That’s why we start by understanding the challenge before deciding on the approach.',
    paragraph2:
      'Sometimes the answer is a new market strategy. Sometimes it’s a different way to reach a decision-maker. Sometimes it’s a process that needs to be rebuilt.',
    paragraph3:
      'We bring the right thinking and capabilities together to create the solution that fits.',
    conclusion:
      'No boilerplate playbooks. No generic formulas. Only tailored strategic pathways built around your distinct commercial objective.',
  },
  cta: {
    sectionBadge: 'Initiate Contact',
    headline: 'Have an Opportunity in Mind?',
    text: 'Let’s explore what’s possible and find the right way forward.',
    primaryButton: 'Start a Conversation',
    formTitle: 'Direct Advisory Inquiry',
    formSubtitle:
      'Share an overview of your challenge or expansion goals. We will review and respond directly to coordinate an introductory discussion.',
    formLabels: {
      name: 'Full Name',
      namePlaceholder: 'e.g. Alex Morgan',
      email: 'Work Email',
      emailPlaceholder: 'alex@company.com',
      company: 'Company / Organization',
      companyPlaceholder: 'e.g. Acme Ventures or Independent',
      interest: 'Primary Area of Interest',
      interestOptions: [
        { value: 'market-expansion', label: 'Market Development & Expansion' },
        { value: 'customer-acquisition', label: 'Customer Acquisition & Strategic Outreach' },
        { value: 'creative-solutions', label: 'Strategic & Creative Solutions' },
        { value: 'process-development', label: 'Business Process Development' },
        { value: 'exploratory', label: 'Comprehensive Strategic Evaluation' },
      ],
      message: 'Brief Context or Objective',
      messagePlaceholder:
        'Tell us about the market you want to enter, the audience you need to reach, or the business challenge you are solving...',
      submit: 'Send Advisory Inquiry',
      submitting: 'Submitting Inquiry...',
    },
    feedback: {
      successTitle: 'Inquiry Received',
      successMessage:
        'Thank you for reaching out. Your details have been captured and will be reviewed by the founding partners.',
      devNotice:
        'Backend Integration Notice: This form is running in review mode. To connect an active delivery endpoint (e.g. Resend, SendGrid, or custom webhook), update the handler in app/api/contact/route.ts.',
      resetButton: 'Submit Another Inquiry',
      errorRequired: 'Please fill in all required fields.',
      errorEmail: 'Please provide a valid corporate email address.',
    },
  },
  footer: {
    tagline: 'Strategic Market Development & Creative Advisory.',
    quickLinksTitle: 'Navigation',
    contactTitle: 'Inquiries',
    languageTitle: 'Language',
    copyright: 'All rights reserved.',
    privacyNote: 'Confidential strategic advisory. Client information handled with strict discretion.',
  },
};
