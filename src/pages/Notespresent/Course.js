import React from 'react';
import { Box, Container, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import notes1 from "../Notespresent/homenotes1.webp";
import notes2 from "../Notespresent/homenotes2.webp";
import notes3 from "../Notespresent/homenotes3.webp";
import notes4 from "../Notespresent/homenotes4.webp";
import notes5 from "../Notespresent/homenotes5.webp";
import notes6 from "../Notespresent/homenotes6.webp";
import { Link } from 'react-router-dom';
const data=[
  {
    id:1,
    img:notes1,
    path:'/syllabus'
  },
  {
    id:2,
    img:notes2,
    path:'/ncert'
  },
  {
    id:3,
    img:notes3,
    path:'/general',
  },
  {
    id:4,
    img:notes4,
    path:'/pyqs',
  },
  {
    id:5,
    img:notes5,
    path:'/optional',
  },
  {
    id:3,
    img:notes6,
    path:'/newsnotes',
  },

]
const Course = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%', marginTop: '50px' }}>
      <Typography sx={{ fontWeight: '700', fontSize: isXs ? '25px' : '40px', marginBottom: '10px' }}>NOTES PROVIDED</Typography>
     
      <Grid container spacing={1} justifyContent="center">
        {data.map((note) => (
          <Grid item xs={isXs ? 12 : (isSm ? 6 : 4)} key={note.id}>
          <Box sx={{width:'240px',height:'240px',width:'100%'}}>
             <Link to={note.path}>          
             <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={note.img}  />
             </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Course;
