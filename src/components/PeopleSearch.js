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
];

const PeopleSearch = () => {
    const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(null);
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

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
            setSearchResult({
                name: 'W.A. Mcintosh',
                city: 'Live in Ocala, FL',
                dob: 'Born on March 4th 1946 (77 Years Old)',
                residence: 'Ocala, FL 34453',
                lastUpdated: 'Last Updated 12 Years Ago',
                header: 'W.A. Mcintosh',
                header1: 'in the United State of America'
            });
        }, 2000);
    };

    return (
        <>
            <div className="main-page">
                <div className="phone-locator">
                    <h1>Phone Number Locator</h1>
                    <p>Number Details and IP Tracker</p>
                    <form className={`phone-form ${isLoading ? 'hidden' : ''}`} onSubmit={handleSubmit}>
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
                        <input type="text" placeholder="Enter Full Name" />
                        <button type="submit">Search</button>
                    </form>
                </div>
                {isLoading && (
                    <div className="loading-screen">
                        <div className="loading-spinner">
                            <div className="spinner-circle"></div>
                        </div>
                        <p>Loading...</p>
                    </div>
                )}
                  </div>
                {searchResult && (
                    <div className="searchs-results">
                        <h2 className="name-header2">{searchResult.header}</h2>
                        <p  className="name-header3">{searchResult.header1}</p>
                        <table>
                        <tbody>
                                <tr>
                                    <th className="name-header1" colSpan="2">{searchResult.lastUpdated}</th>
                                </tr>
                                <tr >
                                <th className="name-header" colSpan="2">{searchResult.name}</th>
                                </tr>
                     
                                <tr>
                                    <td>Name:</td>
                                    <td>{searchResult.name}</td>
                                </tr>
                                <tr>
                                    <td>City:</td>
                                    <td>{searchResult.city}</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth:</td>
                                    <td>{searchResult.dob}</td>
                                </tr>
                                <tr>
                                    <td>Residence:</td>
                                    <td>{searchResult.residence}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
          
        </>
    );
};

export default PeopleSearch;
