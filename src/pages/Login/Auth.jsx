import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login'; // Adjust the path as necessary
import './Auth.css'; // Import the styles
import user_icon from "../../shared/icons/user.jpg"
import axios from 'axios';

const Auth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null); // Для хранения данных пользователя
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
    setUserData(null); // Сбрасываем данные пользователя
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

  useEffect(() => {
    // Получаем данные пользователя только если есть токен
    const token = localStorage.getItem('access');
    if (token) {
      axios.get("http://192.168.31.250:8000/users/")
        .then((response) => {
          console.log(response.data);
          const user = response.data.find(user => user.username === username); // Находим пользователя по имени
          if (user) {
            setUserData(user); // Сохраняем данные пользователя
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [username]);

  return (
    <div className="auth-container">
      {isAuthenticated ? (
        <>
          <div className="welcome-container">
            <div>
              <img className='avatar' src={user_icon} alt="" />
              <h1>Welcome, {username}!</h1>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            {userData && (
              <div className="user-info">
                <h1>User Information:</h1>
                <h3><strong>First Name:</strong> {userData.first_name}</h3>
                <h3><strong>Last Name:</strong> {userData.last_name}</h3>
                <h4><strong>Phone:</strong> {userData.phone}</h4>
                <h4><strong>Age:</strong> {userData.age}</h4>
              </div>
            )}
          </div>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Auth;
