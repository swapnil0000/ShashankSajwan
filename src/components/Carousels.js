import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner4 from "../assets/banner4.jpg";
import banner5 from "../assets/banner5.jpg";
import banner3 from "../assets/banner3.jpg";
import * as React from 'react';
import { Box, Card, CardMedia, Container, Typography, useMediaQuery, useTheme } from '@mui/material';

const Carousels = () => {
 
  const databanner=[{
    id:1,
    img:banner1
  },
  {
    id:2,
    img:banner2
  },
  {
    id:3,
    img:banner3

  },
  {
    id:4,
    img:banner4
  },
  {
    id:5,
    img:banner5
  },
]
const theme=useTheme();
const isMobileView=useMediaQuery(theme.breakpoints.down('sm'))
  return (
   
     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
     <Box sx={{width:'90%'}}>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={{ maxHeight: '700px', marginTop: '120px' }}>
  <div class="carousel-indicators">
    <button style={{ color: 'red',fontSize:'100px' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

    
  </div>
  <div class="carousel-inner" style={{ display: 'flex', maxWidth: '100%' }}>
    <div class="carousel-item active">
      <img style={{ width: '100%', maxHeight: '500px' }}  src={banner5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item active">
      <img style={{ width: '100%', maxHeight: '500px' }}  src={banner2} class="d-block w-100" alt="..."/>
    </div>
    <div  class="carousel-item">
      <img style={{ width: '100%', maxHeight: '500px' }} src={banner3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{ width: '100%', maxHeight: '500px' }}  src={banner4} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button style={{ color: 'red',fontSize:'100px' }} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'red',fontSize:'100px' }}></span>
      <span className="visually-hidden" style={{ color: 'red',fontSize:'100px' }}>Previous</span>
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
// <Box sx={{ borderRadius: '10px', marginTop: '140px', width: '100%', overflow: 'hidden' }}>
// <Carousel
//   borderRadius={10}
//   width='100%'
//   infiniteLoop={true}
//   showStatus={false}
//   showIndicators={true}
//   showThumbs={false}
// >
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//     <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={banner1} alt="carousel image" />
//   </div>
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//     <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={banner2} alt="carousel image" />
//   </div>
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//     <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={banner4} alt="carousel image" />
//   </div>
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//     <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={banner3} alt="carousel image" />
//   </div>
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//     <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={banner5} alt="carousel image" />
//   </div>
// </Carousel>
// </Box>