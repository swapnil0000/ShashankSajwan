import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const actions = [
  { icon: <InstagramIcon />, name: 'Instagram', link: 'https://www.instagram.com/iasips_mentor?igsh=Mjk1bGNraGttNW5i' },
  { icon: <XIcon />, name: 'Twitter', link: 'https://twitter.com/iasips_mentor' },
  { icon: <TelegramIcon />, name: 'Telegram', link: 'https://t.me/iasips_mentor' },
  { icon: <YouTubeIcon />, name: 'Youtube', link: 'https://youtube.com/@ShashankSajwan?si=wmlMFjuWQhsZmCGS' },
];

export default function Floating() {
  return (
    <Box sx={{ position: 'fixed', bottom: '240px', right: '0px', backgroundColor: 'orange' }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16, color: 'orange' }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => window.open(action.link, '_blank')} // Open link in a new tab
            IconButtonProps={{
              sx: {
                color: 'orange',
                '&:hover': {
                  backgroundColor: 'orange',
                },
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
