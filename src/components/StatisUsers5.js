import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';


const StatisUsers5=()=>{
    // kalendar
    const [startDate, setStartDate] = useState(null);
    const handleDateChange = (date) => {
        setStartDate(date);
    };
    // const clearDate = () => {
    //     setStartDate(null);
    // };


    // users
    const [selectedUser, setSelectedUser] = useState('');
    const handleUsersChange = (event) => {
        setSelectedUser(event.target.value);
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


    const [statisusers] = useState([
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
                            <FaCalendarAlt className="date-picker-icon" />
                            {/* <button className="clear-button" onClick={clearDate}>
                                &#x2715;
                            </button> */}
                        </div>
                        <div className="stattop" style={{ display: 'flex', alignItems: 'center', padding: '1px 5px', cursor: 'pointer', border: 'none' }}>
                            {/* <div style={{ marginRight: '10px' }}>▼</div> */}
                            <select
                            value={selectedUser}
                            onChange={handleUsersChange}
                            style={{ height: '1.8rem', fontSize: '14px', outline: 'none', cursor: 'pointer', border: 'none', backgroundColor: 'rgba(148, 148, 148, 0.437)' }}
                            >
                            <option disabled value="">Пользователь</option>
                            <option value="Пользователь">Пользователь</option>
                            <option value="Пользователь2">Пользователь2</option>
                            </select>
                        
                        </div>
                        <div className="stattop" style={{ display: 'flex', alignItems: 'center', padding: '1px 5px', cursor: 'pointer', border: 'none' }}>
                            {/* <div style={{ marginRight: '10px' }}>▼</div> */}
                            <select
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            style={{ height: '1.8rem', fontSize: '14px', border: 'none', outline: 'none', cursor: 'pointer', backgroundColor: 'rgba(148, 148, 148, 0.437)' }}
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
                            style={{ height: '1.8rem', fontSize: '14px', outline: 'none', cursor: 'pointer', background: 'rgba(148, 148, 148, 0.437)', border: 'none' }}
                            >
                            <option disabled value="">Выберите валюту</option>
                            <option value="USD">USD</option>
                            
                            </select>
                        </div>
                    </div>
                    <div className="vibor">
                        <p>Пользователь:</p>
                        <p>{selectedUser || "Все пользователи"}</p>
                    </div>
                    <div className="viborpokaz" style={{ marginTop: '-0.7rem', marginBottom: '1rem' }}>
                        <p className="pvibor">Показывать по</p>
                        <select
                            value={selectedDate}
                            onChange={handleDate1Change}
                            style={{ height: '1.5rem', width: '10rem', padding: '2px', fontSize: '13px', backgroundColor: 'rgba(148, 148, 148, 0.437)', border: 'none', outline: 'none', cursor: 'pointer', marginTop: '7px' }}
                            >
                            <option value="Дням">Дням</option>
                            <option value="Месяцам">Месяцам</option>
                            <option value="Годам">Годам</option>
                            
                        </select>
                    </div>
                    <div className="allusers" style={{ marginTop: '2rem', marginRight: '1rem', height: '70vh' }}>

                        <div className="users">
                            <h5>Пользователи</h5>
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
                                {statisusers.map((statisuser, index) => (
                                <tr key={index} className="trstatuser">
                                    <td style={{ width: '10rem', textAlign: 'left', color: 'black' }}>{statisuser.date}</td>
                                    <td style={{ textAlign: 'left' }}>{statisuser.registration}</td>
                                    <td style={{ textAlign: 'left' }}>{statisuser.deposit}</td>
                                    <td style={{ textAlign: 'left' }}>{statisuser.hold}</td>
                                    <td style={{ textAlign: 'left', width: '15rem' }}>{statisuser.approove}</td>
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

export default StatisUsers5;