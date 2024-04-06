import React from 'react';
import { Box, Container, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import notes1 from "../Notespresent/homenotes1.webp";
import notes2 from "../Notespresent/homenotes2.webp";
import notes3 from "../Notespresent/homenotes3.webp";
import notes4 from "../Notespresent/homenotes4.webp";
import notes5 from "../Notespresent/homenotes5.webp";
import notes6 from "../Notespresent/homenotes6.webp";
import "../Notespresent/notesStyle.css";

const Course = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '50px' }}>
      <Typography sx={{ fontWeight: '700', fontSize: isXs ? '25px' : '40px', marginBottom: '10px' }}>NOTES PROVIDED</Typography>
      <Grid container spacing={2} justifyContent="center">
        {[notes1, notes2, notes3, notes4, notes5, notes6].map((note, index) => (
          <Grid item xs={isXs ? 12 : (isSm ? 6 : 4)} key={index}>
              <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={note} alt={`Note ${index + 1}`} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Course;
