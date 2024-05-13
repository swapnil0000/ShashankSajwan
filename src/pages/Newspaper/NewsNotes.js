import { Box, Container, Grid, Paper, Tab, Tabs, Typography, colors, useMediaQuery, useTheme } from '@mui/material'
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


const tabpanel = [
  { id: 0, img:"/assets/newspaper/newnotes1.webp",link:"https://drive.google.com/file/d/1oXuXL6QoP9b8pzh5zDxLCcm51EmFxN5Z/view?usp=sharing" },
  { id: 1, img:"/assets/newspaper/newnotes2.webp",link:"https://drive.google.com/file/d/15ra86K7KtS9vCTvWUhoMKtFLJnDGVdvH/view?usp=sharing" },
  { id: 2, img:"/assets/newspaper/newnotes3.webp",link:"https://drive.google.com/file/d/1sC5LhQI9bOK9yJ9wq3eRCPCaNiS3a_ju/view?usp=sharing" },
  { id: 3, img:"/assets/newspaper/newnotes4.webp",link:"https://drive.google.com/file/d/1dhnYQf2LTxPcCDP2gEBq3Ib2_b86SD5Z/view?usp=sharing" },
  { id: 4, img:"/assets/newspaper/newnotes5.webp",link:"https://drive.google.com/file/d/1sjCWIjb5Rij9M3YdkyWXaDOmVnOMu_Bf/view?usp=sharing" },
  { id: 5, img:"/assets/newspaper/newnotes6.webp",link:"https://drive.google.com/file/d/1L3c7kmbUtkzy07w0oM_8chG9HBp00dZH/view?usp=sharing" },
  { id: 6, img:"/assets/newspaper/newnotes7&8.webp",link:"https://drive.google.com/file/d/12bmcjBwZO4CS8fEmP4X70UqklvymjGRp/view?usp=sharing" },
  { id: 7, img:"/assets/newspaper/newnotes9.webp",link:"https://drive.google.com/file/d/1kzNHb0YNAQgLarZec4PjmpJoP6utHTo8/view?usp=sharing" },
  { id: 9, img:"/assets/newspaper/newnotes10.webp",link:"https://drive.google.com/file/d/10IawnY4lBnrOsbRHoVQbLZ2e2H6mUwBZ/view?usp=sharing" },
  { id: 10, img:"/assets/newspaper/newnotes11.webp",link:"https://drive.google.com/file/d/1XNm7Ja48KaLCiud-HB-YB_QIfxgp8mi4/view" },
  { id: 11, img:"/assets/newspaper/newnotes12.webp",link:"https://drive.google.com/file/d/1ENBeQCOQAUAHGR7BiRHKr8F4VrSz1L6r/view" },
  { id: 12, img:"/assets/newspaper/newnotes13.webp",link:"https://drive.google.com/file/d/1eCugFdgcYTGaNK20muUmYz1TYJNRWQRp/view?usp=sharing" },
  { id: 13, img:"/assets/newspaper/newnotes14&15.webp",link:"https://drive.google.com/file/d/1WH27BuL2pyGpPvTFRYxhwOhIci4uI1Nu/view?usp=sharing" },
  { id: 14, img:"/assets/newspaper/newnotes16.webp",link:"https://drive.google.com/file/d/1BKGC2g15MBPW2ZcF5TALcFk3pdgpowHz/view?usp=sharing" },
  { id: 15, img:"/assets/newspaper/newnotes17.webp",link:"https://drive.google.com/file/d/1pde3YxdeOP3-S6oUeAe9Bd1U0fbfTkF9/view?usp=sharing" },
  { id: 16, img:"/assets/newspaper/newsnotes18.jpg",link:"https://drive.google.com/file/d/1Xw8TdEZJO7K0_8ejhljNv8DzVjuyoOJw/view?usp=sharing" },
  { id: 17, img:"/assets/newspaper/newsnotes19.jpg",link:"https://drive.google.com/file/d/12tAjNSwnlFOj5F-G_LBb_ITCgibvGRGZ/view?usp=sharing" },
  { id: 18, img:"/assets/newspaper/newsnotes20.jpg",link:"https://drive.google.com/file/d/1GkYy2yGCE0RTMtSeAIBf3zKULwNexDCn/view?usp=sharing" },
  { id: 19, img:"/assets/newspaper/newsnotes21&22.jpg",link:"https://drive.google.com/file/d/1CR5h8cKBYjtrsAciOUjZC_5CfrGTRZgY/view" },
  { id: 20, img:"/assets/newspaper/newsnotes23.jpg",link:"https://drive.google.com/file/d/1d2ICMwUkTcTeBBaImS90WR3nbVeikFKr/view" },
  { id: 21, img:"/assets/newspaper/newnotes24.webp",link:"https://drive.google.com/file/d/1L0p07nJ28DXiveSB8ibWmKfHk97JdowT/view" },
  { id: 22, img:"/assets/newspaper/newnotes25.webp",link:"https://drive.google.com/file/d/1UObjZcZ6-nwsW0UT2GgsTXKYncPIwVER/view " },
  { id: 23, img:"/assets/newspaper/newnotes26.webp",link:"https://drive.google.com/file/d/15LFZ4ihpHzR5Ji2QMKyGEW6c5K2lOI63/view?usp=sharing " },
  { id: 24, img:"/assets/newspaper/newnotes27.webp",link:"https://drive.google.com/file/d/1QdLBmjCVGHzCODtjTChoZO9W8oPv4Oik/view?usp=sharing " },
  { id: 25, img:"/assets/newspaper/newnotes28&29.webp",link:"https://drive.google.com/file/d/1ArzVjWb2qCAEwxroSLL9hf5Ui1FUwErb/view?usp=sharing" },
  { id: 26, img:"/assets/newspaper/newnotes30.webp",link:"https://drive.google.com/file/d/1ziuYj-sIGC0S1JQ4PNO0-T10B-YgndbX/view" },



];

