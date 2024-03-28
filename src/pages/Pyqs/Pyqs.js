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
import notesbook from "../../assets/notebook.png"
import class9 from "../Materials/class9.png"
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

const Pyqs=() =>{
  const [value, setValue] = React.useState(0);

  const data = [
    {
      id: 1,
      img: notesbook,
      val: 'General Studies'
    },
    {
      id: 2,
      img: notesbook,
      val: 'CSAT'
    }];

    const datas = [
        {
          id: 1,
          img: notesbook,
          val: 'General Studies 1'
        },
        {
          id: 2,
          img: notesbook,
          val: 'General Studies 2'
        },
        {
            id: 2,
            img: notesbook,
            val: 'General Studies 3'
          },
          {
            id: 2,
            img: notesbook,
            val: 'General Studies 4'
          }];
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))


  const {pathname}=useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
   const navigate=useNavigate();

  return (
    <Box>
    <Typography sx={{marginTop:'120px',display:'flex',flexDirection:'row',justifyContent:'center',fontSize:'40px',fontWeight:'600'}}>PYQs</Typography>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex',marginBottom:isMobileView?'10px':'200px',display:'flex',flexDirection:isMobileView?"column":'row',width:'100%' }}
    >
      <Tabs
        orientation={isMobileView?"horizontal":'vertical'}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        aria-label="Vertical tabs example"
        sx={{height:isMobileView?"180px":"600px",marginLeft:'10px' ,padding:'10px',width:isMobileView?"100%":"250px",display:'flex',alignItems:'center',justifyContent:'center', backgroundColor:'#212529',borderRadius:'10px'}}
      >
      <Tab label="Polity" {...a11yProps(0)} sx={{ bgcolor: value === 0 ? 'lightblue' : 'white',fontWeight:'600',color:'black',marginBottom:'20px',borderRadius:'8px',width:'200px' ,marginTop:'10px'}} />
      <Tab label="Economics" {...a11yProps(1)} sx={{ bgcolor: value === 1 ? 'lightblue' : 'white' ,color:'black',marginBottom:'20px',borderRadius:'8px',width:'200px' }} />
      <Tab label="History" {...a11yProps(2)} sx={{ bgcolor: value === 2 ? 'lightblue' : 'white',color:'black',marginBottom:'20px'  ,borderRadius:'8px',width:'200px'}} />
      <Tab label="Geography" {...a11yProps(3)} sx={{ bgcolor: value === 3 ? 'lightblue' : 'white' ,color:'black',marginBottom:'20px',borderRadius:'8px',width:'200px' }} />
      <Tab label="Sociology" {...a11yProps(3)} sx={{ bgcolor: value === 4 ? 'lightblue' : 'white' ,color:'black',marginBottom:'20px',borderRadius:'8px',width:'200px' }} />
      <Tab label="Art & Culture " {...a11yProps(3)} sx={{ bgcolor: value === 5 ? 'lightblue' : 'white' ,color:'black',marginBottom:'20px',borderRadius:'8px',width:'200px' }} />

      </Tabs>
     <Box sx={{borderRadius:'10px'}}>
      <TabPanel value={value}  index={0} >
      <Grid container sx={{display:'flex',flexDirection:'row',justifyContent:'space-around'}} >
        {data.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
          <Paper  sx={{  width: 300, height: 150, display:'flex',flexDirection:'column',margin:'5px',transition: 'transform 0.2s', // Add transition for smooth effect
          '&:hover': {
          transform:'scale(1.05)', // Apply zoom effect on hover
          }}}>
          <img style={{margin:'5px', width: '50px', backgroundColor: 'transparent' , marginBottom:'10px'}} src={item.img} />
          <Typography sx={{fontWeight:'600',margin:'5px'}}>{item.val}</Typography>     
        </Paper>
    </Grid>
        ))}
      </Grid>
      </TabPanel>
      <TabPanel value={value}  index={1} >
      <Grid container  >
        {datas.map(item => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
          <Paper  sx={{  width: 300, height: 150, display:'flex',flexDirection:'column',margin:'5px',transition: 'transform 0.2s', // Add transition for smooth effect
          '&:hover': {
          transform:'scale(1.05)', // Apply zoom effect on hover
          }}}>
          <img style={{margin:'5px', width: '50px', backgroundColor: 'transparent' , marginBottom:'10px'}} src={item.img} />
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


export default Pyqs