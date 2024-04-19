import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import axios from "axios";

const Contact = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  // const [contactDetails, setContactDetails] = useState({
  //   name: '',
  //   fromEmail: '',
  //   mobileNo: '',
  //   message: ''
  // });
  // const [errors, setErrors] = useState({});

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setContactDetails(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   // Validate form fields
  //   const validationErrors = validateForm(contactDetails);
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }

  //   try {
  //     await axios.post('https://us-central1-shashankupsccoaching.cloudfunctions.net/sendEmail', contactDetails);
  //     alert('Email sent successfully!');
  //     resetForm();
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('Failed to send email. Please try again later.');
  //   }
  // };

  // const validateForm = (data) => {
  //   const errors = {};

  //   // Validate name
  //   if (!data.name.trim()) {
  //     errors.name = 'Name is required';
  //   }

  //   // Validate email
  //   if (!data.fromEmail.trim()) {
  //     errors.fromEmail = 'Email is required';
  //   } else if (!isValidEmail(data.fromEmail)) {
  //     errors.fromEmail = 'Invalid email address';
  //   }

  //   // Validate mobile number
  //   if (!data.mobileNo.trim()) {
  //     errors.mobileNo = 'Mobile number is required';
  //   }

  //   // Validate message
  //   if (!data.message.trim()) {
  //     errors.message = 'Message is required';
  //   }

  //   return errors;
  // };

  // const isValidEmail = (email) => {
  //   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // };

  // const resetForm = () => {
  //   setContactDetails({
  //     name: '',
  //     fromEmail: '',
  //     mobileNo: '',
  //     message: ''
  //   });
  //   setErrors({});
  // };

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
    <Box>
    <Box sx={{ 
      width: '100%', 
      marginTop: isMobileView?"100px":"110px", 
      position: 'relative', 
      height:'150px',
      backgroundImage: "linear-gradient( 26.3deg ,rgba(8,24,68,1) 87.6%   ,rgba(0,119,182,1) 9.6%)",
    }}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
           fontSize:isMobileView?"20px":"50px",
          padding: '10px 20px',
        }}
      >
        CONTACT US
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '50px', alignItems: 'center', marginBottom:'20px'}}>
     <Box sx={{display:'flex',flexDirection:isMobileView?"column":'row', width: '90%'}}>
      <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", marginTop: isMobileView ? "10px" : "", width: '100%', alignItems: 'center', justifyContent: isMobileView ? "center" : "space-between" }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <img style={{ width:isMobileView?"360px":"400px", height: '300px', marginBottom: '20px' }} src="/assets/contact.webp" alt="Map" />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '60px',justifyContent:'center' }}>
        <Typography sx={{fontSize:isMobileView?"25px":"36px",fontWeight:'500'}}>Contact us via Email or WhatsApp?</Typography>
        <Typography sx={{ fontSize: isMobileView ? '15px' : '20px', marginTop: '5px' }}>For correspondence, kindly reach out to us at <span style={{ fontWeight: '600',color:'green' }}>ask.iasmentor@gmail.com or 7060748896 </span>
          <Typography sx={{ fontSize: isMobileView ? '15px' : '20px', marginTop: '10px', textAlign: 'justify', hyphens: 'inherit' }}>All email communications are managed and responded to by our Head Office located in Dehradun.</Typography> Should you seek guidance on Civil Services Exam preparation or wish to share your feedback/suggestions for us, we welcome you to send us an email.</Typography>
      </Box>
      </Box>
    </Box>
    </Box>
  );
}

export default Contact;


// {['name', 'fromEmail', 'mobileNo', 'message'].map((field) => (
//   <TextField
//     key={field}
//     style={{ width: isMobileView ? "300px" : "350px", borderRadius: '3px', marginBottom: '40px' }}
//     name={field}
//     label={field === 'fromEmail' ? "Email" : field === 'mobileNo' ? "Mobile No" : field.charAt(0).toUpperCase() + field.slice(1)}
//     variant='standard'
//     value={contactDetails[field]}
//     onChange={handleChange}
//     error={Boolean(errors[field])}
//     helperText={errors[field]}
//   />
// ))}

// <Button onClick={handleSubmit} variant='contained' sx={{ backgroundColor: '#212529', color: 'white' }}>Submit</Button>