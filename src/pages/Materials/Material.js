import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import ncert from "../Materials/ncert.jpg"
const Material = () => {
  return (
    <Container>
     <Box sx={{display:'flex',flexDirection:'column',width:'100%',height:'800px',marginTop:'140px'}}>

      <Box>
      <Typography sx={{fontSize:'40px',fontWeight:'700'}}>
      Material Provided
     </Typography>
     <Typography sx={{fontSize:'20px',fontWeight:'400',marginTop:'30px'}}>
        Unlock the Power of Knowledge: Explore Our Current Affairs, Toppers' Insights, Quick Revision, Smart Quizzes, and Infographics and more!
     </Typography>
      </Box>
     
      <Box>
      <Box
      sx={{

        padding:'40px',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:'row',
        alignItems:'center',
        margin:'20px',
        justifyContent:'space-around',
        '& > :not(style)': {
          m: 1,
          width: 180,
          height: 180,
        },
      }}
    >
      <Paper sx={{display:'flex',flexDirection:'column',alignItems:'center',transition: 'transform 0.3s', // Add transition for smooth effect
                            '&:hover': {
                                transform: 'scale(1.1)', // Apply zoom effect on hover
                            },}} elevation= {1}>
      <img style={{width:'50px'}} src={ncert}/>
      <Typography sx={{fontWeight:'600',fontSize:'15px'}}>NCERT NOTES</Typography>
      <Typography sx={{fontSize:'13px',marginTop:'10px',textAlign:'center'}}>Summarized notes based on NCERT textbooks, often used as foundational material.</Typography>
      </Paper>
      <Paper sx={{display:'flex',flexDirection:'column',alignItems:'center',transition: 'transform 0.3s', // Add transition for smooth effect
                            '&:hover': {
                                transform: 'scale(1.1)', // Apply zoom effect on hover
                            }}} elevation= {1} >
      <img style={{width:'50px'}} src={ncert}/>
      <Typography sx={{fontWeight:'600',fontSize:'15px'}}>PYQ NOTES</Typography>
      <Typography sx={{fontSize:'13px',marginTop:'10px',textAlign:'center'}}>Notes based on previous years' question papers (PYQs), useful for understanding exam patterns and topics.</Typography>
      </Paper>
      <Paper sx={{display:'flex',flexDirection:'column',alignItems:'center',transition: 'transform 0.3s', // Add transition for smooth effect
                            '&:hover': {
                                transform: 'scale(1.1)', // Apply zoom effect on hover
                            }}} elevation= {1} >
      <img style={{width:'50px'}} src={ncert}/>
      <Typography sx={{fontWeight:'600',fontSize:'15px'}}>MONTHLY MAGAZINE</Typography>
      <Typography sx={{fontSize:'13px',marginTop:'10px',textAlign:'center'}}>Periodical publications covering current affairs and important events relevant to the exam.</Typography>
      </Paper>
      <Paper sx={{display:'flex',flexDirection:'column',alignItems:'center',transition: 'transform 0.3s', // Add transition for smooth effect
                            '&:hover': {
                                transform: 'scale(1.1)', // Apply zoom effect on hover
                            }}} elevation= {1} >
      <img style={{width:'50px'}} src={ncert}/>
      <Typography sx={{fontWeight:'600',fontSize:'15px'}}>NEWSPAPER NOTES</Typography>
      <Typography sx={{fontSize:'13px',marginTop:'10px',textAlign:'center'}}> Condensed summaries or analyses of newspaper articles, aiding in current affairs preparation.</Typography>
      </Paper>
      <Paper sx={{display:'flex',flexDirection:'column',alignItems:'center',transition: 'transform 0.3s', // Add transition for smooth effect
                            '&:hover': {
                                transform: 'scale(1.1)', // Apply zoom effect on hover
                            }}} elevation= {1} >
      <img style={{width:'50px'}} src={ncert}/>
      <Typography sx={{fontWeight:'600',fontSize:'15px'}}>TEST ( COMING SOON )</Typography>
      <Typography sx={{fontSize:'13px',marginTop:'10px',textAlign:'center'}}>Announcement of upcoming mock tests or practice exams for aspirants.</Typography>
      </Paper>
    </Box>
      </Box>
     
       
     </Box> 
    </Container>
  )
}

export default Material