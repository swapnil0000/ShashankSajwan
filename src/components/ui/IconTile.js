import React from 'react';
import { Box } from '@mui/material';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import TrackChangesRoundedIcon from '@mui/icons-material/TrackChangesRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';

// Emojis used in content/admin data → matching icons, so the site looks consistent
// while admins can keep typing a simple emoji. Unknown emojis render as-is.
const MAP = {
  '📘': MenuBookRoundedIcon, '🧭': ExploreRoundedIcon, '🎯': TrackChangesRoundedIcon, '🏛️': AccountBalanceRoundedIcon, '🏛': AccountBalanceRoundedIcon,
  '📚': AutoStoriesRoundedIcon, '📰': NewspaperRoundedIcon, '🗞️': NewspaperRoundedIcon, '🌏': PublicRoundedIcon, '▶️': PlayCircleRoundedIcon,
  '✅': TaskAltRoundedIcon, '🎓': SchoolRoundedIcon, '💸': SavingsRoundedIcon, '🏅': WorkspacePremiumRoundedIcon, '🤝': HandshakeRoundedIcon,
  '🧠': PsychologyRoundedIcon, '👤': PersonRoundedIcon, '🙂': PersonRoundedIcon, '✉️': MailRoundedIcon, '❓': HelpRoundedIcon, '✈️': TelegramIcon,
  '📺': YouTubeIcon, '🔑': KeyRoundedIcon, '🛠️': AdminPanelSettingsRoundedIcon, '🗂️': DashboardRoundedIcon,
};
// Tuning the matching emoji: '🎯' with a goal tone etc.
const TONES = ['#1B2A6B', '#FF8A1F', '#E0294A'];
MAP['🎯'] = TrackChangesRoundedIcon;
MAP['💡'] = TuneRoundedIcon;

const IconTile = ({ icon, color, size = 48, radius = 16, solid = false }) => {
  const Icon = MAP[icon];
  const tone = color || TONES[(String(icon).codePointAt(0) || 0) % TONES.length];
  return (
    <Box
      sx={{
        width: size, height: size, flexShrink: 0, borderRadius: `${radius}px`, display: 'grid', placeItems: 'center',
        color: solid ? '#fff' : tone, background: solid ? 'var(--grad)' : `${tone}14`, border: solid ? 'none' : `1px solid ${tone}26`,
        fontSize: size * 0.48,
      }}
    >
      {Icon ? <Icon sx={{ fontSize: size * 0.5 }} /> : icon}
    </Box>
  );
};

export default IconTile;
