import React, { useEffect } from 'react';
import $ from 'jquery'; 
const Popup = () => {
  useEffect(() => {
    // Check if the popup has been shown before
    const poppy = localStorage.getItem('myPopup');

    // If the popup hasn't been shown before, show it
    if (!poppy) {
      function PopUp() {
        $('.home-popup').fadeIn(500);
      }

      // Show the popup after a delay
      setTimeout(function () {
        PopUp();
      }, 1000); // 1000 to load it after 1 second from page load

      // Close the popup when the close button is clicked
      $('.close-popup-btn').click(function () {
        $('.popup').fadeOut(300);
      });

      // Set a flag in local storage to indicate that the popup has been shown
      localStorage.setItem('myPopup', 'true');
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="home-popup" style={{ display: 'none' }}>
      <div className="popup">
        <div className="popup-content">
          <h2>Popup Title</h2>
          <p>Popup body text goes here.</p>
          <button className="close-popup-btn">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

