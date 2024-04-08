import React, { useEffect, useState } from 'react';
import "../popup/popupStyle.css";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false); // Initialize showPopup as false initially

  useEffect(() => {
    const poppy = localStorage.getItem('myPopup');
    if (!poppy) {
      setShowPopup(true); // Set showPopup to true only if the flag is not found in localStorage
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
              <h2>Popup Title</h2>
              <p>Popup body text goes here.</p>
              <button className="close-popup-btn" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
