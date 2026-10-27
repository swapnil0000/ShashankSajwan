// Default content for every editable block. The admin panel overrides any of these
// by writing a document with the same key to the Firestore `content` collection.
import { strings } from '../i18n/strings';
import { PRELIMS_DATE, socials, studySections, youtubeVideos } from './studyHub';
import { bookCombo, bookList } from './books';
import { faqs } from './faqs';
import { choosedata } from './data';
import { resourcePages } from './resources';

const both = (key) => ({ en: strings.en[key], hi: strings.hi[key] });

const allVideos = [
  { id: 'LKDJZ4kgxbA', title: 'NCERTs for IAS exam', cat: 'Strategy' },
  { id: 'RD5uvkib1EY', title: 'How to start IAS preparation?', cat: 'Beginners' },
  { id: 'MS_vuWUDRj0', title: 'My UPSC CSE journey mistakes', cat: 'Motivation' },
  { id: 'mX4nHl2LDmk', title: 'All about CSAT', cat: 'Strategy' },
  { id: '81Af345gor0', title: 'IAS exam pattern', cat: 'Beginners' },
  { id: '590IoW54OXU', title: 'Prelims syllabus analysis', cat: 'Strategy' },
  { id: '4LwUI3_kBtU', title: 'How to read newspaper?', cat: 'Strategy' },
  { id: 'l3J50LCh31k', title: 'English improvement tips', cat: 'Skills' },
  { id: 'c1Kj0nvG6n8', title: 'Time management for aspirants', cat: 'Skills' },
  { id: 'tQMQmtcb1G4', title: 'For school students', cat: 'Beginners' },
  { id: 'RwkX6ThaM_8', title: 'Optional selection strategy', cat: 'Strategy' },
  { id: 'zigTkDzCdvo', title: 'How to read NCERTs?', cat: 'Strategy' },
  { id: 'tI7qhKQGcnE', title: 'Biggest mistake during preparation', cat: 'Motivation' },
  { id: '_IkGnczXwck', title: 'Important UPSC CSE subjects', cat: 'Beginners' },
  { id: '0BQPGWAKfNU', title: 'Answer writing tips', cat: 'Skills' },
  { id: 'HbcHQBsQTAI', title: 'Game changer for UPSC CSE aspirants', cat: 'Motivation' },
  { id: 'd4aegXqxE-U', title: 'Mistakes during preparation', cat: 'Motivation' },
  { id: 'vGRYeiFf2YU', title: 'Social media addiction', cat: 'Motivation' },
].map((v) => ({ ...v, featured: youtubeVideos.some((y) => y.id === v.id) }));

export const HOME_SECTIONS = [
  { id: 'hero', label: 'Hero (headline, search, banner, countdown)' },
  { id: 'stats', label: 'Stats strip' },
  { id: 'batch', label: 'Batch / mentorship teaser' },
  { id: 'study', label: 'Study sections grid' },
  { id: 'books', label: 'Books row' },
  { id: 'features', label: 'Book features' },
  { id: 'director', label: "Director's pen" },
  { id: 'josh', label: 'Josh Talks' },
  { id: 'videos', label: 'Most viewed videos' },
  { id: 'community', label: 'Community banner' },
];

