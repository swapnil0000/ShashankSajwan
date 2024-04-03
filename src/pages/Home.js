import React, { useEffect } from 'react'
import Carousels from '../components/Carousels'
import Course from './Notespresent/Course'
import Youtube from './youtube/Youtube'
import Author from './author/Author'
import Choose from './Choose/Choose'
import CourseProvide from './Courseprovide/CourseProvide'
import Acheivement from './Acheivement/Acheivement'
import playbutton from "../pages/playbutton.jpg"
import CarouseYoutube from './youtube/CarouseYoutube'
import Motive from './topHeader/Motive'
import { useLocation } from 'react-router-dom'
const Home = () => {
  const {pathname}=useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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