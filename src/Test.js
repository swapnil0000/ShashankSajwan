import  { useState } from 'react';
import banner1 from "../src/assets/banner1.jpg";
import banner2 from "../src/assets/banner2.jpg";
import banner3 from "../src/assets/banner3.jpg";
import banner4 from "../src/assets/banner4.jpg";

// const Test = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const databanner = [
//     {
//       index: 1,
//       img: banner1
//     },
//     {
//       index: 2,
//       img: banner2
//     },
//     {
//       index: 3,
//       img: banner3
//     },
//     {
//       index: 4,
//       img: banner4
//     }
//   ];

//   const goToPrevSlide = () => {
//     const newIndex = (activeIndex - 1 + databanner.length) % databanner.length;
//     setActiveIndex(newIndex);
//   };

//   const goToNextSlide = () => {
//     const newIndex = (activeIndex + 1) % databanner.length;
//     setActiveIndex(newIndex);
//   };

//   return (
//     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ maxHeight: '700px', marginTop: '80px', marginBottom: '200px' }}>
//       <div className="carousel-indicators">
//         {databanner.map((ele, index) => (
//           <button
//             key={index}
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide-to={index}
//             className={index === activeIndex ? "active" : ""}
//             aria-current={index === activeIndex ? "true" : "false"}
//             aria-label={`Slide ${index + 1}`}
//             onClick={() => setActiveIndex(index)}
//           ></button>
//         ))}
//       </div>
//       <div className="carousel-inner">
//         {databanner.map((ele, index) => (
//           <div key={ele.index} className={`carousel-item ${index === activeIndex ? "active" : ""}`} style={{ display: 'flex', maxWidth: '100%' }}>
//             <img src={ele.img} className="d-block mx-auto" alt={`Slide ${index + 1}`} style={{ width: '100%', maxHeight: '700px' }} />
//           </div>
//         ))}
//       </div>
//       <button className="carousel-control-prev" type="button" onClick={goToPrevSlide} data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" onClick={goToNextSlide} data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Test;


import React from 'react'

const Test = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={{ maxHeight: '800px', marginTop: '20px', marginBottom: '200px' }}>
    <div class="carousel-indicators">
      <button style={{ color: 'red',fontSize:'100px' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner" style={{ display: 'flex', maxWidth: '100%' }}>
      <div class="carousel-item active">
        <img style={{ width: '100%', maxHeight: '600px' }}  src={banner2} class="d-block w-100" alt="..."/>
      </div>
      <div  class="carousel-item">
        <img style={{ width: '100%', maxHeight: '600px' }} src={banner3} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img style={{ width: '100%', maxHeight: '600px' }}  src={banner4} class="d-block w-100" alt="..."/>
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
  )
}

export default Test