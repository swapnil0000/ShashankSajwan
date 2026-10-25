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
    { id: 0, label: "Prelims" },
    { id: 1, label: "Mains" },
 
  ];

  const datamains = [
    { id: 1, img: "/assets/syllubus/preassets/genstud1.webp",link:'https://drive.google.com/file/d/1v8T-ry1vMjx2qku9RcnRg7m8WKwbcWVB/view?usp=sharing' },
    { id: 2, img: "/assets/syllubus/preassets/genstud2.webp",link:'https://drive.google.com/file/d/1AgWORfMSJUxKge_E42DE9PjBrFH9nwO6/view?usp=sharing'  },
  ];

  const dataprelims = [
    { id: 1, img: "/assets/syllubus/mainsassets/genstud3.webp",link:"https://drive.google.com/file/d/1pAEi2O2RhftDZSQxMEg85EKgzOcu7CCs/view?usp=sharing" },
    { id: 2, img: "/assets/syllubus/mainsassets/genstud4.webp",link:"https://drive.google.com/file/d/1dfZQzulFkOGhcVFiZU51teSYzSux08uM/view?usp=sharing" },
    { id: 3, img: "/assets/syllubus/mainsassets/genstud5.webp",link:"https://drive.google.com/file/d/19m-7H3wJVSnUtMQu0lZvoCK3-LBIqXWC/view?usp=sharing" },
    { id: 4, img: "/assets/syllubus/mainsassets/genstud6.webp",link:'https://drive.google.com/file/d/1DMRNCB5Z8U4ZPY5pOM7uXYaKFbDU3UZ5/view?usp=sharing'  },

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
      sectionId="syllabus"
      title="UPSC"
      accent="Syllabus"
      subtitle="Official Prelims & Mains syllabus, decoded."
      tabs={[{ label: 'Prelims', items: datamains }, { label: 'Mains', items: dataprelims }]}
    />
  );
};

export default Material;
