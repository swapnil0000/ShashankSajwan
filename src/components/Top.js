import { Box, Typography } from '@mui/material'
import React from 'react'
import CallIcon from '@mui/icons-material/Call';

import EmailIcon from '@mui/icons-material/Email';
const Top = () => {
  return (
    <Box sx={{backgroundColor:'#fff',display:'flex',flexDirection:'row',gap:'30px',alignItems:'center',justifyContent:'center'}}>
      <Box sx={{display:'flex',flexDirection:'row',gap:'10px',cursor:'pointer',
      '&:hover': {
        overflow:'none',
        color: '#001429', // Change to the desired color on hover
      },
      }}>
       <CallIcon/>
       <Typography>6386455982</Typography>
      </Box>
      <Box sx={{display:'flex',flexDirection:'row',gap:'10px',cursor:'pointer','&:hover': {
        
        fontSize:'100px',
        color: '#152238', // Change to the desired color on hover
      },}}>
        <EmailIcon/>
        <Typography>swapnilsrivastava1999@gmail.com</Typography>
      </Box>
  )
}

export default Top