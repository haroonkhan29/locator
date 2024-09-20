// import React, { useState } from 'react';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import './MainPage.css'; 

// const countryOptions = [
//         { "code": '+93', "label": 'Afghanistan', "flag": 'https://flagcdn.com/w320/af.png' },
//         { "code": '+355', "label": 'Albania', "flag": 'https://flagcdn.com/w320/al.png' },
//         { "code": '+213', "label": 'Algeria', "flag": 'https://flagcdn.com/w320/dz.png' },
//         { "code": '+1684', "label": 'American Samoa', "flag": 'https://flagcdn.com/w320/as.png' },
//         { "code": '+376', "label": 'Andorra', "flag": 'https://flagcdn.com/w320/ad.png' },
//         { "code": '+244', "label": 'Angola', "flag": 'https://flagcdn.com/w320/ao.png' },
//         { "code": '+1-264', "label": 'Anguilla', "flag": 'https://flagcdn.com/w320/ai.png' },
//         { "code": '+1-268', "label": 'Antigua and Barbuda', "flag": 'https://flagcdn.com/w320/ag.png' },
//         { "code": '+54', "label": 'Argentina', "flag": 'https://flagcdn.com/w320/ar.png' },
//         { "code": '+374', "label": 'Armenia', "flag": 'https://flagcdn.com/w320/am.png' },
//         { "code": '+297', "label": 'Aruba', "flag": 'https://flagcdn.com/w320/aw.png' },
//         { "code": '+61', "label": 'Australia', "flag": 'https://flagcdn.com/w320/au.png' },
//         { "code": '+43', "label": 'Austria', "flag": 'https://flagcdn.com/w320/at.png' },
//         { "code": '+994', "label": 'Azerbaijan', "flag": 'https://flagcdn.com/w320/az.png' },
//         { "code": '+1-242', "label": 'Bahamas', "flag": 'https://flagcdn.com/w320/bs.png' },
//         { "code": '+973', "label": 'Bahrain', "flag": 'https://flagcdn.com/w320/bh.png' },
//         { "code": '+880', "label": 'Bangladesh', "flag": 'https://flagcdn.com/w320/bd.png' },
//         { "code": '+1-246', "label": 'Barbados', "flag": 'https://flagcdn.com/w320/bb.png' },
//         { "code": '+375', "label": 'Belarus', "flag": 'https://flagcdn.com/w320/by.png' },
//         { "code": '+32', "label": 'Belgium', "flag": 'https://flagcdn.com/w320/be.png' },
//         { "code": '+501', "label": 'Belize', "flag": 'https://flagcdn.com/w320/bz.png' },
//         { "code": '+229', "label": 'Benin', "flag": 'https://flagcdn.com/w320/bj.png' },
//         { "code": '+1-441', "label": 'Bermuda', "flag": 'https://flagcdn.com/w320/bm.png' },
//         { "code": '+975', "label": 'Bhutan', "flag": 'https://flagcdn.com/w320/bt.png' },
//         { "code": '+591', "label": 'Bolivia', "flag": 'https://flagcdn.com/w320/bo.png' },
//         { "code": '+387', "label": 'Bosnia and Herzegovina', "flag": 'https://flagcdn.com/w320/ba.png' },
//         { "code": '+385', "label": 'Croatia', "flag": 'https://flagcdn.com/w320/hr.png' },
//         { "code": '+53', "label": 'Cuba', "flag": 'https://flagcdn.com/w320/cu.png' },
//         { "code": '+357', "label": 'Cyprus', "flag": 'https://flagcdn.com/w320/cy.png' },
//         { "code": '+420', "label": 'Czech Republic', "flag": 'https://flagcdn.com/w320/cz.png' },
//         { "code": '+45', "label": 'Denmark', "flag": 'https://flagcdn.com/w320/dk.png' },
//         { "code": '+253', "label": 'Djibouti', "flag": 'https://flagcdn.com/w320/dj.png' },
//         { "code": '+1-767', "label": 'Dominica', "flag": 'https://flagcdn.com/w320/dm.png' },
//         { "code": '+1-809', "label": 'Dominican Republic', "flag": 'https://flagcdn.com/w320/do.png' },
//         { "code": '+593', "label": 'Ecuador', "flag": 'https://flagcdn.com/w320/ec.png' },
//         { "code": '+20', "label": 'Egypt', "flag": 'https://flagcdn.com/w320/eg.png' },
//         { "code": '+503', "label": 'El Salvador', "flag": 'https://flagcdn.com/w320/sv.png' },
//         { "code": '+240', "label": 'Equatorial Guinea', "flag": 'https://flagcdn.com/w320/gq.png' },
//         { "code": '+291', "label": 'Eritrea', "flag": 'https://flagcdn.com/w320/er.png' },
//         { "code": '+372', "label": 'Estonia', "flag": 'https://flagcdn.com/w320/ee.png' },
//         { "code": '+268', "label": 'Eswatini', "flag": 'https://flagcdn.com/w320/sz.png' },
//         { "code": '+354', "label": 'Iceland', "flag": 'https://flagcdn.com/w320/is.png' },
//         { "code": '+91', "label": 'India', "flag": 'https://flagcdn.com/w320/in.png' },
//         { "code": '+62', "label": 'Indonesia', "flag": 'https://flagcdn.com/w320/id.png' },
//         { "code": '+98', "label": 'Iran', "flag": 'https://flagcdn.com/w320/ir.png' },
//         { "code": '+353', "label": 'Ireland', "flag": 'https://flagcdn.com/w320/ie.png' },
//         { "code": '+972', "label": 'Israel', "flag": 'https://flagcdn.com/w320/il.png' },
//         { "code": '+39', "label": 'Italy', "flag": 'https://flagcdn.com/w320/it.png' },
//         { "code": '+81', "label": 'Japan', "flag": 'https://flagcdn.com/w320/jp.png' },
//         { "code": '+962', "label": 'Jordan', "flag": 'https://flagcdn.com/w320/jo.png' },
//         { "code": '+7', "label": 'Kazakhstan', "flag": 'https://flagcdn.com/w320/kz.png' },
//         { "code": '+254', "label": 'Kenya', "flag": 'https://flagcdn.com/w320/ke.png' },
//         { "code": '+686', "label": 'Kiribati', "flag": 'https://flagcdn.com/w320/ki.png' },
//         { "code": '+965', "label": 'Kuwait', "flag": 'https://flagcdn.com/w320/kw.png' },
//         { "code": '+996', "label": 'Kyrgyzstan', "flag": 'https://flagcdn.com/w320/kg.png' },
//         { "code": '+856', "label": 'Laos', "flag": 'https://flagcdn.com/w320/la.png' },
//         { "code": '+371', "label": 'Latvia', "flag": 'https://flagcdn.com/w320/lv.png' },
//         { "code": '+961', "label": 'Lebanon', "flag": 'https://flagcdn.com/w320/lb.png' },
//         { "code": '+266', "label": 'Lesotho', "flag": 'https://flagcdn.com/w320/ls.png' },
//         { "code": '+231', "label": 'Liberia', "flag": 'https://flagcdn.com/w320/lr.png' },
//         { "code": '+218', "label": 'Libya', "flag": 'https://flagcdn.com/w320/ly.png' },
//         { "code": '+423', "label": 'Liechtenstein', "flag": 'https://flagcdn.com/w320/li.png' },
//         { "code": '+370', "label": 'Lithuania', "flag": 'https://flagcdn.com/w320/lt.png' },
//         { "code": '+352', "label": 'Luxembourg', "flag": 'https://flagcdn.com/w320/lu.png' },
//         { "code": '+853', "label": 'Macau', "flag": 'https://flagcdn.com/w320/mo.png' },
//         { "code": '+389', "label": 'North Macedonia', "flag": 'https://flagcdn.com/w320/mk.png' },
//         { "code": '+261', "label": 'Madagascar', "flag": 'https://flagcdn.com/w320/mg.png' },
//         { "code": '+265', "label": 'Malawi', "flag": 'https://flagcdn.com/w320/mw.png' },
//         { "code": '+60', "label": 'Malaysia', "flag": 'https://flagcdn.com/w320/my.png' },
//         { "code": '+960', "label": 'Maldives', "flag": 'https://flagcdn.com/w320/mv.png' },
//         { "code": '(+223)', "label": 'Mali', "flag": 'https://flagcdn.com/w320/ml.png' },
//         { "code": '(+356)', "label": 'Malta', "flag": 'https://flagcdn.com/w320/mt.png' },
//         { "code": '(+692)', "label": 'Marshall Islands', "flag": 'https://flagcdn.com/w320/mh.png' },
//         { "code": '(+222)', "label": 'Mauritania', "flag": 'https://flagcdn.com/w320/mr.png' },
//         { "code": '(+230)', "label": 'Mauritius', "flag": 'https://flagcdn.com/w320/mu.png' },
//         { "code": '(+52)', "label": 'Mexico', "flag": 'https://flagcdn.com/w320/mx.png' },
//         { "code": '(+691)', "label": 'Micronesia', "flag": 'https://flagcdn.com/w320/fm.png' },
//         { "code": '(+373)', "label": 'Moldova', "flag": 'https://flagcdn.com/w320/md.png' },
//         { "code": '(+377)', "label": 'Monaco', "flag": 'https://flagcdn.com/w320/mc.png' },
//         { "code": '(+976)', "label": 'Mongolia', "flag": 'https://flagcdn.com/w320/mn.png' },
//         { "code": '(+212)', "label": 'Morocco', "flag": 'https://flagcdn.com/w320/ma.png' },
//         { "code": '(+264)', "label": 'Namibia', "flag": 'https://flagcdn.com/w320/na.png' },
//         { "code": '(+977)', "label": 'Nepal', "flag": 'https://flagcdn.com/w320/np.png' },
//         { "code": '(+31)', "label": 'Netherlands', "flag": 'https://flagcdn.com/w320/nl.png' },
//         { "code": '(+64)', "label": 'New Zealand', "flag": 'https://flagcdn.com/w320/nz.png' },
//         { "code": '(+850)', "label": 'North Korea', "flag": 'https://flagcdn.com/w320/kp.png' },
//         { "code": '(+968)', "label": 'Oman', "flag": 'https://flagcdn.com/w320/om.png' },
//         { "code": '(+970)', "label": 'Palestine', "flag": 'https://flagcdn.com/w320/ps.png' },
//         { "code": '(+63)', "label": 'Philippines', "flag": 'https://flagcdn.com/w320/ph.png' },
//         { "code": '(+974)', "label": 'Qatar', "flag": 'https://flagcdn.com/w320/qa.png' },
//         { "code": '+46', "label": 'Sweden', "flag": 'https://flagcdn.com/w320/se.png' },
//         { "code": '+41', "label": 'Switzerland', "flag": 'https://flagcdn.com/w320/ch.png' },
//         { "code": '+963', "label": 'Syria', "flag": 'https://flagcdn.com/w320/sy.png' },
//         { "code": '+992', "label": 'Tajikistan', "flag": 'https://flagcdn.com/w320/tj.png' },
//         { "code": '+1-670', "label": 'Northern Mariana Islands', "flag": 'https://flagcdn.com/w320/mp.png' },
//         { "code": '+228', "label": 'Togo', "flag": 'https://flagcdn.com/w320/tg.png' },
//         { "code": '+66', "label": 'Thailand', "flag": 'https://flagcdn.com/w320/th.png' },
//         { "code": '+262', "label": 'Réunion', "flag": 'https://flagcdn.com/w320/re.png' },
//         { "code": '+92', "label": 'Pakistan', "flag": 'https://flagcdn.com/w320/pk.png' },
//         { "code": '+680', "label": 'Palau', "flag": 'https://flagcdn.com/w320/pw.png' },
//         { "code": '+970', "label": 'Palestine', "flag": 'https://flagcdn.com/w320/ps.png' },
//         { "code": '+507', "label": 'Panama', "flag": 'https://flagcdn.com/w320/pa.png' },
//         { "code": '+675', "label": 'Papua New Guinea', "flag": 'https://flagcdn.com/w320/pg.png' },
//         { "code": '+595', "label": 'Paraguay', "flag": 'https://flagcdn.com/w320/py.png' },
//         { "code": '+51', "label": 'Peru', "flag": 'https://flagcdn.com/w320/pe.png' },
//         { "code": '+63', "label": 'Philippines', "flag": 'https://flagcdn.com/w320/ph.png' },
//         { "code": '+48', "label": 'Poland', "flag": 'https://flagcdn.com/w320/pl.png' },
//         { "code": '+351', "label": 'Portugal', "flag": 'https://flagcdn.com/w320/pt.png' },
//         { "code": '+1787', "label": 'Puerto Rico', "flag": 'https://flagcdn.com/w320/pr.png' },
//         { "code": '+974', "label": 'Qatar', "flag": 'https://flagcdn.com/w320/qa.png' },
//         { "code": '+262', "label": 'Réunion', "flag": 'https://flagcdn.com/w320/re.png' },
//         { "code": '+40', "label": 'Romania', "flag": 'https://flagcdn.com/w320/ro.png' },
//         { "code": '+7', "label": 'Russia', "flag": 'https://flagcdn.com/w320/ru.png' },
//         { "code": '+250', "label": 'Rwanda', "flag": 'https://flagcdn.com/w320/rw.png' },
//         { "code": '+685', "label": 'Samoa', "flag": 'https://flagcdn.com/w320/ws.png' },
//         { "code": '+378', "label": 'San Marino', "flag": 'https://flagcdn.com/w320/sm.png' },
//         { "code": '+239', "label": 'São Tomé and Príncipe', "flag": 'https://flagcdn.com/w320/st.png' },
//         { "code": '+966', "label": 'Saudi Arabia', "flag": 'https://flagcdn.com/w320/sa.png' },
//         { "code": '+221', "label": 'Senegal', "flag": 'https://flagcdn.com/w320/sn.png' },
//         { "code": '+381', "label": 'Serbia', "flag": 'https://flagcdn.com/w320/rs.png' },
//         { "code": '+248', "label": 'Seychelles', "flag": 'https://flagcdn.com/w320/sc.png' },
//         { "code": '+232', "label": 'Sierra Leone', "flag": 'https://flagcdn.com/w320/sl.png' },
//         { "code": '+65', "label": 'Singapore', "flag": 'https://flagcdn.com/w320/sg.png' },
//         { "code": '+421', "label": 'Slovakia', "flag": 'https://flagcdn.com/w320/sk.png' },
//         { "code": '+386', "label": 'Slovenia', "flag": 'https://flagcdn.com/w320/si.png' },
//         { "code": '+677', "label": 'Solomon Islands', "flag": 'https://flagcdn.com/w320/sb.png' },
//         { "code": '+252', "label": 'Somalia', "flag": 'https://flagcdn.com/w320/so.png' },
//         { "code": '+27', "label": 'South Africa', "flag": 'https://flagcdn.com/w320/za.png' },
//         { "code": '+82', "label": 'South Korea', "flag": 'https://flagcdn.com/w320/kr.png' },
//         { "code": '+34', "label": 'Spain', "flag": 'https://flagcdn.com/w320/es.png' },
//         { "code": '+94', "label": 'Sri Lanka', "flag": 'https://flagcdn.com/w320/lk.png' },
//         { "code": '+249', "label": 'Sudan', "flag": 'https://flagcdn.com/w320/sd.png' },
//         { "code": '+597', "label": 'Suriname', "flag": 'https://flagcdn.com/w320/sr.png' },
//         { "code": '+268', "label": 'Swaziland', "flag": 'https://flagcdn.com/w320/sz.png' },
//         { "code": '+46', "label": 'Sweden', "flag": 'https://flagcdn.com/w320/se.png' },
//         { "code": '+41', "label": 'Switzerland', "flag": 'https://flagcdn.com/w320/ch.png' },
//         { "code": '+963', "label": 'Syria', "flag": 'https://flagcdn.com/w320/sy.png' },
//         { "code": '+992', "label": 'Tajikistan', "flag": 'https://flagcdn.com/w320/tj.png' },
//         { "code": '+1-670', "label": 'Northern Mariana Islands', "flag": 'https://flagcdn.com/w320/mp.png' },
//         { "code": '+228', "label": 'Togo', "flag": 'https://flagcdn.com/w320/tg.png' },
//         { "code": '+66', "label": 'Thailand', "flag": 'https://flagcdn.com/w320/th.png' },
//         { "code": '+692', "label": 'Tuvalu', "flag": 'https://flagcdn.com/w320/tv.png' },
//         { "code": '+90', "label": 'Turkey', "flag": 'https://flagcdn.com/w320/tr.png' },
//         { "code": '+256', "label": 'Uganda', "flag": 'https://flagcdn.com/w320/ug.png' },
//         { "code": '+380', "label": 'Ukraine', "flag": 'https://flagcdn.com/w320/ua.png' },
//         { "code": '+971', "label": 'United Arab Emirates', "flag": 'https://flagcdn.com/w320/ae.png' },
//         { "code": '+44', "label": 'United Kingdom', "flag": 'https://flagcdn.com/w320/gb.png' },
//         { "code": '+1', "label": 'United States', "flag": 'https://flagcdn.com/w320/us.png' },
//         { "code": '+598', "label": 'Uruguay', "flag": 'https://flagcdn.com/w320/uy.png' },
//         { "code": '+998', "label": 'Uzbekistan', "flag": 'https://flagcdn.com/w320/uz.png' },
//         { "code": '+678', "label": 'Vanuatu', "flag": 'https://flagcdn.com/w320/vu.png' },
//         { "code": '+58', "label": 'Venezuela', "flag": 'https://flagcdn.com/w320/ve.png' },
//         { "code": '+84', "label": 'Vietnam', "flag": 'https://flagcdn.com/w320/vn.png' },
//         { "code": '+681', "label": 'Wallis and Futuna', "flag": 'https://flagcdn.com/w320/wf.png' },
//         { "code": '+967', "label": 'Yemen', "flag": 'https://flagcdn.com/w320/ye.png' },
//         { "code": '+260', "label": 'Zambia', "flag": 'https://flagcdn.com/w320/zm.png' },
//         { "code": '+263', "label": 'Zimbabwe', "flag": 'https://flagcdn.com/w320/zw.png' }
//     ];    
 
