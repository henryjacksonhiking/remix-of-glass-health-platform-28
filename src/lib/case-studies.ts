export interface CaseStudy {
  slug: string;
  category: string;
  title: string;
  clinic: string;
  readTime: string;
  keyStat: { value: string; label: string };
  heroImage: string;
  cardImage?: string;
  bodyImage: string;
  bodyCaption: string;
  problem: string;
  solution: string;
  results: string;
  quote: { text: string; author: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "dental-group-california-no-shows",
    category: "Patient engagement",
    title: "How a dental group in California reduced no-shows by 34% with automated patient reminders",
    clinic: "3-location dental group · San Francisco Bay Area",
    readTime: "5 min read",
    keyStat: { value: "34%", label: "reduction in no-shows" },
    heroImage: "/images/case-study-dental-california-hero.webp",
    cardImage: "/images/case-study-dental-california-1.webp",
    bodyImage: "/images/case-study-dental-california-2.webp",
    bodyCaption: "Yalan Corp Dental Studio — Bay Area, California",
    problem: `Pacific Dental Associates operates three busy locations across the San Francisco Bay Area, serving over 12,000 active patients. Their front-desk teams were spending nearly two hours every morning manually calling patients to confirm next-day appointments. Despite this effort, no-show rates hovered around 18%, costing the practice an estimated $22,000 per month in lost revenue.

The manual reminder process was inconsistent — staff would sometimes skip calls during peak hours, and patients who preferred text messages were unreachable by phone. The practice needed a solution that could automate outreach across all three locations without adding headcount.`,
    solution: `Pacific Dental Associates implemented Borna Care's automated patient reminder system across all three locations. The setup took less than a day per office.

- Multi-channel reminders were configured to send automated texts 48 hours before each appointment, followed by a second reminder 2 hours prior
- Patients could confirm, reschedule, or cancel directly from the text message with a single tap
- The waitlist feature automatically filled cancelled slots by notifying patients who had requested earlier availability
- Staff dashboards provided real-time confirmation status across all locations, eliminating the need for morning call blocks`,
    results: `Within 90 days of launching Borna Care's reminder system, the results were significant:

- No-show rate dropped from 18% to 11.9% — a 34% reduction
- Front-desk staff reclaimed 1.5 hours per day previously spent on confirmation calls
- The waitlist feature filled 73% of same-day cancellations automatically
- Patient satisfaction scores for communication improved by 28%
- Estimated monthly revenue recovery: $8,200 across all three locations`,
    quote: {
      text: "We used to dread Monday mornings because of the no-show chaos. Now our chairs stay full and our team can focus on patients instead of chasing confirmations.",
      author: "Dr. Sarah Lin, Managing Partner, Pacific Dental Associates",
    },
  },
  {
    slug: "texas-medical-practice-digital-forms",
    category: "Workflow automation",
    title: "How a multi-location medical practice eliminated paper intake forms and saved 3 hours of admin work daily",
    clinic: "4-location family medicine practice · Texas",
    readTime: "6 min read",
    keyStat: { value: "85%", label: "less manual data entry" },
    heroImage: "/images/case-study-medical-texas-2.webp",
    cardImage: "/images/case-study-medical-texas-1.webp",
    bodyImage: "/images/case-study-medical-texas-1.webp",
    bodyCaption: "Multi-location family medicine practice — Texas",
    problem: `Hill Country Family Medicine runs four clinics across central Texas, with a combined patient volume of over 200 visits per day. Every new patient visit required a 6-page paper intake form, which staff then had to manually key into the EHR system — a process that took 8 to 12 minutes per patient.

The practice estimated that across all four locations, administrative staff spent a combined 12 hours per day on data entry alone. Errors were common: misspelled names, transposed insurance ID numbers, and missing allergy information created downstream issues that affected billing accuracy and patient safety. The paper-based process also frustrated patients, who often arrived early only to spend 20 minutes filling out redundant forms in the waiting room.`,
    solution: `Hill Country Family Medicine deployed Borna Care's digital intake platform across all four locations over a two-week rollout.

- Custom digital forms were built to mirror the practice's existing intake workflow, including medical history, insurance verification, consent forms, and HIPAA acknowledgments
- Patients received a secure link via text message 24 hours before their appointment, allowing them to complete forms from home on any device
- Submitted data flowed directly into the practice management system, eliminating manual transcription
- Smart validation rules flagged incomplete fields, invalid insurance numbers, and missing signatures before submission
- Returning patients only needed to review and update their existing information rather than filling out forms from scratch`,
    results: `After 60 days of full deployment, Hill Country Family Medicine measured the following improvements:

- Manual data entry decreased by 85% across all four locations
- Administrative staff reclaimed a combined 3 hours per day, redistributed to patient-facing tasks
- Form completion errors dropped by 91%, reducing rejected insurance claims
- Average patient check-in time decreased from 14 minutes to 3 minutes
- Patient pre-visit form completion rate reached 78%, meaning most patients arrived ready to be seen immediately`,
    quote: {
      text: "Our front desk used to be buried in paperwork. Now patients walk in, we verify their ID, and they're ready to be seen. It's completely transformed our workflow.",
      author: "Maria Gonzalez, Practice Manager, Hill Country Family Medicine",
    },
  },
  {
    slug: "new-york-dental-studio-payments",
    category: "Billing & payments",
    title: "How a dental studio recovered $14,000 in outstanding payments in 60 days",
    clinic: "Independent dental studio · New York",
    readTime: "5 min read",
    keyStat: { value: "$14K", label: "recovered in 60 days" },
    heroImage: "/images/case-study-dental-newyork-1.webp",
    bodyImage: "/images/case-study-dental-newyork-2.webp",
    bodyCaption: "Independent dental studio — New York",
    problem: `Studio Dental NYC is a boutique cosmetic and general dentistry practice in Manhattan. Despite a loyal patient base and strong case acceptance rates, the practice struggled with accounts receivable. At any given time, over $40,000 in patient balances remained outstanding — some invoices more than 120 days past due.

The office manager spent hours each week generating paper statements and making collection calls, most of which went to voicemail. Patients frequently cited confusion over what they owed, difficulty understanding their insurance breakdown, and the inconvenience of paying by check or calling in a credit card number. The practice had no online payment option, and the manual billing process was straining the small team's capacity.`,
    solution: `Studio Dental NYC integrated Borna Care's billing and payment platform to modernize their collections process.

- Automated payment reminders were sent via text and email at 7, 14, and 30 days after treatment, with a clear balance summary and a one-tap payment link
- A branded online payment portal allowed patients to view itemized statements, see insurance adjustments, and pay securely from any device
- Flexible payment plans could be set up directly through the platform for balances over $500, with automated installment reminders
- The dashboard gave the office manager real-time visibility into outstanding balances, payment trends, and aging reports without pulling manual data`,
    results: `Within the first 60 days of using Borna Care's payment tools, Studio Dental NYC saw dramatic improvements:

- $14,000 in previously outstanding balances were collected, reducing total AR by 35%
- 68% of patients paid within 48 hours of receiving an automated reminder
- Time spent on billing follow-up dropped from 6 hours per week to under 1 hour
- Patient payment plan adoption increased by 40%, reducing write-offs on larger balances
- Zero patient complaints were filed regarding the new digital billing experience`,
    quote: {
      text: "We were leaving money on the table simply because patients didn't have an easy way to pay. Once we gave them a link they could tap on their phone, the payments started coming in almost immediately.",
      author: "Dr. James Park, Owner, Studio Dental NYC",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