export const contentDefaults = {
  site: {
    tagline: both('tagline'),
    email: 'ask.iasmentor@gmail.com',
    socials,
    prelimsDate: PRELIMS_DATE,
    prelimsLabel: both('prelimsIn'),
    announcement: { enabled: false, text: '', link: '' },
  },
  home: {
    sections: HOME_SECTIONS.map((s) => ({ id: s.id, visible: true })),
    heroBadge: both('heroBadge'),
    heroTitleA: both('heroTitleA'),
    heroTitleB: both('heroTitleB'),
    heroSub: both('heroSub'),
    heroChips: ['Polity', 'Economy', 'History', 'Geography', 'Environment', 'Science'],
    banner: { img: '/assets/banners/Book.png', link: '/books' },
    stats: [
      { value: 650, suffix: 'K+', label: 'YouTube subscribers', icon: 'youtube' },
      { value: 200, suffix: 'K+', label: 'Instagram followers', icon: 'instagram' },
      { value: 128, suffix: 'K+', label: 'Telegram members', icon: 'telegram' },
      { value: 7, suffix: '', label: 'NCERT-mapped books', icon: 'books' },
    ],
    featuresTitle: both('keyFeatures'),
    features: choosedata.map((f) => ({ img: f.img, title: f.title, text: [f.value, f.value1].filter(Boolean).join(' ').trim() })),
    directorImg: '/assets/top.webp',
    directorQuote: "There is a myth that the IAS exam is the toughest and hard to achieve. However, I believe that with discipline, self-belief, hard work, and consistent efforts, one can definitely achieve the goal of becoming an officer. With the right guidance and clear direction, my purpose is to make the aspirants' journey smooth.",
    joshVideoId: '2h3V2g58Whg',
    joshPoints: [
      'Tackles the real trials UPSC aspirants face',
      'Most-viewed talk among civil services aspirants',
      'Actionable solutions for time management & motivation',
      'Practical advice to overcome preparation obstacles',
    ],
    communityTitle: both('community'),
    communityText: 'Daily current affairs, PYQ discussions and strategy — free.',
  },
  // UPSC Full-Fledged Preparation Batch (/courses). Text from the original course & payment pages.
  batch: {
    enabled: true,
    navLabel: 'Batch',
    badge: 'Admissions open',
    title: 'UPSC Full-Fledged',
    accent: 'Preparation Batch',
    subtitle: 'Complete preparation with proper mentorship and guidance, all study materials, and direct interaction with Shashank Sir.',
    image: '/assets/banner2.webp',
    videoUrl: 'https://www.youtube.com/watch?v=iMgo6KXEjC8',
    brochureUrl: 'https://drive.google.com/file/d/1uaihxINODY8nbJVZhnNMun-HkYmbg6L2/view?pli=1',
    price: '',
    ctaLabel: 'Enquire now',
    ctaLink: '',
    highlights: [
      { icon: '📅', text: '2 Years Access' },
      { icon: '🧭', text: 'Proper Mentorship/Guidance' },
      { icon: '📘', text: 'Full Course Completion' },
      { icon: '🔤', text: 'English Medium' },
      { icon: '📝', text: 'All Micro-Topics covered with lectures and notes' },
      { icon: '🎥', text: 'Live Interaction/Doubt Sessions' },
    ],
    details: [
      { title: 'Comprehensive UPSC preparation', text: 'Complete course with lectures and study materials. Mentorship provided throughout the journey.' },
      { title: 'Personalized Guidance', text: 'Direct interaction with Shashank Sajwan sir. 24/7 support for doubts and queries.' },
      { title: 'Practise and Revision', text: 'Over 40 previous Year Questions (PYQs) sessions. Monthly Current Affairs Magazine/Analysis.' },
      { title: 'CSAT Preparation', text: 'Dedicated sessions to excel in the CSAT paper.' },
      { title: 'Optional Subject Guidance', text: 'Expert assistance in selecting and preparing optional subjects.' },
      { title: 'Extended Access', text: '2 years of access to the course content.' },
      { title: 'Continuous Support', text: 'Personalized touch maintained even after course completion.' },
      { title: 'Mains Preparation', text: 'Rigorous training for mains answer writing.' },
      { title: 'Interview Preparation', text: 'Specialized guidance to ace the interview round.' },
      { title: 'Essay Writing Training', text: 'Techniques and practice for mastering essay writing.' },
    ],
    terms: [
      'We request for the Confidentiality of course materials.',
      'Sharing materials outside the course leads to immediate ban without refund.',
      'Fees is Non-Refundable.',
      '2-year access to course materials upon enrollment.',
      'Professional conduct required; disruptive behavior results in expulsion.',
    ],
    faqs: [
      { q: 'Will this UPSC Full-Fledged Batch offer study materials such as notes and video lectures?', a: 'Yes, All the notes of all the subjects including with proper lectures, PYQ Analysis, tips & tricks will be delivered.' },
      { q: 'What are Mentorship Sessions?', a: 'Mentorship Sessions will be conducted every week, students will interact directly with Shashank Sir.' },
      { q: 'Who will conduct mentorship sessions, and how will participants receive their session schedules?', a: 'Shashank Sir will conduct Mentorship Sessions, students will get the notification & access of live sessions through their telegram channel.' },
      { q: 'Are the lectures presented live or in recorded format?', a: 'That is totally combined format, modules are designed in a way that students will not study but they’ll enjoy their preparation journey also.' },
      { q: 'Are weekly assessments part of the course structure?', a: 'Yes, we will track your progress on weekly & monthly basis through weekly test and all.' },
      { q: 'How can participants access the classes?', a: 'Private portal will be shared after your admissions.' },
      { q: 'What is Direct Interaction in this course?', a: 'Throughout your journey, you’ll have personal number of Shashank Sir, on which aspirants can ask their doubts (Subjective/Non-Subjective), and the Personal Interaction will not be discontinued after the course ends.' },
    ],
  },
  studySections: { items: studySections },
  books: { combo: bookCombo, items: bookList },
  videos: { categories: ['Beginners', 'Strategy', 'Skills', 'Motivation'], items: allVideos },
  faqs: { items: faqs },
  about: {
    heroTitle: 'Meet your',
    heroAccent: 'mentor',
    heroSub: 'Shashank Sajwan — UPSC mentor, author and educator helping lakhs of aspirants prepare with clarity.',
    photo: '/assets/shashanksajwan2.0.webp',
    bio: [
      'Shashank Sajwan, originally from Uttarakhand, pursued Physics Hons. from Delhi University, followed by a Post-Graduation in Public Administration from IGNOU. His passion for UPSC emerged during his undergraduate years, and after post-graduation he dedicated himself to this pursuit.',
      'Recognising the challenges faced by aspirants lacking proper guidance, he began sharing insights on Instagram — reaching over 1 million followers and subscribers across platforms. Today aspirants find free notes, PYQs and resources right here.',
      'As Shashank embarks on this new journey, his commitment to empowering aspirants remains unwavering.',
    ],
    milestones: [
      { value: '1 Lakh+', label: 'Aspirants mentored' },
      { value: '10%+', label: 'Success ratio' },
      { value: '#1', label: 'Most viewed Josh Talks session' },
      { value: '1M+', label: 'Followers across platforms' },
    ],
    vision: [
      { icon: '💸', title: 'Cost-effectiveness', text: 'Top-notch education at affordable rates.' },
      { icon: '🎯', title: 'Customized Education', text: 'Guidance that fits where you are in your journey.' },
      { icon: '🏅', title: 'Exceptional Instruction', text: 'Faculty who have faced the UPSC interview themselves.' },
      { icon: '🤝', title: 'Needed Mentorship', text: 'Personal mentorship that consistently helps students.' },
      { icon: '🧠', title: 'Smart Study', text: 'Work on what matters most for the exam.' },
    ],
    team: 'Our team comprises highly educated and experienced professionals, with several faculty members having undergone the interview process themselves. Our collective aim is to deliver the utmost quality education, prioritising excellence in every aspect of our teaching approach.',
    teamPoints: [
      'Recognised as one of the most innovative UPSC YouTube channels in India',
      'Pioneering mentorship programmes',
      'Setting new standards in affordable UPSC education',
    ],
  },
  contact: {
    heroSub: 'Questions about preparation, feedback or suggestions — we read every email.',
    emailText: 'For guidance on Civil Services preparation or feedback, write to:',
    workText: 'Interested in being part of this growing organisation? Send your resume and a few work samples by email. The team will get back to you soon.',
    officeText: 'All email communication is managed and answered by our head office in Dehradun, Uttarakhand.',
  },
};

Object.entries(resourcePages).forEach(([key, page]) => {
  contentDefaults[`resource_${key}`] = page;
});
