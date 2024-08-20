import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { Box, Container, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const Acheivement = () => {
  const [count, setCount] = useState(1);
  const [instaCount, setInstaCount] = useState(1);
  const [telegramCount, setTelegramCount] = useState(1);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prevCount) => (prevCount !== 650 ? prevCount + 1 : prevCount));
    }, 20);

    const instaInterval = setInterval(() => {
      setInstaCount((prevInstaCount) => (prevInstaCount !== 200 ? prevInstaCount + 1 : prevInstaCount));
    }, 60);

    const telegramInterval = setInterval(() => {
      setTelegramCount((prevTelegramCount) => (prevTelegramCount !== 128 ? prevTelegramCount + 1 : prevTelegramCount));
    }, 60);

    return () => {
      clearInterval(countInterval);
      clearInterval(instaInterval);
      clearInterval(telegramInterval);
    };
  }, []);

  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'));
  const isTabletView = useMediaQuery(theme.breakpoints.down('md'));

  const dataJoshtalk = [
    { id: 1, val: "Shashank Sir's speech on Josh Talks YouTube tackles UPSC aspirants' trials." },
    { id: 2, val: "The most-viewed video resonates with many navigating civil services challenges." },
    { id: 3, val: "His insights illuminate aspirants' struggles, offering actionable solutions." },
    { id: 4, val: "His guidance covers time management and motivation." },
    { id: 5, val: "He provides hope and direction to those on the challenging journey." },
    { id: 6, val: "His speech offers practical advice for overcoming obstacles in UPSC preparation." },
  ];

  const CounterBox = ({ icon, count, label }) => {
    const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  
    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '30px', width: '100%', height: '100%', marginBottom: isMobileView ? '5px' : '0px', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }}>
        {icon}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontWeight: 700, fontSize: '30px', color: '#f0750f' }}>{count}K+</Typography>
          <Typography sx={{ fontSize: isMobileView ? '15px' : '17px' }}>{label}</Typography>
        </Box>
      </Box>
    );
  };
  
  const DividerBox = () => {
    const isMobileView = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  
    return (
      <Box sx={{ width: isMobileView ? '100%' : '3px', height: isMobileView ? '4px' : '100%', backgroundColor: 'white', borderRight: '3px solid white' }} />
    );
  };


  const CounterBoxStyle=styled('Box')({
    marginTop: '20px', display: 'flex', flexDirection: isMobileView ? 'column' : 'row', backgroundColor: '#212529', color: 'white', width: '100%', height: isMobileView ? '350px' : '110px', borderRadius: '30px', alignItems: 'center', justifyContent: 'center'
  })

  return (
    <Container sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 10px 4px 12px' }}>
      <Box sx={{ width: '100%', margin: '0 auto', marginTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px' }}>
        <Typography  sx={{ fontSize: isMobileView ? '21px' : '40px', fontWeight: '700' }} align="center" gutterBottom>
          OUR JOSH TALKS SESSION
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: isMobileView ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ width: isMobileView ? '100%' : '60%', marginBottom: isMobileView ? '20px' : 'null' }}>
            <ReactPlayer
              url="https://youtu.be/2h3V2g58Whg?si=7HLu17W0pangSE5a"
              width="100%"
              style={{ marginTop: '2px', alignItems: 'center', overflow: 'hidden', borderRadius: '20px' }}
              height={isTabletView ? '200px' : '330px'}
            />
          </Box>
          <Box sx={{ width: isMobileView ? '100%' : 'calc(40% - 0px)', marginTop: '15px', marginLeft: isMobileView ? '0' : '28px', animation: 'fadeInUp 0.5s ease-out forwards', fontSize: { sm: '13px', md: '20px' } }}>
            {dataJoshtalk.map((ele) => (
              <Typography key={ele.id} sx={{ display: 'flex', flexDirection: 'row', gap: '5px', marginBottom: '10px', textAlign: 'justify', hyphens: 'auto' }}>
                <DoneIcon />
                {ele.val}
              </Typography>
            ))}
          </Box>
        </Box>

        <CounterBoxStyle>
            <CounterBox icon={<YouTubeIcon sx={{ fontSize: '50px', fontWeight: '700' }} />} count={count} label="Subscribers" />
            <DividerBox />
            <CounterBox icon={<InstagramIcon sx={{ fontSize: '50px', fontWeight: '700' }} />} count={instaCount} label="Followers" />
            <DividerBox />
            <CounterBox icon={<TelegramIcon sx={{ fontSize: '50px', fontWeight: '700' }} />} count={telegramCount} label="Followers" />
        </CounterBoxStyle>
      </Box>
    </Container>
  );
};



export default Acheivement;
