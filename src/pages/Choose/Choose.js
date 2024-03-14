import { Box, Card, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import modern from "../Choose/modern.png";
import study from "../Choose/study.png";
import trackrecord from "../Choose/trackrecord.png";
import experience from "../Choose/experience.png";

const Choose = () => {
  const choosedata = [
    {
      id: 1,
      img: modern,
      title: 'Modern Facilities',
      value: 'Our institute has modern facilities like air-conditioned classrooms, a library with many books, a computer lab, and online study material. These resources create a conducive learning environment for our students.'
    },
    {
      id: 2,
      img: study,
      title: 'Comprehensive Courses',
      value: 'Our courses are comprehensive, covering all the topics required for the IAS exam. We make sure our students understand the subject well and give them tests to check how they are doing.'
    },
    {
      id: 3,
      img: trackrecord,
      title: 'Track Record of Success',
      value: 'We have a proven track record of success, with numerous students clearing the IAS exam under our guidance. Our faculty has helped students achieve high ranks in the exam, and our alumni hold prestigious positions in the civil service.'
    },
    {
      id: 4,
      img: experience,
      title: '15 years of Excellence',
      value: 'We hold the 1st position among the list of top UPSC Coaching Institutes in India. With Completely devoted to UPSC Civil Services preparation and focuses on aspirants preparing in both Hindi and English mediums.'
    }
  ];

  return (
    <Container sx={{ backgroundColor: '#fbfbf9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', marginBottom: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', margin: '30px' }}>
        <Box>
          <Typography variant='h6'>Why Choose us for</Typography>
          <Typography variant='h3'>IAS Coaching in Dehradun?</Typography>
        </Box>
        <Box>
          <Typography variant='h6'>At Shashank Sajwan IAS Coaching Center,<br />
          we are proud to be considered the No.1 IAS Coaching institute in Dehradun. <br /> Here are some of the reasons why aspirants choose us for IAS Coaching in Delhi:</Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {
          choosedata.map((ele) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={ele.id}>
            <Box
            sx={{
              display: 'flex',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center',
              flexWrap: 'wrap',
              '& > :not(style)': {
                width: 350,
                height:320,
              },
            }}
          >
            <Paper sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} elevation={6}>
              <img style={{width:'110px',margin:'5px'}} src={ele.img}/>
              <Typography variant='body1'>{ele.title}</Typography>
              <Typography sx={{margin:'10px',fontSize:'12px'}} >{ele.value}</Typography>
            </Paper>
          </Box>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default Choose;


// <Card sx={{ maxWidth: 370 }}>
// <CardMedia
//   component="img"
//   sx={{ objectFit: 'cover', height: '150px' }} // Specify object-fit and height
//   src={ele.img}
//   alt={ele.title}
// />
// <CardContent>
//   <Typography gutterBottom variant="h5" component="div">
//     {ele.title}
//   </Typography>
//   <Typography variant="body2" color="text.secondary">
//     {ele.value}
//   </Typography>
// </CardContent>
// </Card>