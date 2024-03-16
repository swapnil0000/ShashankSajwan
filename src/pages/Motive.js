import { Box, Button, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const Motive = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("sm"));
  return (
     <Container maxWidth={"lg"}>
      <Box sx={{margin:'50px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:"EEEEFF"}}>
       <Typography sx={{fontSize:{lg:'50px',md:'40px',sm:'30px',xs:'21px'}}}>Motive & Company Details</Typography>
     
       <Divider sx={{border:'1px solid black',width:'100%',marginTop:'10px'}}/>
       <Typography sx={{marginTop:'20px',fontSize:{lg:'20px',md:'18px',sm:'15px',xs:'13px'},alignItems:'center',justifyContent:'center'}}>
        
       <Box sx={{display:'inline',color:'#00022e',fontWeight:'500',fontSize:'18px'}}>UPSC CSE</Box>, according to me is not an ordinary exam. It tests your limits, not only mental strength but also physical strength. It tests your overall personality. 
       For me an aspirant’s overall development is a must in order to achieve success in this exam. 
       During my long UPSC journey <Box sx={{display:'inline',color:'#00022e',fontSize:'18px',fontWeight:'500'}}>I had many ups and downs</Box>. I learned different aspects of this exam and gained experience and knowledge with which I can help you clear this exam based on my experience and experiments. 
       I believe the most important thing to clear this exam is right direction, clear approach and a good plan. Due to lack of knowledge, 
       beginners do make mistakes which can really harm their preparation and that is where my <Box sx={{display:'inline',color:'#00022e',fontSize:'18px',fontWeight:'500'}}>  Guidance and Mentorship</Box>  will come handy.
       From basic doubt to an advanced problem I will be guiding and showing the right direction and will help the aspirants in every aspect during their this beautiful journey of civil services preparation.
       </Typography>

       <Box sx={{margin:'20px',display:'flex',flexDirection:"row",gap:'20px'}}>
         <Box>
         <Button variant='contained' sx={{color:'white', width: { xs: '120px', sm: '150px', md: '170px', lg:'200px'}}}>Admission</Button>
         </Box>
         <Box>
         <Button variant='contained' sx={{color:'white',width: { xs: '120px', sm: '150px', md: '170px', lg:'200px'}}}>Enquiry</Button>
         </Box>

       </Box>
       </Box>

     </Container>
  )
}

export default Motive