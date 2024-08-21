import { Box, Container, Grid, Paper, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { FlexCenterColoum } from '../../common';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// DATA FROM data.js
import { choosedata } from '../../data/data';

const Choose = () => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"))
  const isSmallMobileView = useMediaQuery(theme.breakpoints.down("sm"));


  //STYLED COMPONENT

  const BoxStyle = styled('Box')({
    display: 'flex',
    height: { md: '250px', sm: '290px', xs: '270px', lg: '320px' },
    flexDirection: 'row',
    boxShadow: '5px rgba(110, 159, 182, 0.5)',
    borderRadius: '4px',
    '& > :not(style)': {
      width: '100%',
    }, transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.01)',
    }
  });
  return (
    <Container >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobileView ? 'column' : 'row',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <FlexCenterColoum  >
          <Typography sx={{ fontSize: isSmallMobileView ? "21px" : "40px", fontWeight: '700' }}>KEY FEATURES OF OUR BOOKS</Typography>
        </FlexCenterColoum>
      </Box>
      <Grid sx={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: '5px' }} container spacing={1}>
        {
          choosedata.map((ele) => (
            <Grid item lg={4} md={6} sm={6} xs={12} key={ele.id}>
              <BoxStyle>
                <Paper sx={{ display: 'flex', flexDirection: 'column', width: '40px' }} elevation={3}>
                  <Typography sx={{ fontSize: isMobileView ? "17px" : "20px", textAlign: 'center', fontWeight: '600', marginTop: '10px' }} >{ele.title}</Typography>
                  <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: isMobileView ? 'auto' : "220px" }}>
                    <LazyLoadImage
                      src={ele.img}
                      alt={ele.title}
                      width="100px"
                      height="100px"
                      style={{ marginRight: '10px', margin: '5px' }}
                      effect="blur"
                    />
                    <Box sx={{ marginTop: '0px' }}>
                      <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }} >
                        {ele.value &&  <li style={{ listStyle: 'circle', fontSize: isMobileView ? "11px" : "13px", fontFamily: 'roboto' }}>{ele.value}</li>}
                        {ele.value1 && <li style={{ listStyle: 'circle', fontSize: isMobileView ? "11px" : "13px", fontFamily: 'roboto' }}>{ele.value1}</li>}
                        {ele.value2 && <li style={{ listStyle: 'circle', fontSize: isMobileView ? "11px" : "13px", fontFamily: 'roboto' }}>{ele.value2}</li>}
                      </ul>
                    </Box>
                  </Box>
                </Paper>
              </BoxStyle>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default Choose;

