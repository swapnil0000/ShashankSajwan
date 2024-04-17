import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import axios from 'axios';
import { AuthorContactForm, ColumnCenter } from '../../common';

const Author = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const [contactDetails, setContactDetails] = useState({
    name: '',
    fromEmail: '',
    mobileNo: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    const validationErrors = validateForm(contactDetails);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await axios.post('https://us-central1-shashankupsccoaching.cloudfunctions.net/sendEmail', contactDetails);
      alert('Email sent successfully!');
      resetForm();
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Validate name
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    // Validate email
    if (!data.fromEmail.trim()) {
      errors.fromEmail = 'Email is required';
    } else if (!isValidEmail(data.fromEmail)) {
      errors.fromEmail = 'Invalid email address';
    }

    // Validate mobile number
    if (!data.mobileNo.trim()) {
      errors.mobileNo = 'Mobile number is required';
    }

    // Validate message
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const resetForm = () => {
    setContactDetails({
      name: '',
      fromEmail: '',
      mobileNo: '',
      message: ''
    });
    setErrors({});
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
    <Container sx={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
      <Typography sx={{ fontWeight: '700', fontSize: isMobileView ? '25px' : '40px', display: 'flex', alignItems: 'center', marginBottom: '10px' }}>CONTACT US</Typography>
      <AuthorContactForm >
      
        <img style={{ width: '270px', height: '270px', borderRadius: '50%' }} src="/assets/author.webp" alt='Shashank Sajwan' />
        <ColumnCenter >
        {['name', 'fromEmail', 'mobileNo', 'message'].map((field) => (
          <TextField
              key={field}
              style={{ width: isMobileView ? "300px" : "350px", borderRadius: '3px', marginBottom: '40px' }}
              name={field}
              label={field === 'fromEmail' ? "Email" : field === 'mobileNo' ? "Mobile No" : field.charAt(0).toUpperCase() + field.slice(1)}
              variant='standard'
              value={contactDetails[field]}
              onChange={handleChange}
              error={Boolean(errors[field])}
              helperText={errors[field]}
            />
        ))}       
          <Button onClick={handleSubmit} sx={{ backgroundColor: '#f0750f', marginTop: '20px', color: 'white', fontWeight: '600' }} variant='contained'>Submit</Button>
        </ColumnCenter>
      </AuthorContactForm>
    </Container>
  );
};

export default Author;
