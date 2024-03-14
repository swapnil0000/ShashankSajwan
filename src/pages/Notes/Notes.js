import React, { useState } from 'react';
import "../Notes/notesstyle.css";

const Notes = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="container">
      <div className={`dropdown ${showDropdown ? 'show-dropdown' : ''}`}>
        <button className="dropdown-button" onClick={toggleDropdown}>
          <i className="ri-user-heart-line dropdown-icon"></i>
          <span className="dropdown-name">My Profile</span>

          <div className="dropdown-icons">
            <i className="ri-arrow-down-s-line dropdown-arrow"></i>
            <i className="ri-close-fill dropdown-close"></i>
          </div>
        </button>

        <ul className="drop-menu">
          <li className="dropdown-item">
            <i className="ri-message-3-line dropdown-icon"></i>
            <span className="dropdown-name">Messages</span>
          </li>

          <li className="dropdown-item">
            <i className="ri-lock-password-line dropdown-icon"></i>
            <span className="dropdown-name">Accounts</span>
          </li>

          <li className="dropdown-item">
            <i className="ri-settings-3-line dropdown-icon"></i>
            <span className="dropdown-name">Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Notes;
