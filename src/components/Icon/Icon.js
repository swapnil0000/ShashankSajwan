import React from 'react'
import "../Icon/icons.css"
import { Box, useMediaQuery, useTheme } from '@mui/material'
const Icon = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  const handleEmail = () => {
    const recipientEmail = 'swapnilsrivastava1999@gmail.com';
    const mailtoUrl = `mailto:${recipientEmail}`;
    window.open(mailtoUrl, '_blank');
  };
  return (
    <Box>
    <ul style={{marginLeft:isMobileView?"20px":"",display:'flex',flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:'100%'}}>
    <li>
    <a  href="https://youtube.com/@ShashankSajwan?si=wmlMFjuWQhsZmCGS"  target="_blank">
      <i class="fab fa-youtube icon"></i>
    </a>
  </li>
  <li>
      <a  onClick={handleEmail} target='_blank'><i class="fab fa-google-plus-g icon"></i></a>
    </li>
    <li>
    <a  href="https://t.me/iasips_mentor" target='_blank'>
      <i class="fab fa-telegram icon"></i>
    </a>
  </li>
    <li>
    <a  href="https://www.instagram.com/iasips_mentor?igsh=Mjk1bGNraGttNW5i" target='_blank'>
    <i class="fab fa-instagram icon"></i>
  </a>
    </li>
  </ul>
  </Box>
  )
}

export default Icon