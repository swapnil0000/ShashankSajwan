import React from 'react';
import { Container, Grid, Typography, Link, Box, Button, Stack, Divider } from '@mui/material';
import logo from "../assets/shashank.PNG"
import Icon from './Icon/Icon';
import { useNavigate } from 'react-router-dom';

// <footer  style={{ backgroundColor: '#1b2b3a', padding: '48px 0', marginTop: '48px',color:'white' }}>
// <Container maxWidth="lg"  sx={{display:'flex',flexDirection:"column",alignItems:'center',justifyContent:'space-around '}}>
//   <Grid container spacing={3}>
//     <Grid item xs={12} sm={6} md={3}>
//     <Typography variant="h5" gutterBottom>
//     About Us
//   </Typography>
//      <img style={{width:'60px' , content:'cover'}} src={logo} alt='logo'/>
//       <Typography variant="body2" >
//       Best IAS Coaching & Top IAS Academy In Uttarakhand.
//       </Typography>
//       <Typography variant='h6'>D1/358 kalindipuram rajroopur Dehradun</Typography>
//     </Grid>
//     <Grid item xs={12} sm={6} md={3}>
//      <Box>
//       <Typography variant="h5" gutterBottom>
//         Quick Links
//       </Typography>
//       <Typography  variant="body2" sx={{textDecoration:'none'}}>
//           <Button sx={{color:'white',textTransform:'none',fontSize:'15px'}}>Home</Button>
//       </Typography>
//       <Typography variant="body2" sx={{textDecoration:'none'}}>
//       <Button sx={{color:'white',textTransform:'none',fontSize:'15px'}}>About</Button>
//     </Typography>
//     <Typography variant="body2" sx={{textDecoration:'none'}}>
//     <Button sx={{color:'white',textTransform:'none',fontSize:'15px'}}>Contact</Button>
//   </Typography>
//       <Typography variant="body2">
//       <Button sx={{color:'white',textTransform:'none',fontSize:'15px'}}>Blog</Button>
//       </Typography>
//       </Box>
//     </Grid>
//     <Grid item xs={12} sm={6} md={3}>
//       <Typography variant="h5" gutterBottom>
//         Legal
//       </Typography>
//       <Typography variant="body2">
//         <Link href="#" color="inherit">
//           Terms & Conditions
//         </Link>
//       </Typography>
//       <Typography variant="body2">
//         <Link href="#" color="inherit">
//           Privacy Policy
//         </Link>
//       </Typography>
//       <Typography variant="body2">
//         <Link href="#" color="inherit">
//           Cookies Policy
//         </Link>
//       </Typography>
//     </Grid>
//     <Grid item xs={12} sm={6} md={3}>
//       <Typography variant="h5" gutterBottom>
//         Social
//       </Typography>
//       <Typography variant="body2">
//         <Link href="#" color="inherit">
//           Facebook
//         </Link>
//       </Typography>
//       <Typography variant="body2">
//         <Link href="#" color="inherit">
//           Twitter
//         </Link>
//       </Typography>
//       <Typography variant="body2">
//         <Link href="#" color="inherit">
//           Instagram
//         </Link>
//       </Typography>
//     </Grid>
//   </Grid>
//   <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
//     © {new Date().getFullYear()} Your Company. All rights reserved.
//   </Typography>
// </Container>
// </footer>
const Footer = () => {
  const navigate=useNavigate();
  return (
    <Box sx={{ backgroundColor: '#212529',color:'white',height:'330px',marginTop:'20px' , width:'100%'}}>
      <Container>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>

         <Box>
          <Typography fontFamily='lato' sx={{margin:'15px'}} variant='h3'>Your Vision, My Direction</Typography>
         </Box>


         <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',width:'100%'}}>

          <Box sx={{display:'flex',flexDirection:'column'}}>
           <Typography>Shashank Sajwan</Typography>
           <Typography>Best UPSC Coaching in Dehradun</Typography>
          </Box>
          
          <Box sx={{display:'flex',flexDirection:'row',gap:'30px'}}>

           <Box>
            <Typography sx={{marginBottom:'3px'}}>PAGES</Typography>
            <Box sx={{display:'flex',flexDirection:'column'}}>
            <Button onClick={()=>navigate("/")} sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Home</Button>
            <Button onClick={()=>navigate("/notes")}  sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Material</Button>
            <Button onClick={()=>navigate("/about")}  sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >About</Button>
            <Button onClick={()=>navigate("/contact")}  sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Contact</Button>
            <Button onClick={()=>navigate("/blogs")}  sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Blogs</Button>
            </Box>
           </Box>

           <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Typography sx={{marginBottom:'10px'}}>COMPANY</Typography>
            <Box sx={{display:'flex',flexDirection:'column'}}>
            <Button  onClick={()=>{navigate('/terms')}} sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Term and Conditions</Button>
            <Button onClick={()=>{navigate('/faqs')}} sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >FAQs</Button>
            <Button onClick={()=>{navigate('/refund')}} sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Refund Policy</Button>
           <Button onClick={()=>{navigate('/private')}} sx={{fontSize:'12px',cursor:'pointer',textTransform:'none',color:'white'}} >Private Policy</Button>
           </Box>
           </Box>


          </Box>


         </Box>
         <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',width:'100%'}}>
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
