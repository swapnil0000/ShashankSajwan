import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import "../youtube/video.css";
import { Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";


const Youtube = () => {
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
    const youtubelink=[{
      id:1,
      value:'Game changer for UPSC CSE aspirants (best)',
      link:"https://www.youtube.com/watch?v=HbcHQBsQTAI"
    },
    {
      id:2,
      value:'Mistakes aspirants do during preparation (best)',
      link:"https://www.youtube.com/watch?v=d4aegXqxE-U"
    },
    {
      id:3,
      value:'UPSC prelims syllabus analysis',
      link:"https://www.youtube.com/watch?v=gmXMDbwt_so"
    },
    {
      id:4,
      value:'CSE exam pattern',
      link:"https://www.youtube.com/watch?v=81Af345gor0"
    },
    {
      id:5,
      value:'Important ias exam books',
      link:"https://www.youtube.com/watch?v=kBnZHlYfhPg"
    },
  
  ]
    const [show,setShow]=useState(false);
    const hidePopup = () => {
        setShow(false);
    };
    return (
      <Container sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Typography sx={{marginTop:'80px',fontSize:isMobileView?"30px":"50px"}}>Recent Youtube Video</Typography>
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
            <Grid container spacing={2}>
            {youtubelink.map((ele)=>(
              <Grid  sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} item lg={3} md={4} sm={6} xs={12} >
              <ReactPlayer
              id={ele.id}
              url={ele.link}
              controls
              width="100%"
              height="100%"
              playing={show}
          />
          <Typography>{ele.value}</Typography>
          </Grid>
             ))}
            </Grid>

            </div>
        </div>
        </Container>
    );
};

export default Youtube;