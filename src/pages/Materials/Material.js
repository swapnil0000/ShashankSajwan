import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import history from "../Materials/history.jpg"

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

const Material = () => {
  const [value, setValue] = React.useState(0);

  const data = [
    {
      id: 1,
      img: history,
      val: 'Historical events for class 6.'
    },
    {
      id: 2,
      img: history,
      val: 'Historical events for class 7.'
    },
    {
      id: 3,
      img: history,
      val: 'Historical events for class 8.'
    },
    {
      id: 4,
      img: history,
      val: 'Historical events for class 9.'
    },
    {
      id: 5,
      img: history,
      val: 'Historical events for class 10.'
    },
    {
      id: 6,
      img: history,
      val: 'Historical events for class 11.'
    },
    {
      id: 7,
      img: history,
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
   const tabdata=[{
    id:0,
    label:"Polity",
   },
   {
    id:1,
    label:"Economics",
   },
   {
    id:2,
    label:"History",
   },
   {
    id:3,
    label:"Geography",
   },
  ]
  return (
    <Box>
      <Test />
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', marginTop: '10px', display: 'flex', marginBottom: isMobileView ? '10px' : '120px', display: 'flex', flexDirection: isMobileView ? "column" : 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}
      >
        <Tabs
        orientation={isMobileView ? "horizontal" : 'vertical'}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{ height: isMobileView ? "" : '530px', marginLeft: '10px', padding: '8px', width: isMobileView ? "100%" : "500px", display: 'flex', alignItems: 'center', justifyContent: isMobileView ? "space-between" : "", backgroundColor: isMobileView ? "" : 'rgba(8,24,68,1)', borderRadius: '10px',  borderColor: 'white' }}
      >

      {tabdata.map((ele)=>(
        <Tab label={ele.label} {...a11yProps(ele.id)} sx={{ bgcolor: value === ele.id ? 'lightblue' : 'white', fontWeight: '600', marginRight: '10px', color: 'black', marginBottom: '20px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", marginTop: isMobileView ? "0px" : "20px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} />
      ))}

      </Tabs>

      
       
        <Box sx={{ marginLeft: '10px', borderRadius: '10px' }}>
        {data.map((item, index) => (
          <TabPanel key={item.id} value={value} index={index}>
            <Grid container>
              {data.map((item, index) => (
                <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} key={item.id} item xs={12} sm={6} md={4} lg={4}>
                  <Paper
                    sx={{
                      width: 300,
                      height: 150,
                      display: 'flex',
                      flexDirection: 'column',
                      margin: '15px',
                      transition: 'transform 0.2s',
                      boxShadow: '5px 5px 10px 5px rgba(110, 159, 182, 0.5)',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '4px 4px 12px rgba(100, 119, 182, 0.7)',
                      },
                    }}
                  >
                    <img style={{ width: '100%', backgroundColor: 'transparent', marginBottom: '10px' }} src={item.img} alt={item.img} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        ))}     
         </Box>
      </Box>
    </Box>
  );
}


export default Material;
