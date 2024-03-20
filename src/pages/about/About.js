import { Avatar, Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import img from "../about/aboutBanner.png"
import member1 from "../about/member1.png"
import member2 from "../about/member2.png"
import member3 from "../about/member3.png"
import member4 from "../about/member4.png"
import photo from "../../assets/shashankimage.webp"
import Footer from '../../components/Footer'
import aboutphoto from "../about/aboutphoto.jpg"
import telegram from "../../assets/telegram.png"
import twitter from "../../assets/twitter.png"
import insta from "../../assets/insta.png"
import youtube from "../../assets/youtube.png"
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
const About = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container >
     {!isMobileView && (
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',width:'100%',marginTop:'130px'}} >
      <Box sx={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center'}} >
       <Box>
       <Typography sx={{fontSize:'50px',fontWeight:'700'}}>Our Director</Typography>
       <Typography sx={{marginTop:'10px'}}>Shashank Sajwan, originally from Uttarakhand, pursued Physics Hons. from Delhi University, followed by a Post-Graduation in Public Administration from IGNOU. His passion for UPSC emerged during his undergraduate years, and post-graduation, he dedicated himself to this pursuit.

       </Typography>
       <Typography sx={{marginTop:'10px'}}>Recognizing the challenges faced by UPSC aspirants lacking proper guidance, Shashank decided to share his insights via Instagram, garnering immense support and reaching over 1 million followers and subscribers across various platforms. Now, at www.shashanksajwan.com, aspirants can find comprehensive resources including mentorship and mock exams, streamlining their preparation process.

       </Typography>
       <Typography  sx={{marginTop:'10px'}}>As Shashank embarks on this new journey, his commitment to empowering aspirants remains unwavering.</Typography>
        </Box>
      <Box>
       <img style={{width:'300px',marginTop:'10px',borderRadius:'50%'}} src={aboutphoto}/>
      </Box>

      </Box>
         
      <Box>
      <Typography sx={{marginTop:'40px',fontSize:'50px',fontWeight:'700'}}>Our Vision</Typography>

      <Typography sx={{marginTop:'10px'}}>From the outset of our Academy, our mission has been centered on delivering high-quality education at accessible rates. We deeply grasp the significance of mentorship and tailored guidance in this field. 
      Therefore, leveraging our esteemed educators, we strive to offer individualized mentorship, a factor that has consistently contributed to students achieving commendable positions in civil services examinations.</Typography>
      <Typography sx={{display:'flex',alignItems:'center',marginTop:'10px'}}><ChevronRightSharpIcon style={{color:'green'}}/> Cost-effectiveness</Typography>
      <Typography sx={{display:'flex',alignItems:'center'}}><ChevronRightSharpIcon style={{color:'green'}}/>Customized Education</Typography>
      <Typography sx={{display:'flex',alignItems:'center'}}><ChevronRightSharpIcon style={{color:'green'}}/> Exceptional Instruction</Typography>
      <Typography sx={{display:'flex',alignItems:'center'}}><ChevronRightSharpIcon style={{color:'green'}}/> Providing Needed Mentorship </Typography>
      <Typography sx={{display:'flex',alignItems:'center'}}><ChevronRightSharpIcon style={{color:'green'}}/> Smart Study </Typography>
      </Box>

      <Box>
       <Typography sx={{marginTop:'40px',fontSize:'50px',fontWeight:'700'}}>Our Team</Typography>
       <Typography>Our team comprises highly educated and experienced professionals, with several faculty members having undergone the interview process themselves. Our collective aim is to deliver the utmost quality education to our students, prioritizing excellence in every aspect of our teaching approach. With a wealth of knowledge and expertise, we are committed to nurturing the academic growth and success of our students.</Typography>
      </Box>

      <Box>
        <Typography sx={{marginTop:'40px',fontSize:'50px',fontWeight:'700'}}>Our Achievements</Typography>
        <Typography >We take pride in being recognized as the most innovative YouTube channel and academy throughout India. Shashank Sir stands as the most sought-after mentor for UPSC CSE in the country. Pioneering successful mentorship programs, we strive to revolutionize the education landscape, setting new standards of excellence and achievement.
        </Typography>
        <Typography sx={{display:'flex',alignItems:'center',marginTop:'10px'}}><ChevronRightSharpIcon style={{color:'green'}}/>Mentored more than 1 Lakh aspirants 
        </Typography>
      <Typography sx={{display:'flex',alignItems:'center'}}><ChevronRightSharpIcon style={{color:'green'}}/>More than 10% success ratio </Typography>
      <Typography sx={{display:'flex',alignItems:'center'}}><ChevronRightSharpIcon style={{color:'green'}}/>Most viewed session on Josh Talks</Typography>
       </Box>

       <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',gap:'11px',marginTop:'50px',width:'100%'}}>

      
       
      

       <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'8px'}}>
       <img style={{width:'32px'}} src={youtube}/>
       <Typography>iasips_mentor</Typography>
       </Box>
       <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'8px'}}>
       <img  style={{width:'32px'}} src={telegram}/>
       <Typography>iasips_mentor</Typography>
       </Box>
       <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'8px'}}>
       <img  style={{width:'32px'}} src={insta}/>
       <Typography>iasips_mentor</Typography>
       </Box>


    </Box>

     </Box>

     ) }

     {isMobileView && (
          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',width:'100%',marginTop:'130px'}} >
         <Box sx={{display:'flex',flexDirection:'column',width:'100%',alignItems:'center'}} >
         <Typography sx={{fontSize:'40px',fontWeight:'700'}}>Our Director</Typography>
         <Box>
         <img style={{width:'300px',marginTop:'10px',borderRadius:'50%'}} src={aboutphoto}/>
        </Box>
          <Box>
          <Typography sx={{marginTop:'10px',fontSize:'15px'}}>Shashank Sajwan, originally from Uttarakhand, pursued Physics Hons. from Delhi University, followed by a Post-Graduation in Public Administration from IGNOU. His passion for UPSC emerged during his undergraduate years, and post-graduation, he dedicated himself to this pursuit.

          </Typography>
          <Typography sx={{marginTop:'10px',fontSize:'15px'}}>Recognizing the challenges faced by UPSC aspirants lacking proper guidance, Shashank decided to share his insights via Instagram, garnering immense support and reaching over 1 million followers and subscribers across various platforms. Now, at www.shashanksajwan.com, aspirants can find comprehensive resources including mentorship and mock exams, streamlining their preparation process.

          </Typography>
          <Typography  sx={{marginTop:'10px',fontSize:'15px'}}>As Shashank embarks on this new journey, his commitment to empowering aspirants remains unwavering.</Typography>
           </Box>
        

         </Box>
            
         <Box>
         <Typography sx={{marginTop:'40px',fontSize:'40px',fontWeight:'700',display:'flex',alignItems:'center',justifyContent:'center'}}>Our Vision</Typography>

         <Typography sx={{marginTop:'10px',fontSize:'15px'}}>From the outset of our Academy, our mission has been centered on delivering high-quality education at accessible rates. We deeply grasp the significance of mentorship and tailored guidance in this field. 
         Therefore, leveraging our esteemed educators, we strive to offer individualized mentorship, a factor that has consistently contributed to students achieving commendable positions in civil services examinations.</Typography>
         <Typography sx={{display:'flex',alignItems:'center',fontSize:'15px',marginTop:'10px'}}><ChevronRightSharpIcon style={{color:'green'}}/> Cost-effectiveness</Typography>
         <Typography sx={{display:'flex',alignItems:'center',fontSize:'15px'}}><ChevronRightSharpIcon style={{color:'green'}}/>Customized Education</Typography>
         <Typography sx={{display:'flex',alignItems:'center',fontSize:'15px'}}><ChevronRightSharpIcon style={{color:'green'}}/> Exceptional Instruction</Typography>
         <Typography sx={{display:'flex',alignItems:'center',fontSize:'15px'}}><ChevronRightSharpIcon style={{color:'green'}}/> Providing Needed Mentorship </Typography>
         <Typography sx={{display:'flex',alignItems:'center',fontSize:'15px'}}><ChevronRightSharpIcon style={{color:'green'}}/> Smart Study </Typography>
         </Box>

         <Box>
          <Typography sx={{marginTop:'40px',fontSize:'40px',fontWeight:'700',display:'flex',alignItems:'center',justifyContent:'center'}}>Our Team</Typography>
          <Typography sx={{display:'flex',alignItems:'center',fontSize:'15px'}}>Our team comprises highly educated and experienced professionals, with several faculty members having undergone the interview process themselves. Our collective aim is to deliver the utmost quality education to our students, prioritizing excellence in every aspect of our teaching approach. With a wealth of knowledge and expertise, we are committed to nurturing the academic growth and success of our students.</Typography>
         </Box>

         <Box>
         <Typography sx={{marginTop:'40px',fontSize:'40px',fontWeight:'700',display:'flex',alignItems:'center',justifyContent:'center'}}>Our Achievements</Typography>
         <Typography sx={{display:'flex',alignItems:'center',fontSize:'15px'}} >We take pride in being recognized as the most innovative YouTube channel and academy throughout India. Shashank Sir stands as the most sought-after mentor for UPSC CSE in the country. Pioneering successful mentorship programs, we strive to revolutionize the education landscape, setting new standards of excellence and achievement.
         </Typography>
         <Typography sx={{display:'flex',alignItems:'center',marginTop:'10px',fontSize:'15px'}}><ChevronRightSharpIcon style={{color:'green'}}/>Mentored more than 1 Lakh aspirants 
         </Typography>
       <Typography sx={{display:'flex',alignItems:'center',fontSize:'15px'}}><ChevronRightSharpIcon style={{color:'green'}}/>More than 10% success ratio </Typography>
       <Typography sx={{display:'flex',alignItems:'center',fontSize:'15px'}}><ChevronRightSharpIcon style={{color:'green'}}/>Most viewed session on Josh Talks</Typography>
        </Box>

         <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around',gap:'11px',marginTop:'50px',width:'100%'}}>

      
       
      

         <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'8px'}}>
         <img style={{width:'32px'}} src={youtube}/>
         <Typography>iasips_mentor</Typography>
         </Box>
         <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'8px'}}>
         <img  style={{width:'32px'}} src={telegram}/>
         <Typography>iasips_mentor</Typography>
         </Box>
         <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'8px'}}>
         <img  style={{width:'32px'}} src={insta}/>
         <Typography>iasips_mentor</Typography>
         </Box>
  
  
      </Box>

        </Box>
     )}    
    </Container>
   
  )
}

