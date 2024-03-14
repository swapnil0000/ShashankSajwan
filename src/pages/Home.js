import { Container } from '@mui/material'
import React from 'react'
import Carousels from '../components/Carousels'
import Motive from './Motive'
import Course from './Course'
import Youtube from './youtube/Youtube'
import Author from './author/Author'
import Quotes from './quotes/Quotes'
import Choose from './Choose/Choose'
import CourseProvide from './Courseprovide/CourseProvide'
const Home = () => {
  return (
    <>
       <Carousels/>
       <Motive/>
       <Choose/>
       <CourseProvide/>
       <Course/>
       <Youtube/>
       <Quotes/>
       <Author/>
    </>
  )
}

export default Home