import { Container } from '@mui/material'
import React from 'react'
import Carousels from '../components/Carousels'
import Motive from './Motive'
import Course from './Course'
import Youtube from './youtube/Youtube'
import Author from './author/Author'
import Quotes from './quotes/Quotes'
const Home = () => {
  return (
    <>
       <Carousels/>
       <Motive/>
       <Course/>
       <Youtube/>
       <Quotes/>
       <Author/>
    </>
  )
}

export default Home