import { Box, Button, Container, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import content from "../Careers/content.webp"
const Careers = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container> 
     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:"center"}}>
      <Typography sx={{fontWeight:'700',fontSize:isMobileView?"25px":"40px"}}>CAREER WITH US</Typography>
        <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'space-around',width:'100%',backgroundColor:"#c1bfe7",padding:'30px',marginTop:'30px',borderRadius:'20px'}}>
         
        <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            width: 258,
            height: 238,
          },
        }}
      >
        <Paper sx={{display:'flex',flexDirection:'column',alignItems:'center',borderRadius:'10px'}} elevation={2} >
          <img style={{width:'130px'}} src={content}/>
          <Typography variant='h4'>Content writing</Typography>
        <Typography sx={{display:'flex',alignItems:"center",justifyContent:'center',margin:'5px',textAlign:'center'}} variant='h6'>Develop exceptional content through progressive pedagogy to bring powerful learning journeys .</Typography>
        </Paper>
      </Box>

        <Box sx={{display:'flex',flexDirection:'column'}}>
        <Typography sx={{fontSize:'30px',fontWeight:'500',marginBottom:'10px'}}>Let`s build the future of education together</Typography>
        <Typography>Come, join us and together we can transform the way India learns.
        </Typography>
        <Button variant='contained' sx={{marginTop:'50px'}}>Apply Now</Button>
        </Box>
        
        
        
        </Box>

      </Box>
    </Container>
  )
}

export default Careers