export default About


// <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'140px'}}>
//      <Typography fontFamily='lato' sx={{marginTop:'20px',fontSize:isMobileView?"25px":"40px"}} variant='h1'>Our Mission</Typography>

//      <Typography  sx={{marginTop:'20px'}} variant='h6'>UPSC CSE, according to me is not an ordinary exam. It tests your limits, not only mental strength but also physical strength. 
//      It tests your overall personality. For me an aspirant’s overall development is a must in order to achieve success in this exam. During my long UPSC journey I had many ups and downs. 
//      I learned different aspects of this exam and gained experience and knowledge with which I can help you clear this exam based on my experience and experiments. 
//      I believe the most important thing to clear this exam is right direction, clear approach and a good plan. 
//      Due to lack of knowledge, beginners do make mistakes which can really harm their preparation and that is where my guidance and mentorship will come handy.
//       From basic doubt to an advanced problem I will be guiding and showing the right direction and will help the aspirants in every aspect during their this beautiful journey of civil services preparation..
//     </Typography>
//     <Stack sx={{margin:'20px'}} direction='row' spacing={10}>
//     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'50px'}}>
//       <Typography variant='h5' color="text.success">599K + </Typography>
//       <Typography variant='h6'>Youtube Subscriber </Typography>
//       </Box>

