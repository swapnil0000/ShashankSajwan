import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import carousel styles
import ReactPlayer from "react-player/youtube";
import "./style.css"; // Import custom carousel styles

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1
    }
};

const youtubelink = [
    {
        id: 1,
        value: 'Game changer for UPSC CSE aspirants',
        link: "https://www.youtube.com/watch?v=HbcHQBsQTAI"
    },
    {
        id: 2,
        value: 'Mistakes during preparation',
        link: "https://www.youtube.com/watch?v=d4aegXqxE-U"
    },
    {
        id: 3,
        value: 'UPSC prelims syllabus analysis',
        link: "https://www.youtube.com/watch?v=gmXMDbwt_so"
    },
    {
        id: 5,
        value: 'Important ias exam books',
        link: "https://www.youtube.com/watch?v=kBnZHlYfhPg"
    },
];

const CarouseYoutube = () => {
    const [show, setShow] = useState(false);
    const theme=useTheme();
    const isMobileView=useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Container>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',marginTop:'80px'}}>
            <Typography sx={{ display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontWeight:'700',fontSize:isMobileView?"25px":"40px",marginBottom:'20px'}}>MOST VIEWED VIDEOS</Typography>
                <Carousel
                    showIndicators={true}
                    responsive={responsive}
                    arrows={true}
                    infiniteLoop={true}
                    autoPlay={true}
                    width="100%"

                    customTransition="transform 500ms ease-in-out"
                    containerClass="carousel-container"
                >
                    {youtubelink.map((ele) => (
                        <div  className="video-wrapper" style={{borderRadius:'10px',width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',height:'350px'}}>

                        <Card sx={{ maxWidth: 500,gap:'10px',height:'240px' }}>
                        <CardMedia
                          sx={{ height: 190 ,width:'350px', display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}
                          
                        > 
                        <ReactPlayer
                        style={{ alignItems:'center',overflow:'hidden',borderRadius:'20px',marginBottom:'10px'}}
                        id={ele.id}
                            url={ele.link}
                            controls
                            width="90%"
                            height="230px"
                            playing={show}
                            className="video-player"
                        />

                        </CardMedia>
            
                        <CardContent sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Divider orientation='horizontal' sx={{border:'1px solid black',width:'90%',display:'flex',flexDirection:'row',alignItems:'center',justifySelf:'center'}} />

                        <Button sx={{border:'none',display:'flex',alignItems:'center',justifyContent:'center',width:'100%',fontWeight:'600',fontSize:'15px'}} variant='outlined'>{ele.value}</Button>
                        </CardContent>
                      </Card>
                        </div>
                            
                    ))}
                </Carousel>
            </Box>
        </Container>
    );
};

export default CarouseYoutube;
