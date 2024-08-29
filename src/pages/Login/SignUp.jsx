import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Change this import
import Topline from '../../widgets/topline/topline';
import Header from '../../widgets/header/Header';

function SignUp() {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const [username, setUsername] = useState('');
    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_Password] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirm_password) {
            alert("Пароли не совпадают"); 
            return; 
        }

        try {
            // Send username, password, and confirm_password
            const response = await axios.post('http://192.168.31.250:8000/users/', {
                username,
                first_name,
                last_name,
                password,
                confirm_password, 
            });
            console.log('Registration successful', response.data);
            navigate('/Login'); // Use navigate instead of history.push
        } catch (error) {
            console.error('Registration failed', error.response ? error.response.data : error);
        }
    };

    return (
        <div>
            <Topline />
            <Header />

            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>

                <label>
                    First Name:
                    <input
                        id='first_name'
                        type="text" 
                        value={first_name}
                        onChange={(e) => setFirst_Name(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Last Name:
                    <input
                        id='last_name'
                        type="text" 
                        value={last_name}
                        onChange={(e) => setLast_Name(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Password:
                    <input
                        id='password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>

                <label>
                    Confirm Password:
                    <input
                        id='confirm_password'
                        type="password" 
                        value={confirm_password}
                        onChange={(e) => setConfirm_Password(e.target.value)}
                        required
                    />
                </label>

                <button id='submit' type="submit">Register</button>
            </form>
        </div>
    );
}

export default SignUp;
