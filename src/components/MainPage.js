import React, { useState, useRef } from 'react';
import './MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import us from './images/us.png';
import usa from './images/usa.png';
import pak from './images/pak.png';
import uk from './images/uk.png';
import china from './images/china.png';
import UAE from './images/Uae.png';

const countryOptions = [
    { code: '+1', label: 'United States', image: usa },
    { code: '+0', label: 'Pakistan', image: pak },
    { code: '+0', label: 'United Kingdom', image: uk },
    { code: '+0', label: 'United Arab Emirates', image: UAE },
    { code: '+0', label: 'China', image: china },
    // { code: '+1', label: 'Anguilla', image: "https://www.countryflags.com" },

];
const MainPage = () => {
    const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleSelectCountry = (option) => {
        setSelectedCountry(option);
        setIsDropdownOpen(false);
    };

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="main-page">
                <div className="phone-locator">
                    <h1>Phone Number Locator</h1>
                    <p>Number Details and IP Tracker</p>
                    <form className="phone-form">
                        <div className="dropdown-container" ref={dropdownRef}>
                            <div className="dropdown-selected" onClick={handleToggleDropdown}>
                                <img src={selectedCountry.image} alt={selectedCountry.label} />
                                <span>{selectedCountry.label}</span>
                                <div style={{ marginLeft: 'auto' }}>
                                   <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                </div>
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    {countryOptions.map((option) => (
                                        <div key={option.code} className="dropdown-item" onClick={() => handleSelectCountry(option)}>
                                            <img src={option.image} alt={option.label} />
                                            <span>{option.label}</span>
                                            
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <input type="text" placeholder="(123) 456-7890" />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className='lookup'>
                <div className="reverse-lookup">
                    <h2>Reverse Name Lookup</h2>
                    <h7>Find People By Phone Number</h7>
                    <p>Email is an extremely popular form of online communication. It is used for login authentication, marketing campaigns, contacting old friends, and sometimes, unfortunately, scams. With billions of emails sent every day, it's no surprise that you occasionally receive mail from unknown senders. But what do you do when you see an email you don't recognize? You plug it into your favorite search engine! However, searching online for an email rarely yields the information you seek. You are unlikely to find the email's owner, location, or whether or not that email has been associated with previous phishing scams. That's where That'sThem's reverse email lookup can help.</p>
                    <p>That'sThem's reverse email lookup searches nearly a trillion email records and links them with the owner's public record. This means by searching on That'sThem with only an email address, you get instant access to the owner's name, location, phone number, and even education credentials.</p>
                </div>
            </div>
        </>
    );
};

export default MainPage;
