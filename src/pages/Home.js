import { Box, Container } from '@mui/material'
import React from 'react'
import Carousels from '../components/Carousels'
import Motive from './Motive'
import Course from './Notespresent/Course'
import Youtube from './youtube/Youtube'
import Author from './author/Author'
import Quotes from './quotes/Quotes'
import Choose from './Choose/Choose'
import CourseProvide from './Courseprovide/CourseProvide'
import Acheivement from './Acheivement/Acheivement'
import playbutton from "../pages/playbutton.jpg"
const Home = () => {
  
  return (

    <>
       <Carousels/>
       <Motive/>
       <Choose/>
       <Acheivement/>
       <CourseProvide/>
       <Course/>
       <Youtube/>
       <Author/>
    </>
  )
}

export default Home