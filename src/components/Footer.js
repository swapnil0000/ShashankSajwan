import React from 'react';
import { Container, Grid, Typography, Link, Box, Button, Stack, Divider } from '@mui/material';
import logo from "../assets/shashank.PNG"
import Icon from './Icon/Icon';

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
  return (
    <Box sx={{ backgroundColor: 'black',color:'white',height:'250px' }}>
      <Container sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',gap:'100px'}}>
        <Box sx={{marginTop:'30px',display:'flex',flexDirection:'column',alignItems:'center'}}>
         <Typography variant='h4'>Quick Link</Typography>
         <Divider  sx={{border:'1px solid white',width:'100px'}}/>
         <Stack sx={{marginTop:'10px'}} direction='column'>

         <Button sx={{color:'white',textTransform:'none',fontSize:'15px'}}>Home</Button>
         <Button sx={{color:'white',textTransform:'none',fontSize:'15px'}}>Blog</Button>
         <Button sx={{color:'white',textTransform:'none',fontSize:'15px'}}>Contact</Button>
         <Button sx={{color:'white',textTransform:'none',fontSize:'15px'}}>About</Button>
         </Stack>
        </Box>
        <Box sx={{marginTop:'30px',display:'flex',flexDirection:'column',alignItems:'center'}}>
           <Typography variant='h4'>Legal</Typography>
           <Divider  sx={{border:'1px solid white',width:'100px'}}/>
           <Stack sx={{marginTop:'10px'}} direction='column'>
           <Button sx={{color:'white',textTransform:'none',fontSize:'15px'}}>Terms & Conditions</Button>
           <Button sx={{color:'white',textTransform:'none',fontSize:'15px'}}>Privacy Policy</Button>
           <Button sx={{color:'white',textTransform:'none',fontSize:'15px'}}>Cookies Policy</Button>
           <Button sx={{color:'white',textTransform:'none',fontSize:'15px'}}>Privacy Policy</Button>

           </Stack>
        </Box>
        <Box sx={{marginTop:'30px',display:'flex',flexDirection:'column',alignItems:'center'}}>
         <Typography variant='h4'>Social Media</Typography>
         <Divider  sx={{border:'1px solid white',width:'100px'}}/>
         <Box sx={{width:'20px'}}>
         <Icon/>

         </Box>

         </Box>
      </Container>
    </Box>
  )
};

export default Footer;
