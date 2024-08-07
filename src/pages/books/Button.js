import { Box , Button, Typography} from '@mui/material'
import React, { useState } from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const ButtonComp = ({isExpanded,setIsExpanded,link}) => {

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    const handleClick=(link)=>{
      window.open(link, "_blank");
    }
  return (
    <Box sx={{ display: 'flex', alignItems: 'centre', flexDirection: 'row', gap: '30px' }}>
    <Button variant='text'
        onClick={handleToggle}
        sx={{cursor: 'pointer', color: 'black', borderRadius: '70%' , outline:'none',border:'none' ,display:'flex',alignItems:'center',justifyContent:'center',textTransform:'none'}}

    >
        {isExpanded?"Read Less":"Read More"}
        {isExpanded ? <ArrowDropUpIcon sx={{color:'black',fontWeight:'20px'}}/> :<ArrowDropDownIcon sx={{color:'black'}}/>}


    </Button>
    <Button variant='contained' onClick={() => handleClick(link)} sx={{ marginTop: '10px', borderRadius: '20px' }}>Buy Now</Button>
</Box>
  )
}

export default ButtonComp