import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

export default function Notes() {
 
  const [open,setOpen]=React.useState(false);

  const handleClose=()=>{
    setOpen(!open)
  }

  return (
    <div style={{width:'100px',height:'100px',marginTop:'150px'}}>
    <Menu
    id="basic-menu"
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
  >
    <MenuItem sx={{color:'white'}} onClick={handleClose}>Profile</MenuItem>
    <MenuItem onClick={handleClose}>My account</MenuItem>
    <MenuItem onClick={handleClose}>Logout</MenuItem>
  </Menu>
    </div>
  );
}