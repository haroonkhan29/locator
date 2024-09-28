import React, { useState } from 'react';
import google from './images/google.png';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('password', password);

            const response = await fetch('https://appstarktec.com/register.php', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorMessage = await response.json();
                throw new Error(errorMessage.error);
            }

            setSuccessMessage('Registration successful! Please log in.');
            setName('');
            setEmail('');
            setPhone('');
            setPassword('');
            setError('');
            navigate('/login');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        const clientId = '139432883336-0qeplf9qee45dhvont84u77okog57ktf.apps.googleusercontent.com';
        const redirectUri = 'https://appstarktec.com/google-oauth.php';

        const url = `https://accounts.google.com/o/oauth2/auth?` +
            `response_type=code&` +
            `client_id=${clientId}&` +
            `redirect_uri=${redirectUri}&` +
            `scope=https://www.googleapis.com/auth/userinfo.email&` +
            `access_type=offline&` +
            `prompt=consent`;

        window.open(url, '_self');

        try {
            const response = await fetch('https://appstarktec.com/google-oauth.php');
            const data = await response.json();
            if (data.success) {
                localStorage.setItem('token', data.token);
                setIsLoggedIn(true);
                navigate('/lookup');
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error("Error fetching session state:", error);
        }
    };

    return (
        <div className="registration-page">
            <div className="registration-form">
                <h2>Let's Create Your Account</h2>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {error && <p className="error">{error}</p>}
                <p>Sign Up With Us And Get 50% OFF On Your First Order</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            required
                        />
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
                    <button type="submit">Create An Account</button>
                </form>
                <div className="or-container">
                    <div className="or-line"></div>
                    <p className="or-text">OR</p>
                    <div className="or-line"></div>
                </div>
                <button className="google-signup" onClick={handleGoogleSignIn}>
                    <img src={google} alt="Google Icon" />
                    Sign up With Google
                </button>
            </div>
        </div>
    );
};

export default Registration;
