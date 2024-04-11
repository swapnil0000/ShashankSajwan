import React from 'react';
import { Container, Typography, Button, Box, useTheme, useMediaQuery, Divider, styled } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import coursephoto from "../../assets/banner2.webp";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { ColumnCenter } from '../../common';

const CourseProvide = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const courseData = {
    left: [
      { id: 1, icon: <DateRangeIcon />, val: '2 Years Access' },
      { id: 2, icon: <AdminPanelSettingsIcon />, val: 'Proper Mentorship/Guidance' },
      { id: 3, icon: <MenuBookIcon />, val: 'Full Course Completion' }
    ],
    right: [
      { id: 1, icon: <GTranslateIcon />, val: 'English Medium' },
      { id: 2, icon: <SpeakerNotesIcon />, val: 'All Micro-Topics covered with lectures and notes' },
      { id: 3, icon: <LiveTvIcon />, val: 'Live Interaction/Doubt Sessions' }
    ]
  };

  const handleCourse = () => {
    navigate("/courses");
  };

  const CourseDetails = ({ courseData }) => {
    return (
      <Box sx={{ margin: '10px', display: 'flex', flexDirection: 'column', fontSize: '15px' }}>
        {courseData.map(ele => (
          <Typography key={ele.id} sx={{ display: 'flex', margin: '10px', gap: '5px', fontSize: "17px" }}>{ele.icon}{ele.val}</Typography>
        ))}
      </Box>
    );
  };

  const BoxMainStyle=styled('Box')({
    width: '90%', height: 'auto', marginTop: '15px', boxShadow: 'rgba(100, 50, 93, 0.25) 10px 10px 12px 10px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', borderRadius: '20px'
  })

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '50px' }}>
      <Typography sx={{ fontWeight: '700', fontSize: isSmallMobile ? "21px" : "40px" }} align="center">COURSES PROVIDED</Typography>
      <BoxMainStyle>
        <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", justifyContent: 'space-between' }}>
          <LazyLoadImage style={{ width: !isMobileView ? "23%" : "100%", height: '20%', borderRadius: '13px' }} src={coursephoto} alt='generla' />
          <Box>
            <Typography sx={{ margin: '10px', fontSize: '25px', fontWeight: '600' }}>UPSC Full-Fledged Preparation</Typography>
            <Typography sx={{ margin: '8px', marginTop: '20px', fontSize: isMobileView ? "15px" : "18px" }}>In this program, you will get Full-Fledged Preparation including with proper mentorship and guidance with all the materials.</Typography>
            <Box sx={{ display: 'flex', flexDirection: isSmallMobile ? "column" : "row", justifyContent: 'space-between' }}>
              <CourseDetails courseData={courseData.left} />
              <CourseDetails courseData={courseData.right} />
            </Box>
          </Box>
        </Box>
        <ColumnCenter>
          <Divider sx={{ width: '95%', marginTop: '20px', border: '0.5px solid black' }} />
          <Button onClick={handleCourse} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0750f', color: 'whitesmoke', marginTop: '10px',marginBottom:'10px' }} variant='contained'>ENROLL</Button>
        </ColumnCenter>
      </BoxMainStyle>
    </Container>
  );
};



export default CourseProvide;
