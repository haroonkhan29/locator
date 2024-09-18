import React, { useState, useEffect } from 'react';
import RestoreIcon from '@mui/icons-material/Restore'; 
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';
import './History.css';

const History = () => {
    const [activeTab, setActiveTab] = useState('numberHistory');
    const [numberHistory, setNumberHistory] = useState([]);
    const [ipHistory, setIpHistory] = useState([]);
    const navigate = useNavigate();  

    useEffect(() => {
        const loadedNumberHistory = JSON.parse(localStorage.getItem('numberHistory')) || [];
        const loadedIpHistory = JSON.parse(localStorage.getItem('ipHistory')) || [];
        setNumberHistory(loadedNumberHistory);
        setIpHistory(loadedIpHistory);
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleDelete = (type, index) => {
        if (type === 'numberHistory') {
            const updatedNumberHistory = numberHistory.filter((_, i) => i !== index);
            localStorage.setItem('numberHistory', JSON.stringify(updatedNumberHistory));
            setNumberHistory(updatedNumberHistory);
        } else if (type === 'ipHistory') {
            const updatedIpHistory = ipHistory.filter((_, i) => i !== index);
            localStorage.setItem('ipHistory', JSON.stringify(updatedIpHistory));
            setIpHistory(updatedIpHistory);
        }
    };

    const handleIconClick = (type) => {
        if (type === 'numberHistory') {
            navigate('/lookup');
        } else if (type === 'ipHistory') {
            navigate('/ip-tracker');  
        }
    };
    return (
        <>
            <div className="main-page">
                <div className="phone-locator">
                    <h1>Phone Number Locator</h1>
                    <p>Number Details and IP Tracker History</p>
                </div>
            </div>

            <div className="history-container">
                <div className="history-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'numberHistory' ? 'active' : ''}`}
                        onClick={() => handleTabClick('numberHistory')}
                    >
                        Number History
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'ipHistory' ? 'active' : ''}`}
                        onClick={() => handleTabClick('ipHistory')}
                    >
                        IP History
                    </button>
                </div>

                <div className="history-content">
                    {activeTab === 'numberHistory' && numberHistory.map((item, index) => (
                        <div key={index} className="history-card">
                            <div className="icon-container">
                                <RestoreIcon
                                    style={{ color: '#1976d2', fontSize: '30px' }}
                                    onClick={() => handleIconClick('numberHistory')}  // Pass type 'numberHistory'
                                />
                            </div>
                            <div className="history-info">
                                <p className="phone-number">{item.phone}</p>
                                <p className="date">{item.date}</p>
                            </div>
                            <button 
                                className="delete-button" 
                                onClick={() => handleDelete('numberHistory', index)}
                            >
                                <DeleteOutlineIcon style={{ color: 'red', fontSize: '30px' }} />
                            </button>
                        </div>
                    ))}
                    {activeTab === 'ipHistory' && ipHistory.map((item, index) => (
                        <div key={index} className="history-card">
                            <div className="icon-container">
                                <RestoreIcon
                                    style={{ color: '#1976d2', fontSize: '30px' }}
                                    onClick={() => handleIconClick('ipHistory')}  // Pass type 'ipHistory'
                                />
                            </div>
                            <div className="history-info">
                                <p className="phone-number">{item.ip}</p>
                                <p className="date">{item.date}</p>
                            </div>
                            <button 
                                className="delete-button" 
                                onClick={() => handleDelete('ipHistory', index)}
                            >
                                <DeleteOutlineIcon style={{ color: 'red', fontSize: '30px' }} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default History;
