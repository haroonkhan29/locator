import React from 'react';

const Tracker = () => {
    return (
        <>
            <div className="main-page">
                <div className="phone-locator">
                    <h1>Phone Number Locator</h1>
                    <p>Number Details and IP Tracker</p>
                    <form className="phone-form">
                        {/* <select> */}
                        {/* <option value="+1" data-image={us}>🇺🇸 +1</option> */}
                        {/* </select> */}
                        <input type="text" placeholder="IP Adress" />
                        <button type="submit">Search</button>
                    </form>
                </div>
                
            </div>
            <div className='lookup'>
                <div className="reverse-lookup">
                    <h2>Reverse Name Lookup</h2>
                    <h7>Find People By Phone Number</h7>
                    <p>Email is an extremely popular form of online communication. It is used for login authentication, marketing campaigns, contacting old friends, and sometimes, unfortunately, scams. With billions of emails sent everyday, it's no surprise that you occasionally receive mail from unknown senders. But what do you do when you see an email you don't recognize? You plug it into your favorite search engine! However, searching online for an email rarely yields the information you seek. You are unlikely to find the email's owner, location, or whether or not that email has been associated with previous phishing scams. That's where That'sThem's reverse email lookup can help.</p>
                    <p>That'sThem's reverse email lookup searches nearly a trillion email records and links them with the owner's public record. This means by searching on That'sThem with only an email address, you get instant access to the owner's name, location, phone number, and even education credentials.</p>
                </div>
            </div>
        </>
    );
}

export default Tracker;