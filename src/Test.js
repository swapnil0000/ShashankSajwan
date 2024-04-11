import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Test = ({children}) => {
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ 
      width: '100%', 
      marginTop: isMobileView?"100px":"110px", 
      position: 'relative', 
      height:'150px',
      backgroundImage: "linear-gradient( 26.3deg ,rgba(8,24,68,1) 87.6%   ,rgba(0,119,182,1) 9.6%)",
    }}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
           fontSize:isMobileView?"20px":"50px",
          padding: '10px 20px',
        }}
      >
        NCERT NOTES
      </Typography>
    </Box>

  );
};

export default Test;
