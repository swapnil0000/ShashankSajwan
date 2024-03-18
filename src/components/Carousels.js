import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import adds1 from "../assets/adds1.png";
import adds2 from "../assets/adds2.webp";
import adds3 from "../assets/adds3.png";

import { Box, Container } from '@mui/material';

const Carousels = () => {
  return (
    <Container sx={{ borderRadius: '10px', marginTop: '140px' }}>
      <Box sx={{ borderRadius: '20px', overflow: 'hidden' }}>
        <Carousel
          borderRadius={10}
          autoFocus={false}
          autoPlay={true}
          width='100%'
          dynamicHeight={150} // Adjust the height as needed
          showStatus={false}
          infiniteLoop={true}
          showIndicators={true}
          centerSlidePercentage={50}
          showThumbs={false}
        >
          <div>
            <img style={{ borderRadius: '20px', objectFit: 'cover', width: '100%' }} src={adds3} alt="carousel image" />
          </div>
          <div>
            <img style={{ borderRadius: '20px', objectFit: 'cover', width: '100%' }} src={adds3} alt="carousel image" />
          </div>
          <div>
            <img style={{ borderRadius: '20px', objectFit: 'cover', width: '100%' }} src={adds3} alt="carousel image" />
          </div>
          <div>
            <img style={{ borderRadius: '20px', objectFit: 'cover', width: '100%' }} src={adds3} alt="carousel image" />
          </div>
          <div>
            <img style={{ borderRadius: '20px', objectFit: 'cover', width: '100%' }} src={adds3} alt="carousel image" />
          </div>
        </Carousel>
      </Box>
    </Container>
  );
}

export default Carousels;
