import React, {useState, useEffect} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { FaCalendarAlt } from 'react-icons/fa';
import { ReactComponent as KalenIcon } from '../images/kalen.svg'


const StatisOffers6=()=>{
    useEffect(() =>{
        document.title = 'Статистика - Офферы';
    }, []);
    // kalendar
    const [startDate, setStartDate] = useState(null);
    const handleDateChange = (date) => {
        setStartDate(date);
    };
    // const clearDate = () => {
    //     setStartDate(null);
    // };


    // users
    const [selectedOffer, setSelectedOffer] = useState('');
    const handleOffersChange = (event) => {
        setSelectedOffer(event.target.value);
    };

    // strani
    const [selectedCountry, setSelectedCountry] = useState('');
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    // Valuta
    const [selectedValuta, setSelectedValuta] = useState('');
    const handleValutaChange = (event) => {
        setSelectedValuta(event.target.value);
    };

    // Date
    const [selectedDate, setSelectedDate] = useState('');
    const handleDate1Change = (event) => {
        setSelectedDate(event.target.value);
    };


    const [statisoffers] = useState([
        { date: '09.05.2024', registration: '0', deposit: '0', hold: '0', approove: '0' },
        { date: '08.05.2024', registration: '0', deposit: '0', hold: '0', approove: '0' },
        { date: '07.05.2024', registration: '0', deposit: '0', hold: '0', approove: '0' },
        { date: '06.05.2024', registration: '0', deposit: '0', hold: '0', approove: '0' },
    ]);


    return(
        <>
            <div className="container">
                <div className="statisusers">
                    <h2>Статистика</h2>
                    <div className="vibor">
                        <div className="date-picker-container stattop">
                            <DatePicker
                                selected={startDate}
                                onChange={handleDateChange}
                                placeholderText="Выберите период"
                                className="date-picker-input"
                                dateFormat="dd.MM.yyyy"
                                
                            />
                            <KalenIcon className="date-picker-icon" />
                            {/* <button className="clear-button" onClick={clearDate}>
                                &#x2715;
                            </button> */}
                        </div>
                        <div className="stattop" style={{ display: 'flex', alignItems: 'center', padding: '1px 5px', cursor: 'pointer', border: 'none' }}>
                            {/* <div style={{ marginRight: '10px' }}>▼</div> */}
                            <select
                            value={selectedOffer}
                            onChange={handleOffersChange}
                            style={{ height: '1.8rem', fontSize: '14px', outline: 'none', cursor: 'pointer', border: 'none' }}
                            >
                            <option disabled value="">Оффер</option>
                            <option value="Оффер1">Оффер1</option>
                            <option value="Оффер2">Оффер2</option>
                            </select>
                        
                        </div>
                        <div className="stattop" style={{ display: 'flex', alignItems: 'center', padding: '1px 5px', cursor: 'pointer', border: 'none' }}>
                            {/* <div style={{ marginRight: '10px' }}>▼</div> */}
                            <select
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            style={{ height: '1.8rem', fontSize: '14px', border: 'none', outline: 'none', cursor: 'pointer' }}
                            >
                            <option value="">Выберите страну</option>
                            <option value="Россия">Россия</option>
                            <option value="Америка">Америка</option>
                            <option value="Канада">Канада</option>
                            <option value="Китай">Китай</option>
                            </select>
                        </div>
                        <div className="stattop" style={{ display: 'flex', alignItems: 'center', padding: '1px 5px', cursor: 'pointer', border: 'none' }}>
                            {/* <div style={{ marginRight: '10px' }}>▼</div> */}
                            <select
                            value={selectedValuta}
                            onChange={handleValutaChange}
                            style={{ height: '1.8rem', fontSize: '14px', outline: 'none', cursor: 'pointer', border: 'none' }}
                            >
                            <option disabled value="">Выберите валюту</option>
                            <option value="USD">USD</option>
                            
                            </select>
                        </div>
                    </div>
                    <div className="vibor">
                        <p>Оффер:</p>
                        <p>{selectedOffer || "Все офферы"}</p>
                    </div>
                    <div className="viborpokaz" style={{ marginTop: '-0.7rem', marginBottom: '1rem' }}>
                        <p className="pvibor">Показывать по</p>
                        <select
                            value={selectedDate}
                            onChange={handleDate1Change}
                            style={{ backgroundColor: 'rgba(234, 236, 239, 1)', border: 'none', width: '10rem', borderRadius: '3px', padding: '5px', outline: 'none', cursor: 'pointer' }}
                            >
                            <option value="Дням">Дням</option>
                            <option value="Месяцам">Месяцам</option>
                            <option value="Годам">Годам</option>
                            
                        </select>
                    </div>
                    <div className="allusers" style={{ marginTop: '2rem', marginRight: '1rem', height: '70vh' }}>

                        <div className="users">
                            <h5>Офферы</h5>
                        </div>
                        <table className="tableall">
                            <thead>
                                <tr>
                                    <th style={{ width: '10rem', textAlign: 'left' }}>За всё время</th>
                                    <th style={{ textAlign: 'left' }}>Registration</th>
                                    <th style={{ textAlign: 'left' }}>Deposit</th>
                                    <th style={{ textAlign: 'left' }}>Hold</th>
                                    <th style={{ textAlign: 'left', width: '15rem' }}>Approove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {statisoffers.map((statisoffer, index) => (
                                <tr key={index} className="trstatuser">
                                    <td style={{ width: '10rem', textAlign: 'left', color: 'black' }}>{statisoffer.date}</td>
                                    <td style={{ textAlign: 'left' }}>{statisoffer.registration}</td>
                                    <td style={{ textAlign: 'left' }}>{statisoffer.deposit}</td>
                                    <td style={{ textAlign: 'left' }}>{statisoffer.hold}</td>
                                    <td style={{ textAlign: 'left', width: '15rem' }}>{statisoffer.approove}</td>
                                </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        
        </>
    )
}

export default StatisOffers6;