import { Box, Typography, useTheme } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Top from './components/Top';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Notes from './pages/Notes/Notes';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import About from './pages/about/About';
import Floating from './components/floating/Floating';
import Blogs from './pages/dailyBlogs/Blogs';
import TermAndCondition from './pages/Policy/TermAndCondition';
import Refund from './pages/Policy/Refund';
import Private from './pages/Policy/Private';
import Faqs from './pages/Policy/Faqs';

function App() {
  const theme=useTheme();

  return (
    
     <BrowserRouter>
       
       <Header/>
       
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/terms' element={<TermAndCondition/>}/>
        <Route path='/refund' element={<Refund/>}/>
        <Route path='/private' element={<Private/>}/>
        <Route path='/faqs' element={<Faqs/>}/>

       </Routes> 
       <Footer/>
     </BrowserRouter>
  );
}

export default App;
