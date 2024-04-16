import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import axios from 'axios';
import { AuthorContactForm, ColumnCenter } from '../../common';

const Author = () => {
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    mobileNo: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactDetails({
      ...contactDetails,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://us-central1-shashankupsccoaching.cloudfunctions.net/sendEmail', contactDetails);
      alert('Email sent successfully!');
      resetForm();
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email. Please try again later.');
      resetForm();
    }
  };

  const resetForm = () => {
    setContactDetails({
      name: '',
      email: '',
      mobileNo: '',
      message: ''
    });
  };

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobileView = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container sx={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
      <Typography sx={{ fontWeight: '700', fontSize: isMobileView ? '25px' : '40px', display: 'flex', alignItems: 'center', marginBottom: '10px' }}>CONTACT US</Typography>
      <AuthorContactForm >
      
        <img style={{ width: '270px', height: '270px', borderRadius: '50%' }} src="/assets/author.webp" alt='Shashank Sajwan' />
        <ColumnCenter >
        {['name', 'fromEmail', 'mobileNo', 'message'].map((field) => (
          <TextField
            key={field}
            style={{  width: isSmallMobileView ? '250px' : '300px', borderRadius: '3px', margin: '10px' }}
            name={field}
            label={field === 'fromEmail' ? "Email" : field === 'mobileNo' ? "Mobile No" : field.charAt(0).toUpperCase() + field.slice(1)}
            variant='standard'
            value={contactDetails[field]}
            onChange={handleChange}
          />
        ))}       
          <Button onClick={handleSubmit} sx={{ backgroundColor: '#f0750f', marginTop: '20px', color: 'white', fontWeight: '600' }} variant='contained'>Submit</Button>
        </ColumnCenter>
      </AuthorContactForm>
    </Container>
  );
};

export default Author;
