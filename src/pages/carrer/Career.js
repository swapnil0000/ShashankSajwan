import React from 'react'
import img from "../carrer/carrer.jpg"
import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
const Career = () => {
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box >
     <img style={{width:isMobileView?"100%":"100%"   ,height:'500px'}} sty src={img}/>
    </Box>
  )
}

export default Career