import React, { useState } from 'react';
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import ReactPlayer from "react-player/youtube";

const Videos = () => {
    const videos = [
        {
            id: 1,
            link: 'https://www.youtube.com/watch?v=2h3V2g58Whg'
        },
        {
            id: 2,
            link: 'https://www.youtube.com/watch?v=2h3V2g58Whg'
        },
        {
            id: 3,
            link: 'https://youtu.be/LKDJZ4kgxbA?si=cvLBj-E9GOjtnctB'
        },
        {
            id: 4,
            link: 'https://www.youtube.com/watch?v=2h3V2g58Whg'
        },
        {
            id: 5,
            link: 'https://www.youtube.com/watch?v=2h3V2g58Whg'
        },
        {
            id: 6,
            link: 'https://youtu.be/LKDJZ4kgxbA?si=cvLBj-E9GOjtnctB'
        }
    ];

    const [show, setShow] = useState(false);
    const theme = useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container sx={{ marginTop: '120px' }}>
           <Typography sx={{fontSize:'40px',fontWeight:'700',display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px',marginBottom:'20px'}}>Most Popular Videos</Typography>
            <Box>
                <Grid container spacing={2}>
                    {videos.map((video) => (
                        <Grid item key={video.id} xs={12} sm={6} md={4}>
                            <Box>
                                <ReactPlayer
                                    style={{
                                        alignItems: 'center',
                                        overflow: 'hidden',
                                        borderRadius: '20px',
                                        marginBottom: '10px',
                                        width: '100%',
                                        backgroundColor: 'pink',
                                        height: '500px'
                                    }}
                                    url={video.link}
                                    controls
                                    width="100%"
                                    height="100%"
                                    playing={show}
                                    className="video-player"
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Videos;
