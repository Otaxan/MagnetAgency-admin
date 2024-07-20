import React, {useState, useEffect} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { ReactComponent as KalenIcon } from '../images/kalen.svg'


const Requests8=()=>{
    useEffect(() =>{
        document.title = 'Вывод - запросы';
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
    const [selectedUser, setSelectedUser] = useState('');
    const handleUsersChange = (event) => {
        setSelectedUser(event.target.value);
    };

    // Request table
    const data = [
        { date: '09.05.2024 16:32', name: 'IOne123', user: '@Ivan345', amount: '1000$', status: 'Отправить' },
        { date: '09.05.2024 16:32', name: 'IOne123', user: '@Ivan345', amount: '1000$', status: 'Отправлен' },
        { date: '09.05.2024 16:32', name: 'IOne123', user: '@Ivan345', amount: '1000$', status: 'Отправлен' },
        { date: '09.05.2024 16:32', name: 'IOne123', user: '@Ivan345', amount: '1000$', status: 'Отправлен' },
        { date: '09.05.2024 16:32', name: 'IOne123', user: '@Ivan345', amount: '1000$', status: 'Отправлен' },

    ];

    return(
        <>
            <div className="container">
                <div className="statisusers">
                    <h2>Вывод средств</h2>
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
                        <div className="stattop" style={{ display: 'flex', alignItems: 'center', padding: '1px 5px', cursor: 'pointer' }}>
                            {/* <div style={{ marginRight: '10px' }}>▼</div> */}
                            <select
                            value={selectedUser}
                            onChange={handleUsersChange}
                            style={{ height: '1.8rem', fontSize: '14px', outline: 'none', cursor: 'pointer', minWidth: '10rem' }}
                            >
                            <option disabled value="">Пользователь</option>
                            <option value="Пользователь">Пользователь1</option>
                            <option value="Пользователь2">Пользователь2</option>
                            </select>
                        
                        </div>
                        
                    </div>
                    <div className="allusers" style={{ marginTop: '2rem', marginRight: '1rem', height: '70vh' }}>

                        <div className="users">
                            <h5>Офферы</h5>
                        </div>
                        <table className="tableall">
                            <thead>
                                <tr>
                                    <th style={{ width: '17rem', textAlign: 'left' }}>Дата и время запроса</th>
                                    <th style={{ textAlign: 'left' }}>IDПользователь</th>
                                    <th style={{ textAlign: 'left' }}>Телеграм</th>
                                    <th style={{ textAlign: 'left' }}>Сумма</th>
                                    <th style={{ textAlign: 'left', width: '15rem' }}>Статус</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index}>
                                    <td style={{ textAlign: 'left', width: '17rem' }}>{row.date}</td>
                                    <td style={{ textAlign: 'left', width: '15rem' }}>{row.name}</td>
                                    <td style={{ textAlign: 'left', width: '15rem' }}>{row.user}</td>
                                    <td style={{ textAlign: 'left', width: '15rem' }}>{row.amount}</td>
                                    <td style={{ textAlign: 'left', width: '15rem', padding: '14px 0px' }} className={row.status === 'Отправить' ? 'send' : row.status === 'Отправлен' ? 'sent' : ''}>
                                        {row.status === 'Отправить' ? (
                                            <Link className="statuslink" to="send_funds/">Отправить</Link>
                                            ) : (
                                            <h3 className="statush3">{row.status}</h3>
                                            
                                        )}
                                    </td>
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

export default Requests8;