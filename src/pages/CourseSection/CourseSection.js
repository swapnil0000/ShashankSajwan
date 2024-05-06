import {  Box, Button, Container, Divider, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import DateRangeIcon from '@mui/icons-material/DateRange';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import { useLocation } from 'react-router-dom';
window.onload = function () {
  window.scrollTo(0, 0);
}
const CourseSection = () => {
  const handleWhatsapp = () => {
    // Replace '1234567890' with the phone number you want to send the message to
    const phoneNumber = '7060748896';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };
  const { pathname } = useLocation();

    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
    const isSmallMobile=useMediaQuery(theme.breakpoints.down("sm"));
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const handleVideoClick = () => {
      // Open the YouTube video link in a new tab
      window.open("https://youtu.be/z9aEoW4Fkbk?feature=shared", "_blank");
    };
  
    const handleBrochureClick = () => {
      // Open the brochure link in a new tab
      window.open("your-brochure-link", "_blank");
    };
 
  return (

     <Box>
     <Box sx={{ 
        width: '100%', 
        marginTop: isMobileView?"100px":"110px", 
        position: 'relative', 
        height:'250px',
        marginBottom:'20px',
        backgroundImage: "linear-gradient( 26.3deg ,rgba(8,24,68,1) 87.6%   ,rgba(0,119,182,1) 9.6%)",
      }}>
       
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
          
            display:'flex',
            flexDirection:'column',
           
          }}>
        <Typography  sx={{  fontSize:isMobileView?"20px":"30px",fontWeight:'600',width:'100%',textAlign:'center'}}
        >FULL FLEDGED UPSC CSE PREPARATION</Typography> 
        <Box sx={{marginTop:'20px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',width:'100%',gap:'20px'}}>
        <Button 
        onClick={handleVideoClick}
        sx={{
          backgroundColor: 'rgba(0,119,182,1)',
          color: 'white',
          width: isMobileView ? "110px" : "200px",
          marginRight: '10px', // Add margin if needed
        }}
      >
        <Typography sx={{ fontWeight: '600' }}>Video</Typography>
      </Button>
      <Button
        onClick={handleBrochureClick}
        sx={{
          backgroundColor: 'rgba(0,119,182,1)',
          color: 'white',
          width: isMobileView ? "110px" : "200px",
        }}
      >
        <Typography sx={{ fontWeight: '600' }}>Brochure</Typography>
      </Button>
        </Box>
        </Box>
         
      </Box>

      <Container  >
     
      <Box  sx={{width:'90%',height:'auto',marginTop:'15px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',borderRadius:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
       <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",justifyContent:'space-between'}}>
       {
         
        isMobileView &&        <img style={{width:isMobileView?"100%":"auto",height:'20%',borderRadius:'13px'}} src="/assets/banner2.webp" alt='generla'/>         
       }


       <Box>
       <Typography sx={{margin:'10px',fontSize:'25px',fontWeight:'600'}}>UPSC Full-Fledged Preparation</Typography>
       <Typography sx={{margin:'8px',marginTop:'40px'}} >In this program, you will get Full-Fledged Preparation including with proper mentorship and guidance with all the materials.</Typography>

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
          !isMobileView && <img style={{width:!isMobileView?"25%":"auto",height:'25%',borderRadius:'13px'}} src="/assets/banner2.webp" alt='generla'/>
       }

       </Box>


      <Box sx={{display:'flex',flexDirection:'column',width:'100%',alignItems:'center',justifyContent:'center'}} >
      <Divider sx={{width:'95%',marginTop:'20px',border:'0.5px solid black'}}/>
       <Box sx={{marginTop:'10px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',width:'100%'}}>
     
       
        </Box>
        <Button onClick={handleWhatsapp} sx={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,119,182,1)',color:'whitesmoke',marginBottom:'11px'}} variant='contained'>Enroll now</Button>
      </Box>
      </Box>
      <Box sx={{ marginTop: '30px', display: 'flex', width: '100%',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
      <section className="bg-light" style={{display: 'flex', width: '100%',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
  <div className="container">
    <div className="">
     
          <div >
            <h2 className="h3 mb-1">FAQs</h2>

            <div className="accordion accordion-flush" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Will this UPSC FULL-FLEDGED BATCH offer study materials such as notes and video lectures?                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>Yes, All the notes of all the subjects including with proper lectures, PYQ Analysis, tips & tricks will be delivered.</p>              
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What are Mentorship Sessions?                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                  Mentorship Sessions will be conducted every week, students will interact directly with Shashank Sir.                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Who will conduct mentorship sessions, and how will participants receive their session schedules?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>Shashank Sir will conduct Mentorship Sessions, students will get the notification & access of live sessions through their telegram channel.</p>               
                  </div>
                </div>
              </div>

              <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Are the lectures presented live or in recorded format?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>That is totally combined format, modules are designed in a way that students will not study but they’ll enjoy their preparation journey also.</p>               
                </div>
              </div>
            </div>

            <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Are weekly assessments part of the course structure?              
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Yes, we will track your progress on weekly & monthly basis through weekly test and all.</p>               
              </div>
            </div>
          </div>

          <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            How can participants access the classes?           
             </button>
          </h2>
          <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Private portal will be shared after your admissions.</p>               
            </div>
          </div>
        </div>

        <div className="accordion-item">
        <h2 className="accordion-header" id="headingSeven">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">

          What is Direct Interaction in this course?
          </button>
        </h2>
        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <p>Throughout your journey, you’ll have personal number of Shashank Sir, on which aspirants can ask their doubts (Subjective/Non-Subjective), and the Personal Interaction will not be discontinued after the course ends.</p>               
          </div>
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
  )
}

export default CourseSection