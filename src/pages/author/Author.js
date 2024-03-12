import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import author  from "../../assets/author.webp"
import "./authorstyle.css"
import Icon from '../../components/Icon/Icon'
const Author = () => {

  return (
    <Container>
      <Box sx={{  display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
       <Box sx={{display:'flex',flexDirection:'row'}}>
         <img style={{width:'300px',height:'300px',borderRadius:'50%',margin:'20px'}} src={author} alt='Shashank Sajwan'/>
         <Box sx={{display:'flex',flexDirection:'column',marginTop:'10px'}}>
         <Typography sx={{marginTop:'20px'}} variant='h6'> 
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
         <Button sx={{backgroundColor:'#00022e',marginTop:'30px'}} variant='contained'>Read More</Button>
          <Icon/>
         </Box>
       </Box>
      </Box>
    </Container>
  )
}

export default Author