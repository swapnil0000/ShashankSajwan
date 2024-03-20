import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Paper } from '@mui/material';
import notes from "../Materials/noteslogo.webp"
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

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height:'500px', marginTop:'150px',flexDirection:'row',alignItems:'center',justifyContent:'space-between' ,width:'100%'}}
    >
      <Tabs
        
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'500px',margin:"20px",marginLeft:'30px',marginBottom:'20px' ,padding:'60px'}}
      >
        <Tab label="Economical " {...a11yProps(0)} >
         <Button>Economical</Button>
        </Tab>
        <Tab label="Polity " {...a11yProps(1)} />
        <Tab label="Geography " {...a11yProps(2)} />
        <Tab label="History " {...a11yProps(3)} />

      </Tabs>
      <TabPanel value={value} index={0}>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent:'center',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 150,
        },
      }}
    >
      <Paper elevation={4} ><img style={{width:'100px',backgroundColor:'transparent',display:'flex',justifyContent:'center'}} src={notes}/></Paper>
      <Paper elevation={4}><img style={{width:'100px',backgroundColor:'transparent',display:'flex',justifyContent:'center'}} src={notes}/></Paper>
      <Paper elevation={4}><img style={{width:'100px',backgroundColor:'transparent',display:'flex',justifyContent:'center'}}  src={notes}/></Paper>
      <Paper elevation={4} ><img style={{width:'100px',backgroundColor:'transparent',display:'flex',justifyContent:'center'}} src={notes}/></Paper>
      <Paper elevation={4} ><img style={{width:'100px',backgroundColor:'transparent',display:'flex',justifyContent:'center'}} src={notes}/></Paper>
      <Paper elevation={4} ><img style={{width:'100px',backgroundColor:'transparent',display:'flex',justifyContent:'center'}} src={notes}/></Paper>
    </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent:'center',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 150,
        },
      }}
    >
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
    </Box>      </TabPanel>
      <TabPanel value={value} index={2}>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent:'center',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 150,
        },
      }}
    >
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
    </Box>      </TabPanel>
      <TabPanel value={value} index={3}>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent:'center',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 150,
        },
      }}
    >
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
    </Box>      </TabPanel>
      <TabPanel value={value} index={4}>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent:'center',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 150,
        },
      }}
    >
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
    </Box>      </TabPanel>
      <TabPanel value={value} index={5}>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent:'center',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 150,
        },
      }}
    >
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
    </Box>      </TabPanel>
      <TabPanel value={value} index={6}>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent:'center',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 150,
        },
      }}
    >
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
      <Paper elevation={4} />
    </Box>      </TabPanel>
    </Box>
    </Container>
  );
}