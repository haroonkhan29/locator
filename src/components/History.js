import React, { useState } from 'react';
import './History.css';
import { Margin } from '@mui/icons-material';

const History = () => {
    const [activeTab, setActiveTab] = useState('numberHistory');

    const numberHistory = [
        { phone: "+971507724737", date: "16-09-2024 13:19 PM" },
        { phone: "+923415349554", date: "16-09-2024 13:17 PM" }
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="main-page">
                <div className="phone-locator">
                    <h1>Phone Number Locator</h1>
                    <p>Number Details and IP Tracker</p>
                </div>
            </div>

            <div className="history-container">
                <header className="history-header">
                    <button className="back-button">←</button>
                    <h1>History</h1>
                </header>

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
                                <img src="/assets/history-icon.png" alt="history icon" />
                            </div>
                            <div className="history-info">
                                <p className="phone-number">{item.phone}</p>
                                <p className="date">{item.date}</p>
                            </div>
                            <button className="delete-button">
                                <img src="/assets/trash-icon.png" alt="delete" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default History;
