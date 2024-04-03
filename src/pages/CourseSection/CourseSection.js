import { Avatar, Box, Button, Container, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import coursephoto from "../../assets/banner3.jpg"
import DateRangeIcon from '@mui/icons-material/DateRange';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import Choose from '../Choose/Choose';

import mentor from "../CourseSection/mentor.png"

const CourseSection = () => {
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
    const isSmallMobile=useMediaQuery(theme.breakpoints.down("sm"));
  return (

     <Box>
     <Box sx={{ 
        width: '100%', 
        marginTop: isMobileView?"100px":"110px", 
        position: 'relative', 
        height:'250px',
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
        <Typography  sx={{  fontSize:isMobileView?"25px":"40px",fontWeight:'600',width:'100%'}}
        >FULL FLEDGED UPSC </Typography> 
        <Box sx={{marginTop:'20px',display:'flex',flexDirection:'row',alignItems:'center',width:'100%',gap:'20px'}}>
         <Button sx={{backgroundColor:'rgba(0,119,182,1)',color:'white',width:isMobileView?"110px":"300px"}}>
          <Typography sx={{fontWeight:'600'}}>VIDEO </Typography>
         </Button>
         <Button sx={{backgroundColor:'rgba(0,119,182,1)',color:'white',width:isMobileView?"110px":"300px"}}>
         <Typography sx={{fontWeight:'600'}}>BROCHURE</Typography>
        </Button>
        </Box>
        </Box>
         
      </Box>

      <Container  >
     
      <Box  sx={{width:'90%',height:'auto',marginTop:'15px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',borderRadius:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
       <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",justifyContent:'space-between'}}>
       {
         
        isMobileView &&        <img style={{width:isMobileView?"100%":"auto",height:'20%',borderRadius:'13px'}} src={coursephoto} alt='generla'/>         
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
          !isMobileView && <img style={{width:!isMobileView?"25%":"auto",height:'25%',borderRadius:'13px'}} src={coursephoto} alt='generla'/>
       }

       </Box>


      <Box sx={{display:'flex',flexDirection:'column',width:'100%',alignItems:'center',justifyContent:'center'}} >
      <Divider sx={{width:'95%',marginTop:'20px',border:'0.5px solid black'}}/>
       <Box sx={{marginTop:'10px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',width:'100%'}}>
     
       
        </Box>
        <Button sx={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,119,182,1)',color:'whitesmoke',marginBottom:'11px'}} variant='contained'>Coming Soon</Button>
      </Box>
      </Box>
      <Box sx={{ marginTop: '30px', display: 'flex', width: '100%',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
      <section className="bg-light" style={{display: 'flex', width: '100%',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
  <div className="container">
    <div className="">
     
          <div >
            <h2 className="h3 mb-1">How can we help you?</h2>
            <p >We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or contact us via email.</p>
            <div className="accordion accordion-flush" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How Do I Change My Billing Information?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>To change your billing information, please follow these steps:</p>
                   
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    How Does Payment System Work?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A payment system is a way to transfer money from one person or organization to another. It is a complex process that involves many different parties, including banks, credit card companies, and merchants.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How Do I Cancel My Account?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>To cancel your account, please follow these steps:</p>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
     
    </div>
  </div>
</section>

  </Box>



     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'20px',height:'300px',width:'100%',marginTop:'20px'}}>
       <Typography sx={{fontSize:isMobileView?"25px":"40px",fontWeight:'700',margin:'10px'}}>Journey So Far</Typography>
       <Typography sx={{textAlign:'justify',hyphens:'initial'}}>Lorem ipsum dolor sit amet consectetur. Id nullam nisi lacinia rhoncus tincidunt nec. Pretium dolor amet viverra tincidunt bibendum. Platea eu porta phasellus in. Hendrerit viverra vitae velit facilisis at. Accumsan leo cursus nec mattis mi sed. Et ipsum risus ridiculus morbi. Turpis mauris eleifend libero amet convallis quis dis scelerisque. Tincidunt tortor convallis turpis amet dapibus rhoncus ultrices id.</Typography>
       <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',width:'100%',margin:'20px'}}>
         <img style={{width:'80px'}} src={mentor}/>
         <img style={{width:'80px'}} src={mentor}/>
         <img style={{width:'80px'}} src={mentor}/>
       </Box>
     </Box>

  
    </Container>


     </Box>
  )
}

export default CourseSection