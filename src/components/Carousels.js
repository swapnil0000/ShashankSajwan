import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../assets/banner1.webp"
import banner2 from "../assets/banner2.webp";
import banner4 from "../assets/banner4.webp";
import banner5 from "../assets/banner5.webp";
import banner3 from "../assets/banner3.webp";
import * as React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

const Carousels = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))


  const data=[
    {
      id:1,
      img:banner1
    },
    {
      id:2,
      img:banner5,
    },
    {
      id:3,
      img:banner4,
    },
    {
      id:4,
      img:banner3
    }
  

  ]
  return (

    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
      <Box sx={{ width: '100%' }}>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={{ maxHeight: '900px', marginTop: '100px' }}>
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>      
          <div class="carousel-inner" style={{ display: 'flex', maxWidth: '100%' }}>
           {
            data.map((ele)=>(
              <div key={ele.id} class="carousel-item active">
              <img style={{ width: '100%',height:isMobileView?"220px":"480px"}} src={ele.img} alt="..." />
            </div>  
            ))
           }  
          </div>
          <button style={{ color: 'red', fontSize: '100px' }} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'red', fontSize: '100px' }}></span>
            <span className="visually-hidden" style={{ color: 'red', fontSize: '100px' }}>Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Box>
    </Box>

  );
}

export default Carousels;
