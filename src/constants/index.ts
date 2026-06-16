

export const SITE_CONFIG = {
  name: 'Pioneer Global Edu',
  tagline: 'Your Gateway to Global Education',
  description:
    'Premium education consultancy helping students achieve their dreams of studying abroad at top universities worldwide.',
  url: 'https://pioneerglobaledu.com',
  email: 'pge.edu1@gmail.com',
  phone: '01571-402416',
  address: 'Mist mor, Duet Gate, Gazipur Mohanagar, Gazipur.',
  workingHours: 'Mon - Fri: 9:00 AM - 6:00 PM',
  socialLinks: {
    facebook: 'https://facebook.com/pioneerglobaledu',
    twitter: 'https://twitter.com/pioneerglobaledu',
    instagram: 'https://instagram.com/pioneerglobaledu',
    linkedin: 'https://linkedin.com/company/pioneerglobaledu',
    youtube: 'https://youtube.com/@pioneerglobaledu',
  },
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Student Counseling', href: '/services/student-counseling' },
      { label: 'University Selection', href: '/services/university-selection' },
      { label: 'Admission Processing', href: '/services/admission-processing' },
      { label: 'Visa Guidance', href: '/services/visa-guidance' },
      { label: 'Scholarship Assistance', href: '/services/scholarship-assistance' },
      { label: 'Accommodation Support', href: '/services/accommodation-support' },
      { label: 'Pre-Departure Guidance', href: '/services/pre-departure-guidance' },
    ],
  },
  {
    label: 'Destinations',
    href: '/destinations',
    children: [
      { label: 'USA', href: '/destinations/usa' },
      { label: 'UK', href: '/destinations/uk' },
      { label: 'Canada', href: '/destinations/canada' },
      { label: 'Australia', href: '/destinations/australia' },
      { label: 'Germany', href: '/destinations/germany' },
      { label: 'Sweden', href: '/destinations/sweden' },
      { label: 'Denmark', href: '/destinations/denmark' },
      { label: 'Finland', href: '/destinations/finland' },
      { label: 'Malaysia', href: '/destinations/malaysia' },
    ],
  },
  { label: 'Universities', href: '/universities' },
  { label: 'Scholarships', href: '/scholarships' },
  { label: 'Blog', href: '/blogs' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const COUNTRIES = [
  {
    id: 'usa',
    name: 'USA',
    flag: '🇺🇸',
    image: '/images/countries/usa.jpg',
    description: 'World-renowned education system with diverse opportunities',
    universities: 150,
    students: 10000,
    tuitionFees: '$20,000 - $60,000/year',
    livingCosts: '$12,000 - $20,000/year',
    scholarshipInfo: 'Generous merit and need-based scholarships available',
    benefits: [
      'World-class universities',
      'Flexible education system',
      'Research opportunities',
      'Cultural diversity',
      'Career prospects',
    ],
    visaRequirements: [
      'Valid passport with 6+ months validity',
      'Form I-20 from US university',
      'SEVIS fee payment receipt',
      'Financial proof (bank statements)',
      'English proficiency (TOEFL/IELTS)',
      'Valid F-1 student visa',
    ],
    admissionProcess: [
      'Research and shortlist universities',
      'Prepare for standardized tests (SAT/GRE/GMAT)',
      'Gather transcripts and recommendations',
      'Write statement of purpose',
      'Submit applications before deadlines',
      'Apply for student visa upon acceptance',
    ],
    faqs: [
      { question: 'What tests do I need?', answer: 'Most US universities require SAT/ACT for undergraduate and GRE/GMAT for graduate programs, plus TOEFL/IELTS for English proficiency.' },
      { question: 'Can I work while studying?', answer: 'F-1 visa holders can work on-campus up to 20 hours/week during semesters and full-time during breaks.' },
    ],
  },
  {
    id: 'uk',
    name: 'UK',
    flag: '🇬🇧',
    image: '/images/countries/uk.jpg',
    description: 'Rich academic heritage and globally recognized degrees',
    universities: 130,
    students: 8000,
    tuitionFees: '£15,000 - £45,000/year',
    livingCosts: '£12,000 - £18,000/year',
    scholarshipInfo: 'Chevening, Commonwealth, and university-specific scholarships available',
    benefits: [
      'Prestigious universities',
      'Shorter course duration',
      'Strong research culture',
      'Multicultural environment',
      'Post-study work visa',
    ],
    visaRequirements: [
      'Valid passport',
      'CAS (Confirmation of Acceptance for Studies)',
      'Financial evidence for tuition + living costs',
      'English language proficiency',
      'Tuberculosis test results (if applicable)',
      'Valid Student visa (formerly Tier 4)',
    ],
    admissionProcess: [
      'Choose course and university via UCAS or direct application',
      'Prepare personal statement and references',
      'Submit application with academic transcripts',
      'Receive offer and confirm acceptance',
      'Apply for student visa',
      'Arrange accommodation and travel',
    ],
    faqs: [
      { question: 'How long are UK degree programs?', answer: 'Undergraduate degrees are typically 3 years, master\'s degrees are 1 year, making UK programs shorter than many other countries.' },
      { question: 'Can I work after graduation?', answer: 'The Graduate Route visa allows you to work in the UK for 2 years (3 years for PhD graduates) after completing your studies.' },
    ],
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    image: '/images/countries/canada.jpg',
    description: 'High-quality education in a welcoming environment',
    universities: 90,
    students: 7500,
    tuitionFees: 'CAD 20,000 - 55,000/year',
    livingCosts: 'CAD 12,000 - 18,000/year',
    scholarshipInfo: 'Vanier CGS, Lester Pearson, and provincial scholarships available',
    benefits: [
      'Affordable education',
      'Immigration pathways',
      'Safe communities',
      'Work while studying',
      'Post-graduation work permit',
    ],
    visaRequirements: [
      'Valid passport',
      'Letter of acceptance from DLI',
      'Proof of financial support',
      'English/French proficiency (IELTS/TOEFL)',
      'Statement of purpose',
      'Biometrics and medical exam',
    ],
    admissionProcess: [
      'Research universities and programs',
      'Check admission requirements',
      'Prepare academic documents',
      'Submit application and fees',
      'Apply for study permit after acceptance',
      'Plan accommodation and travel',
    ],
    faqs: [
      { question: 'Can I work while studying?', answer: 'Yes, international students can work up to 20 hours/week during academic sessions and full-time during scheduled breaks.' },
      { question: 'What is the PGWP?', answer: 'The Post-Graduation Work Permit allows you to work in Canada for up to 3 years after completing your studies.' },
    ],
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    image: '/images/countries/australia.jpg',
    description: 'Sunny study destination with top-ranked universities',
    universities: 43,
    students: 6000,
    tuitionFees: 'AUD 25,000 - 55,000/year',
    livingCosts: 'AUD 15,000 - 22,000/year',
    scholarshipInfo: 'Australia Awards, Destination Australia, and university scholarships available',
    benefits: [
      'High-quality education',
      'Vibrant campus life',
      'Research opportunities',
      'Part-time work options',
      'Post-study work visa',
    ],
    visaRequirements: [
      'Valid passport',
      'Confirmation of Enrolment (CoE)',
      'Genuine Temporary Entrant (GTE) statement',
      'Financial evidence',
      'English proficiency (IELTS/TOEFL/PTE)',
      'Overseas Student Health Cover (OSHC)',
    ],
    admissionProcess: [
      'Choose course and institution',
      'Check entry requirements',
      'Submit application with documents',
      'Receive Letter of Offer',
      'Accept offer and pay fees',
      'Apply for student visa',
    ],
    faqs: [
      { question: 'Can I work while studying?', answer: 'Student visa holders can work up to 48 hours per fortnight during study periods and unlimited hours during breaks.' },
      { question: 'What is the Temporary Graduate Visa?', answer: 'This visa allows international graduates to live and work in Australia for 2-4 years after completing their studies.' },
    ],
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    image: '/images/countries/germany.jpg',
    description: 'Tuition-free education at world-class institutions',
    universities: 80,
    students: 5500,
    tuitionFees: '€0 - €3,000/year (public universities)',
    livingCosts: '€11,000 - €14,000/year',
    scholarshipInfo: 'DAAD scholarships, Deutschlandstipendium, and university funding available',
    benefits: [
      'Tuition-free education',
      'Strong engineering focus',
      'Research excellence',
      'Central Europe location',
      'Industry connections',
    ],
    visaRequirements: [
      'Valid passport',
      'University admission letter',
      'Proof of financial resources (€11,208/year)',
      'Health insurance coverage',
      'German language proficiency (for German programs)',
      'Blocked account statement',
    ],
    admissionProcess: [
      'Check admission requirements (APS may be needed)',
      'Submit application via Uni-Assist or directly',
      'Prepare academic documents and translations',
      'Prove German or English language proficiency',
      'Receive admission letter',
      'Apply for student visa and open blocked account',
    ],
    faqs: [
      { question: 'Is education really free in Germany?', answer: 'Public universities in Germany charge only a semester fee (€150-€400) which includes public transport. Some federal states charge €1,500/semester for non-EU students.' },
      { question: 'Do I need to know German?', answer: 'Many master\'s programs are taught in English. However, knowing German helps with daily life and job prospects.' },
    ],
  },
  {
    id: 'sweden',
    name: 'Sweden',
    flag: '🇸🇪',
    image: '/images/countries/sweden.jpg',
    description: 'Innovative education in a progressive society',
    universities: 35,
    students: 3000,
    tuitionFees: 'SEK 80,000 - 200,000/year',
    livingCosts: 'SEK 90,000 - 120,000/year',
    scholarshipInfo: 'Swedish Institute Scholarships, university-specific scholarships available',
    benefits: [
      'Innovative teaching',
      'Sustainable living',
      'English-taught programs',
      'Strong welfare system',
      'Startup ecosystem',
    ],
    visaRequirements: [
      'Valid passport',
      'University acceptance letter',
      'Proof of financial means',
      'Health insurance',
      'Valid residence permit for studies',
      'Completed application form',
    ],
    admissionProcess: [
      'Apply via universityadmissions.se',
      'Submit academic transcripts and documents',
      'Prove English proficiency',
      'Receive admission decision',
      'Apply for residence permit',
      'Plan accommodation and arrival',
    ],
    faqs: [
      { question: 'Are programs taught in English?', answer: 'Sweden offers over 900 English-taught programs at bachelor\'s and master\'s levels.' },
      { question: 'Can I stay after graduation?', answer: 'You can apply for a 12-month residence permit to seek employment after completing your studies.' },
    ],
  },
  {
    id: 'denmark',
    name: 'Denmark',
    flag: '🇩🇰',
    image: '/images/countries/denmark.jpg',
    description: 'Design and engineering excellence in Scandinavia',
    universities: 25,
    students: 2500,
    tuitionFees: 'DKK 45,000 - 120,000/year',
    livingCosts: 'DKK 72,000 - 96,000/year',
    scholarshipInfo: 'Danish government scholarships, university-specific funding available',
    benefits: [
      'Design-led education',
      'High quality of life',
      'English proficiency',
      'Green living',
      'Strong economy',
    ],
    visaRequirements: [
      'Valid passport',
      'Letter of admission',
      'Proof of financial support',
      'Health insurance',
      'Valid residence permit application',
      'Study progress documentation',
    ],
    admissionProcess: [
      'Research programs on studyindenmark.dk',
      'Submit application via optagelse.dk',
      'Provide academic documents',
      'Document English proficiency',
      'Receive admission decision',
      'Apply for residence permit',
    ],
    faqs: [
      { question: 'What is the SU rate?', answer: 'Danish students receive Statens Uddannelsesstøtte (SU). International students may be eligible under certain conditions.' },
      { question: 'Can I work while studying?', answer: 'International students can work up to 20 hours per week and full-time during June, July, and August.' },
    ],
  },
  {
    id: 'finland',
    name: 'Finland',
    flag: '🇫🇮',
    image: '/images/countries/finland.jpg',
    description: 'Top-ranked education system with innovative approach',
    universities: 20,
    students: 2000,
    tuitionFees: '€8,000 - €20,000/year (non-EU)',
    livingCosts: '€9,600 - €12,000/year',
    scholarshipInfo: 'Finnish government scholarships, university tuition waivers available',
    benefits: [
      'World-class education',
      'Research-driven',
      'Nature and technology',
      'Safe environment',
      'Work-life balance',
    ],
    visaRequirements: [
      'Valid passport',
      'Acceptance letter from Finnish university',
      'Proof of sufficient funds (€6,720/year)',
      'Health insurance',
      'Valid residence permit application',
      'Academic transcripts',
    ],
    admissionProcess: [
      'Apply via Studyinfo.fi',
      'Submit application and documents',
      'Take entrance exams (if required)',
      'Prove English proficiency',
      'Receive admission decision',
      'Apply for residence permit',
    ],
    faqs: [
      { question: 'Why study in Finland?', answer: 'Finland has one of the best education systems globally, with innovative teaching methods and excellent research facilities.' },
      { question: 'Can I work after graduation?', answer: 'You can apply for a residence permit to seek work for up to 2 years after completing your degree.' },
    ],
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    image: '/images/countries/malaysia.jpg',
    description: 'Affordable quality education in a diverse culture',
    universities: 45,
    students: 4000,
    tuitionFees: 'MYR 15,000 - 50,000/year',
    livingCosts: 'MYR 12,000 - 18,000/year',
    scholarshipInfo: 'Government scholarships, twinning program benefits available',
    benefits: [
      'Affordable tuition',
      'Multicultural society',
      'English medium instruction',
      'Tropical lifestyle',
      'Strategic location',
    ],
    visaRequirements: [
      'Valid passport',
      'Letter of offer from institution',
      'Medical examination report',
      'Financial evidence',
      'Student pass application',
      'Health insurance',
    ],
    admissionProcess: [
      'Choose program and institution',
      'Submit application with documents',
      'Receive offer letter',
      'Apply for student visa (Student Pass)',
      'Arrange accommodation',
      'Travel to Malaysia',
    ],
    faqs: [
      { question: 'What is a twinning program?', answer: 'Malaysia offers 2+1 or 3+0 twinning programs where you can complete part of your degree in Malaysia and part in a partner country like UK or Australia.' },
      { question: 'Is English widely spoken?', answer: 'Yes, English is widely used in education and business throughout Malaysia.' },
    ],
  },
]

export const SERVICES: ServiceItem[] = [
  {
    id: 'student-counseling',
    title: 'Student Counseling',
    description: 'Personalized guidance to help you choose the right academic path for your future.',
    icon: 'GraduationCap',
    benefits: [
      'Career assessment and profiling',
      'Course and university recommendations',
      'One-on-one counseling sessions',
      'Study plan development',
      'Ongoing support throughout your journey',
    ],
    process: [
      'Submit your inquiry online',
      'Schedule a free counseling session',
      'Complete career assessment',
      'Receive personalized recommendations',
      'Develop your study plan',
    ],
  },
  {
    id: 'university-selection',
    title: 'University Selection',
    description: 'Expert assistance in finding the perfect university that matches your goals and preferences.',
    icon: 'Globe',
    benefits: [
      'University shortlisting based on profile',
      'Application strategy planning',
      'Deadline management',
      'Comparative analysis of options',
      'Virtual campus tours',
    ],
    process: [
      'Profile evaluation',
      'Research universities',
      'Shortlist best options',
      'Compare programs and costs',
      'Finalize selections',
    ],
  },
  {
    id: 'admission-processing',
    title: 'Admission Processing',
    description: 'End-to-end support for your university applications to ensure a smooth admission process.',
    icon: 'FileCheck',
    benefits: [
      'Application form assistance',
      'Document preparation and review',
      'SOP and essay editing',
      'LOR coordination',
      'Application submission tracking',
    ],
    process: [
      'Document checklist creation',
      'Application form filling',
      'Statement of purpose writing',
      'Recommendation letter collection',
      'Submit and track applications',
    ],
  },
  {
    id: 'visa-guidance',
    title: 'Visa Guidance',
    description: 'Comprehensive visa application support to maximize your chances of approval.',
    icon: 'Plane',
    benefits: [
      'Visa document preparation',
      'Interview coaching',
      'Financial documentation guidance',
      'Application review and verification',
      'Post-visa support',
    ],
    process: [
      'Visa requirement briefing',
      'Document gathering and verification',
      'Application form assistance',
      'Mock interview sessions',
      'Visa application submission',
    ],
  },
  {
    id: 'scholarship-assistance',
    title: 'Scholarship Assistance',
    description: 'Help finding and applying for scholarships to make your education more affordable.',
    icon: 'Award',
    benefits: [
      'Scholarship database access',
      'Eligibility assessment',
      'Application guidance',
      'Essay and statement editing',
      'Deadline reminders',
    ],
    process: [
      'Scholarship search',
      'Eligibility check',
      'Application preparation',
      'Document submission',
      'Follow-up and tracking',
    ],
  },
  {
    id: 'accommodation-support',
    title: 'Accommodation Support',
    description: 'Assistance finding suitable and safe accommodation in your study destination.',
    icon: 'Home',
    benefits: [
      'Accommodation options research',
      'University housing applications',
      'Private rental assistance',
      'Budget optimization',
      'Pre-arrival coordination',
    ],
    process: [
      'Needs assessment',
      'Option research',
      'Property shortlisting',
      'Application assistance',
      'Pre-arrival arrangements',
    ],
  },
  {
    id: 'pre-departure-guidance',
    title: 'Pre-Departure Guidance',
    description: 'Comprehensive orientation to prepare you for your journey and life abroad.',
    icon: 'HeartHandshake',
    benefits: [
      'Pre-departure orientation sessions',
      'Packing and travel tips',
      'Cultural adaptation guidance',
      'Banking and finance setup',
      'Emergency contact information',
    ],
    process: [
      'Pre-departure workshop',
      'Travel arrangements',
      'Document check',
      'Cultural orientation',
      'Arrival coordination',
    ],
  },
]

export const STATS: StatItem[] = [
  { value: '10,000+', label: 'Students Placed' },
  { value: '500+', label: 'Partner Universities' },
  { value: '50+', label: 'Countries' },
  { value: '98%', label: 'Success Rate' },
  { value: '15+', label: 'Years Experience' },
  { value: '4.9/5', label: 'Student Satisfaction' },
]

export const WHY_CHOOSE_US = [
  {
    title: 'Expert Counselors',
    description: 'Our team consists of certified education counselors with years of international experience.',
    icon: 'Users',
  },
  {
    title: 'Personalized Approach',
    description: 'We create tailored study plans based on your unique academic profile and career goals.',
    icon: 'Target',
  },
  {
    title: 'End-to-End Support',
    description: 'From counseling to post-arrival assistance, we support you at every step of your journey.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Visa Success Rate',
    description: 'Our proven track record of 98% visa approval rate speaks for our expertise.',
    icon: 'FileCheck',
  },
  {
    title: 'Global Network',
    description: 'Partnerships with 500+ universities across 50+ countries worldwide.',
    icon: 'Globe',
  },
  {
    title: 'Scholarship Access',
    description: 'We help you find and secure scholarships worth up to 100% of tuition fees.',
    icon: 'Award',
  },
]

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'MSc Computer Science',
    country: 'USA',
    university: 'Stanford University',
    image: '',
    content:
      'Pioneer Global Edu made my dream of studying at Stanford a reality. Their counselors guided me through every step of the application process, and their visa guidance was exceptional.',
    rating: 5,
    featured: true,
  },
  {
    id: '2',
    name: 'Ahmed Hassan',
    role: 'MBA',
    country: 'Canada',
    university: 'University of Toronto',
    image: '',
    content:
      'The team at Pioneer Global Edu helped me secure a scholarship that covered 70% of my tuition. I am forever grateful for their support and expertise throughout my application journey.',
    rating: 5,
    featured: true,
  },
  {
    id: '3',
    name: 'Maria Garcia',
    role: 'BSc Mechanical Engineering',
    country: 'Germany',
    university: 'TU Munich',
    image: '',
    content:
      'Studying in Germany was always my dream, and Pioneer Global Edu made it happen. They helped me navigate the complex application process and even assisted with accommodation.',
    rating: 5,
    featured: true,
  },
  {
    id: '4',
    name: 'James Chen',
    role: 'PhD Economics',
    country: 'UK',
    university: 'London School of Economics',
    image: '',
    content:
      'Professional, responsive, and incredibly knowledgeable. Pioneer Global Edu provided exceptional guidance for my PhD application. I highly recommend their services.',
    rating: 5,
    featured: true,
  },
  {
    id: '5',
    name: 'Priya Patel',
    role: 'MSc Data Science',
    country: 'Australia',
    university: 'University of Melbourne',
    image: '',
    content:
      'From university selection to visa application, Pioneer Global Edu was with me every step of the way. Their attention to detail and personalized approach made all the difference.',
    rating: 5,
    featured: true,
  },
]

