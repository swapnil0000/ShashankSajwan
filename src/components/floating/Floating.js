import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
const actions = [
  { icon: <WhatsAppIcon />, name: 'Whatsapp' },
  { icon: <InstagramIcon />, name: 'Instagram' },
  { icon: <XIcon />, name: 'Twitter' },
  { icon: <TelegramIcon />, name: 'Telegram' },
 


];

export default function Floating() {
  return (
    <Box sx={{ position:'fixed',bottom:'240px',right:'0px' }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 , color:'orange'
    }}
        icon={<SpeedDialIcon  />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            sx={{backgroundColor:'GrayText'}}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}