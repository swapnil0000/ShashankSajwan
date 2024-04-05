import React, { useState } from 'react';
import { Box, Container, Grid, Typography, useMediaQuery, useTheme , CircularProgress, Divider} from '@mui/material';
import ReactPlayer from "react-player/youtube";
import Test from '../../Test';
import thumb from "../../assets/shashank.PNG"
import logo from "../../assets/shashank.PNG"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Videos = () => {
    const videos = [
        {
            id: 1,
            link: 'https://www.youtube.com/watch?v=LKDJZ4kgxbA',
            val:'NCERTs for IAS exam'
        },
        {
            id: 2,
            link: 'https://www.youtube.com/watch?v=RD5uvkib1EY',
            val:'How to start IAS preparation?'
            
        },
        {
            id: 3,
            link: 'https://www.youtube.com/watch?v=MS_vuWUDRj0',
            val:'My UPSC CSE journey mistakes'
            
        },
        {
            id: 4,
            link: 'https://www.youtube.com/watch?v=mX4nHl2LDmk',
            val:'All about CSAT'
        },
        {
            id: 5,
            link: 'https://www.youtube.com/watch?v=81Af345gor0',
            val:'IAS exam pattern'
        },
        {
            id: 6,
            link: 'https://www.youtube.com/watch?v=590IoW54OXU',
            val:'Prelims syllabus analysis            '
        },
        {
            id: 7,
            link: 'https://www.youtube.com/watch?v=4LwUI3_kBtU',
            val:'How to read newspaper?            '
        },
        {
            id: 8,
            link: 'https://www.youtube.com/watch?v=l3J50LCh31k',
            val:'English improvement tips'
        },
        {
            id: 9,
            link: 'https://www.youtube.com/watch?v=c1Kj0nvG6n8',
            val:'Time management for aspirants'
        },
        {
            id: 10,
            link: 'https://www.youtube.com/watch?v=tQMQmtcb1G4',
            val:'For school students '
        },
        {
            id: 11,
            link: 'https://www.youtube.com/watch?v=RwkX6ThaM_8',
            val:'Optional selection strategy'
        },
        {
            id: 12,
            link: 'https://www.youtube.com/watch?v=zigTkDzCdvo',
            val:' How to read NCERTs?'
        },
        {
            id: 13,
            link: 'https://www.youtube.com/watch?v=tI7qhKQGcnE',
            val:' Biggest mistake during preparation'
        },
        {
            id: 14,
            link: 'https://www.youtube.com/watch?v=_IkGnczXwck',
            val:' Important UPSC CSE subjects '
        },
        {
            id: 15,
            link: 'https://www.youtube.com/watch?v=0BQPGWAKfNU',
            val:'Answer writing tips'
        },

    ];

    const half = [
        {
            id: 16,
            link: 'https://youtu.be/HbcHQBsQTAI?si=u6ZfIIx57mi4Z2WW',
            val:'Game changer for UPSC CSE aspirants'
        },
        {
            id: 17,
            link: 'https://www.youtube.com/watch?v=d4aegXqxE-U',
            val:'Mistakes during preparation'
        },
        {
            id: 18,
            link: 'https://www.youtube.com/watch?v=vGRYeiFf2YU',
            val:'Social media addiction'
        },

    ];


    const [show, setShow] = useState(false);
    const theme = useTheme();
    
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
    const [loading, setLoading] = useState(true); // State to track loading status
    const thumbnailUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teqiq.com%2F2021%2F06%2F30%2Fhow-to-create-a-youtube-timestamp-link%2F&psig=AOvVaw3Smb1284aLp_xtClhyTNJA&ust=1712178499235000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDbqIu4pIUDFQAAAAAdAAAAABAE'; // Specify the URL of your custom thumbnail image


    return (
        
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',backgroundColor:'#212529',marginTop:isMobileView?"100px":'110px'}}>
        <Divider sx={{width:'100%',border:'1px solid white',color:'white'}} orientation='horizontal'/>
        <Typography sx={{fontSize:isMobileView?"25px":"40px",fontWeight:'700',color:'white',fontFamily:'Montserrat',marginTop:'10px'}}>YOUTUBE VIDEOS</Typography>
        <Container sx={{marginBottom:'80px',width:'100%',marginTop:'25px'}}>
        <Grid container spacing={5}>
            {videos.map((video) => (
                <Grid sx={{ transition: 'transform 0.3s', // Add transition for smooth scaling
                '&:hover': {
                    transform: 'scale(1.05)' // Zoom effect on hover
                }}} item key={video.id} xs={12} sm={6} md={4} >
                    <Box style={{ position: 'relative',gap:'10px', width: '100%',height:'210px', transition: 'transform 0.3s', // Add transition for smooth scaling
                    '&:hover': {
                        transform: 'scale(1.1)' // Zoom effect on hover
                    }}}>
                        {loading && ( // Display loading indicator while video is loading
                        <Box
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center'
                           
                        }}
                    >
                        <CircularProgress sx={{ color: 'white' }} /> {/* Circular loading indicator */}
                    </Box>
                        )}
                        <ReactPlayer
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '95%',
                                height: '100%',
                                overflow: 'hidden',
                                transition: 'transform 0.3s', // Add transition for smooth scaling
                                '&:hover': {
                                    transform: 'scale(1.05)' // Zoom effect on hover
                                }
                
                            }}
                            url={video.link}
                            controls={true}
                             // Use the thumbnailUrl directly with the light pro
                           
                            width="100%"
                            height="205px"
                            playing={false}
                            onReady={() => setLoading(false)} // Update loading state when video is ready
                        />
                       
                    </Box>
                    <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'10px',gap:'5px'}}>
                    <img style={{width:'30px'}} src={logo}/>
                    <Typography sx={{color:'white',fontWeight:'700'}}>{video.val}</Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
        <Box sx={{ marginTop: '30px', display: 'flex', width: '100%',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
        <section style={{display: 'flex', width: '100%',flexDirection:'column',alignItems:'center',justifyContent:'center',color:'white' }}>
    <div style={{color:'white'}} className="container">
      <div style={{color:'white',backgroundColor:'#212529'}} className="">
      <Divider orientation='horizontal' sx={{width:'100%',border:'1px solid white',backgroundColor:'white'}}/>
      
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'10px',backgroundColor:'#212529'}} >
          <div className="accordion-item">
              <h2 style={{ color:'white',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:'5px'}} id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" style={{fontSize:'20px',fontWeight:'700', color:'white',marginBottom:isMobileView?"30px":""}}  >
                      Show More
                  </button>
                  <KeyboardArrowDownIcon sx={{marginBottom:isMobileView?"30px":""}}  className="accordion accordion-flush" id="accordionExample"/>
              </h2>
              <div style={{color:'white'}} id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div style={{color:'white'}} className="accordion-body">
                  <Grid container spacing={5}>
                  {half.map((video) => (
                      <Grid sx={{ transition: 'transform 0.3s', // Add transition for smooth scaling
                      '&:hover': {
                          transform: 'scale(1.05)' // Zoom effect on hover
                      }}} item key={video.id} xs={12} sm={6} md={4} >
                          <Box style={{ position: 'relative',gap:'10px', width: '100%',height:'210px', transition: 'transform 0.3s', // Add transition for smooth scaling
                          '&:hover': {
                              transform: 'scale(1.1)' // Zoom effect on hover
                          }}}>
                              {loading && ( // Display loading indicator while video is loading
                              <Box
                              style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  display:'flex',
                                  alignItems:'center',
                                  justifyContent:'center'
                                 
                              }}
                          >
                              <CircularProgress sx={{ color: 'white' }} /> {/* Circular loading indicator */}
                          </Box>
                              )}
                              <ReactPlayer
                                  style={{
                                      position: 'absolute',
                                      top: 0,
                                      left: 0,
                                      width: '100%',
                                      height: '100%',
                                      overflow: 'hidden',
                                      transition: 'transform 0.3s', // Add transition for smooth scaling
                                      '&:hover': {
                                          transform: 'scale(1.05)' // Zoom effect on hover
                                      }
                      
                                  }}
                                  url={video.link}
                                  controls={true}
                                   // Use the thumbnailUrl directly with the light pro
                                 
                                  width="100%"
                                  height="205px"
                                  playing={false}
                                  onReady={() => setLoading(false)} // Update loading state when video is ready
                              />
                             
                          </Box>
                          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'10px',gap:'5px'}}>
                          <img style={{width:'30px'}} src={logo}/>
                          <Typography sx={{color:'white',fontWeight:'700'}}>{video.val}</Typography>
                          </Box>
                      </Grid>
                  ))}
              </Grid>
             
                  </div>
              </div>
          </div>
    
  </div>
  
          </div>
            </div>
  </section>
  
    </Box>
    </Container>
     </Box>
    );
};

export default Videos;
