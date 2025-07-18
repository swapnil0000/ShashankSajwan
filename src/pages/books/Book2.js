import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useRef, useState } from 'react'
import ButtonComp from './Button';
const Book2 = () => {
    const elementRefs = useRef([]); // Ref for multiple elements
    const theme=useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
  return (
    <Box className="revealDown" ref={(el) => (elementRefs.current[0] = el)} sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '40px' }}>
    {isMobileView && <img style={{ width:isMobileView?"280px":"350px", height: 'auto', margin: '10px', borderRadius: '10px' }} src='/assets/book2.jpeg' alt='banner' />
    }
    <Box sx={{ marginLeft: '10px' }}>
              <Typography sx={{ fontSize: '15px' }}> The thoroughly Updated  
              <span style={{ fontWeight: '600',color: '#b33268', }}> 6th Edition of the book Indian Economy Compendium with NCERT (Class 9 to 12) for UPSC CSE Paper 1 & State PCS provides the MOST UPDATED material for the UPSC CSE & State PSC Prelims & Mains Exam.</span> 
              </Typography>
              <Box sx={{ color: 'black', marginTop: '10px' }}>
                <Typography sx={{ fontSize: '14px' , fontWeight: '500'}}>
                📚 UPSC CSE Previous Year Questions (2017-2024)
                </Typography>
                <Typography sx={{ fontSize: '14px' , fontWeight: '500'}}>
                📚 State PSC Previous Year Questions
                </Typography>
                <Typography sx={{ fontSize: '14px' , fontWeight: '500'}}>
                📚 NCERT Based Exercises mapped to Classes 9-12
                </Typography>
                <Typography sx={{ fontSize: '14px' , fontWeight: '500'}}>
                📚 Basic & Advance Practice Questions
                </Typography>
                <Typography sx={{ fontSize: '14px' , fontWeight: '500'}}>
                  ✍ Comprehensive<span style={{ fontWeight: '600',color: '#b33268',fontFamily:'montserrat' }}>  NCERT coverage (6 to 12) with syllabus mapped with latest UPSC syllabus.</span>
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  ✍ Book <span style={{ fontWeight: '600',color: '#b33268' }}>captures each and every detail pertaining to the Ecology & Environment which is important from the point of view of the exam.</span>
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  ✍ Written in <span style={{ fontWeight: '600',color: '#b33268' }}>an easy-to-grasp and lucid manner.</span>
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  ✍ Includes <span style={{ fontWeight: '600',color: '#b33268' }}>2024 Chapter Wise UPSC Prelims MCQs</span>
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  ✍ <span style={{ fontWeight: '600',color: '#b33268' }}>Special Inclusion:</span> Pre-Examination Revision Section; Union Budget 2024 (Interim + Complete), Economic Survey, Schemes/ programmes and Much More.
                </Typography>
               
                {isExpanded && (
                  <Box>
                  <Typography sx={{ fontSize: '14px'}}>
                  ✍ The <span style={{ fontWeight: '600',color: '#b33268' }}>USP of the book is that the information is captured in a self-explanatory and easy to remember methodology which comprises of Mind Maps, Infographics, Charts, Tables and latest exam pattern MCQs.</span>
                </Typography>
                    <Typography sx={{ fontSize: '14px' }}>
                      ✍ The <span style={{ fontWeight: '600',color: '#b33268' }}>book is divided into 20 chapters with 1100 + MCQs</span>
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}>✍ Also includes,
                     <span style={{ fontWeight: '600',color: '#b33268' }}> Mains Chapter wise Previous Year & Practice Questions
                      </span>
                    </Typography>
                   
                  </Box>
                )}
              </Box>
              <ButtonComp isExpanded={isExpanded} setIsExpanded={setIsExpanded} link={"https://amzn.to/4dcIXE5"}/>
            </Box>

    {!isMobileView && <img style={{ width:isMobileView?"280px":"350px", height: 'auto', margin: '10px', borderRadius: '10px' }} src='/assets/book2.jpeg' alt='banner' />}
</Box>
  )
}

export default Book2