export const FAQS = [
  {
    question: 'What services does Pioneer Global Edu offer?',
    answer:
      'We offer comprehensive study abroad services including student counseling, university selection, admission processing, visa guidance, scholarship assistance, accommodation support, and pre-departure guidance.',
  },
  {
    question: 'How long does the application process take?',
    answer:
      'The timeline varies by country and university, but typically ranges from 3 to 9 months. We recommend starting the process at least 8-12 months before your intended intake.',
  },
  {
    question: 'What are the eligibility requirements for studying abroad?',
    answer:
      'Eligibility requirements vary by country and university. Generally, you need a strong academic record, English language proficiency (IELTS/TOEFL), and sufficient financial resources. We assess your profile to determine suitable options.',
  },
  {
    question: 'How much does it cost to study abroad?',
    answer:
      'Costs vary significantly by country, university, and program. Tuition fees can range from $5,000 to $50,000+ per year. Living expenses also vary. We provide detailed cost breakdowns during counseling.',
  },
  {
    question: 'Can you help with scholarship applications?',
    answer:
      'Yes, we provide comprehensive scholarship assistance including identifying suitable scholarships, preparing applications, and meeting deadlines. Our students have secured scholarships worth up to 100% of tuition.',
  },
  {
    question: 'What is your visa success rate?',
    answer:
      'Our visa success rate is 98%, well above the industry average. Our experienced visa consultants ensure all documentation is complete and accurate to maximize approval chances.',
  },
  {
    question: 'Do you offer post-arrival support?',
    answer:
      'Yes, we offer pre-departure guidance and can coordinate with our partners abroad for airport pickup, accommodation, and orientation support in your destination country.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply fill out our consultation form or contact us directly. We will schedule a free counseling session to understand your goals and guide you through the next steps.',
  },
]

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: string
  benefits: string[]
  process: string[]
}

