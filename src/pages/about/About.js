import React, { useEffect } from 'react';
import { Box, Container, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import { useLocation } from 'react-router-dom';
import { ContentWrapper } from '../../common';

const About = () => {

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/iasips_mentor?igsh=Mjk1bGNraGttNW5i/');
  };

  const redirectToTelegram = () => {
    window.open('https://t.me/iasips_mentor/');
  };

  const redirectToYoutube = () => {
    window.open('https://youtube.com/@ShashankSajwan?si=wmlMFjuWQhsZmCGS/');
  };

  const BoxCenter = styled('Box')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: isMobileView ? "center" : "null"
  })

  const BoxIcon = styled('Box')({
    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' }, cursor: 'pointer'
  })

  const ourDirectorData = [
    { id: 1, val: "Shashank Sajwan, originally from Uttarakhand, pursued Physics Hons. from Delhi University, followed by a Post-Graduation in Public Administration from IGNOU. His passion for UPSC emerged during his undergraduate years, and post-graduation, he dedicated himself to this pursuit." },
    { id: 2, val: 'Recognizing the challenges faced by UPSC aspirants lacking proper guidance, Shashank decided to share his insights via Instagram, garnering immense support and reaching over 1 million followers and subscribers across various platforms. Now, at www.shashanksajwan.com, aspirants can find comprehensive resources including mentorship and mock exams, streamlining their preparation process.' },
    { id: 3, val: 'As Shashank embarks on this new journey, his commitment to empowering aspirants remains unwavering.' }
  ]

  const ourVisionData = [
    { id: 1, val: "Cost-effectiveness" },
    { id: 2, val: "Customized Education" },
    { id: 3, val: "Exceptional Instruction" },
    { id: 4, val: "Providing Needed Mentorship" },
    { id: 5, val: "Smart Study" },
  ]

  const AboutIconData = [
    { id: 1, img: '/assets/youtube.webp', click: redirectToYoutube },
    { id: 2, img: '/assets/insta.webp', click: redirectToInstagram },
    { id: 3, img: '/assets/telegram.webp', click: redirectToTelegram },
  ]

  const renderDirectorPhoto = () => {
    return (
      <Box>
        <img style={{ width: isMobileView ? '300px' : '400px', marginTop: '10px', borderRadius: '50%' }} src="/assets/shashanksajwan2.0.webp" alt="Director Photo" />
      </Box>
    );
  };

  return (
    <Container sx={{ marginBottom: '20px' }}>
      <ContentWrapper>
        <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center' }}>
          {isMobileView && renderDirectorPhoto()}
          <BoxCenter>
            <Typography sx={{ fontSize: isMobileView ? "25px" : "40px", fontWeight: '700' }}>Our Director</Typography>
            {ourDirectorData.map((ele) => (<Typography key={ele.id} sx={{ marginTop: '10px', textAlign: 'justify', hyphens: 'inherit' }}>{ele.val}</Typography>))}
          </BoxCenter>
          {!isMobileView && renderDirectorPhoto()}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <BoxCenter >
            <Typography sx={{ marginTop: isMobileView ? "40px" : "10px", fontSize: isMobileView ? "25px" : "40px", fontWeight: '700' }}>Our Vision</Typography>
            <Typography sx={{ marginTop: '10px', textAlign: 'justify', marginBottom: '10px' }}>From the outset of our Academy, our mission has been centered on delivering high-quality education at accessible rates. We deeply grasp the significance of mentorship and tailored guidance in this field. Therefore, leveraging our esteemed educators, we strive to offer individualized mentorship, a factor that has consistently contributed to students achieving commendable positions in civil services examinations.</Typography>
          </BoxCenter>
          <Box>
            {ourVisionData.map((ele) => (<Typography key={ele.id} sx={{ display: 'flex', alignItems: 'center' }}><ChevronRightSharpIcon style={{ color: 'green' }} />{ele.val}</Typography>))}
          </Box>
        </Box>

        <BoxCenter >
          <Typography sx={{ marginTop: '40px', fontSize: isMobileView ? "25px" : "40px", fontWeight: '700' }}>Our Team</Typography>
          <Typography sx={{ textAlign: 'justify', marginTop: '10px' }}>Our team comprises highly educated and experienced professionals, with several faculty members having undergone the interview process themselves. Our collective aim is to deliver the utmost quality education to our students, prioritizing excellence in every aspect of our teaching approach. With a wealth of knowledge and expertise, we are committed to nurturing the academic growth and success of our students.</Typography>
        </BoxCenter>

        <Box >
          <BoxCenter >
            <Typography sx={{ marginTop: '40px', fontSize: isMobileView ? "25px" : "40px", fontWeight: '700' }}>Our Achievements</Typography>
            <Typography sx={{ textAlign: 'justify', marginTop: '10px' }} >We take pride in being recognized as the most innovative YouTube channel and academy throughout India. Shashank Sir stands as the most sought-after mentor for UPSC CSE in the country. Pioneering successful mentorship programs, we strive to revolutionize the education landscape, setting new standards of excellence and achievement.
            </Typography>
          </BoxCenter>
          <Box>
            <Typography sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}><ChevronRightSharpIcon style={{ color: 'green' }} /> Mentored more than 1 Lakh aspirants</Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}><ChevronRightSharpIcon style={{ color: 'green' }} /> More than 10% success ratio </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}><ChevronRightSharpIcon style={{ color: 'green' }} /> Most viewed session on Josh Talks</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: "row", gap: '11px', marginTop: '50px', width: '100%', justifyContent: "space-around" }}>
          {AboutIconData.map((ele) => (
            <BoxIcon>
              <img key={ele.id} onClick={ele.click} style={{ width: '40px', cursor: 'pointer' }} src={ele.img} alt="Telegram Icon" />
            </BoxIcon>
          ))}
        </Box>
      </ContentWrapper>
    </Container>
  );
};

export default About;
