import React from 'react'
import img from "../carrer/Frame.png"
import { Box, Container, useMediaQuery, useTheme } from '@mui/material'
const Career = () => {
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box >
     <img style={{width:isMobileView?"100%":"100%"   ,height:'400px'}} sty src={img}/>
    </Box>
  )
}

export default Career