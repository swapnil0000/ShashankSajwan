import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

const Carousels = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))


  const data=[
    {
      id:1,
      img:"/assets/banners/banner1.webp"
    },
    {
      id:2,
      img:"/assets/banners/banner5.webp",
    },
    {
      id:3,
      img:"/assets/banners/banner4.webp",
    },
    {
      id:4,
      img:"/assets/banners/banner3.webp"
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
  {data.map((ele, index) => (
    <div key={ele.id} class={`carousel-item ${index === 0 ? 'active' : ''}`}>
      <img style={{ width: '100%', height: isMobileView ? "220px" : "480px" }} src={ele.img} alt="..." />
    </div>
  ))}
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