//       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'50px'}}>
//       <Typography variant='h5' color="text.success">180K + </Typography>
//       <Typography variant='h6'>Instagram Family </Typography>
//       </Box>

//       </Stack>
 
//      <Box sx={{width:'100%',height:{lg:'450px',md:'300px',sm:'280px',xs:'250px'},background: 'rgba(230, 243, 240, 1)',display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20px'}}>

//      <Typography fontFamily='lato' sx={{backgroundColor:'transparent',marginTop:'20px'}} variant='h2'>Meet Our Leader</Typography>


//      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'transparent',marginTop:'30px'}}>
//       <Box sx={{backgroundColor:'transparent'}}>
//       <Avatar  sx={{ width: {lg:250 , md:150 , sm:100,xs:50}, height: {lg:250 , md:150 , sm:100,xs:50} }} src={photo}/>
//       </Box>
//       <Typography  fontFamily='lato' sx={{margin:'10px',fontSize:{lg:'35px',md:'25px',sm:'26px',xs:'25px'}}}>Shashank Sajwan </Typography>
//      </Box>
//      </Box>
//      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20px'}}>
//      <Typography fontFamily='lato' sx={{fontSize:{lg:'40px',md:'40px',sm:'30px',xs:'25px'}}}>Our Startup Journey</Typography>

//      <Typography  sx={{marginTop:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} variant='h6'>Hi my name is Shashank Sajwan, from Uttarakhand. I have done my graduation in Physics Hons. From Delhi University and Post-Graduation in Public Administration from IGNOU. When I
//      was in my graduation, I decided that I want to prepare for UPSC and after it I began it.  
//      During my alluring journey, I found that many of the Aspirants who are preparing for this exam are not having any guidance and their preparation is also disguised. In this exam, Patience, Dedication and good guidance is important. If one is having all the weapons prepared before the fight, then they can win the battle. But when I got to see that students are having these issues in their preparation, I decided to share my experience with them so that they can tackle their upcoming problems without any mess. Therefore, I made an Instagram Page and I started    
//      to share my views, thoughts, experience which I have gained in my UPSC journey. And luckily, I found that the people are loving it, it is helping the Aspirants in many ways and because of your love and support, today we have crossed a milestone of 186k followers on Instagram & 5 lakh on YouTube. 
//      Now, I am starting my website www.shashanksajwan.com, in this you will get everything in one touch. All your doubts are going to be solved here in no time, you can get personal mentorship here, you can give mocks, and many more.
//      Hope you are going to have an wonderful experience here.
     
//      Yours Truly</Typography>
//      </Box>

//      </Box>