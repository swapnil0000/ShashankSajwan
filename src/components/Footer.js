import React from 'react';
import { Container, Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import Icon from './Icon/Icon';
import { Link, useNavigate } from 'react-router-dom';
import logos from "../assets/shashank.PNG";

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
    <Box sx={{ backgroundColor: '#212529', color: 'white', bottom: 0, marginTop: '20px', position: 'relative' }}>
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', bottom: 0 }}>

          {/* Logo and Navigation Links */}
          <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '40px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img style={{ width: '130px' }} src={logos} alt='logo' />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', gap: '80px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography onClick={() => navigate("/")} sx={{ color: 'white', margin: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>Home</Typography>
                <Typography onClick={() => navigate("/private")} sx={{ color: 'white', margin: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>Privacy Policy</Typography>
                <Typography onClick={() => navigate("/terms")} sx={{ color: 'white', margin: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>T&C</Typography>
                <Typography onClick={() => navigate("/refund")} sx={{ color: 'white', margin: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>Refund Policy</Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography onClick={() => navigate("/material")} sx={{ color: 'white', margin: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>Resources</Typography>
                <Typography onClick={() => navigate("/")} sx={{ color: 'white', margin: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>Courses</Typography>
                <Typography onClick={() => navigate("/faqs")} sx={{ color: 'white', margin: '2.5px', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>FAQs</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: isMobileView ? "center" : "null", justifyContent: 'center' }}>
              <Typography>Connect With Us</Typography>
              <Icon />
              <Typography>For Career and Opportunity:</Typography>
              <Typography onClick={handleEmail}>ask.iasmentor@gmail.com</Typography>
            </Box>
          </Box>

          {/* Bottom Text */}
          <Typography fontSize='15px' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '35px' }}>©  All rights reserved Shashank Sajwan.</Typography>
          
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
