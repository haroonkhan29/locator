import React from 'react';
import './Footer.css';
import icon from './images/icon.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    LOOKUP
                    <div>
                        <img src={icon} alt="Lookup Logo" className="footer-logo" />
                    </div>
                </div>
                
                <div className="footer-menu">
                    <h4>Menu</h4>
                    <a href="#">Home</a>
                    <a href="#">Lookup</a>
                    <a href="#">IP Tracker</a>
                    <a href="#">ISD Codes</a>
                    <a href="#">People Search</a>
                    <a href="#">History</a>
                </div>
                
                <div className="footer-company">
                    <h4>Company</h4>
                    <p>People Search</p>
                    <p>History</p>
                </div>
                
                <div className="footer-news">
                    <h4>Sign Up For Blend News</h4>
                    <form className="footer-form">
                        <div className="footer-input-container">
                            <input type="email" placeholder="Enter Your Email" className="footer-input" />
                            <button type="submit" className="footer-subscribe-btn">SUBSCRIBE</button>
                        </div>
                    </form>
                    <div className="footer-social">
                        <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>
            <p className='line'></p>
            <p className="footer-copy">Copyright © 2023 Number Lookup</p>
        </footer>
    );
}

export default Footer;
