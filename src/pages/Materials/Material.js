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
    { id: 0, label: "Polity" },
    { id: 1, label: "Economics" },
    { id: 2, label: "History" },
    { id: 3, label: "Geography" },
    { id: 4, label: "Sociology" },
    { id: 5, label: "Art & Culture" },
    { id: 6, label: "Science" }
  ];

  const data = [
    { id: 1, img: "/assets/material/historyassest/history6.webp",link:'https://drive.google.com/file/d/1g9vK54LhN0rkphoK05t-f8ml4SKUfAsf/view?usp=sharing' },
    { id: 2, img: "/assets/material/historyassest/history7.webp",link:'https://drive.google.com/file/d/12NMmTCAUyIyuVHIICDj9XfBXXY5xvLR_/view?usp=sharing'  },
    { id: 3, img: "/assets/material/historyassest/history8.webp",link:'https://drive.google.com/file/d/1UzZ7IbLWtaWc7fN5UaKpdc8bEH7kqy2x/view?usp=sharing'  },
    { id: 4, img: "/assets/material/historyassest/history9.webp",link:'https://drive.google.com/file/d/1js2AqyHCwnMF1v2TTzNXy3HhODyLf6SG/view?usp=sharing'  },
    { id: 5, img: "/assets/material/historyassest/history10.webp",link:'https://drive.google.com/file/d/1fxUCtg0COgnDXNEmU7hrNkoBczeBJXTu/view?usp=sharing'  },
    { id: 9, img: "/assets/material/historyassest/historyclass11new.webp" , link:'https://drive.google.com/file/d/1UH5n09uGyZMqYYXclRhtnH_VgbmSiVR7/view?usp=sharing' },
    { id: 6, img: "/assets/material/historyassest/history12part1.webp",link:'https://drive.google.com/file/d/1iUU4ryYBACCbQpbFXsJUoG_iMlFRlx70/view'  },
    { id: 7, img: "/assets/material/historyassest/history12part2.webp",link:'https://drive.google.com/file/d/1FPjsa3LM4yVZC8rbL9XnJaykRq_IsJOX/view'  },
    { id: 8, img: "/assets/material/historyassest/history12part3.webp",link:'https://drive.google.com/file/d/1iv5X2eMF26UczJ8_4uEii9SEx6-umXio/view'  },
  ];

  const dataPolitical = [
    { id: 1, img: "/assets/material/polityassets/polity1.webp",link:'https://drive.google.com/file/d/12isEdwMrAXNgzAbsutcbLIXN2K1_fWU5/view?usp=sharing' },
    { id: 2, img: "/assets/material/polityassets/polity2.webp",link:'https://drive.google.com/file/d/1KVBFu9ZWYXoC2s2VccSFu_zpSHGMNkip/view?usp=sharing' },
    { id: 3, img: "/assets/material/polityassets/polity3.webp",link:"https://drive.google.com/file/d/1UYklPoImWnrvkAAm9S49oqpVGwnTPY-U/view?usp=sharing" },
    { id: 4, img: "/assets/material/polityassets/polity4.webp",link:"https://drive.google.com/file/d/1WO_DiNItvcns4Gbqgc9q7zZsMooVzUgn/view?usp=sharing"  },
    { id: 5, img: "/assets/material/polityassets/polity5.webp",link:"https://drive.google.com/file/d/1Sdn46fojarAkN43586tm100IS1-5busv/view?usp=sharing" },
    { id: 6, img: "/assets/material/polityassets/polityclass11new.webp",link:"https://drive.google.com/file/d/1G1_0aniSYLGKiFLtFwlq-IgaDNuUKGAK/view?usp=sharing" },
    { id: 8, img: "/assets/material/polityassets/polity11.webp",link:"https://drive.google.com/file/d/1Ya-x-HS6NE5CK9fo3IGgiy85aVGZ-aGi/view?usp=sharing"  },
    { id: 9, img: "/assets/material/polityassets/polityclass12new.webp",link:"https://drive.google.com/file/d/1FUQzCkliohf_5P5btXaivaMQ8iigwpP6/view?usp=sharing"  },
    { id: 10, img: "/assets/material/polityassets/polity10.webp",link:"https://drive.google.com/file/d/134cFGGV_1n_6lgiLt-OqalpP5nYkgNgA/view"  },
  ];

  const dataGeo = [
    { id: 1, img: "/assets/material/geoasset/geo1.webp",link:"https://drive.google.com/file/d/131xIGwA2Q3rguXil70N3ie3b98M1yQrx/view?usp=sharing" },
    { id: 2, img: "/assets/material/geoasset/geo2.webp",link:"https://drive.google.com/file/d/1dFfY-Eig_kaxnM5rkfMdT-TxieLn2b0b/view?usp=sharing" },
    { id: 3, img: "/assets/material/geoasset/geo3.webp",link:"https://drive.google.com/file/d/1V65sM3ECZDe5BeucEesN04Ef5q5Bo8Cs/view?usp=sharing" },
    { id: 4, img: "/assets/material/geoasset/geo4.webp",link:"https://drive.google.com/file/d/1nrZJFSWo46HE0HNMNLwHHW24KwEiDBpt/view?usp=sharing" },
    { id: 5, img: "/assets/material/geoasset/geo5.webp",link:"https://drive.google.com/file/d/1j7iZhDkxkoXIyywDXaSxs60wSQ-EjmBm/view?usp=sharing"},
    { id: 6, img: "/assets/material/geoasset/geo6.webp",link:"https://drive.google.com/file/d/1RTZyv-1LJY--X-aF--Sk52QBFKtKsi8y/view?usp=sharing" },
    { id: 7, img: "/assets/material/geoasset/geo7.webp",link:"https://drive.google.com/file/d/16AoENastUUR5kdc-h7KAmQ0CZ8zXPqVS/view?usp=sharing" },
    { id: 8, img: "/assets/material/geoasset/geo8.webp",link:"https://drive.google.com/file/d/1A9uGIYEB5Ve09D_RhEv3D0oLvRV0y2HS/view?usp=sharing" },
    { id: 9, img: "/assets/material/geoasset/geo9.webp",link:"https://drive.google.com/file/d/1ABhDFytVliunrrl0HsTGupn1m-i2m4B4/view?usp=sharing" }
  ];

  const dataEco = [
    { id: 1, img: "/assets/material/ecoasset/eco1.webp",link:"https://drive.google.com/file/d/1C3s0Zp0_oIcUWByBNQS0KPWNh2nQZLPt/view?usp=sharing" },
    { id: 2, img:  "/assets/material/ecoasset/eco2.webp",link:"https://drive.google.com/file/d/1GIQwfJJ0_9BfB95nL0gi9faEkfzv_gC0/view?usp=sharing" },
    { id: 3, img:  "/assets/material/ecoasset/eco3.webp",link:"https://drive.google.com/file/d/1rNY3DwZDMRyIcp3h2_SKTQTcfCpoFLv_/view?usp=sharing" },
    { id: 4, img:  "/assets/material/ecoasset/eco4.webp",link:"https://drive.google.com/file/d/1imnaYFbvwrFJYfxTnVevKTY9MqjfcE2U/view?usp=sharing" }
  ];

  const dataSocio = [
    { id: 1, img:'/assets/material/socioasset/socio1.webp',link:'https://drive.google.com/file/d/1O841slSvpbjcdmfQiKtoJEOK-XpvIj5-/view?usp=sharing' },
    { id: 2, img: '/assets/material/socioasset/socio2.webp',link:'https://drive.google.com/file/d/1-v1O5FL6PTcx7jpJgdUK5avmspQghePv/view?usp=sharing' },
    { id: 3, img: '/assets/material/socioasset/socio3.webp',link:'https://drive.google.com/file/d/1Wntht8h0hO3QBx6WmuWAM1qkaozlKax6/view?usp=sharing' },
    { id: 4, img: '/assets/material/socioasset/socio4.webp',link:'https://drive.google.com/file/d/1OwbY9uN9NF2xeeivZVnM-_l46cXUpxwL/view?usp=sharing' }
  ];

  const dataArt = [
    { id: 1, img: "/assets/material/arts.webp",link:'https://drive.google.com/file/d/19LgIgunaqeLOLEoLfFRTkEUaLsCUHyau/view?usp=sharing' },

  ];

  const dataScience = [
    { id: 1, img: "/assets/material/science.webp",link:'https://drive.google.com/file/d/1QafEnAGJxkhOQI161onrCmuQFFqyHsOD/view?usp=sharing' },

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
      sectionId="ncert"
      title="NCERT"
      accent="Notes"
      subtitle="Class 6–12 NCERT textbooks, subject-wise. Tap any book to open the PDF."
      tabs={[{ label: 'Polity', items: dataPolitical }, { label: 'Economics', items: dataEco }, { label: 'History', items: data }, { label: 'Geography', items: dataGeo }, { label: 'Sociology', items: dataSocio }, { label: 'Art & Culture', items: dataArt }, { label: 'Science', items: dataScience }]}
    />
  );
};

export default Material;
