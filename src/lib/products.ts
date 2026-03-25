export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  features: ProductFeature[];
  accentColor: string;
  href: string;
}

export const products: Product[] = [
  {
    id: 'care',
    name: 'Borna Care',
    slug: 'care',
    tagline: 'The patient portal software your clinic actually deserves',
    description: 'Borna Care is patient portal software that gives patients a seamless digital experience — online appointment scheduling for clinics, digital intake forms, payments, and communication — while giving staff the tools to manage everything from one place.',
    accentColor: '#00479B',
    href: '/products/care',
    features: [
      { title: 'Online appointment scheduling', description: 'Patients book, reschedule, or cancel appointments 24/7 with online appointment scheduling for clinics.', icon: 'Calendar' },
      { title: 'Digital intake forms', description: 'Paperless consent, referral, and intake forms.', icon: 'FileText' },
      { title: 'Online payments', description: 'Invoice tracking and secure payment requests.', icon: 'CreditCard' },
      { title: 'Family management', description: 'Manage dependents and family bookings in one account.', icon: 'Users' },
      { title: 'EHR sync', description: 'Bidirectional sync with your existing health record system.', icon: 'RefreshCw' },
      { title: 'Multi-clinic profile', description: 'One patient identity across all connected clinics.', icon: 'Building2' },
    ],
  },
  {
    id: 'connect',
    name: 'Borna Connect',
    slug: 'connect',
    tagline: 'The healthcare communication platform for every patient conversation',
    description: 'Borna Connect is a unified communications platform for clinics — centralizing calls, SMS, chat, email, and telehealth and linking every interaction to the patient record.',
    accentColor: '#00DEC4',
    href: '/products/connect',
    features: [
      { title: 'Web-based calling', description: 'Inbound and outbound calls without a desk phone.', icon: 'Phone' },
      { title: 'Two-way SMS', description: 'Text patients and receive replies in a shared inbox.', icon: 'MessageSquare' },
      { title: 'AI call summaries', description: 'Every call auto-summarized and tagged.', icon: 'Bot' },
      { title: 'Telehealth sessions', description: 'Video consultations built into the platform.', icon: 'Video' },
      { title: 'Team chat', description: 'Internal channels, file sharing, and task reminders.', icon: 'MessagesSquare' },
      { title: 'Call recording', description: 'Full recordings with transcription and CRM history.', icon: 'Mic' },
    ],
  },
  {
    id: 'core',
    name: 'Borna Core',
    slug: 'core',
    tagline: 'Healthcare AI infrastructure behind every Borna module',
    description: 'Borna Core is the healthcare AI infrastructure powering medical workflow automation, secure data sync, workflow orchestration, and system governance across the entire platform.',
    accentColor: '#4F6AFF',
    href: '/products/core',
    features: [
      { title: 'AI workflow automation', description: 'Smart routing, predictive analytics, and intelligent scheduling — the core of our medical workflow automation system.', icon: 'Cpu' },
      { title: 'EHR & payments sync', description: 'Secure bidirectional sync with health records and payment gateways.', icon: 'RefreshCw' },
      { title: 'NLP & transcription', description: 'Natural language processing for calls, chat, and summaries.', icon: 'Braces' },
      { title: 'Multi-tenant architecture', description: 'Scalable infrastructure for single and multi-location practices.', icon: 'Server' },
      { title: 'Audit logs', description: 'Compliance-ready governance controls and system monitoring.', icon: 'ShieldCheck' },
      { title: 'API management', description: 'Open APIs for custom integrations and third-party systems.', icon: 'Plug' },
    ],
  },
  {
    id: 'insight',
    name: 'Borna Insight',
    slug: 'insight',
    tagline: 'The healthcare analytics dashboard for your clinic',
    description: 'Borna Insight is a healthcare analytics dashboard that surfaces clinic performance analytics across appointments, revenue, communications, and patient engagement — so clinic leaders can make decisions with confidence.',
    accentColor: '#818CF8',
    href: '/products/insight',
    features: [
      { title: 'Appointment analytics', description: 'No-shows, cancellations, and booking trends over time.', icon: 'BarChart2' },
      { title: 'Revenue insights', description: 'Billing performance, outstanding invoices, and payment tracking.', icon: 'TrendingUp' },
      { title: 'Communication metrics', description: 'Missed calls, response times, and channel performance.', icon: 'Activity' },
      { title: 'Staff performance', description: 'Per-provider and per-team metrics and KPIs.', icon: 'UserCheck' },
      { title: 'AI summaries', description: 'Automated daily and weekly operational summaries.', icon: 'FileBarChart' },
      { title: 'Custom dashboards', description: 'Build reports tailored to your clinic goals.', icon: 'LayoutDashboard' },
    ],
  },
  {
    id: 'engage',
    name: 'Borna Engage',
    slug: 'engage',
    tagline: 'Turn every patient into a loyal long-term patient',
    description: 'Borna Engage manages the full patient relationship — from first enquiry to repeat visits — with automated follow-ups, campaigns, and lifecycle tracking.',
    accentColor: '#D6007F',
    href: '/products/engage',
    features: [
      { title: 'Patient pipeline', description: 'Lead and patient management from first contact onward.', icon: 'Funnel' },
      { title: 'Automated follow-ups', description: 'Triggered messages for recalls, no-shows, and check-ins.', icon: 'Bell' },
      { title: 'SMS & email campaigns', description: 'Targeted campaigns with segmentation and tagging.', icon: 'Mail' },
      { title: 'Referral tracking', description: 'Track and reward patient referral sources.', icon: 'Share2' },
      { title: 'Review collection', description: 'Automated review requests after appointments.', icon: 'Star' },
      { title: 'Lifecycle tracking', description: 'From first visit to long-term retention.', icon: 'Route' },
    ],
  },
];
