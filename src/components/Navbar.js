import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(null);
    const [isLoginButtonClicked, setLoginButtonClicked] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getNavbarStyle = () => {
        if (location.pathname === '/register' || (location.pathname === '/login' && isLoginButtonClicked)) {
            return { backgroundColor: 'white', color: 'black' };
        } else {
            return {
                background: 'linear-gradient(103.59deg, #0A06E0 0%, #0085FF 120.96%)',
                color: 'white'
            };
        }
    };

    const getButtonStyle = () => {
        if (location.pathname === '/register' || (location.pathname === '/login' && isLoginButtonClicked)) {
            return {
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black'
            };
        } else {
            return {
                background: 'linear-gradient(103.59deg, #0A06E0 0%, #0077ee 120.96%)',
                color: 'white',
                border: '1px solid white'
            };
        }
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveMenu(null);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setActiveMenu(null);
    };

    return (
        <nav className="navbar" style={getNavbarStyle()}>
            <div className="navbar-brand" style={{ color: getNavbarStyle().color }}>LOOKUP</div>
            <div className="menu-icon" onClick={toggleMenu}>
                {!isMenuOpen && (
                    <FontAwesomeIcon icon={faBars} />
                )}
            </div>
            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <li><Link to="/" style={{ color: getNavbarStyle().color }} onClick={() => handleMenuClick("home")} className={activeMenu === "home" ? "active" : ""}>Home</Link></li>
                <li><Link to="/lookup" style={{ color: getNavbarStyle().color }} onClick={() => handleMenuClick("lookup")} className={activeMenu === "lookup" ? "active" : ""}>Lookup</Link></li>
                <li><Link to="/ip-tracker" style={{ color: getNavbarStyle().color }} onClick={() => handleMenuClick("ip-tracker")} className={activeMenu === "ip-tracker" ? "active" : ""}>IP Tracker</Link></li>
                <li><Link to="/isd-codes" style={{ color: getNavbarStyle().color }} onClick={() => handleMenuClick("isd-codes")} className={activeMenu === "isd-codes" ? "active" : ""}>ISD Codes</Link></li>
                <li><Link to="/people-search" style={{ color: getNavbarStyle().color }} onClick={() => handleMenuClick("people-search")} className={activeMenu === "people-search" ? "active" : ""}>People Search</Link></li>
                <li><Link to="/history" style={{ color: getNavbarStyle().color }} onClick={() => handleMenuClick("history")} className={activeMenu === "history" ? "active" : ""}>History</Link></li>
            </ul>
            <div className={`auth-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/login" className="login" style={getButtonStyle()} onClick={() => { setLoginButtonClicked(true); closeMenu(); }}>Login</Link>
                <Link to="/register" className="register" onClick={closeMenu}>Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;
