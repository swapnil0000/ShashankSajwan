import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'

const Author = () => {
    const theme=useTheme();

    const isMobileView = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: isMobileView ? "column" : "row",
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px'
    }}>
        <Box sx={{
            backgroundColor: '#f5f5f4',
            width: isMobileView ? "100%" : "100%",
            height: 'auto',
            display: 'flex',
            flexDirection: isMobileView ? "column" : "row",
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
        }}>
            <img src='/assets/sir.png' style={{ width: isMobileView ? "100%" : "300px", objectFit: 'cover' }} alt="Author" />
            <Box sx={{ padding: '20px' }}>
                <Typography sx={{
                    fontSize: '25px',
                    fontWeight: '800',
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#4182d2',
                    marginBottom: '10px'
                }}>About the Author</Typography>
                <Typography sx={{
                    textAlign: 'start',
                    fontSize: isMobileView ? "16px" : "13px",
                    wordSpacing: '5px',
                    lineHeight: '1.4',
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#333'
                }}>
                    Shashank Sajwan, originally from Uttarakhand, pursued a Bachelor's Degree in Physics from Delhi University, followed by a Post-Graduation in Public Administration from IGNOU. His passion for the UPSC CSE examination emerged during his undergraduate years, where he recognized the importance of dedicated preparation and strategic planning. After completing his post-graduation, he dedicated himself fully to this pursuit.<br /><br />
                    Additionally, Shashank runs a website, <span style={{ color: '#4182d2', fontWeight: '600' }}>www.shashanksajwan.com</span>, which serves as a comprehensive resource hub for aspirants. The website features study materials, mock exams, and personalized mentorship programs. Through his knowledge and strong initiatives, Shashank has <span style={{ color: '#4182d2', fontWeight: '600' }}>successfully mentored over 500,000 aspirants</span>, helping them navigate the complexities of the UPSC CSE.<br /><br />
                    Now, through this series, aspirants can access an extensive range of resources designed to streamline their preparation process. As Shashank embarks on this new journey, his commitment to empowering aspirants and fostering a supportive learning community remains unwavering.
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Author