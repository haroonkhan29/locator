import React, { useState, useEffect } from 'react';
import google from './images/google.png'; 
import './Registration.css';

const Registration = () => {
    const [users, setUsers] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            password: e.target.password.value,
        };
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const data = await response.json();
            console.log(data); 
            setSuccessMessage('Account created successfully!'); 
            e.target.reset();
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000); 
        } catch (err) {
            console.error(err);
            setSuccessMessage('Failed to create account');
        }
    };


    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/users');
            const data = await response.json();
            setUsers(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="registration-page">
            <div className="registration-form">
                <h2>Let's Create Your Account</h2>
                {successMessage && <p className="success-message">{successMessage}</p>}
                <p>Sign Up With Us And Get 50% OFF On Your First Order</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="name@gmail.com" required />
                    </div>
                    <div className="input-container">
                        <label htmlFor="phone">Phone Number</label>
                        <div className="phone-input">
                            <select name="country">
                                <option value="USA">USA</option>
                                <option value="UAE">UAE</option>
                                <option value="PAK">PAK</option>
                            </select>
                            <input type="tel" id="phone" name="phone" placeholder="+166 (555) 000-0000" required />
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Your password" required />
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
