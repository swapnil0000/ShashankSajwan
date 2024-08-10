import React, { useRef } from 'react';
import "./books.css"
import { Box, Typography, useMediaQuery } from '@mui/material';
import theme from '../../theme/theme';
import { FlexCenterColoum } from '../../common';
import { useNavigate } from 'react-router-dom';
const HomeBook = () => {
    // Create references for the imgList, scrollRight, and scrollLeft elements
    const imgListRef = useRef(null);

    // Function to handle scrolling to the right
    const handleScrollRight = () => {
        if (imgListRef.current) {
            imgListRef.current.scrollBy(650, 0);
        }
    };

    // Function to handle scrolling to the left
    const handleScrollLeft = () => {
        if (imgListRef.current) {
            imgListRef.current.scrollBy(-650, 0);
        }
    };


    const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))
    const navigate=useNavigate();
    const handleClick=()=>{
          navigate('/books')
    }

    return (
        <div>
            <section>
                <FlexCenterColoum  >
                    <Typography sx={{ fontSize: isMobileView ? "25px" : "40px", fontWeight: '700' }}>OUR BOOKS</Typography>
                </FlexCenterColoum>
                <ul onClick={handleClick} className='ul' id="imgList" ref={imgListRef} style={{ display: 'flex', overflowX: 'scroll', listStyle: 'none', padding: 0, margin: 0, marginTop: '10px',alignItems:'center' }}>
                    <li className='li' >
                        <img className='img' src="/assets/book3.webp" alt="Img 1" />
                    </li>
                    <li className='li'>
                        <img className='img' src="/assets/book2.webp" alt="Img 2" />
                    </li>
                    <li className='li'>
                        <img className='img' src="/assets/book6.webp" alt="Img 3" />
                    </li>
                    <li className='li'>
                        <img className='img' src="/assets/book5.webp" alt="Img 4" />
                    </li>
                    <li className='li'>
                        <img className='img' src="/assets/book1.webp" alt="Img 5" />
                    </li>
                    <li className='li'>
                        <img className='img' src="/assets/book4.webp" alt="Img 6" />
                    </li>
                    <li className='li'>
                        <img className='img' src="/assets/book7.webp" alt="Img 7" />
                    </li>
                </ul>
                <div className="scroll-arrow" onClick={handleScrollLeft}>
                    &#8592;
                </div>
                <div className="scroll-arrow" onClick={handleScrollRight}>
                    &#8594;
                </div>
            </section>
            <Box>

            </Box>
        </div>
    );
}

export default HomeBook;
