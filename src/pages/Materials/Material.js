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
    <Container>
    <Typography sx={{marginTop:'140px',display:'flex',flexDirection:'row',justifyContent:'center',fontSize:'40px',fontWeight:'600'}}>NCERT NOTES</Typography>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',marginBottom:isMobileView?'10px':'200px',display:'flex',flexDirection:isMobileView?"column":'row',justifyContent:'space-between',width:'100%' }}
    >
      <Tabs
        orientation={isMobileView?"horizontal":'vertical'}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        aria-label="Vertical tabs example"
        sx={{height:isMobileView?"180px":"600px",marginLeft:'10px' ,padding:'10px',width:isMobileView?"100%":"400px",display:'flex',alignItems:'center',justifyContent:'center'}}
      >
      <Tab label="Polity" {...a11yProps(0)} sx={{ bgcolor: value === 0 ? 'lightblue' : 'transparent',fontWeight:'600',color:'black' }} />
      <Tab label="Economical" {...a11yProps(1)} sx={{ bgcolor: value === 1 ? 'lightblue' : 'transparent' ,color:'black'}} />
      <Tab label="History" {...a11yProps(2)} sx={{ bgcolor: value === 2 ? 'lightblue' : 'transparent',color:'black' }} />
      <Tab label="Geography" {...a11yProps(3)} sx={{ bgcolor: value === 3 ? 'lightblue' : 'transparent' ,color:'black'}} />
      </Tabs>
      <TabPanel value={value}  index={0}>
      <Grid container >
        {data.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
          <Paper  elevation={1} sx={{ m: 1, width: 200, height: 150, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
          <img style={{ width: '90px', backgroundColor: 'transparent' , marginBottom:'10px'}} src={item.img} />
          <Button variant='text' >Download</Button>
        </Paper>
          </Grid>
        ))}
      </Grid>
      </TabPanel>
      <TabPanel value={value}  index={1}>
      <Grid container >
        {data.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
          <Paper  elevation={1} sx={{ m: 1, width: 200, height: 150, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
          <img style={{ width: '90px', backgroundColor: 'transparent' , marginBottom:'10px'}} src={item.img} />
          <Button variant='text' >Download</Button>
        </Paper>
          </Grid>
        ))}
      </Grid>
      </TabPanel>
      <TabPanel value={value}  index={2}>
      <Grid container >
        {data.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
          <Paper  elevation={1} sx={{ m: 1, width: 200, height: 150, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
          <img style={{ width: '90px', backgroundColor: 'transparent' , marginBottom:'10px'}} src={item.img} />
          <Button variant='text' >Download</Button>
        </Paper>
          </Grid>
        ))}
      </Grid>
      </TabPanel>
      <TabPanel value={value}  index={3}>
      <Grid container >
        {data.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
          <Paper  elevation={1} sx={{ m: 1, width: 200, height: 180, display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%'}}>
          <img style={{ width: '90px', backgroundColor: 'transparent' , marginBottom:'10px'}} src={item.img} />
          <Button variant='text' >Download</Button>
        </Paper>
          </Grid>
        ))}
      </Grid>
      </TabPanel>
    <TabPanel value={value} index={4}>
      <Grid container >
        {data.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={4} sx={{ m: 1, width: 180, height: 150 }}>
              <img style={{ width: '100px', backgroundColor: 'transparent' }} src={item.img} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </TabPanel>
    </Box>
    </Container>
  );
}


export default Material