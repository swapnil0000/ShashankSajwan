// Catalogue of study sections used by Home, Study Hub and search.
// Each entry routes to the existing resource page that holds the PDFs.
export const subjects = ['Polity', 'Economy', 'History', 'Geography', 'Environment', 'Science', 'Art & Culture', 'Current Affairs', 'Ethics'];

export const studySections = [
  {
    id: 'ncert',
    path: '/ncert',
    icon: '📘',
    accent: '#1B2A6B',
    title: { en: 'NCERT Notes', hi: 'NCERT नोट्स' },
    desc: { en: 'Class 6–12 NCERTs, subject-wise', hi: 'कक्षा 6–12 की NCERT, विषयवार' },
    tags: ['Polity', 'Economy', 'History', 'Geography', 'Science', 'Art & Culture'],
  },
  {
    id: 'syllabus',
    path: '/syllabus',
    icon: '🧭',
    accent: '#FF8A1F',
    title: { en: 'Syllabus', hi: 'पाठ्यक्रम' },
    desc: { en: 'Prelims & Mains syllabus decoded', hi: 'प्रारंभिक व मुख्य पाठ्यक्रम' },
    tags: ['Polity', 'Economy', 'History', 'Geography', 'Ethics'],
  },
  {
    id: 'pyqs',
    path: '/pyqs',
    icon: '🎯',
    accent: '#E0294A',
    title: { en: 'Previous Year Questions', hi: 'पिछले वर्षों के प्रश्न' },
    desc: { en: 'Prelims & Mains PYQ papers', hi: 'प्रारंभिक व मुख्य PYQ पेपर' },
    tags: ['Polity', 'Economy', 'History', 'Geography', 'Environment', 'Science', 'Current Affairs'],
  },
  {
    id: 'general',
    path: '/general',
    icon: '🏛️',
    accent: '#1B2A6B',
    title: { en: 'General Studies', hi: 'सामान्य अध्ययन' },
    desc: { en: 'GS I–IV notes and material', hi: 'GS I–IV नोट्स व सामग्री' },
    tags: ['Polity', 'History', 'Geography', 'Ethics', 'Environment'],
  },
  {
    id: 'optional',
    path: '/optional',
    icon: '📚',
    accent: '#FF8A1F',
    title: { en: 'Optional Subjects', hi: 'वैकल्पिक विषय' },
    desc: { en: 'Optional paper resources', hi: 'वैकल्पिक विषय सामग्री' },
    tags: ['Geography', 'History', 'Economy'],
  },
  {
    id: 'newspaper',
    path: '/newspaper',
    icon: '📰',
    accent: '#FF8A1F',
    title: { en: 'Newspaper Notes', hi: 'समाचार पत्र नोट्स' },
    desc: { en: 'Daily notes · 2026, 2025 & 2024', hi: 'दैनिक नोट्स' },
    tags: ['Current Affairs', 'Economy', 'Environment'],
  },
  {
    id: 'current-affairs',
    path: '/resources/current-affairs',
    icon: '🌏',
    accent: '#E0294A',
    title: { en: 'Current Affairs', hi: 'करेंट अफ़ेयर्स' },
    desc: { en: 'Daily updates for Prelims & Mains', hi: 'दैनिक अपडेट' },
    tags: ['Current Affairs', 'Polity', 'Economy'],
  },
  {
    id: 'videos',
    path: '/videos',
    icon: '▶️',
    accent: '#FF8A1F',
    title: { en: 'Video Lectures', hi: 'वीडियो लेक्चर' },
    desc: { en: 'Strategy & concept videos', hi: 'रणनीति व अवधारणा वीडियो' },
    tags: ['Current Affairs', 'Ethics'],
  },
];


export const youtubeVideos = [
  { id: 'HbcHQBsQTAI', title: 'Game changer for UPSC CSE aspirants' },
  { id: 'd4aegXqxE-U', title: 'Mistakes during preparation' },
  { id: 'gmXMDbwt_so', title: 'UPSC prelims syllabus analysis' },
  { id: 'kBnZHlYfhPg', title: 'Important IAS exam books' },
];

export const socials = {
  youtube: 'https://youtube.com/@ShashankSajwan?si=wmlMFjuWQhsZmCGS',
  instagram: 'https://www.instagram.com/iasips_mentor?igsh=Mjk1bGNraGttNW5i',
  telegram: 'https://t.me/iasips_mentor',
  x: 'https://twitter.com/iasips_mentor',
  linkedin: 'https://www.linkedin.com/in/shashanksajwan',
};

// Tentative — update when UPSC publishes the 2027 calendar.
export const PRELIMS_DATE = '2027-05-23T09:30:00+05:30';
