import React, { useState } from 'react';
import google from './images/google.png'; 
import { useNavigate } from 'react-router-dom'; 
import './Registration.css';

const Registration = () => {
    const navigate = useNavigate(); 
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
                        <label htmlFor="phone">Phone Number</label>
                        <div className="phone-input">
                            <select name="country">
                                <option value="USA">USA</option>
                                <option value="UAE">UAE</option>
                                <option value="PAK">PAK</option>
                            </select>
                            <input type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="+166 (555) 000-0000"
                                required 
                            />
                        </div>
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
                <button className="google-signup">
                    <img src={google} alt="Google Icon"/>
                    Sign up With Google
                </button>
            </div>
        </div>
    );
};

export default Registration;
