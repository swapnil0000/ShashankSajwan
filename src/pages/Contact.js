import React, { useEffect, useState } from 'react';
import { Box, Button,  Container,  TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import map from "../assets/contact.webp";
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import axios from "axios";
import { ContainerWrapper } from '../common';

const Contact = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const { pathname } = useLocation();

  const [contactDetails, setContactDetails] = useState({
    name: '',
    fromEmail: '',
    mobileNo: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/send-email', contactDetails);
      alert('Email sent successfully!');
      resetForm();
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  const resetForm = () => {
    setContactDetails({
      name: '',
      fromEmail: '',
      mobileNo: '',
      message: ''
    });
  };

  const handleWhatsapp = () => {
    const phoneNumber = '7060748896';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    const recipientEmail = 'ask.iasmentor@gmail.com';
    const mailtoUrl = `mailto:${recipientEmail}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', marginTop: '100px', alignItems: 'center', justifyContent: 'center',marginBottom:'20px'}}>
        <Typography sx={{ fontSize: '50px', fontWeight: '700', marginTop: isMobileView ? "" : "60px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>Contact Us</Typography>
        <Typography sx={{ fontSize: isMobileView ? "12px" : "20px", display: isMobileView ? "none" : "row" }}>We appreciate your feedback. Please don't hesitate to reach out to us for any support, inquiries, or assistance you may need. Our team is dedicated to assisting you and providing the information you require.</Typography>

        <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", marginTop: isMobileView ? "10px" : "70px", width: '100%', alignItems: 'center', justifyContent: isMobileView ? "center" : "space-between" }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <img style={{ width: '350px', height: '300px', marginTop: '20px', marginBottom: '20px' }} src={map} alt="Map" />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {['name', 'fromEmail', 'mobileNo', 'message'].map((field) => (
              <TextField
                key={field}
                style={{ width: isMobileView ? "300px" : "350px", borderRadius: '3px', marginBottom: '40px' }}
                name={field}
                label={field === 'fromEmail' ? "Email" : field === 'mobileNo' ? "Mobile No" : field.charAt(0).toUpperCase() + field.slice(1)}
                variant='standard'
                value={contactDetails[field]}
                onChange={handleChange}
              />
            ))}

            <Button onClick={handleSubmit} variant='contained' sx={{ backgroundColor: '#212529', color: 'white' }}>Submit</Button>
          </Box>
        </Box>

        <Box sx={{ marginTop: '30px', display: 'flex', flexDirection: 'column', marginBottom: '60px' }}>
          <Typography variant={isMobileView ? 'h4' : "h2"}>Want to contact us via e-mail?</Typography>
          <Typography sx={{ fontSize: isMobileView ? '15px' : '20px', marginTop: '5px' }}>For correspondence, kindly reach out to us at <span style={{ fontWeight: '600' }}>ask.iasmentor@gmail.com. </span>
            <Typography sx={{ fontSize: isMobileView ? '15px' : '20px', marginTop: '10px', textAlign: 'justify', hyphens: 'inherit' }}>All email communications are managed and responded to by our Head Office located in Dehradun.</Typography> Should you seek guidance on Civil Services Exam preparation or wish to share your feedback/suggestions for us, we welcome you to send us an email.</Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: 'center', gap: isMobileView ? "5px" : "30px" }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <LocalPhoneIcon />
            <Typography sx={{ cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }} onClick={handleWhatsapp}> +91 7060748896</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <MailIcon />
            <Typography onClick={handleEmail} sx={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' }, cursor: 'pointer' }}>ask.iasmentor@gmail.com</Typography>
          </Box>
        </Box>
    </Container>
  );
}

export default  Contact ;
