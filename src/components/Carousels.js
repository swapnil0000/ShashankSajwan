import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Link } from "react-router-dom";

const Carousels = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))


  const data = [
    {
      id: 1,
      img: "/assets/banners/homebanner.png",
      link: "https://amzn.to/3WncEva"
    },
  ]
  const handleClick = (link) => {
    window.open(link, "_blank");
  }

  return (

    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: '100%' }}>
        <div id="carouselExampleIndicators" className="carousel slide" style={{ maxHeight: '900px', marginTop: isMobileView ? "100px" : "110px" }}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          </div>
          <div className="carousel-inner" style={{ display: 'flex', maxWidth: '100%' }}>
            {data.map((ele, index) => (
            <img   style={{ width: '100%', height: isMobileView ? "220px" : "480px" ,cursor:'pointer'}} src={ele.img} alt="..." />

          // <Link to='/books' style={{cursor:'pointer'}}  key={ele.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
          //     <img   style={{ width: '100%', height: isMobileView ? "220px" : "480px" ,cursor:'pointer'}} src={ele.img} alt="..." />
          //   </Link>
            ))}
          </div>
        </div>
      </Box>
    </Box>

  );
}

export default Carousels;


// <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
// <span className="carousel-control-prev-icon" aria-hidden="true"></span>
// <span className="visually-hidden">Previous</span>
// </button>
// <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
// <span className="carousel-control-next-icon" aria-hidden="true"></span>
// <span className="visually-hidden">Next</span>
// </button>
// <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
// <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
// <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>