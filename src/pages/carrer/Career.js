import React from 'react'
import img from "../carrer/Frame.png"
import join from "../carrer/joinus.jpg"
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
const Career = () => {
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box sx={{backgroundColor:'',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',width:'100%',marginTop:'0px',boxShadow: 'rgba(99, 99, 99, 0.2) 15px 30px 8px 0px'}} >
    <Container sx={{display:'flex',flexDirection:isMobileView?"column":"row"}}>
   
    </Container>
    </Box>
  )
}

export default Career