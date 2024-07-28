import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import google from './images/google.png';
import './Login.css';

const Login = ({ setLoginButtonClicked }) => {
    const navigate = useNavigate(); 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name , email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                setLoginButtonClicked(true);
                navigate('/'); 
            } else {
                setError(data.msg || 'Login failed');
            }
        } catch (err) {
            setError('Server error');
        }
    };

    return (
        <div className="registration-page">
            <div className="registration-form">
                <h2>Welcome Back</h2>
                <p>Sign in Enter your details to With login to your accounts</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@gmail.com"
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Your password"
                            required
                        />
                    </div>
                    <div className="input-container row">
                        <div className="checkbox-container">
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <div className="forgot-password">
                            <a href="#forgot-password">Forgot Password?</a>
                        </div>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button 
                    type="submit" 
                        style={{ backgroundColor: '#FF7A00' }}
                    >
                        Login
                    </button>
                </form>
                <div className="or-container">
                    <div className="or-line"></div>
                    <p className="or-text">OR</p>
                    <div className="or-line"></div>
                </div>
                <button className="google-signup">
                    <img src={google} alt="Google Icon"/>
                    Sign In With Google
                </button>
            </div>
        </div>
    );
};

export default Login;
