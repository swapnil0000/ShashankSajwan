import React from 'react';
import { Container, Grid, Typography,  Box, Button, Stack, Divider, useTheme, useMediaQuery } from '@mui/material';
import logo from "../assets/shashank.PNG"
import Icon from './Icon/Icon';
import { Link, useNavigate } from 'react-router-dom';
import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logos from "../assets/shashank.PNG"


const Footer = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
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
    <Box  sx={{ backgroundColor: '#212529',color:'white',bottom:0,marginTop:'20px' ,height:isMobileView?"800px":"270px", width:'100%'}}>
      <Container>


         <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'space-evenly',width:'100%',bottom:0}}>

          
          

           <Box sx={{display:'flex',flexDirection:'column',width:'80%'}}>
            <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",gap:'20px',justifyContent:'space-between',width:'100%',marginTop:'40px'}}>

              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                 <img style={{width:'130px'}} src={logos} alt=''/>
              </Box>

             <Box sx={{display:'flex',flexDirection:"row",justifyContent:'space-between',gap:'80px'}}>

             <Box sx={{display:'flex',flexDirection:'column' }}>
             <Typography  onClick={()=>navigate("/")} sx={{color:'white',margin:'2.5px',cursor:'pointer'}}>Home</Typography>
             <Typography  onClick={()=>navigate("/private")} sx={{color:'white',margin:'2.5px',cursor:'pointer'}}>Privacy Policy</Typography>
             <Typography   onClick={()=>navigate("/terms")} sx={{color:'white',margin:'2.5px',cursor:'pointer'}}>Terms & Conditions</Typography>
             <Typography onClick={()=>navigate("/refund")} sx={{color:'white',margin:'2.5px',cursor:'pointer'}}>Refund Policy</Typography>
             </Box>

            <Box sx={{display:'flex',flexDirection:'column'}}>
  
            <Typography onClick={()=>navigate("/material")}  sx={{color:'white',margin:'2.5px'}}>Study Material</Typography>
      
            <Typography onClick={()=>navigate("/")}  sx={{color:'white',margin:'2.5px'}}>Courses</Typography>
     
            <Typography onClick={()=>navigate("/faqs")}  sx={{color:'white',margin:'2.5px',cursor:'pointer'}}>FAQs</Typography>
          
            </Box>

             </Box>

              <Box  sx={{display:'flex',flexDirection:'column',alignItems:isMobileView?"center":"null",justifyContent:'center'}}>
                <Typography>Connect With Us</Typography>
                <Icon/>
                <Typography>For Career and Business:</Typography>
                <Typography>ask.iasmentor@gmail.com</Typography>
              </Box>
           </Box>


          </Box>


        </Box>
        <Typography fontSize='15px' sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:'35px'}}>©  All rights reserved Shashank Sajwan.</Typography>

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
