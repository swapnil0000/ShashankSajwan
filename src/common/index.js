import { Box } from "@mui/material"

export const FlexCenterColoum=({children})=>{
    return(
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>{children}</Box>
    )
 }