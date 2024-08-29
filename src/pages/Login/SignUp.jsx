import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topline from '../../widgets/topline/topline';
import Header from '../../widgets/header/Header';
import Footer from '../../widgets/Footer/Footer';
import "./SignUp.css"; // Подключаем стили

function SignUp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [first_name, setFirst_Name] = useState('');
    const [date_of_birth, setDate_of_birth] = useState('');
    const [phone, setPhone] = useState('');
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
            const response = await axios.post('http://192.168.31.250:8000/users/', {
                username,
                first_name,
                last_name,
                date_of_birth, // Дата уже в формате ГГГГ-ММ-ДД
                phone,
                password,
                confirm_password, 
            });
            console.log('Registration successful', response.data);
            navigate('/Login'); 
        } catch (error) {
            console.error('Registration failed', error.response ? error.response.data : error);
        }
    };

    return (
        <div>
            <Topline />
            <Header />
            <div className="signup-page">
                <form className="signup-form" onSubmit={handleSubmit}>
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
                        Date:
                        <input
                            id='date_of_birth'
                            type="date"
                            value={date_of_birth}
                            onChange={(e) => setDate_of_birth(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Number:
                        <input
                            id='nimber'
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
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
            <Footer />
        </div>
    );
}

export default SignUp;
