import React, {useState, useEffect} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { FaCalendarAlt } from 'react-icons/fa';
import { ReactComponent as KalenIcon } from '../images/kalen.svg'


const Check7=()=>{
    useEffect(() =>{
        document.title = 'Проверка';
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
    // const [selectedDate, setSelectedDate] = useState('');
    // const handleDate1Change = (event) => {
    //     setSelectedDate(event.target.value);
    // };

    const [check7] = useState([
        { idregistration: 'IDRegistration12345', offer: 'Offer 123', iduser: 'IOne123', status: 'В обработке' },
        { idregistration: 'IDRegistration12345', offer: 'Offer 123', iduser: 'IOne123', status: 'Внесен депозит' },
        { idregistration: 'IDRegistration12345', offer: 'Offer 123', iduser: 'IOne123', status: 'Отказ' },
        { idregistration: 'IDRegistration12345', offer: 'Offer 123', iduser: 'IOne123', status: 'В обработке' },
        { idregistration: 'IDRegistration12345', offer: 'Offer 123', iduser: 'IOne123', status: 'В обработке' },
        { idregistration: 'IDRegistration12345', offer: 'Offer 123', iduser: 'IOne123', status: 'В обработке' },
    ]);


    return(
        <>
            <div className="container">
                <div className="statisusers">
                    <h2>Проверка</h2>
                    <div className="vibor">
                        <div className="date-picker-container stattop">
                            <DatePicker
                                selected={startDate}
                                onChange={handleDateChange}
                                placeholderText="Выберите период"
                                className="date-picker-input"
                                dateFormat="dd/MM/yyyy"
                                
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
                            style={{ height: '1.8rem', fontSize: '14px', border: 'none', outline: 'none', cursor: 'pointer', minWidth: '9rem' }}
                            >
                            <option disabled value="">Оффер</option>
                            <option value="Пользователь">Оффер</option>
                            <option value="Пользователь2">Оффер2</option>
                            </select>
                        
                        </div>
                        <div className="stattop" style={{ display: 'flex', alignItems: 'center', padding: '1px 5px', cursor: 'pointer' }}>
                            {/* <div style={{ marginRight: '10px' }}>▼</div> */}
                            <select
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            style={{ height: '1.8rem', fontSize: '14px', outline: 'none', cursor: 'pointer', minWidth: '9rem' }}
                            >
                            <option value="">Страна</option>
                            <option value="Россия">Россия</option>
                            <option value="Америка">Америка</option>
                            <option value="Канада">Канада</option>
                            <option value="Китай">Китай</option>
                            </select>
                        </div>
                        <div className="stattop" style={{ display: 'flex', alignItems: 'center', padding: '1px 5px', cursor: 'pointer' }}>
                            {/* <div style={{ marginRight: '10px' }}>▼</div> */}
                            <select
                            value={selectedValuta}
                            onChange={handleValutaChange}
                            style={{ height: '1.8rem', fontSize: '14px', outline: 'none', cursor: 'pointer' }}
                            >
                            <option disabled value="">Выберите валюту</option>
                            <option value="USD">USD</option>
                            
                            </select>
                        </div>
                    </div>
                    
                    <div className="allusers" style={{ marginTop: '2rem', marginRight: '1rem', height: '70vh' }}>

                        <div className="users">
                            <h5>Проверка</h5>
                        </div>
                        <table className="tableall">
                            <thead>
                                <tr>
                                    <th style={{ width: '10rem', textAlign: 'left' }}>ID registration</th>
                                    <th style={{ textAlign: 'left' }}>Offer</th>
                                    <th style={{ textAlign: 'left' }}>Id пользователь</th>
                                    <th style={{ textAlign: 'left', width: '15rem' }}>Статус</th>
                                    {/* <th style={{ textAlign: 'left' }}>Approove</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {check7.map((check, index) => (
                                <tr key={index} className="trstatuser">
                                    <td style={{ width: '15rem', textAlign: 'left', color: 'black' }}>{check.idregistration}</td>
                                    <td style={{ textAlign: 'left' }}>{check.offer}</td>
                                    <td style={{ textAlign: 'left' }}>{check.iduser}</td>
                                    <td style={{ textAlign: 'left', width: '15rem' }}>{check.status}</td>
                                    {/* <td style={{ textAlign: 'left' }}>{statisuser.approove}</td> */}
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

export default Check7;