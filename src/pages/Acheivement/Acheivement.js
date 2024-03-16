// import React, { useState, useEffect } from 'react';
// import { Container } from '@mui/material';
// import ReactPlayer from 'react-player';
// import video from '../Acheivement/joshtalk.mp4';
import "../Acheivement/style.css";

// const Achievement = () => {
//   const [showVideo, setShowVideo] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const videoContainer = document.querySelector('.popout-video');
//       const videoHeight = videoContainer.offsetHeight;

//       if (window.scrollY > videoHeight) {
//         setShowVideo(true);
//       } else {
//         setShowVideo(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <Container>
//       <div className="intro">
//         <div className={`popout-video${showVideo ? ' popout-video--popout' : ''}`}>
//           <ReactPlayer
//             url={video}
//             playing={showVideo}
//             controls
//             width="100%"
//             height="auto"
//             muted
//             loop
//           />
//           <div className="popout-video__controls">
//             <div className="close-video"></div>
//           </div>
//         </div>
//       </div>

//       <div className="content">
//         <span>scroll down</span>
//         <h1>Lorem ipsum</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, et. Et deserunt debitis sequi. Consectetur, saepe omnis! Minus quam magni error sapiente, ipsam laboriosam expedita omnis cum ducimus, recusandae amet!
//         </p>
//         {/* Other content */}
//       </div>
//     </Container>
//   );
// };

// export default Achievement;

import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Box, Container, Divider, Typography, useMediaQuery, useTheme } from '@mui/material';
import "../../components/Icon/icons.css"
import DoneIcon from '@mui/icons-material/Done';

const Acheivement = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  const isTabletView=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container>
      <Box sx={{ width: '100%', margin: '0 auto', marginBottom: '100px',marginTop:'10px',display:'flex',alignItems:'center' ,flexDirection:"column" }}>
        <Typography sx={{fontSize:{lg:'40px',md:'35px',sm:'25px',xs:'22px',fontWeight:'700'},}} align="center" gutterBottom>
          WE AT JOSH TALKS
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobileView ? 'column' : 'row',
            justifyContent: 'space-between', 
            alignItems:'center'
          }}
        >
          <Box sx={{ width: isMobileView ? '100%' : '50%', marginBottom: isMobileView ? '20px' : 'null' }}>
            <ReactPlayer
              url="https://youtu.be/2h3V2g58Whg?si=7HLu17W0pangSE5a"
              width="100%"
              style={{ marginTop:'25px',alignItems:'center',overflow:'hidden',borderRadius:'20px'}}
              height={isTabletView ? '200px' : '330px'}
            />
          </Box>
          <Box variant="h6"
          sx={{
            width: isMobileView ? '100%' : 'calc(40% - 20px)',
            marginTop: '20px',
            marginLeft: isMobileView ? '0' : '20px',
            animation:'fadeInUp 0.5s ease-out forwards',
            fontSize:{sm:'13px',md:'20px'} // Animation for mobile view
          }}>
          <Typography sx={{display:'flex',flexDirection:'row',gap:'5px',marginBottom:'10px'}}>
          <DoneIcon/>
        Shashank Sajwan's speech on Josh Talks YouTube tackles UPSC aspirants' trials.
        </Typography>

        <Typography sx={{display:'flex',flexDirection:'row',marginBottom:'10px',gap:'5px'}}> 
        <DoneIcon />  
                The most-viewed video resonates with many navigating civil services challenges.
        </Typography>
        <Typography sx={{display:'flex',flexDirection:'row',marginBottom:'10px',gap:'5px'}}>  
        <DoneIcon/>
                 Sajwan's insights illuminate aspirants' struggles, offering actionable solutions.
        </Typography>
        <Typography sx={{display:'flex',flexDirection:'row',marginBottom:'10px',gap:'5px'}}> 
        <DoneIcon/>

                His guidance covers time management and motivation.
        </Typography>
        <Typography sx={{display:'flex',flexDirection:'row',marginBottom:'10px',gap:'5px'}}> 
        <DoneIcon/>
    
              Sajwan provides hope and direction to those on the challenging journey.
        </Typography>
        <Typography sx={{display:'flex',flexDirection:'row',marginBottom:'10px',gap:'5px'}}>   
        <DoneIcon/>

              His speech offers practical advice for overcoming obstacles in UPSC preparation.
        </Typography>
        </Box>
        </Box>
        <Box sx={{marginTop:'20px',display:'flex',flexDirection:isMobileView?"row":'row',alignItems:'center',justifyContent:'center',backgroundColor:'#212529',color:'white',width:isTabletView?"100%":"100%",height:'100px',borderRadius:'10px'}}>
           <Box sx={{display:'flex',flexDirection:"row",alignItems:'center',justifyContent:'center',gap:'30px',width:'100%'}}>
             <Box sx={{display:'flex',flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
               <Typography variant="h6">YouTube</Typography>
               <Typography sx={{fontWeight:600}}>600K +</Typography>
               <Typography variant="h6 ">subcribers</Typography>
             </Box>
           </Box>
           <Divider orientation="vertical" sx={{border:'2px solid white'}}/>
           <Box sx={{display:'flex',flexDirection:"row",alignItems:'center',justifyContent:'center',gap:'30px',width:'100%'}}>
           <Box sx={{display:'flex',flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
             <Typography variant="h6">Instagram</Typography>
             <Typography sx={{fontWeight:600}}>100K +</Typography>
             <Typography variant="h6">Followers</Typography>
           </Box>
         </Box>
         <Divider orientation="vertical" sx={{border:'2px solid white'}}/>

         <Box sx={{display:'flex',flexDirection:"row",alignItems:'center',justifyContent:'center',gap:'30px',width:'100%'}}>
             <Box sx={{display:'flex',flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
               <Typography variant="h6">Telegram</Typography>
               <Typography sx={{fontWeight:600}}>50K +</Typography>
               <Typography variant="h6">Followers</Typography>
             </Box>
           </Box>
        </Box>
        </Box>
    </Container>
  );
};

export default Acheivement;

