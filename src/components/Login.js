import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import google from './images/google.png';
import './Login.css';

const Login = ({ setLoginButtonClicked, setIsLoggedIn }) => {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            
            const response = await fetch('https://appstarktec.com/login.php', {
                method: 'POST',
                body: formData,
            });
            
            if (!response.ok) {
                const errorMessage = await response.json();
                throw new Error(errorMessage.error);
            }
            
            const data = await response.json();
            localStorage.setItem('token', data.token);
            setIsLoggedIn(true); 
            navigate('/'); 
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="registration-page">
            <div className="registration-form">
                <h2>Welcome Back</h2>
                <p>Sign in Enter your details to login to your account</p>
                <form onSubmit={handleSubmit}>
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
