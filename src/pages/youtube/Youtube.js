import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import "../youtube/video.css";
import { Container, Typography } from "@mui/material";
// https://youtu.be/TMWikPFCCfQ?si=RybZVxH0KiuXTXnD
// https://youtu.be/HbcHQBsQTAI?si=m6Ow9HkIj8eLZNXs
// https://youtu.be/v5DnIVwvAbY?si=avOs_9cE89ZI4tU4
// https://youtu.be/q3VxjyGgE-c?si=Ut9pyUlYR4s-6Tup
// https://youtu.be/oROOSZz6RjE?si=okfUOE97qsTt0Nh6
// https://youtu.be/zD_5-nqBT-k?si=rWEfwNRIh_NzpO8D

const Youtube = () => {
    const youtubelink=[{
      id:1,
      link:"https://youtu.be/HbcHQBsQTAI?si=m6Ow9HkIj8eLZNXs"
    },
    {
      id:2,
      link:"https://youtu.be/HbcHQBsQTAI?si=m6Ow9HkIj8eLZNXs"
    },
    {
      id:3,
      link:"https://youtu.be/HbcHQBsQTAI?si=m6Ow9HkIj8eLZNXs"
    },
    {
      id:4,
      link:"https://youtu.be/HbcHQBsQTAI?si=m6Ow9HkIj8eLZNXs"
    },
    {
      id:5,
      link:"https://youtu.be/oROOSZz6RjE?si=okfUOE97qsTt0Nh6"
    },
  
  ]
    const [show,setShow]=useState(false);
    const hidePopup = () => {
        setShow(false);
    };
    return (
      <Container sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <Typography sx={{marginTop:'80px'}}  variant="h2">Recent Youtube Video</Typography>
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
             {youtubelink.map((ele)=>(
              <ReactPlayer
              id={ele.id}
              url={ele.link}
              controls
              width="100%"
              height="100%"
              playing={show}

          />
             ))}

            </div>
        </div>
        </Container>
    );
};

export default Youtube;