//     const copyToClipboard = (text, index, setCopiedIndex) => {
//       navigator.clipboard.writeText(text).then(() => {
//         setCopiedIndex(index);
//         setTimeout(() => setCopiedIndex(null), 2000); 
//       }).catch((err) => {
//         console.error('Failed to copy: ', err);
//       });
//     };
    
//     const MainPage = () => {
//       const [copiedIndex, setCopiedIndex] = useState(null);
//       const [searchQuery, setSearchQuery] = useState('');
      
//         const filteredCountries = countryOptions.filter(country =>
//         country.label.toLowerCase().includes(searchQuery.toLowerCase())
//       );
    
//       const sortedCountries = filteredCountries.sort((a, b) => 
//         a.label.toLowerCase().localeCompare(b.label.toLowerCase())
//       );
    
//       return (
//         <>
//           <div className="main-page">
//             <div className="phone-locator">
//               <h1>Phone Number Locator</h1>
//               <p>Country ISD Code</p>
              
//               <input
//                 type="text"
//                 placeholder="Search for a country..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="search-bar"
//               />
              
//               <table className="isd-table">
//                 <thead>
//                   <tr>
//                     <th>Country</th>
//                     <th>ISD Code</th>
//                     <th>Country</th>
//                     <th>ISD Code</th>
//                     <th>Country</th>
//                     <th>ISD Code</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {sortedCountries.reduce((rows, country, index) => {
//                     if (index % 3 === 0) {
//                       rows.push(
//                         <tr key={index}>
//                           <td className="country-cell">
//                             <img
//                               src={country.flag}
//                               alt={`${country.label} Flag`}
//                               className="flag-icon"
//                             />
//                             <span className="country-label">{country.label}</span>
//                           </td>
//                           <td className="code-cell">
//                             <div className="code-container">
//                               {country.code}
//                               <div className="copy-wrapper">
//                                 <ContentCopyIcon 
//                                   className="copy-icon"
//                                   onClick={() => copyToClipboard(country.code, index, setCopiedIndex)}
//                                 />
//                                 {copiedIndex === index && <CheckCircleIcon className="copy-icon" />}
//                               </div>
//                             </div>
//                           </td>
//                           {sortedCountries[index + 1] && (
//                             <>
//                               <td className="country-cell">
//                                 <img
//                                   src={sortedCountries[index + 1].flag}
//                                   alt={`${sortedCountries[index + 1].label} Flag`}
//                                   className="flag-icon"
//                                 />
//                                 <span className="country-label">
//                                   {sortedCountries[index + 1].label}
//                                 </span>
//                               </td>
//                               <td className="code-cell">
//                                 <div className="code-container">
//                                   {sortedCountries[index + 1].code}
//                                   <div className="copy-wrapper">
//                                     <ContentCopyIcon 
//                                       className="copy-icon"
//                                       onClick={() => copyToClipboard(sortedCountries[index + 1].code, index + 1, setCopiedIndex)}
//                                     />
//                                     {copiedIndex === index + 1 && <CheckCircleIcon className="copy-icon" />}
//                                   </div>
//                                 </div>
//                               </td>
//                             </>
//                           )}
//                           {sortedCountries[index + 2] && (
//                             <>
//                               <td className="country-cell">
//                                 <img
//                                   src={sortedCountries[index + 2].flag}
//                                   alt={`${sortedCountries[index + 2].label} Flag`}
//                                   className="flag-icon"
//                                 />
//                                 <span className="country-label">
//                                   {sortedCountries[index + 2].label}
//                                 </span>
//                               </td>
//                               <td className="code-cell">
//                                 <div className="code-container">
//                                   {sortedCountries[index + 2].code}
//                                   <div className="copy-wrapper">
//                                     <ContentCopyIcon 
//                                       className="copy-icon"
//                                       onClick={() => copyToClipboard(sortedCountries[index + 2].code, index + 2, setCopiedIndex)}
//                                     />
//                                     {copiedIndex === index + 2 && <CheckCircleIcon className="copy-icon" />}
//                                   </div>
//                                 </div>
//                               </td>
//                             </>
//                           )}
//                         </tr>
//                       );
//                     }
//                     return rows;
//                   }, [])}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className='lookup'>
//             <div className="reverse-lookup">
//               <h2>Reverse Name Lookup</h2>
//               <h7>Find People By Phone Number</h7>
//               <p>Email is an extremely popular form of online communication. It is used for login authentication, marketing campaigns, contacting old friends, and sometimes, unfortunately, scams. With billions of emails sent every day, it's no surprise that you occasionally receive mail from unknown senders. But what do you do when you see an email you don't recognize? You plug it into your favorite search engine! However, searching online for an email rarely yields the information you seek. You are unlikely to find the email's owner, location, or whether or not that email has been associated with previous phishing scams. That's where That'sThem's reverse email lookup can help.</p>
//               <p>That'sThem's reverse email lookup searches nearly a trillion email records and links them with the owner's public record. This means by searching on That'sThem with only an email address, you get instant access to the owner's name, location, phone number, and even education credentials.</p>
//             </div>
//           </div>
//         </>
//       );
//     };
    
