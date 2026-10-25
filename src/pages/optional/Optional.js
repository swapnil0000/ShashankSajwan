import ResourceLayout from '../../components/ui/ResourceLayout';
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
    img:"/assets/optionals.webp",
    link:"https://drive.google.com/file/d/1JPmo1rFOLLhZDfmpqvMSIpt7bqDyR5yR/view?usp=sharing"
  },
  {
    id:2,
    img:"/assets/optionals1.webp",
    link:"https://drive.google.com/file/d/1qGhT4ObXqIQ9cBZ6K1EfkPOXuF-iyhrS/view?usp=sharing"
  },
]

const tabData = [
  { id: 0, label: "Optionals" },
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
      <Grid key={item.id} item xs={12} sm={6} md={6} lg={4} sx={{marginTop:'10px'}}>
        <Paper sx={{ width: 250, height: 140,                                                                                                                                                                                                                                     transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
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
      sectionId="optional"
      title="Optional"
      accent="Subjects"
      subtitle="Resources for your UPSC optional paper."
      tabs={[{ label: 'Optionals', items: data }]}
    />
  );
}

export default Optional