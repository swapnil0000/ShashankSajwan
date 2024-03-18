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
  return (
     <Container maxWidth={"lg"}>
      <Box sx={{margin:'50px',display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'space-between',backgroundColor:"EEEEFF",gap:'30px'}}>
       
      <Box>
      <img style={{width:isMobileView?"350px":"400px",borderRadius:'50px'}} src={photo} alt='photo'/>
    </Box>
        <Box>
        <Typography sx={{fontSize:isMobileView?"20px":'30px',fontWeight:'600',marginBottom:'30px',alignItems:'center',margin:'10px'}}>Clear UPSC CSE with <span style={{color:'#f0750f'}}>Top Educators</span> of India.</Typography>
        <Typography sx={{fontSize:isMobileView?'15px':'25px'}}>Unlock your potential with our UPSC CSE mentorship platform. Crack UPSC with Expert Mentors in your Journey.
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <Box  sx={{display:'flex',flexDirection:isMobileView?"column":"row",marginTop:'50px',gap:'20px',alignItems:'center'}}>
          <Typography sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px'}}><YouTubeIcon/> <span style={{color:'#f0750f',fontWeight:'700'}}>600K+</span>Youtube Subcribers</Typography>
         

          <Typography sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px'}}><InstagramIcon/><span style={{color:'#f0750f',fontWeight:'700'}}>182K+</span>Instagram Followers</Typography>
          <Typography sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'10px'}}><TelegramIcon/><span style={{color:'#f0750f',fontWeight:'700'}}>124K+</span>Telegram Followers</Typography>
          </Box>
        </Box>
        </Typography>
        </Box>
       </Box>

     </Container>
  )
}

export default Motive