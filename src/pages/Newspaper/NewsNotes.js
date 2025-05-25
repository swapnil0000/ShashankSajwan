import { Box, Grid, Paper, Tab, Tabs, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

// Data arrays
const tabpanel = [
  { id: 0, img: "/assets/newspaper/april/newnotes1.webp", link: "https://drive.google.com/file/d/1oXuXL6QoP9b8pzh5zDxLCcm51EmFxN5Z/view?usp=sharing" },
  { id: 1, img: "/assets/newspaper/april/newnotes2.webp", link: "https://drive.google.com/file/d/15ra86K7KtS9vCTvWUhoMKtFLJnDGVdvH/view?usp=sharing" },
  // ... existing code ...
];

const maydata = [
  { id: 1, img: '/assets/newspaper/may/newnotesmay1.webp', link: 'https://drive.google.com/file/d/1WwqSvAUXEJ-98woVB_p2em2RjF6gPqBm/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/may/newnotesmay2.webp', link: 'https://drive.google.com/file/d/1-ZVAZ6Epqxz-3fGrmbVoPygfL_Hk4j9d/view?usp=sharing' },
  // ... existing code ...
];

const juneData = [
  { id: 1, img: '/assets/newspaper/june/ncertjuly1.jpg', link: 'https://drive.google.com/file/d/1XWO94_qdjcc_H9-yUg9IfyAM7Lar0-bb/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/june/ncertjuly2.jpg', link: 'https://drive.google.com/file/d/1C8WsX-7dd06Iw6wJTNQ8_t56uAW28pu7/view?usp=sharing' },
  // ... existing code ...
];

const julyData = [
  { id: 1, img: '/assets/newspaper/july/july1.webp', link: "https://drive.google.com/file/d/1N4BbB7sd0iepIEg5cE2Zfs9q3YIFJhPF/view?usp=sharing" },
  { id: 2, img: '/assets/newspaper/july/july2.webp', link: "https://drive.google.com/file/d/10988mlaQNPy41RSTPSgBEHT0zS-fpAXo/view?usp=sharing" },
  // ... existing code ...
];

const augData = [
  { id: 1, img: '/assets/newspaper/aug/aug1.webp', link: 'https://drive.google.com/file/d/17nw8wTeTor4VEczoNmWmzswWvYp1Ct9F/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/aug/aug2.webp', link: 'https://drive.google.com/file/d/1avMjetYWoOulGcbL4-X_5L4wGgKkl0uX/view?usp=sharing' },
  // ... existing code ...
];

const sepData = [
  { id: 1, img: '/assets/newspaper/sep/1sep.jpg', link: 'https://drive.google.com/file/d/1djkcO6qoJJkJ3tQ_fsKVVg5bj6lrvy7K/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/sep/2sep.jpg', link: 'https://drive.google.com/file/d/1aC3l_puwGbgj06xRb2swIG1ucqFre9qt/view?usp=sharing' },
  // ... existing code ...
];

const octData = [
  { id: 1, img: '/assets/newspaper/oct/1oct.jpg', link: 'https://drive.google.com/file/d/1hfM4a1lSQUWhhQlMv5j0iJUdcU18hHoc/view?usp=sharing ' },
  { id: 2, img: '/assets/newspaper/oct/2oct.jpg', link: 'https://drive.google.com/file/d/1edVN4FjWX9z9X-8XJzPXMidX32q4JCYB/view?usp=sharing' },
  // ... existing code ...
];

const novData = [
  { id: 1, img: '/assets/newspaper/nov/1nov.webp', link: "https://drive.google.com/file/d/1k5FNH8Ll_Hv-E9-5HPlpUF8Mnzud6lkm/view?usp=sharing" },
  { id: 3, img: '/assets/newspaper/nov/3nov.webp', link: "https://drive.google.com/file/d/1B66gCCAm-VnRmIgXX-nrPtAwSCeXa8Pm/view?usp=sharing" },
  // ... existing code ...
];

const devdata = [
  { id: 1, img: '/assets/newspaper/dec/1dec.jpg', link: "https://drive.google.com/file/d/1dbxTsLJH05ro_HpGCgSiA7rV5dflqGCg/view?usp=sharing" },
  { id: 2, img: '/assets/newspaper/dec/2dec.jpg', link: "https://drive.google.com/file/d/1x-BBuK10sJFPtjZChLKAmer8iG7zcdn3/view?usp=sharing" },
  // ... existing code ...
];

// TabPanel component with proper prop types
const TabPanel = ({ children, value, index, ...other }) => {
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
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Styled components
const StyledPaper = ({ children, ...props }) => (
  <Paper 
    sx={{ 
      width: 250, 
      height: 140, 
      display: 'flex', 
      flexDirection: 'column', 
      margin: '5px', 
      transition: 'transform 0.2s', 
      '&:hover': { transform: 'scale(1.05)' } 
    }}
    {...props}
  >
    {children}
  </Paper>
);

// Constants
const TAB_DATA = [
  { id: 0, label: "APRIL 2024" },
  { id: 1, label: "MAY 2024" },
  { id: 2, label: "JUNE 2024" },
  { id: 3, label: "JULY 2024" },
  { id: 4, label: "AUGUST 2024" },
  { id: 5, label: "SEPTEMBER 2024" },
  { id: 6, label: "OCTOBER 2024" },
  { id: 7, label: "NOVEMBER 2024" },
  { id: 8, label: 'DECEMBER 2024' },
];

const NewsNotes = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);

  const a11yProps = useCallback((index) => ({
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }), []);

  // Memoized grid items renderer
  const renderGridItems = useCallback((data) => (
    <Grid container>
      {data.map(item => (
        <Grid 
          key={item.id} 
          item 
          xs={12} 
          sm={6} 
          md={6} 
          lg={4} 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginTop: '10px' 
          }}
        >
          <StyledPaper>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img 
                style={{ width: '100%', backgroundColor: 'transparent' }} 
                src={item.img} 
                alt={`Newspaper Notes ${item.id}`} 
              />
            </a>
          </StyledPaper>
        </Grid>
      ))}
    </Grid>
  ), []);

  // Memoized content based on selected tab
  const tabContent = useMemo(() => {
    switch (value) {
      case 0: return renderGridItems(tabpanel);
      case 1: return renderGridItems(maydata);
      case 2: return renderGridItems(juneData);
      case 3: return renderGridItems(julyData);
      case 4: return renderGridItems(augData);
      case 5: return renderGridItems(sepData);
      case 6: return renderGridItems(octData);
      case 7: return renderGridItems(novData);
      case 8: return renderGridItems(devdata);
      default: return null;
    }
  }, [value, renderGridItems]);

  return (
    <Box>
      <Box 
        className="material-page" 
        sx={{ 
          width: '100%', 
          marginTop: isMobileView ? "100px" : "110px", 
          position: 'relative', 
          height: '150px', 
          backgroundImage: "linear-gradient( 26.3deg ,rgba(8,24,68,1) 87.6%   ,rgba(0,119,182,1) 9.6%)" 
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            color: 'white', 
            textAlign: 'center', 
            fontSize: isMobileView ? "20px" : "50px" 
          }}
        >
          NEWSPAPER NOTES
        </Typography>
      </Box>

      <Box 
        sx={{ 
          flexGrow: 1, 
          bgcolor: 'background.paper', 
          marginTop: '10px', 
          display: 'flex', 
          marginBottom: isMobileView ? '10px' : '200px', 
          flexDirection: isMobileView ? "column" : 'row', 
          justifyContent: 'space-evenly', 
          width: '100%' 
        }}
      >
        {!isMobileView && (
          <Tabs 
            orientation="vertical" 
            value={value} 
            onChange={handleChange} 
            variant="scrollable" 
            aria-label="Vertical tabs example" 
            sx={{ 
              height: '600px', 
              marginLeft: '10px', 
              padding: '10px', 
              width: '500px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: "", 
              backgroundColor: 'rgba(8,24,68,1)', 
              borderRadius: '10px', 
              borderColor: 'white' 
            }}
          >
            {TAB_DATA.map(tab => (
              <Tab 
                key={tab.id} 
                label={tab.label} 
                {...a11yProps(tab.id)} 
                sx={{ 
                  bgcolor: value === tab.id ? 'lightblue' : 'white', 
                  color: 'black', 
                  marginRight: '15px', 
                  marginBottom: '20px', 
                  borderRadius: '8px', 
                  width: '200px', 
                  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' 
                }} 
              />
            ))}
          </Tabs>
        )}

        {isMobileView && (
          <Box sx={{ bgcolor: 'background.paper', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Tabs 
              value={value} 
              onChange={handleChange} 
              variant="scrollable" 
              scrollButtons 
              allowScrollButtonsMobile 
              aria-label="scrollable force tabs example" 
              sx={{ width: '100%' }}
            >
              {TAB_DATA.map(tab => (
                <Tab 
                  key={tab.id} 
                  label={tab.label} 
                  {...a11yProps(tab.id)} 
                  sx={{ 
                    bgcolor: value === tab.id ? 'lightblue' : 'white', 
                    color: 'black', 
                    marginRight: '10px', 
                    marginBottom: '10px', 
                    marginLeft: '10px', 
                    borderRadius: '8px', 
                    width: '100%', 
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', 
                    maxWidth: '300px' 
                  }} 
                />
              ))}
            </Tabs>
          </Box>
        )}

        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          {TAB_DATA.map((tab, index) => (
            <TabPanel 
              key={tab.id} 
              value={value} 
              index={index} 
              sx={{ 
                marginLeft: isMobileView ? '' : '20px', 
                marginRight: isMobileView ? '' : '20px', 
                marginTop: isMobileView ? '10px' : '' 
              }}
            >
              {tabContent}
            </TabPanel>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default NewsNotes;

