import { Box, Button, Container, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import author from "../../assets/author.webp"
import "./authorstyle.css"
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
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Container sx={{ marginTop: '40px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
       <Typography sx={{fontWeight:'700',fontSize:isMobileView?"25px":"40px",display:'flex',alignItems:'center',marginBottom:'10px'}}>CONTACT US</Typography>
      <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems:"center", justifyContent: 'space-around' }}>

        <img style={{ width: '270px', height: '270px', borderRadius: '50%', marginRight: '20px', display: 'flex' }} src={author} alt='Shashank Sajwan' />

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
          
          <TextField
            style={{ width: '350px', borderRadius: '3px', marginBottom: '20px', marginTop: '1px' }}
            name="name"
            label="Name"
            variant='standard'
            value={contactDetails.name}
            onChange={handleChange}
          />

          <TextField
            sx={{ width: '350px', borderRadius: '3px' }}
            name="email"
            label="Email"
            value={contactDetails.email}
            onChange={handleChange}
            variant='standard'
          />

          <TextField
            style={{ width: '350px', borderRadius: '3px', margin: '20px' }}
            name="mobileNo"
            label="Mobile No"
            variant='standard'
            value={contactDetails.mobileNo}
            onChange={handleChange} />

          <TextField
            style={{ width: '350px', borderRadius: '3px' }}
            name="message"
            label="Message"
            value={contactDetails.place}
            onChange={handleChange}
            variant='standard' />
          <Button sx={{ backgroundColor: '#f0750f', marginTop: '20px',color:'white',fontWeight:'600' }} variant='contained'>Submit</Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Author