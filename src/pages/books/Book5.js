import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useRef, useState } from 'react'
import ButtonComp from './Button';

const Book5 = () => {
    const elementRefs = useRef([]); // Ref for multiple elements
    const theme=useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <Box className="revealDown" ref={(el) => (elementRefs.current[0] = el)} sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '40px' }}>
            {isMobileView && (
                <img style={{ width: isMobileView ? "280px" : "350px", height: 'auto', margin: '10px', borderRadius: '10px' }} src='/assets/book4.jpeg' alt='banner' />
            )}
            <Box sx={{ marginLeft: '10px' }}>
                <Typography sx={{ fontSize: '15px', fontWeight: '500' }}>
                    The thoroughly Updated <span style={{color: '#4182d2',fontWeight:'600'}}> 6th Edition of the book Geography Compendium with NCERT (Class 6 to 12) for UPSC CSE Paper 1 & State PCS provides the MOST UPDATED material for the UPSC CSE & State PSC Prelims & Mains Exam.   </span></Typography>
                <Box sx={{ color: 'black', marginTop: '10px' }}>
                    <Typography sx={{ fontSize: '14px' }}>
                        📚 UPSC CSE Previous Year Questions (2017-2024)
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                    📚 State PSC Previous Year Questions
                    </Typography> 
                    <Typography sx={{ fontSize: '14px' }}>
                        📚 NCERT Based Exercises mapped to Classes 6-12
                    </Typography>   <Typography sx={{ fontSize: '14px' }}>
                        📚 Basic & Advance Practice Questions
                    </Typography>
                    <Typography sx={{ fontSize: '14px',marginTop:'10px' }}>
                        ✍ Comprehensive <span style={{color: '#4182d2',fontWeight:'600'}}>NCERT coverage (6 to 12) with syllabus mapped with latest UPSC syllabus.</span>
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                        ✍ Book <span style={{color: '#4182d2',fontWeight:'600'}}>captures each and every detail pertaining to the Ecology & Environment which is important from the point of view of the exam.</span>
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                        ✍ Written in an<span style={{color: '#4182d2',fontWeight:'600'}}> easy-to-grasp and lucid manner.</span>
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                        ✍ Includes <span style={{color: '#4182d2',fontWeight:'600'}}>2024 Chapter Wise UPSC Prelims MCQs</span>
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                        ✍ <span style={{color: '#4182d2',fontWeight:'600'}}>Special Inclusion:</span> Pre-Examination Revision Section; List of COP; Maps on RAMSAR sites; Biosphere Reserves; Tiger Reserves and Much More
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                        ✍ The <span style={{color: '#4182d2',fontWeight:'600'}}>USP of the book is that the information is captured in a self-explanatory and easy to remember methodology which comprises of Mind Maps, Infographics, Charts, Tables and latest exam pattern MCQs.</span> 
                    </Typography>
                    {isExpanded && (
                        <Box>
                            <Typography sx={{ fontSize: '14px' }}>
                            ✍ The book is divided into <span style={{color: '#4182d2',fontWeight:'600'}}>10 chapters with 1300 + MCQs</span>
                            </Typography>
                            <Typography sx={{ fontSize: '14px' }}>
                            ✍ Also includes,<span style={{color: '#4182d2',fontWeight:'600'}}> Mains Chapter wise Previous Year & Practice Questions</span>
                            </Typography>
                            <Typography sx={{ fontSize: '14px' }}>
                            ✍ As per <span style={{color: '#4182d2',fontWeight:'600'}}>latest UPSC CSE syllabus and examination pattern</span>
                            </Typography>
                        </Box>
                    )}
                </Box>
                <ButtonComp isExpanded={isExpanded} setIsExpanded={setIsExpanded} link={"https://amzn.to/3WvQcRG"} />
               
            </Box>
            {!isMobileView && (
                <img style={{ width: isMobileView ? "280px" : "350px", height: 'auto', margin: '10px', borderRadius: '10px' }} src='/assets/book4.jpeg' alt='banner' />
            )}


        </Box>
    )
}

export default Book5