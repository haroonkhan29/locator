import React, { useState, useRef, useEffect } from 'react';
import './MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import usa from './images/usa.png';
import pak from './images/pak.png';
import uk from './images/uk.png';
import china from './images/china.png';
import UAE from './images/Uae.png';
import axios from 'axios';

const countryOptions = [
    { code: '+1', label: 'United States', image: usa, numbers: ['1234567890', '2345678901', '3456789012'] },
    { code: '+92', label: 'Pakistan', image: pak, numbers: ['1112223333', '2223334444', '3334445555'] },
    { code: '+44', label: 'United Kingdom', image: uk, numbers: ['4445556666', '5556667777', '6667778888'] },
    { code: '+971', label: 'United Arab Emirates', image: UAE, numbers: ['7778889999', '8889990000', '9990001111'] },
    { code: '+86', label: 'China', image: china, numbers: ['1234567890', '2345678901', '3456789012'] },
    { code: '+1', label: 'Ally', image: usa, numbers: ['1111111111'] },
    { code: '+1', label: 'Harry Allew', image: usa, numbers: ['4444444444'] },
    { code: '+1', label: 'Harry Anna', image: usa, numbers: ['7777777777'] },
];

const filteredCountryOptions = countryOptions.filter(option => !['Ally', 'Harry Allew', 'Harry Anna'].includes(option.label));

const Lookup = () => {
    const [selectedCountry, setSelectedCountry] = useState(filteredCountryOptions[0]);
    const [phoneNumber, setPhoneNumber] = useState(selectedCountry.code);
    const [searchResults, setSearchResults] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleSelectCountry = (option) => {
        setSelectedCountry(option);
        setPhoneNumber(option.code);
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

    const handleSearch = async () => {
        try {
            const authResponse = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB38GZTr10ndJg03CsLZs0m-rMfUuvuvPA', {
                email: 'haroon77.afridi@gmail.com',
                password: 'firebase111@',
                returnSecureToken: true
            });
            const idToken = authResponse.data.idToken; 
    
            const { data } = await axios.get(`https://8p8uxjd0w0.execute-api.us-east-1.amazonaws.com/dev/numberlocator?phoneNumber=${phoneNumber}`, {
                headers: {
                    'Authorization': `Bearer ${idToken}`
                }
            });
    
            const filteredResults = data.results || [];
            setSearchResults(filteredResults.map(result => ({
                country: result.country,
                number: result.number
            })));
        } catch (error) {
            console.error('Error during API calls', error);
            alert('An error occurred while fetching data. Please try again.');
        }
    };
    

    useEffect(() => {
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
                                    {filteredCountryOptions.map((option) => (
                                        <div key={option.code} className="dropdown-item" onClick={() => handleSelectCountry(option)}>
                                            <img src={option.image} alt={option.label} />
                                            <span>{option.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <input
                            type="text"
                            placeholder="(123) 456-7890"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <button type="button" onClick={handleSearch}>Search</button>
                    </form>
                    <div className="search-results">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchResults.map((result, index) => (
                                    <tr key={index}>
                                        <td>{result.country}</td>
                                        <td>{result.number}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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

export default Lookup;
