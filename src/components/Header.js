import { AppBar, Box, Divider, Drawer, IconButton, List, Menu, MenuItem, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Floating from './floating/Floating';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Header = () => {
  const handleWhatsapp = () => {
    // Replace '1234567890' with the phone number you want to send the message to
    const phoneNumber = '7060748896';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };
  const handleEmail = () => {
    const recipientEmail = 'ask.iasmentor@gmail.com';
    const mailtoUrl = `mailto:${recipientEmail}`;
    window.open(mailtoUrl, '_blank');
  };
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate()

  window.onload = function () {
    window.scrollTo(0, 0);
  }
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClose = () => {
    setOpenMenu(!openMenu);
  };

  // for mobile
  //<Divider orientation='horizontal' sx={{width:'50%',color:'white',height:'3px',border:'1px solid white',marginBottom: '10px',}}/>
  //<Link onClick={handleClose} style={{  fontSize: '25px',textDecoration:'none',color:'white' }} to="/courses">Course</Link>

  //for desktop
  // <Link style={{textDecoration:'none',color:'white',fontSize:'20px',fontWeight:'400'}} to='/courses'>Course</Link> {/* Navigate to course section in home */}




  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"))


  const [anchorEl, setAnchorEl] = React.useState(false);
  const openMenuTable = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
   const handleMenuClose=()=>{
    setAnchorEl(!anchorEl)
   }

   const handleNavigation = (path) => () => {
    navigate(path);
    setOpenMenu(false);
    setAnchorEl(false);
  };
  



  return (
    <>
      {isMobileView && (
        <AppBar sx={{ position: 'fixed', backgroundColor: '#212529', boxShadow: 'none', height: '100px' }}>
          <Toolbar sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '100px', width: '100%' }}>
            <Drawer
              anchor="top"
              open={openMenu}
              onClose={handleClose}
              sx={{ width: '50vw', "& .MuiPaper-root": { width: '100vw',height:'450px' } }} // Set width to full viewport width
            >
              <Box sx={{ display: 'flex', justifyContent: 'flex-end',backgroundColor:'#212529' }}>
                <IconButton onClick={handleClose} sx={{ color: 'white',fontSize:'30px', }}>
                  <CloseIcon  sx={{fontSize:'40px',fontWeight:'600',marginTop:'4px'}}/> {/* Assume CloseIcon is imported */}
                </IconButton>
              </Box>

              <List
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center', // Center items vertically
                 // Center items horizontally
                  height: '55vh', // Set height to full viewport height
                  backgroundColor: '#212529',
                  padding: '0', // Remove default padding
                }}
              >

                <Link onClick={handleClose} style={{  fontSize: '25px',textDecoration:'none',color:'white' }} to="/">Home</Link>
                <Divider orientation='horizontal' sx={{width:'50%',color:'orange',height:'3px',border:'1px solid white',marginBottom: '10px',}}/>

                <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <Link
              id="basic-button"
              variant='text'
              sx={{color:'white',textTransform:'none'}}
              aria-controls={openMenuTable ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMenuTable ? 'true' : undefined}
              onClick={handleClick}
              style={{  fontSize: '25px',textDecoration:'none',color:'white' }}
            >
              Resources
              <ExpandMoreIcon sx={{color:'white'}}/>
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
          <MenuItem onClick={handleNavigation('/ncert')}  sx={{fontSize:'15px'}} >Ncert Notes
          
          </MenuItem>
           
          
          </Typography>
          <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
            backgroundColor: 'orangered' // Change the background color on hover
          },}}>
          <MenuItem onClick={handleNavigation("/syllabus")} sx={{fontSize:'15px'}}>Syllabus</MenuItem>
          </Typography>
          <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
            backgroundColor: 'orangered'// Change the background color on hover
          },}}>
          <MenuItem sx={{fontSize:'15px'}} onClick={handleNavigation('/pyqs')}>PYQs</MenuItem>
          </Typography>
          <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
            backgroundColor:'orangered'// Change the background color on hover
          },}}>
          <MenuItem sx={{fontSize:'15px'}} onClick={handleNavigation('/general')}>General Studies</MenuItem>
          </Typography>
          <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
            backgroundColor:'orangered' // Change the background color on hover
          },}}>
          <MenuItem sx={{fontSize:'15px'}} onClick={handleNavigation('/optional')}>Optional</MenuItem>
          </Typography>          
          <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
            backgroundColor: 'orangered', // Change the background color on hover
          },}}>
          <MenuItem sx={{fontSize:'15px'}} onClick={handleNavigation('/newsnotes')}>Newspaper Notes</MenuItem>     
          </Typography>
          </Box>
        </Menu>
          </div> 
          <Divider orientation='horizontal' sx={{width:'50%',color:'white',height:'3px',border:'1px solid white',marginBottom: '10px',}}/>
          <Link onClick={handleClose} style={{  fontSize: '25px',textDecoration:'none',color:'white' }} to="/books">Our Books</Link>   
          <Divider orientation='horizontal' sx={{width:'50%',color:'white',height:'3px',border:'1px solid white',marginBottom: '10px',}}/>
          <Link onClick={handleClose} style={{  fontSize: '25px',textDecoration:'none',color:'white' }} to="/videos">Videos</Link>         
          <Divider orientation='horizontal' sx={{width:'50%',color:'white',height:'3px',border:'1px solid white',marginBottom: '10px',}}/>

                  <Link onClick={handleClose} style={{  fontSize: '25px',textDecoration:'none',color:'white' }} to="/about">About</Link>
                  <Divider orientation='horizontal' sx={{width:'50%',color:'white',height:'3px',border:'1px solid white',marginBottom: '10px',}}/>

                <Link onClick={handleClose} style={{  fontSize: '25px',textDecoration:'none',color:'white' }} to="/contact">Contact</Link>

                {/* Add more menu items as needed */}
              </List>
            </Drawer>
            


            <img
              style={{ cursor: 'pointer' }}
              onClick={() => { navigate("/") }}
              width={isMobileView ? "60px" : "70px"}

              src="/assets/shashank.webp"
              alt='logo'
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

              <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', marginTop: '10px' }}>
                <Typography sx={{ fontWeight: '700', fontSize: '14px' }}>SHASHANK SAJWAN</Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', fontSize: '10px' }} variant='h6'>Your Vision, My Direction</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '11px', marginTop: '10px' }}>
                <Link to="https://youtube.com/@ShashankSajwan?si=wmlMFjuWQhsZmCGS" target="_blank">
                <YouTubeIcon sx={{color:'#FF0000'}} />
              </Link>
              <Link to="https://www.instagram.com/iasips_mentor?igsh=Mjk1bGNraGttNW5i" target="_blank">
               <InstagramIcon sx={{color:'#DD2A7B'}}/>
             </Link>
             <Link to="https://t.me/iasips_mentor" target="_blank">
              <TelegramIcon sx={{color:'#0088cc'}}/>
             </Link>
            <Link to="https://twitter.com/iasips_mentor" target="_blank">
              <XIcon sx={{width:'19px',color:'white'}}/>
           </Link>
            
                </Box>
              </Box>
            </Box>


            <Box>
              <Box sx={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '10px', cursor: 'pointer', marginTop: '15px' }}>
                  <WhatsAppIcon onClick={handleWhatsapp} sx={{ color: 'lightgreen', fontWeight: '700', fontSize: '20px' }} />
                  <img onClick={handleEmail} style={{ width: '20px' }} src="/assets/gmail.webp" alt='gmail' />
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
              <img onClick={() => { navigate("/") }} style={{ width: '99px', contain: 'cover' }} src="/assets/shashank.webp" alt='logo' />
              <Box sx={{ display: 'flex', flexDirection: "column" }}>
                <Typography sx={{ fontWeight: '700', fontSize: isTabletView ? "20px" : "20px" }}>SHASHANK SAJWAN</Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', fontSize: '15px' }} variant='h6'>Your Vision, My Direction</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '11px', marginTop: '5px' }}>
                  <Link to="https://youtube.com/@ShashankSajwan?si=wmlMFjuWQhsZmCGS" target="_blank">
                     <YouTubeIcon sx={{color:'#FF0000'}} />
                   </Link>
                   <Link to="https://www.instagram.com/iasips_mentor?igsh=Mjk1bGNraGttNW5i" target="_blank">
                    <InstagramIcon sx={{color:'#DD2A7B'}}/>
                  </Link>
                  <Link to="https://t.me/iasips_mentor" target="_blank">
                   <TelegramIcon sx={{color:'#0088cc'}}/>
                  </Link>
                 <Link to="https://twitter.com/iasips_mentor" target="_blank">
                   <XIcon sx={{width:'19px',color:'white'}}/>
                </Link>
                 
                </Box>
              </Box>
            </Box>
            <Box sx={{ marginTop: '30px' }}>
              <Stack direction="row" sx={{ display: 'flex', color: 'black', marginTop: '25px', marginRight: '25px', gap: '20px' }}>

                <Link style={{textDecoration:'none',color:'white',fontSize:'20px',fontWeight:'400'}} to='/'>Home</Link>
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
                    style={{textDecoration:'none',color:'white',fontSize:'20px',fontWeight:'400'}}
                  >
                    Resources

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
                <MenuItem  onClick={handleNavigation('/ncert')} sx={{fontSize:'15px',}} >NCERT Notes
                
                </MenuItem>
                 
                
                </Typography>
                <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
                  backgroundColor: 'orangered' // Change the background color on hover
                },}}>
                <MenuItem onClick={handleNavigation('/syllabus')} sx={{fontSize:'15px'}}>Syllabus</MenuItem>
                </Typography>
                <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
                  backgroundColor: 'orangered'// Change the background color on hover
                },}}>
                <MenuItem sx={{fontSize:'15px'}} onClick={handleNavigation('/pyqs')}>PYQs</MenuItem>
                </Typography>
                <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
                  backgroundColor:'orangered'// Change the background color on hover
                },}}>
                <MenuItem sx={{fontSize:'15px'}} onClick={handleNavigation('/general')}>General Studies</MenuItem>
                </Typography>
                <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
                  backgroundColor:'orangered' // Change the background color on hover
                },}}>
                <MenuItem sx={{fontSize:'15px'}} onClick={handleNavigation('/optional')}>Optional</MenuItem>
                </Typography>          
                <Typography sx={{textTransform:'none',margin:"1px",color:'white',  '&:hover': {
                  backgroundColor: 'orangered', // Change the background color on hover
                },}}>
                <MenuItem sx={{fontSize:'15px'}} onClick={handleNavigation('/newsnotes')}>Newspaper Notes</MenuItem>
            
                </Typography>
                </Box>
              </Menu>
              </div>
                  )
                }
               
                <Link style={{textDecoration:'none',color:'white',fontSize:'20px',fontWeight:'400'}} to='/books'>Our Books</Link> {/* Navigate to course section in home */}
                <Link style={{textDecoration:'none',color:'white',fontSize:'20px',fontWeight:'400'}} to='/videos'>Videos</Link> {/* Navigattoe to course section in home */}
                <Link style={{textDecoration:'none',color:'white',fontSize:'20px',fontWeight:'400'}} to='/about'>About</Link>

                <Link style={{textDecoration:'none',color:'white',fontSize:'20px',fontWeight:'400'}} to='/contact'>Contact</Link>
              </Stack>
            </Box>
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Box onClick={handleWhatsapp} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', marginRight: '55px', gap: '10px', cursor: 'pointer' }}>
                <WhatsAppIcon sx={{ color: 'lightgreen', fontWeight: '700' }} />
                <Typography sx={{ color: 'white', fontSize: "15px" }}>+91 7060748896</Typography>
              </Box>
              <Box onClick={handleEmail} sx={{ display: 'flex', flexDirection: 'row', gap: '12px', marginTop: '5px', cursor: 'pointer' }}>
                <img style={{ width: '18px' }} src="/assets/gmail.webp" alt='logo'/>
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




