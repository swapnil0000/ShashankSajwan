import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import author  from "../../assets/author.webp"
import "./authorstyle.css"
import Icon from '../../components/Icon/Icon'
const Author = () => {
   const theme=useTheme();
   const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Container sx={{marginTop:'40px'}}>
       <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:isMobileView?"center":"null",justifyContent:'center'}}>

         <img style={{width:'250px',height:'250px',borderRadius:'50%',marginRight:'20px',display:'flex'}} src={author} alt='Shashank Sajwan'/>

         <Box sx={{display:'flex',alignItems:'center',flexDirection:'column',marginTop:'10px'}}>

         <Typography sx={{marginTop:'20px',fontSize:isMobileView?"15px":"15px",alignItems:'center'}} > 
         UPSC is a marathon so be patient and be consistent. My biggest mistake was
         not being consistent.<Box sx={{display:'inline',color:'#00022e',fontWeight:'600'}}> "Thoda thoda padho but daily padho"</Box>. Don't take a big jump,
         just take smaller steps and move ahead. And most important thing never take big gaps and always be in touch with studies be it online, offline or just reading newspaper.
         At times we don't like studying, in that case you can either watch quick revision
         videos on Youtube or simply just revise your notes. <Box sx={{display:'inline',color:'#00022e',fontWeight:'600'}}>
         "THE MOMENT YOU GET INTO THE COMFORT ZONE, YOU WILL LOSE GRIP OF YOUR PREPARATION AND IT CAN COST YOU ONE WHOLE YEAR"
         </Box> (telling based on my personal experience). One small mistake
         can really throw you out of the competition. Just make a plan, follow it and time to
         time update it as per your need. Don't follow others blindly, listen to everyone and
         add things as per requirement. Believe in yourself and you will definitely achieve it.
         ALL THE VERY BEST :)
         </Typography> 
         <Button sx={{  marginTop:'30px'}} variant='contained'>Read More</Button>
          <Icon/>
         </Box>
       </Box>
    </Container>
  )
}

export default Author