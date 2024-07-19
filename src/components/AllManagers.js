import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../images/search.svg"


const AllManagers=()=>{
    const [managers, setManagers] = useState([
        { id: '1', email: 'alexxx@mail.com', telegram: '@alexmank' },
        { id: '2', email: 'john@example.com', telegram: '@john_doe' },
        { id: '3', email: 'jane@example.com', telegram: '@jane_doe' },
        { id: '4', email: 'smith@example.com', telegram: '@smith' },
        { id: '5', email: 'smith@example.com', telegram: '@smith' },
        { id: '6', email: 'smith@example.com', telegram: '@smith' },
        { id: '7', email: 'smith@example.com', telegram: '@smith' },
        { id: '8', email: 'smith@example.com', telegram: '@smith' },
        { id: '9', email: 'smith@example.com', telegram: '@smith' },
        { id: '10', email: 'smith@example.com', telegram: '@smith' },
        { id: '11', email: 'smith@example.com', telegram: '@smith' },
        { id: '12', email: 'smith@example.com', telegram: '@smith' },
        { id: '13', email: 'smith@example.com', telegram: '@smith' },




      ]);
    const [currentManager, setCurrentManager] = useState(null);
    
    const handleDeleteManager = (index) => {
        setManagers(managers.filter((_, i) => i !== index));
        if (currentManager && currentManager.index === index) {
          setCurrentManager(null);
        }
        };
    return(
        <>

            <div className="container">
                <h3>Менеджеры</h3>
                <div className="allusers">

                <div className="users">
                    <h5>Все менеджеры</h5>
                    <div>
                        <input type="text" className="search" placeholder="Поиск..." />
                        <Link className="linksearch"><SearchIcon /></Link>
                    </div>
                </div>
                <table className="tableall">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th style={{ textAlign: 'left' }}>E-mail</th>
                            <th style={{ textAlign: 'left' }}>Telegram</th>
                            <th style={{ textAlign: 'left' }}></th>
                            <th style={{ textAlign: 'left' }}>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {managers.map((manager, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td style={{ textAlign: 'left' }}>{manager.email}</td>
                            <td style={{ textAlign: 'left' }}>{manager.telegram}</td>
                            <td style={{ textAlign: 'left' }}></td>
                            <td className="tdicons" style={{ textAlign: 'left' }}>
                                <Link to="/add_user/" className="tdlinkchange">
                                    Редактировать
                                </Link>
                                <Link onClick={() => handleDeleteManager(index)} className="tdlinkchange">
                                    Удалить
                                </Link>
                                
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
                </div>

            </div>
        </>
    )
}


export default AllManagers;