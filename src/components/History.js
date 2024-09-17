import React, { useState } from 'react';
import RestoreIcon from '@mui/icons-material/Restore'; 
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './History.css';

const History = () => {
    const [activeTab, setActiveTab] = useState('numberHistory');

    const numberHistory = [
        { phone: "+971507724737", date: "16-09-2024 13:19 PM" },
        { phone: "+923415349554", date: "16-09-2024 13:17 PM" }
    ];

    const ipHistory = [
        { ip: "61.5.147.5", date: "16-09-2024 12:30 PM" },
        { ip: "61.5.147.6", date: "15-09-2024 11:15 AM" }
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
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
                <header className="history-header">
                    <button className="back-button"></button>
                    {/* <h1>History</h1> */}
                </header>

                <div className="history-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'numberHistory' ? 'active' : ''}`}
                        onClick={() => handleTabClick('numberHistory')}
                    >
                        Number 
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'ipHistory' ? 'active' : ''}`}
                        onClick={() => handleTabClick('ipHistory')}
                    >
                        IP 
                    </button>
                </div>

                <div className="history-content">
                    {activeTab === 'numberHistory' && numberHistory.map((item, index) => (
                        <div key={index} className="history-card">
                            <div className="icon-container">
                                <RestoreIcon style={{ color: '#1976d2', fontSize: '30px' }} />
                            </div>
                            <div className="history-info">
                                <p className="phone-number">{item.phone}</p>
                                <p className="date">{item.date}</p>
                            </div>
                            <button className="delete-button">
                                <DeleteOutlineIcon style={{ color: 'red', fontSize: '30px' }} />
                            </button>
                        </div>
                    ))}
                    {activeTab === 'ipHistory' && ipHistory.map((item, index) => (
                        <div key={index} className="history-card">
                            <div className="icon-container">
                                <RestoreIcon style={{ color: '#1976d2', fontSize: '30px' }} />
                            </div>
                            <div className="history-info">
                                <p className="phone-number">{item.ip}</p>
                                <p className="date">{item.date}</p>
                            </div>
                            <button className="delete-button">
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
