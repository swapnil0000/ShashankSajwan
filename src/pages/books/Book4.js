import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useRef, useState } from 'react'
import ButtonComp from './Button';
const Book4 = () => {
    const elementRefs = useRef([]); // Ref for multiple elements
    const theme=useTheme();
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
  return (
    <Box className="revealDown" ref={(el) => (elementRefs.current[0] = el)} sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '40px' }}>
    {isMobileView &&
        <img style={{ width:isMobileView?"280px":"350px", height: 'auto', margin: '10px', borderRadius: '10px' }} src='/assets/book6.jpeg' alt='banner' />
    }
    <Box sx={{ marginLeft: '10px' }}>
    <Typography sx={{ fontSize: '15px' }}> The thoroughly Updated  
    <span style={{ fontWeight: '600',color: '#7b3a94', }}> 6th Edition of the book General Science & Technology Compendium with NCERT (Class 6 to 12) for UPSC CSE Paper 1 & State PCS provides the MOST UPDATED material for the UPSC CSE & State PSC Prelims & Mains Exam.</span> 
    </Typography>
    <Box sx={{ color: 'black', marginTop: '10px' }}>
      <Typography sx={{ fontSize: '14px' , fontWeight: '500',marginTop:"10px"}}>
        ✍ Comprehensive<span style={{ fontWeight: '600',color: '#7b3a94',fontFamily:'montserrat' }}>  NCERT coverage (6 to 12) with syllabus mapped with latest UPSC syllabus.</span>
      </Typography>
      <Typography sx={{ fontSize: '14px' }}>
        ✍ Book captures<span style={{ fontWeight: '600',color: '#7b3a94' }}>  each and every detail pertaining to the General Science & Technology which is important from the point of view of the exam. Written in an easy-to-grasp and lucid manner.</span>
      </Typography>
      <Typography sx={{ fontSize: '14px' }}>
        ✍ Includes <span style={{ fontWeight: '600',color: '#7b3a94' }}>2024 Chapter Wise UPSC Prelims MCQs</span>
      </Typography>
      <Typography sx={{ fontSize: '14px' }}>
        ✍ <span style={{ fontWeight: '600',color: '#7b3a94' }}>Special Inclusion:</span> Pre-Examination Revision Section; List of Indian Scientist & Contributions; Major inventions and Much More.
      </Typography>
      <Typography sx={{ fontSize: '14px'}}>
        ✍ The <span style={{ fontWeight: '600',color: '#7b3a94' }}>USP of the book is that the information is captured in a self-explanatory and easy to remember methodology which comprises of Mind Maps, Infographics, Charts, Tables and latest exam pattern MCQs.</span>
      </Typography>
      {isExpanded && (
        <Box>
          <Typography sx={{ fontSize: '14px' }}>
            ✍ The <span style={{ fontWeight: '600',color: '#7b3a94' }}>book is divided into 25 chapters with 1200 + MCQs</span>
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            ✍ <span style={{ fontWeight: '600',color: '#7b3a94' }}>4 Types of self-Evaluation Exercises-</span>
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            👉🏼 <span style={{ fontWeight: '600',color: '#7b3a94' }}> Exercise 1:</span> UPSC CSE Previous Year Questions (2017-2024)
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            👉🏼 <span style={{ fontWeight: '600',color: '#7b3a94' }}> Exercise 2:</span> State PSC Previous Year Questions
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            👉🏼<span style={{ fontWeight: '600',color: '#7b3a94' }}> Exercise 3:</span> NCERT Based Exercises mapped to Classes 6-12
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            👉🏼 <span style={{ fontWeight: '600',color: '#7b3a94' }}> Exercise 4:</span> Basic & Advance Practice Questions
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            ✍ Also includes, <span style={{ fontWeight: '600',color: '#7b3a94' }}>Mains Chapter wise Previous Year & Practice Questions</span>
          </Typography>
        </Box>
      )}
    </Box>
    <ButtonComp isExpanded={isExpanded} setIsExpanded={setIsExpanded} link={"https://amzn.to/3Lu83SL"} />
  </Box>

    {!isMobileView &&
        <img style={{width:isMobileView?"280px":"350px", height: 'auto', margin: '10px', borderRadius: '10px' }} src='/assets/book6.jpeg' alt='banner' />
    }
</Box>
  )
}

export default Book4