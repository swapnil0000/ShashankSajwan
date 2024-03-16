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

  return (
    <>
    {isMobileView && (
      <AppBar sx={{ position: 'fixed', backgroundColor: '#212529',boxShadow:'none',height:'100px' }}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',height:'100px',width:'100%'}}>      
        <Drawer
          anchor="top"
          open={openMenu}
          onClose={handleClose}
          sx={{backgroundColor:"#212529"}}
        >
          <List  onClick={handleMenuClick} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around',backgroundColor:'#212529' }}>
          <Link  style={{marginBottom:'10px'}} to="/">Home</Link>
          <Link  style={{marginBottom:'10px'}} to="/notes">Notes</Link>
          <Link  style={{marginBottom:'10px'}} to="/about">About</Link>
          <Link  style={{marginBottom:'10px'}} to="/blogs">Blogs</Link>
          <Link  style={{marginBottom:'10px'}} to="/contact">Contact</Link>
          {/* Add more menu items as needed */}
        </List>
        </Drawer>
        <img
          style={{ cursor: 'pointer' }}
          onClick={() => { navigate("/") }}
          width="70px"
          
          src={logo}
          alt='logo'
        />
         <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between'}}>
         <Typography sx={{fontWeight:'700',fontSize:isSmallView?"20px":"30px"}}>SHASHANK SAJWAN</Typography>
         <Typography sx={{fontSize:isSmallView?"15px":'20px'}}>Your Vision, My direction</Typography>
         </Box>
         
        <IconButton color="inherit" aria-label="menu" onClick={handleMenuClick}>
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
        </Toolbar>
        </AppBar>
    )}
    {!isMobileView &&
      <AppBar sx={{ position: 'fixed', backgroundColor: '#212529',boxShadow:'none' , height:'130px'}}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',height:'150px'}}>
      <Floating />
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',gap:'20px'}}>
          <img onClick={()=>{navigate("/")}} style={{ width: '100px', contain: 'cover' }} src={logo} alt='logo' />
          <Box sx={{display:'flex',flexDirection:"column"}}>
           <Typography sx={{fontWeight:'700',fontSize:isTabletView?"20px":"30px"}}>SHASHANK SAJWAN</Typography>
           <Typography sx={{display:'flex',alignItems:'center',flexDirection:'row',justifyContent:'center',fontSize:'20px'}} variant='h6'>Your Vision, My Direction</Typography>
          </Box>
        </Box>
        <Box>
          <Stack direction="row"  sx={{ display: 'flex', flexDirection: 'revert-layer', color: 'black',alignItems:'center' }}>  
            <a>
             <Link to='/'>Home</Link>
            </a>
            <a >
              <Link style={{display:'flex',flexDirection:'row',alignItems:'center'}} to='/notes'>
              Notes <ArrowDropDownIcon/>
              </Link>
            </a>
            <a>
             <Link to='/about'>About</Link>
            </a>
            <a>
             <Link to='/contact'>Contact</Link>
            </a>
            <a>
             <Link to='/blogs'>Blog</Link>
            </a>
          </Stack>
        </Box>
        <Box sx={{display:"flex",flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'10px'}}>
          <Box sx={{display:'flex',flexDirection:'row',gap:'10px'}}>
          <Button sx={{backgroundColor:'white',width:'200px'}}>Admission/Enquiry</Button>
          </Box>
          <Box sx={{display:'flex',flexDirection:'row',gap:'10px',alignItems:'center',width:'20px',justifyContent:"center",marginTop:'5px'}}>
          <CallIcon sx={{color:'#e9e1e1'}}/>
          <Typography  sx={{color:'#e9e1e1',fontSize:'20px'}} variant='h6'> 6386455982</Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
    
    }
    </>
  )
}

export default Header