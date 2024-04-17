import React from 'react'
import img from "../carrer/Frame.png"
import join from "../carrer/joinus.jpg"
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
const Career = () => {
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box sx={{backgroundColor:'white',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >
    <Container sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-',margin:'10px'}}>
    <Box>
    <Typography sx={{fontSize:'50px',fontWeight:'700'}}>WORK WITH US</Typography>
    <Typography>If you are interested in working with us and be a part of this growing organisation do send your resume at email. Kindly do send some of your work samples too. Team will get back to you asap.</Typography>
    </Box>
    <img style={{width:isMobileView?"%":"400px" ,height:'300px',margin:'5px',borderRadius:'5px'}}  src={join}/>
    </Container>
    </Box>
  )
}

export default Career