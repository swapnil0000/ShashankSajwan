import { Box, Button, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import photo from "../topHeader/top.jpg"
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import playbutton from "../topHeader/play.jpg"
const Motive = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobileView=useMediaQuery(theme.breakpoints.down("sm"));

  return (
     <Container maxWidth={"lg"}>
      <Box sx={{display:'flex',marginTop:isMobileView?"20px":"0px",flexDirection:isMobileView?"column":"row",alignItems:'center',backgroundColor:"EEEEFF",gap:'30px',width:'100%',height:isMobileView?"500px":"320px"}}>
       
      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
      <img style={{width:isMobileView?"330px":"350px",borderRadius:'20px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}} src={photo} alt='photo'/>
    </Box>
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'flex-start',marginBottom:isMobileView?"":"100px"}} >
         <Typography sx={{fontWeight:'700',fontSize:'30px',marginTop:'10px',justifyContent:'center'}}>From <span style={{color:'#f0750f'}}> Director's Pen </span></Typography>
         <Typography sx={{textAlign:'justify',fontSize:isMobileView?"15px":'20px'}}>"After preparing for UPSC CSE several years I decided to pass on the knowledge & experience to the aspirants to the aspirants community. There is a myth that IAS exam is the toughest & hard to achieve. But I believe with discipline, self-belief, hard work & consistent efforts one can definitely achieve the goals of becoming an officer. With the right guidance & clear direction my purpose is to make aspirants journey smooth so that they can achieve their ultimate goal."</Typography>
        </Box>
       </Box>

     </Container>
  )
}

export default Motive