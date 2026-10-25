import ResourceLayout from '../../components/ui/ResourceLayout';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../Materials/material.css"
import { Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
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
        <Box >
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
    { id: 0, label: "Prelims" },
    { id: 1, label: "Mains" },
 
  ];

  const datamains = [
    { id: 1, img: "/assets/pyqs/prelimsasset/prelims1.webp",link:"https://drive.google.com/file/d/1QopEZrk281Daot___wQxBigXJMtJiyfS/view?usp=sharing" },
    { id: 2, img: "/assets/pyqs/prelimsasset/prelims2.webp",link:"https://drive.google.com/file/d/1bHwt-GXFIBWa3DEnH6zcWbDzzAhXrAnY/view?usp=sharing"  },
    { id: 3, img: "/assets/pyqs/prelimsasset/prelims3.webp"  },
    { id: 4, img: "/assets/pyqs/prelimsasset/prelims4.webp" },
  ];

  const dataprelims = [
    { id: 1, img: "/assets/pyqs/mainsassets/mains1.webp",link:"https://drive.google.com/file/d/1gwkGijCf362_zm0jTY1hG7dZpbh85qOR/view?usp=sharing" },
    { id: 2, img: "/assets/pyqs/mainsassets/mains2.webp",link:"https://drive.google.com/file/d/10SJfwvwYICnkjsnQSV04tVlHAAS9XtMe/view?usp=sharing" },
    { id: 3, img: "/assets/pyqs/mainsassets/mains3.webp" },
    { id: 4, img: "/assets/pyqs/mainsassets/mains4.webp"  },

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
    <ResourceLayout
      sectionId="pyqs"
      title="Previous Year"
      accent="Questions"
      subtitle="UPSC CSE Prelims & Mains question papers."
      tabs={[{ label: 'Prelims', items: datamains }, { label: 'Mains', items: dataprelims }]}
    />
  );
};

export default Material;
