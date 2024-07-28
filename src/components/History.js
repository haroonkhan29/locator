import React from 'react';
import './History.css';

const History = () => {
    const searchResult = {
        name: 'W.A. Mcintosh',
        city: 'Live in Ocala, FL',
        dob: 'Born on March 4th 1946 (77 Years Old)',
        residence: 'Ocala, FL 34453',
        lastUpdated: 'Last Updated 12 Years Ago',
        header: 'W.A. Mcintosh',
        header1: 'in the United State of America'
    };

    return (
        <>
            <div className="main-page">
                <div className="phone-locator">
                    <h1>Phone Number Locator</h1>
                    <p>Number Details and IP Tracker</p>
                    {/* <form className="phone-form">
                        <input type="text" placeholder="IP Address" />
                        <button type="submit">Search</button>
                    </form> */}
                </div>
            </div>
                <div className="searchs-results">
                    <h2 className="name-header2">{searchResult.header}</h2>
                    <p className="name-header3">{searchResult.header1}</p>
                    <table>
                        <tbody>
                            <tr>
                                <th className="name-header1" colSpan="2">{searchResult.lastUpdated}</th>
                            </tr>
                            <tr>
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
        </>
    );
}

export default History;
