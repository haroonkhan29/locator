import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Lookup from './components/Lookup';
import Tracker from './components/Tracker';
import IsdCodes from './components/IsdCodes';
import PeopleSearch from './components/PeopleSearch';
import History from './components/History';
import Registration from './components/Registration';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const [isLoginButtonClicked, setLoginButtonClicked] = useState(false);

    return (
        <Router>
            <div className="App">
                <Navbar isLoginButtonClicked={isLoginButtonClicked} />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/lookup" element={<Lookup />}/>
                    <Route path="/ip-tracker" element={<Tracker />}/>
                    <Route path="/isd-codes" element={<IsdCodes />}/>
                    <Route path="/people-search" element={<PeopleSearch />}/>
                    <Route path="/history" element={<History/>}/>
                    <Route path="/register" element={<Registration />} />
                    <Route path="/login" element={<Login setLoginButtonClicked={setLoginButtonClicked} />} />
             
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