const maydata = [
  { id: 1, img:'/assets/newspaper/may/newnotesmay1.webp',link:'https://drive.google.com/file/d/1WwqSvAUXEJ-98woVB_p2em2RjF6gPqBm/view?usp=sharing' },
  { id: 2, img: '/assets/newspaper/may/newnotesmay2.webp',link:'https://drive.google.com/file/d/1-ZVAZ6Epqxz-3fGrmbVoPygfL_Hk4j9d/view?usp=sharing' },
  { id: 3, img: '/assets/newspaper/may/newnotesmay3.webp',link:'https://drive.google.com/file/d/1m-Mn3Ng2hJCla0JmMLddSKjPUktskRO-/view?usp=sharing' },
  { id: 4, img: '/assets/newspaper/may/newnotesmay4.webp',link:'https://drive.google.com/file/d/1FpUB1dY_eY9xUxZp2Z5dwHmuRgwNWFhm/view?usp=sharing ' },
  { id:5, img :'/assets/newspaper/may/newnotesmay56.webp',link:'https://drive.google.com/file/d/1qNgoejG9ncamMACHGB3Uo5FQS6FKTvL9/view?usp=sharing '},
  { id:6, img :'/assets/newspaper/may/may7.webp',link:'https://drive.google.com/file/d/1fpLMuEiel7yJ98oBZo_Fqn3priXn-YPR/view?usp=sharing '},
  { id:7, img :'/assets/newspaper/may/may8.webp',link:' https://drive.google.com/file/d/1zl4LBe6zGKf1bkvFlRYdJUL1dvtzWGhy/view?usp=sharing'},
  { id:8, img :'/assets/newspaper/may/may9.webp',link:'https://drive.google.com/file/d/1Zm3bK27X9QRSUqqYKM75BLsd1niybIB9/view?usp=sharing '},

];


const tabData = [
  { id: 0, label: "APRIL 2024" },
  {id:1,label:"MAY 2024"},
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
    <Box>
    <Box  className="material-page" sx={{ width: '100%', marginTop: isMobileView ? "100px" : "110px", position: 'relative', height: '150px', backgroundImage: "linear-gradient( 26.3deg ,rgba(8,24,68,1) 87.6%   ,rgba(0,119,182,1) 9.6%)" }}>
      <Typography variant="h4"  sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center', fontSize: isMobileView ? "20px" : "50px" }}>
         NEWSPAPER NOTES
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
          {value === 0 && renderGridItems(tabpanel)}
          {value === 1 && renderGridItems(maydata)}
        </TabPanel>
      ))}
      </Box>
    </Box>
  </Box>
  )
}

export default Optional