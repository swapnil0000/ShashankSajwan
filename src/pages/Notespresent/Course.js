import React from 'react';
import { Box, Container, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
const data=[
  {
    id:1,
    img:"/assets/noteshome/homenotes1.webp",
    path:'/syllabus'
  },
  {
    id:2,
    img:'/assets/noteshome/homenotes2.webp',
    path:'/ncert'
  },
  {
    id:3,
    img:'/assets/noteshome/homenotes3.webp',
    path:'/general',
  },
  {
    id:4,
    img:'/assets/noteshome/homenotes4.webp',
    path:'/pyqs',
  },
  {
    id:5,
    img:'/assets/noteshome/homenotes5.webp',
    path:'/optional',
  },
  {
    id:3,
    img:'/assets/noteshome/homenotes6.webp',
    path:'/newsnotes',
  },

]
const Course = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width:isSm?"70%":"60%" ,justifyContent:'center', marginTop: '50px' }}>
      <Typography sx={{ fontWeight: '700', fontSize: isXs ? '25px' : '40px', marginBottom: '10px' }}>NOTES PROVIDED</Typography>
     
      <Grid container spacing={1} justifyContent="center">
        {data.map((note) => (
          <Grid  item xs={isXs ? 12 : (isSm ? 6 : 4)} key={note.id}>
          <Box sx={{width:'100%',height:'auto',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
             <Link to={note.path}>          
             <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={note.img}  />
             </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Course;
