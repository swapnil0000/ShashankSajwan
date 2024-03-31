import { Box, Button, Container, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import coursephoto from "../../assets/banner3.jpg"
import DateRangeIcon from '@mui/icons-material/DateRange';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import Choose from '../Choose/Choose';
import ffp from "../Choose/ffp.png"
import pt from "../Choose/pt.png"
import tma from "../Choose/tma.png"
import wmp from "../Choose/wmp.png"
import wtp from "../Choose/wtp.png"
import dct from "../Choose/dct.png"

const CourseSection = () => {
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
    const isSmallMobile=useMediaQuery(theme.breakpoints.down("sm"));


 


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
      value1:"Our dedicated team will closely monitor your UPSC journey, providing guidance through tests, live classNamees, module assessments, and personalized calls.",
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
    <Box>
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobileView ? 'column' : 'row',
        justifyContent: 'space-evenly',
        width: '100%',
      }}
    >
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',marginTop:isMobileView?"15px":"10px"}}>
        <Typography sx={{fontSize:isMobileView?"25px":"40px",fontWeight:'700'}}>WHY US</Typography>
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
  
              '& > :not(style)': {
                width: '100%',
                maxWidth: "500px", // Max width for lg and md breakpoints
              },
            }}
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
     </Box>

  
    </Container>


     </Box>
  )
}

export default CourseSection