export interface StatItem {
  value: string
  label: string
}

export const INTAKE_OPTIONS = [
  { value: 'fall-2025', label: 'Fall 2025 (September)' },
  { value: 'spring-2026', label: 'Spring 2026 (January)' },
  { value: 'summer-2026', label: 'Summer 2026 (May)' },
  { value: 'fall-2026', label: 'Fall 2026 (September)' },
  { value: 'spring-2027', label: 'Spring 2027 (January)' },
]

export const QUALIFICATION_OPTIONS = [
  { value: 'high-school', label: 'High School' },
  { value: 'bachelors', label: "Bachelor's Degree" },
  { value: 'masters', label: "Master's Degree" },
  { value: 'phd', label: 'PhD / Doctorate' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'other', label: 'Other' },
]

export const BLOG_CATEGORIES = [
  'Study Abroad',
  'Visa Guide',
  'Scholarships',
  'University Rankings',
  'Student Life',
  'Career Tips',
  'Country Guides',
  'Exam Preparation',
]

export const IMAGES = {
  hero: '/assat/slider/slider-img-1.jpeg',
  about: '/assat/founder/founder.jpeg',
  consultation: '/assat/slider/slider-img-2.jpeg',
  countries: {
    usa: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80',
    uk: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
    canada: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&q=80',
    australia: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80',
    germany: 'https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?w=600&q=80',
    sweden: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=600&q=80',
    denmark: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&q=80',
    finland: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80',
    malaysia: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80',
  },
  universities: {
    default: '/assat/gallary/photo-gallary.jpeg',
  },
  blogs: {
    default: '/assat/gallary/photo-gallary-1.jpeg',
    study: '/assat/gallary/photo-gallary-2.jpeg',
    scholarship: '/assat/gallary/photo-gallary.jpeg',
    visa: '/assat/gallary/photo-gallary-1.jpeg',
  },
  team: {
    sarah: '/assat/founder/founder-img-1.jpeg',
    james: '/assat/founder/founder-img-2.jpeg',
    emily: '/assat/founder/founder-img-3.jpeg',
    michael: '/assat/founder/founder-img-4.jpeg',
  },
  testimonial: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&q=80',
} as const
