import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useRef, useState } from 'react'
import ButtonComp from './Button';
const Book6 = () => {
  const theme=useTheme();
    const elementRefs = useRef([]); // Ref for multiple elements
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))
    const [isExpanded, setIsExpanded] = useState(false);
    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
  return (
   
    <Box className="revealDown" ref={(el) => (elementRefs.current[0] = el)} sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", fontSize: '15px', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '40px'  }}>
        <img style={{width:isMobileView?"280px":"350px", height: 'auto', margin: '10px', borderRadius: '10px' }} src='/assets/book3.jpeg' alt='banner' />
        <Box sx={{ marginLeft: '10px' }}>
        <Typography sx={{ fontSize: '15px' }}> The thoroughly Updated  
        <span style={{ fontWeight: '600',color: '#946f3a', }}>  6th Edition of the book Indian History & Culture Compendium with NCERT (Class 6 to 12) for UPSC CSE Paper 1 & State PCS provides the MOST UPDATED material for the UPSC CSE & State PSC Prelims & Mains Exam.</span> 
        </Typography>
        <Box sx={{ color: 'black', marginTop: '10px' }}>
          <Typography sx={{ fontSize: '14px' , fontWeight: '500',marginTop:"10px"}}>
            ✍ Comprehensive<span style={{ fontWeight: '600',color: '#946f3a',fontFamily:'montserrat' }}>  NCERT coverage (6 to 12) with syllabus mapped with latest UPSC syllabus.</span>
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            ✍ Book captures<span style={{ fontWeight: '600',color: '#946f3a' }}>  each and every detail pertaining to the Indian History & Culture which is important from the point of view of the exam.</span>
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            ✍ Includes <span style={{ fontWeight: '600',color: '#946f3a' }}>2024 Chapter Wise UPSC Prelims MCQs</span>
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            ✍ <span style={{ fontWeight: '600',color: '#946f3a' }}>Special Inclusion:</span> Pre-Examination Revision Section; List of Indian Scientist & Contributions; Major inventions and Much More.
          </Typography>
          <Typography sx={{ fontSize: '14px'}}>
            ✍ The <span style={{ fontWeight: '600',color: '#946f3a' }}>USP of the book is that the information is captured in a self-explanatory and easy to remember methodology which comprises of Mind Maps, Infographics, Charts, Tables and latest exam pattern MCQs.</span>
          </Typography>
          {isExpanded && (
            <Box>
              <Typography sx={{ fontSize: '14px' }}>
                ✍ The book is divided into <span style={{ fontWeight: '600',color: '#946f3a' }}> 3 parts (Ancient, Medieval & Modern) which are further divided into 31 chapters with 1500 + MCQs</span>
              </Typography>
              <Typography sx={{ fontSize: '14px' }}>
                ✍ <span style={{ fontWeight: '600',color: '#946f3a' }}>4 Types of self-Evaluation Exercises-</span>
              </Typography>
              <Typography sx={{ fontSize: '14px' }}>
                👉🏼 <span style={{ fontWeight: '600',color: '#946f3a' }}> Exercise 1:</span> UPSC CSE Previous Year Questions (2017-2024)
              </Typography>
              <Typography sx={{ fontSize: '14px' }}>
                👉🏼 <span style={{ fontWeight: '600',color: '#946f3a' }}> Exercise 2:</span> State PSC Previous Year Questions
              </Typography>
              <Typography sx={{ fontSize: '14px' }}>
                👉🏼<span style={{ fontWeight: '600',color: '#946f3a' }}> Exercise 3:</span> NCERT Based Exercises mapped to Classes 6-12
              </Typography>
              <Typography sx={{ fontSize: '14px' }}>
                👉🏼 <span style={{ fontWeight: '600',color: '#946f3a' }}> Exercise 4:</span> Basic & Advance Practice Questions
              </Typography>
              <Typography sx={{ fontSize: '14px' }}>
                ✍ Also includes, <span style={{ fontWeight: '600',color: '#946f3a' }}>Mains Chapter wise Previous Year & Practice Questions</span>
              </Typography>
            </Box>
          )}
        </Box>
        <ButtonComp isExpanded={isExpanded} setIsExpanded={setIsExpanded} link={"https://amzn.to/3SgJmgJ"} />
      </Box>

   </Box>
  )
}

export default Book6