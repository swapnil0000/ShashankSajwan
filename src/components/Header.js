import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemText, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import logo from "../assets/shashank.PNG"
import CallIcon from '@mui/icons-material/Call';
import "../style.css"
import { Link, useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Floating from './floating/Floating';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import email from "../assets/gmail.png"
import mail from "../assets/mail.png"
import telegram from "../assets/telegram.png"
import twitter from "../assets/twitter.png"
import insta from "../assets/insta.png"
import youtube from "../assets/youtube.png"
const Header = () => 
{
  const MenuItemLink = ({ to, children, onClick }) => {
    return (
      <ListItem onClick={onClick}>
        <ListItemText sx={{color:'black'}}>
          <Link style={{ textDecoration: 'none', color: 'black', fontSize: '16px' }} to={to}>{children}</Link>
        </ListItemText>
      </ListItem>
    );
  };
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate=useNavigate()

  window.onload = function() {
    window.scrollTo(0,0);
}
const theme=useTheme();
const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
const isSmallView=useMediaQuery(theme.breakpoints.down("sm"));
const handleMenuClick = () => {
  setOpenMenu(!openMenu);
};

const handleClose = () => {
  setOpenMenu(!openMenu);
};

const handleLoginClick = () => {
  setOpen(false);
};
const isTabletView=useMediaQuery(theme.breakpoints.down("lg"))

    const handleCourseClick = () => {
     const courseSection = document.getElementById('course');
      if (courseSection) {
      const yOffset = -70; // Adjust this value as needed
      const y = courseSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
     }};

    const handleVideoClick = () => {
      const courseSection = document.getElementById('videos');
       if (courseSection) {
        const yOffset = -70; // Adjust this value as needed
        const y = courseSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
       }};

  return (
    <>
    {isMobileView && (
      <AppBar sx={{ position: 'fixed', backgroundColor: '#212529',boxShadow:'none',height:'100px' }}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',height:'100px',width:'100%'}}>      
      <Drawer
      anchor="left"
      open={openMenu}
      onClose={handleClose}
      sx={{ width: '100vw' ,  "& .MuiPaper-root": {
        width: '100vw' }}} // Set width to full viewport width
    >
      <List
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', // Center items vertically
          alignItems: 'center', // Center items horizontally
          height: '100vh', // Set height to full viewport height
          backgroundColor: '#212529',
          padding: '0', // Remove default padding
        }}
      >
        <Link onClick={handleClose} style={{ marginBottom: '20px' , fontSize:'30px'}} to="/">Home</Link>
        <Link onClick={handleClose} style={{ marginBottom: '20px' , fontSize:'30px'}} to="/material">Notes</Link>
        <Link onClick={handleClose} style={{ marginBottom: '20px' , fontSize:'30px'}} to="/about">About</Link>
        <Link onClick={handleClose} style={{ marginBottom: '20px' , fontSize:'30px'}} to="/blogs">Blogs</Link>
        <Link onClick={handleClose} style={{ marginBottom: '20px' , fontSize:'30px'}} to="/contact">Contact</Link>
        {/* Add more menu items as needed */}
      </List>
    </Drawer>
    
        <img
          style={{ cursor: 'pointer' }}
          onClick={() => { navigate("/") }}
          width={isMobileView?"60px":"70px"}
          
          src={logo}
          alt='logo'
        />
        
         
        <IconButton color="inherit" aria-label="menu" onClick={handleMenuClick}>
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        </Toolbar>
        </AppBar>
    )}
    {!isMobileView &&
      <AppBar sx={{ position: 'fixed', backgroundColor: '#212529',boxShadow:'none' , height:'110px',width:'100%'}}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',height:'130px',width:'100%'}}>
      <Floating />
        
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'6px'}}>
          <img onClick={()=>{navigate("/")}} style={{ width: '99px', contain: 'cover' }} src={logo} alt='logo' />
          <Box sx={{display:'flex',flexDirection:"column"}}>
           <Typography sx={{fontWeight:'700',fontSize:isTabletView?"20px":"20px"}}>SHASHANK SAJWAN</Typography>
           <Typography sx={{display:'flex',alignItems:'center',flexDirection:'row',justifyContent:'center',fontSize:'15px'}} variant='h6'>Your Vision, My Direction</Typography>
           <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'11px',marginTop:'5px'}}>
             <img style={{width:'20px'}} src={youtube}/>
             <img  style={{width:'20px'}} src={telegram}/>
             <img  style={{width:'20px'}} src={insta}/>

             <img  style={{width:'20px'}} src={twitter}/>
          </Box>
          </Box>
        </Box>
        <Box sx={{marginTop:'30px'}}>
          <Stack direction="row"  sx={{ display: 'flex', color: 'black',marginTop:'25px',marginRight:'25px' ,gap:'10px'}}>  
          
             <Link to='/'>Home</Link>
            
             <Link to='/material'>Notes</Link>
            <Link onClick={handleCourseClick}>Course</Link> {/* Navigate to course section in home */}
            <Link onClick={handleVideoClick}>Videos</Link> {/* Navigate to course section in home */}
            <Link to='/about'>About</Link>
          
            <Link  to='/contact'>Contact</Link>
          </Stack>
        </Box>
        <Box sx={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'start',marginRight:'55px',gap:'10px'}}>
          <WhatsAppIcon sx={{color:'lightgreen',fontWeight:'700'}}/>
          <Typography sx={{color:'white',fontSize:"15px"}}>+91 6386455982</Typography>  
          </Box>
          <Box sx={{display:'flex',flexDirection:'row',gap:'10px',marginTop:'5px'}}>
           <img style={{width:'18px'}} src={email}/>
          <Typography sx={{color:'white',fontSize:"14px",textTransform:'lowercase'}}>ask.iasmentor@gmail.com</Typography>  
          </Box>
           
        </Box>
      </Toolbar>
    </AppBar>
    
    }
    </>
  )
}

export default Header