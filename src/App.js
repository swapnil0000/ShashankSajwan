import Header from './components/Header';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Contact from './pages/Contact';
import Footer from './components/Footer';
import About from './pages/about/About';
import TermAndCondition from './pages/Policy/TermAndCondition';
import Refund from './pages/Policy/Refund';
import Private from './pages/Policy/Private';
import Material from './pages/Materials/Material';
import Videos from './pages/Videos/Videos';
import Syllabus from './pages/syllabus/Syllabus';
import Pyqs from './pages/Pyqs/Pyqs';
import General from './pages/GeneralStudies/General';
import NewsNotes from './pages/Newspaper/NewsNotes';
import CourseSection from './pages/CourseSection/CourseSection';
import FAQs from './pages/FAQs/FAQs';
import Optional from './pages/optional/Optional';
import PopupDialog from './components/popup/PopupDailog';
import Payment from './pages/Payment';
import BookPage from './pages/books/BookPage';
import Optional2025 from './pages/Newspaper/NewsNotes2025';

function App() 
{
 
  return (
    
    <BrowserRouter>
   
    <Header/>
    <PopupDialog/>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/ncert' element={<Material/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/videos' element={<Videos/>}/>
            <Route path='/terms' element={<TermAndCondition/>}/>
            <Route path='/refund' element={<Refund/>}/>
            <Route path='/private' element={<Private/>}/>
            <Route path='/faqs' element={<FAQs/>}/>
            <Route path='/courses' element={<CourseSection/>}/>
            <Route path='/syllabus' element={<Syllabus/>}/>
            <Route path='/pyqs' element={<Pyqs/>}/>
            <Route path='/general' element={<General/>}/>
            <Route path='/optional' element={<Optional/>}/>
            <Route path='/newsnotes' element={<NewsNotes/>}/>
            <Route path='/newsnotes25' element={<Optional2025/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/books' element={<BookPage/>}/>
           </Routes> 
           <Footer/>

    </BrowserRouter>
  );
}

export default App;


