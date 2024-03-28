import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Optional = () => {
  return (
    <Box>
    <Container sx={{marginTop:'120px'}}>
     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',height:'500px'}}>
      <Typography sx={{fontSize:'100px',fontFamily:'700'}} >
       Coming Soon....
      </Typography>
     </Box>
    </Container>
    </Box>
  )
}

export default Optional