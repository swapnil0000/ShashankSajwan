import { AppBar, Box, Container, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import logo from "../assets/shashank.PNG"
import CallIcon from '@mui/icons-material/Call';
import "../style.css"
import { Link, useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Floating from './floating/Floating';
const Header = () => 
{
  const navigate=useNavigate()

  window.onload = function() {
    window.scrollTo(0,0);
}
const theme=useTheme();
const isMobileView=useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <AppBar sx={{ position: 'fixed', backgroundColor: '#212529',boxShadow:'none' }}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
      <Floating />
        <Box>
          <img onClick={()=>{navigate("/")}} style={{ width: '60px', contain: 'cover' }} src={logo} alt='logo' />
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
        <Box sx={{display:"flex",flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'10px'}}>
          <CallIcon sx={{color:'#e9e1e1'}}/>
         <Typography  sx={{color:'#e9e1e1'}} variant='h6'> 6386455982</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header