import { Box, Card, CardContent, CardMedia, Container, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import modern from "../Choose/modern.png";
import study from "../Choose/study.png";
import trackrecord from "../Choose/trackrecord.png";
import experience from "../Choose/experience.png";
import  { useEffect, useRef } from 'react';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import dct from "../Choose/dct.png"
import ffp from "../Choose/ffp.png"
import pt from "../Choose/pt.png"
import tma from "../Choose/tma.png"
import wmp from "../Choose/wmp.png"
import wtp from "../Choose/wtp.png"
import gsap from 'gsap';
const Choose = () => 
{
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  const isSmallMobileView=useMediaQuery(theme.breakpoints.down("sm"));

 


  const choosedata = [
    {
      id: 1,
      img: dct,
      title: 'Direct Contact With Sir',
      value: 'Shashank Sajwan Sir offers direct support for UPSC prep, handling queries from prelims to interviews.',
      value1:"Guidance is provided via WhatsApp and calls, ensuring comprehensive assistance.",
      value2:"Students receive thorough help throughout their UPSC journey under his mentorship."
    },
    {
      id: 2,
      img: wtp,
      title: 'We Track Your Progress',
      value: "After we provide weekly targets aspirants are requested to send their weekly report to sir.",
      value1:"Our dedicated team will closely monitor your UPSC journey, providing guidance through tests, live classes, module assessments, and personalized calls.",
      value2:"We're committed to supporting your progress every step of the way."
    },
    {
      id: 3,
      img: wmp,
      title: 'Weekly Micro Targets ',
      value: "In India, we've launched a pioneering initiative emphasizing weekly targets.",
      value1:"Through a meticulously crafted module, micro weekly goals are allocated, fostering better assessment and preparation.",
      value2:"This approach aims to enhance your readiness through structured milestones, ensuring progress and efficacy."
    },
    {
      id: 4,
      img: tma,
      title: 'Test Marks Assessment',
      value:"Weekly test marks submission assessment ensures continuous progress tracking, optimizing your learning journey.",
      value1:'Aspirants send their weekly test scores directly to sir for regular feedback of their performance.',
      value2:'These regular evaluations offer invaluable insights, guiding you towards improvement and success.'
    },
    {
      id: 5,
      img: pt,
      title: ' Personal Touch Remains',
      value: "The key highlight of this program is its personal connection with Shashank Saiwan sir.",
      value1:'Even after the course concludes, the personal touch continues.',
      value2:"Access to his guidance remains available, ensuring ongoing support and mentorship for an extended period."
    },
      {
        id: 6,
        img: ffp,
        title: 'Full-Fledged Preparation',
        value: "Introducing a pioneering platform for CSE Aspirants, providing comprehensive preparation with meticulous guidance.",
        value1:'Our innovative initiative covers GS, CSAT, Current Affairs, Syllabus Understanding, PYQ Analysis, Weekly Tests, Answer writing, and exhaustive lectures & notes.',
        value2:'Its a holistic solution empowering aspirants with the tools to excel.'
      },
  ];


  return (
    <Container >
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        justifyContent: 'space-evenly',
        width: '100%',
      }}
    >
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',marginTop:isMobileView?"15px":"10px"}}>
        <Typography sx={{fontSize:isMobileView?"25px":"40px",fontWeight:'700'}}>OUR UNIQUE FEATURES</Typography>
      </Box>
    </Box>
    <Grid sx={{display:'flex',flexDirection:'row', width:'100%',marginTop:'15px'}} container spacing={1}>
      {
        choosedata.map((ele) => (
          <Grid    item lg={4} md={6} sm={6} xs={12} key={ele.id}>
            <Box
              sx={{
                display: 'flex',
                height:{md:'250px',sm:'290px',xs:'270px',lg:'300px'},
                flexDirection: 'row',
               
                boxShadow: '5px rgba(110, 159, 182, 0.5)',
                borderRadius:'4px',
                '& > :not(style)': {
                  width: '100%',
                  maxWidth: "500px", // Max width for lg and md breakpoints
                },transition: 'transform 0.2s', // Add transition for smooth effect
                  '&:hover': {
                  transform:'scale(1.01)',
                   // Apply zoom effect on hover
              }}}
            >
              <Paper sx={{ display: 'flex', flexDirection: 'column',width:'40px'
             }} elevation={3}>
             <Typography sx={{fontSize:{lg:'21px',md:'20px',sm:'19px'},display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'600',marginTop:'10px'}} >{ele.title}</Typography>

                <Box sx={{display:"flex",flexDirection:'row',height:'200px'}}>
                <img style={{ width: '100px',height:'100px',marginRight:'10px',margin:'10px'}} src={ele.img} alt={ele.title} />

                <Box sx={{marginTop:'5px'}}>
                 <ul  style={{display:'flex',flexDirection:'column'}} >
                  <li style={{listStyle:'circle',fontSize:isMobileView?"11px":"13px",fontFamily:'roboto'}}>{ele.value}</li>
                  <li style={{listStyle:'circle',fontSize:isMobileView?"11px":"13px",fontFamily:'roboto'}}>{ele.value1}</li>
                  <li style={{listStyle:'circle',fontSize:isMobileView?"11px":"13px",fontFamily:'roboto'}}>{ele.value2}</li>

                 </ul>
                </Box>
              
                </Box>
              </Paper>
            </Box>
          </Grid>
        ))
      }
    </Grid>
  </Container>
  
  );
}

export default Choose;


// <Card sx={{ maxWidth: 370 }}>
// <CardMedia
//   component="img"
//   sx={{ objectFit: 'cover', height: '150px' }} // Specify object-fit and height
//   src={ele.img}
//   alt={ele.title}
// />
// <CardContent>
//   <Typography gutterBottom variant="h5" component="div">
//     {ele.title}
//   </Typography>
//   <Typography variant="body2" color="text.secondary">
//     {ele.value}
//   </Typography>
// </CardContent>
// </Card>