import { Box, Container, Typography, useTheme } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Top from './components/Top';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Contact from './pages/Contact';
import Footer from './components/Footer';
import About from './pages/about/About';
import Floating from './components/floating/Floating';
import Blogs from './pages/dailyBlogs/Blogs';
import TermAndCondition from './pages/Policy/TermAndCondition';
import Refund from './pages/Policy/Refund';
import Private from './pages/Policy/Private';
import Faqs from './pages/Policy/Faqs';
import Popup from './components/popup/Popup';
import { useEffect, useState } from 'react';
import Material from './pages/Materials/Material';
import Notes from './pages/Notes/Notes';
import Videos from './pages/Videos/Videos';
import Syllabus from './pages/syllabus/Syllabus';
import Pyqs from './pages/Pyqs/Pyqs';
import General from './pages/GeneralStudies/General';
import Optional from './pages/about/optional/Optional';
import NewsNotes from './pages/Newspaper/NewsNotes';
import Test from './Test';

function App() 
{
 
  return (
    
    <BrowserRouter>
    <Header/>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/ncert' element={<Material/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/videos' element={<Videos/>}/>
            <Route path='/terms' element={<TermAndCondition/>}/>
            <Route path='/refund' element={<Refund/>}/>
            <Route path='/private' element={<Private/>}/>
            <Route path='/faqs' element={<Faqs/>}/>
            <Route path='/syllabus' element={<Syllabus/>}/>
            <Route path='/pyqs' element={<Pyqs/>}/>
            <Route path='general' element={<General/>}/>
            <Route path='/optional' element={<Optional/>}/>
            <Route path='/newsnotes' element={<NewsNotes/>}/>
           </Routes> 
           <Footer/>

    </BrowserRouter>
  );
}

export default App;

// <Header/>
//        <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/ncert' element={<Material/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/blogs' element={<Blogs/>}/>
//         <Route path='/videos' element={<Videos/>}/>
//         <Route path='/terms' element={<TermAndCondition/>}/>
//         <Route path='/refund' element={<Refund/>}/>
//         <Route path='/private' element={<Private/>}/>
//         <Route path='/faqs' element={<Faqs/>}/>
//         <Route path='/syllabus' element={<Syllabus/>}/>
//         <Route path='/pyqs' element={<Pyqs/>}/>
//         <Route path='general' element={<General/>}/>
//         <Route path='/optional' element={<Optional/>}/>
//         <Route path='/newsnotes' element={<NewsNotes/>}/>
//        </Routes> 
//        <Footer/>
