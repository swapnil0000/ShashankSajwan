import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Testimonial from './Testimonial';
import "../quotes/testisStyle.css"
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const Quotes = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;
  const data = [
    {
      id: 1,
      value: 'Sometimes to be strong is the only option we are left with, so fight with your current situation and stop blaming others.'
    },
    {
      id: 2,
      value: 'Consistency, Patience, Hard Work, Self Discipline and a strong will power are the most important qualities to succeed in life.'
    },
    {
      id: 3,
      value: 'Just follow your passion, people will always be there to demotivate you but always remember one thing - nobody can stop you from achieving what your desire for, unless you let them.'
    },
    {
      id: 4,
      value: 'In order to succeed in life, one must find their life’s purpose. Everyone who has taken birth has a purpose to serve.'
    },
    {
      id: 5,
      value: 'Students often ask me, “what is success according to you?”. I say,” success for me is just a peace of mind. When you need not to worry about anything, I call it a successful life.”'
    },
    {
        id: 6,
        value: 'Students often ask me, “what is success according to you?”. I say,” success for me is just a peace of mind. When you need not to worry about anything, I call it a successful life.”'
      }
  ];

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + cardsPerPage >= data.length ? 0 : prevIndex + cardsPerPage));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - cardsPerPage < 0 ? data.length - cardsPerPage : prevIndex - cardsPerPage));
  };

  return (
    <>
    <Container>
      <Typography sx={{marginTop:'10px'}} variant="h2" align="center" gutterBottom>
        Quotes
      </Typography>
      <Grid sx={{

      }} container spacing={2}>
        {data.slice(startIndex, startIndex + cardsPerPage).map(card => (
          <Grid key={card.id} item xs={12} sm={6} md={4} lg={4}>
          <div class="testimonial">
          <span class="open quote">“</span>
          <div class="image">
              <div class="clip"></div>
          </div>
          <p>{card.value}</p>
          <div class="source">		
              <span>Shashank Sajwan</span>
          </div>
          <span class="close quote">”</span>
      </div>
          </Grid>
        ))}
      </Grid>
      <Button
        onClick={handlePrev}
        startIcon={<ArrowBack />}
        sx={{ marginRight: 1,backgroundColor:'#00022e' ,color:'white' , margin:'10px' }}
      >
        Previous
      </Button>
      <Button
      disableElevation
      disableRipple
        sx={{backgroundColor:'#00022e' ,color:'white' , margin:'10px' }}
        onClick={handleNext}
        endIcon={<ArrowForward />}
      >
        Next
      </Button>
      </Container>
    </>
  );
};

export default Quotes;
