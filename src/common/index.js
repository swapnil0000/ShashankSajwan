import { Box, useMediaQuery, useTheme } from "@mui/material"

export const FlexCenterColoum=({children})=>{
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  const isSmallMobileView=useMediaQuery(theme.breakpoints.down("sm"));
    return(
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' sx={{width:'100%',marginTop:isMobileView?"15px":"10px"}}>{children}</Box>
    )
 }

