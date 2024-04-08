import { Box, Container, Grid, Paper, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import genstudies1 from "../GeneralStudies/generalstud1.webp"
import genstudies2 from "../GeneralStudies/generalstud2.webp"
import genstudies3 from "../GeneralStudies/generalstud3.webp"
import genstudies4 from "../GeneralStudies/generalstud4.webp"
import genstudies5 from "../GeneralStudies/generalstud5.webp"
import PropTypes from 'prop-types';

import { useLocation, useNavigate } from 'react-router-dom'

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
        <Box sx={{ p: 3,marginLeft:'50px' }}>
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

const data=[
  {
    id:1,
    img:genstudies1
  },
  {
    id:2,
    img:genstudies2
  },
  {
    id:3,
    img:genstudies3
  },
  {
    id:4,
    img:genstudies4
  },
  {
    id:5,
    img:genstudies5
  },
]


const tabData = [
  { id: 0, label: "Polity" },
  { id: 1, label: "Economics" },
  { id: 2, label: "History" },
  { id: 3, label: "Geography" },
  { id: 6, label: "Environment" }
];

const General = () => {
  const data=[
    {
      id:1,
      img:genstudies1
    },
    {
      id:2,
      img:genstudies2
    },
    {
      id:3,
      img:genstudies3
    },
    {
      id:4,
      img:genstudies4
    },
    {
      id:5,
      img:genstudies5
    },
  ]
  
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
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
  return (
    <Box>
    <Box  className="material-page" sx={{ width: '100%', marginTop: isMobileView ? "100px" : "110px", position: 'relative', height: '150px', backgroundImage: "linear-gradient( 26.3deg ,rgba(8,24,68,1) 87.6%   ,rgba(0,119,182,1) 9.6%)" }}>
      <Typography variant="h4"  sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', fontSize: isMobileView ? "30px" : "50px" }}>
        GENERAL STUDIES
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
            {data.map(tab => (
              <Tab key={tab.id} label={tab.label} {...a11yProps(tab.id)} sx={{ bgcolor: value === tab.id ? 'lightblue' : 'white', color: 'black', marginRight: '10px', marginBottom: '10px', marginLeft: '10px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', maxWidth: '300px' }} />
            ))}
          </Tabs>
        </Box>
      )}
      <Box sx={{ width: '100%' , display:'flex',flexDirection:'column'}}>
         
      </Box>
    </Box>
  </Box>

  )
}

export default General