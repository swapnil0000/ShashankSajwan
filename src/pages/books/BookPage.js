import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import SingBook from './SingBook';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Books from './books';
import Author from './Author';
import { useLocation } from 'react-router-dom';

const BookPage = () => {
    const theme=useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const {pathname}=useLocation();
    const videoRef = useRef(null);


    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };
    const videoUrl = 'https://book-video.s3.ap-south-1.amazonaws.com/bookvideo_0ixoliwT.mp4';


    return (
        <Box sx={{ width: '100%',marginTop:'110px' }}>
        <Box sx={{ position: 'relative', width: '100%', height: isMobileView ? "200px" : "auto" ,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
        <video
            ref={videoRef}
            style={{ width:isMobileView?"100%":"70%", height:isMobileView?"210px":'550px', objectFit: 'cover' }}
            src={videoUrl}
            alt="Book Banner"
            onClick={handleVideoClick}
            controls={false} // Optional: Hide default video controls
        />
        {!isPlaying && (
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',
                    cursor: 'pointer'
                }}
                onClick={handleVideoClick}
            >
                <PlayCircleOutlineIcon sx={{ fontSize: '80px' }} />
            </Box>
        )}
    </Box>

            <Books />
            <Box sx={{ width: '100%', height: '160px', backgroundColor: "#4182d2", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: isMobileView ? "20px" : "30px", fontWeight: '800', color: 'white', textAlign: 'center', fontFamily: 'Montserrat' }}>Unlock Success with Our Comprehensive Compendium: Purchase Individually or as a Combo Set for Ultimate Preparation!</Typography>
            </Box>
            <SingBook />
            <Author />
        </Box>
        
    );
};

export default BookPage;
