import { AppBar, Box, Container, Stack, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import logo from "../assets/shashank.PNG"
import CallIcon from '@mui/icons-material/Call';
import "../style.css"
const Header = () => {
  return (
    <AppBar sx={{ position: 'fixed', backgroundColor: '#f5f5f5',boxShadow:'none' }}>
      <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Box>
          <img style={{ width: '60px', contain: 'cover' }} src={logo} alt='logo' />
        </Box>
        <Box>
          <Stack direction="row" spacing={10} sx={{ display: 'flex', flexDirection: 'revert-layer', color: 'black' }}>  
            <a>Home</a>
            <a>Study Material</a>
            <a href='/about'>About</a>
            <a>Contact</a>
            <a>Blog</a>
          </Stack>
        </Box>
        <Box sx={{display:"flex",flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'10px'}}>
          <CallIcon sx={{color:'black'}}/>
         <Typography  sx={{color:'black'}} variant='h5'> 6386455982</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header