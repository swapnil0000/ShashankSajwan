import React, { useState } from 'react';
import "../Notes/notesstyle.css";
import Acheivement from '../Acheivement/Acheivement';

const Notes = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div >
     ookkok
    </div>
  );
};

export default Notes;
