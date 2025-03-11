import React, { useState } from 'react';
import "../popup/popupStyle.css";
import popupImage from "../popup/popup.webp";
import { useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PopupDialog = () => {
  const [showPopup, setShowPopup] = useState(true);
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"))
  console.log("SWAPNIL")
  const handleClose = () => {

    // Close the popup
    setShowPopup(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/courses');
    setShowPopup(false);
  }

  return (
    <div>
      {showPopup && (
        <div className="home-popup">
          <div className="popup">
            <img onClick={handleClick} src="/assets/newpopup2026.jpeg" alt="Popup Image" style={{ width: isMobileView ? "350px" : "90%", height: isMobileView ? "220px" : "400px", borderRadius: '5px', cursor: 'pointer' }} />
            {!isMobileView && <button style={{}} className="close-popup-btn" onClick={handleClose}>Close</button>}
            {
              isMobileView && <button style={{ fontSize: '20px' }} className="close-popup-mobile" onClick={handleClose}>Close</button>
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupDialog;

// {!isMobileView&& <div className="popup-content">
//   <img onClick={handleClick} src="/assets/biggest.jpg" alt="Popup Image" style={{width:isMobileView?"auto":"100%",height:isMobileView?"300px":"500px"}}/>
//   {!isMobileView && <button style={{}} className="close-popup-btn" onClick={handleClose}>Close</button>            }
// </div>}
// {
//   isMobileView && <div className="popup-mobile">
//   <img onClick={handleClick} src="/assets/biggest.jpg" alt="Popup Image" style={{width:isMobileView?"auto":"100%",height:isMobileView?"300px":"500px"}}/>
//   {!isMobileView && <button style={{}} className="close-popup-btn" onClick={handleClose}>Close</button>            }
// </div>
// }
