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
  news24: {
    title: 'Newspaper Notes',
    accent: '2024',
    subtitle: 'Daily current affairs notes, month-wise.',
    tabs: [
      { label: 'April 2024', items: [
  { id: 0, img: "/assets/newspaper/april/newnotes1.webp", link: "https://drive.google.com/file/d/1oXuXL6QoP9b8pzh5zDxLCcm51EmFxN5Z/view?usp=sharing" },
  { id: 1, img: "/assets/newspaper/april/newnotes2.webp", link: "https://drive.google.com/file/d/15ra86K7KtS9vCTvWUhoMKtFLJnDGVdvH/view?usp=sharing" },
                          
] },
      { label: 'May 2024', items: [
  { id: 1, img: '/assets/newspaper/may/newnotesmay1.webp', link: 'https://drive.google.com/file/d/1WwqSvAUXEJ-98woVB_p2em2RjF6gPqBm/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/may/newnotesmay2.webp', link: 'https://drive.google.com/file/d/1-ZVAZ6Epqxz-3fGrmbVoPygfL_Hk4j9d/view?usp=sharing' },
                          
] },
      { label: 'June 2024', items: [
  { id: 1, img: '/assets/newspaper/june/ncertjuly1.jpg', link: 'https://drive.google.com/file/d/1XWO94_qdjcc_H9-yUg9IfyAM7Lar0-bb/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/june/ncertjuly2.jpg', link: 'https://drive.google.com/file/d/1C8WsX-7dd06Iw6wJTNQ8_t56uAW28pu7/view?usp=sharing' },
                          
] },
      { label: 'July 2024', items: [
  { id: 1, img: '/assets/newspaper/july/july1.webp', link: "https://drive.google.com/file/d/1N4BbB7sd0iepIEg5cE2Zfs9q3YIFJhPF/view?usp=sharing" },
  { id: 2, img: '/assets/newspaper/july/july2.webp', link: "https://drive.google.com/file/d/10988mlaQNPy41RSTPSgBEHT0zS-fpAXo/view?usp=sharing" },
                          
] },
      { label: 'August 2024', items: [
  { id: 1, img: '/assets/newspaper/aug/aug1.webp', link: 'https://drive.google.com/file/d/17nw8wTeTor4VEczoNmWmzswWvYp1Ct9F/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/aug/aug2.webp', link: 'https://drive.google.com/file/d/1avMjetYWoOulGcbL4-X_5L4wGgKkl0uX/view?usp=sharing' },
                          
] },
      { label: 'September 2024', items: [
  { id: 1, img: '/assets/newspaper/sep/1sep.jpg', link: 'https://drive.google.com/file/d/1djkcO6qoJJkJ3tQ_fsKVVg5bj6lrvy7K/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/sep/2sep.jpg', link: 'https://drive.google.com/file/d/1aC3l_puwGbgj06xRb2swIG1ucqFre9qt/view?usp=sharing' },
                          
] },
      { label: 'October 2024', items: [
  { id: 1, img: '/assets/newspaper/oct/1oct.jpg', link: 'https://drive.google.com/file/d/1hfM4a1lSQUWhhQlMv5j0iJUdcU18hHoc/view?usp=sharing ' },
  { id: 2, img: '/assets/newspaper/oct/2oct.jpg', link: 'https://drive.google.com/file/d/1edVN4FjWX9z9X-8XJzPXMidX32q4JCYB/view?usp=sharing' },
                          
] },
      { label: 'November 2024', items: [
  { id: 1, img: '/assets/newspaper/nov/1nov.webp', link: "https://drive.google.com/file/d/1k5FNH8Ll_Hv-E9-5HPlpUF8Mnzud6lkm/view?usp=sharing" },
  { id: 3, img: '/assets/newspaper/nov/3nov.webp', link: "https://drive.google.com/file/d/1B66gCCAm-VnRmIgXX-nrPtAwSCeXa8Pm/view?usp=sharing" },
                          
] },
      { label: 'December 2024', items: [
  { id: 1, img: '/assets/newspaper/dec/1dec.jpg', link: "https://drive.google.com/file/d/1dbxTsLJH05ro_HpGCgSiA7rV5dflqGCg/view?usp=sharing" },
  { id: 2, img: '/assets/newspaper/dec/2dec.jpg', link: "https://drive.google.com/file/d/1x-BBuK10sJFPtjZChLKAmer8iG7zcdn3/view?usp=sharing" },
                          
] },
    ],
  },
  news25: {
    title: 'Newspaper Notes',
    accent: '2025',
    subtitle: 'Daily current affairs notes, month-wise.',
    tabs: [
      { label: 'January 2025', items: [
  { id: 1, img: '/assets/newspaper/jan2025/1jan.jpg', link: 'https://drive.google.com/file/d/1C9QjTieislhE0EcO8r-l9Xl0qOJTMNKO/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/jan2025/2jan.jpg', link: 'https://drive.google.com/file/d/1yJu31ltAsIBTEY7hhastfqVYMD8wrw5V/view?usp=sharing' },
  { id: 3, img: '/assets/newspaper/jan2025/3jan.jpg', link: 'https://drive.google.com/file/d/1q-UJ6UNxXNLjah5H4hm-RWcVI9ppRKv9/view?usp=sharing' },
  { id: 4, img: '/assets/newspaper/jan2025/4jan.jpg', link: 'https://drive.google.com/file/d/1z-WivwMKGVYLdWPRM3dCK6UBvtgCJtQi/view?usp=sharing' },
  { id: 5, img: '/assets/newspaper/jan2025/5jan.jpg', link: 'https://drive.google.com/file/d/1VALWaAw2m7Afz0FN0qr1j5boz9WdhUyf/view?usp=sharing' },
  { id: 6, img: '/assets/newspaper/jan2025/6jan.jpg', link: 'https://drive.google.com/file/d/1ptlU3vVMxvxBpjZOFn_geI2JU6VL1TuV/view?usp=sharing' },
  { id: 7, img: '/assets/newspaper/jan2025/7jan.jpg', link: 'https://drive.google.com/file/d/1mY4oBUmirZpnAOw2hYS8YIlcWDVfvd21/view?usp=sharing' },
  { id: 8, img: '/assets/newspaper/jan2025/8jan.jpg', link: 'https://drive.google.com/file/d/16zu08uFurgQ2WSFtInskmrf9_J0KvO0R/view?usp=sharing' },
  { id: 9, img: '/assets/newspaper/jan2025/9jan.jpg', link: 'https://drive.google.com/file/d/1_HpoOr_Ns41nfBOXvCC5GRtxS-1Wt6KN/view?usp=sharing' },
  { id: 10, img: '/assets/newspaper/jan2025/10jan.jpg', link: 'https://drive.google.com/file/d/10bneF5HJiVtfrUOCTeX2PEo3s43DSwo_/view?usp=sharing' },
  { id: 11, img: '/assets/newspaper/jan2025/11jan.jpg', link: 'https://drive.google.com/file/d/1FmfCJsKjTtBREnk8fJhdHXWUGQ0X9eXT/view?usp=sharing' },
  { id: 12, img: '/assets/newspaper/jan2025/12jan.jpg', link: 'https://drive.google.com/file/d/1WEwiqlXTRGS6wFRfk14AI3SbM9Lpqn8s/view?usp=sharing' },
  { id: 13, img: '/assets/newspaper/jan2025/13jan.jpg', link: 'https://drive.google.com/file/d/16RXjzZvr4CtuPg8Y7jnIhpPTf1ku_WUA/view?usp=sharing' },
  { id: 14, img: '/assets/newspaper/jan2025/14jan.jpg', link: 'https://drive.google.com/file/d/1m9s93m6jgNsr-JnQI1vKb8SYu9GKxfUn/view?usp=sharing' },
  { id: 15, img: '/assets/newspaper/jan2025/16jan.jpg', link: 'https://drive.google.com/file/d/1J5uekMCsh9WTp6U7wwmh55JRkSJQMo4i/view?usp=sharing' },
  { id: 16, img: '/assets/newspaper/jan2025/17jan.jpg', link: 'https://drive.google.com/file/d/1TMfgLKXgylGdE0JpRe5Qs8iteZpChlYn/view?usp=sharing' },
  { id: 17, img: '/assets/newspaper/jan2025/18jan.jpg', link: 'https://drive.google.com/file/d/1GJ-D5lAxbu3UxN7-8hwsBAg9uvIp57dc/view?usp=sharing' },
  { id: 18, img: '/assets/newspaper/jan2025/19jan.jpg', link: 'https://drive.google.com/file/d/1PLF0anptJYNFBVyyQBZ4uPpg5Umxqe5y/view?usp=sharing' },
  { id: 19, img: '/assets/newspaper/jan2025/20jan.jpg', link: 'https://drive.google.com/file/d/139mRN0gTt11w2FxuoY9Rnt-AszAD3QYS/view?usp=sharing' },
  { id: 20, img: '/assets/newspaper/jan2025/21jan.jpg', link: 'https://drive.google.com/file/d/12jI-p_hElfJS2EyPK7SlTxd7aW02Yci2/view?usp=sharing' },
  { id: 21, img: '/assets/newspaper/jan2025/22jan.jpg', link: 'https://drive.google.com/file/d/1brJKbSkA52TySLMCzk8RknUgUKCM6jyi/view?usp=sharing' },
  { id: 22, img: '/assets/newspaper/jan2025/23jan.jpg', link: 'https://drive.google.com/file/d/1yx18YnlACYc-dvCI_bWUVpKWc5MNH70J/view?usp=sharing' },
  { id: 23, img: '/assets/newspaper/jan2025/24jan.jpg', link: 'https://drive.google.com/file/d/1XYU3b7V6EtLNqhpCWfzGfiE0IWL_tLVU/view?usp=sharing' },
  { id: 24, img: '/assets/newspaper/jan2025/25jan.jpg', link: 'https://drive.google.com/file/d/1XjVd5JhAd_kRINOMidx5MeCM5kMm5f7S/view?usp=sharing' },
  { id: 25, img: '/assets/newspaper/jan2025/26jan.jpg', link: 'https://drive.google.com/file/d/1vqjmuQDo1VdN7L91J9banwszF2makPjR/view?usp=sharing' },
  { id: 26, img: '/assets/newspaper/jan2025/27jan.jpg', link: 'https://drive.google.com/file/d/1MBcJohBSNSb45SLL-dVhAK3fIrPkXEzs/view?usp=sharing' },
  { id: 27, img: '/assets/newspaper/jan2025/28jan.jpg', link: 'https://drive.google.com/file/d/1zmPfkcHsczmv3v8Tw-yFw5rgurGcloL_/view?usp=sharing' },
  { id: 28, img: '/assets/newspaper/jan2025/29jan.jpg', link: 'https://drive.google.com/file/d/1aXs7UopruK1lKg7NqZp9kChtFrYoef82/view?usp=sharing' },
  { id: 29, img: '/assets/newspaper/jan2025/30jan.jpg', link: 'https://drive.google.com/file/d/1mI-THVQNQ1dwefEKa1p7bmy-vs8NqjCj/view?usp=sharing' },
  { id: 30, img: '/assets/newspaper/jan2025/31jan.jpg', link: 'https://drive.google.com/file/d/1IkotMU_5waD7yJF4Wb4eWTnV6te76nIt/view?usp=sharing' },

                                                                

] },
      { label: 'February 2025', items: [
  { id: 1, img: '/assets/newspaper/feb2025/1feb.jpg', link: "https://drive.google.com/file/d/1cuskun_lua8iGxbGtCUo7CFalwiilQPp/view?usp=sharing" },
  { id: 2, img: '/assets/newspaper/feb2025/2feb.jpg', link: "https://drive.google.com/file/d/1lysjDZ2fwFlkk_wOZCvdOiv6S00-fzeV/view?usp=sharing" },
  { id: 3, img: '/assets/newspaper/feb2025/3feb.jpg', link: "https://drive.google.com/file/d/1v5kiHblIVPvOIdFI3Oty8X9XwiQ0FK-K/view?usp=sharing" },
  { id: 4, img: '/assets/newspaper/feb2025/4feb.jpg', link: "https://drive.google.com/file/d/1MYsEnS6RUHw8LNvWBfIXU_VTuslX7NGB/view?usp=sharing" },
  { id: 5, img: '/assets/newspaper/feb2025/5feb.jpg', link: "https://drive.google.com/file/d/1p5UV7M9DiO8VJNVd7Ka_QLEpHHKKQKxU/view?usp=sharing" },
  { id: 6, img: '/assets/newspaper/feb2025/6feb.jpeg', link: "https://drive.google.com/file/d/1tzHcsiQHdl7Kk4ylritQWUkrQUX0mW67/view?usp=sharing" },
  { id: 7, img: '/assets/newspaper/feb2025/7feb.jpeg', link: "https://drive.google.com/file/d/1_1TvlBYgYesiq6W0U6w_YpxcurWLU_BH/view" },
  { id: 8, img: '/assets/newspaper/feb2025/8feb.jpeg', link: "https://drive.google.com/file/d/1Z99VoJZhUh7Zq8fSnlv-xH3Iu1wgQrJI/view" },
  { id: 9, img: '/assets/newspaper/feb2025/9feb.jpeg', link: "https://drive.google.com/file/d/1MGKakQIoOkVop-CYqcuf5pNqY-FwZP9T/view?usp=sharing" },
  { id: 10, img: '/assets/newspaper/feb2025/10feb.jpeg', link: "https://drive.google.com/file/d/12e7hpAA2n3z0xhc5I65pjNIOBdevsOXQ/view?usp=sharing" },
  { id: 11, img: '/assets/newspaper/feb2025/11feb.jpeg', link: "https://drive.google.com/file/d/1JiJOqALwKV3KmGgikjEe1nkS3gVLfQMJ/view?usp=sharing" },
                                                               
                                                              
                                                              
                                                              


] },
      { label: 'April 2025', items: [
  { id: 1, img: '/assets/newspaper/april2025/april1.jpeg', link: 'https://drive.google.com/file/d/1IeGVZjj7zWwVE-nA532LafEEt2R5M0Lh/view' },
  { id: 2, img: '/assets/newspaper/april2025/april2.jpeg', link: 'https://drive.google.com/file/d/1dmCNGZuvoKyvzXN5eLNMa6qXCiyInIce/view?usp=sharing' },
  { id: 3, img: '/assets/newspaper/april2025/april3.jpeg', link: 'https://drive.google.com/file/d/1hGoOs6U-SrWFUJZwD6oP2xuB-rvtNsqK/view?usp=sharing' },
  { id: 4, img: '/assets/newspaper/april2025/april4.jpeg', link: 'https://drive.google.com/file/d/1k7jNkfZLuMIjxrZoG7CmU-CZZR-ocWBS/view?usp=sharing' },
  { id: 5, img: '/assets/newspaper/april2025/april5.jpeg', link: 'https://drive.google.com/file/d/1DyH62zyJIFQwOLg79hbLsZCPIh_EnGoV/view?usp=sharing' },
  { id: 6, img: '/assets/newspaper/april2025/april6.jpeg', link: 'https://drive.google.com/file/d/1hb2evohDX1GASmcpDPv17ge_zIQXwW5G/view?usp=sharing' },
  { id: 7, img: '/assets/newspaper/april2025/april7.jpeg', link: 'https://drive.google.com/file/d/1a0J8nUrtq9WhMeWjKXZvBrhTDXr6WOCA/view?usp=sharing' },
  { id: 8, img: '/assets/newspaper/april2025/april8.jpeg', link: 'https://drive.google.com/file/d/125tjz3H-XYwDgCxyznn7HULZ3VBnOiAN/view?usp=sharing' },
  { id: 9, img: '/assets/newspaper/april2025/april9.jpeg', link: 'https://drive.google.com/file/d/1khJyLGkn9foyihzMPRe41si_V6B4KVxO/view?usp=sharing' },
  { id: 10, img: '/assets/newspaper/april2025/april10.jpeg', link: 'https://drive.google.com/file/d/1K9JN4bkrrle6d2R4RZk70EycE28IAlp1/view?usp=sharing' },
  { id: 11, img: '/assets/newspaper/april2025/april11.jpeg', link: 'https://drive.google.com/file/d/1OEQO1sS7bH8GnPi0f5zy5fGkFxJiLtl_/view?usp=sharing' },
  { id: 12, img: '/assets/newspaper/april2025/april12.jpeg', link: 'https://drive.google.com/file/d/1VXwMJurVb_J9XL6QqncSnhqhINai6ql_/view?usp=sharing' },
] },
      { label: 'May 2025', items: [
  { id: 1, img: '/assets/newspaper/may2025/1stmay.jpeg', link: 'https://drive.google.com/file/d/1fpjwvs7Dm2XpOxtiYEmmyJry8dEWInOW/view' },
  { id: 2, img: '/assets/newspaper/may2025/2ndmay.jpeg', link: 'https://drive.google.com/file/d/1x0iZ-z4oJzFGs2ROFfjBUGKOJgfekS7c/view' },
  { id: 3, img: '/assets/newspaper/may2025/3rdmay.jpeg', link: 'https://drive.google.com/file/d/163HMr7rWvLhA-R9_R7tvVuCZv7eoTo6Q/view' },
  { id: 4, img: '/assets/newspaper/may2025/4thmay.jpeg', link: 'http://drive.google.com/file/d/1O33-Fds2OWAICYwcwQ32BIWbKamXbnB-/view' },
  { id: 5, img: '/assets/newspaper/may2025/5may.jpeg', link: 'https://drive.google.com/file/d/1BmHILm5nkg5GNqOt2HGND1AqougAsrSf/view' },
  { id: 6, img: '/assets/newspaper/may2025/6may.jpeg', link: 'https://drive.google.com/file/d/1lJmqJdWJUnjVtxrNLkkD9W-Yw8xenpc7/view' },
  { id: 7, img: '/assets/newspaper/may2025/7may.jpeg', link: 'https://drive.google.com/file/d/1urAYelw0QNLLhR-ZCnobAvhxDMJyj2Bu/view' },
  { id: 8, img: '/assets/newspaper/may2025/8may.jpeg', link: 'https://drive.google.com/file/d/1rk10lqy2DsSO-A4-tD5O78Oy3e0atO5c/view' },
  { id: 9, img: '/assets/newspaper/may2025/9may.jpeg', link: 'https://drive.google.com/file/d/1Aq1aI9s9v_zgsQkD3M6-BEpeTs3yU1MK/view' },
  { id: 10, img: '/assets/newspaper/may2025/10may.jpeg', link: 'https://drive.google.com/file/d/1a2GOix3ZJ-UzFHZwtxg282Ll3fCiUaUF/view' },
  { id: 11, img: '/assets/newspaper/may2025/11may.jpeg', link: 'https://drive.google.com/file/d/16gsHjblQ7a_4K-f8f5OKK_d5NS_e2b2b/view' },
  { id: 12, img: '/assets/newspaper/may2025/12may.jpeg', link: 'https://drive.google.com/file/d/17pKhFp0RbFOb_DXuBt3y-9I-LxKWfZnq/view' },
  { id: 13, img: '/assets/newspaper/may2025/13may.jpeg', link: 'https://drive.google.com/file/d/1_zQasNpmEntgFLou4HQFI9HFnxDf_fW1/view' },
  { id: 14, img: '/assets/newspaper/may2025/14may.jpeg', link: 'https://drive.google.com/file/d/1vxYcUJQntMT3DSLDUrDKCcpAN9r_pPej/view' },
  { id: 15, img: '/assets/newspaper/may2025/15may.jpeg', link: 'https://drive.google.com/file/d/1TOLMh9GwK5GHk68hifJ1KKOXMF873hD4/view' },
  { id: 16, img: '/assets/newspaper/may2025/16may.jpeg', link: 'https://drive.google.com/file/d/1xqrCLeJ7MIisZ7RB-wpMLrV4Wl_O_74h/view' },
  { id: 17, img: '/assets/newspaper/may2025/17may.jpeg', link: 'https://drive.google.com/file/d/1zMjE6y8lGdbzDZi6WPm5iCxu9H9sy515/view' },
  { id: 18, img: '/assets/newspaper/may2025/18may.jpeg', link: 'https://drive.google.com/file/d/1AP9DrLMHG0Uvk9dpshjmBkV73by0eoKU/view' },
  { id: 19, img: '/assets/newspaper/may2025/19may.jpeg', link: 'https://drive.google.com/file/d/1wyM4IHRxxusyUjMfvSN2dbnbW4yUKg5X/view' },
  { id: 20, img: '/assets/newspaper/may2025/20may.jpeg', link: 'https://drive.google.com/file/d/1C5IkeCIWHSJsGjfzETbw8J1B0ZjKNrWD/view' },
] },
      { label: 'June 2025', items: [
  { id: 1, img: '/assets/newspaper/june2025/1june.jpeg', link: 'https://drive.google.com/file/d/1D44Q1muGK0WZSzaqlPAGdwy2_4PMdvse/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/june2025/2june.jpeg', link: 'https://drive.google.com/file/d/1j1BuiWnwjWzHSO0NpyY0bqFu9Pw7SSoa/view' },
  { id: 3, img: '/assets/newspaper/june2025/3june.jpeg', link: 'https://drive.google.com/file/d/1KvXr0csBMk7Q9Jzc4WpLMGCrJrrVa2BJ/view' },
  { id: 4, img: '/assets/newspaper/june2025/4june.jpeg', link: 'https://drive.google.com/file/d/11SWnXcJzt6a7xbBuKNvK0QA1fb8yBdUL/view?usp=sharing' },
  { id: 5, img: '/assets/newspaper/june2025/5june.jpeg', link: 'https://drive.google.com/file/d/1JiiDIx68dnAJiNxNJE7-23x5Pf3sSW1i/view?usp=sharing' },
  { id: 6, img: '/assets/newspaper/june2025/6june.jpeg', link: 'https://drive.google.com/file/d/19mrVvoXGxXG0t_g8yQc3scAmgSHkxhCf/view?usp=sharing' },
  { id: 7, img: '/assets/newspaper/june2025/7june.jpeg', link: 'https://drive.google.com/file/d/1MPp8tstLBSNwlr2PN0a_unBvEthEYCSg/view?usp=sharing' },
  { id: 8, img: '/assets/newspaper/june2025/8jun.jpeg', link: 'https://drive.google.com/file/d/1rVEDaurBCsRtLP-97YLR1DNOsJZn2gQN/view?usp=sharing' },
  { id: 9, img: '/assets/newspaper/june2025/9june.jpeg', link: 'https://drive.google.com/file/d/1lT62h78YC7pdAsWUDZ0yPNcXRxCZJ3mB/view?usp=sharing' },
  { id: 10, img: '/assets/newspaper/june2025/10june.jpeg', link: 'https://drive.google.com/file/d/1TTeMByq7wk-Hpk9IN8tGRXOrca8EuBKv/view?usp=sharing' },
  { id: 11, img: '/assets/newspaper/june2025/11june.jpeg', link: 'https://drive.google.com/file/d/1uVZlr_d0crL5EzGoJzn9g8QFW_rEvLdx/view?usp=sharing' },
  { id: 12, img: '/assets/newspaper/june2025/12june.jpeg', link: 'https://drive.google.com/file/d/1wLi4kYMehn7y2hBqFcj92H__Q7UJWfSI/view?usp=sharing' },
  { id: 13, img: '/assets/newspaper/june2025/13june.jpeg', link: 'https://drive.google.com/file/d/1CUGv_jC_dTrixqqhvH0eGSBrr8k-gK35/view?usp=sharing' },
  { id: 14, img: '/assets/newspaper/june2025/14june.jpeg', link: 'https://drive.google.com/file/d/1pfgZkEyXij4zP3ErzCjlK7xeMOXGFDbq/view?usp=sharing' },
  { id: 15, img: '/assets/newspaper/june2025/15june.jpeg', link: 'https://drive.google.com/file/d/14woeyvE9RIs-x-Rca2OfhcLk6od0ckUa/view?usp=sharing' },
  { id: 16, img: '/assets/newspaper/june2025/16june.jpeg', link: 'https://drive.google.com/file/d/1KPSUqtG7E1qFDDwDNxZ5NCoGM1PDogTl/view?usp=sharing' },
  { id: 17, img: '/assets/newspaper/june2025/17june.jpeg', link: 'https://drive.google.com/file/d/1bgvGW4SEHdhSKzfsohDzRDzmF7o4yG8G/view?usp=sharing' },
  { id: 18, img: '/assets/newspaper/june2025/18june.jpeg', link: 'https://drive.google.com/file/d/1YIRxky_lPzuO_vBTLdc6RZg_qRqD6ZO6/view?usp=sharing' },
  { id: 19, img: '/assets/newspaper/june2025/19june.jpeg', link: 'https://drive.google.com/file/d/17DFnPYmmFw_40PE00778MzpW7uRz4SgU/view?usp=sharing' },
  { id: 20, img: '/assets/newspaper/june2025/20june.jpeg', link: 'https://drive.google.com/file/d/1A-DOB5gzlDDYwEy1qbTxFmO-VBAKv2Ah/view?usp=sharing' },
  { id: 21, img: '/assets/newspaper/june2025/21june.jpeg', link: 'https://drive.google.com/file/d/1RfOk1CE9dGl7WYPIYVfKBD2zJUG8gp2q/view?usp=sharing' },
  { id: 21, img: '/assets/newspaper/june2025/22june.jpeg', link: 'https://drive.google.com/file/d/1PYyKqCnerDlBDee4WH0ZdYplsGnSdS_J/view?usp=sharing' },
  { id: 22, img: '/assets/newspaper/june2025/23june.jpeg', link: 'https://drive.google.com/file/d/1Qe1C3xgMH3_555ueYfIksK3H6VASPqmd/view?usp=sharing' },
  { id: 23, img: '/assets/newspaper/june2025/24june.jpeg', link: 'https://drive.google.com/file/d/1BXcDs_eEMswYW5mzyZV9SNps2TKbhntn/view?usp=sharing' },
  { id: 24, img: '/assets/newspaper/june2025/25june.jpeg', link: 'https://drive.google.com/file/d/1aMexUBYNEb2FWKgCWshjMkYMB4MbwECi/view' },
  { id: 25, img: '/assets/newspaper/june2025/26june.jpeg', link: 'https://drive.google.com/file/d/1C5dN-r3bcmVTBQROZ1cy2OdZv623IpMF/view?usp=sharing' },
  { id: 26, img: '/assets/newspaper/june2025/27june.jpeg', link: 'https://drive.google.com/file/d/1kf8bMFYgGo7te_PGWLgD01AC4svWKt_S/view?usp=sharing' },
  { id: 27, img: '/assets/newspaper/june2025/28june.jpeg', link: 'https://drive.google.com/file/d/1HX8klwK2VGawRnG-nUc52qerW0QCs9Xq/view?usp=sharing' },
  { id: 28, img: '/assets/newspaper/june2025/29june.jpeg', link: 'https://drive.google.com/file/d/1cw9VG-ezvbMi8JdWyfaKbGyMkEE8nw-w/view?usp=sharing' },
  { id: 29, img: '/assets/newspaper/june2025/30june.jpeg', link: 'https://drive.google.com/file/d/1bY6AKBG4evpwIYdFr8B-jAbcynxvl1d8/view?usp=sharing' },
] },
      { label: 'July 2025', items: [

{ id: 1, img: '/assets/newspaper/july2025/1july.jpeg', link: 'https://drive.google.com/file/d/1veCCEhF6lF1t52S6a43XmuabuT5lOT4V/view?usp=sharing' },
{ id: 2, img: '/assets/newspaper/july2025/2july.jpeg', link: 'https://drive.google.com/file/d/1xgs0eulsZ1bnF12hJgIQoPYyQ-KMRyNs/view?usp=sharing' },
{ id: 3, img: '/assets/newspaper/july2025/3july.jpeg', link: 'https://drive.google.com/file/d/1aCJxNzZ1zAWM8egLg3sF1J3EUFdzlRcv/view?usp=sharing' },
{ id: 4, img: '/assets/newspaper/july2025/4july.jpeg', link: 'https://drive.google.com/file/d/1w9gl-Daoc8Qlzvco0MtKf8sGhTUnmVFx/view?usp=sharing' },
{ id: 5, img: '/assets/newspaper/july2025/5july.jpeg', link: 'https://drive.google.com/file/d/1BFP88FlqQpLfdsfU1VrhIPj1mZOdYTwh/view?usp=sharing' },
{ id: 6, img: '/assets/newspaper/july2025/6july.jpeg', link: 'https://drive.google.com/file/d/1pxgPiqiL0j7YCmolF3S6DTX7NswdjlCx/view?usp=sharing' },
{ id: 7, img: '/assets/newspaper/july2025/7july.jpeg', link: 'https://drive.google.com/file/d/1LLOXh0T0JjJio9kre8F6BspkfQ9snJX7/view?usp=sharing' },
{ id: 8, img: '/assets/newspaper/july2025/8july.jpeg', link: 'https://drive.google.com/file/d/1cM9jXZZjntRP-A3nvAVL2fwMtNeZl5w1/view?usp=sharing' },
{ id: 9, img: '/assets/newspaper/july2025/9july.jpeg', link: 'https://drive.google.com/file/d/1i_yaV67dDsWgdOplNcvVhvnxf14IxRo7/view?usp=sharing' },
{ id: 10, img: '/assets/newspaper/july2025/10july.jpeg', link: 'https://drive.google.com/file/d/1OgMRc0iwEIqF1v2jofbPeHggF-2N0ZcI/view?usp=sharing' },
{ id: 11, img: '/assets/newspaper/july2025/11july.jpeg', link: 'https://drive.google.com/file/d/1p8YLwccAPCUr_-jrlv5ipITNO4eYsuoI/view?usp=sharing' },
{ id: 12, img: '/assets/newspaper/july2025/12july.jpeg', link: 'https://drive.google.com/file/d/116v8q5RYXgE9c5SJuFwcVJt-i2Mrt_1p/view?usp=sharing' },
{ id: 13, img: '/assets/newspaper/july2025/13july.jpeg', link: 'https://drive.google.com/file/d/1BVFaag9J8lEoTq5TDIcSopNLCoOfGqp_/view?usp=sharing' },
{ id: 14, img: '/assets/newspaper/july2025/14july.jpeg', link: 'https://drive.google.com/file/d/10GsnQo5okUAZ9JS8Y9tGUqcDgMPxnjgR/view?usp=sharing' },
{ id: 15, img: '/assets/newspaper/july2025/15july.jpeg', link: 'https://drive.google.com/file/d/1OaTARNbj8319EMGveOrJp626UCs5UnfM/view?usp=sharing' },
{ id: 16, img: '/assets/newspaper/july2025/16july.jpeg', link: 'https://drive.google.com/file/d/1Fne0GizFrP-n5aquvIX1d-QLFVyPewMB/view?usp=sharing' },
{ id: 17, img: '/assets/newspaper/july2025/17july.jpeg', link: 'https://drive.google.com/file/d/1-hsVqcD01KYPEr9W-WpHmkiBYjkezlvz/view?usp=sharing' },
{ id: 18, img: '/assets/newspaper/july2025/18july.jpeg', link: 'https://drive.google.com/file/d/1veUQdxHhKudsRSS8bI4nlQofvgzhPHnL/view?usp=sharing' },
{ id: 19, img: '/assets/newspaper/july2025/19july.jpeg', link: 'https://drive.google.com/file/d/1P-9NGW-tPSJfjCHZJkOaUImkQ3dgQR8u/view?usp=sharing' },
{ id: 21, img: '/assets/newspaper/july2025/20july.jpeg', link: 'https://drive.google.com/file/d/1BagxIro0o5iPb9vqB8RNF3ph-JBKU6Ik/view?usp=sharing' },
{ id: 22, img: '/assets/newspaper/july2025/21july.jpeg', link: 'https://drive.google.com/file/d/1kCb4vYh3m-RbJAxfEKR-YBitEtU5Gzi5/view?usp=sharing' },
{ id: 23, img: '/assets/newspaper/july2025/22july.jpeg', link: 'https://drive.google.com/file/d/1j-Wla-1qffNk-VFvWpgjhNOEuYk5Tpc_/view?usp=sharing' },
{ id: 24, img: '/assets/newspaper/july2025/23july.jpeg', link: 'https://drive.google.com/file/d/1TviRLwVxdcUdisle08RvlwNnXLnwvtaV/view?usp=sharing' },
{ id: 25, img: '/assets/newspaper/july2025/24july.jpeg', link: 'https://drive.google.com/file/d/1HS-VYC-Fp1W9f6UfK7S3jLIZdsRuRqn1/view?usp=sharing' },
                                                                       
                                                                       
                                                                       



] },
    ],
  },
};
