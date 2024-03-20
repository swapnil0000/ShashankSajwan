import { Box, Container } from '@mui/material'
import React from 'react'
import Carousels from '../components/Carousels'
import Course from './Notespresent/Course'
import Youtube from './youtube/Youtube'
import Author from './author/Author'
import Quotes from './quotes/Quotes'
import Choose from './Choose/Choose'
import CourseProvide from './Courseprovide/CourseProvide'
import Acheivement from './Acheivement/Acheivement'
import playbutton from "../pages/playbutton.jpg"
import CarouseYoutube from './youtube/CarouseYoutube'
import Motive from './topHeader/Motive'
import Careers from './Careers/Careers'
const Home = () => {
  
  return (
     
    <>
       <Carousels/>
       <Motive/>
       <Choose/>
       <Acheivement/>
       <CourseProvide/>
       <Course/>
       <CarouseYoutube/>
       <Author/>
    </>
  )
}

export default Home