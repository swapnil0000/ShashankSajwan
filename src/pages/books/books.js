import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ButtonComp from './Button';


const Books = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const theme=useTheme();

    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <Box sx={{ width: '100%', height: '200px', backgroundColor: "#4182d2", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ fontSize: isMobileView ? "20px" : "30px", fontWeight: '800', color: 'white', textAlign: 'center', fontFamily: 'Montserrat' }}>Ace Your UPSC & State PSC Exams with the Ultimate 7-Book Combo: Disha's Updated General Studies Compendium Series!</Typography>
            </Box>
            <Container sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: 'space-between', marginTop: '20px', marginBottom: '50px' }}>
                <img style={{ width: isMobileView ? "80%" : "450px" }} src='/assets/boo.png' alt="Books" />
                {!isMobileView && <img style={{ width: '250px', backgroundColor: 'grey' }} src='/assets/arrow.jpg' />}
                <Box>
                    <Typography sx={{ fontSize: '16px', fontWeight: '500', fontFamily: 'sans-serif' }}>
                        The thoroughly Updated<span style={{ fontWeight: '600' }}> 7th Edition of the Compendium Series Combo (set of 7 Books) with NCERT (Class 6 to 12) for UPSC CSE Paper 1 & State PCS provides the MOST UPDATED material for the UPSC CSE & State PSC Prelims & Mains Exam.</span>
                    </Typography>
                    {!isExpanded ?
                        <Box>
                            <Typography>✍ The 7 Books in the series are Indian History, Polity, Economy, Geography, Science & Tech, Environment & General Knowledge</Typography>
                            <Typography>✍ Comprehensive NCERT coverage (6 to 12) with syllabus mapped with latest UPSC syllabus. </Typography>
                            <Typography>✍ Book captures each and every detail important from the point of view of the exam.</Typography>
                            <Typography>✍ Written in an easy-to-grasp and lucid manner.</Typography>
                            <Typography>✍ Includes 2024 Chapter Wise UPSC Prelims MCQs</Typography>
                        </Box>
                        :
                        <Box>
                            <Typography>✍ Special Inclusion: Pre-Examination Revision Section</Typography>
                            <Typography>✍ The USP of the book is that the information is captured in a self-explanatory and easy to remember methodology which comprises of Mind Maps, Infographics, Charts, Tables and latest exam pattern MCQs.</Typography>
                            <Typography>✍ Comprehensive NCERT coverage (6 to 12) with syllabus mapped with latest UPSC syllabus. </Typography>
                            <Typography>✍ Book captures each and every detail important from the point of view of the exam.</Typography>
                            <Typography>✍ Written in an easy-to-grasp and lucid manner.</Typography>
                            <Typography>✍ Includes 2024 Chapter Wise UPSC Prelims MCQs</Typography>
                            <Typography>✍ Special Inclusion: Pre-Examination Revision Section</Typography>
                            <Typography>✍ The USP of the book is that the information is captured in a self-explanatory and easy to remember methodology which comprises of Mind Maps, Infographics, Charts, Tables and latest exam pattern MCQs.</Typography>
                            <Typography sx={{ fontSize: '15px' }}>✍<span style={{ fontWeight: '600' }}> 4 Types of self-Evaluation Exercises in each Chapter-</span></Typography>
                            <Typography sx={{ fontSize: '15px' }}>👉🏼<span style={{ fontWeight: '600' }}> Exercise 1 :</span> UPSC CSE Previous Year Questions (2017-2024)</Typography>
                            <Typography sx={{ fontSize: '15px' }}>👉🏼<span style={{ fontWeight: '600' }}> Exercise 2 :</span> State PSC Previous Year Questions</Typography>
                            <Typography sx={{ fontSize: '15px' }}>👉🏼<span style={{ fontWeight: '600' }}> Exercise 3 :</span> NCERT Based Exercises mapped to Classes 6-12</Typography>
                            <Typography sx={{ fontSize: '15px' }}>👉🏼<span style={{ fontWeight: '600' }}> Exercise 4 :</span> Basic & Advance Practice Questions</Typography>
                        </Box>
                    }
                    <ButtonComp isExpanded={isExpanded} setIsExpanded={setIsExpanded} link={"https://amzn.to/3WncEva"} />
                    </Box>
            </Container>
        </>
    )
}

export default Books