import React, { useEffect, useState } from 'react';
import "../popup/popupStyle.css";
import popupImage from  "../popup/popup.webp";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const poppy = localStorage.getItem('myPopup');
    if (!poppy) {
      setShowPopup(true);
      localStorage.setItem('myPopup', 'true');
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div className="home-popup">
          <div className="popup">
            <div className="popup-content">
              <img src={popupImage} alt="Popup Image" />
              <button className="close-popup-btn" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
