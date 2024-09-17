import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Tracker = () => {
    const [ip, setIp] = useState('');
    const [ipData, setIpData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        const savedIp = localStorage.getItem('ip');
        const savedIpData = localStorage.getItem('ipData');
        if (savedIp && savedIpData) {
            setIp(savedIp);
            setIpData(JSON.parse(savedIpData));
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true); 

        try {
            const response = await axios.get(`https://ipinfo.io/${ip}/json`);
            const data = response.data;

            localStorage.setItem('ip', ip);
            localStorage.setItem('ipData', JSON.stringify(data));

            setIpData(data);
        } catch (err) {
            setError('Error fetching data. Please try again.');
        } finally {
            setLoading(false); 
        }
    };

    const handleDelete = () => {
        localStorage.removeItem('ip');
        localStorage.removeItem('ipData');
        setIp('');
        setIpData(null);
    };

    return (
        <>
            <div className="main-page">
                <div className="phone-locator">
                    <h1>Phone Number Locator</h1>
                    <p>Number Details and IP Tracker</p>
                    <form className="phone-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="IP Address"
                            value={ip}
                            onChange={(e) => setIp(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    {loading && (
                        <div className="loading-screen">
                            <div className="loading-spinner">
                                <div className="spinner-circle"></div>
                            </div>
                            <p>Loading...</p>
                        </div>
                    )}

                    {ipData && !loading && (
                        <div className="search-results">
                            <table>
                                <thead>
                                    <tr>
                                        <th>IP</th>
                                        <th>City</th>
                                        <th>Region</th>
                                        <th>Country</th>
                                        <th>Longitude</th>
                                        <th>Postal</th>
                                        <th>Timezone</th>
                                        <th>Organization</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{ipData.ip}</td>
                                        <td>{ipData.city}</td>
                                        <td>{ipData.region}</td>
                                        <td>{ipData.country}</td>
                                        <td>{ipData.loc}</td>
                                        <td>{ipData.postal}</td>
                                        <td>{ipData.timezone}</td>
                                        <td>{ipData.org}</td>
                                        <td>
                                            <button onClick={handleDelete} className="delete-button">
                                                <FontAwesomeIcon icon={faTrash} style={{ color: 'white' }} />
                                            </button>
                                        </td>
                                    </tr>
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

export default Tracker;
