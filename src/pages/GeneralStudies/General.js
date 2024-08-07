import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../Materials/material.css"
import { Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
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
    { id: 4, label: "Science & Tech" },
    { id: 5, label: "Environment" },
  ];

  const data = [
    { id: 1,val:"Indian National Movement",link:'https://drive.google.com/file/d/1c0deMO_p-XnsnkI4Pmi57x9r7s2IK7P1/view?usp=sharing' },
    { id: 2,val:"Modern Timeline",link:'https://drive.google.com/file/d/1V2q3aTclTbaPTtCgDHHsOmRY7da6kwC_/view?usp=sharing'  },
  ];

  const dataPolitical = [
    { id: 1,val:"Important Articles",link:'https://drive.google.com/file/d/1hokuBS1wSfyh1Vjy_k98VZoWmnJNvj_F/view?usp=sharing' },
    { id: 2,val:"Important Amendments", link:'https://drive.google.com/file/d/1J6hiELlpZ5yJrBAemkhCiRyFuG60dIUC/view?usp=sharing' },
    { id: 3,val:"Constitutional Bodies", link:"https://drive.google.com/file/d/1Y2aHw5p3wmYH-nTLJP56gxujHAgP2Ioz/view?usp=sharing" },
  ];

  const dataGeo = [
    { id: 1,val:"Indian Coastline", link:"https://drive.google.com/file/d/1Ppj6NLubQU54zhUqlP2iznMHk24hpSBx/view?usp=sharing" },
    { id: 2,val:"Indus River System",link:"https://drive.google.com/file/d/1ank3_cvdBisP9A9JuF84psNhTIX2_1ZJ/view?usp=sharing" },
   
  ];

  const dataEco = [
    { id: 1,val:"Important Terms",link:"https://drive.google.com/file/d/14vkEnIL9VdN6X8OkVCv6zBNTW-VS0rt8/view?usp=sharing" },
    { id: 2,val:"GDP & GNP",link:"https://drive.google.com/file/d/1smzDSlYbxXIoZRfPqbJAhS9GlF_iwmsm/view?usp=sharing" },
   
  ];

  const science = [
    { id: 1,val:"ISRO", link:'https://drive.google.com/file/d/13xnmYhgOLJE1plburGhMDHQRODOWtScF/view?usp=sharing' },
    { id: 2,val:"Indian Missiles",link:'https://drive.google.com/file/d/1tOs5qxMTnCfQwwENIex7LokmTOtnZAZ0/view' },
  ];

  const Environment = [
    { id: 1,val:"Ramsar Sites", link:'https://drive.google.com/file/d/1grDar8stFL_jtlyK3qMDvvqO3Pyhg2vb/view?usp=sharing' },
    { id: 2,val:"National Parks", link:'https://drive.google.com/file/d/1dNoH_bBjUne99TygwpDGOkPuo5nRMw3y/view?usp=sharing' },
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
        <Grid key={item.id} item xs={12} sm={6} md={6} lg={4} sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
          <Paper sx={{ width: 250,justifyContent:"center", height: 85, display: 'flex', flexDirection: 'column', margin: '5px', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' },backgroundColor:'cornflowerblue' }}>
            <a style={{textDecoration:'none'}} href={item.link} target="_blank" rel="noopener noreferrer">
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',width:'100%',gap:'30px'}}>
            <img style={{width:'60px',margin:'2px'}} src="/assets/icon.png" />
             <Box>
             <Typography sx={{color:'white',fontSize:'23px',display:'flex',fontWeight:'500',margin:'2px',gap:'30px'}}>{item.val}</Typography>
             </Box>
            </Box>
            </a>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box>
      <Box className="material-page" sx={{ width: '100%', marginTop: isMobileView ? "100px" : "110px", position: 'relative', height: '150px', backgroundImage: "linear-gradient( 26.3deg ,rgba(8,24,68,1) 87.6%   ,rgba(0,119,182,1) 9.6%)" }}>
        <Typography variant="h4"  sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', fontSize: isMobileView ? "26px" : "50px" }}>
          General Studies
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
                <Tab key={tab.id} label={tab.label} {...a11yProps(tab.id)} sx={{ bgcolor: value === tab.id ? 'lightblue' : 'white', color: 'black', marginRight: '10px', marginBottom: '10px', marginLeft: '10px', borderRadius: '8px', width: isMobileView ? "100%" : "200px", boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', maxWidth: '100%' }} />
              ))}
            </Tabs>
          </Box>
        )}
        <Box sx={{ width: '100%' }}>
          {tabData.map((tab, index) => (
            <TabPanel key={tab.id} value={value} index={index} sx={{ marginLeft: isMobileView ? '' : '20px', marginRight: isMobileView ? '' : '20px', marginTop: isMobileView ? '10px' : '' }}>
              {value === 0 && renderGridItems(dataPolitical)}
              {value === 1 && renderGridItems(dataEco)}
              {value === 2 && renderGridItems(data)}
              {value === 3 && renderGridItems(dataGeo)}
              {value === 4 && renderGridItems(science)}
              {value===5 && renderGridItems(Environment)}
            
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Material;
