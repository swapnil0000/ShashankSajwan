import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import ButtonComp from './Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Book1 = () => {
    const elementRefs = useRef([]); // Ref for multiple elements
    const theme=useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
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
    <Box className="revealDown" ref={(el) => (elementRefs.current[0] = el)} sx={{ display: 'flex', flexDirection: isMobileView ? 'column' : 'row', fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <img style={{ width: isMobileView ? '280px' : '350px', height: 'auto', margin: '10px', borderRadius: '10px' }} src="/assets/book1.webp" alt="banner" />
            <Box sx={{ marginLeft: '10px' }}>
              <Typography sx={{ fontSize: '15px' }}> The thoroughly Updated  
              <span style={{ fontWeight: '600',color: '#178f4f', }}> 6th Edition of the book Ecology & Environment Compendium with NCERT (Class 6 to 12) for UPSC CSE Paper 1 & State PCS provides the MOST UPDATED material for the UPSC CSE & State PSC Prelims & Mains Exam.</span> 
              </Typography>
              <Box sx={{ color: 'black', marginTop: '10px' }}>
                <Typography sx={{ fontSize: '14px' , fontWeight: '500'}}>
                  ✍ Comprehensive<span style={{ fontWeight: '600',color: '#178f4f',fontFamily:'montserrat' }}>  NCERT coverage (6 to 12) with syllabus mapped with latest UPSC syllabus.</span>
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  ✍ Book <span style={{ fontWeight: '600',color: '#178f4f' }}>captures each and every detail pertaining to the Ecology & Environment which is important from the point of view of the exam.</span>
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  ✍ Written in <span style={{ fontWeight: '600',color: '#178f4f' }}>an easy-to-grasp and lucid manner.</span>
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  ✍ Includes <span style={{ fontWeight: '600',color: '#178f4f' }}>2024 Chapter Wise UPSC Prelims MCQs</span>
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  ✍ <span style={{ fontWeight: '600',color: '#178f4f' }}>Special Inclusion:</span> Pre-Examination Revision Section; List of COP; Maps on RAMSAR sites; Biosphere Reserves; Tiger Reserves and Much More
                </Typography>
                <Typography sx={{ fontSize: '14px'}}>
                  ✍ The <span style={{ fontWeight: '600',color: '#178f4f' }}>USP of the book is that the information is captured in a self-explanatory and easy to remember methodology which comprises of Mind Maps, Infographics, Charts, Tables and latest exam pattern MCQs.</span>
                </Typography>
                {isExpanded && (
                  <>
                    <Typography sx={{ fontSize: '14px' }}>
                      ✍ The <span style={{ fontWeight: '600',color: '#178f4f' }}>book is divided into 9 chapters with 1000 + MCQs</span>
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                      ✍ <span style={{ fontWeight: '600',color: '#178f4f' }}>4 Types of self-Evaluation Exercises-</span>
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                      👉🏼 <span style={{ fontWeight: '600',color: '#178f4f' }}> Exercise 1:</span> UPSC CSE Previous Year Questions (2017-2024)
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                      👉🏼 <span style={{ fontWeight: '600',color: '#178f4f' }}> Exercise 2:</span> State PSC Previous Year Questions
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                      👉🏼<span style={{ fontWeight: '600',color: '#178f4f' }}> Exercise 3:</span> NCERT Based Exercises mapped to Classes 6-12
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                      👉🏼 <span style={{ fontWeight: '600',color: '#178f4f' }}> Exercise 4:</span> Basic & Advance Practice Questions
                    </Typography>
                  </>
                )}
              </Box>
              <ButtonComp isExpanded={isExpanded} setIsExpanded={setIsExpanded} link={"https://bit.ly/3LRksRf"}/>
            </Box>
          </Box>
  )
}

export default Book1