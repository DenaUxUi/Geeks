import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login'; // Adjust the path as necessary
import './Auth.css'; // Import the styles

const Auth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      navigate('/PersonalPage'); // Redirect to PersonalPage
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('username');
    navigate('/Login'); // Redirect to Login
  };

  useEffect(() => {
    const token = localStorage.getItem('access');
    const storedUsername = localStorage.getItem('username');
    if (token) {
      setIsAuthenticated(true);
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  return (
    <div className="auth-container">
      {isAuthenticated ? (
        <div className="welcome-container">
          <h1>Welcome, {username}!</h1>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Auth;
