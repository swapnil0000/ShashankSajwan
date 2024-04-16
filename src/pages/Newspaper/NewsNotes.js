import { Box, Container, Grid, Paper, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


const tabpanel = [
  { id: 0, img:"/assets/newspaper/newsnotes1.webp" },
  { id: 1, img:"/assets/newspaper/newsnotes2.webp" },
  { id: 2, img:"/assets/newspaper/newsnotes3.webp" },
  { id: 3, img:"/assets/newspaper/newsnotes4.webp" },
  { id: 4, img:"/assets/newspaper/newsnotes5.webp" },
  { id: 5, img:"/assets/newspaper/newsnotes6.webp" },
  { id: 6, img:"/assets/newspaper/newsnotes7.webp" },
  { id: 7, img:"/assets/newspaper/newsnotes8.webp" },
  { id: 8, img:"/assets/newspaper/newsnotes9.webp" },
  { id: 9, img:"/assets/newspaper/newsnotes10.webp" },
  { id: 10, img:"/assets/newspaper/newsnotes11.webp" },
  { id: 11, img:"/assets/newspaper/newsnotes12.webp" },
  { id: 12, img:"/assets/newspaper/newsnotes13.webp" },
  { id: 13, img:"/assets/newspaper/newsnotes14.webp" },
  { id: 14, img:"/assets/newspaper/newsnotes15.webp" },
];


const tabData = [
  { id: 0, label: "APRIL 2024" },
];


const Optional = () => {
  const [value, setValue] = useState(0);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  };
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  
  const renderGridItems = (data) => (
    <Grid container>
      {data.map(item => (
        <Grid key={item.id} item xs={12} sm={6} md={6} lg={4} sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
       
          <Paper sx={{ width: 250, height: 140, display: 'flex', flexDirection: 'column', margin: '5px', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img  style={{ width: '100%', backgroundColor: 'transparent' }} src={item.img} alt={`Image ${item.id}`}/>
            </a>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box>
    <Box  className="material-page" sx={{ width: '100%', marginTop: isMobileView ? "100px" : "110px", position: 'relative', height: '150px', backgroundImage: "linear-gradient( 26.3deg ,rgba(8,24,68,1) 87.6%   ,rgba(0,119,182,1) 9.6%)" }}>
      <Typography variant="h4"  sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', fontSize: isMobileView ? "30px" : "50px" }}>
         NEWSPAPER NOTES
      </Typography>
    </Box>
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', marginTop: '10px', display: 'flex', marginBottom: isMobileView ? '10px' : '200px', flexDirection: isMobileView ? "column" : 'row', justifyContent: 'space-evenly', width: '100%' }}>
      {!isMobileView && (
        <Tabs orientation={isMobileView ? "horizontal" : 'vertical'} value={value} onChange={handleChange} variant="scrollable" aria-label="Vertical tabs example" sx={{ height: isMobileView ? "" : '600px', marginLeft: '10px', padding: '10px', width: isMobileView ? "100%" : "500px", display: 'flex', alignItems: 'center', justifyContent: isMobileView ? "space-between" : "", backgroundColor: isMobileView ? "" : 'rgba(8,24,68,1)', borderRadius: '10px', borderColor: 'white' }}>
          {tabData.map(tab => (
            <Tab key={tab.id} label={tab.label} {...a11yProps(tab.id)} sx={{ bgcolor: value === tab.id ? 'lightblue' : 'white', color: 'black', marginRight: isMobileView ? '5px' : '15px', marginBottom: '20px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} />
          ))}
        </Tabs>
      )}
      
      {isMobileView && (
        <Box sx={{  bgcolor: 'background.paper',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center' }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="scrollable force tabs example" sx={{ width: '100%' }}>
            {tabData.map(tab => (
              <Tab key={tab.id} label={tab.label} {...a11yProps(tab.id)} sx={{ bgcolor: value === tab.id ? 'lightblue' : 'white', color: 'black', marginRight: '10px', marginBottom: '10px', marginLeft: '10px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', maxWidth: '300px' }} />
            ))}
          </Tabs>
        </Box>
      )}
      <Box sx={{ width: '100%' , display:'flex',flexDirection:'column'}}>
      {tabData.map((tab, index) => (
        <TabPanel key={tab.id} value={value} index={index} sx={{ marginLeft: isMobileView ? '' : '20px', marginRight: isMobileView ? '' : '20px', marginTop: isMobileView ? '10px' : '' }}>
          {value === 0 && renderGridItems(tabpanel)}
        </TabPanel>
      ))}
      </Box>
    </Box>
  </Box>
  )
}

export default Optional