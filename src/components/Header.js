import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
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
import Notes from '../pages/Notes/Notes';
const Header = () => {
  const handleWhatsapp = () => {
    // Replace '1234567890' with the phone number you want to send the message to
    const phoneNumber = '6386455982';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };
  const handleEmail = () => {
    const recipientEmail = 'swapnilsrivastava1999@gmail.com';
    const mailtoUrl = `mailto:${recipientEmail}`;
    window.open(mailtoUrl, '_blank');
  };
  const MenuItemLink = ({ to, children, onClick }) => {
    return (
      <ListItem onClick={onClick}>
        <ListItemText sx={{ color: 'black' }}>
          <Link style={{ textDecoration: 'none', color: 'black', fontSize: '16px' }} to={to}>{children}</Link>
        </ListItemText>
      </ListItem>
    );
  };
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate()

  window.onload = function () {
    window.scrollTo(0, 0);
  }
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallView = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(!openMenu);
  };

  const handleLoginClick = () => {
    setOpen(false);
  };
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"))

  const handleCourseClick = () => {
    const courseSection = document.getElementById('course');
    if (courseSection) {
      const yOffset = -70; // Adjust this value as needed
      const y = courseSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleVideoClick = () => {
    const courseSection = document.getElementById('videos');
    if (courseSection) {
      const yOffset = -70; // Adjust this value as needed
      const y = courseSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNotesMenmClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenuTable = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
   const handleMenuClose=()=>{
    setAnchorEl(!anchorEl)
   }

   const handleOpenNotes=()=>{
    navigate('/ncert')
    setAnchorEl(!anchorEl)
   }

  return (
    <>
      {isMobileView && (
        <AppBar sx={{ position: 'fixed', backgroundColor: '#212529', boxShadow: 'none', height: '100px' }}>
          <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '100px', width: '100%' }}>
            <Drawer
              anchor="left"
              open={openMenu}
              onClose={handleClose}
              sx={{ width: '100vw', "& .MuiPaper-root": { width: '100vw' } }} // Set width to full viewport width
            >
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '40px' }}>
                <IconButton onClick={handleClose} sx={{ color: 'red' }}>
                  <CloseIcon /> {/* Assume CloseIcon is imported */}
                </IconButton>
              </Box>

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
                <Link onClick={handleClose} style={{ marginBottom: '20px', fontSize: '30px' }} to="/">Home</Link>

                <div>
                <Link
                id="basic-button"
                variant='text'
                sx={{color:'white',textTransform:'none'}}
                aria-controls={openMenuTable ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenuTable ? 'true' : undefined}
                onClick={handleClick}
              >
                Material
              </Link>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openMenuTable}
                onClose={handleMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                  sx: { flexDirection: 'column' , fontWeight:'600'}, // Set the direction to column
                }}
              >
              <Box sx={{display:'flex',flexDirection:'column',fontWeight:'600'}}>
              <Typography sx={{textTransform:'none',backgroundColor:'lightskyblue',margin:"1px",  '&:hover': {
                backgroundColor: 'orange', // Change the background color on hover
              },}}>
              
              <MenuItem onClick={handleMenuClose}>Ncert Notes</MenuItem>
              </Typography>
              <Typography sx={{textTransform:'none',backgroundColor:'lightskyblue',margin:"1px",  '&:hover': {
                backgroundColor: 'orange', // Change the background color on hover
              },}}>
              <MenuItem onClick={handleMenuClose}>Pyq Notes</MenuItem>
              </Typography>
              <Typography sx={{textTransform:'none',backgroundColor:'lightskyblue',margin:"1px",  '&:hover': {
                backgroundColor: 'orange', // Change the background color on hover
              },}}>
              <MenuItem onClick={handleMenuClose}>Paper Notes</MenuItem>
              </Typography>
              <Typography sx={{textTransform:'none',backgroundColor:'lightskyblue',margin:"1px",  '&:hover': {
                backgroundColor: 'orange', // Change the background color on hover
              },}}>
              <MenuItem onClick={handleMenuClose}>Test(Coming Soon)</MenuItem>
              </Typography>
              <Typography sx={{textTransform:'none',backgroundColor:'lightskyblue',margin:"1px",  '&:hover': {
                backgroundColor: 'orange', // Change the background color on hover
              },}}>
              <MenuItem onClick={handleMenuClose}>Tips & Tricks</MenuItem>
              </Typography>          
              <Typography sx={{textTransform:'none',backgroundColor:'lightskyblue',margin:"1px",  '&:hover': {
                backgroundColor: 'orange', // Change the background color on hover
              },}}>
              <MenuItem onClick={handleMenuClose}>Monthly Magazine</MenuItem>
              </Typography>
              </Box>
            </Menu>
          </div>                <Link onClick={handleClose} style={{ marginBottom: '20px', fontSize: '30px' }} to="/about">About</Link>
                <Link onClick={handleClose} style={{ marginBottom: '20px', fontSize: '30px' }} to="/blogs">Blogs</Link>
                <Link onClick={handleClose} style={{ marginBottom: '20px', fontSize: '30px' }} to="/contact">Contact</Link>
                {/* Add more menu items as needed */}
              </List>
            </Drawer>


            <img
              style={{ cursor: 'pointer' }}
              onClick={() => { navigate("/") }}
              width={isMobileView ? "60px" : "70px"}

              src={logo}
              alt='logo'
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

              <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', marginTop: '10px' }}>
                <Typography sx={{ fontWeight: '700', fontSize: '14px' }}>SHASHANK SAJWAN</Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', fontSize: '10px' }} variant='h6'>Your Vision, My Direction</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '11px', marginTop: '10px' }}>
                  <img style={{ width: '20px' }} src={youtube} />
                  <img style={{ width: '20px' }} src={telegram} />
                  <img style={{ width: '20px' }} src={insta} />

                  <img style={{ width: '20px' }} src={twitter} />
                </Box>
              </Box>
            </Box>


            <Box>
              <Box sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '10px', cursor: 'pointer', marginTop: '15px' }}>
                  <WhatsAppIcon onClick={handleWhatsapp} sx={{ color: 'lightgreen', fontWeight: '700', fontSize: '20px' }} />
                  <img onClick={handleEmail} style={{ width: '20px' }} src={email} />
                </Box>
              </Box>




              <IconButton color="inherit" aria-label="menu" onClick={handleMenuClick}>
                {openMenu ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      )}
      {!isMobileView &&
        <AppBar sx={{ position: 'fixed', backgroundColor: '#212529', boxShadow: 'none', height: '110px', width: '100%' }}>
          <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '130px', width: '100%' }}>
            <Floating />

            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '6px' }}>
              <img onClick={() => { navigate("/") }} style={{ width: '99px', contain: 'cover' }} src={logo} alt='logo' />
              <Box sx={{ display: 'flex', flexDirection: "column" }}>
                <Typography sx={{ fontWeight: '700', fontSize: isTabletView ? "20px" : "20px" }}>SHASHANK SAJWAN</Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', fontSize: '15px' }} variant='h6'>Your Vision, My Direction</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '11px', marginTop: '5px' }}>
                  <img style={{ width: '20px' }} src={youtube} />
                  <img style={{ width: '20px' }} src={telegram} />
                  <img style={{ width: '20px' }} src={insta} />

                  <img style={{ width: '20px' }} src={twitter} />
                </Box>
              </Box>
            </Box>
            <Box sx={{ marginTop: '30px' }}>
              <Stack direction="row" sx={{ display: 'flex', color: 'black', marginTop: '25px', marginRight: '25px', gap: '10px' }}>

                <Link to='/'>Home</Link>
                {!isMobileView && 
                  (
                    <div>
                    <Link
                    id="basic-button"
                    variant='text'
                    sx={{color:'white',textTransform:'none'}}
                    aria-controls={openMenuTable ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenuTable ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    Material
                  </Link>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openMenuTable}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                      sx: { flexDirection: 'column' , fontWeight:'600',backgroundColor:'#212529'}, // Set the direction to column
                    }}
                  >
                  <Box sx={{display:'flex',flexDirection:'column',fontWeight:'600'}}>
                  <Typography sx={{textTransform:'none',margin:"1px", color:'white',fontSize:'15px', '&:hover': {
                    backgroundColor: 'orangered' // Change the background color on hover
                  },}}>
                  <MenuItem onClick={handleOpenNotes} sx={{fontSize:'15px'}} >Ncert Notes
                  
                  </MenuItem>
                   
                  
                  </Typography>
                  <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
                    backgroundColor: 'orangered' // Change the background color on hover
                  },}}>
                  <MenuItem sx={{fontSize:'15px'}} onClick={handleMenuClose}>Pyq Notes</MenuItem>
                  </Typography>
                  <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
                    backgroundColor: 'orangered'// Change the background color on hover
                  },}}>
                  <MenuItem sx={{fontSize:'15px'}} onClick={handleMenuClose}>Paper Notes</MenuItem>
                  </Typography>
                  <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
                    backgroundColor:'orangered'// Change the background color on hover
                  },}}>
                  <MenuItem sx={{fontSize:'15px'}} onClick={handleMenuClose}>Test(Coming Soon)</MenuItem>
                  </Typography>
                  <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
                    backgroundColor:'orangered' // Change the background color on hover
                  },}}>
                  <MenuItem sx={{fontSize:'15px'}} onClick={handleMenuClose}>Tips & Tricks</MenuItem>
                  </Typography>          
                  <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
                    backgroundColor: 'orangered', // Change the background color on hover
                  },}}>
                  <MenuItem sx={{fontSize:'15px'}} onClick={handleMenuClose}>Monthly Magazine</MenuItem>
                  </Typography>
                  </Box>
                </Menu>
              </div>
                  )
                }
               
             
                <Link onClick={handleCourseClick}>Course</Link> {/* Navigate to course section in home */}
                <Link onClick={handleVideoClick}>Videos</Link> {/* Navigate to course section in home */}
                <Link to='/about'>About</Link>

                <Link to='/contact'>Contact</Link>
              </Stack>
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Box onClick={handleWhatsapp} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginRight: '55px', gap: '10px', cursor: 'pointer' }}>
                <WhatsAppIcon sx={{ color: 'lightgreen', fontWeight: '700' }} />
                <Typography sx={{ color: 'white', fontSize: "15px" }}>+91 6386455982</Typography>
              </Box>
              <Box onClick={handleEmail} sx={{ display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '5px', cursor: 'pointer' }}>
                <img style={{ width: '18px' }} src={email} />
                <Typography sx={{ color: 'white', fontSize: "14px", textTransform: 'lowercase' }}>ask.iasmentor@gmail.com</Typography>
              </Box>

            </Box>
          </Toolbar>
        </AppBar>

      }
    </>
  )
}

export default Header