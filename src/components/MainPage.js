import React, { useState, useRef, useEffect } from 'react';
import './MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const countryOptions = [
    { code: '+93', label: 'Afghanistan', countryCode: 'af' },
    { code: '+355', label: 'Albania', countryCode: 'al' },
    { code: '+213', label: 'Algeria', countryCode: 'dz' },
    { code: '+376', label: 'Andorra', countryCode: 'ad' },
    { code: '+244', label: 'Angola', countryCode: 'ao' },
    { code: '+54', label: 'Argentina', countryCode: 'ar' },
    { code: '+374', label: 'Armenia', countryCode: 'am' },
    { code: '+61', label: 'Australia', countryCode: 'au' },
    { code: '+43', label: 'Austria', countryCode: 'at' },
    { code: '+994', label: 'Azerbaijan', countryCode: 'az' },
    { code: '+973', label: 'Bahrain', countryCode: 'bh' },
    { code: '+880', label: 'Bangladesh', countryCode: 'bd' },
    { code: '+375', label: 'Belarus', countryCode: 'by' },
    { code: '+32', label: 'Belgium', countryCode: 'be' },
    { code: '+501', label: 'Belize', countryCode: 'bz' },
    { code: '+229', label: 'Benin', countryCode: 'bj' },
    { code: '+975', label: 'Bhutan', countryCode: 'bt' },
    { code: '+591', label: 'Bolivia', countryCode: 'bo' },
    { code: '+387', label: 'Bosnia and Herzegovina', countryCode: 'ba' },
    { code: '+267', label: 'Botswana', countryCode: 'bw' },
    { code: '+55', label: 'Brazil', countryCode: 'br' },
    { code: '+673', label: 'Brunei', countryCode: 'bn' },
    { code: '+359', label: 'Bulgaria', countryCode: 'bg' },
    { code: '+226', label: 'Burkina Faso', countryCode: 'bf' },
    { code: '+257', label: 'Burundi', countryCode: 'bi' },
    { code: '+855', label: 'Cambodia', countryCode: 'kh' },
    { code: '+237', label: 'Cameroon', countryCode: 'cm' },
    { code: '+1', label: 'Canada', countryCode: 'ca' },
    { code: '+238', label: 'Cape Verde', countryCode: 'cv' },
    { code: '+236', label: 'Central African Republic', countryCode: 'cf' },
    { code: '+235', label: 'Chad', countryCode: 'td' },
    { code: '+56', label: 'Chile', countryCode: 'cl' },
    { code: '+86', label: 'China', countryCode: 'cn' },
    { code: '+57', label: 'Colombia', countryCode: 'co' },
    { code: '+269', label: 'Comoros', countryCode: 'km' },
    { code: '+242', label: 'Congo', countryCode: 'cg' },
    { code: '+243', label: 'Congo (DRC)', countryCode: 'cd' },
    { code: '+506', label: 'Costa Rica', countryCode: 'cr' },
    { code: '+225', label: "Côte d'Ivoire", countryCode: 'ci' },
    { code: '+385', label: 'Croatia', countryCode: 'hr' },
    { code: '+53', label: 'Cuba', countryCode: 'cu' },
    { code: '+357', label: 'Cyprus', countryCode: 'cy' },
    { code: '+420', label: 'Czech Republic', countryCode: 'cz' },
    { code: '+45', label: 'Denmark', countryCode: 'dk' },
    { code: '+253', label: 'Djibouti', countryCode: 'dj' },
    { code: '+1', label: 'Dominican Republic', countryCode: 'do' },
    { code: '+593', label: 'Ecuador', countryCode: 'ec' },
    { code: '+20', label: 'Egypt', countryCode: 'eg' },
    { code: '+503', label: 'El Salvador', countryCode: 'sv' },
    { code: '+240', label: 'Equatorial Guinea', countryCode: 'gq' },
    { code: '+291', label: 'Eritrea', countryCode: 'er' },
    { code: '+372', label: 'Estonia', countryCode: 'ee' },
    { code: '+251', label: 'Ethiopia', countryCode: 'et' },
    { code: '+679', label: 'Fiji', countryCode: 'fj' },
    { code: '+358', label: 'Finland', countryCode: 'fi' },
    { code: '+33', label: 'France', countryCode: 'fr' },
    { code: '+241', label: 'Gabon', countryCode: 'ga' },
    { code: '+220', label: 'Gambia', countryCode: 'gm' },
    { code: '+995', label: 'Georgia', countryCode: 'ge' },
    { code: '+49', label: 'Germany', countryCode: 'de' },
    { code: '+233', label: 'Ghana', countryCode: 'gh' },
    { code: '+30', label: 'Greece', countryCode: 'gr' },
    { code: '+299', label: 'Greenland', countryCode: 'gl' },
    { code: '+502', label: 'Guatemala', countryCode: 'gt' },
    { code: '+224', label: 'Guinea', countryCode: 'gn' },
    { code: '+245', label: 'Guinea-Bissau', countryCode: 'gw' },
    { code: '+592', label: 'Guyana', countryCode: 'gy' },
    { code: '+509', label: 'Haiti', countryCode: 'ht' },
    { code: '+504', label: 'Honduras', countryCode: 'hn' },
    { code: '+852', label: 'Hong Kong', countryCode: 'hk' },
    { code: '+36', label: 'Hungary', countryCode: 'hu' },
    { code: '+354', label: 'Iceland', countryCode: 'is' },
    { code: '+91', label: 'India', countryCode: 'in' },
    { code: '+62', label: 'Indonesia', countryCode: 'id' },
    { code: '+98', label: 'Iran', countryCode: 'ir' },
    { code: '+964', label: 'Iraq', countryCode: 'iq' },
    { code: '+353', label: 'Ireland', countryCode: 'ie' },
    { code: '+972', label: 'Israel', countryCode: 'il' },
    { code: '+39', label: 'Italy', countryCode: 'it' },
    { code: '+81', label: 'Japan', countryCode: 'jp' },
    { code: '+962', label: 'Jordan', countryCode: 'jo' },
    { code: '+7', label: 'Kazakhstan', countryCode: 'kz' },
    { code: '+254', label: 'Kenya', countryCode: 'ke' },
    { code: '+686', label: 'Kiribati', countryCode: 'ki' },
    { code: '+965', label: 'Kuwait', countryCode: 'kw' },
    { code: '+996', label: 'Kyrgyzstan', countryCode: 'kg' },
    { code: '+856', label: 'Laos', countryCode: 'la' },
    { code: '+371', label: 'Latvia', countryCode: 'lv' },
    { code: '+961', label: 'Lebanon', countryCode: 'lb' },
    { code: '+266', label: 'Lesotho', countryCode: 'ls' },
    { code: '+231', label: 'Liberia', countryCode: 'lr' },
    { code: '+218', label: 'Libya', countryCode: 'ly' },
    { code: '+423', label: 'Liechtenstein', countryCode: 'li' },
    { code: '+370', label: 'Lithuania', countryCode: 'lt' },
    { code: '+352', label: 'Luxembourg', countryCode: 'lu' },
    { code: '+853', label: 'Macau', countryCode: 'mo' },
    { code: '+389', label: 'North Macedonia', countryCode: 'mk' },
    { code: '+261', label: 'Madagascar', countryCode: 'mg' },
    { code: '+265', label: 'Malawi', countryCode: 'mw' },
    { code: '+60', label: 'Malaysia', countryCode: 'my' },
    { code: '+960', label: 'Maldives', countryCode: 'mv' },
    { code: '+223', label: 'Mali', countryCode: 'ml' },
    { code: '+356', label: 'Malta', countryCode: 'mt' },
    { code: '+692', label: 'Marshall Islands', countryCode: 'mh' },
    { code: '+222', label: 'Mauritania', countryCode: 'mr' },
    { code: '+230', label: 'Mauritius', countryCode: 'mu' },
    { code: '+52', label: 'Mexico', countryCode: 'mx' },
    { code: '+691', label: 'Micronesia', countryCode: 'fm' },
    { code: '+373', label: 'Moldova', countryCode: 'md' },
    { code: '+377', label: 'Monaco', countryCode: 'mc' },
    { code: '+976', label: 'Mongolia', countryCode: 'mn' },
    { code: '+382', label: 'Montenegro', countryCode: 'me' },
    { code: '+212', label: 'Morocco', countryCode: 'ma' },
    { code: '+258', label: 'Mozambique', countryCode: 'mz' },
    { code: '+95', label: 'Myanmar', countryCode: 'mm' },
    { code: '+264', label: 'Namibia', countryCode: 'na' },
    { code: '+674', label: 'Nauru', countryCode: 'nr' },
    { code: '+977', label: 'Nepal', countryCode: 'np' },
    { code: '+31', label: 'Netherlands', countryCode: 'nl' },
    { code: '+64', label: 'New Zealand', countryCode: 'nz' },
    { code: '+505', label: 'Nicaragua', countryCode: 'ni' },
    { code: '+227', label: 'Niger', countryCode: 'ne' },
    { code: '+234', label: 'Nigeria', countryCode: 'ng' },
    { code: '+683', label: 'Niue', countryCode: 'nu' },
    { code: '+850', label: 'North Korea', countryCode: 'kp' },
    { code: '+47', label: 'Norway', countryCode: 'no' },
    { code: '+968', label: 'Oman', countryCode: 'om' },
    { code: '+92', label: 'Pakistan', countryCode: 'pk' },
    { code: '+680', label: 'Palau', countryCode: 'pw' },
    { code: '+970', label: 'Palestine', countryCode: 'ps' },
    { code: '+507', label: 'Panama', countryCode: 'pa' },
    { code: '+675', label: 'Papua New Guinea', countryCode: 'pg' },
    { code: '+595', label: 'Paraguay', countryCode: 'py' },
    { code: '+51', label: 'Peru', countryCode: 'pe' },
    { code: '+63', label: 'Philippines', countryCode: 'ph' },
    { code: '+48', label: 'Poland', countryCode: 'pl' },
    { code: '+351', label: 'Portugal', countryCode: 'pt' },
    { code: '+974', label: 'Qatar', countryCode: 'qa' },
    { code: '+40', label: 'Romania', countryCode: 'ro' },
    { code: '+7', label: 'Russia', countryCode: 'ru' },
    { code: '+250', label: 'Rwanda', countryCode: 'rw' },
    { code: '+590', label: 'Saint Martin', countryCode: 'mf' },
    { code: '+685', label: 'Samoa', countryCode: 'ws' },
    { code: '+378', label: 'San Marino', countryCode: 'sm' },
    { code: '+239', label: 'Sao Tome and Principe', countryCode: 'st' },
    { code: '+966', label: 'Saudi Arabia', countryCode: 'sa' },
    { code: '+221', label: 'Senegal', countryCode: 'sn' },
    { code: '+381', label: 'Serbia', countryCode: 'rs' },
    { code: '+248', label: 'Seychelles', countryCode: 'sc' },
    { code: '+232', label: 'Sierra Leone', countryCode: 'sl' },
    { code: '+65', label: 'Singapore', countryCode: 'sg' },
    { code: '+421', label: 'Slovakia', countryCode: 'sk' },
    { code: '+386', label: 'Slovenia', countryCode: 'si' },
    { code: '+677', label: 'Solomon Islands', countryCode: 'sb' },
    { code: '+252', label: 'Somalia', countryCode: 'so' },
    { code: '+27', label: 'South Africa', countryCode: 'za' },
    { code: '+82', label: 'South Korea', countryCode: 'kr' },
    { code: '+34', label: 'Spain', countryCode: 'es' },
    { code: '+94', label: 'Sri Lanka', countryCode: 'lk' },
    { code: '+249', label: 'Sudan', countryCode: 'sd' },
    { code: '+597', label: 'Suriname', countryCode: 'sr' },
    { code: '+268', label: 'Swaziland', countryCode: 'sz' },
    { code: '+46', label: 'Sweden', countryCode: 'se' },
    { code: '+41', label: 'Switzerland', countryCode: 'ch' },
    { code: '+963', label: 'Syria', countryCode: 'sy' },
    { code: '+992', label: 'Tajikistan', countryCode: 'tj' },
    { code: '+255', label: 'Tanzania', countryCode: 'tz' },
    { code: '+66', label: 'Thailand', countryCode: 'th' },
    { code: '+670', label: 'Timor-Leste', countryCode: 'tl' },
    { code: '+228', label: 'Togo', countryCode: 'tg' },
    { code: '+690', label: 'Tokelau', countryCode: 'tk' },
    { code: '+676', label: 'Tonga', countryCode: 'to' },
    { code: '+1868', label: 'Trinidad and Tobago', countryCode: 'tt' },
    { code: '+216', label: 'Tunisia', countryCode: 'tn' },
    { code: '+90', label: 'Turkey', countryCode: 'tr' },
    { code: '+993', label: 'Turkmenistan', countryCode: 'tm' },
    { code: '+688', label: 'Tuvalu', countryCode: 'tv' },
    { code: '+256', label: 'Uganda', countryCode: 'ug' },
    { code: '+380', label: 'Ukraine', countryCode: 'ua' },
    { code: '+971', label: 'United Arab Emirates', countryCode: 'ae' },
    { code: '+44', label: 'United Kingdom', countryCode: 'gb' },
    { code: '+1', label: 'United States', countryCode: 'us' },
    { code: '+598', label: 'Uruguay', countryCode: 'uy' },
    { code: '+998', label: 'Uzbekistan', countryCode: 'uz' },
    { code: '+678', label: 'Vanuatu', countryCode: 'vu' },
    { code: '+379', label: 'Vatican City', countryCode: 'va' },
    { code: '+58', label: 'Venezuela', countryCode: 've' },
    { code: '+84', label: 'Vietnam', countryCode: 'vn' },
    { code: '+681', label: 'Wallis and Futuna', countryCode: 'wf' },
    { code: '+967', label: 'Yemen', countryCode: 'ye' },
    { code: '+260', label: 'Zambia', countryCode: 'zm' },
    { code: '+263', label: 'Zimbabwe', countryCode: 'zw' }
];

