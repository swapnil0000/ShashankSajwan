import { Avatar, Box, Container, Divider, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import img from "../about/aboutBanner.png"
import member1 from "../about/member1.png"
import member2 from "../about/member2.png"
import member3 from "../about/member3.png"
import member4 from "../about/member4.png"
import photo from "../../assets/shashankimage.webp"
import Footer from '../../components/Footer'
const About = () => {
  const theme=useTheme();
  return (
    <Container >
   
     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'80px'}}>
     <Typography fontFamily='lato' sx={{marginTop:'20px'}} variant='h1'>Our Mission</Typography>

     <Typography  sx={{marginTop:'20px'}} variant='h6'>UPSC CSE, according to me is not an ordinary exam. It tests your limits, not only mental strength but also physical strength. 
     It tests your overall personality. For me an aspirant’s overall development is a must in order to achieve success in this exam. During my long UPSC journey I had many ups and downs. 
     I learned different aspects of this exam and gained experience and knowledge with which I can help you clear this exam based on my experience and experiments. 
     I believe the most important thing to clear this exam is right direction, clear approach and a good plan. 
     Due to lack of knowledge, beginners do make mistakes which can really harm their preparation and that is where my guidance and mentorship will come handy.
      From basic doubt to an advanced problem I will be guiding and showing the right direction and will help the aspirants in every aspect during their this beautiful journey of civil services preparation..
    </Typography>
    <Stack sx={{margin:'20px'}} direction='row' spacing={10}>
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'50px'}}>
      <Typography variant='h5' color="text.success">599K + </Typography>
      <Typography variant='h6'>Youtube Subscriber </Typography>
      </Box>

      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'50px'}}>
      <Typography variant='h5' color="text.success">180K + </Typography>
      <Typography variant='h6'>Instagram Family </Typography>
      </Box>

      </Stack>
 
     <Box sx={{width:'100%',height:{lg:'450px',md:'300px',sm:'280px',xs:'250px'},background: 'rgba(230, 243, 240, 1)',display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20px'}}>

     <Typography fontFamily='lato' sx={{backgroundColor:'transparent',marginTop:'20px'}} variant='h2'>Meet Our Leader</Typography>


     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'transparent',marginTop:'30px'}}>
      <Box sx={{backgroundColor:'transparent'}}>
      <Avatar  sx={{ width: {lg:250 , md:150 , sm:100,xs:50}, height: {lg:250 , md:150 , sm:100,xs:50} }} src={photo}/>
      </Box>
      <Typography  fontFamily='lato'  variant='h3' sx={{margin:'10px'}}>Shashank Sajwan </Typography>
     </Box>
     </Box>
     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20px'}}>
     <Typography fontFamily='lato' variant='h2'>Our Startup Journey</Typography>

     <Typography  sx={{marginTop:'20px'}} variant='h6'>Hi my name is Shashank Sajwan, from Uttarakhand. I have done my graduation in Physics Hons. From Delhi University and Post-Graduation in Public Administration from IGNOU. When I
     was in my graduation, I decided that I want to prepare for UPSC and after it I began it.  
     During my alluring journey, I found that many of the Aspirants who are preparing for this exam are not having any guidance and their preparation is also disguised. In this exam, Patience, Dedication and good guidance is important. If one is having all the weapons prepared before the fight, then they can win the battle. But when I got to see that students are having these issues in their preparation, I decided to share my experience with them so that they can tackle their upcoming problems without any mess. Therefore, I made an Instagram Page and I started    
     to share my views, thoughts, experience which I have gained in my UPSC journey. And luckily, I found that the people are loving it, it is helping the Aspirants in many ways and because of your love and support, today we have crossed a milestone of 186k followers on Instagram & 5 lakh on YouTube. 
     Now, I am starting my website www.shashanksajwan.com, in this you will get everything in one touch. All your doubts are going to be solved here in no time, you can get personal mentorship here, you can give mocks, and many more.
     Hope you are going to have an wonderful experience here.
     
     Yours Truly</Typography>
     </Box>

     </Box>
    </Container>
   
  )
}

export default About