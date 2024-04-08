import { Box, Button, Container, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import author from "../../assets/author.webp"
import "./authorstyle.css"
import axios from "axios"
import Icon from '../../components/Icon/Icon'
const Author = () => {
  const [contactDetails, setContactDetails] = useState({
    name: '',
    email: '',
    mobileNo: '',
    message:''
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
      await axios.post('http://localhost:5000/send-email', contactDetails);
      alert('Email sent successfully!');
      setContactDetails({
        name: '',
        email: '',
        mobileNo: '',
        message: ''
      }); // Resetting form fields
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email. Please try again later.');
    }
  };
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"))
  const isSmallMobileView = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Container sx={{ marginTop: '40px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'20px' }}>
       <Typography sx={{fontWeight:'700',fontSize:isMobileView?"25px":"40px",display:'flex',alignItems:'center',marginBottom:'10px'}}>CONTACT US</Typography>
      <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems:"center", justifyContent: 'space-around' }}>

        <img style={{ width: '270px', height: '270px', borderRadius: '50%', marginRight: '20px', display: 'flex' }} src={author} alt='Shashank Sajwan' />

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
          
          <TextField
            style={{ width:isSmallMobileView?"250px":"300px", borderRadius: '3px', marginBottom: '20px', marginTop: '1px' }}
            name="name"
            label="Name"
            variant='standard'
            value={contactDetails.name}
            onChange={handleChange}
          />

          <TextField
            sx={{width:isSmallMobileView?"250px":"300px", borderRadius: '3px' }}
            name="email"
            label="Email"
            value={contactDetails.email}
            onChange={handleChange}
            variant='standard'
          />

          <TextField
            style={{ width:isSmallMobileView?"250px":"300px", borderRadius: '3px', margin: '20px' }}
            name="mobileNo"
            label="Mobile No"
            variant='standard'
            value={contactDetails.mobileNo}
            onChange={handleChange} />

          <TextField
            style={{width:isSmallMobileView?"250px":"300px", borderRadius: '3px',  }}
            name="message"
            label="Message"
            variant='standard'
            value={contactDetails.message}
            onChange={handleChange}
            />
          <Button onClick={handleSubmit} sx={{ backgroundColor: '#f0750f', marginTop: '20px',color:'white',fontWeight:'600' }} variant='contained'>Submit</Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Author