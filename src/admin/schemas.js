// Field definitions for every editable block. The admin form is generated from these.
// Types: text, textarea, url, image, number, bool, datetime, i18n, i18nArea, select,
//        strings (list of text), list (list of objects with `fields`), object (nested `fields`).
import { HOME_SECTIONS } from '../data/content';
import { resourcePages } from '../data/resources';

const resourceItem = [
  { key: 'title', label: 'Title (optional)', type: 'text' },
  { key: 'img', label: 'Thumbnail', type: 'image' },
  { key: 'link', label: 'PDF / Drive link', type: 'url' },
];

const resourceSchema = {
  fields: [
    { key: 'title', label: 'Page title', type: 'text' },
    { key: 'accent', label: 'Title accent (gradient word)', type: 'text' },
    { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
    { key: 'tabs', label: 'Tabs', type: 'list', itemLabel: (t) => t.label, fields: [
      { key: 'label', label: 'Tab name', type: 'text' },
      { key: 'items', label: 'Documents', type: 'list', itemLabel: (d, i) => d.title || `Document ${i + 1}`, fields: resourceItem },
    ] },
  ],
};

export const adminGroups = [
  {
    title: 'Website',
    blocks: [
      { key: 'site', label: 'Site settings', icon: '⚙️', desc: 'Tagline, contact email, social links, Prelims countdown, announcement bar', fields: [
        { key: 'tagline', label: 'Tagline', type: 'i18n' },
        { key: 'email', label: 'Contact email', type: 'text' },
        { key: 'prelimsDate', label: 'Prelims date & time', type: 'datetime' },
        { key: 'prelimsLabel', label: 'Countdown label', type: 'i18n' },
        { key: 'socials', label: 'Social links', type: 'object', fields: [
          { key: 'youtube', label: 'YouTube', type: 'url' },
          { key: 'instagram', label: 'Instagram', type: 'url' },
          { key: 'telegram', label: 'Telegram', type: 'url' },
          { key: 'x', label: 'X / Twitter', type: 'url' },
          { key: 'linkedin', label: 'LinkedIn', type: 'url' },
        ] },
        { key: 'announcement', label: 'Announcement bar', type: 'object', fields: [
          { key: 'enabled', label: 'Show announcement', type: 'bool' },
          { key: 'text', label: 'Text', type: 'text' },
          { key: 'link', label: 'Link (optional)', type: 'url' },
        ] },
      ] },
    ],
  },
  {
    title: 'Pages',
    blocks: [
      { key: 'home', label: 'Home page', icon: '🏠', desc: 'Every home block: hero, banner, stats, features, director, Josh Talks, community', fields: [
        { key: 'sections', label: 'Sections (drag order & visibility)', type: 'list', fixed: true, itemLabel: (s) => HOME_SECTIONS.find((h) => h.id === s.id)?.label || s.id, fields: [
          { key: 'visible', label: 'Visible', type: 'bool' },
        ] },
        { key: 'heroBadge', label: 'Hero badge', type: 'i18n' },
        { key: 'heroTitleA', label: 'Hero title (line 1)', type: 'i18n' },
        { key: 'heroTitleB', label: 'Hero title (gradient line 2)', type: 'i18n' },
        { key: 'heroSub', label: 'Hero subtitle', type: 'i18nArea' },
        { key: 'heroChips', label: 'Hero quick-search chips', type: 'strings' },
        { key: 'banner', label: 'Hero banner', type: 'object', fields: [
          { key: 'img', label: 'Banner image', type: 'image' },
          { key: 'link', label: 'Banner link', type: 'url' },
        ] },
        { key: 'stats', label: 'Stats', type: 'list', itemLabel: (s) => `${s.value}${s.suffix} ${s.label}`, fields: [
          { key: 'value', label: 'Number', type: 'number' },
          { key: 'suffix', label: 'Suffix (e.g. K+)', type: 'text' },
          { key: 'label', label: 'Label', type: 'text' },
          { key: 'icon', label: 'Icon', type: 'select', options: ['youtube', 'instagram', 'telegram', 'books', 'star'] },
        ] },
        { key: 'featuresTitle', label: 'Features heading', type: 'i18n' },
        { key: 'features', label: 'Book features', type: 'list', itemLabel: (f) => f.title, fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'img', label: 'Icon image', type: 'image' },
          { key: 'text', label: 'Description', type: 'textarea' },
        ] },
        { key: 'directorImg', label: "Director's photo", type: 'image' },
        { key: 'directorQuote', label: "Director's quote", type: 'textarea' },
        { key: 'joshVideoId', label: 'Josh Talks YouTube video ID', type: 'text', help: 'The part after v= in the YouTube URL' },
        { key: 'joshPoints', label: 'Josh Talks points', type: 'strings' },
        { key: 'communityTitle', label: 'Community banner title', type: 'i18n' },
        { key: 'communityText', label: 'Community banner text', type: 'text' },
      ] },
      { key: 'batch', label: 'Batch / Mentorship', icon: '🎓', desc: 'Full-fledged batch page, Home teaser, menu link, enquiry button', fields: [
        { key: 'enabled', label: 'Show batch (page, Home teaser and menu link)', type: 'bool' },
        { key: 'navLabel', label: 'Menu label', type: 'text' },
        { key: 'badge', label: 'Badge (e.g. Admissions open)', type: 'text' },
        { key: 'title', label: 'Title', type: 'text' },
        { key: 'accent', label: 'Title accent (gradient)', type: 'text' },
        { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
        { key: 'image', label: 'Banner image', type: 'image' },
        { key: 'price', label: 'Fee (leave empty to hide)', type: 'text', help: 'e.g. ₹25,000' },
        { key: 'ctaLabel', label: 'Main button text', type: 'text' },
        { key: 'ctaLink', label: 'Main button link', type: 'url', help: 'Payment / form / WhatsApp link. Empty = email enquiry to the contact email.' },
        { key: 'videoUrl', label: 'Intro video (YouTube URL)', type: 'url' },
        { key: 'brochureUrl', label: 'Brochure link', type: 'url' },
        { key: 'highlights', label: 'Highlights', type: 'list', itemLabel: (h) => `${h.icon} ${h.text}`, fields: [
          { key: 'icon', label: 'Emoji', type: 'text' },
          { key: 'text', label: 'Text', type: 'text' },
        ] },
        { key: 'details', label: "What's included", type: 'list', itemLabel: (d) => d.title, fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'text', label: 'Description', type: 'textarea' },
        ] },
        { key: 'terms', label: 'Terms & conditions', type: 'strings' },
        { key: 'faqs', label: 'Batch FAQs', type: 'list', itemLabel: (f) => f.q, fields: [
          { key: 'q', label: 'Question', type: 'text' },
          { key: 'a', label: 'Answer', type: 'textarea' },
        ] },
      ] },
      { key: 'about', label: 'About page', icon: '👤', desc: 'Bio, photo, milestones, vision, team', fields: [
        { key: 'heroTitle', label: 'Title', type: 'text' },
        { key: 'heroAccent', label: 'Title accent', type: 'text' },
        { key: 'heroSub', label: 'Subtitle', type: 'textarea' },
        { key: 'photo', label: 'Photo', type: 'image' },
        { key: 'bio', label: 'Bio paragraphs', type: 'strings', multiline: true },
        { key: 'milestones', label: 'Milestones', type: 'list', itemLabel: (m) => `${m.value} — ${m.label}`, fields: [
          { key: 'value', label: 'Value', type: 'text' },
          { key: 'label', label: 'Label', type: 'text' },
        ] },
        { key: 'vision', label: 'Vision cards', type: 'list', itemLabel: (v) => v.title, fields: [
          { key: 'icon', label: 'Emoji', type: 'text' },
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'text', label: 'Text', type: 'text' },
        ] },
        { key: 'team', label: 'Team paragraph', type: 'textarea' },
        { key: 'teamPoints', label: 'Team highlights', type: 'strings' },
      ] },
      { key: 'contact', label: 'Contact page', icon: '✉️', desc: 'Card texts (email address is in Site settings)', fields: [
        { key: 'heroSub', label: 'Subtitle', type: 'textarea' },
        { key: 'emailText', label: 'Email card text', type: 'textarea' },
        { key: 'workText', label: 'Work with us text', type: 'textarea' },
        { key: 'officeText', label: 'Head office text', type: 'textarea' },
      ] },
      { key: 'faqs', label: 'FAQs', icon: '❓', desc: 'Questions and answers', fields: [
        { key: 'items', label: 'Questions', type: 'list', itemLabel: (f) => f.q, fields: [
          { key: 'q', label: 'Question', type: 'text' },
          { key: 'a', label: 'Answer', type: 'textarea' },
        ] },
      ] },
    ],
  },
  {
    title: 'Study material',
    blocks: [
      { key: 'studySections', label: 'Study Hub cards', icon: '🗂️', desc: 'Cards on Home & Study Hub, their links and search tags', fields: [
        { key: 'items', label: 'Cards', type: 'list', itemLabel: (s) => s.title?.en, fields: [
          { key: 'id', label: 'ID (unique, no spaces)', type: 'text' },
          { key: 'icon', label: 'Emoji', type: 'text' },
          { key: 'title', label: 'Title', type: 'i18n' },
          { key: 'desc', label: 'Description', type: 'i18n' },
          { key: 'path', label: 'Link (page path or URL)', type: 'text' },
          { key: 'accent', label: 'Accent colour', type: 'select', options: ['#1B2A6B', '#FF8A1F', '#E0294A'] },
          { key: 'tags', label: 'Search tags', type: 'strings' },
        ] },
      ] },
      ...Object.entries(resourcePages).map(([key, p]) => ({
        key: `resource_${key}`, label: `${p.title} ${p.accent}`.trim(), icon: '📄', desc: 'Tabs and PDF documents', ...resourceSchema,
      })),
      { key: 'books', label: 'Books', icon: '📚', desc: 'Combo and individual books with buy links', fields: [
        { key: 'combo', label: 'Combo set', type: 'object', fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'img', label: 'Image', type: 'image' },
          { key: 'link', label: 'Buy link', type: 'url' },
          { key: 'points', label: 'Highlights', type: 'strings' },
        ] },
        { key: 'items', label: 'Books', type: 'list', itemLabel: (b) => b.title, fields: [
          { key: 'id', label: 'ID', type: 'text' },
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'img', label: 'Cover', type: 'image' },
          { key: 'link', label: 'Buy link', type: 'url' },
          { key: 'ncert', label: 'Label (e.g. Class 6–12)', type: 'text' },
        ] },
      ] },
      { key: 'videos', label: 'Videos', icon: '▶️', desc: 'Video library; "featured" ones show on Home', fields: [
        { key: 'categories', label: 'Categories', type: 'strings' },
        { key: 'items', label: 'Videos', type: 'list', itemLabel: (v) => v.title, fields: [
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'id', label: 'YouTube video ID', type: 'text', help: 'The part after v= in the YouTube URL' },
          { key: 'cat', label: 'Category', type: 'text' },
          { key: 'featured', label: 'Show on Home', type: 'bool' },
        ] },
      ] },
    ],
  },
];

export const allBlocks = adminGroups.flatMap((g) => g.blocks);
