import { Box, Container, useMediaQuery, useTheme } from "@mui/material"

export const FlexCenterColoum=({children})=>{
  const theme=useTheme();
  const isMobileView=useMediaQuery
  (theme.breakpoints.down("md"))
  const isSmallMobileView=useMediaQuery(theme.breakpoints.down("sm"));
    return(
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' sx={{width:'100%',marginTop:isMobileView?"15px":"0px"}}>{children}</Box>
    )
 }

 // CONTACT 

 export const ContentWrapper=({children})=>{
      return (
         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} >
         {children}</Box>
      )
 }

// CONTACCT
 export const ContainerWrapper = ({children})=>{
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', marginTop: '100px', alignItems: 'center', justifyContent: 'center',marginBottom:'20px'}}>{children}</Container>
  )
 }

// CONTACT
 export const DesktopMobileLayout=({children})=>{
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  return (
      <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: 'space-evenly',width:'50%'}}>
        {children}
      </Box>
  )
 }


 // AUTHOR PHOTO AND CONTACT FORM

 export const AuthorContactForm=({children})=>{
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  return (
      <Box sx={{ display: 'flex', flexDirection: isMobileView ? "column" : "row", alignItems: 'center', justifyContent: 'space-evenly',width:'100%'}}>
        {children}
      </Box>
  )
 }

 export const ColumnCenter=({children})=>{
  return (
    <Box sx={{ display: 'flex', flexDirection:"column", alignItems: 'center', justifyContent: 'center'}}>
      {children}
    </Box>
)
 }
