import React, { useState, Suspense, lazy } from 'react';
import { Box, Container, Grid, Typography, useMediaQuery, useTheme, CircularProgress, Divider } from '@mui/material';
import logo from "../../assets/shashank.webp";

// Lazy load ReactPlayer component
const ReactPlayer = lazy(() => import("react-player/youtube"));
const Videos = () => {
    const videos = [
        {
            id: 1,
            link: 'https://www.youtube.com/watch?v=LKDJZ4kgxbA',
            val: 'NCERTs for IAS exam'
        },
        {
            id: 2,
            link: 'https://www.youtube.com/watch?v=RD5uvkib1EY',
            val: 'How to start IAS preparation?'

        },
        {
            id: 3,
            link: 'https://www.youtube.com/watch?v=MS_vuWUDRj0',
            val: 'My UPSC CSE journey mistakes'

        },
        {
            id: 4,
            link: 'https://www.youtube.com/watch?v=mX4nHl2LDmk',
            val: 'All about CSAT'
        },
        {
            id: 5,
            link: 'https://www.youtube.com/watch?v=81Af345gor0',
            val: 'IAS exam pattern'
        },
        {
            id: 6,
            link: 'https://www.youtube.com/watch?v=590IoW54OXU',
            val: 'Prelims syllabus analysis            '
        },
        {
            id: 7,
            link: 'https://www.youtube.com/watch?v=4LwUI3_kBtU',
            val: 'How to read newspaper?            '
        },
        {
            id: 8,
            link: 'https://www.youtube.com/watch?v=l3J50LCh31k',
            val: 'English improvement tips'
        },
        {
            id: 9,
            link: 'https://www.youtube.com/watch?v=c1Kj0nvG6n8',
            val: 'Time management for aspirants'
        },
        {
            id: 10,
            link: 'https://www.youtube.com/watch?v=tQMQmtcb1G4',
            val: 'For school students '
        },
        {
            id: 11,
            link: 'https://www.youtube.com/watch?v=RwkX6ThaM_8',
            val: 'Optional selection strategy'
        },
        {
            id: 12,
            link: 'https://www.youtube.com/watch?v=zigTkDzCdvo',
            val: ' How to read NCERTs?'
        },
        {
            id: 13,
            link: 'https://www.youtube.com/watch?v=tI7qhKQGcnE',
            val: ' Biggest mistake during preparation'
        },
        {
            id: 14,
            link: 'https://www.youtube.com/watch?v=_IkGnczXwck',
            val: ' Important UPSC CSE subjects '
        },
        {
            id: 15,
            link: 'https://www.youtube.com/watch?v=0BQPGWAKfNU',
            val: 'Answer writing tips'
        },
        {
            id: 16,
            link: 'https://youtu.be/HbcHQBsQTAI?si=u6ZfIIx57mi4Z2WW',
            val: 'Game changer for UPSC CSE aspirants'
        },
        {
            id: 17,
            link: 'https://www.youtube.com/watch?v=d4aegXqxE-U',
            val: 'Mistakes during preparation'
        },
        {
            id: 18,
            link: 'https://www.youtube.com/watch?v=vGRYeiFf2YU',
            val: 'Social media addiction'
        },

    ];

    const half = [
        {
            id: 16,
            link: 'https://youtu.be/HbcHQBsQTAI?si=u6ZfIIx57mi4Z2WW',
            val: 'Game changer for UPSC CSE aspirants'
        },
        {
            id: 17,
            link: 'https://www.youtube.com/watch?v=d4aegXqxE-U',
            val: 'Mistakes during preparation'
        },
        {
            id: 18,
            link: 'https://www.youtube.com/watch?v=vGRYeiFf2YU',
            val: 'Social media addiction'
        },

    ];

    const theme = useTheme();

    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
    const [loading, setLoading] = useState(true); // State to track loading status


    return (

     
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: '#212529', marginTop: isMobileView ? "100px" : '110px' }}>
        <Divider sx={{ width: '100%', border: '1px solid white', color: 'white' }} orientation='horizontal' />
        <Typography sx={{ fontSize: isMobileView ? "21px" : "40px", fontWeight: '700', color: 'white', fontFamily: 'Montserrat', marginTop: '10px' }}>MOST IMPORTANT VIDEOS</Typography>
        <Container sx={{ marginBottom: '80px', width: '100%', marginTop: '25px' }}>
            <Grid container spacing={5}>
                {videos.map((video) => (
                    <Grid item key={video.id} xs={12} sm={6} md={4}>
                        <Box style={{ position: 'relative', width: '100%', height: '210px' }}>
                            {loading && (
                                <Box style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <CircularProgress sx={{ color: 'white' }} />
                                </Box>
                            )}
                            <Suspense fallback={<CircularProgress sx={{ color: 'white' }} />}>
                                <ReactPlayer
                                    style={{ position: 'absolute', top: 0, left: 0, width: '95%', height: '100%', overflow: 'hidden' }}
                                    url={video.link}
                                    controls={true}
                                    width="100%"
                                    height="205px"
                                    playing={false}
                                    onReady={() => setLoading(false)}
                                />
                            </Suspense>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '10px', gap: '5px' }}>
                            <img style={{ width: '30px' }} src={logo} alt="Logo" />
                            <Typography sx={{ color: 'white', fontWeight: '700' }}>{video.val}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
          
        </Container>
        <Divider sx={{ width: '100%', border: '1px solid white', color: 'white' }} orientation='horizontal' />
    </Box>
);
};

export default Videos;
