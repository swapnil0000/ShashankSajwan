import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const General = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box>
    <Container sx={{marginTop:'120px'}}>
     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
      <Typography sx={{fontSize:isMobileView?"40px":"70px",fontFamily:'700',marginBottom:'560px'}} >
       Coming Soon....
      </Typography>
     </Box>
    </Container>
    </Box>
  )
}

export default General