//     export default MainPage;












import React, { useState, useRef, useEffect } from 'react';
import './MainPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const countryOptions = [
    { code: '(+93)', label: 'Afghanistan', countryCode: 'af' },
    { code: '(+355)', label: 'Albania', countryCode: 'al' },
    { code: '(+213)', label: 'Algeria', countryCode: 'dz' },
    { code: '(+376)', label: 'Andorra', countryCode: 'ad' },
    { code: '(+244)', label: 'Angola', countryCode: 'ao' },
    { code: '(+54)', label: 'Argentina', countryCode: 'ar' },
    { code: '(+374)', label: 'Armenia', countryCode: 'am' },
    { code: '(+61)', label: 'Australia', countryCode: 'au' },
    { code: '(+43)', label: 'Austria', countryCode: 'at' },
    { code: '(+994)', label: 'Azerbaijan', countryCode: 'az' },
    { code: '(+973)', label: 'Bahrain', countryCode: 'bh' },
    { code: '(+880)', label: 'Bangladesh', countryCode: 'bd' },
    { code: '(+375)', label: 'Belarus', countryCode: 'by' },
    { code: '(+32)', label: 'Belgium', countryCode: 'be' },
    { code: '(+501)', label: 'Belize', countryCode: 'bz' },
    { code: '(+229)', label: 'Benin', countryCode: 'bj' },
    { code: '(+975)', label: 'Bhutan', countryCode: 'bt' },
    { code: '(+591)', label: 'Bolivia', countryCode: 'bo' },
    { code: '(+387)', label: 'Bosnia and Herzegovina', countryCode: 'ba' },
    { code: '(+267)', label: 'Botswana', countryCode: 'bw' },
    { code: '(+55)', label: 'Brazil', countryCode: 'br' },
    { code: '(+673)', label: 'Brunei', countryCode: 'bn' },
    { code: '(+359)', label: 'Bulgaria', countryCode: 'bg' },
    { code: '(+226)', label: 'Burkina Faso', countryCode: 'bf' },
    { code: '(+257)', label: 'Burundi', countryCode: 'bi' },
    { code: '(+855)', label: 'Cambodia', countryCode: 'kh' },
    { code: '(+237)', label: 'Cameroon', countryCode: 'cm' },
    { code: '(+1)', label: 'Canada', countryCode: 'ca' },
    { code: '(+238)', label: 'Cape Verde', countryCode: 'cv' },
    { code: '(+236)', label: 'Central African Republic', countryCode: 'cf' },
    { code: '(+235)', label: 'Chad', countryCode: 'td' },
    { code: '(+56)', label: 'Chile', countryCode: 'cl' },
    { code: '(+86)', label: 'China', countryCode: 'cn' },
    { code: '(+57)', label: 'Colombia', countryCode: 'co' },
    { code: '(+269)', label: 'Comoros', countryCode: 'km' },
    { code: '(+242)', label: 'Congo', countryCode: 'cg' },
    { code: '(+243)', label: 'Congo (DRC)', countryCode: 'cd' },
    { code: '(+506)', label: 'Costa Rica', countryCode: 'cr' },
    { code: '(+225)', label: "Côte d'Ivoire", countryCode: 'ci' },
    { code: '(+385)', label: 'Croatia', countryCode: 'hr' },
    { code: '(+53)', label: 'Cuba', countryCode: 'cu' },
    { code: '(+357)', label: 'Cyprus', countryCode: 'cy' },
    { code: '(+420)', label: 'Czech Republic', countryCode: 'cz' },
    { code: '(+45)', label: 'Denmark', countryCode: 'dk' },
    { code: '(+253)', label: 'Djibouti', countryCode: 'dj' },
    { code: '(+1)', label: 'Dominican Republic', countryCode: 'do' },
    { code: '(+593)', label: 'Ecuador', countryCode: 'ec' },
    { code: '(+20)', label: 'Egypt', countryCode: 'eg' },
    { code: '(+503)', label: 'El Salvador', countryCode: 'sv' },
    { code: '(+240)', label: 'Equatorial Guinea', countryCode: 'gq' },
    { code: '(+291)', label: 'Eritrea', countryCode: 'er' },
    { code: '(+372)', label: 'Estonia', countryCode: 'ee' },
    { code: '(+251)', label: 'Ethiopia', countryCode: 'et' },
    { code: '(+679)', label: 'Fiji', countryCode: 'fj' },
    { code: '(+358)', label: 'Finland', countryCode: 'fi' },
    { code: '(+33)', label: 'France', countryCode: 'fr' },
    { code: '(+241)', label: 'Gabon', countryCode: 'ga' },
    { code: '(+220)', label: 'Gambia', countryCode: 'gm' },
    { code: '(+995)', label: 'Georgia', countryCode: 'ge' },
    { code: '(+49)', label: 'Germany', countryCode: 'de' },
    { code: '(+233)', label: 'Ghana', countryCode: 'gh' },
    { code: '(+30)', label: 'Greece', countryCode: 'gr' },
    { code: '(+299)', label: 'Greenland', countryCode: 'gl' },
    { code: '(+502)', label: 'Guatemala', countryCode: 'gt' },
    { code: '(+224)', label: 'Guinea', countryCode: 'gn' },
    { code: '(+245)', label: 'Guinea-Bissau', countryCode: 'gw' },
    { code: '(+592)', label: 'Guyana', countryCode: 'gy' },
    { code: '(+509)', label: 'Haiti', countryCode: 'ht' },
    { code: '(+504)', label: 'Honduras', countryCode: 'hn' },
    { code: '(+852)', label: 'Hong Kong', countryCode: 'hk' },
    { code: '(+36)', label: 'Hungary', countryCode: 'hu' },
    { code: '(+354)', label: 'Iceland', countryCode: 'is' },
    { code: '(+91)', label: 'India', countryCode: 'in' },
    { code: '(+62)', label: 'Indonesia', countryCode: 'id' },
    { code: '(+98)', label: 'Iran', countryCode: 'ir' },
    { code: '(+964)', label: 'Iraq', countryCode: 'iq' },
    { code: '(+353)', label: 'Ireland', countryCode: 'ie' },
    { code: '(+972)', label: 'Israel', countryCode: 'il' },
    { code: '(+39)', label: 'Italy', countryCode: 'it' },
    { code: '(+81)', label: 'Japan', countryCode: 'jp' },
    { code: '(+962)', label: 'Jordan', countryCode: 'jo' },
    { code: '(+7)', label: 'Kazakhstan', countryCode: 'kz' },
    { code: '(+254)', label: 'Kenya', countryCode: 'ke' },
    { code: '(+686)', label: 'Kiribati', countryCode: 'ki' },
    { code: '(+965)', label: 'Kuwait', countryCode: 'kw' },
    { code: '(+996)', label: 'Kyrgyzstan', countryCode: 'kg' },
    { code: '(+856)', label: 'Laos', countryCode: 'la' },
    { code: '(+371)', label: 'Latvia', countryCode: 'lv' },
    { code: '(+961)', label: 'Lebanon', countryCode: 'lb' },
    { code: '(+266)', label: 'Lesotho', countryCode: 'ls' },
    { code: '(+231)', label: 'Liberia', countryCode: 'lr' },
    { code: '(+218)', label: 'Libya', countryCode: 'ly' },
    { code: '(+423)', label: 'Liechtenstein', countryCode: 'li' },
    { code: '(+370)', label: 'Lithuania', countryCode: 'lt' },
    { code: '(+352)', label: 'Luxembourg', countryCode: 'lu' },
    { code: '(+853)', label: 'Macau', countryCode: 'mo' },
    { code: '(+389)', label: 'North Macedonia', countryCode: 'mk' },
    { code: '(+261)', label: 'Madagascar', countryCode: 'mg' },
    { code: '(+265)', label: 'Malawi', countryCode: 'mw' },
    { code: '(+60)', label: 'Malaysia', countryCode: 'my' },
    { code: '(+960)', label: 'Maldives', countryCode: 'mv' },
    { code: '(+223)', label: 'Mali', countryCode: 'ml' },
    { code: '(+356)', label: 'Malta', countryCode: 'mt' },
    { code: '(+692)', label: 'Marshall Islands', countryCode: 'mh' },
    { code: '(+222)', label: 'Mauritania', countryCode: 'mr' },
    { code: '(+230)', label: 'Mauritius', countryCode: 'mu' },
    { code: '(+52)', label: 'Mexico', countryCode: 'mx' },
    { code: '(+691)', label: 'Micronesia', countryCode: 'fm' },
    { code: '(+373)', label: 'Moldova', countryCode: 'md' },
    { code: '(+377)', label: 'Monaco', countryCode: 'mc' },
    { code: '(+976)', label: 'Mongolia', countryCode: 'mn' },
    { code: '(+382)', label: 'Montenegro', countryCode: 'me' },
    { code: '(+212)', label: 'Morocco', countryCode: 'ma' },
    { code: '(+258)', label: 'Mozambique', countryCode: 'mz' },
    { code: '(+95)', label: 'Myanmar', countryCode: 'mm' },
    { code: '(+264)', label: 'Namibia', countryCode: 'na' },
    { code: '(+674)', label: 'Nauru', countryCode: 'nr' },
    { code: '(+977)', label: 'Nepal', countryCode: 'np' },
    { code: '(+31)', label: 'Netherlands', countryCode: 'nl' },
    { code: '(+64)', label: 'New Zealand', countryCode: 'nz' },
    { code: '(+505)', label: 'Nicaragua', countryCode: 'ni' },
    { code: '(+227)', label: 'Niger', countryCode: 'ne' },
    { code: '(+234)', label: 'Nigeria', countryCode: 'ng' },
    { code: '(+683)', label: 'Niue', countryCode: 'nu' },
    { code: '(+850)', label: 'North Korea', countryCode: 'kp' },
    { code: '(+470)', label: 'Norway', countryCode: 'no' },
    { code: '(+968)', label: 'Oman', countryCode: 'om' },
    { code: '(+92)', label: 'Pakistan', countryCode: 'pk' },
    { code: '(+680)', label: 'Palau', countryCode: 'pw' },
    { code: '(+970)', label: 'Palestine', countryCode: 'ps' },
    { code: '(+507)', label: 'Panama', countryCode: 'pa' },
    { code: '(+675)', label: 'Papua New Guinea', countryCode: 'pg' },
    { code: '(+595)', label: 'Paraguay', countryCode: 'py' },
    { code: '(+51)', label: 'Peru', countryCode: 'pe' },
    { code: '(+63)', label: 'Philippines', countryCode: 'ph' },
    { code: '(+48)', label: 'Poland', countryCode: 'pl' },
    { code: '(+351)', label: 'Portugal', countryCode: 'pt' },
    { code: '(+974)', label: 'Qatar', countryCode: 'qa' },
    { code: '(+40)', label: 'Romania', countryCode: 'ro' },
    { code: '(+7)', label: 'Russia', countryCode: 'ru' },
    { code: '(+250)', label: 'Rwanda', countryCode: 'rw' },
    { code: '(+590)', label: 'Saint Martin', countryCode: 'mf' },
    { code: '(+685)', label: 'Samoa', countryCode: 'ws' },
    { code: '(+378)', label: 'San Marino', countryCode: 'sm' },
    { code: '(+239)', label: 'Sao Tome and Principe', countryCode: 'st' },
    { code: '(+966)', label: 'Saudi Arabia', countryCode: 'sa' },
    { code: '(+221)', label: 'Senegal', countryCode: 'sn' },
    { code: '(+381)', label: 'Serbia', countryCode: 'rs' },
    { code: '(+248)', label: 'Seychelles', countryCode: 'sc' },
    { code: '(+232)', label: 'Sierra Leone', countryCode: 'sl' },
    { code: '(+65)', label: 'Singapore', countryCode: 'sg' },
    { code: '(+421)', label: 'Slovakia', countryCode: 'sk' },
    { code: '(+386)', label: 'Slovenia', countryCode: 'si' },
    { code: '(+677)', label: 'Solomon Islands', countryCode: 'sb' },
    { code: '(+252)', label: 'Somalia', countryCode: 'so' },
    { code: '(+27)', label: 'South Africa', countryCode: 'za' },
    { code: '(+82)', label: 'South Korea', countryCode: 'kr' },
    { code: '(+34)', label: 'Spain', countryCode: 'es' },
    { code: '(+94)', label: 'Sri Lanka', countryCode: 'lk' },
    { code: '(+249)', label: 'Sudan', countryCode: 'sd' },
    { code: '(+597)', label: 'Suriname', countryCode: 'sr' },
    { code: '(+268)', label: 'Swaziland', countryCode: 'sz' },
    { code: '(+46)', label: 'Sweden', countryCode: 'se' },
    { code: '(+41)', label: 'Switzerland', countryCode: 'ch' },
    { code: '(+963)', label: 'Syria', countryCode: 'sy' },
    { code: '(+992)', label: 'Tajikistan', countryCode: 'tj' },
    { code: '(+255)', label: 'Tanzania', countryCode: 'tz' },
    { code: '(+66)', label: 'Thailand', countryCode: 'th' },
    { code: '(+670)', label: 'Timor-Leste', countryCode: 'tl' },
    { code: '(+228)', label: 'Togo', countryCode: 'tg' },
    { code: '(+690)', label: 'Tokelau', countryCode: 'tk' },
    { code: '(+676)', label: 'Tonga', countryCode: 'to' },
    { code: '(+1868)', label: 'Trinidad and Tobago', countryCode: 'tt' },
    { code: '(+216)', label: 'Tunisia', countryCode: 'tn' },
    { code: '(+90)', label: 'Turkey', countryCode: 'tr' },
    { code: '(+993)', label: 'Turkmenistan', countryCode: 'tm' },
    { code: '(+688)', label: 'Tuvalu', countryCode: 'tv' },
    { code: '(+256)', label: 'Uganda', countryCode: 'ug' },
    { code: '(+380)', label: 'Ukraine', countryCode: 'ua' },
    { code: '(+971)', label: 'United Arab Emirates', countryCode: 'ae' },
    { code: '(+44)', label: 'United Kingdom', countryCode: 'gb' },
    { code: '(+1)', label: 'United States', countryCode: 'us' },
    { code: '(+598)', label: 'Uruguay', countryCode: 'uy' },
    { code: '(+998)', label: 'Uzbekistan', countryCode: 'uz' },
    { code: '(+678)', label: 'Vanuatu', countryCode: 'vu' },
    { code: '(+379)', label: 'Vatican City', countryCode: 'va' },
    { code: '(+58)', label: 'Venezuela', countryCode: 've' },
    { code: '(+84)', label: 'Vietnam', countryCode: 'vn' },
    { code: '(+681)', label: 'Wallis and Futuna', countryCode: 'wf' },
    { code: '(+967)', label: 'Yemen', countryCode: 'ye' },
    { code: '(+260)', label: 'Zambia', countryCode: 'zm' },
    { code: '(+263)', label: 'Zimbabwe', countryCode: 'zw' }
];

