import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import React, { useState } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import course1 from "../Courseprovide/course1.png"
import course2 from "../Courseprovide/course2.png"

const CourseProvide = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;
  const data = [
    {
      id: 1,
      title: 'IAS Weekend Batches ',
      description: 'Our IAS Weekend batches are specifically for working professionals, who want to attend Weekly Classes for UPSC preparation in Delhi',
      imageUrl:course1,
    },
    {
      id: 2,
      title: 'UPSC-IAS Classroom / Online Live Classes',
      description: ' We offer IAS Classroom Courses (Regular Batches) & Live Online Classes for UPSC General Studies and Mains Optional subjects (Prelims and Mains) at Delhi to prepare students for civil services examination',
      imageUrl: course2,
    },
    {
      id: 3,
      title: 'UPSC Correspondence Course',
      description: 'We provide UPSC Correspondence Course (Postal Course) to Get access of our finest UPSC Study materials deliver at your doorstep.',
      imageUrl: course1,
    },
    {
      id: 4,
      title: 'UPSC Test Series',
      description: ' Join test series for UPSC prelims and Mains along with free mock tests to Boost your exam preparation and score well.',
      imageUrl: course1,
    },
  ];

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + cardsPerPage >= data.length ? 0 : prevIndex + cardsPerPage));
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - cardsPerPage < 0 ? data.length - cardsPerPage : prevIndex - cardsPerPage));
  };

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Courses Provided
      </Typography>
      <Grid sx={{

      }} container spacing={2}>
        {data.slice(startIndex, startIndex + cardsPerPage).map(card => (
          <Grid key={card.id} item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 330 , height:'300px'}}>
              <CardMedia
                component="img"
                height="140"
                image={card.imageUrl}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography fontSize='13px' >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
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
      dis
        sx={{backgroundColor:'#00022e' ,color:'white' , margin:'10px' }}
        onClick={handleNext}
        endIcon={<ArrowForward />}
      >
        Next
      </Button>
    </Container>
  );
};

export default CourseProvide;
