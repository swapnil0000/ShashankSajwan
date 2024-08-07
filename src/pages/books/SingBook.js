import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import Book1 from './Book1';
import Book2 from './Book2';
import Book3 from './Book3';
import Book4 from './Book4';
import Book5 from './Book5';
import Book6 from './Book6';
import Book7 from './Book7';
const SingBook = () => {
    const theme=useTheme();



    useEffect(() => {
        // Use GSAP inside useEffect
        gsap.utils.toArray(".revealDown").forEach((elem) => {
            gsap.fromTo(
                elem,
                { x: 100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    x: 0,
                    autoAlpha: 1,
                    ease: "back",
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 80%",
                        end: "bottom 20%",
                        markers: false,
                        toggleActions: "play none none reverse" // Only play the animation on enter
                    }
                }
            );
        });
    }, []); // Empty dependency array for mounting once

    return (
        <Box sx={{ marginTop: '30px' }}>
            <Container>
               <Book3/> 
               <Book2/> 
               <Book6/>
               <Book5/>
               <Book1/>
               <Book4/>
               <Book7/>
            </Container>
        </Box>
    )
}

export default SingBook