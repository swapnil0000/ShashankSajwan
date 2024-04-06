import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom';

const actions = [
  { icon: <WhatsAppIcon />, name: 'Whatsapp',link:'https://www.instagram.com/iasips_mentor?igsh=Mjk1bGNraGttNW5i' },
  { icon: <InstagramIcon />, name: 'Instagram',link:"https://www.instagram.com/iasips_mentor?igsh=Mjk1bGNraGttNW5i" },
  { icon: <XIcon />, name: 'Twitter' ,link:'https://www.instagram.com/iasips_mentor?igsh=Mjk1bGNraGttNW5i'},
  { icon: <TelegramIcon />, name: 'Telegram',link:'https://t.me/iasips_mentor' },
  { icon: <TelegramIcon />, name: 'Youtube',link:'https://youtube.com/@ShashankSajwan?si=wmlMFjuWQhsZmCGS' },
];

export default function Floating() {
  return (
    <Box sx={{ position:'fixed', bottom:'240px', right:'0px' ,backgroundColor:'orange' }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16,color:'orange' }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            IconButtonProps={{
              sx: {
                color: 'orange',
                '&:hover': {
                  backgroundColor: 'orange',
                },
              },
            }}
          >
           <Link to={action.link}></Link>
          </SpeedDialAction>
        ))}
      </SpeedDial>
    </Box>
  );
}
<SpeedDial
ariaLabel="SpeedDial basic example"
sx={{ position: 'fixed', bottom: 16, right: 16, color: 'orange' }}
icon={<SpeedDialIcon />}
>
{actions.map((action) => (
  <Link to={action.link} key={action.name}>
    <SpeedDialAction
    key={action.name}
      icon={action.icon}
      tooltipTitle={action.name}
      IconButtonProps={{
        sx: {
          color: 'orange',
          '&:hover': {
            backgroundColor: 'orange',
          },
        },
      }}
    />
  </Link>
))}
</SpeedDial>


