import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions such as clearing authentication tokens or user data
    localStorage.removeItem('userToken'); // Example action
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="logout-container">
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Logout;
