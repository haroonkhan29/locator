import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Lookup from './components/Lookup';
import Tracker from './components/Tracker';
import IsdCodes from './components/IsdCodes';
import History from './components/History';
import Registration from './components/Registration';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
    const [isLoginButtonClicked, setLoginButtonClicked] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            setLoginButtonClicked(true);
        }
    }, []);

    return (
        <Router>
            <div className="App">
                <Navbar isLoginButtonClicked={isLoginButtonClicked} />
                <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/lookup" element={isLoggedIn ? <Lookup /> : <Navigate to="/login" />} />
                    <Route path="/ip-tracker" element={isLoggedIn ? <Tracker /> : <Navigate to="/login" />} />
                    <Route path="/isd-codes" element={isLoggedIn ? <IsdCodes /> : <Navigate to="/login" />} />
                    <Route path="/history" element={isLoggedIn ? <History /> : <Navigate to="/login" />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/login" element={<Login setLoginButtonClicked={setLoginButtonClicked} setIsLoggedIn={setIsLoggedIn} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
