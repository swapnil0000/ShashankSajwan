// Every PDF resource page. Edited from the admin panel; these are the defaults.
// Each item: { id, img, link, title? }
export const resourcePages = {
  ncert: {
    title: 'NCERT',
    accent: 'Notes',
    subtitle: 'Class 6–12 NCERT textbooks, subject-wise. Tap any book to open the PDF.',
    tabs: [
      { label: 'Polity', items: [
    { id: 1, img: "/assets/material/polityassets/polity1.webp",link:'https://drive.google.com/file/d/12isEdwMrAXNgzAbsutcbLIXN2K1_fWU5/view?usp=sharing' },
    { id: 2, img: "/assets/material/polityassets/polity2.webp",link:'https://drive.google.com/file/d/1KVBFu9ZWYXoC2s2VccSFu_zpSHGMNkip/view?usp=sharing' },
    { id: 3, img: "/assets/material/polityassets/polity3.webp",link:"https://drive.google.com/file/d/1UYklPoImWnrvkAAm9S49oqpVGwnTPY-U/view?usp=sharing" },
    { id: 4, img: "/assets/material/polityassets/polity4.webp",link:"https://drive.google.com/file/d/1WO_DiNItvcns4Gbqgc9q7zZsMooVzUgn/view?usp=sharing"  },
    { id: 5, img: "/assets/material/polityassets/polity5.webp",link:"https://drive.google.com/file/d/1Sdn46fojarAkN43586tm100IS1-5busv/view?usp=sharing" },
    { id: 6, img: "/assets/material/polityassets/polityclass11new.webp",link:"https://drive.google.com/file/d/1G1_0aniSYLGKiFLtFwlq-IgaDNuUKGAK/view?usp=sharing" },
    { id: 8, img: "/assets/material/polityassets/polity11.webp",link:"https://drive.google.com/file/d/1Ya-x-HS6NE5CK9fo3IGgiy85aVGZ-aGi/view?usp=sharing"  },
    { id: 9, img: "/assets/material/polityassets/polityclass12new.webp",link:"https://drive.google.com/file/d/1FUQzCkliohf_5P5btXaivaMQ8iigwpP6/view?usp=sharing"  },
    { id: 10, img: "/assets/material/polityassets/polity10.webp",link:"https://drive.google.com/file/d/134cFGGV_1n_6lgiLt-OqalpP5nYkgNgA/view"  },
  ] },
      { label: 'Economics', items: [
    { id: 1, img: "/assets/material/ecoasset/eco1.webp",link:"https://drive.google.com/file/d/1C3s0Zp0_oIcUWByBNQS0KPWNh2nQZLPt/view?usp=sharing" },
    { id: 2, img:  "/assets/material/ecoasset/eco2.webp",link:"https://drive.google.com/file/d/1GIQwfJJ0_9BfB95nL0gi9faEkfzv_gC0/view?usp=sharing" },
    { id: 3, img:  "/assets/material/ecoasset/eco3.webp",link:"https://drive.google.com/file/d/1rNY3DwZDMRyIcp3h2_SKTQTcfCpoFLv_/view?usp=sharing" },
    { id: 4, img:  "/assets/material/ecoasset/eco4.webp",link:"https://drive.google.com/file/d/1imnaYFbvwrFJYfxTnVevKTY9MqjfcE2U/view?usp=sharing" }
  ] },
      { label: 'History', items: [
    { id: 1, img: "/assets/material/historyassest/history6.webp",link:'https://drive.google.com/file/d/1g9vK54LhN0rkphoK05t-f8ml4SKUfAsf/view?usp=sharing' },
    { id: 2, img: "/assets/material/historyassest/history7.webp",link:'https://drive.google.com/file/d/12NMmTCAUyIyuVHIICDj9XfBXXY5xvLR_/view?usp=sharing'  },
    { id: 3, img: "/assets/material/historyassest/history8.webp",link:'https://drive.google.com/file/d/1UzZ7IbLWtaWc7fN5UaKpdc8bEH7kqy2x/view?usp=sharing'  },
    { id: 4, img: "/assets/material/historyassest/history9.webp",link:'https://drive.google.com/file/d/1js2AqyHCwnMF1v2TTzNXy3HhODyLf6SG/view?usp=sharing'  },
    { id: 5, img: "/assets/material/historyassest/history10.webp",link:'https://drive.google.com/file/d/1fxUCtg0COgnDXNEmU7hrNkoBczeBJXTu/view?usp=sharing'  },
    { id: 9, img: "/assets/material/historyassest/historyclass11new.webp" , link:'https://drive.google.com/file/d/1UH5n09uGyZMqYYXclRhtnH_VgbmSiVR7/view?usp=sharing' },
    { id: 6, img: "/assets/material/historyassest/history12part1.webp",link:'https://drive.google.com/file/d/1iUU4ryYBACCbQpbFXsJUoG_iMlFRlx70/view'  },
    { id: 7, img: "/assets/material/historyassest/history12part2.webp",link:'https://drive.google.com/file/d/1FPjsa3LM4yVZC8rbL9XnJaykRq_IsJOX/view'  },
    { id: 8, img: "/assets/material/historyassest/history12part3.webp",link:'https://drive.google.com/file/d/1iv5X2eMF26UczJ8_4uEii9SEx6-umXio/view'  },
  ] },
      { label: 'Geography', items: [
    { id: 1, img: "/assets/material/geoasset/geo1.webp",link:"https://drive.google.com/file/d/131xIGwA2Q3rguXil70N3ie3b98M1yQrx/view?usp=sharing" },
    { id: 2, img: "/assets/material/geoasset/geo2.webp",link:"https://drive.google.com/file/d/1dFfY-Eig_kaxnM5rkfMdT-TxieLn2b0b/view?usp=sharing" },
    { id: 3, img: "/assets/material/geoasset/geo3.webp",link:"https://drive.google.com/file/d/1V65sM3ECZDe5BeucEesN04Ef5q5Bo8Cs/view?usp=sharing" },
    { id: 4, img: "/assets/material/geoasset/geo4.webp",link:"https://drive.google.com/file/d/1nrZJFSWo46HE0HNMNLwHHW24KwEiDBpt/view?usp=sharing" },
    { id: 5, img: "/assets/material/geoasset/geo5.webp",link:"https://drive.google.com/file/d/1j7iZhDkxkoXIyywDXaSxs60wSQ-EjmBm/view?usp=sharing"},
    { id: 6, img: "/assets/material/geoasset/geo6.webp",link:"https://drive.google.com/file/d/1RTZyv-1LJY--X-aF--Sk52QBFKtKsi8y/view?usp=sharing" },
    { id: 7, img: "/assets/material/geoasset/geo7.webp",link:"https://drive.google.com/file/d/16AoENastUUR5kdc-h7KAmQ0CZ8zXPqVS/view?usp=sharing" },
    { id: 8, img: "/assets/material/geoasset/geo8.webp",link:"https://drive.google.com/file/d/1A9uGIYEB5Ve09D_RhEv3D0oLvRV0y2HS/view?usp=sharing" },
    { id: 9, img: "/assets/material/geoasset/geo9.webp",link:"https://drive.google.com/file/d/1ABhDFytVliunrrl0HsTGupn1m-i2m4B4/view?usp=sharing" }
  ] },
      { label: 'Sociology', items: [
    { id: 1, img:'/assets/material/socioasset/socio1.webp',link:'https://drive.google.com/file/d/1O841slSvpbjcdmfQiKtoJEOK-XpvIj5-/view?usp=sharing' },
    { id: 2, img: '/assets/material/socioasset/socio2.webp',link:'https://drive.google.com/file/d/1-v1O5FL6PTcx7jpJgdUK5avmspQghePv/view?usp=sharing' },
    { id: 3, img: '/assets/material/socioasset/socio3.webp',link:'https://drive.google.com/file/d/1Wntht8h0hO3QBx6WmuWAM1qkaozlKax6/view?usp=sharing' },
    { id: 4, img: '/assets/material/socioasset/socio4.webp',link:'https://drive.google.com/file/d/1OwbY9uN9NF2xeeivZVnM-_l46cXUpxwL/view?usp=sharing' }
  ] },
      { label: 'Art & Culture', items: [
    { id: 1, img: "/assets/material/arts.webp",link:'https://drive.google.com/file/d/19LgIgunaqeLOLEoLfFRTkEUaLsCUHyau/view?usp=sharing' },

  ] },
      { label: 'Science', items: [
    { id: 1, img: "/assets/material/science.webp",link:'https://drive.google.com/file/d/1QafEnAGJxkhOQI161onrCmuQFFqyHsOD/view?usp=sharing' },

  ] },
    ],
  },
  pyqs: {
    title: 'Previous Year',
    accent: 'Questions',
    subtitle: 'UPSC CSE Prelims & Mains question papers.',
    tabs: [
      { label: 'Prelims', items: [
    { id: 1, img: "/assets/pyqs/prelimsasset/prelims1.webp",link:"https://drive.google.com/file/d/1QopEZrk281Daot___wQxBigXJMtJiyfS/view?usp=sharing" },
    { id: 2, img: "/assets/pyqs/prelimsasset/prelims2.webp",link:"https://drive.google.com/file/d/1bHwt-GXFIBWa3DEnH6zcWbDzzAhXrAnY/view?usp=sharing"  },
    { id: 3, img: "/assets/pyqs/prelimsasset/prelims3.webp"  },
    { id: 4, img: "/assets/pyqs/prelimsasset/prelims4.webp" },
  ] },
      { label: 'Mains', items: [
    { id: 1, img: "/assets/pyqs/mainsassets/mains1.webp",link:"https://drive.google.com/file/d/1gwkGijCf362_zm0jTY1hG7dZpbh85qOR/view?usp=sharing" },
    { id: 2, img: "/assets/pyqs/mainsassets/mains2.webp",link:"https://drive.google.com/file/d/10SJfwvwYICnkjsnQSV04tVlHAAS9XtMe/view?usp=sharing" },
    { id: 3, img: "/assets/pyqs/mainsassets/mains3.webp" },
    { id: 4, img: "/assets/pyqs/mainsassets/mains4.webp"  },

  ] },
    ],
  },
  syllabus: {
    title: 'UPSC',
    accent: 'Syllabus',
    subtitle: 'Official Prelims & Mains syllabus, decoded.',
    tabs: [
      { label: 'Prelims', items: [
    { id: 1, img: "/assets/syllubus/preassets/genstud1.webp",link:'https://drive.google.com/file/d/1v8T-ry1vMjx2qku9RcnRg7m8WKwbcWVB/view?usp=sharing' },
    { id: 2, img: "/assets/syllubus/preassets/genstud2.webp",link:'https://drive.google.com/file/d/1AgWORfMSJUxKge_E42DE9PjBrFH9nwO6/view?usp=sharing'  },
  ] },
      { label: 'Mains', items: [
    { id: 1, img: "/assets/syllubus/mainsassets/genstud3.webp",link:"https://drive.google.com/file/d/1pAEi2O2RhftDZSQxMEg85EKgzOcu7CCs/view?usp=sharing" },
    { id: 2, img: "/assets/syllubus/mainsassets/genstud4.webp",link:"https://drive.google.com/file/d/1dfZQzulFkOGhcVFiZU51teSYzSux08uM/view?usp=sharing" },
    { id: 3, img: "/assets/syllubus/mainsassets/genstud5.webp",link:"https://drive.google.com/file/d/19m-7H3wJVSnUtMQu0lZvoCK3-LBIqXWC/view?usp=sharing" },
    { id: 4, img: "/assets/syllubus/mainsassets/genstud6.webp",link:'https://drive.google.com/file/d/1DMRNCB5Z8U4ZPY5pOM7uXYaKFbDU3UZ5/view?usp=sharing'  },

  ] },
    ],
  },
  general: {
    title: 'General',
    accent: 'Studies',
    subtitle: 'GS notes and material across core subjects.',
    tabs: [
      { label: 'Polity', items: [
    { id: 1,val:"Important Articles",link:'https://drive.google.com/file/d/1hokuBS1wSfyh1Vjy_k98VZoWmnJNvj_F/view?usp=sharing' },
    { id: 2,val:"Important Amendments", link:'https://drive.google.com/file/d/1J6hiELlpZ5yJrBAemkhCiRyFuG60dIUC/view?usp=sharing' },
    { id: 3,val:"Constitutional Bodies", link:"https://drive.google.com/file/d/1Y2aHw5p3wmYH-nTLJP56gxujHAgP2Ioz/view?usp=sharing" },
  ] },
      { label: 'Economics', items: [
    { id: 1,val:"Important Terms",link:"https://drive.google.com/file/d/14vkEnIL9VdN6X8OkVCv6zBNTW-VS0rt8/view?usp=sharing" },
    { id: 2,val:"GDP & GNP",link:"https://drive.google.com/file/d/1smzDSlYbxXIoZRfPqbJAhS9GlF_iwmsm/view?usp=sharing" },
   
  ] },
      { label: 'History', items: [
    { id: 1,val:"Indian National Movement",link:'https://drive.google.com/file/d/1c0deMO_p-XnsnkI4Pmi57x9r7s2IK7P1/view?usp=sharing' },
    { id: 2,val:"Modern Timeline",link:'https://drive.google.com/file/d/1V2q3aTclTbaPTtCgDHHsOmRY7da6kwC_/view?usp=sharing'  },
  ] },
      { label: 'Geography', items: [
    { id: 1,val:"Indian Coastline", link:"https://drive.google.com/file/d/1Ppj6NLubQU54zhUqlP2iznMHk24hpSBx/view?usp=sharing" },
    { id: 2,val:"Indus River System",link:"https://drive.google.com/file/d/1ank3_cvdBisP9A9JuF84psNhTIX2_1ZJ/view?usp=sharing" },
   
  ] },
      { label: 'Science & Tech', items: [
    { id: 1,val:"ISRO", link:'https://drive.google.com/file/d/13xnmYhgOLJE1plburGhMDHQRODOWtScF/view?usp=sharing' },
    { id: 2,val:"Indian Missiles",link:'https://drive.google.com/file/d/1tOs5qxMTnCfQwwENIex7LokmTOtnZAZ0/view' },
  ] },
      { label: 'Environment', items: [
    { id: 1,val:"Ramsar Sites", link:'https://drive.google.com/file/d/1grDar8stFL_jtlyK3qMDvvqO3Pyhg2vb/view?usp=sharing' },
    { id: 2,val:"National Parks", link:'https://drive.google.com/file/d/1dNoH_bBjUne99TygwpDGOkPuo5nRMw3y/view?usp=sharing' },
  ] },
    ],
  },
  optional: {
    title: 'Optional',
    accent: 'Subjects',
    subtitle: 'Resources for your UPSC optional paper.',
    tabs: [
      { label: 'Optionals', items: [
  {
    id:1,
    img:"/assets/optionals.webp",
    link:"https://drive.google.com/file/d/1JPmo1rFOLLhZDfmpqvMSIpt7bqDyR5yR/view?usp=sharing"
  },
  {
    id:2,
    img:"/assets/optionals1.webp",
    link:"https://drive.google.com/file/d/1qGhT4ObXqIQ9cBZ6K1EfkPOXuF-iyhrS/view?usp=sharing"
  },
] },
    ],
  },
};