const filteredCountryOptions = countryOptions.filter(option => !['Ally', 'Harry Allew', 'Harry Anna'].includes(option.label));

const MainPage = () => {
    const [selectedCountry, setSelectedCountry] = useState({ code: '(+93)', countryCode: 'af', label: 'Afghanistan' });
    const [phoneNumber, setPhoneNumber] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCountryOptions, setFilteredCountryOptions] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 
    const dropdownRef = useRef(null);

    useEffect(() => {
        const normalizedQuery = searchQuery.toLowerCase();
        const matchingCountries = countryOptions.filter(option =>
            option.label.toLowerCase().includes(normalizedQuery)
        );

        const sortedCountries = matchingCountries.sort((a, b) => {
            const aStartsWithQuery = a.label.toLowerCase().startsWith(normalizedQuery.charAt(0));
            const bStartsWithQuery = b.label.toLowerCase().startsWith(normalizedQuery.charAt(0));

            if (aStartsWithQuery && !bStartsWithQuery) return -1;
            if (!aStartsWithQuery && bStartsWithQuery) return 1;
            return a.label.localeCompare(b.label);
        });

        setFilteredCountryOptions(sortedCountries);
    }, [searchQuery]);

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
        setIsLoading(true);  
        
        if (phoneNumber.startsWith('+92') || phoneNumber.startsWith('03')) {
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

                const apiFormattedNumber = formattedPhoneNumber.replace('+', '%2B');

                const response = await fetch(`https://8p8uxjd0w0.execute-api.us-east-1.amazonaws.com/dev/numberlocator?phoneNumber=${apiFormattedNumber}`, {
                    headers: {
                        'Authorization': `Bearer ${idToken}`,
                    },
                });

                const data = await response.json();
                const responseData = data.responseData || {};

                const searchResults = [{
                    cnic: responseData.cnic ? responseData.cnic.trim() : 'N/A',
                    name: responseData.name ? responseData.name.trim() : 'N/A',
                    country: 'Pakistan',
                    phone: formattedPhoneNumber || 'N/A',
                }];

                localStorage.setItem('searchResults', JSON.stringify(searchResults));
                setSearchResults(searchResults);

            } catch (error) {
                console.error('Error during API calls', error);
                alert('An error occurred while fetching data. Please try again.');
            } finally {
                setIsLoading(false);  
            }
        } else {
            setTimeout(() => {
                const searchResults = [{
                    name: phoneNumber || 'N/A', 
                    phone: phoneNumber || 'N/A', 
                    cnic: 'N/A',
                    country: selectedCountry.label || 'N/A',  
                }];

                localStorage.setItem('searchResults', JSON.stringify(searchResults));
                setSearchResults(searchResults);  
                setIsLoading(false);  
            }, 1000); 
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
                                <img src={`https://flagcdn.com/48x36/${selectedCountry.countryCode}.png`} alt={selectedCountry.label} />
                                <span>{selectedCountry.label}</span>
                                <div style={{ marginLeft: 'auto' }}>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                            </div>
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    <input
                                        type="text"
                                        className="dropdown-search"
                                        placeholder="Search country..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    {filteredCountryOptions.map((option) => (
                                        <div key={option.code} className="dropdown-item" onClick={() => handleSelectCountry(option)}>
                                            <img src={`https://flagcdn.com/48x36/${option.countryCode}.png`} alt={option.label} />
                                            <span>{option.label}</span>
                                            <span style={{ color: 'white', marginLeft: '10px' }}>{option.code}</span>
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
                        <button type="button" onClick={handleSearch} disabled={isLoading}>Search</button>
                    </form>

                    {isLoading && (
                        <div className="loading-screen">
                            <div className="loading-spinner">
                                <div className="spinner-circle"></div>
                            </div>
                            <p>Loading...</p>
                        </div>
                    )}

                    {!isLoading && (
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
                                                    <FontAwesomeIcon icon={faTrash} style={{ color: 'white' }} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
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