import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const PopupDialog = ({ open, onClose }) => {
  return (
    <Dialog sx={{zIndex:1}} open={open} onClose={onClose}>
      <DialogTitle>Welcome to Our Website!</DialogTitle>
      <DialogContent>
        <p>This is a popup message. You can customize it as per your requirement.</p>
        <p>Include important information related to the website here.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupDialog;
