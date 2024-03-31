
import "../Acheivement/style.css";
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Box, Container, Divider, Typography, useMediaQuery, useTheme } from '@mui/material';
import "../../components/Icon/icons.css"
import DoneIcon from '@mui/icons-material/Done';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const Acheivement = () => {

const [count,setCount]=useState(1);
const [instaCount,setInstaCount]=useState(1);
const [telegramCount,setTelegramCount]=useState(1);

useEffect(()=>{
    if(count!==600)
    setInterval(setCount(count+1),100) 
    if(instaCount!==182)
    setInterval(setInstaCount(instaCount+1),2000);
    if(telegramCount!==124)
    setInterval(setTelegramCount(telegramCount+1),2000)
})

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  const isTabletView=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container sx={{boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px'}}>
      <Box sx={{ width: '100%', margin: '0 auto', marginBottom: '100px',marginTop:'50px',display:'flex' ,flexDirection:"column" ,justifyContent:'space-between',padding:'10px'}}>
        <Typography id="word" sx={{fontSize:isMobileView?"20px":"40px",fontWeight:'700',opacity:1,transition:'opacity 0.5s ease'}} align="center" gutterBottom>
          OUR JOSH TALKS SESSION
        </Typography>
    
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobileView ? 'column' : 'row',
            justifyContent: 'space-between', 
            alignItems:'center'
          }}
        >
          <Box sx={{ width: isMobileView ? '100%' : '60%', marginBottom: isMobileView ? '20px' : 'null' }}>
            <ReactPlayer
              url="https://youtu.be/2h3V2g58Whg?si=7HLu17W0pangSE5a"
              width="100%"
              style={{ marginTop:'2px',alignItems:'center',overflow:'hidden',borderRadius:'20px'}}
              height={isTabletView ? '200px' : '330px'}
            />
          </Box>
          <Box variant="h6"
          sx={{
            width: isMobileView ? '100%' : 'calc(40% - 0px)',
            marginTop: '15px',
            marginLeft: isMobileView ? '0' : '28px',
            animation:'fadeInUp 0.5s ease-out forwards',
            fontSize:{sm:'13px',md:'20px'} // Animation for mobile view
          }}>
          <Typography sx={{display:'flex',flexDirection:'row',gap:'5px',marginBottom:'10px',textAlign:'justify',hyphens:'auto'}}>
          <DoneIcon/>
        Shashank Sir's speech on Josh Talks YouTube tackles UPSC aspirants' trials.
        </Typography>

        <Typography sx={{display:'flex',flexDirection:'row',marginBottom:'10px',gap:'5px',textAlign:'justify',hyphens:'auto'}}> 
        <DoneIcon />  
                The most-viewed video resonates with many navigating civil services challenges.
        </Typography>
        <Typography sx={{display:'flex',flexDirection:'row',marginBottom:'10px',gap:'5px',textAlign:'justify',hyphens:'auto'}}>  
        <DoneIcon/>
                 His insights illuminate aspirants' struggles, offering actionable solutions.
        </Typography>
        <Typography sx={{display:'flex',flexDirection:'row',marginBottom:'10px',gap:'5px',textAlign:'justify',hyphens:'auto'}}> 
        <DoneIcon/>

                His guidance covers time management and motivation.
        </Typography>
        <Typography sx={{display:'flex',flexDirection:'row',marginBottom:'10px',gap:'5px',textAlign:'justify',hyphens:'auto'}}> 
        <DoneIcon/>
    
              He provides hope and direction to those on the challenging journey.
        </Typography>
        <Typography sx={{display:'flex',flexDirection:'row',marginBottom:'10px',gap:'5px',textAlign:'justify',hyphens:'auto'}}>   
        <DoneIcon/>

              His speech offers practical advice for overcoming obstacles in UPSC preparation.
        </Typography>
        </Box>
        </Box>

        <Box sx={{marginTop:'20px',display:'flex',flexDirection:isMobileView?"column":"row",backgroundColor:'#212529',color:'white',width:"100%",height:isMobileView?"350px":"110px",borderRadius:'30px',alignItems:'center',justifyContent:'center'}}>

        <Box sx={{display:'flex',flexDirection:isMobileView?"column":"row",backgroundColor:'#212529',color:'white',width:isMobileView?"100%":"100%",height:isMobileView?"350px":"110px",borderRadius:'30px',alignItems:'center',justifyContent:'center'}}>

           <Box sx={{display:'flex',flexDirection:"row",alignItems:'center',justifyContent:'center',gap:'30px',width:'100%',height:'100%',marginBottom:isMobileView?"5px":"0px",transition: 'transform 0.3s', // Add transition for smooth effect
           '&:hover': {
               transform: 'scale(1.2)', // Apply zoom effect on hover
           },}}>

           <Box>
           <YouTubeIcon  sx={{fontSize:'50px',fontWeight:'700'}}/>
          </Box>

             <Box sx={{display:'flex',flexDirection:"column"}}>
               <Typography sx={{fontWeight:700,fontSize:'30px',color:'#f0750f'}}>{count}K+</Typography>
               <Typography  sx={{fontSize:isMobileView?"15px":'17px'}}>Subcribers</Typography>
             </Box>

            

           </Box>

           <Box sx={{ width:isMobileView?'100%':"3px", height: isMobileView?"4px":"100%", backgroundColor: 'white', borderRight: '3px solid white' }} />

          
           <Box sx={{display:'flex',flexDirection:"row",alignItems:'center',marginBottom:isMobileView?"5px":"0px",justifyContent:'center',gap:'28px',width:'100%',height:'100%', transition: 'transform 0.3s', // Add transition for smooth effect
           '&:hover': {
               transform: 'scale(1.2)', // Apply zoom effect on hover
           },}}>
           <Box>
           <InstagramIcon sx={{fontSize:'50px',fontWeight:'700'}}/>
         </Box>
           <Box sx={{display:'flex',flexDirection:"column"}}>
             <Typography sx={{fontWeight:700,fontSize:'30px',color:'#f0750f'}}>{instaCount}K+</Typography>
             <Typography sx={{fontSize:isMobileView?"15px":'17px'}}>Followers</Typography>
           </Box>
          
         </Box>
         <Box sx={{ width:isMobileView?'100%':"3px", height: isMobileView?"4px":"100%", backgroundColor: 'white', borderRight: '3px solid white' }} />

         <Box sx={{display:'flex',flexDirection:"row",alignItems:'center',marginBottom:isMobileView?"5px":"0px",justifyContent:'center',gap:'30px',width:'100%',height:'100%', transition: 'transform 0.3s', // Add transition for smooth effect
         '&:hover': {
             transform: 'scale(1.2)', // Apply zoom effect on hover
         },}}>
             <Box sx={{display:'flex',flexDirection:"row",alignItems:'center',justifyContent:'center',gap:'40px'}}>
             <Box >
             <TelegramIcon sx={{fontSize:'50px',fontWeight:'700'}}/>
           </Box>
             <Box sx={{ display:'flex',flexDirection:'column',}}>
             
               <Typography sx={{fontWeight:700,fontSize:'30px',color:'#f0750f'}}>{telegramCount}K+</Typography>
               <Typography sx={{fontSize:isMobileView?"15px":'17px'}}>Followers</Typography>
               </Box>
             
             </Box>
           </Box>
           </Box>
        </Box>
        </Box>
    </Container>
  );
};

export default Acheivement;

