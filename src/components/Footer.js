import React from 'react';
import { Container, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import Icon from './Icon/Icon';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();


  const handleEmail = () => {
    const recipientEmail = 'ask.iasmentor@gmail.com';
    const mailtoUrl = `mailto:${recipientEmail}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <Box sx={{ backgroundColor: '#212529', color: 'white', position: 'relative',paddingBottom:"0px"}}>
      
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', width: '100%' }}>

          {/* Logo and Navigation Links */}
          <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '40px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img style={{ width: '130px' }} src="/assets/shashank.webp" alt='logo' />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', gap: '80px',marginBottom:isMobileView?"20px":"null" }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography onClick={() => navigate("/")} sx={{ color: 'white', marginBottom: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>Home</Typography>
                <Typography onClick={() => navigate("/private")} sx={{ color: 'white', marginBottom: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>Privacy Policy</Typography>
                <Typography onClick={() => navigate("/terms")} sx={{ color: 'white', marginBottom: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>T&C</Typography>
                <Typography onClick={() => navigate("/refund")} sx={{ color: 'white', marginBottom: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>Refund Policy</Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <Typography onClick={() => navigate("/ncert")} sx={{ color: 'white', marginBottom: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>Resources</Typography>
                <Typography onClick={() => navigate("/courses")} sx={{ color: 'white', marginBottom: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>Courses</Typography>
                <Typography onClick={() => navigate("/payment")} sx={{ color: 'white', marginBottom: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>Payment</Typography>
                <Typography onClick={() => navigate("/faqs")} sx={{ color: 'white', marginBottom: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>FAQs</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: isMobileView ? "center" : "", justifyContent: 'space-around' }}>
              <Typography sx={{marginTop:'15.55px'}}>Connect With Us</Typography>
              <Icon />
              <Typography sx={{fontSize:'18px'}}>For Career and Opportunity:</Typography>
              <Typography sx={{fontSize:'18px'}} onClick={handleEmail}>ask.iasmentor@gmail.com</Typography>
            </Box>
          </Box>

          {/* Bottom Text */}
          <Typography fontSize='15px' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '40px' , marginBottom:'40px'}}>©  All Rights Reserved</Typography>
          
        </Container>

    </Box>
  );
};

export default Footer;
