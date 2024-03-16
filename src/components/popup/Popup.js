// Popup.js
import React from 'react';

const Popup = ({ onClose }) => {
    console.log({onClose})
  return (
    <div className="popup">
      <h2>Welcome to Our Website!</h2>
      <p>This is a popup message. You can customize it as per your requirement.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;
