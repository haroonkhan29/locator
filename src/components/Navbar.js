import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isLoginButtonClicked }) => {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setActiveMenu('home');
                break;
            case '/lookup':
                setActiveMenu('lookup');
                break;
            case '/ip-tracker':
                setActiveMenu('ip-tracker');
                break;
            case '/isd-codes':
                setActiveMenu('isd-codes');
                break;
            case '/history':
                setActiveMenu('history');
                break;
            case '/login':
                setActiveMenu('login');
                break;
            case '/register':
                setActiveMenu('register');
                break;
            default:
                setActiveMenu('');
                break;
        }
    }, [location.pathname]);

    const getNavbarStyle = () => {
        if (location.pathname === '/register' || location.pathname === '/login') {
            return { backgroundColor: 'white', color: 'black' };
        } else {
            return {
                background: 'linear-gradient(103.59deg, #0A06E0 0%, #0085FF 120.96%)',
                color: 'white'
            };
        }
    };

    const getButtonStyle = () => {
        if (location.pathname === '/register' || location.pathname === '/login') {
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

    return (
        <nav className="navbar" style={getNavbarStyle()}>
            <div className="navbar-brand" style={{ color: getNavbarStyle().color }}>LOOKUP</div>
            <div className="menu-icon" onClick={toggleMenu}>
                {!isMenuOpen && (
                    <FontAwesomeIcon icon={faBars} />
                )}
            </div>
            <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''} ${isAuthPage ? 'disabled' : ''}`}>
                <li><Link to="/" style={{ color: getNavbarStyle().color }} onClick={closeMenu} className={activeMenu === "home" ? "active" : ""}>Home</Link></li>
                <li><Link to="/lookup" style={{ color: getNavbarStyle().color }} onClick={closeMenu} className={activeMenu === "lookup" ? "active" : ""}>Number Locator</Link></li>
                <li><Link to="/ip-tracker" style={{ color: getNavbarStyle().color }} onClick={closeMenu} className={activeMenu === "ip-tracker" ? "active" : ""}>IP Tracker</Link></li>
                <li><Link to="/isd-codes" style={{ color: getNavbarStyle().color }} onClick={closeMenu} className={activeMenu === "isd-codes" ? "active" : ""}>ISD Codes</Link></li>
                <li><Link to="/history" style={{ color: getNavbarStyle().color }} onClick={closeMenu} className={activeMenu === "history" ? "active" : ""}>History</Link></li>
            </ul>
            <div className={`auth-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/login" className="login" style={getButtonStyle()} onClick={closeMenu}>Login</Link>
                <Link to="/register" className="register" onClick={closeMenu}>Register</Link>
            </div>
        </nav>
    );
}

export default Navbar;
