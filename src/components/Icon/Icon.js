import React from 'react'
import "../Icon/icons.css"
import { Box } from '@mui/material'
const Icon = () => {
  return (
    <Box >
    <ul>
    <li>
    <a href="https://youtube.com/@ShashankSajwan?si=wmlMFjuWQhsZmCGS"  target="_blank">
      <i class="fab fa-youtube icon"></i>
    </a>
  </li>
  <li>
      <a href="ask.iasmentor@gmail.com" target='_blank'><i class="fab fa-google-plus-g icon"></i></a>
    </li>
    <li>
    <a href="https://t.me/iasips_mentor" target='_blank'>
      <i class="fab fa-telegram icon"></i>
    </a>
  </li>
    <li>
    <a href="https://www.instagram.com/iasips_mentor?igsh=Mjk1bGNraGttNW5i" target='_blank'>
    <i class="fab fa-instagram icon"></i>
  </a>
    </li>
  </ul>
  </Box>
  )
}

export default Icon