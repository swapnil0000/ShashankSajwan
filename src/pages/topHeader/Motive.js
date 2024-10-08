import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Motive = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobileView=useMediaQuery(theme.breakpoints.down("sm"));

  return (
     <Container >
      <Box sx={{display:'flex',marginTop:isMobileView?"15px":"40px",flexDirection:isSmallMobileView?"column":"row",alignItems:isSmallMobileView?"center":"null",justifyContent:isSmallMobileView?"center":"null",backgroundColor:"EEEEFF",gap:'30px',width:'100%',height:{lg:'200px',md:'240px',sm:'210px'}}}>
       
      <Box sx={{display:'flex',flexDirection:'column'}}>
      <img style={{width:isMobileView?"330px":"350px",borderRadius:'20px',display:'flex',flexDirection:'row',height:'200px'}} src='/assets/top.webp' alt='photo'/>
    </Box>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:isMobileView?"center":""}} >
         <Typography sx={{fontWeight:'700',fontSize:{lg:"30px",md:"30px",sm:'25px',xs:'24px'}}}>From <span style={{color:'#f0750f'}}> Director's Pen </span></Typography>
         <Typography sx={{textAlign:'justify',fontSize:{lg:'20px',xs:'14px',md:"18px",sm:"15px"},marginBottom:isSmallMobileView?"10px":"0"}}>"After preparing for UPSC CSE for several years, I decided to impart my knowledge and experience to the aspirant community. There is a myth that the IAS exam is the toughest and hard to achieve. However, I believe that with discipline, self-belief, hard work, and consistent efforts, one can definitely achieve the goal of becoming an officer. With the right guidance and clear direction, my purpose is to make the aspirants' journey smooth so that they can achieve their ultimate goal."</Typography>
        </Box>
       </Box>

     </Container>
  )
}

export default Motive