const filteredCountryOptions = countryOptions.filter(option => !['Ally', 'Harry Allew', 'Harry Anna'].includes(option.label));

const IsdCodes = () => {
    const [selectedCountry, setSelectedCountry] = useState({ code: '(+93)', countryCode: 'af', label: 'Afghanistan' });
    const [phoneNumber, setPhoneNumber] = useState(selectedCountry.code);
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');
    const [filteredCountryOptions, setFilteredCountryOptions] = useState([]);
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelectCountry = (option) => {
        setSelectedCountry(option);
        setPhoneNumber(option.code);
        setIsDropdownOpen(false);
    };

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleCopyCode = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(phoneNumber)
                .then(() => {
                    setCopySuccess('ISD code is copied!');
                    setTimeout(() => setCopySuccess(''), 3000); 
                })
                .catch(() => {
                    setCopySuccess('Failed to copy code.');
                });
        } else {
            const textArea = document.createElement('textarea');
            textArea.value = phoneNumber;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                setCopySuccess('ISD code is copied!');
            } catch (err) {
                setCopySuccess('Failed to copy code.');
            }
            document.body.removeChild(textArea);
        }
    };
    
    return (
        <>
            <div className="main-page">
                <div className="phone-locator">
                    <h1>Phone Number Locator</h1>
                    <p>Number Details and IP Tracker</p>
                    <form className="phone-form" onSubmit={(e) => { e.preventDefault(); handleCopyCode(); }}>
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
                                    {filteredCountryOptions.length > 0 ? (
                                        filteredCountryOptions.map((option) => (
                                            <div key={option.code} className="dropdown-item" onClick={() => handleSelectCountry(option)}>
                                                <img src={`https://flagcdn.com/48x36/${option.countryCode}.png`} alt={option.label} />
                                                <span>{option.label}</span>
                                                <span style={{ color: 'white', marginLeft: '10px' }}>{option.code}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="dropdown-item">No results found</div>
                                    )}
                                </div>
                            )}
                        </div>
                        <input
                            className='phone-input-container'
                            type="text"
                            placeholder="(123) 456-7890"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <button type="submit">Copy</button>
                    </form>
                    {copySuccess && <div className="copy-success">{copySuccess}</div>}
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

export default IsdCodes;
