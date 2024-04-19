import React from 'react'
import img from "../carrer/Frame.png"
import join from "../carrer/joinus.jpg"
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
const Career = () => {
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box sx={{backgroundColor:'',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',width:'100%',marginTop:'20px',boxShadow: 'rgba(99, 99, 99, 0.2) 15px 30px 8px 0px'}} >
    <Container sx={{display:'flex',flexDirection:isMobileView?"column":"row"}}>
    {
      isMobileView && <img style={{width:isMobileView?"":"350px" ,height:'300px',margin:'5px',borderRadius:'5px'}}  src={join}/>
    }    <Box sx={{display:'flex',flexDirection:'column',alignItems:'start',justifyContent:'center'}}>
    <Typography sx={{fontSize:isMobileView?"30px":"50px",margin:'5px',fontWeight:'700',color:'#315399'}}>WORK WITH US</Typography>
    <Typography sx={{fontSize:isMobileView?"17px":"20px",fontFamily:'sans-serif',margin:'5px'}}>If you are interested in working with us and be a part of this growing organisation do send your resume at<span style={{color:'cornflowerblue',fontWeight:'700'}}> ask.iasmentor@gmail.com.</span> </Typography>
    <Typography sx={{fontSize:isMobileView?"17px":"20px",fontFamily:'sans-serif',margin:'5px'}}>Kindly do send some of your work samples too. Team will get back to you asap.</Typography>
    </Box>
    {
      !isMobileView && <img style={{width:isMobileView?"%":"350px" ,height:'300px',margin:'5px',borderRadius:'5px'}}  src={join}/>
    }
    </Container>
    </Box>
  )
}

export default Career