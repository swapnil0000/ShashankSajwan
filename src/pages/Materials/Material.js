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

import class9 from "../Materials/class9.png"


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

const Material=() =>{
  const [value, setValue] = React.useState(0);

  const data=[{
    id:1,
    img:class6},
    {
      id:2,
      img:class7},
      {
        id:3,
        img:class8},
        {
          id:4,
          img:class9},
          {
            id:6,
            img:class6},
            {
              id:7,
              img:class6},
    {
    id:5,
    img:class6,
  }]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box>
    <Typography sx={{marginTop:'120px',display:'flex',flexDirection:'row',justifyContent:'center',fontSize:'40px',fontWeight:'600'}}>NCERT NOTES</Typography>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',marginBottom:isMobileView?'10px':'200px',display:'flex',flexDirection:isMobileView?"column":'row',justifyContent:'space-evenly',width:'100%' }}
    >
      <Tabs
        orientation={isMobileView?"horizontal":'vertical'}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        aria-label="Vertical tabs example"
        sx={{height:isMobileView?"180px":"600px",marginLeft:'10px' ,padding:'10px',width:isMobileView?"100%":"500px",display:'flex',alignItems:'center',justifyContent:'center', backgroundColor:'#212529',borderRadius:'10px'}}
      >
      <Tab label="Polity" {...a11yProps(0)} sx={{ bgcolor: value === 0 ? 'lightblue' : 'white',fontWeight:'600',color:'black',marginBottom:'20px',borderRadius:'8px',width:'200px' ,marginTop:'10px'}} />
      <Tab label="Economical" {...a11yProps(1)} sx={{ bgcolor: value === 1 ? 'lightblue' : 'white' ,color:'black',marginBottom:'20px',borderRadius:'8px',width:'200px' }} />
      <Tab label="History" {...a11yProps(2)} sx={{ bgcolor: value === 2 ? 'lightblue' : 'white',color:'black',marginBottom:'20px'  ,borderRadius:'8px',width:'200px'}} />
      <Tab label="Geography" {...a11yProps(3)} sx={{ bgcolor: value === 3 ? 'lightblue' : 'white' ,color:'black',marginBottom:'20px',borderRadius:'8px',width:'200px' }} />
      </Tabs>
     <Box sx={{marginLeft:'10px',borderRadius:'10px'}}>
      <TabPanel value={value}  index={0} >
      <Grid container  >
        {data.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
          <Paper  sx={{  width: 300, height: 150, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:'5px',transition: 'transform 0.2s', // Add transition for smooth effect
          '&:hover': {
          transform:'scale(1.05)', // Apply zoom effect on hover
          }}}>
          <img style={{ width: '90px', backgroundColor: 'grey' , marginBottom:'10px'}} src={item.img} />
          <Button variant='text'>Download</Button>
        </Paper>
          </Grid>
        ))}
      </Grid>
      </TabPanel>
      <TabPanel value={value}  index={1}>
      <Grid container sx={{gap:'10px'}}  >
        {data.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
          <Paper  sx={{  width: 300, height: 150, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:'5px',transition: 'transform 0.2s', // Add transition for smooth effect
          '&:hover': {
          transform:'scale(1.05)', // Apply zoom effect on hover
          }}}>
          <img style={{ width: '90px', backgroundColor: 'grey' , marginBottom:'10px'}} src={item.img} />
          <Button variant='text'>Download</Button>
        </Paper>
          </Grid>
        ))}
      </Grid>
      </TabPanel>
      </Box>
      <TabPanel value={value}  index={2}>
      <Grid container >
        {data.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
          <Paper  sx={{  width: 300, height: 150, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:'5px',transition: 'transform 0.2s', // Add transition for smooth effect
          '&:hover': {
          transform:'scale(1.05)', // Apply zoom effect on hover
          }}}>
          <img style={{ width: '90px', backgroundColor: 'grey' , marginBottom:'10px'}} src={item.img} />
          <Button variant='text'>Download</Button>
        </Paper>
          </Grid>
        ))}
      </Grid>
      </TabPanel>
      <TabPanel value={value}  index={3}>
      <Grid container >
        {data.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
          <Paper  sx={{  width: 300, height: 150, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:'5px',transition: 'transform 0.2s', // Add transition for smooth effect
          '&:hover': {
          transform:'scale(1.05)', // Apply zoom effect on hover
          }}}>
          <img style={{ width: '90px', backgroundColor: 'grey' , marginBottom:'10px'}} src={item.img} />
          <Button variant='text'>Download</Button>
        </Paper>
          </Grid>
        ))}
      </Grid>
      </TabPanel>
    <TabPanel value={value} index={4}>
      <Grid container >
        {data.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
          <Paper  sx={{  width: 300, height: 150, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',margin:'5px',transition: 'transform 0.2s', // Add transition for smooth effect
          '&:hover': {
          transform:'scale(1.05)', // Apply zoom effect on hover
          }}}>
          <img style={{ width: '90px', backgroundColor: 'grey' , marginBottom:'10px'}} src={item.img} />
          <Button variant='text'>Download</Button>
        </Paper>
          </Grid>
        ))}
      </Grid>
    </TabPanel>
    </Box>
    </Box>
  );
}


export default Material