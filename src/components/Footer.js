import React from 'react';
import { Container, Grid, Typography, Link, Box, Button, Stack, Divider, useTheme, useMediaQuery } from '@mui/material';
import logo from "../assets/shashank.PNG"
import Icon from './Icon/Icon';
import { useNavigate } from 'react-router-dom';
import  { useEffect, useRef } from 'react';
import gsap from 'gsap';


const Footer = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("sm"));
  // const cardRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           animateIn();
  //           observer.unobserve(entry.target);
  //         }
  //       });
  //     },
  //     { threshold: 0.2 } // Adjust this threshold as needed
  //   );

  //   observer.observe(cardRef.current);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  // const animateIn = () => {
  //   gsap.to(cardRef.current, {
  //     y: '-40px',
  //     opacity: 1,
  //     duration: .5,
  //     ease: 'power4.out',
  //   });
  // };
  // <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
  //          <Typography sx={{fontSize:{lg:'20px',md:'18px',sm:'15px',xs:'12px'}}}>Shashank Sajwan</Typography>
  //          <Typography sx={{fontSize:{lg:'20px',md:'18px',sm:'15px',xs:'12px'}}}>Best UPSC Coaching in Dehradun</Typography>
  //         </Box>

  const navigate=useNavigate();
  return (
    <Box  sx={{ backgroundColor: '#212529',color:'white',bottom:0,marginTop:'20px' , width:'100%'}}>
      <Container>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>

         <Box>
          <Typography fontFamily='lato' sx={{margin:'15px',fontSize:isMobileView?"25px":"30px"}} variant='h3'>Your Vision, My Direction</Typography>
         </Box>


         <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'space-around',width:'100%'}}>

          
          
          <Box sx={{display:'flex',flexDirection:'row',gap:'140px',marginTop:'20px',marginBottom:'20px'}}>

           <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Typography sx={{marginBottom:'5',fontSize:'30px',marginTop:'15px',fontWeight:'700',color:'#f0750f'}}>COMPANY</Typography>
            <Box sx={{display:'flex',flexDirection:'column'}}>
            <Button  onClick={()=>{navigate('/terms')}} sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Term & Conditions</Button>
            <Button onClick={()=>{navigate('/faqs')}} sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >FAQs</Button>
            <Button onClick={()=>{navigate('/refund')}} sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Refund Policy</Button>
           <Button onClick={()=>{navigate('/private')}} sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Private Policy</Button>
           </Box>
           </Box>


          </Box>


         </Box>
         <Box sx={{display:'flex',flexDirection:"column",alignItems:'center',justifyContent:'space-around',width:'100%'}}>
           <Typography fontSize='10px'>©  All rights reserved Shashank Sajwan.</Typography>
           <Box >
            <Icon/>
           </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
};

export default Footer;

// <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
//           <Typography sx={{marginBottom:'3px',marginTop:'15px'}}>PAGES</Typography>
//             <Box sx={{display:'flex',flexDirection:'column'}}>
//             <Button onClick={()=>navigate("/")} sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Home</Button>
//             <Button onClick={()=>navigate("/notes")}  sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Material</Button>
//             <Button onClick={()=>navigate("/about")}  sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >About</Button>
//             <Button onClick={()=>navigate("/contact")}  sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Contact</Button>
//             <Button onClick={()=>navigate("/blogs")}  sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Blogs</Button>
//             </Box>
//            </Box>
