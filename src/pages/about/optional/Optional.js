import { Box, Container, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import optional from "../optional/optionals.webp"


const data=[
  {
    id:1,
    img:optional
  },
]

const Optional = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box>
    <Container sx={{marginTop:'120px'}}>
     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
     <Grid container>
     {data.map(item => (
       <Grid key={item.id} item xs={12} sm={6} md={6} lg={3}>
      
         <Paper sx={{ width: 250, height: 140, display: 'flex', flexDirection: 'column', margin: '5px', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
           <a href={item.link} target="_blank" rel="noopener noreferrer">
           <img  style={{ width: '100%', backgroundColor: 'transparent' }} src={item.img} alt={`Image ${item.id}`}/>
           </a>
         </Paper>
       </Grid>
     ))}
   </Grid>
     </Box>
    </Container>
    </Box>
  )
}

export default Optional