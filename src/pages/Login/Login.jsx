import React, { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Topline from '../../widgets/topline/topline';
import Header from './../../widgets/header/Header';
import Footer from '../../widgets/Footer/Footer';
import ProtectedComponent from './../Login/ProtectedComponent';
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://192.168.31.250:8000/login/', {
        username,
        password,
      });

      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      localStorage.setItem('username', username); 
      console.log('Login successful');
      onLogin(); 
      Navigate("/PersonalPage");
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <Topline />
      <Header />
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">login</button>
            <p className="message">Not registered? <Link to={"/SignUp"}>Create an account</Link></p>
            <ProtectedComponent />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
