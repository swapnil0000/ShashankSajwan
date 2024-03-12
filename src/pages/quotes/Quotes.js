import React from 'react';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Quotes = () => {
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

  const chunkArray = (array, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const chunkedData = chunkArray(data, 3); // Split data into chunks of 3

  return (
    <Container sx={{marginTop:'20px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'
  }}>
      <Typography variant='h2'>Quotes</Typography>
      <Carousel
        autoFocus={true}
        autoPlay={false}
        showArrows={true}
        showStatus={false}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
        useKeyboardArrows={true}
        axis='horizontal'
        width='890px' // Ensure horizontal scrolling
      >
        {chunkedData.map((chunk, index) => (
          <Grid key={index} container spacing={1} justifyContent="center">
            {chunk.map((ele) => (
              <Grid item lg={4} md={4} key={ele.id}>
                <Card sx={{
                  display: 'flex',
                  color:'white',
                  backgroundColor:'#00022e',
                  flexDirection: 'row',
                  width: '250px',
                  height: '200px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                  margin:'40px'
                }}>
                  <CardContent >
                    <Typography variant='caption'>
                    {ele.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Container>
  );
};

export default Quotes;
