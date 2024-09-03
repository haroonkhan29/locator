import React, { useState, useRef, useEffect } from 'react';
import './MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import pak from './images/pak.png';
import DeleteIcon from '@mui/icons-material/Delete';

const countryOptions = [
    { code: '+92', label: 'Pakistan', image: pak, numbers: ['1112223333', '2223334444', '3334445555'] },
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
            const authResponse = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB38GZTr10ndJg03CsLZs0m-rMfUuvuvPA', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: 'haroon77.afridi@gmail.com',
                    password: 'firebase111@',
                    returnSecureToken: true,
                }),
            });
            
            const authData = await authResponse.json();
            const idToken = authData.idToken;

            let formattedPhoneNumber = phoneNumber;

            if (phoneNumber.startsWith('03')) {
                formattedPhoneNumber = '+92' + phoneNumber.slice(1);
            }

            formattedPhoneNumber = formattedPhoneNumber.replace('+', '%2B');

            const response = await fetch(`https://8p8uxjd0w0.execute-api.us-east-1.amazonaws.com/dev/numberlocator?phoneNumber=${formattedPhoneNumber}`, {
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                },
            });

            const data = await response.json();
            const responseData = data.responseData || {};
            const searchResults = [{
                cnic: responseData.cnic ? responseData.cnic.trim() : 'N/A',
                name: responseData.name ? responseData.name.trim() : 'N/A',
                country: responseData.country || 'N/A',
                phone: responseData.phone || 'N/A',
            }];

            localStorage.setItem('searchResults', JSON.stringify(searchResults));
            setSearchResults(searchResults);

        } catch (error) {
            console.error('Error during API calls', error);
            alert('An error occurred while fetching data. Please try again.');
        }
    };

    const handleDelete = (index) => {
        const updatedResults = searchResults.filter((_, i) => i !== index);
        setSearchResults(updatedResults);
        localStorage.setItem('searchResults', JSON.stringify(updatedResults));
    };

    useEffect(() => {
        const savedResults = localStorage.getItem('searchResults');
        if (savedResults) {
            setSearchResults(JSON.parse(savedResults));
        }

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
                                    <th>Phone</th>
                                    <th>CNIC</th>
                                    <th>Country</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchResults.map((result, index) => (
                                    <tr key={index}>
                                        <td>{result.name}</td>
                                        <td>{result.phone}</td>
                                        <td>{result.cnic}</td>
                                        <td>{result.country}</td>
                                        <td>
                                            <button onClick={() => handleDelete(index)} className="delete-button">
                                                <DeleteIcon style={{ color: 'white' }} />
                                            </button>
                                        </td>
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
