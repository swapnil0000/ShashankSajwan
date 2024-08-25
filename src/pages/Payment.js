import { Box, Button, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  // Array to store batch details along with topics
  const batchDetails = [
    {
      id: 1,
      title: "Comprehensive UPSC preparation",
      topi1: "Complete course with lectures and study materials.",
      topi2: "Mentorship provided throughout the journey.",
    },
    {
      id: 2,
      title: "Personalized Guidance",
      topi1: "Direct interaction with Shashank Sajwan sir.",
      topi2: "24/7 support for doubts and queries.",
    },
    {
      id: 3,
      title: "Practise and Revision",
      topi1: "Over 40 previous Year Questions (PYQs) sessions.",
      topi2: "Monthly Current Affairs Magazine/Analysis",
    },
    {
      id: 4,
      title: 'CSAT Preparation:',
      topi1: 'Dedicated sessions to excel in the CSAT paper.'
    },
    {
      id: 5,
      title: 'Optional Subject Guidance:',
      topi1: 'Expert assistance in selecting and preparing optional subjects.'
    },
    {
      id: 6,
      title: 'Extended Access:',
      topi1: '2 years of access to the course content.'
    },
    {
      id: 7,
      title: 'Continuous Support:',
      topi1: 'Personalized touch maintained even after course completion.'
    },
    {
      id: 8,
      title: 'Mains Preparation:',
      topi1: 'Rigorous training for mains answer writing.'
    },
    {
      id: 9,
      title: ' Interview Preparation:',
      topi1: 'Specialized guidance to ace the interview round.'
    },
    {
      id: 10,
      title: ' Essay Writing Training:',
      topi1: 'Techniques and practice for mastering essay writing.'
    }
    // Add more batch details here
  ];

  const terms = [
    {
      id: 1,
      title: "We request for the Confidentiality of course materials.",
    },
    {
      id: 2,
      title: "Sharing materials outside the course leads to immediate ban without refund.",

    },
    {
      id: 3,
      title: "Fees is Non-Refundable.",
    },
    {
      id: 4,
      title: '2-year access to course materials upon enrollment.',

    },
    {
      id: 5,
      title: 'Professional conduct required; disruptive behavior results in expulsion. ',
    },
  ]
  const handleClick = () => {
    window.open("https://pages.razorpay.com/pl_O6MONxa68ozqrM/view", "_blank"); // Opens the link in a new tab
  };

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"));
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <Container sx={{ marginTop: '110px' }}>
      <Box>
        <Typography sx={{ fontSize: isMobileView ? "30px" : "50px", fontWeight: '900', textAlign: 'center' }}>UPSC FULL-FLEDGED PREPARATION BATCH</Typography>
        <Box sx={{ marginTop: '30px', backgroundColor: 'lightblue', padding: '10px', borderRadius: '10px' }}>
          <Typography sx={{ fontSize: '30px', fontWeight: '700', textAlign: 'center' }}>BATCH DETAILS</Typography>
          {/* Map through the array to render batch details and topics */}
          <Box>
            {
              batchDetails.map((ele) => (
                <Box sx={{ margin: '15px' }}>
                  <Typography sx={{ fontSize: '25px', fontWeight: '500' }} key={ele.id}>{ele.id}-{ele.title}</Typography>
                  <Typography> {ele.topi1}</Typography>
                  <Typography> {ele.topi2}</Typography>
                </Box>

              ))
            }
          </Box>
        </Box>
        <Box sx={{ marginTop: '30px', backgroundColor: 'lightblue', padding: '10px', borderRadius: '10px' }}>
          <Typography sx={{ fontSize: '30px', fontWeight: '700', marginTop: '30px', textAlign: 'center' }}>TERMS & CONDITION</Typography>
          {/* Map through the array to render batch details and topics */}
          <Box>
            {
              terms.map((ele) => (
                <Box sx={{ margin: '15px' }}>
                  <Typography key={ele.id}><FiberManualRecordIcon sx={{ width: '17px', marginRight: '5px' }} />{ele.title}</Typography>
                </Box>

              ))
            }
          </Box>
        </Box>

        <Box sx={{ marginTop: '30px', backgroundColor: 'lightblue', padding: '10px', borderRadius: '10px', marginBottom: '60px' }}>
          <Typography sx={{ fontSize: '30px', fontWeight: '700', marginTop: '30px', textAlign: 'center' }}>FOR PAYMENT</Typography>
          {/* Map through the array to render batch details and topics */}
          <Box sx={{ margin: '20px', display: 'flex', flexDirection: isMobileView ? "column" : "row" }}>
            <Box >
              <Typography><FiberManualRecordIcon sx={{ width: '17px', marginRight: '5px' }} />Scan the QR Code for payment.                </Typography>
              <Typography><FiberManualRecordIcon sx={{ width: '17px', marginRight: '5px' }} />Send the screenshot of the payment on WhatsApp.                </Typography>
              <Typography><FiberManualRecordIcon sx={{ width: '17px', marginRight: '5px' }} />After your payment, our team will respond you soon.</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{backgroundColor:'lightblue',padding:'20px',marginBottom:'30px'}}>
        <Typography sx={{ fontSize: isMobileView ? "30px" : "35px", fontWeight: '700', textAlign: 'center' , }}>Account Details</Typography>
          <Box sx={{display:'flex',flexDirection:isMobileView?"column":'row',alignItems:isMobileView?"center":"",justifyContent:'space-around',width:'100%'}}>
          <Box>
            <img style={{ width: '240px',display:'flex',alignItems:'center',justifyContent:'center', margin:'10px'}} src="/assets/qr.jpg" />
          </Box>
          <Box sx={{margin:'10px'}}>
            <Typography sx={{ fontSize: '22px',  }}><span style={{ fontSize: '25px', fontWeight: '500' }}>Name-</span>Shashank Sajwan </Typography>
            <Typography sx={{ fontSize: '22px',  }}><span style={{ fontSize: '25px', fontWeight: '500' }}>Acc No.-</span>50200072647120 </Typography>
            <Typography sx={{ fontSize: '22px',  }}><span style={{ fontSize: '25px', fontWeight: '500' }}>IFSC-</span>HDFC0003784</Typography>
            <Typography sx={{ fontSize: '22px',  }}><span style={{ fontSize: '25px', fontWeight: '500' }}>UPI-</span>upscmentor@axl</Typography>
          </Box>
          
          </Box>
        </Box>

      </Box>
    </Container>
  );
};

export default Payment;
