import React, { useState } from 'react';
import "../popup/popupStyle.css";
import popupImage from "../popup/popup.webp";
import { useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PopupDialog = () => {
  const [showPopup, setShowPopup] = useState(true);
  const theme=useTheme();
  const isMobileView=useMediaQuery(theme.breakpoints.down("md"))
  console.log("SWAPNIL")
  const handleClose = () => {
   
    // Close the popup
    setShowPopup(false);
  };

  const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/courses');
    setShowPopup(false);
  }

  return (
    <div>
      {showPopup && (
        <div className="home-popup">
          <div className="popup">
            <div className="popup-content">
              <img onClick={handleClick} src="/assets/popup.webp" alt="Popup Image" style={{width:isMobileView?"360px":"700px",height:isMobileView?"230px":"400px"}}/>
              <button className="close-popup-btn" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupDialog;
