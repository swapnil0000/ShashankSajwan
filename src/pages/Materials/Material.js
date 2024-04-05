import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Test from '../../Test';
import history1 from "../Materials/historyassest/history6.webp";
import history2 from "../Materials/historyassest/history7.webp";
import history3 from "../Materials/historyassest/history8.webp";
import history4 from "../Materials/historyassest/history9.webp";
import history5 from "../Materials/historyassest/history10.webp";
import history6 from "../Materials/historyassest/history12part1.webp";
import history7 from "../Materials/historyassest/history12part2.webp";
import history8 from "../Materials/historyassest/history12part3.webp";
import polity1 from "../Materials/polityassets/polity1.webp";
import polity2 from "../Materials/polityassets/polity2.webp";
import polity3 from "../Materials/polityassets/polity3.webp";
import polity4 from "../Materials/polityassets/polity4.webp";
import polity5 from "../Materials/polityassets/polity5.webp";
import polity6 from "../Materials/polityassets/polity6.webp";
import polity7 from "../Materials/polityassets/polity7.webp";
import polity8 from "../Materials/polityassets/polity8.webp";
import polity9 from "../Materials/polityassets/polity9.webp";
import geo1 from "../Materials/geoasset/geo1.webp";
import geo2 from "../Materials/geoasset/geo2.webp";
import geo3 from "../Materials/geoasset/geo3.webp";
import geo4 from "../Materials/geoasset/geo4.webp";
import geo5 from "../Materials/geoasset/geo5.webp";
import geo6 from "../Materials/geoasset/geo6.webp";
import geo7 from "../Materials/geoasset/geo7.webp";
import geo8 from "../Materials/geoasset/geo8.webp";
import geo9 from "../Materials/geoasset/geo9.webp";
import eco1 from "../Materials/ecoasset/eco1.webp";
import eco2 from "../Materials/ecoasset/eco2.webp";
import eco3 from "../Materials/ecoasset/eco3.webp";
import eco4 from "../Materials/ecoasset/eco4.webp";
import soc1 from "../Materials/socioasset/socio1.webp";
import soc2 from "../Materials/socioasset/socio2.webp";
import soc3 from "../Materials/socioasset/socio3.webp";
import soc4 from "../Materials/socioasset/socio4.webp";
import art from "../Materials/arts.webp";
import science from "../Materials/science.webp";

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

const Material = () => {
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

  const tabData = [
    { id: 0, label: "Polity" },
    { id: 1, label: "Economics" },
    { id: 2, label: "History" },
    { id: 3, label: "Geography" },
    { id: 4, label: "Sociology" },
    { id: 5, label: "Art & Culture" },
    { id: 6, label: "Science" }
  ];

  const data = [
    { id: 1, img: history1, val: 'Historical events for class 6.' },
    { id: 2, img: history2, val: 'Historical events for class 7.' },
    { id: 3, img: history3, val: 'Historical events for class 8.' },
    { id: 4, img: history4, val: 'Historical events for class 9.' },
    { id: 5, img: history5, val: 'Historical events for class 10.' },
    { id: 6, img: history6, val: 'Historical events for class 11.' },
    { id: 7, img: history7, val: 'Historical events for class 12.' },
    { id: 8, img: history8, val: 'Historical events for class 12.' }
  ];

  const dataPolitical = [
    { id: 1, img: polity1, val: 'Historical events for class 6.' },
    { id: 2, img: polity2, val: 'Historical events for class 7.' },
    { id: 3, img: polity3, val: 'Historical events for class 8.' },
    { id: 4, img: polity4, val: 'Historical events for class 9.' },
    { id: 5, img: polity5, val: 'Historical events for class 10.' },
    { id: 6, img: polity6, val: 'Historical events for class 11.' },
    { id: 7, img: polity7, val: 'Historical events for class 12.' },
    { id: 8, img: polity8, val: 'Historical events for class 12.' },
    { id: 9, img: polity9, val: 'Historical events for class 12.' }
  ];

  const dataGeo = [
    { id: 1, img: geo1, val: 'Historical events for class 6.' },
    { id: 2, img: geo2, val: 'Historical events for class 7.' },
    { id: 3, img: geo3, val: 'Historical events for class 8.' },
    { id: 4, img: geo4, val: 'Historical events for class 9.' },
    { id: 5, img: geo5, val: 'Historical events for class 10.' },
    { id: 6, img: geo6, val: 'Historical events for class 11.' },
    { id: 7, img: geo7, val: 'Historical events for class 12.' },
    { id: 8, img: geo8, val: 'Historical events for class 12.' },
    { id: 9, img: geo9, val: 'Historical events for class 12.' }
  ];

  const dataEco = [
    { id: 1, img: eco1, val: 'Historical events for class 6.' },
    { id: 2, img: eco2, val: 'Historical events for class 7.' },
    { id: 3, img: eco3, val: 'Historical events for class 8.' },
    { id: 4, img: eco4, val: 'Historical events for class 9.' }
  ];

  const dataSocio = [
    { id: 1, img: soc1, val: 'Historical events for class 6.' },
    { id: 2, img: soc2, val: 'Historical events for class 7.' },
    { id: 3, img: soc3, val: 'Historical events for class 8.' },
    { id: 4, img: soc4, val: 'Historical events for class 9.' }
  ];
  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  };


  const renderGridItems = (data) => (
    <Grid container>
      {data.map(item => (
        <Grid key={item.id} item xs={12} sm={6} md={6} lg={4}>
          <Paper sx={{ width: 250, height: 140, display: 'flex', flexDirection: 'column', margin: '5px', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
            <img style={{ width: '100%', backgroundColor: 'transparent' }} src={item.img} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box>
      <Box sx={{ width: '100%', marginTop: isMobileView ? "100px" : "110px", position: 'relative', height: '150px', backgroundImage: "linear-gradient( 26.3deg ,rgba(8,24,68,1) 87.6%   ,rgba(0,119,182,1) 9.6%)" }}>
        <Typography variant="h4"  sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', fontSize: isMobileView ? "30px" : "50px" }}>
          NCERT NOTES
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
              {value === 0 && renderGridItems(dataPolitical)}
              {value === 1 && renderGridItems(dataEco)}
              {value === 2 && renderGridItems(data)}
              {value === 3 && renderGridItems(dataGeo)}
              {value === 4 && renderGridItems(dataSocio)}
              {value === 5 && <img src={art} alt="art" style={{ width: '300px' }} />}
              {value === 6 && <img src={science} alt="science" style={{ width: '300px' }} />}
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Material;
