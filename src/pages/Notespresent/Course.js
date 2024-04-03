
import noteslogo from "../Notespresent/NOTESLOGO.jpg"
import newslogo from "../Notespresent/newsnotes.jpg"
import pyqslogo from "../Notespresent/pyqnotes.jpg"
import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import "../Notespresent/notesStyle.css"
const Course = () => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',marginTop:'50px'}}>
    <Typography sx={{fontWeight:'700',fontSize:isMobileView?"25px":"40px",marginBottom:'10px'}}>NOTES PROVIDED</Typography>
    <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'center',width:'100%'}}>
    <div style={{display:'flex',flexDirection:isMobileView?"column":"row",alignItems:'center',justifyContent:'center',gap:'10px'}} class="wrapper">
    <div style={{}} class="card">
    <img style={{width:'100%'}} src={noteslogo}/>

          <div class="info">
            <h1 >Ncert Notes</h1>
            <button>Open</button>
        </div>
    </div>

    <div style={{ }} className="card">
    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={pyqslogo} alt="PYQ's Notes" />
    <div className="info">
        <h1>PYQ's Notes</h1>
        <button>Open</button>
    </div>
</div>


    <div style={{}}  class="card">
    <img style={{width:'100%',objectFit:'cover',height:'100%'}} src={newslogo}/>
    <div class="info">
            <h1>NewsPaper Notes</h1>
            <button>Open</button>
        </div>
    </div>
</div>
</Box>
   
    </Container>
  )
}

export default Course