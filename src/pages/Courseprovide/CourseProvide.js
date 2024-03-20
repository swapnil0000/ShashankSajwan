import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, useTheme, useMediaQuery, Divider } from '@mui/material';
import React, { useState } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import course1 from "../Courseprovide/course1.png"
import course2 from "../Courseprovide/course2.png"
import  { useEffect, useRef } from 'react';
import general from "../Courseprovide/general.jpg"
import DateRangeIcon from '@mui/icons-material/DateRange';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import gsap from 'gsap';
const CourseProvide = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateIn();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const animateIn = () => {
    gsap.to(cardRef.current, {
      y: '-50px',
      opacity: 1,
      duration: .5,
      ease: 'power4.out',
    });
  };
  const data = [
    {
      id: 1,
      title: 'IAS Weekend Batches ',
      description: 'Our IAS Weekend batches are specifically for working professionals, who want to attend Weekly Classes for UPSC preparation in Delhi',
      imageUrl:course1,
    },
    // {
    //   id: 2,
    //   title: 'UPSC-IAS Classroom / Online Live Classes',
    //   description: ' We offer IAS Classroom Courses (Regular Batches) & Live Online Classes for UPSC General Studies and Mains Optional subjects (Prelims and Mains) at Delhi to prepare students for civil services examination',
    //   imageUrl: course2,
    // },
    // {
    //   id: 3,
    //   title: 'UPSC Correspondence Course',
    //   description: 'We provide UPSC Correspondence Course (Postal Course) to Get access of our finest UPSC Study materials deliver at your doorstep.',
    //   imageUrl: course1,
    // },
    // {
    //   id: 4,
    //   title: 'UPSC Test Series',
    //   description: ' Join test series for UPSC prelims and Mains along with free mock tests to Boost your exam preparation and score well.',
    //   imageUrl: course1,
    // },
  ];

 
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile=useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}} ref={cardRef}>
      <Typography  id="course"  sx={{fontWeight:'700',fontSize:isSmallMobile?"25px":"40px"}} align="center" gutterBottom>
        COURSES PROVIDED
      </Typography>
      <Box  sx={{width:'90%',height:'auto',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',borderRadius:'20px'}}>
       <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",justifyContent:'space-between'}}>
       {
         
        isMobileView &&        <img style={{width:!isMobileView?"23%":"auto",height:'20%',borderRadius:'13px'}} src={general} alt='generla'/>         
       }


       <Box>
       <Typography sx={{margin:'10px',fontSize:'25px',fontWeight:'600'}}>UPSC Full-Fledged Preparation</Typography>
       <Typography sx={{margin:'8px',marginTop:'40px'}} variant='h5'>In this program, you will get Full-Fledged Preparation including with proper mentorship and guidance with all the materials.</Typography>

       <Box sx={{display:'flex',flexDirection:isSmallMobile?"column":'row',justifyContent:'space-between'}}>
          <Box sx={{margin:'10px',display:'flex',flexDirection:'column',fontSize:'15px'}}>
            <Typography sx={{display:'flex',margin:'10px',gap:'5px',fontSize:isMobileView?"15px":'20px',fontSize:'17px'}}>
              <DateRangeIcon/>
               2 Years Access
            </Typography>
            <Typography sx={{display:'flex',margin:'10px',gap:'5px',fontSize:isMobileView?"15px":'20px',fontSize:'17px'}}>           
             <AdminPanelSettingsIcon/>
              Proper Mentorship/Guidance
            </Typography>
            <Typography sx={{display:'flex',margin:'10px',gap:'5px',fontSize:isMobileView?"15px":'20px',fontSize:'17px'}}>       
               <MenuBookIcon/>
               Full Course Completion 
        </Typography>
          </Box>

          <Box  sx={{margin:'10px',display:'flex',flexDirection:'column'}}>
          <Typography sx={{display:'flex',margin:'10px',gap:'5px',fontSize:isMobileView?"15px":'20px',fontSize:'17px'}}>              <GTranslateIcon/>
              English Medium
            </Typography>
            <Typography sx={{display:'flex',margin:'10px',gap:'5px',fontSize:isMobileView?"15px":'20px',fontSize:'17px'}}>            <SpeakerNotesIcon/>
              All Micro-Topics covered with lectures and notes
           </Typography>
           <Typography sx={{display:'flex',margin:'10px',gap:'5px',fontSize:isMobileView?"15px":'20px',fontSize:'17px'}}>            <LiveTvIcon/>
            Live Interaction/Doubt Sessions
         </Typography>
          </Box>
          
      </Box>
       </Box>  
       {
          !isMobileView && <img style={{width:!isMobileView?"25%":"auto",height:'25%',borderRadius:'13px'}} src={general} alt='generla'/>
       }

       </Box>


      <Box sx={{display:'flex',flexDirection:'column',width:'100%',alignItems:'center',justifyContent:'center'}} >
      <Divider sx={{width:'95%',marginTop:'20px',border:'0.5px solid black'}}/>
       <Box sx={{marginTop:'10px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',width:'100%'}}>
     
       
        </Box>
        <Button sx={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#f0750f',color:'whitesmoke',marginBottom:'11px'}} variant='contained'>ENROLL Now</Button>
      </Box>
      </Box>
    </Container>
  );
};

export default CourseProvide;
// <Button
// onClick={handlePrev}
// startIcon={<ArrowBack />}
// sx={{ marginRight: 1,backgroundColor:"#212529" ,color:'white' , margin:'10px' ,  width: { xs: '120px', sm: '150px', md: '170px', lg:'200px'}}}
// >
// Previous
// </Button>
// <Button
// disableElevation
// disableRipple
// disableTouchRipple
// sx={{backgroundColor:'#212529' ,color:'white' , '&:hover': {
// }, margin:'10px' ,  width: { xs: '120px', sm: '150px', md: '170px', lg:'200px'}}}
// onClick={handleNext}
// endIcon={<ArrowForward />}
// >
// Next
// </Button>
// {data.slice(startIndex, startIndex + cardsPerPage).map(card => (
//   <Grid key={card.id} item xs={12} sm={12} md={12} lg={12}>
//     <Card sx={{height:'550px'}}>
//       <CardMedia
//         component="img"
//         height="440"
//         image={card.imageUrl}
//         alt={card.title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {card.title}
//         </Typography>
//         <Typography fontSize='13px' >
//           {card.description}
//         </Typography>
//       </CardContent>
//     </Card>
//   </Grid>
// // ))}