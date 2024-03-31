import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import class6 from "../Materials/class6.webp"
import class7 from "../Materials/class7.webp"

import class8 from "../Materials/class8.webp"
import noteslogo from "../Materials/notesicon.png"
import class9 from "../Materials/class9.png"
import { useLocation, useNavigate } from 'react-router-dom';
import Test from '../../Test';


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
        <Box sx={{ p: 3 }}>
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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const NewsNotes = () => {
  const [value, setValue] = React.useState(0);

  const data = [
    {
      id: 1,
      img: noteslogo,
      val: 'Historical events for class 6.'
    },
    {
      id: 2,
      img: noteslogo,
      val: 'Historical events for class 7.'
    },
    {
      id: 3,
      img: noteslogo,
      val: 'Historical events for class 8.'
    },
    {
      id: 4,
      img: noteslogo,
      val: 'Historical events for class 9.'
    },
    {
      id: 5,
      img: noteslogo,
      val: 'Historical events for class 10.'
    },
    {
      id: 6,
      img: noteslogo,
      val: 'Historical events for class 11.'
    },
    {
      id: 7,
      img: noteslogo,
      val: 'Historical events for class 12.'
    }
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"))


  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navigate = useNavigate();

  return (
    <Box>
    <Box sx={{ 
      width: '100%', 
      marginTop: isMobileView?"100px":"110px", 
      position: 'relative', 
      height:'150px',
      backgroundImage: "linear-gradient( 26.3deg ,rgba(8,24,68,1) 87.6%   ,rgba(0,119,182,1) 9.6%)",
    }}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
           fontSize:isMobileView?"20px":"50px",
          padding: '10px 20px',
        }}
      >
        NEWPAPER NOTES
      </Typography>
    </Box>      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', marginTop: '10px', display: 'flex', marginBottom: isMobileView ? '10px' : '200px', display: 'flex', flexDirection: isMobileView ? "column" : 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}
      >
      {!isMobileView && (
        <Tabs
        orientation={isMobileView ? "horizontal" : 'vertical'}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        aria-label="Vertical tabs example"
        sx={{ height: isMobileView ? "" : '600px', marginLeft: '10px', padding: '10px', width: isMobileView ? "100%" : "500px", display: 'flex', alignItems: 'center', justifyContent: isMobileView ? "space-between" : "", backgroundColor: isMobileView ? "" : 'rgba(8,24,68,1)', borderRadius: '10px',  borderColor: 'white' }}
      >
        <Tab label="January" {...a11yProps(0)} sx={{ bgcolor: value === 0 ? 'lightblue' : 'white', fontWeight: '600', marginRight: '10px', color: 'black', marginBottom: '20px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", marginTop: isMobileView ? "0px" : "20px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} />
        <Tab label="February" {...a11yProps(1)} sx={{ bgcolor: value === 1 ? 'lightblue' : 'white', color: 'black', marginRight: '10px', marginBottom: '20px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} />
        <Tab label="March" {...a11yProps(2)} sx={{ bgcolor: value === 2 ? 'lightblue' : 'white', color: 'black', marginRight: '10px', marginBottom: '20px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} />
        <Tab label="April" {...a11yProps(3)} sx={{ bgcolor: value === 3 ? 'lightblue' : 'white', color: 'black', marginRight: '15px', marginBottom: '20px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} />
      </Tabs>
      )}
      {isMobileView && (
        <Box sx={{ maxWidth: { xs: 350, sm: 780 }, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{width:'100%'}}
        >
        <Tab label="January" {...a11yProps(0)} sx={{ bgcolor: value === 0 ? 'lightblue' : 'white', fontWeight: '600', marginRight: '10px', color: 'black', marginBottom: '20px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", marginTop: isMobileView ? "0px" : "20px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} />
        <Tab label="February" {...a11yProps(1)} sx={{ bgcolor: value === 1 ? 'lightblue' : 'white', color: 'black', marginRight: '10px', marginBottom: '20px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} />
        <Tab label="March" {...a11yProps(2)} sx={{ bgcolor: value === 2 ? 'lightblue' : 'white', color: 'black', marginRight: '10px', marginBottom: '20px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} />
        <Tab label="April" {...a11yProps(3)} sx={{ bgcolor: value === 3 ? 'lightblue' : 'white', color: 'black', marginRight: '15px', marginBottom: '20px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} />
      </Tabs>
      </Box>
      )}
       
        <Box sx={{ marginLeft: '10px', borderRadius: '10px' }}>
          <TabPanel value={value} index={0} >
            <Grid container  >
              {data.map(item => (
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} key={item.id} item xs={12} sm={6} md={4} lg={4}>
                  <Paper
                    sx={{
                      width: 300,
                      height: 150,
                      display: 'flex',
                      flexDirection: 'column',
                      margin: '5px',
                      transition: 'transform 0.2s',
                      boxShadow: '5px 5px 10px 5px rgba(110, 159, 182, 0.5)', // Use boxShadow for shadow effect
                      '&:hover': {
                        transform: 'scale(1.05)', // Apply zoom effect on hover
                        boxShadow: '4px 4px 12px rgba(100, 119, 182, 0.7)', // Increase shadow on hover
                      },
                    }}
                  >
                    <img style={{ width: '50px', backgroundColor: 'transparent', marginBottom: '10px' }} src={item.img} alt={item.img} />
                    <Typography sx={{ fontWeight: '600', margin: '5px' }}>{item.val}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container  >
              {data.map(item => (
                <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
                  <Paper  sx={{  width: 300, height: 150, display:'flex',flexDirection:'column',margin:'5px',transition: 'transform 0.2s', // Add transition for smooth effect
                  '&:hover': {
                  transform:'scale(1.05)', // Apply zoom effect on hover
                  }}}>
                    <img style={{ width: '50px', backgroundColor: 'transparent' , marginBottom:'10px'}} src={item.img} />
                    <Typography sx={{fontWeight:'600',margin:'5px'}}>{item.val}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}


export default NewsNotes;
