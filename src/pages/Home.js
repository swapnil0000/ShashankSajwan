import React, { useEffect } from 'react'
import Carousels from '../components/Carousels'
import Course from './Notespresent/Course'
import Author from './author/Author'
import Choose from './Choose/Choose'
import CourseProvide from './Courseprovide/CourseProvide'
import Acheivement from './Acheivement/Acheivement'
import CarouseYoutube from './youtube/CarouseYoutube'
import Motive from './topHeader/Motive'
import { useLocation } from 'react-router-dom'
import Career from './carrer/Career'
import HomeBook from './books/HomeBook'
import { Box } from '@mui/material'
const Home = () => {
  const {pathname}=useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (   
    <Box>
       <Carousels/>
       <Motive/>
       <HomeBook/>
       <Choose/>
       <CourseProvide/>
       <Acheivement/>
       <Course/>
       <CarouseYoutube/>
    </Box>
  )
}

export default Home