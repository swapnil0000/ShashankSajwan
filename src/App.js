import { Box, Typography, useTheme } from '@mui/material';
import './App.css';
import Header from './components/Header';
import Top from './components/Top';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Notes from './pages/Notes';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

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
       </Routes> 
       <Footer/>
     </BrowserRouter>
  );
}

export default App;
